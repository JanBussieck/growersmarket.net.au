import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';

import {
  Container,
  HorizontalPadding,
  ProductGrid,
  ProductCard,
} from '@components/index';
import { shopifyClient } from '@lib/shopify-client';

function HomePage({ products }) {
  return (
    <>
      <NextSeo title="Home" />
      <Slides />
      <div className="grid gap-12 pb-12 lg:grid-cols-2">
        <ThisWeeksSpecials products={products.edges} />
        <TopSellingFruit products={products.edges} />
        <div className="col-span-full">
          <Container>
            <div className="grid gap-12 mx-auto lg:grid-cols-2">
              <TopSellingVegetables products={products.edges} />
              <TopSellingBoxes products={products.edges} />
            </div>
            <div className="grid gap-12 mt-12 lg:grid-cols-5">
              <FrequentlyAskedQuestions />
              <DeliverySchedule />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

// TODO: source this data from Sanity
const slides = [
  {
    heading: 'Get Christmas Ready with us',
    cta: {
      label: 'Shop Christmas Essentials now',
      slug: '/',
    },
    backgroundImage: '',
  },
];

function Slides() {
  return (
    <ul>
      {slides.map((slide) => (
        <li key={slide.heading} className="relative py-12 bg-gray-light">
          <Container as="article">
            <HorizontalPadding variant={HorizontalPadding.variant.GRAY}>
              <div className="max-w-lg">
                <h2 className="text-5xl italic text-green-dark">
                  <span className="inline-block max-w-prose">
                    {slide.heading}
                  </span>
                </h2>
                <p className="mt-8">
                  <Link href={slide.cta.slug}>
                    <a className="cta">{slide.cta.label}</a>
                  </Link>
                </p>
              </div>
            </HorizontalPadding>
          </Container>
        </li>
      ))}
    </ul>
  );
}

// TODO: Set up 'Specials' collection in Shopify
function ThisWeeksSpecials({ products }) {
  return (
    <ProductGrid heading="This week's specials">
      {products.map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </ProductGrid>
  );
}

// TODO: Write page query to get top selling fruit
function TopSellingFruit({ products }) {
  return (
    <ProductGrid
      heading="Our Top Selling Fruit"
      variant={ProductGrid.variant.GRAY}
    >
      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </ProductGrid>
  );
}

// TODO: Write page query to get top selling vegetables
function TopSellingVegetables({ products }) {
  return (
    <ProductGrid
      heading="Our Top Selling Vegetables"
      variant={ProductGrid.variant.GRAY}
      columns={2}
    >
      {products.slice(0, 2).map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </ProductGrid>
  );
}

// TODO: Write page query to get top selling boxes
function TopSellingBoxes({ products }) {
  return (
    <ProductGrid
      heading="Our Top Selling Vegetables"
      variant={ProductGrid.variant.GRAY}
      columns={2}
    >
      {products.slice(0, 2).map((product) => (
        <ProductCard key={product.node.id} product={product} />
      ))}
    </ProductGrid>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <article className="grid lg:col-span-2">
      <HorizontalPadding variant={HorizontalPadding.variant.GREEN}>
        <div className="py-8">
          <h2 className="space-y-3">
            <span className="inline-block px-4 -mx-4 text-3xl font-bold leading-loose uppercase text-green-dark bg-yellow">
              Frequently Asked
            </span>
            <br />
            <span className="inline-block px-4 -mx-4 text-3xl font-bold leading-loose uppercase text-green-dark bg-yellow">
              Questions
            </span>
          </h2>
          <h3 className="mt-5 font-bold leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </h3>
          <div className="mt-5 prose text-white">
            <dl className="space-y-5">
              <div>
                <dt className="font-bold">1. Lorem ipsum dolor sit?</dt>
                <dd>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat....{' '}
                  <a href="#" style={{ color: '#ffffff' }} className="italic">
                    read more
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold">
                  2. Lorem ipsum est sit dolor sed magna sit?
                </dt>
                <dd>
                  Ut enim ad minim veniam, quis nostrud exercitation ullanco
                  laboris nisi ut aliquip ex ea commodo consequat....{' '}
                  <a href="#" style={{ color: '#ffffff' }} className="italic">
                    read more
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-5">
            <Link href="/faq/">
              <a className="bg-white cta text-green-dark">More FAQ's</a>
            </Link>
          </div>
        </div>
      </HorizontalPadding>
    </article>
  );
}

function DeliverySchedule() {
  return (
    <article className="relative grid items-end lg:col-span-3">
      <Image
        src="https://burst.shopifycdn.com/photos/red-apple-against-white-background.jpg?width=1000&amp;format=pjpg&amp;exif=0&amp;iptc=0"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <HorizontalPadding>
        <div className="relative py-8">
          <h2 className="space-y-3">
            <span className="inline-block px-4 text-3xl font-bold leading-loose uppercase text-green-dark bg-yellow">
              Check Out Our
            </span>
            <br />
            <span className="inline-block px-4 text-3xl font-bold leading-loose uppercase text-green-dark bg-yellow">
              Delivery Schedule
            </span>
          </h2>
          <div className="mt-5">
            <Link href="/faq/">
              <a className="cta">Find Out More</a>
            </Link>
          </div>
        </div>
      </HorizontalPadding>
    </article>
  );
}

async function getStaticProps() {
  const { data } = await shopifyClient.query({
    query: gql`
      query GetProducts {
        products(first: 8) {
          edges {
            node {
              handle
              id
              images(first: 250) {
                edges {
                  node {
                    altText
                    id
                    originalSrc
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              title
              variants(first: 250) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
}

export { HomePage as default, getStaticProps };
