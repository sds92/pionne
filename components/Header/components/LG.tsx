import React from 'react';
import { useRouter } from 'next/router';
import { Svg } from 'components';
import { MENU } from 'configs/pageData';
import { useStore } from 'store/useStore';

type Props = {
  isAtTop?: boolean;
};

const LG = ({ isAtTop }: Props) => {
  const { cart, mobileMenuIsOpen, setMobileMenuIsOpen } = useStore();
  const router = useRouter();
  const isHome = router.route === '/';
  
  return (
    <div className={`w-full transition-all ${isAtTop && isHome ? '' : !isHome ? 'bg-[#fafafa]':'bg-[#fff3ee]'}`}>
      <div className={`h-[130px] max-w-[1280px] w-full mx-auto flex items-center justify-between `}>
        <div>
          <Svg.Icons.Menu className={`cursor-pointer`} />
        </div>
        <div className={`flex items-center`}>
          {MENU.LG.items.map(([title, _href], i) => {
            if (title === 'Logo')
              return (
                <Svg.Logo
                  key={`logo${i}`}
                  h={'77'}
                  w={`200`}
                  className={`mx-[31px] cursor-pointer`}
                  onClick={() => router.replace('/')}
                />
              );
            return (
              <div
                key={`menuitem${i}`}
                className={`whitespace-nowrap cursor-pointer mx-[31px]`}
                onClick={() => router.replace(`/${_href}`)}
              >
                {title}
              </div>
            );
          })}
        </div>
        <div className={`flex items-center justify-center relative`} onClick={() => router.replace(`/cart`)}>
          <Svg.Icons.Cart className={`cursor-pointer`} />
          {cart.length > 0 && (
            <div
              className={`cursor-pointer absolute flex items-center justify-center translate-y-1 text-white rounded-full bg-black w-4 h-4`}
            >
              {cart.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LG;
