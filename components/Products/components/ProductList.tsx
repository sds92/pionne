import Link from 'next/link';
import React from 'react';
import { IData } from '../Products';
import styles from '../Products.module.css';

const ProductList = ({ data }: IData) => {
  return (
    <div className={`flex flex-col`}>
      {data?.map((product, i) => {
        return (
          <div key={`product${i}`} className={`flex flex-col p-4 gap-4`}>
            <Link href={`products/${product.id}`} passHref>
              <div className={`relative w-full aspect-[280/366] bg-blue-100 rounded-[50px]`}></div>
            </Link>
            <Link href={`products/${product.id}`} passHref>
              <div className={`${styles.product_title}`}>{product.title}</div>
            </Link>
            <div
              className={`${styles.product_description}`}
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className={`flex w-full justify-between items-center`}>
              <div className={`${styles.product_price}`}>{product.price}</div>
              <div className={`${styles.product_to_cart} rounded-full px-4 py-2 bg-black cursor-pointer`}>
                В корзину
              </div>
            </div>
          </div>
        );
      })}
      <></>
    </div>
  );
};

export default ProductList;
