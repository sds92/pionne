import { UI } from 'components';
import Image from 'next/image';
import React from 'react';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';
import { useInView } from 'react-intersection-observer';
import styles from '../../../Products.module.css';
import Link from 'next/link';

type Props = {
  product: IProduct;
  setFirstLast: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      last: boolean | undefined;
    }>
  >;
  pos: number;
  l: number;
};

const InLineCategoryItem = ({ product, setFirstLast, pos, l }: Props) => {
  const { cart, setCart } = useStore();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });
  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };

  React.useEffect(() => {
    pos === l - 1 && setFirstLast((s) => ({ ...s, last: inView }));
    pos === 1 && setFirstLast((s) => ({ ...s, first: inView }));
  }, [inView, l, pos, setFirstLast]);
  return (
    <div className={`flex flex-col w-[338px] mr-[144px]`}>
      <div ref={pos === l - 1 || pos === 1 ? ref : undefined} className={`w-full h-[1px]`} />
      <div className={`relative w-[338px] h-[330px] rounded-[30px] overflow-hidden`}>
        <Image alt={``} src={product.images[0]} layout={`fill`} objectFit={`cover`} />
      </div>
      <Link href={`products/${product.id}`} passHref>
        <div className={`${styles.inline_category_product_title} mt-[30px] cursor-pointer`}>
          {product.title}
        </div>
      </Link>
      <div className={`${styles.inline_category_product_description} mt-[30px]`}>
        {product.info.description[0]}
      </div>
      <div className={`flex items-center mt-[30px]`}>
        <div className={`${styles.inline_category_product_price} mr-[40px]`}>{product.price} р</div>
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
