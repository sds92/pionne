import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import { About } from 'components';

const AboutPage: NextPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
