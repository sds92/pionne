import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from 'components';
import { transform } from 'utils/transform';

const ProductPage: NextPage = (props) => {
  // @ts-ignore
  const data = props.res;
  return (
    <>
      <Product data={data} />
    </>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/products_pionne').then(
    (res) => res.json()
  );

  const paths = allPosts.map((item: any) => {
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
  const allPosts = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/products_pionne').then(
    (res) => res.json()
  );
  console.log("🚀 ~ file: [id].tsx ~ line 40 ~ constgetStaticProps:GetStaticProps= ~ allPosts", allPosts)
  const categories = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/categories').then((res) =>
    res.json()
  );
  console.log("🚀 ~ file: [id].tsx ~ line 44 ~ constgetStaticProps:GetStaticProps= ~ categories", categories)
  const tags = await fetch('http://localhost/pionne/wordpress/wp-json/wp/v2/tags').then((res) => res.json());
  console.log("🚀 ~ file: [id].tsx ~ line 46 ~ constgetStaticProps:GetStaticProps= ~ tags", tags)
  const res = transform(allPosts, categories, tags).find((item: any) => item.id.toString() === params?.id);
  return {
    props: {
      res,
    },
  };
};
