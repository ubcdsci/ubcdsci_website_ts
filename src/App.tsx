// Library imports.
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Config imports.
import { bgImgSrc, bgBlur, bgOverlayAlpha } from "@/configs/aesthetics";

import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import Routes from "@/Routes";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";


const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

/**
 * Renders the web app.
 * @returns {JSX.Element} JSX Component.
 */
const App = () => {
  // const [darkToggle, setDarkToggle] = useState(false);
  const { scrollYProgress } = useScroll();

  // Load the reCAPTCHA script.
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {/* temporarily commented out 
        <Background src={bgImgSrc} alpha={bgOverlayAlpha} blur={bgBlur} /> */}

        <NavBar />
        <TeamIntro/>
        <Routes />
        <Footer />

        <motion.div
          className="ProgressBar"
          style={{ scaleX: scrollYProgress }}
        />
        <ScrollToTop />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          toastStyle={{
            backgroundColor: "rgba(var(--primary-light), 0.25)",
            color: "white",
            backdropFilter: "blur(20px)",
          }}
        />
      </Router>

      {RECAPTCHA_SITE_KEY && (
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
