// Library imports.
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component imports.
import Background from "./components/Background/Background";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


/**
 * Renders the web app.
 * @returns {JSX.Element} JSX Component.
 */
const App = () => {
  // const [darkToggle, setDarkToggle] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <HelmetProvider>
      <Router>
        <Background src="https://images5.alphacoders.com/115/1156667.png" opacity={0.8} blur={4} />
        <AnimatedRoutes />
        <Footer />
        <motion.div className="ProgressBar" style={{ scaleX: scrollYProgress }} />
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
    </HelmetProvider>
  );
};

export default App;
