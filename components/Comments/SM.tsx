import Image from 'next/image';
import React from 'react';
import styles from './Comments.module.css';

type Props = {
  comment: IComments;
  product: IProduct;
};

const SM = ({ comment, product }: Props) => {
  return (
    <div className={`w-full flex flex-col`}>
      <div className={`${styles.comments_autor} py-2`}>{comment.autor}</div>
      <div className={`${styles.comments_text} py-1`}>{comment.text}</div>
      <div className={`flex h-[63px] mt-[20px] items-center bg-white rounded-[15px] p-[8px] border border-[#F0F2F8]`}>
        <div className={`w-[50px] h-[50px] rounded-[15px] overflow-hidden relative`}>
          <Image alt={``} src={product.images[0]} layout={`fill`} objectFit={`cover`} />
        </div>
        <div className={`${styles.product_card_title} ml-[8px] `}>{product.shortTitle}</div>
      </div>
    </div>
  );
};

export default SM;
