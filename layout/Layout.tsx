import React from 'react';
import { Footer, Header } from 'components';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const [w, setW] = React.useState<number | undefined>(undefined);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const _setW = () => setW(window.innerWidth);
    _setW();
    window.addEventListener('resize', _setW);
    return () => window.removeEventListener('resize', _setW);
  }, []);

  return w ? (
    <>
      <Header w={w} handleMenu={[menuOpen, setMenuOpen]} />
      <main className={`${w < 600 ? 'pt-[72px]' : ''} h-full w-screen relative`}>{children}</main>
      <Footer w={w} />
    </>
  ) : (
    <></>
  );
};

export default Layout;
