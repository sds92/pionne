import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'layout/Layout';
import { useStore } from 'store/useStore';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { getCart, cart, } = useStore();

  const handleCartSync = React.useCallback(() => {
    getCart();
  }, [getCart]);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleCartSync);
    }

    if (cart.length === 0) getCart();


    return () => {
      window.removeEventListener('storage', handleCartSync);
    };
  }, [cart, getCart, handleCartSync]);
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
