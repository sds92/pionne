import React from 'react';
import { useRouter } from 'next/router';
import { SM, LG } from './components';
import { useInView } from 'react-intersection-observer';

type HeaderProps = {
  w: number;
  handleMobileMenu: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const Header = ({ w, handleMobileMenu }: HeaderProps) => {
  const router = useRouter();
  const isHome = router.route === '/';
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref} id={`head`} className={`relative w-full ${!isHome && 'h-[122px]'}`} />
      <header className={`fixed w-full z-30 top-0 overflow-hidden ${inView ? 'border-b' : 'shadow-md '}`}>
        {w > 600 ? <LG isAtTop={inView}/> : <SM handleMobileMenu={handleMobileMenu} isAtTop={inView}/>}
      </header>
    </>
  );
};

export default Header;
