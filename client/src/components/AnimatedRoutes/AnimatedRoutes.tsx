// Library imports.
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

// Component imports.
import NewsletterForm from "../NewsletterForm/NewsletterForm";

// Pages imports.
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Projects from "../../pages/Projects/Projects";
import Events from "../../pages/Events/Events";
import ContactUs from "../../pages/ContactUs/ContactUs";
import SearchResult from "../../pages/SearchResult/SearchResult";
import Login from "../../pages/Login/Login";
import ErrorPage from "../../pages/Error/Error";

// Style imports.
import styles from "./AnimatedRoutes.module.scss";


const routes : {path : string, name : string, element : JSX.Element}[] = [
  { path: "/",              name: "Main",               element: <Navigate replace to="/home" /> },
  { path: "/home",          name: "Home",               element: <Home /> },
  { path: "/about-us",      name: "About Us",           element: <AboutUs /> },
  { path: "/projects",      name: "Projects",           element: <Projects /> },
  { path: "/events",        name: "Events",             element: <Events /> },
  { path: "/contact-us",    name: "Contact Us",         element: <ContactUs /> },
  { path: "/search-result", name: "Search Results",     element: <SearchResult /> },
  { path: "*",              name: "np.isnan(\"page\")", element: <ErrorPage /> },
];


/**
 * Sets the title for the browser tab.
 * @param {string} title The title to set.
 * @param {string} description The description to set.
 * @returns {JSX.Element} JSX Component.
 */
const TabTitle = (props: {title : string, description? : string}) => {
  return (
    <Helmet>
      <title>{props.title} – UBC Data Science Club</title>
        <meta
          name="description"
          content={ props.description ? props.description : "AMS UBC Data Science Club"}
        />
    </Helmet>
  );
};

/**
 * Renders all the page routes, with animation.
 * @returns {JSX.Element} JSX Component.
 */
const AnimatedRoutes = (props: any) => {
  const location = useLocation();
  const { user } = useSelector((state : any) => state.auth);

  const duration = 0.3;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, name, element }) => (
          <Route
            key={name}
            path={path}
            element={
              <>
                <TabTitle title={name} />
                <motion.div
                  className={styles.PageContainer}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration }}
                >
                  {element}
                </motion.div>
                <NewsletterForm />
              </>
          } />
        ))}

        <Route path="/login" element={
          (user && user.username) ? <Navigate replace to="/home" /> :
            <>
              <TabTitle title="Admin Login" />
              <motion.div
                className={styles.PageContainer}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
                transition={{ duration }}
              >
                <Login />
              </motion.div>
            </> 
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
