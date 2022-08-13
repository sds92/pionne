import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import useWindowSize from 'utils/useWindowSize';
import Link from 'next/link';
import useIntersectionObserver from 'utils/useIntersectionObserver';
import RefComponent from './RefComponent';

type Props = {
  images?: string[];
  id?: string;
  children?: React.ReactNode;
  setCurPhoto?: React.Dispatch<React.SetStateAction<number>>;
  curPhoto?: number
};

const MobileSlider = ({ images, id, children, setCurPhoto, curPhoto }: Props) => {

  const { width } = useWindowSize();
  return (
    <div className={`h-full relative flex flex-col items-center justify-end`}>
      {/* @ts-ignore */}
      <Carousel mode='HORISONTAL' allowSnapping={true}>
        {children
          ? children
          : images?.map((src, index) => {
              return (
                <Link key={`product-${index}`} href={`products/${id}`} passHref>
                  <RefComponent setCur={setCurPhoto} i={index}>
                    <div className={`px-4 h-full`}>
                      <div
                        // style={{ width: `${width - 50}px`, height: `${width*300/250}px`}}
                        className={`relative rounded-[50px] overflow-hidden h-full w-[calc(100vw-66px)]`}
                      >
                        <Image alt={``} src={src} layout={`fill`} objectFit={`cover`} />
                      </div>
                    </div>
                  </RefComponent>
                </Link>
              );
            }) || null}
      </Carousel>
      <div className={`absolute flex z-50 bottom-[16px]`}>
        {images?.map((item, i) =>{
          return <div key={`dot${i}`} className={`rounded-full w-[6px] h-[6px] flex-none mx-[5px] ${curPhoto === i ? 'bg-white border border-black' : 'bg-black'}`}></div>
        })}
      </div>
    </div>
  );
};

export default MobileSlider;
