import React from 'react';
import { ProductListItem } from '.';
import { comments } from 'data/comments';
import Separator from '../Separator';
import Comments from './Comments';
import styles from '../Products.module.css';

type ProductListProps = {
  data: IProduct[];
  comments: IComments[];
};

const SM = ({ data }: ProductListProps) => {
  return (
    <div className={`flex flex-col overflow-hidden`}>
      {data?.map((product, i) => {
        return (
          <React.Fragment key={`pr${i}`}>
            <ProductListItem.SM product={product} i={i} comments={comments} />;
            {i === 1 && <Separator id={1} />}
            {i === 3 && <Comments.SM comments={comments} products={data} />}
            {i === 5 && <Separator id={5} />}
          </React.Fragment>
        );
      })}
      <></>
    </div>
  );
};

export default SM;
