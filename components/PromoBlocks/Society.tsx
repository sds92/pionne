import React from 'react';
import Image from 'next/image';

type Props = {};

const Society = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center relative aspect-[288/330] mt-[60px]'>
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
  );
};

export default Society;
