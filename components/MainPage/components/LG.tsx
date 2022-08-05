import Image from 'next/image';
import React from 'react';
import { SVGLocal } from './';
import styles from '../MainPage.module.css';

type LGProps = {};

const LG = ({}: LGProps) => {
  return (
    <div className={`h-screen w-full relative bg-[#fff3ee]`}>
      <div className={`absolute h-full w-full`}>
        <Image alt={``} src={`/images/main_bg_lg_1.webp`} layout={`fill`} objectFit={`cover`} />
      </div>
      <div className={`absolute h-full w-full`}>
        <Image
          alt={``}
          src={`/images/main_bg_lg_2.webp`}
          layout={`fill`}
          objectFit={`contain`}
          objectPosition={`right`}
        />
      </div>
      <div className={`w-full h-full flex items-end justify-center z-30 relative`}>
        <div className={`relative w-min h-min flex items-center justify-center mb-6`}>
          <SVGLocal.Decor w={'180'} h={'180'} className={`${styles.rotating} cursor-pointer`} />
          <SVGLocal.ArrowDown className={`absolute cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default LG;
