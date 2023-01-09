// Library imports.
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Config imports.
import { bgImgSrc, bgBlur, bgOverlayAlpha } from "./configs/aesthetics";

// Component imports.
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// import Scene from "./components/ThreeModels/Scene";
// import Kamdo from './components/ThreeModels/Model';


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
        <Background src={bgImgSrc} alpha={bgOverlayAlpha} blur={bgBlur} />

        {/* <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
          <Scene
            children={
              <Kamdo rotation={[0, -Math.PI / 4, 0]} position={[0, -2, 0]} />
            }
          />
        </div> */}

        <NavBar />
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
