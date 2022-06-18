import React from 'react';
import { SVGLocal } from './components';
import { MAIN_PAGE } from 'configs/pageData';
import styles from './MainPage.module.css';
import Image from 'next/image';

type MainBannerProps = {};

const MainBanner = ({}: MainBannerProps) => {
  return (
    <div className={`flex flex-col justify-start items-center min-h-screen relative cursor-default bg-[#FFF4F4]`}>
      <div className={`${styles.title} px-[31px] py-[45px] z-30`}>{MAIN_PAGE.title}</div>
      <div className={`w-full flex items-center justify-center z-30`}>
        <SVGLocal.Decor />
      </div>
      <div className={`absolute w-full h-auto aspect-[345/517] bottom-[10%] z-10`}>
        <Image alt={`pionne.ru`} src={`/images/main_bg_1.webp`} layout={'fill'} objectFit={'cover'} />
      </div>
      <div className={`w-full h-auto aspect-[481/220] bottom-[10%] z-20`}>
        <Image alt={`pionne.ru`} src={`/images/main_bg_2.webp`} layout={'fill'} objectFit={'cover'} />
      </div>
    </div>
  );
};

export default MainBanner;
