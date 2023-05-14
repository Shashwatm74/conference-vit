import '@/styles/globals.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
// import useLocoScroll from '@/hook/useLocoScroll';
import { AuthProvider } from "@/lib/auth.js";

export default function App({ Component, pageProps }) {
  // useLocoScroll();
  return (
    <>
      <AuthProvider>

        {/* <div data-scroll-container> */}

        <Nav />

        <Component {...pageProps} />
        {/* </div> */}

        <Footer />
      </AuthProvider >
    </>
  )
}
