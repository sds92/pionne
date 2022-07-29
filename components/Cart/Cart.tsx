import React from 'react';
import { BreadCrumbs } from 'components';
import { CartItem } from './components';
import { ABOUT_PAGE, CART_PAGE } from 'configs/pageData';
import { useCart } from '../../store/useCart';

import styles from './Cart.module.css';

type CartProps = {
  products: IProduct[];
};

const Cart = ({ products }: CartProps) => {
  const { getCart, setCart, cart } = useCart();
  console.log('🚀 ~ file: Cart.tsx ~ line 11 ~ Cart ~ cart', cart);

  return (
    <div className={`px-4 py-10 flex flex-col gap-5`}>
      <BreadCrumbs data={CART_PAGE.breadCrumbs} />
      {cart.length > 0 &&
        cart?.map((cartItem, i) => {
          return (
            <CartItem
              product={products.find((item) => item.id === cartItem.id) || null}
              amount={cartItem.amount}
              key={`product${i}`}
            ></CartItem>
          );
        })}
    </div>
  );
};

export default Cart;
