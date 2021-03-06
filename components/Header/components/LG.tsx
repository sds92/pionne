import React from 'react';
import { useRouter } from 'next/router';
import { Svg } from 'components';
import { MENU } from 'configs/pageData';

type LGProps = {};

const LG = ({}: LGProps) => {
  const router = useRouter();
  return (
    <div className={`h-[130px] max-w-[1280px] w-full mx-auto flex items-center justify-between`}>
      <div>
        <Svg.Icons.Menu className={`cursor-pointer`} />
      </div>
      <div className={`flex gap-8 items-center`}>
        {MENU.LG.items.map(([title, _href], i) => {
          if (title === 'Logo') return <Svg.Logo h={'77'} w={`auto`} />;
          return (
            <div
              key={`menuitem${i}`}
              className={`whitespace-nowrap cursor-pointer`}
              onClick={() => router.replace(`/${_href}`)}
            >
              {title}
            </div>
          );
        })}
      </div>
      <div onClick={() => router.replace(`/cart`)}>
        <Svg.Icons.Cart className={`cursor-pointer`} />
      </div>
    </div>
  );
};

export default LG;
