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
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref} id={`head`} className={`relative w-full`} />
      <header className={`fixed w-full z-30  overflow-hidden ${inView ? 'border-b' : 'shadow-md '}`}>
        {w > 600 ? <LG isAtTop={inView}/> : <SM handleMobileMenu={handleMobileMenu} isAtTop={inView}/>}
      </header>
    </>
  );
};

export default Header;
