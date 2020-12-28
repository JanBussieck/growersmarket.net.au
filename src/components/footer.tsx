import Link from 'next/link';
import Image from 'next/image';

import { config } from '../../config';
import { ContactForm } from './contact-form';

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-light">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-7 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <a className="block mx-auto max-w-max">
                <Image
                  src="/logo.png"
                  width={200}
                  height={107}
                  layout="intrinsic"
                  alt="Growers Market"
                  className="drop-shadow"
                />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 xl:mt-0 xl:col-span-3">
            <div className="col-span-2 sm:col-span-3">
              <h3 className="text-xl font-bold tracking-wider text-green-dark">
                Links
              </h3>
            </div>
            <div>
              <h4 className="font-bold tracking-wider text-green-dark">
                Categories
              </h4>
              <ul className="mt-4 space-y-4">
                {config.footerMenu.categories.map((navItem) => (
                  <li key={navItem.label}>
                    <a
                      href={navItem.slug}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {navItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:mt-12 md:mt-0">
              <div>
                <h4 className="font-bold tracking-wider text-green-dark">
                  Information
                </h4>
                <ul className="mt-4 space-y-4">
                  {config.footerMenu.information.map((navItem) => (
                    <li key={navItem.label}>
                      <a
                        href={navItem.slug}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {navItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12">
                <h4 className="font-bold tracking-wider text-green-dark">
                  Follow Us
                </h4>
                <ul className="mt-4 space-y-4">
                  {config.footerMenu.followUs.map((navItem) => (
                    <li key={navItem.label}>
                      <a
                        href={navItem.slug}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {navItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sm:mt-12 md:mt-0">
              <h4 className="font-bold tracking-wider text-green-dark">
                My Account
              </h4>
              <ul className="mt-4 space-y-4">
                {config.footerMenu.myAccount.map((navItem) => (
                  <li key={navItem.label}>
                    <a
                      href={navItem.slug}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {navItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-8 mt-12 xl:mt-0 xl:col-span-3">
            <div className="w-full max-w-2xl mx-auto">
              <h2 className="text-xl font-bold tracking-wider text-green-dark">
                Contact Us
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p>
            <a
              href="https://www.phirannodesigns.com.au"
              className="text-base text-gray-400 hover:text-gray-900"
            >
              Website by Phiranno Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
