import Image from 'next/image';
import React from 'react';
import { SVGLocal } from './';
import styles from '../MainPage.module.css'

type LGProps = {};

const LG = ({}: LGProps) => {
  return (
    <div className={`h-screen w-full relative`}>
      <div className={`absolute h-full w-full`}>
        <Image alt={``} src={`/images/main_bg_lg_1.webp`} layout={`fill`} objectFit={`cover`} />
      </div>
      <div className={`absolute h-full w-full`}>
        <Image alt={``} src={`/images/main_bg_lg_2.webp`} layout={`fill`} objectFit={`contain`} objectPosition={`right`} />
      </div>
      <div className={`${styles.rotating} w-full h-full flex items-center justify-center z-30 relative`}>
        <SVGLocal.Decor className={``}/>
      </div>
    </div>
  );
};

export default LG;
