import React from 'react';
import { useRouter } from 'next/router';
import { Svg } from 'components';
import { useScrollLock } from 'utils/useScrollLock';
import { MENU } from 'configs/pageData';
import { CONTACTS } from 'configs/app';
import styles from '../Header.module.css';
import Link from 'next/link';

type SMProps = {
  handleMenu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const SM = ({ handleMenu }: SMProps) => {
  const router = useRouter();
  const { lockScroll, unlockScroll } = useScrollLock();
  const [isOpen, setIsOpen] = handleMenu;
  const isMain = router.route === '/' ? true : false

  React.useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={`flex flex-wrap min-h-screen px-4 pb-6 gap-14 relative bg-[#FFF4F4]`}>
          <div className={`w-full h-[72px] flex items-center`}>
            <Svg.Icons.Close className={`cursor-pointer`} onClick={() => setIsOpen(false)} />
          </div>
          {MENU.SM.map(({ title, items }, i) => {
            return (
              <div key={`menu${i}`} className={`flex flex-col w-full`}>
                <div className={`${styles.submenu_title} pb-2`}>{title}</div>
                <div className={`flex flex-col`}>
                  {items.map(([_title, _href, option], ii) => {
                    return (
                      <Link key={`menuitem${ii}`} href={_href} passHref>
                        <div
                          className={`${styles.menu_item} my-1.5 cursor-pointer`}
                          onClick={() => setIsOpen(false)}
                        >
                          {_title}
                        </div>
                      </Link>
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
            <Svg.Icons.Menu className={`cursor-pointer`} onClick={() => setIsOpen(true)} />
          </div>
          <div className={`w-full flex items-center justify-center`}>
            <Svg.Logo
              className={`cursor-pointer`}
              onClick={() => {
                router.replace('/');
              }}
            />
          </div>
          <div className={`w-1/6 flex items-center justify-center`}>
            <Svg.Icons.Cart className={`cursor-pointer`} />
          </div>
        </div>
      )}
    </>
  );
};

export default SM;
