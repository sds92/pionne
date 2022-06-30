import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import fs from 'fs';
import { MainBanner } from 'components';
import type { NextPage } from 'next';
import { ProductList } from 'components/Products/components';

export type Product = {
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
};

type HomePageProps = {
  products: Product[];
};

const Home: NextPage<HomePageProps> = ({ products }: HomePageProps) => {
  return (
    <>
      <MainBanner />
      <ProductList data={products} />
    </>
  );
};

export default Home;

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
  // const products = await JSON.parse(fs.readFileSync('data/products.ts', 'utf8'));
  const { products } = require('data/products.ts');
  // const res = transform(allPosts, categories, tags);
  return {
    props: {
      products,
    },
  };
};
