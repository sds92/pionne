import React from 'react';
import { BreadCrumbs } from 'components';
import { ABOUT_PAGE } from 'configs/pageData';
import styles from './About.module.css';
import Image from 'next/image';

type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <>
      <div className={`px-4 py-10 flex flex-col gap-5`}>
        <BreadCrumbs data={ABOUT_PAGE.breadCrumbs} />
        <div className={`${styles.title}`}>{ABOUT_PAGE.title}</div>
        <div className={`aspect-[288/330] w-full h-auto relative`}>
          <Image alt={`pionne.ru`} src={`/images/about_1.webp`} layout={'fill'} objectFit={'cover'} />
        </div>
        {ABOUT_PAGE.blocks.map(({ title, text }, i) => {
          return (
            <div key={`textblock${i}`}>
              <div className={`${styles.block_title} pb-[8px]`}>{title}</div>
              <div className={`${styles.block_text}`}>{text}</div>
            </div>
          );
        })}
      </div>
      <div>
        <div className={`flex flex-col relative`}>
          <div className={`absolute h-full w-full -z-10 opacity-50`}>
            <Image alt={`pionne.ru`} src={`/images/about_bg_1.webp`} layout={'fill'} objectFit={'cover'} />
          </div>
          <div className={`relative w-full h-auto aspect-[320/568] mt-20`}>
            <Image
              alt={`pionne.ru`}
              src={`/images/about_section_1.webp`}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={`mt-20 px-4`}>
            <div className={`${styles.consultations_title}`}>{ABOUT_PAGE.consultations.title}</div>
            <div className={`${styles.consultations_text}`}>{ABOUT_PAGE.consultations.text}</div>
          </div>
          <div className={`relative w-full h-auto aspect-[320/568] mt-20`}>
            <Image
              alt={`pionne.ru`}
              src={`/images/about_section_2.webp`}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={`mt-20 px-4`}>
            <div className={`${styles.consultations_title}`}>{ABOUT_PAGE.production.title}</div>
            <div className={`${styles.consultations_text}`}>{ABOUT_PAGE.production.text}</div>
          </div>
          <div className={`relative w-full h-auto aspect-[320/568] mt-20`}>
            <Image
              alt={`pionne.ru`}
              src={`/images/about_section_3.webp`}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className={`my-20 px-4`}>
            <div className={`${styles.consultations_title}`}>{ABOUT_PAGE.package.title}</div>
            <div className={`${styles.consultations_text}`}>{ABOUT_PAGE.package.text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
