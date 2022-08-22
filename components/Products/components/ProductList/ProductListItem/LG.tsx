import React from 'react';

import Link from 'next/link';
import useWindowSize from 'utils/useWindowSize';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'store/useStore';
import styles from '../../../Products.module.css';
import { addToCart } from 'utils';
import Image from 'next/image';
import { UI } from 'components';
import { Icons } from 'components/Svg';

type Props = {
  i: number;
  product: IProduct;
  comments: IComments[];
};

const LG = ({ product, i, comments }: Props) => {
  const [curImage, setCurImage] = React.useState<number>(0);
  const { curCategory, setCurCategory, cart, setCart, isScrollign, setShouldScroll, setShowAddToCartPopup } =
    useStore();
  const { width } = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const handleAddToCart = () => {
    addToCart({ id: product.id, cart: cart, cb: setCart });
  };

  const handleArrowClick = (val: string) => {
    if (val === '+') {
      if (curImage < product.images.length - 1) {
        setCurImage((s) => s + 1);
      } else {
        setCurImage(0);
      }
    }
    if (val === '-') {
      if (curImage > 0) {
        setCurImage((s) => s - 1);
      } else {
        setCurImage(product.images.length - 1);
      }
    }
  };

  React.useEffect(() => {
    if (inView) {
      setShouldScroll(false);
      !isScrollign && setCurCategory(product.category);
    }
  }, [inView, isScrollign, product.category, setCurCategory, setShouldScroll]);

  const description = product.info.description[curImage]
    ? product.info.description[curImage]
    : product.info.description[product.info.description.length - 1];

  return (
    <>
      <div
        id={product.id.toString()}
        ref={ref}
        key={`product${i}`}
        className={`bg-[#fafafa] py-4  h-[calc(100vh-100px)] border-b`}
      >
        <div className={`flex max-w-[1278px] mx-auto h-full`}>
          {/* left */}
          <div className={`flex flex-col w-1/2 justify-center`}>
            <div className={`${styles.product_category_lg} uppercase mt-[30px]`}>{product.category}</div>
            <Link href={`products/${product.id}`} passHref>
              <div className={`${styles.product_title_lg} mt-[30px] cursor-pointer`}>{product.title}</div>
            </Link>
            <div className={`${styles.product_description_lg} mt-[30px]`}>{description}</div>
            {/* image slider controller*/}
            <div className={`flex items-center mt-[30px]`}>
              <div className={`mr-[42px] cursor-pointer`} onClick={() => handleArrowClick('-')}>
                <Icons.ArrowLeft />
              </div>
              <div className={`${styles.product_curimage}`}>
                {curImage + 1}/{product.images.length}
              </div>
              <div className={`ml-[42px] cursor-pointer`} onClick={() => handleArrowClick('+')}>
                <Icons.ArrowRight />
              </div>
            </div>
            <div className={`flex mt-[30px] items-center`}>
              <div className={`${styles.product_price_lg} mr-[22px]`}>{product.price} р</div>
              <UI.Buttons.AddToCart
                onClick={() => {
                  handleAddToCart();
                  setShowAddToCartPopup(product);
                }}
                bgColor={`transparent`}
                textColor={`black`}
                lg={true}
              />
            </div>
          </div>
          {/* right */}
          <div className={`relative w-1/2 my-auto`}>
            {/* image slider */}
            <div className={`w-[700px] h-[700px] relative z-10`}>
              <div
                className={`w-full h-full absolute border border-[#B2C0D1] rounded-[200px] -top-[20px] -right-[20px] z-20`}
              ></div>
              <div className={`w-full h-full overflow-hidden rounded-[200px] relative`}>
                <Image alt={``} src={product.images[curImage]} layout={`fill`} objectFit={`cover`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LG;
