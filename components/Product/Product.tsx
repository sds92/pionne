import React from 'react';
import { BreadCrumbs, Svg } from 'components';
import { SVGLocal, PopUp } from './components';
import MobileSlider from 'components/Slider/MobileSlider';
import useWindowSize from 'utils/useWindowSize';
import styles from './Product.module.css';
import Image from 'next/image';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';

type ProductProps = {
  data: IProduct;
};

const Product = ({ data }: ProductProps) => {
  const { cart, setCart } = useStore();
  const { width } = useWindowSize();
  const breadCrumbs = [
    ['Главная', '/'],
    [`${data.shortTitle}`, `${data.id}`],
  ];
  const [curSrc, setCurSrc] = React.useState<string>(data.images[0]);

  const handleAddToCart = () => {
    addToCart({ id: data.id, cart: cart, cb: setCart });
  };
  return (
    <div className={`flex flex-col py-8 px-4`}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={`relative flex flex-col w-full mt-[15px]`}>
        <div
          style={{
            // width: `${width}px`,
            height: `${(width * 326) / 288}px`,
          }}
          className={`relative mb-[20px] w-full`}
        >
          <Image
            quality={100}
            alt={``}
            src={curSrc}
            layout={`fill`}
            objectFit={`cover`}
            // objectPosition={`center`}
          />
        </div>
        {width < 640 && (
          <MobileSlider>
            {data.images.map((image, i) => {
              return (
                <div
                  key={`image${i}`}
                  style={{ width: `100px`, height: `100px` }}
                  className={`relative mx-[5px] rounded-[5px] overflow-hidden`}
                  onClick={() => {
                    setCurSrc(image);
                  }}
                >
                  <Image
                    alt={``}
                    src={`${image}`}
                    layout={`fill`}
                    objectFit={`cover`}
                    objectPosition={`center`}
                  />
                </div>
              );
            })}
          </MobileSlider>
        )}
      </div>
      <div className={`${styles.product_title} mt-[56px]`}>{data.title}</div>
      <div
        className={`${styles.product_description}`}
        // dangerouslySetInnerHTML={{ __html: data.description }}
      >
        {data.info.description}
      </div>
      <div className={`flex w-full justify-between items-center py-4 border-b`}>
        <div className={`${styles.product_price}`}>{data.price}</div>
        <div
          className={`${styles.product_to_cart} rounded-full px-4 py-2 bg-black cursor-pointer`}
          onClick={handleAddToCart}
        >
          В корзину
        </div>
      </div>
      <div className={`flex flex-col`}>
        {data.info.special.map((special, i) => {
          return (
            <div key={`special${i}`} className={`flex gap-4 items-center`}>
              <SVGLocal.Leaf className={`flex-none`} />
              {special}
            </div>
          );
        })}
      </div>
      <div className={`flex flex-col`}>
        {data.info.misc.map(({ title, value }, i) => {
          return <PopUp key={`misc${i}`} title={title} value={value} />;
        })}
      </div>
    </div>
  );
};

export default Product;
