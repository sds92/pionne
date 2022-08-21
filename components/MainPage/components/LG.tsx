import Image from 'next/image';
import React from 'react';
import { SVGLocal } from './';
import styles from '../MainPage.module.css';
import { MAIN_PAGE } from 'configs/pageData';

type LGProps = {};

const LG = ({}: LGProps) => {
  return (
    <div className={`h-screen w-full relative bg-[#fff3ee] flex items-center justify-start`}>
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
      <div className={`${styles.title_lg} absolute max-w-[800px] ml-[20%]`}>{MAIN_PAGE.title}</div>
      <div className={`w-full h-full flex items-end justify-center z-20 relative`}>
        <div className={`relative w-min h-min flex items-center justify-center mb-6`}>
          <SVGLocal.Decor w={'180'} h={'180'} className={`${styles.rotating} cursor-pointer`} />
          <SVGLocal.ArrowDown className={`absolute cursor-pointer`} />
        </div>
      </div>
    </div>
  );
};

export default LG;
