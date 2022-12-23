// Library imports.
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Component imports.
import Background from "./components/Background/Background";
import TabTitle from "./components/common/TabTitle";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
  { path: "/",              name: "Main",           element: <Navigate replace to="/home" /> },
  { path: "/home",          name: "Home",           element: <Home /> },
  { path: "/about-us",      name: "About Us",       element: <AboutUs /> },
  { path: "/projects",      name: "Projects",       element: <Projects /> },
  { path: "/events",        name: "Events",         element: <Events /> },
  { path: "/contact-us",    name: "Contact Us",     element: <ContactUs /> },
  { path: "/search-result", name: "Search Results", element: <SearchResult /> },
  { path: "*",              name: "Page Not Found", element: <PageNotFound /> },
];


const App = () => {
  const [darkToggle, setDarkToggle] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Background src="https://images5.alphacoders.com/115/1156667.png" />

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
    </>
  );
}

export default App;
