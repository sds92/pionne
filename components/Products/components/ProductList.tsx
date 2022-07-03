import React from 'react';
import { ProductListItem } from './';
import styles from '../Products.module.css';
import { comments } from 'data/comments';

type ProductListProps = {
  data: IProduct[];
  comments: IComments[];
};

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className={`flex flex-col`}>
      {data?.map((product, i) => {
        return <ProductListItem key={`pr${i}`} product={product} i={i} comments={comments}/>;
      })}
      <></>
    </div>
  );
};

export default ProductList;
