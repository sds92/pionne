import React from 'react';
import { Svg } from 'components';
import { CONTACTS } from 'configs/app';
import { MENU } from 'configs/pageData';
import styles from './Footer.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

type FooterProps = {
  w: number;
};

const Footer = ({ w }: FooterProps) => {
  const router = useRouter();
  const isContacts = router.route === '/contacts';
  const isProduct = /\/products\//.test(router.route);
  return (
    <footer className={`flex flex-col overflow-hidden bg-[#FAFAFA] relative`}>
      <Image className={`${styles.bg}`} alt={``} src={`/images/footer_bg_1.webp`} layout={`fill`} objectFit={`cover`}/>
      {isContacts || isProduct ? (
        <div className={`${styles.is_contacts} text-center px-8`}>
          Подбираем лучший уход
          <br /> для вашей кожи в рамках
          <br /> онлайн консультаций
        </div>
      ) : (
        <div className={`${styles.contact_title} mt-10 px-4`}>
          Остались вопросы? <br /> Напишите нам в телеграм
        </div>
      )}
      <div
        className={`${styles.contact_button} rounded-full border w-min mx-auto py-2 px-4 my-6 border-black cursor-pointer`}
      >
        Написать
      </div>
      <div className={`w-full flex justify-center items-center py-4 mt-[330px]`}>
        <Svg.Logo />
      </div>
      <div className={`flex flex-col gap-4`}>
        <div className={`flex w-full gap-3 items-center justify-center`}>
          {CONTACTS.socials.map(({ icon, href }, i) => {
            const Icon = Svg.Icons.SocialIcons[icon as string];
            return (
              <a key={`social${i}`} href={`${href}`} target='_blank' rel='noopener noreferrer'>
                <div className={` my-1.5`}>
                  <Icon />
                </div>
              </a>
            );
          })}
        </div>
        {MENU.SM.map(({ title, items }, i) => {
          return (
            <div key={`menu${i}`} className={`flex flex-col w-full items-center justify-center`}>
              {items.map(([_title, _href, option], ii) => {
                return (
                  <Link key={`menuitem${ii}`} href={`/products`} passHref>
                    <div
                      className={`${styles.menu_item} my-1.5 cursor-pointer`}
                      onClick={() => console.log('`ss')}
                    >
                      {_title}
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div className={`flex flex-col items-center justify-center`}>
          {CONTACTS.emails.map((email, i) => {
            return (
              <div key={`email${i}`} className={`${styles.menu_email} my-1.5`}>
                {email}
              </div>
            );
          })}
        </div>
        <div className={`mx-auto text-center `}>{CONTACTS.copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
