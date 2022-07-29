import { Icons } from 'components/Svg';
import Image from 'next/image';
import React from 'react';
import { addToCart, deleteOneFromCart } from 'utils';
import { useCart } from 'store/useCart';
import styles from '../Cart.module.css';

type Props = {
  product: IProduct | null;
  amount: number;
};

const CartItem = ({ product, amount }: Props) => {
  const { cart, setCart } = useCart();
  return product ? (
    <div className={`flex flex-col w-full p-[8px]`}>
      <div className={`flex w-full justify-between items-center pb-[20px]`}>
        <div className={`overflow-hidden relative pl-[7px] w-[75px] h-[77px] rounded-[23px] mx-auto`}>
          <Image alt={product.title} src={product.images[0]} layout={'fill'} objectFit={'cover'} />
        </div>
        <div className={`flex flex-col max-w-[200px] mx-auto`}>
          <div className={`${styles.product_title}`}>{product.title}</div>
          <div className={`${styles.product_v}`}>Объем упаковки: {product.info.v}</div>
        </div>
        <div className={`mx-auto`}>
          <Icons.Close />
        </div>
      </div>

      <div className={`flex cursor-default items-center justify-between`}>
        <div className={`rounded-full border flex w-[150px] h-[37px] items-center justify-between px-[10px]`}>
          <div className={`p-[9px] cursor-pointer`}>
            <Icons.Minus onClick={() => deleteOneFromCart({ id: product.id, cart: cart, cb: setCart })} />
          </div>
          <div className={`${styles.product_amount}`}>{amount}</div>
          <div
            className={`p-[9px] cursor-pointer`}
            onClick={() => addToCart({ id: product.id, cart: cart, cb: setCart })}
          >
            <Icons.Plus />
          </div>
        </div>
        <div className={`${styles.product_price}`}>{product.price * amount} Р</div>
      </div>
    </div>
  ) : null;
};

export default CartItem;
