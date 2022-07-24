import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import useWindowSize from 'utils/useWindowSize';
import Link from 'next/link';
// import { NeighbourhoodJk } from '../BestJkInSameDistrict';
// import Card from './Card';

// type Props = { neighbourhoodJkList: NeighbourhoodJk[] };
type PropsType = {
  images?: string[];
  id?: number;
  children?: React.ReactNode;
};

const MobileSlider = ({ images, id, children }: PropsType) => {
  const { width } = useWindowSize();
  return (
    <div className='mb-[46px]'>
      <Carousel mode='HORISONTAL' allowSnapping={true} >
        {children
          ? children
          : images?.map((src, index) => {
              return (
                <Link key={`neighbourhood-jk-${index}`} href={`products/${id}`} passHref>
                  <div className={`px-4`}>
                    <div
                      style={{ width: `${width - 50}px`, height: `${width*300/250}px`}}
                      className={`relative rounded-[50px] overflow-hidden`}
                    >
                      <Image alt={``} src={src} layout={`fill`} objectFit={`cover`} />
                    </div>
                  </div>
                </Link>
              );
            }) || null}
      </Carousel>
    </div>
  );
};

export default MobileSlider;
