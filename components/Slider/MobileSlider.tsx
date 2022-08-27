import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  images?: string[];
  id?: string;
  children?: React.ReactNode;
  setCurPhoto?: React.Dispatch<React.SetStateAction<number>>;
  curPhoto?: number;
};

const MobileSlider = ({ images, id, children, setCurPhoto, curPhoto }: Props) => {
  return (
    <>
      {/* @ts-ignore */}
      <Carousel mode='HORISONTAL' allowSnapping={true} setCurIndex={setCurPhoto}>
        {children
          ? children
            : images?.map((src, index) => {
                return (
                  <Link key={`product-${index}`} href={`products/${id}`} passHref>
                    <div className={`px-4 h-full`}>
                      <div className={`relative rounded-[50px] overflow-hidden h-full w-[calc(100vw-66px)]`}>
                        <Image alt={``} src={src} layout={`fill`} objectFit={`cover`} />
                      </div>
                    </div>
                  </Link>
                );
              }) || null}
      </Carousel>
    </>
  );
};

export default MobileSlider;
