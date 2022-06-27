import React from 'react';
import { BreadCrumbs } from 'components';
import { CONTACTS_PAGE } from 'configs/pageData';
import { CONTACTS } from 'configs/app';
import styles from './Contacts.module.css';
import Image from 'next/image';

type ContactsProps = {};

const Contacts = ({}: ContactsProps) => {
  return (
    <div className={`px-4 py-10 flex flex-col gap-5`}>
      <BreadCrumbs data={CONTACTS_PAGE.breadCrumbs} />
      <div className={`${styles.title}`}>{CONTACTS_PAGE.title}</div>
      <div className={`flex flex-col`}>
        <div>Пишите нам на почту</div>
        <div>{CONTACTS.emails[0]}</div>
        <div>в телеграм для консультации</div>
        <div>{CONTACTS.socials[1].href}</div>
        <div>Или в директ инстаграма</div>
        <div>{CONTACTS.socials[0].href}</div>
      </div>
      <div className='flex flex-col items-center justify-center relative aspect-[288/330]'>
        <div className='absolute top-0 aspect-[288/330] w-full h-auto rounded-[60px] mt-1 overflow-hidden'>
          <Image
            alt={``}
            src={`/images/contacts_1.webp`}
            layout={`fill`}
            // objectFit={`contaitn`}
          />
        </div>
        <div className='z-10'>
          <div className={`uppercase text-center`}>Сообщество</div>
          <div className={`text-center`}>Присоединяйтесь к нам в инстаграме!</div>
          <div className={`uppercase mx-auto border rounded-full border-white py-2 px-4 w-min text-white`}>
            Перейти
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
