import React from 'react';
import { Svg } from 'components';
import { CONTACTS } from 'configs/app';
import { MENU } from 'configs/pageData';
import styles from './Footer.module.css';
import Link from 'next/link';

type FooterProps = {
  w: number;
};

const Footer = ({ w }: FooterProps) => {
  return (
    <footer className={`flex flex-col border-t`}>
      <div className={`${styles.contact_title} mt-10 px-4`}>
        Остались вопросы? <br /> Напишите нам в телеграм
      </div>
      <div
        className={`${styles.contact_button} rounded-full border w-min mx-auto py-2 px-4 my-6 border-black cursor-pointer`}
      >
        Написать
      </div>
      <div className={`w-full flex justify-center items-center py-4`}>
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
                  <Link key={`menuitem${ii}`} href={_href} passHref>
                    <div
                      className={`${styles.menu_item} my-1.5 cursor-pointer`}
                      // onClick={() => setIsOpen(false)}
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
