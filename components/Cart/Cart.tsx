import React from 'react';
import { BreadCrumbs } from 'components';
import { ABOUT_PAGE, CART_PAGE } from 'configs/pageData';
import { useCart } from '../../store/useCart';
import styles from './Cart.module.css';

type CartProps = {};

const Cart = ({}: CartProps) => {
  const { getCart, setCart, cart } = useCart();
  // const cart = getCart()
  console.log('🚀 ~ file: Cart.tsx ~ line 12 ~ Cart ~ cart', cart);
  const _cart = cart;
  console.log('🚀 ~ file: Cart.tsx ~ line 17 ~ const_cart=cart.reduce ~ _cart', _cart);
  return (
    <div className={`px-4 py-10 flex flex-col gap-5`}>
      <BreadCrumbs data={CART_PAGE.breadCrumbs} />
      {cart.length > 0 &&
        cart?.map((product, i) => {
          return <div key={`product${i}`}>{product.id}</div>;
        })}
    </div>
  );
};

export default Cart;
