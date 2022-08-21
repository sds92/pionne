import React from 'react';
import { ProductListItem } from '.';
import styles from '../Products.module.css';
import { comments } from 'data/comments';
import { PRODUCTS } from 'configs/products';
import { InLineCategory, InLineCategoryItem } from './InLineCategory';
import Separator from '../Separator';
import Comments from './Comments';

type Props = {
  data: IProduct[];
  comments: IComments[];
};

const LG = ({ data }: Props) => {
  const [firstLast, setFirstLast] = React.useState<{ first: boolean; last: boolean | undefined }>({
    first: true,
    last: undefined,
  });
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
          <React.Fragment key={`pr${i}`}>
            <ProductListItem.LG product={product} i={i} comments={comments} />
            {count === 1 && (
              <>
                <InLineCategory
                  title={PRODUCTS.inLineCategory}
                  l={filteredByCategory[PRODUCTS.inLineCategory].length}
                  arrowBlock={firstLast}
                  
                >
                  {filteredByCategory[PRODUCTS.inLineCategory].map((product, ii) => {
                    return (
                      <InLineCategoryItem
                        key={`product${ii}`}
                        product={product}
                        pos={ii}
                        l={filteredByCategory[PRODUCTS.inLineCategory].length}
                        setFirstLast={setFirstLast}
                      />
                    );
                  })}
                </InLineCategory>
                <Separator id={3} />
              </>
            )}
            {count === 3 && <Comments.LG comments={comments} products={data} />}
            {count === 5 && <Separator id={4} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LG;
