import React from 'react';
import { SVGLocal } from './';
import { MAIN_PAGE } from 'configs/pageData';
import styles from '../MainPage.module.css';
import Image from 'next/image';
type SMProps = {};

const SM = ({}: SMProps) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (!divRef.current) return;
    window.scrollTo({
      top: divRef.current.getBoundingClientRect().height,
      behavior: 'smooth',
    });
  };
  return (
    <div
      ref={divRef}
      className={`flex flex-col justify-start items-center min-h-screen relative cursor-default bg-[#FFF4F4]`}
    >
      <div className={`${styles.title} px-[31px] mt-[45px] z-30`}>{MAIN_PAGE.title}</div>
      <div
        className={`relative w-min h-min flex items-center justify-center mt-[22px] z-30`}
        onClick={handleClick}
      >
        <SVGLocal.Decor className={`${styles.rotating} cursor-pointer`} />
        <SVGLocal.ArrowDownSM className={`absolute cursor-pointer`} />
      </div>
      <div className={`absolute w-full h-[calc(100vw/345*517)] bottom-[10%] z-10`}>
        <Image alt={`pionne.ru`} src={`/images/main_bg_1.webp`} layout={'fill'} objectFit={'cover'} />
      </div>
      <div className={`w-full h-auto aspect-[481/220] bottom-[10%] z-20`}>
        <Image alt={`pionne.ru`} src={`/images/main_bg_2.webp`} layout={'fill'} objectFit={'cover'} />
      </div>
    </div>
  );
};

export default SM;
