import Link from 'next/link';
import React from 'react';
import styles from '../Products.module.css';
import Image from 'next/image';
import useWindowSize from 'utils/useWindowSize';
import MobileSlider from 'components/Slider/MobileSlider';

const MAX_APPLICATION_WIDTH = 1280;

type Product = {
  id: number;
  category: string;
  images: string[];
  title: string;
  meta: {
    description: string;
    keywords: string;
  };
  price: number;
  info: {
    description: string;
    v: string;
    special: string[];
    misc: {
      title: string;
      value: string;
    }[];
  };
};

type ProductListProps = {
  data: Product[];
};

const ProductList = ({ data }: ProductListProps) => {
  // const [currentSlide, setCurrendSlide] = React.useState<number>(0);

  // for determinete boundary of slider
  const { width } = useWindowSize();

  // const moveLeft = () => {
  //   if (currentSlide === 0) {
  //   } else {
  //     setCurrendSlide((cur) => cur - 1);
  //   }
  // };

  // const moveRight = () => {
  //   if (width < 1440) {
  //     const boundary = Math.floor((width - 32) / (jkCardRef!.current!.getBoundingClientRect().width + 16));
  //     if (currentSlide === neighbourhoodJkList.length - boundary) {
  //     } else {
  //       setCurrendSlide((cur) => cur + 1);
  //     }
  //   } else {
  //     const boundary = Math.floor(
  //       (MAX_APPLICATION_WIDTH + (width - MAX_APPLICATION_WIDTH) / 2) /
  //         (jkCardRef!.current!.getBoundingClientRect().width + 16)
  //     );
  //     if (currentSlide === neighbourhoodJkList.length - boundary) {
  //     } else {
  //       setCurrendSlide((cur) => cur + 1);
  //     }
  //   }
  // };

  // const jkCardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={`flex flex-col`}>
      {data?.map((product, i) => {
        return (
          <>
            <div key={`product${i}`} className={`flex flex-col p-4 gap-4`}>
              
                {width < 640 && <MobileSlider id={product.id} images={product.images} />}
              
              <Link href={`products/${product.id}`} passHref>
                <div className={`${styles.product_title}`}>{product.title}</div>
              </Link>
              <div
                className={`${styles.product_description}`}
              >
                {product.info.description}
              </div>
              <div className={`flex w-full justify-between items-center`}>
                <div className={`${styles.product_price}`}>{product.price}&nbsp;р</div>
                <div className={`${styles.product_to_cart} rounded-full px-8 py-4 bg-black cursor-pointer`}>
                  В корзину
                </div>
              </div>
              {i === 1 && (
                <>
                  <div className={`relative aspect-[287/262] w-full my-4`}>
                    <Image className={`-z-10 rounded-[50px] overflow-hidden`} alt={``} src={`/images/productlist_001.webp`} layout={`fill`} />
                    <div className={`${styles.separator_bg} w-full h-full absolute -z-10 rounded-[50px] overflow-hidden`}></div>
                    <div className={`rounded-[50px] border border-[#B2C0D1] w-full h-full absolute translate-x-4 -translate-y-4`}></div>
                    <div className={`flex flex-col z-10 px-10 py-20 gap-7`}>
                      <div className={`${styles.separator_title}`}>философия pionne</div>
                      <div className={`${styles.separator_text}`}>Подбираем лучший уход для вашей кожи в рамках онлайн консультаций.</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        );
      })}
      <></>
    </div>
  );
};

export default ProductList;
