import React from 'react';

import Link from 'next/link';
import useWindowSize from 'utils/useWindowSize';
import MobileSlider from 'components/Slider/MobileSlider';
import { Separator } from '../..';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'lib/store';
import { useCart } from 'store/useCart';
import styles from '../../../Products.module.css';
import { addToCart } from 'utils';
import Image from 'next/image';
import { UI } from 'components';


type ProductListItemProps = {
  i: number;
  product: IProduct;
  comments: IComments[];
};

const LG = ({ product, i, comments }: ProductListItemProps) => {
  const [curImage, setCurImage] = React.useState<number>(0);
  const { curCategory, setCurCategory } = useStore();
  const { cart, setCart } = useCart();
  const { width } = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };

  React.useEffect(() => {
    if (inView) {
      () => setCurCategory(product.category);
    }
  }, [inView, product.category, setCurCategory]);

  return (
    <>
      <div
        id={product.id.toString()}
        ref={ref}
        key={`product${i}`}
        className={`flex py-4 max-w-[1278px] mx-auto`}
      >
        {/* left */}
        <div className={`flex flex-col w-1/2`}>
          <div>{product.category}</div>
          <div className={`${styles.product_title_lg}`}>{product.title}</div>
          <div className={`${styles.product_description_lg}`}>{product.info.description}</div>
          {/* image slider controller*/}
          <div></div>
          <div className={`flex`}>
            <div className={`${styles.product_price_lg} pl-[22px]`}>{product.price} р</div>
            <UI.Buttons.AddToCart
              onClick={handleAddToCart}
              bgColor={`transparent`}
              textColor={`black`}
              lg={true}
            />
          </div>
        </div>
        {/* right */}
        <div className={`relative w-1/2`}>{/* image slider */}</div>
      </div>
    </>
  );
};

export default LG;
