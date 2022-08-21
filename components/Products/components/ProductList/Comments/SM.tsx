import MobileSlider from 'components/Slider/MobileSlider';
import Image from 'next/image';
import React from 'react';
import styles from '../../../Products.module.css';

type Props = {
  comments: IComments[];
  products: IProduct[];
};

const SM = ({ comments, products }: Props) => {
  return (
    <div className={`relative w-full my-4 px-4`}>
      <div className={`w-full flex flex-col z-10 py-10`}>
        <div className={`${styles.comments_title} mb-[27px] w-full`}>Ваши отзывы</div>
        {
          <MobileSlider>
            {comments?.map((comment, i) => {
              return (
                <div className={`w-screen`} key={`comment${i}`}>
                  <div className={`${styles.comments_autor} py-2`}>{comment.autor}</div>
                  <div className={`${styles.comments_text} py-1`}>{comment.text}</div>
                  <div
                    className={`flex h-[63px] w-[226px] mt-[20px] items-center bg-white rounded-[15px] p-[8px] border border-[#F0F2F8]`}
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
              )
            })}
          </MobileSlider>
        }
      </div>
    </div>
  );
};

export default SM;
