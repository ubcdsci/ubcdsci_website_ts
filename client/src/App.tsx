// Library imports.
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { animateScroll as scroll } from "react-scroll";

// Component imports.
import Background from "./components/Background/Background";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NewsletterForm from "./components/NewsletterForm/NewsletterForm";

// Pages imports.
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Projects from "./pages/Projects/Projects";
import Events from "./pages/Events/Events";
import ContactUs from "./pages/ContactUs/ContactUs";
import SearchResult from "./pages/SearchResult/SearchResult";
import Admin from "./pages/Admin/Admin";
import ErrorPage from "./pages/Error/Error";


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
 * Renders the web app.
 * @returns {JSX.Element} JSX Component.
 */
const App = () => {
  // const [darkToggle, setDarkToggle] = useState(false);
  const [user, setUser] = useState<{ token: string, user: string, id: number }>();

  const handleLogin = (data : any) => {
    axios.post("/auth/verify", data)
      .then((res) => {
        if (res.data.success) {
          alert("Logged in successfully!");
          setUser(data);
          localStorage.setItem("userData", JSON.stringify({
            token: data.token, user: data.user, id: data.id
          }));
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    setUser(undefined);
    localStorage.removeItem("userData");
    window.history.replaceState({}, document.title, "/auth/login");
    window.location.reload();
    scroll.scrollToTop({ duration: 500, delay: 0, smooth: "ease" });
  };

  const logoutButtonStyle = {
    alignSelf: 'center',
    width: '100%',
    paddingBottom: '2rem',
    background: 'rgba(var(--bg-dark), 0.8)',
    color: 'rgb(var(--primary-light))',
    fontWeight: 'bold',
    transition: 'all 0.2s ease-in-out',
  }
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("userData");
    if (loggedInUser) {
      handleLogin(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Background src="https://images5.alphacoders.com/115/1156667.png" opacity={0.8} blur={4} />

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
                  <NewsletterForm />
                </>
            } />
          ))}

          <Route path="/auth/login" element={user ? <Navigate replace to="/home" /> :
            <>
              <TabTitle title="Admin Login" />
              <NavBar currentLocation="Admin Login" />
              <Admin onLogin={handleLogin} />
            </> 
          } />
        </Routes>

        <Footer />
        <ScrollToTop />

        { user &&
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Logout of {user.user}
          </button>
        }
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
