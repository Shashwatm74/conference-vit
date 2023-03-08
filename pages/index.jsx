import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/components/homepage/Home.module.scss';
const inter = Inter({ subsets: ['latin'] });
import Homepage from './home';
import About from './home/about';
import Speakers from './home/speakers';
import Schedule from './home/schedule';
import Registration from './home/registrations';
import Contact from './home/contact';

export default function Home() {
  return (
    <>

      <Head>
        <title> VIT Conference </title>
        <meta name="description" content="Conference on Linear Algebra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Contact />



    </>
  )
}
