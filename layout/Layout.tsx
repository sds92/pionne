import React from 'react';
import { Footer, Header, Popups } from 'components';
import { useStore } from 'store/useStore';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const { showAddToCartPopup, setShowAddToCartPopup } = useStore();
  const [w, setW] = React.useState<number | undefined>(undefined);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const _setW = () => setW(window.innerWidth);
    _setW();
    window.addEventListener('resize', _setW);
    return () => window.removeEventListener('resize', _setW);
  }, []);

  React.useEffect(() => {
    if (!divRef.current) return;
    if (showAddToCartPopup) {
      divRef.current.style.opacity = '0';
      divRef.current.style.opacity = '100';
      setTimeout(() => {
        if (!divRef.current) return;
        divRef.current.style.opacity = '0';
        setTimeout(() => {
          setShowAddToCartPopup(null);
        }, 0);
      }, 1000);
    }
  }, [setShowAddToCartPopup, showAddToCartPopup]);

  return w ? (
    <>
      <Header w={w} handleMobileMenu={[menuOpen, setMenuOpen]} />
      <main className={`${w < 600 ? 'pt-[72px]' : ''} h-full w-full relative overflow-hidden`}>
        {children}
      </main>
      <Footer w={w} />
      {showAddToCartPopup && (
        <div
          ref={divRef}
          className={`fixed flex justify-center items-center bottom-0 w-full transition-all duration-1000 opacity-0 z-50`}
        >
          <Popups.AddToCart product={showAddToCartPopup}/>
        </div>
      )}
    </>
  ) : (
    <></>
  );
};

export default Layout;
