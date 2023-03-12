import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Homepage from './home';
import About from './home/about';
import Speakers from './home/speakers';
import Schedule from './home/schedule';
import Registration from './home/registrations';
import Contact from './home/contact';
import Script from 'next/script';




export default function Home() {
  ///////////////////// code for preloader / page loader 

  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);
  const clear = () => {
    window.setInterval(id.current);
    setPreloader(false);
  }
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>

      <Head>
        <title> VIT Conference </title>
        <meta name="description" content="Conference on Linear Algebra" />
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
      </Head>
      {/* {preloader ?
        // <div className="pageload">

        //   <h1> Loading...</h1>

        // </div>

        // :
        // (
        //   <div data-scroll-container> */}

      <Homepage />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Contact />
      {/* </div >

        )} */}

    </>


  )
}

