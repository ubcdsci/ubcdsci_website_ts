import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';

import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import AdminPanel from '@/pages/AdminPanel';
import Projects from '@/pages/Projects';
import Events from '@/pages/Events';
import ContactUs from '@/pages/ContactUs';
import SearchResult from '@/pages/SearchResult';
import Login from '@/pages/Login';
import ErrorPage from '@/pages/PageNotFound';


enum Access {
  PUBLIC,
  ADMIN
}

const routes : {path : string, name : string, element : JSX.Element, access : Access}[] = [
  // Public routes.
  { path: "/",              name: "Main",               element: <Navigate replace to="/home" />, access: Access.PUBLIC },
  { path: "/home",          name: "Home",               element: <Home />,                        access: Access.PUBLIC },
  { path: "/about-us",      name: "About Us",           element: <AboutUs />,                     access: Access.PUBLIC }, 
  { path: "/contact-us",    name: "Contact Us",         element: <ContactUs />,                   access: Access.PUBLIC },
  { path: "/events",        name: "Events",             element: <Events />,                      access: Access.PUBLIC },
  { path: "/projects",      name: "Projects",           element: <Projects />,                    access: Access.PUBLIC },
  { path: "/search-result", name: "Search Results",     element: <SearchResult />,                access: Access.PUBLIC },
  { path: "/login",         name: "Admin Login",        element: <Login />,                       access: Access.PUBLIC },

  // Admin routes.
  { path: "/dashboard",     name: "Admin Panel",        element: <AdminPanel />, access: Access.ADMIN },

  // Error route.
  { path: "*",              name: "np.isnan(\"page\")", element: <ErrorPage />,  access: Access.PUBLIC },
];


/**
 * Sets the title for the browser tab.
 * @param title The title to set.
 * @param description The description to set.
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
 */
const AnimatedRoutes = (props: any) => {
  const location = useLocation();

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
                  className="PageContainer"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration }}
                >
                  {element}
                </motion.div>
                {/* <NewsletterForm /> */}
              </>
          } />
        ))}

        <Route path="/login" element={
          <>
            <TabTitle title="Admin Login" />
            <motion.div
              className="PageContainer"
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