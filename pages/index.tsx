import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { MainBanner } from 'components';
import type { NextPage } from 'next';
import Products from './products';

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <Products/>
    </>
  );
};

export default Home;
