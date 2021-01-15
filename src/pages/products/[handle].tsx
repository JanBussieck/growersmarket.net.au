import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { HiChevronRight, HiOutlineShoppingCart } from 'react-icons/hi';

import {
  getAllProducts,
  getProduct,
  getSiteNavigation,
  getSiteSettings,
  getTopSelling,
} from '@lib/index';
import { Carousel, Container, HorizontalPadding } from '@components/index';

function ProductPage({ product, topSelling }) {
  // Number of items to add to cart
  const [quantity, setQuantity] = React.useState(1);

  // Variant to add to cart
  const variantId = product.variants.edges[0].node.id;

  // Increment quantity
  function decrement() {
    return setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
  }

  // Decrement quantity
  function increment() {
    return setQuantity((prevQty) => prevQty + 1);
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <Carousel />
      <Breadcrumbs
        productType={product.productType}
        collection={product.collections?.edges?.[0]?.node.title}
        title={product.title}
        handle={product.handle}
      />
      <Container>
        <div className="relative grid lg:grid-cols-3">
          <div className="py-16 lg:col-span-2">
            <HorizontalPadding>
              <div className="grid gap-12 lg:grid-cols-3">
                <div>
                  <h1 className="text-2xl font-bold">{product.title}</h1>
                  {product.images?.edges?.[0] && (
                    <div className="mt-4">
                      <Image
                        width={600}
                        height={400}
                        layout="responsive"
                        src={product.images.edges[0].node.originalSrc}
                        alt={product.images.edges[0].node.altText}
                        className="object-cover mx-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-2">
                  <div className="text-2xl">
                    <span className="font-bold">
                      $
                      {Number(
                        product.priceRange?.minVariantPrice?.amount
                      ).toFixed(2)}{' '}
                    </span>
                    <span className="uppercase"> / each</span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                    className="mt-4 prose border-t max-w-prose border-gray-dark"
                  />
                  <div className="flex justify-between mt-12">
                    <span className="relative z-0 inline-flex rounded-full">
                      <button
                        type="button"
                        onClick={decrement}
                        className="relative inline-flex items-center py-2 pl-3 pr-2 text-white rounded-l-full bg-green-dark focus:z-10 focus:outline-none focus:ring-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                      <span className="relative inline-flex items-center w-12 px-4 py-2 -ml-px text-sm font-medium text-gray-700 border border-transparent bg-gray-light hover:bg-gray-50 focus:z-10 focus:outline-none">
                        <span className="flex-1 font-bold text-center text-green-dark">
                          {quantity}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={increment}
                        className="relative inline-flex items-center py-2 pl-2 pr-3 -ml-px text-sm font-medium text-white border border-transparent rounded-r-full bg-green-dark focus:z-10 focus:outline-none focus:ring-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </span>

                    <button
                      className="inline-flex items-center justify-center space-x-3 cta"
                      // onClick={addToCart}
                    >
                      <span>Add to Cart</span>
                      <HiOutlineShoppingCart className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full pt-12 mt-12 border-t border-gray-dark">
                <h2 className="text-xl font-bold">More info</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.descriptionHtml,
                  }}
                  className="prose"
                />
              </div>
            </HorizontalPadding>
          </div>
          <TopSellingProducts topSelling={topSelling} />
        </div>
        <DeliverySchedule />
      </Container>
    </>
  );
}

function Breadcrumbs({ productType, collection, title, handle }) {
  return (
    <nav className="flex py-2 text-white bg-green-dark" aria-label="Breadcrumb">
      <HorizontalPadding>
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <Link href="/">
                <a className="text-sm font-medium">Home</a>
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <HiChevronRight className="flex-shrink-0 w-5 h-5" />
              {/* // TODO: Fix this link */}
              <Link href="/">
                <a className="ml-4 text-sm font-medium">{productType}</a>
              </Link>
            </div>
          </li>
          {collection && (
            <li>
              <div className="flex items-center">
                <HiChevronRight className="flex-shrink-0 w-5 h-5" />
                {/* // TODO: Fix this link */}
                <Link href="/">
                  <a aria-current="page" className="ml-4 text-sm font-medium">
                    {collection}
                  </a>
                </Link>
              </div>
            </li>
          )}
          <li>
            <div className="flex items-center">
              <HiChevronRight className="flex-shrink-0 w-5 h-5" />
              <Link href={`/products/${handle}`}>
                <a aria-current="page" className="ml-4 text-sm font-bold">
                  {title}
                </a>
              </Link>
            </div>
          </li>
        </ol>
      </HorizontalPadding>
    </nav>
  );
}

function TopSellingProducts({ topSelling }) {
  return (
    <div className="bg-gray-light">
      <div className="py-16 lg:sticky lg:top-44 lg:max-w-lg">
        <HorizontalPadding>
          <h2 className="text-2xl font-bold">Our Top Selling Fruit</h2>
          <ul className="grid gap-8 mt-4">
            {topSelling.edges.map(({ node }) => (
              <li key={node.id} className="grid grid-cols-2 gap-4">
                <Link href={node.handle}>
                  <a className="block bg-white">
                    <Image
                      width={480}
                      height={360}
                      layout="responsive"
                      src={node.media.edges[0].node.previewImage.transformedSrc}
                      alt=""
                      className="object-cover"
                    />
                  </a>
                </Link>
                <div className="flex flex-col">
                  <div className="font-bold">
                    <h3 className="text-sm">{node.title}</h3>
                    <div className="text-2xl">
                      <sup className="text-sm">$</sup>
                      <span>
                        {Number(node.priceRange.minVariantPrice.amount).toFixed(
                          2
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 mt-auto">
                    {/* // TODO: Make these buttons work */}
                    <button className="inline-flex items-center justify-center px-6 py-1 space-x-3 text-sm whitespace-nowrap cta">
                      <span>Add to Cart</span>
                      <HiOutlineShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-16 text-center">
            {/* // TODO: make this link work */}
            <Link href="/">
              <a className="inline-block px-16 py-2 text-sm font-bold border rounded-full text-green-dark border-green-dark">
                See More
              </a>
            </Link>
          </div>
        </HorizontalPadding>
      </div>
    </div>
  );
}

function DeliverySchedule() {
  return (
    <HorizontalPadding>
      <div className="relative py-8">
        <HorizontalPadding variant={HorizontalPadding.variant.BLACK}>
          <Image
            src="https://burst.shopifycdn.com/photos/red-apple-against-white-background.jpg?width=1472&amp;format=pjpg&amp;exif=0&amp;iptc=0"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
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
                <a className="text-white bg-green-dark cta">Find Out More</a>
              </Link>
            </div>
          </div>
        </HorizontalPadding>
      </div>
    </HorizontalPadding>
  );
}

async function getStaticPaths() {
  const products = await getAllProducts();
  return {
    paths: products.map(({ node }) => `/products/${node.handle}`),
    fallback: false,
  };
}

async function getStaticProps({ params }) {
  const product = await getProduct({ handle: params.handle });
  const topSelling = await getTopSelling({
    query: `product_type:${product.productType}, available_for_sale:true`,
  });
  const siteNavigation = await getSiteNavigation();
  const siteSettings = await getSiteSettings();

  return {
    props: {
      product,
      topSelling,
      siteNavigation,
      siteSettings,
    },
    revalidate: 60,
  };
}

export { ProductPage as default, getStaticProps, getStaticPaths };
