import { UI } from 'components';
import { Icons } from 'components/Svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';
import useWindowSize from 'utils/useWindowSize';
import styles from './Product.module.css';

type Props = {
  data: IProduct;
};

const LG = ({ data }: Props) => {
  const [curImage, setCurImage] = React.useState<number>(0);
  const { curCategory, setCurCategory, cart, setCart, isScrollign, setShouldScroll, setShowAddToCartPopup } =
    useStore();
  const { width } = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const handleAddToCart = () => {
    addToCart({ id: data.id, cart: cart, cb: setCart });
  };

  const handleArrowClick = (val: string) => {
    if (val === '+') {
      if (curImage < data.images.length - 1) {
        setCurImage((s) => s + 1);
      } else {
        setCurImage(0);
      }
    }
    if (val === '-') {
      if (curImage > 0) {
        setCurImage((s) => s - 1);
      } else {
        setCurImage(data.images.length - 1);
      }
    }
  };

  React.useEffect(() => {
    if (inView) {
      setShouldScroll(false);
      !isScrollign && setCurCategory(data.category);
    }
  }, [inView, isScrollign, data.category, setCurCategory, setShouldScroll]);

  const description = data.info.description[curImage]
    ? data.info.description[curImage]
    : data.info.description[data.info.description.length - 1];
  return (
    <div id={data.id.toString()} ref={ref} className={`bg-[#fafafa] py-4  h-[calc(100vh-100px)] border-b`}>
      <div className={`flex max-w-[1278px] mx-auto h-full`}>
        {/* left */}
        <div className={`relative my-auto`}>
          {/* image slider */}
          <div className={`w-[700px] h-[700px] rounded-[200px] overflow-hidden relative z-10`}>
            <Image alt={``} src={data.images[curImage]} layout={`fill`} objectFit={`cover`} />
          </div>
          {/* image slider controller*/}
          <div className={`flex justify-center items-center mt-[30px]`}>
            <div className={`mr-[42px] cursor-pointer`} onClick={() => handleArrowClick('-')}>
              <Icons.ArrowLeft />
            </div>
            <div className={`${styles.product_curimage}`}>
              {curImage + 1}/{data.images.length}
            </div>
            <div className={`ml-[42px] cursor-pointer`} onClick={() => handleArrowClick('+')}>
              <Icons.ArrowRight />
            </div>
          </div>
        </div>
        {/* right */}
        <div className={`ml-[68px] flex flex-col justify-center`}>
          <Link href={`products/${data.id}`} passHref>
            <div className={`${styles.product_title_lg} mt-[30px] cursor-pointer`}>{data.title}</div>
          </Link>
          <div className={`${styles.product_description_lg} mt-[30px]`}>{description}</div>

          <div className={`flex mt-[30px] items-center`}>
            <div className={`${styles.product_price_lg} mr-[22px]`}>{data.price} р</div>
            <UI.Buttons.AddToCart
              onClick={() => {
                handleAddToCart();
                setShowAddToCartPopup(data);
              }}
              bgColor={`transparent`}
              textColor={`black`}
              lg={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LG;
