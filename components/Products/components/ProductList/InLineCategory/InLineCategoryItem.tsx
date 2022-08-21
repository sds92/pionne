import { UI } from 'components';
import Image from 'next/image';
import React from 'react';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';

type Props = {
  product: IProduct;
};

const InLineCategoryItem = ({ product }: Props) => {
  const { cart, setCart } = useStore();
  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };
  return (
    <div className={`flex flex-col w-[338px] mr-[144px]`}>
      <div className={`relative w-[338px] h-[330px] rounded-[30px] overflow-hidden`}>
        <Image alt={``} src={product.images[0]} layout={`fill`} objectFit={`cover`} />
      </div>
      <div>{product.title}</div>
      <div>{product.info.description}</div>
      <div className={`flex`}>
        <div>{product.price}</div>
        <UI.Buttons.AddToCart
          onClick={handleAddToCart}
          bgColor={`transparent`}
          textColor={`black`}
          lg={true}
        />
      </div>
    </div>
  );
};

export default InLineCategoryItem;
