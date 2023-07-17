import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';

import Background from './components/Background';
import NavBar from './components/NavBar';
import Routes from './Routes';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


const BKGD_SRC = "/media/background-hd.png"; // https://images5.alphacoders.com/115/1156667.png
const BKGD_OVERLAY_ALPHA = 0.7;
const BKGD_BLUR = 3;


/**
 * Renders the main web app.
 */
const App = () => {
  const { scrollYProgress } = useScroll();

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
    </HelmetProvider>
  );
};

export default App;
