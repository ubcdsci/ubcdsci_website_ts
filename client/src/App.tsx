// Library imports.
// import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import ReactSwitch from "react-switch";

// Component imports.
import TabTitle from "./components/common/TabTitle";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

// Pages imports.
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import SearchResult from "./pages/SearchResult";

// Style imports.

// Media imports.


const routes = [
  { path: "/", name: "Main", element: <Navigate replace to="/home" /> },
  { path: "/home", name: "Home", element: <Home /> },
  // { path: "/about-us", name: "About Us", element: <AboutUs /> },
  // { path: "/projects", name: "Projects", element: <Projects /> },
  // { path: "/events", name: "Events", element: <Events /> },
  // { path: "/contact-us", name: "Contact Us", element: <ContactUs /> },
  // { path: "/search-result", name: "Search Results", element: <SearchResult /> },
  // { path: "*", name: "Page Not Found", element: <PageNotFound /> },
];


const App = () => {
  return (
    <>
      <BrowserRouter>
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

      {/* <div
        className="themeSwitcher"
        title={(theme === "light" ? "Dark" : "Light") + " Mode: Alt+C"}
      >
        <label>{theme === "dark" ? "Dark" : "Light"} Mode</label>
        <ReactSwitch
          className="toggleSwitch"
          onChange={toggleTheme}
          checked={theme === "dark"}
          uncheckedIcon={false}
          checkedIcon={false}
          width={40}
          height={20}
        />
      </div> */}
    </>
  );
}

export default App;
