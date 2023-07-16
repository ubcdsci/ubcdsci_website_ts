import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';

import Background from './components/Background';
import NavBar from './components/NavBar';
import Routes from './Routes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';


const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

const BKGD_SRC = "/media/background-hd.png"; // https://images5.alphacoders.com/115/1156667.png
const BKGD_OVERLAY_ALPHA = 0.6;
const BKGD_BLUR = 2;


/**
 * Renders the main web app.
 */
const App = () => {
  // const [darkToggle, setDarkToggle] = useState(false);
  const { scrollYProgress } = useScroll();

  // Load the reCAPTCHA script.
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY)
      return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Background src={BKGD_SRC} alpha={BKGD_OVERLAY_ALPHA} blur={BKGD_BLUR} />

        <NavBar />
        <Routes />
        <Footer />

        <motion.div className="ProgressBar" style={{ scaleX: scrollYProgress }} />
        <ScrollToTop />
      </Router>

      { RECAPTCHA_SITE_KEY && (
          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-size="invisible"
            data-callback="onsubmit"
          />
        )}
    </HelmetProvider>
  );
};

export default App;
