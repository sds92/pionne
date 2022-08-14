import React from 'react';
import { useRouter } from 'next/router';
import { Svg } from 'components';
import { useScrollLock } from 'utils/useScrollLock';
import { MENU } from 'configs/pageData';
import { CONTACTS } from 'configs/app';
import styles from '../Header.module.css';
import Link from 'next/link';
import { useStore } from 'store/useStore';

type SMProps = {
  handleMenu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const SM = ({ handleMenu }: SMProps) => {
  const router = useRouter();
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isOpen, setIsOpen] = handleMenu;
  const isMain = router.route === '/' ? true : false;
  const { cart } = useStore();

  React.useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <>
      {isOpen ? (
        <div className={`z-[60] flex flex-wrap min-h-screen px-4 pb-6 relative bg-[#FFF4F4] animate-fadein`}>
          <div className={`w-full h-[72px] flex items-center`}>
            <div className={`p-2`} onClick={() => setIsOpen(false)}>
              <Svg.Icons.Close className={`cursor-pointer`} />
            </div>
          </div>
          {MENU.SM.map(({ title, items }, i) => {
            return (
              <div key={`menu${i}`} className={`flex flex-col w-full`}>
                <div className={`${styles.submenu_title} pb-2`}>{title}</div>
                <div className={`flex flex-col`}>
                  {items.map(([_title, _href, option], ii) => {
                    return (
                      <div key={`menuitem${ii}`} onClick={() => router.replace(`/${_href}`)}>
                        <div
                          className={`${styles.menu_item} my-1.5 cursor-pointer`}
                          onClick={() => setIsOpen(false)}
                        >
                          {_title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className={`w-full flex flex-col`}>
            <div className={`${styles.submenu_title} pb-2`}>Контакты</div>
            <div className={`flex flex-col`}>
              {CONTACTS.emails.map((email, i) => {
                return (
                  <div key={`email${i}`} className={`${styles.menu_email} my-1.5`}>
                    {email}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`flex w-full gap-3`}>
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
          <div className={`flex-none `}>{CONTACTS.copyright}</div>
        </div>
      ) : (
        <div className={`w-full h-[72px] flex ${isMain ? 'bg-[#FFF4F4]' : 'bg-white'}`}>
          <div className={`w-1/6 flex items-center justify-center`}>
            <div className={`p-2`} onClick={() => setIsOpen(true)}>
              <Svg.Icons.Menu className={`cursor-pointer`} />
            </div>
          </div>
          <div className={`w-full flex items-center justify-center`}>
            <Svg.Logo
              className={`cursor-pointer`}
              onClick={() => {
                router.replace('/');
              }}
            />
          </div>
          <div
            className={`w-1/6 flex items-center justify-center relative `}
            onClick={() => router.replace(`/cart`)}
          >
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
      )}
    </>
  );
};

export default SM;
