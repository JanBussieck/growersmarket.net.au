/* eslint-disable promise/catch-or-return */
import { Input, Textarea } from '@components/form-elements';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface DataProps {
  email_address: string;
  full_name: string;
  message: string;
  subject: string;
}

function ContactForm() {
  const { handleSubmit, register, errors } = useForm({ mode: 'onBlur' });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const router = useRouter();

  const onSubmit = async (data: DataProps, event: React.SyntheticEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    const { email_address, full_name, message, subject } = data;

    fetch('/api/post-contact-form', {
      method: 'POST',
      body: JSON.stringify({
        email_address,
        full_name,
        message,
        subject,
      }),
    })
      .then(() => router.push('/success'))
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-xl gap-4 mt-8"
    >
      <Input
        name="full_name"
        label="Full Name"
        register={register}
        errors={errors}
        className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus-within:ring-opacity-50"
      />
      <Input
        name="email_address"
        label="Email Address"
        type="email"
        register={register}
        errors={errors}
        className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus-within:ring-opacity-50"
      />
      <Input
        name="subject"
        label="Subject"
        register={register}
        errors={errors}
        className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus-within:ring-opacity-50"
      />
      <Textarea
        name="message"
        label="Message"
        register={register}
        errors={errors}
        className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus-within:ring-opacity-50"
      />
      <div>
        <button type="submit" disabled={isSubmitting} className="cta">
          Submit
        </button>
      </div>
    </form>
  );
}

export { ContactForm };
