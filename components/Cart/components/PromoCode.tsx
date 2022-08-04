import React from 'react';
import styles from '../Cart.module.css';
type Props = {
  data: {
    title: string;
    placeholder: string;
    onError: string;
  };
};

const PromoCode = ({ data }: Props) => {
  return (
    <div className={`${styles.promocode_top}`}>
      <input type={`text`} placeholder={data.placeholder} />
    </div>
  );
};

export default PromoCode;
