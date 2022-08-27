import React from 'react';
import { BreadCrumbs, Forms, PromoBlocks, UI } from 'components';
import { CartItem, Delivery, PromoCode } from './components';
import { CART_PAGE } from 'configs/pageData';
import { useStore } from '../../store/useStore';

import styles from './Cart.module.css';

type CartProps = {
  products: IProduct[];
};

type CartState = {
  agreement: boolean;
  delivery: number;
  formData: {};
};

const Cart = ({ products }: CartProps) => {
  const { getCart, setCart, cart } = useStore();

  const [orderState, setOrderState] = React.useState<string>('preorder');
  const [isActive, setIsActive] = React.useState<CartState>({
    agreement: false,
    delivery: 0,
    formData: {},
  });

  const [discount, setDiscount] = React.useState<number>(0);

  const breadcrumbs = () => {
    switch (orderState) {
      case 'preorder':
        if (CART_PAGE.breadCrumbs[2]) {
          CART_PAGE.breadCrumbs.pop();
        }
        return CART_PAGE.breadCrumbs;
      case 'order': {
        CART_PAGE.breadCrumbs[2] = CART_PAGE.addBreadCrumbs;
        return CART_PAGE.breadCrumbs;
      }
      default: {
        return CART_PAGE.breadCrumbs;
      }
    }
  };

  const handleSendForm = (cb: () => void) => {
    cb();
  };

  const finalSum = cart.reduce((pre, cur) => {
    const price = products.find((item) => item.id === cur.id)?.price || 0;
    return pre + cur.amount * price;
  }, 0);

  return (
    <div className={`py-10 flex flex-col bg-[#FAFAFA]`}>
      <div className={`px-4 self-start mb-[20px]`}>
        <BreadCrumbs data={breadcrumbs()} />
      </div>
      {cart.length === 0 && CART_PAGE.cart.empty}
      {cart.length > 0 && (
        <>
          {cart?.map((cartItem, i) => {
            return (
              <CartItem
                product={products.find((item) => item.id === cartItem.id) || null}
                amount={cartItem.amount}
                key={`product${i}`}
              ></CartItem>
            );
          })}
          {orderState === 'preorder' && <PromoCode data={CART_PAGE.cart.promoCode} />}
          <div className={`flex justify-between px-4 items-center mt-[27px]`}>
            <div className={`${styles.total_price_title}`}>{CART_PAGE.cart.sum}</div>
            <div className={`${styles.total_price_value}`}>
              {finalSum > 0 && finalSum - finalSum * discount} руб
            </div>
          </div>
        </>
      )}
      {orderState === 'preorder' && (
        <div className={`px-4 pt-[15px]`}>
          <UI.Button text={CART_PAGE.cart.buttons.order} onClick={() => setOrderState('order')} />
          <PromoBlocks.Society />
        </div>
      )}
      {orderState === 'order' && (
        <div className={`px-4`}>
          <Delivery data={CART_PAGE.delivery} />

          <Forms.OrderForm data={CART_PAGE.orderForm} />
          <div className={`${styles.promocode_bottom} flex`}>
            <div>{CART_PAGE.cart.promoCode.title}</div>
            <div></div>
          </div>
          <div className={`${styles.sum_discount} flex text-[#A9A9A9]`}>
            <div>{CART_PAGE.cart.sale}</div>
            <div></div>
          </div>
          <div className={`${styles.sum_discount} flex text-black`}>
            <div>{CART_PAGE.cart.sum}</div>
            <div></div>
          </div>
          <UI.Button text={CART_PAGE.cart.buttons.send} onClick={() => setOrderState('payment')} />
        </div>
      )}
    </div>
  );
};

export default Cart;
