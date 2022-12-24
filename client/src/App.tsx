// Library imports.
// import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component imports.
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Pages imports.
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SearchResult from "./pages/SearchResult";

// Style imports.


// Media imports.


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
 * @param {String} props.title The title to set.
 * @returns {JSX.Element} JSX Component.
 */
const TabTitle = (props: any) => {
  return (
    <Helmet>
      <title>{props.title} – UBC Data Science Club</title>
      {props.description !== undefined ? (
        <meta name="description" content={props.description} />
      ) : (
        <meta name="description" content={`
          AMS UBC Data Science Club
        `} />
      )}
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
    <BrowserRouter>
      <Background
        src="https://images5.alphacoders.com/115/1156667.png"
        opacity={0.75}
        blur={2}
      />

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
  );
};

export default App;
