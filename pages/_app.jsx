import '@/styles/globals.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
