import { UI } from 'components';
import React from 'react';
import { useCart } from 'store/useCart';
import { addToCart } from 'utils';

type Props = {
  product: IProduct;
};

const Item = ({ product }: Props) => {
  const { cart, setCart } = useCart();
  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };
  return (
    <div className={`flex flex-col`}>
      <div></div>
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

export default Item;
