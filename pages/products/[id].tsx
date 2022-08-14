import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from 'components';
import { transform } from 'utils/transform';
import { fakeAllPosts, fakeCategories, fakeTags } from 'fakedata';
import fs from 'fs';


type ProductPageProps = {
  product: IProduct;
};

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      <Product data={product} />
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // const allPosts = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/products_pionne').then(
  //   (res) => res.json()
  // ).catch((err) => fakeAllPosts);
  const { products } = require('data/products.ts');
  const paths = products.map((item: any) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const allPosts: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/products_pionne')
  //   .then((res) => res.json())
  //   .catch((err) => fakeAllPosts);
  // const categories: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/categories')
  //   .then((res) => res.json())
  //   .catch((err) => fakeCategories);
  // const tags: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/tags')
  //   .then((res) => res.json())
  //   .catch((err) => fakeTags);
  // const allPosts = fakeAllPosts;
  // const categories = fakeCategories;
  // const tags = fakeTags;
  const { products } = require('data/products.ts');
  // const res = transform(allPosts, categories, tags).find((item: any) => item.id.toString() === params?.id);
  return {
    props: {
      product: products.find((item: any) => item.id === params?.id),
    },
  };
};
