import React from 'react';
import styles from '../UI.module.css';

type Props = {
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  lg?: boolean;
};

const AddtoCart = ({ bgColor, textColor, onClick, lg }: Props) => {
  return (
    <div
      style={{ background: bgColor || '#000' }}
      className={`${
        lg
          ? styles.add_to_cart_lg_text + ` w-[185px] h-[50px]`
          : styles.add_to_cart_sm_text + ` w-[195px] h-[46px]`
      } flex items-center justify-center border border-black rounded-full uppercase cursor-pointer ${
        textColor ? textColor : 'text-white'
      }`}
      onClick={onClick && onClick}
    >
      В корзину
    </div>
  );
};

export default AddtoCart;
