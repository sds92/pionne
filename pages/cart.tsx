import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import { Cart } from 'components';

const CartPage: NextPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
