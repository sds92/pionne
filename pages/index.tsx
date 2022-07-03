import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { MainBanner, Products } from 'components';
import type { NextPage } from 'next';
import useWindowSize from 'utils/useWindowSize';

type HomePageProps = {
  products: IProduct[];
  comments: IComments[];
};

const Home: NextPage<HomePageProps> = ({ products, comments }: HomePageProps) => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 600 ? <MainBanner.SM /> : <MainBanner.LG />}
      <Products data={products} comments={comments} />
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
  const { comments } = require('data/comments.ts');
  return {
    props: {
      products,
      comments,
    },
  };
};
