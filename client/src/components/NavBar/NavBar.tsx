// Library imports.
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BsList, BsX } from "react-icons/bs";

// Interface imports.
import { DropDowns, Page } from "../../configs/config";

// Style imports.
import styles from "./NavBar.module.scss";

// Component imports.
import { navbarData as data } from "../../configs/config";
import SearchBar from '../SearchBar/SearchBar';

// Media imports.
import VectorLogo from "../VectorLogo";


// Check if links to external site and returns element.
const checkExternal = (link: DropDowns, pageLink: string) => {
  if (link.external) {
    return (
      <a href={link.href} className="ddLink" target="_blank" rel="noreferrer">
        {link.text}
      </a>
    );
  } else {
    return (
      <Link smooth to={`${pageLink}${link.href}`} className="ddLink">
        {link.text}
      </Link>
    );
  }
};

/**
 * Recursively generates a drop down menu.
 * @param {JSONObject} page Page JSON object.
 * @returns {JSX.Element} JSX Component.
 */
const createDropDown = (page: (Page | DropDowns), pageLink: string) => {
  return (page.dropDowns ?
    <div className={`${styles.DropDownMenu} ${styles.HiddenDropDownMenu}`}>
      <ul className={styles.DropDownContent}>
        {page.dropDowns && page.dropDowns.map((dd) => {
          return (
            <li key={dd.href}>
              {checkExternal(dd, pageLink)}
              {dd.dropDowns !== undefined ? createDropDown(dd, pageLink) : null}
            </li>
          );
        })}
      </ul>
    </div>
    : null
  );
};

/**
 * Renders a NavBar.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const NavBar = (props: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const scrollTop = () => {
    setToggleNavMenu(false);
    scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    const navbarHeight = document.getElementsByClassName(styles.NavBar)[0].clientHeight;

    (offset > navbarHeight) ? setScrolled(true) : setScrolled(false);
  };

  const toggleMenu = () => {
    setToggleNavMenu(!toggleNavMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      { isMobile ?
        <>
          <div className={`${styles.NavBar} ${scrolled ? styles.NavBarScrolled : "" }`}>
            <div className={styles.MobileContainer}>
              <Link to="/home" onClick={scrollTop} className={styles.HomeButton}>
                <VectorLogo
                  alt="Home"
                  className={(props.currentLocation === "Home" ? styles.HomeButtonCurrentLocation : styles.HomeButton)}
                />
              </Link>
              
              <button className={styles.HamburgerMenuButton} onClick={toggleMenu}>
                { toggleNavMenu ? <BsX /> : <BsList /> }
              </button>
            </div>
          </div>
          
          <div className={`${toggleNavMenu ? styles.HamburgerMenu : styles.HamburgerMenuClosed}`}>
            <ul className={styles.NavButtonsMenu}>
              <li>
                <SearchBar />
              </li>
              {data.map((page) => (
                <li key={page.key}>
                  <Link
                    to={page.href}
                    onClick={scrollTop}
                    className={(props.currentLocation === page.key ? styles.NavButtonCurrentLocation : styles.NavButton)}
                  >
                    {page.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
        :
        <div className={`${styles.NavBar} ${scrolled ? styles.NavBarScrolled : "" }`}>
          <div className={styles.Container}>
            <span className={styles.NavButtons}>
              <Link to="/home" onClick={scrollTop}>
                <VectorLogo
                  alt="Home"
                  className={(props.currentLocation === "Home" ? styles.HomeButtonCurrentLocation : styles.HomeButton)}
                />
              </Link>

              {data.map((page) => (
                <span key={page.key} className={styles.Button}>
                  <Link
                    to={page.href}
                    onClick={scrollTop}
                    className={(props.currentLocation === page.key ? styles.NavButtonCurrentLocation : styles.NavButton)}
                  >
                    {page.text}
                  </Link>
                  {createDropDown(page, page.href)}
                </span>
              ))}
              
              <span> 
                <a
                  target="_blank"
                  href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
                  rel="noreferrer noopener"
                  className={styles.RegistrationButton}
                >
                  Register Now
                </a>
              </span>
            </span>

            <SearchBar />
          </div>
        </div>
      }
    </nav>
  );
};

export default NavBar;
