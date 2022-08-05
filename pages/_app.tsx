import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'layout/Layout';
import { useCart } from 'store/useCart';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const {getCart} = useCart()
  React.useEffect(() => {
    getCart()
  }, [getCart])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
