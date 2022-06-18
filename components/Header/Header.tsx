import React from 'react';
import { useRouter } from 'next/router';
import { SM, LG } from './components';

type HeaderProps = {
  w: number;
  handleMenu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const Header = ({ w, handleMenu }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className={`fixed w-full z-50 ${router.route === '/' ? 'bg-[#FFF4F4]' : ''}`}>
      {w > 600 ? <LG /> : <SM handleMenu={handleMenu} />}
    </header>
  );
};

export default Header;
