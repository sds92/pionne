import React from 'react';
import { ProductListItem } from '.';
import styles from '../Products.module.css';
import { comments } from 'data/comments';

type ProductListProps = {
  data: IProduct[];
  comments: IComments[];
};

const SM = ({ data }: ProductListProps) => {
  return (
    <div className={`flex flex-col overflow-hidden`}>
      {data?.map((product, i) => {
        return <ProductListItem.SM key={`pr${i}`} product={product} i={i} comments={comments}/>;
      })}
      <></>
    </div>
  );
};

export default SM;
