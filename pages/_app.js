import '../styles/globals.css';
import '../src/index.css';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import AnalyticsTracker from '../components/AnalyticsTracker';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [, refreshLanguage] = useState(0);
  const usesDataPortfolioShell = router.pathname === '/data-engineering'
    || router.pathname === '/private-insights'
    || router.pathname === '/data-engineering/private-insights';

  useEffect(() => {
    const refresh = () => refreshLanguage((value) => value + 1);
    window.addEventListener('portfolio-language-change', refresh);
    return () => window.removeEventListener('portfolio-language-change', refresh);
  }, []);

  return (
    <>
      <AnalyticsTracker />
      {!usesDataPortfolioShell && <Navbar />}
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
