import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import useWindowSize from 'utils/useWindowSize';
// import { NeighbourhoodJk } from '../BestJkInSameDistrict';
// import Card from './Card';

// type Props = { neighbourhoodJkList: NeighbourhoodJk[] };
type PropsType = {
  images: string[];
};

const MobileSlider = ({ images }: PropsType) => {
  const { width } = useWindowSize();
  return (
    <div className='mb-[46px]'>
      <Carousel mode='HORISONTAL' allowSnapping={true}>
        {images.map((src, index) => {
          return (
            <div key={`neighbourhood-jk-${index}`} className='pr-[16px]'>
              <div
                style={{ width: `${width - 20}px` }}
                className={`relative aspect-[280/366]  rounded-[50px] overflow-hidden`}
              >
                <Image alt={``} src={src} layout={`fill`} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MobileSlider;
