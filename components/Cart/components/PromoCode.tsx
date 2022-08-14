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
    <div className={`${styles.promocode_top} w-full mt-[40px] px-4`}>
      <input className={`w-full rounded-sm border px-1 py-2`} type={`text`} placeholder={data.placeholder} />
    </div>
  );
};

export default PromoCode;
