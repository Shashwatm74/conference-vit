import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import '@/styles/Home.module.scss';
const inter = Inter({ subsets: ['latin'] });
import Homepage from './home';

export default function Home() {
  return (
    <>

      <div className={styles.container}>
        <Head>
          <title> VIT Conference </title>
          <meta name="description" content="Conference on Linear Algebra" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


      </div>
      <Homepage />
    </>
  )
}
