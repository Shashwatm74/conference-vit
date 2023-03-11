import '@/styles/globals.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
// import useLocoScroll from '@/hook/useLocoScroll';

export default function App({ Component, pageProps }) {
  // useLocoScroll();
  return (
    <>
      {/* <div data-scroll-container> */}

      <Nav />

      <Component {...pageProps} />
      {/* </div> */}

      <Footer />
    </>
  )
}
