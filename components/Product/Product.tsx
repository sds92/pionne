import React from 'react';
import { BreadCrumbs, Svg, UI, Comments } from 'components';
import { SVGLocal, PopUp } from './components';
import MobileSlider from 'components/Slider/MobileSlider';
import useWindowSize from 'utils/useWindowSize';
import styles from './Product.module.css';
import Image from 'next/image';
import { useStore } from 'store/useStore';
import { addToCart } from 'utils';
import {comments} from 'data/comments'

type ProductProps = {
  data: IProduct;
};

const Product = ({ data }: ProductProps) => {
  const [curImg, setCurImg] = React.useState<number>(0);
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
    <div className={`flex flex-col pt-8 px-4 bg-[#FAFAFA] w-full pb-[87px]`}>
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
          <div className={`relative flex flex-col items-center justify-end`}>
            <MobileSlider>
              {data.images.map((image, i) => {
                return (
                  <div
                    key={`image${i}`}
                    style={{ width: `100px`, height: `100px` }}
                    className={`relative mx-[5px] rounded-[5px] overflow-hidden`}
                    onClick={() => {
                      setCurSrc(image);
                      setCurImg(i);
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
            <div className={`absolute flex z-50 -bottom-[20px]`}>
              {data.images?.map((item, i) => {
                return (
                  <div
                    key={`dot${i}`}
                    className={`rounded-full w-[6px] h-[6px] flex-none mx-[5px] ${
                      curImg === i ? 'bg-white border border-black' : 'bg-black'
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className={`${styles.product_title} mt-[56px]`}>{data.title}</div>
      <div className={`${styles.product_description} mt-[47px]`}>{data.info.description[0]}</div>
      <div className={`${styles.product_description} mt-4`}>Объем упаковки: {data.info.v}</div>
      <div className={`flex w-full justify-between items-center py-4 border-b`}>
        <div className={`${styles.product_price}`}>{data.price}р</div>
        <UI.Buttons.AddToCart onClick={handleAddToCart} />
      </div>
      <div className={`flex flex-col`}>
        {data.info.special.map((special, i) => {
          return (
            <div key={`special${i}`} className={`flex items-center my-[16px]`}>
              <SVGLocal.Leaf className={`flex-none mr-[8px]`} />
              {special}
            </div>
          );
        })}
      </div>
      <div className={`flex flex-col mt-[46px]`}>
        {data.info.misc.map(({ title, value }, i) => {
          return <PopUp key={`misc${i}`} title={title} value={value} />;
        })}
      </div>
      <div className={`flex flex-col`}>
        {comments.map((comment, i) => {
          if (comment.product !== data.id) return null
          return (
            <Comments.SM key={`comment${i}`} comment={comment} product={data}/>
          )
        })}
      </div>
    </div>
  );
};

export default Product;
