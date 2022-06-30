import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Products } from 'components';
import { useFetch } from 'lib/useFetch';
import { API } from 'configs/app';
import { transform } from 'utils/transform';
import { fakeAllPosts, fakeCategories, fakeTags } from 'fakedata';
import fs from 'fs';

export type ProductsPageProps = {
  products: {
    id: number;
    category: string;
    images: string[];
    title: string;
    meta: {
      description: string;
      keywords: string;
    };
    price: number;
    info: {
      description: string;
      v: string;
      special: string[];
      misc: {
        title: string;
        value: string;
      }[];
    };
  }[];
};

const ProductsPage: NextPage<ProductsPageProps> = ({ products }: ProductsPageProps) => {
  return (
    <>
      <Products data={products} />
    </>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  // const allPosts: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/pionne_products')
  // .then((res) => res.json())
  // .catch((err) => fakeAllPosts);
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
  // const res = transform(allPosts, categories, tags);
  return {
    props: {
      products,
    },
  };
};
