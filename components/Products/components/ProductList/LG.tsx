import React from 'react';
import { ProductListItem } from '.';
import styles from '../Products.module.css';
import { comments } from 'data/comments';
import { PRODUCTS } from 'configs/products';
import { InLineCategory, Item } from './InLineCategory';
import Separator from '../Separator';
import Comments from './Comments';

type Props = {
  data: IProduct[];
  comments: IComments[];
};

const LG = ({ data }: Props) => {
  const filteredByCategory = data.reduce((pre, cur) => {
    if (!pre[cur.category.toLocaleLowerCase()]) {
      pre[cur.category.toLocaleLowerCase()] = [];
    }
    pre[cur.category.toLocaleLowerCase()].push(cur);
    return pre;
  }, {} as { [key: string]: IProduct[] });

 let count = 0;

  return (
    <div className={`flex flex-col overflow-hidden`}>
      {data?.map((product, i) => {
        if (product.category.toLocaleLowerCase() === PRODUCTS.inLineCategory.toLocaleLowerCase()) return null;
        count += 1;
        return (
          <>
            <ProductListItem.LG key={`pr${i}`} product={product} i={i} comments={comments} />
            {count === 1 && (
              <>
                <InLineCategory title={PRODUCTS.inLineCategory}>
                  {filteredByCategory[PRODUCTS.inLineCategory].map((product, ii) => {
                    return <Item key={`product${ii}`} product={product} />;
                  })}
                </InLineCategory>
                <Separator id={3} />
              </>
            )}
            {count === 3 && <Comments.LG comments={comments} products={data} />}
            {count === 5 && <Separator id={4} />}
          </>
        );
      })}
      {/* {Object.entries(filteredByCategory).map(([title, products], i) => {
        return <div key={`category${i}`}>{title}</div>;
      })} */}
      <></>
    </div>
  );
};

export default LG;
