import Image from 'next/image';
import React from 'react';
import { useStore } from 'store/useStore';
import styles from './Popups.module.css';

type Props = {
  product: IProduct | null;
};

const AddToCart = ({ product }: Props) => {
  const { cart } = useStore();
  console.log('🚀 ~ file: AddToCart.tsx ~ line 11 ~ AddToCart ~ cart', cart);
  return (
    product && (
      <div className={`rounded-[15px] py-[23px] px-[21px] bg-black text-white flex flex-col`}>
        <div className={`flex items-center`}>
          <div className={`w-[50px] h-[50px] relative overflow-hidden rounded-[15px]`}>
            <Image alt={``} src={product.images[0] || ''} layout={`fill`} objectFit={`cover`} />
          </div>
          <div className={`${styles.title} ml-[14px]`}>{product.shortTitle}</div>
        </div>
        <div className={`${styles.add_to_cart_text} flex items-center justify-between mt-[14px]`}>
          <div>Добавлено в корзину</div>
          <div>Всего ({cart.find((item) => item.id === product.id)?.amount})</div>
        </div>
      </div>
    )
  );
};

export default AddToCart;
