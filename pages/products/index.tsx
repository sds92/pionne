import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Products } from 'components';
import { useFetch } from 'lib/useFetch';
import { API } from 'configs/app';
import { transform } from 'utils/transform';
import { fakeAllPosts, fakeCategories, fakeTags } from 'fakedata';

const ProductsPage: NextPage = (props) => {
  // @ts-ignore
  const data = props.res;
  return (
    <>
      <Products data={data} />
    </>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/products_pionne')
    .then((res) => res.json())
    .catch((err) => fakeAllPosts);
  const categories: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/categories')
    .then((res) => res.json())
    .catch((err) => fakeCategories);
  const tags: any = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/tags')
    .then((res) => res.json())
    .catch((err) => fakeTags);
  const res = transform(allPosts, categories, tags);
  return {
    props: {
      res,
      allPosts,
      categories,
      tags,
    },
  };
};
