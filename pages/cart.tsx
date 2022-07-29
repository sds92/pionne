import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import { Cart } from 'components';

type CartPageProps ={
  products: IProduct[];
}

const CartPage: NextPage<CartPageProps> = ({ products }: CartPageProps) => {
  return (
    <>
      <Cart products={products}/>
    </>
  );
};

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

export default CartPage;
