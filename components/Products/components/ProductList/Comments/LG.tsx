import { Icons } from 'components/Svg';
import Image from 'next/image';
import React from 'react';
import styles from '../../../Products.module.css';

type Props = {
  comments: IComments[];
  products: IProduct[];
};

const LG = ({ comments, products }: Props) => {
  return (
    <div className={`flex flex-col ml-[calc((100%-1278px)/2)] h-[calc(100vh-122px)] justify-center`}>
      <div className={`${styles.comments_title_lg}`}>Ваши отзывы</div>
      <div className={`flex mt-[55px]`}>
        {comments.map((comment, i) => {
          if (i === 2)
            return (
              <div key={`allcomments`} className={`mt-auto flex items-center`}>
                <div className={`cursor-pointer mr-[20px]`}>Еще отзывы</div>
                <div className={`cursor-pointer`}>
                  <Icons.ArrowRight />
                </div>
              </div>
            );
          if (i > 2) return null;
          return (
            <div key={`comment${i}`} className={`w-1/3 pr-[125px]`}>
              <div className={`${styles.comments_autor_lg}`}>{comment.autor}</div>
              <div className={`${styles.comments_text_lg} mt-[22px]`}>{comment.text}</div>
              <div
                className={`flex h-[63px] min-w-[226px] w-[80%] mt-[20px] items-center bg-white rounded-[15px] p-[8px] border border-[#F0F2F8]`}
              >
                <div className={`w-[50px] h-[50px] rounded-[15px] overflow-hidden relative flex-none`}>
                  <Image
                    alt={``}
                    src={products.find(({ id }) => id === comment.product)?.images[0] || ''}
                    layout={`fill`}
                    objectFit={`cover`}
                  />
                </div>
                <div className={`${styles.comments_product_title_lg} ml-[8px] `}>
                  {products.find(({ id }) => id === comment.product)?.shortTitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LG;
