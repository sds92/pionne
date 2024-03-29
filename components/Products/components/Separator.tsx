import React from 'react';
import Image from 'next/image';
import MobileSlider from 'components/Slider/MobileSlider';
import useWindowSize from 'utils/useWindowSize';
import styles from '../Products.module.css';

type SeparatorProps = {
  id: number;
  data?: IComments[];
};

const Separator = ({ id, data }: SeparatorProps) => {
  const { width } = useWindowSize();

  switch (id) {
    case 1: {
      return (
        <div style={{ height: `${(width * 262) / 287}px` }} className={`relative w-full my-4`}>
          <Image
            className={`-z-10 rounded-[50px] overflow-hidden`}
            alt={``}
            src={`/images/productlist_001.webp`}
            layout={`fill`}
            objectFit={`cover`}
          />
          <div
            className={`${styles.separator_bg} w-full h-full absolute -z-10 rounded-[50px] overflow-hidden`}
          ></div>
          <div
            className={`rounded-[50px] border border-[#B2C0D1] w-full h-full absolute translate-x-4 -translate-y-4`}
          ></div>
          <div className={`relative flex flex-col z-30 px-10 py-20 gap-7`}>
            <div className={`${styles.separator_title}`}>философия pionne</div>
            <div className={`${styles.separator_text}`}>
              Подбираем лучший уход для вашей кожи в рамках онлайн консультаций.
            </div>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className={`h-[450px] relative flex flex-col justify-center items-center`}>
          <Image
            className={`-z-10`}
            alt={``}
            src={`/images/productlist_001.webp`}
            layout={`fill`}
            objectFit={`cover`}
          />
          <div className={`${styles.separator_bg} w-full h-full absolute -z-10 overflow-hidden`}></div>
          <div className={`flex flex-col z-10 px-10 py-20 gap-7`}>
            <div className={`${styles.separator_title_lg}`}>философия pionne</div>
            <div className={`${styles.separator_text_lg} max-w-[983px]`}>
              Подбираем лучший уход для вашей кожи в рамках онлайн консультаций.
            </div>
          </div>
        </div>
      );
    }
    case 4: {
      return (
        <div className={`h-[450px] relative flex flex-col justify-center items-center overflow-hidden`}>
          <Image
            className={`-z-10`}
            alt={``}
            src={`/images/productlist_002.webp`}
            layout={`fill`}
            objectFit={`cover`}
          />

          <div className={`${styles.separator_bg} w-full h-full absolute -z-10 overflow-hidden`}></div>
          <div className={`flex flex-col z-10 px-10 py-20 gap-7`}>
            <div className={`${styles.separator_text_lg} max-w-[983px]`}>
              Подбираем лучший уход для вашей кожи в рамках онлайн консультаций.
            </div>
          </div>
        </div>
      );
    }
    case 5: {
      return (
        <div style={{ height: `${(width * 330) / 287}px` }} className={`relative w-full my-4`}>
          <Image
            className={`-z-10 rounded-[50px] overflow-hidden`}
            alt={``}
            src={`/images/productlist_002.webp`}
            layout={`fill`}
            objectFit={`cover`}
          />
          <div
            className={`${styles.separator_bg} w-full h-full absolute -z-10 rounded-[50px] overflow-hidden`}
          ></div>
          <div
            className={`rounded-[50px] border border-[#B2C0D1] w-full h-full absolute translate-x-4 -translate-y-4`}
          ></div>
          <div className={`flex flex-col z-10 px-10 py-20 gap-7`}>
            <div className={`${styles.separator_title}`}>философия pionne</div>
            <div className={`${styles.separator_text}`}>
              Подбираем лучший уход для вашей кожи в рамках онлайн консультаций.
            </div>
          </div>
        </div>
      );
    }
    default:
      return <></>;
  }
};

export default Separator;
