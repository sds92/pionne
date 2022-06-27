import React from 'react';
import { BreadCrumbs } from 'components';
import styles from './Product.module.css';

export interface IProduct {
  data: {
    id: string;
    categories: string[];
    description: string;
    price: string[];
    title: string;
  };
}

const Product = ({ data }: IProduct) => {
  const breadCrumbs = [
    ['Главная', '/'],
    [`${data.title}`, `${data.id}`],
  ];
  return (
    <div className={`flex flex-col gap-4 py-8 px-4`}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={`relative aspect-[288/326] bg-blue-100`}></div>
      <div className={`${styles.product_title}`}>{data.title}</div>
      <div
        className={`${styles.product_description}`}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
      <div className={`flex w-full justify-between items-center py-4`}>
        <div className={`${styles.product_price}`}>{data.price}</div>
        <div className={`${styles.product_to_cart} rounded-full px-4 py-2 bg-black cursor-pointer`}>
          В корзину
        </div>
      </div>
    </div>
  );
};

export default Product;
