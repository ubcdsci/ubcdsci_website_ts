// Library imports.
// import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Component imports.
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Pages imports.
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/Events/Events";
import ContactUs from "./pages/ContactUs/ContactUs";
import ErrorPage from "./pages/Error/Error";
import SearchResult from "./pages/SearchResult/SearchResult";


const routes = [
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
 * Renders the web app.
 * @returns {JSX.Element} JSX Component.
 */
const App = () => {
  // const [darkToggle, setDarkToggle] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Background
          src="https://images5.alphacoders.com/115/1156667.png"
          opacity={0.75}></Background>

        <Routes>
          {routes.map(({ path, name, element }) => (
            <Route
              key={name}
              path={path}
              element={
                <>
                  <TabTitle title={name} />
                  <NavBar currentLocation={name} />
                  {element}
                </>
            } />
          ))}
        </Routes>

        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
