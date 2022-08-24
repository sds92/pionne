import React from 'react';

import Link from 'next/link';
import useWindowSize from 'utils/useWindowSize';
import MobileSlider from 'components/Slider/MobileSlider';
import { Separator } from '../..';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'store/useStore';
import styles from '../../../Products.module.css';
import { addToCart } from 'utils';
import Comments from '../Comments';
import { UI } from 'components';

type Props = {
  i: number;
  product: IProduct;
  comments: IComments[];
};

const SM = ({ product, i, comments }: Props) => {
  const [curPhoto, setCurPhoto] = React.useState<number>(0);
  const { curCategory, setCurCategory, cart, setCart, setShowAddToCartPopup, isScrollign, setShouldScroll } = useStore();
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
      setShouldScroll(false);
      !isScrollign && setCurCategory(product.category);
    }
  }, [inView, isScrollign, product, setCurCategory, setShouldScroll]);

  const description = product.info.description[curPhoto]
    ? product.info.description[curPhoto]
    : product.info.description[product.info.description.length - 1];

  return (
    <>
      <div
        id={product.id.toString()}
        ref={ref}
        key={`product${i}`}
        className={`flex flex-col py-4 h-[calc(100vh-80px)] `}
      >
        {width < 640 && (
          <div className={`h-full max-h-[60%] relative flex flex-col items-center justify-end`}>
            <MobileSlider
              id={product.id}
              images={product.images}
              setCurPhoto={setCurPhoto}
              curPhoto={curPhoto}
            />
            <div className={`absolute flex z-10 bottom-[16px]`}>
              {product.images?.map((item, i) => {
                return (
                  <div
                    key={`dot${i}`}
                    className={`rounded-full w-[6px] h-[6px] flex-none mx-[5px] ${
                      curPhoto === i ? 'bg-white border border-black' : 'bg-black'
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        )}

        <Link href={`products/${product.id}`} passHref>
          <div className={`${styles.product_title} px-4 mt-[24px]`}>{product.title}</div>
        </Link>
        <div className={`${styles.product_description} px-4 mt-[11px]`}>{description}</div>
        <div className={`mt-[18px] flex w-full justify-between items-center border-b pb-8 px-4`}>
          <div className={`${styles.product_price}`}>{product.price}&nbsp;р</div>
          <UI.Buttons.AddToCart
            onClick={() => {
              handleAddToCart();
              setShowAddToCartPopup(product);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SM;
