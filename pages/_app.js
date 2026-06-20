import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
