import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import useWindowSize from 'utils/useWindowSize';
import Link from 'next/link';
// import { NeighbourhoodJk } from '../BestJkInSameDistrict';
// import Card from './Card';

// type Props = { neighbourhoodJkList: NeighbourhoodJk[] };
type PropsType = {
  images: string[];
  id: number;
};

const MobileSlider = ({ images, id }: PropsType) => {
  const { width } = useWindowSize();
  return (
    <div className='mb-[46px]'>
      <Carousel mode='HORISONTAL' allowSnapping={true}>
        {images.map((src, index) => {
          return (
            <Link key={`neighbourhood-jk-${index}`} href={`products/${id}`} passHref>
              <div className='pr-[16px]'>
                <div
                  style={{ width: `${width - 20}px` }}
                  className={`relative aspect-[280/366]  rounded-[50px] overflow-hidden`}
                >
                  <Image alt={``} src={src} layout={`fill`} />
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MobileSlider;
