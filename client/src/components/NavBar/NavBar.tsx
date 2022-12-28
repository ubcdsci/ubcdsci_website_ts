// Library imports.
import { useState, useEffect, useCallback } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BsList, BsX, BsPencilSquare } from "react-icons/bs";

// Type declarations imports.
import { DropDowns, Page } from "../../declarations";

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
      <a href={link.href} target="_blank" rel="noreferrer">
        {link.text}
      </a>
    );
  } else {
    return (
      <Link smooth to={`${pageLink}${link.href}`}>
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
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mouseOver, setMouseOver] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const scrollTop = () => {
    setToggleNavMenu(false);
    scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
  };

  const toggleMenu = () => {
    setToggleNavMenu(!toggleNavMenu);
  };

  const handleScroll = useCallback(
    (e : Event) => {
      const offset = window.scrollY;
      const navbarHeight = document.getElementsByClassName(styles.NavBar)[0].clientHeight;

      setScrolled(offset > navbarHeight);
      setVisible(offset <= scrollOffset || mouseOver);
      setScrollOffset(offset);
    }, [scrollOffset, mouseOver]
  );

  const handleMouseEnter = (e: any) => {
    setMouseOver(true);
    setVisible(true);
  };

  const handleMouseLeave = (e: any) => {
    setMouseOver(false);
    // setVisible(!scrolled);
  };

  useEffect(() => {
    setScrollOffset(window.scrollY);
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [handleScroll]);

  return (
    <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      { isMobile ?
        <>
          <div className={`${styles.NavBar} ${scrolled ? styles.NavBarScrolled : ""}`}>
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
            <SearchBar />
            
            <ul className={styles.NavButtonsMenu}>
              <li>
                <a
                  href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.NavButtonRegister}
                >
                  <BsPencilSquare />
                  <p>Register Now</p>
                </a>
              </li>

              {data.map((page) => (
                <li key={page.key}>
                  <Link
                    to={page.href}
                    onClick={scrollTop}
                    className={(props.currentLocation === page.key ? styles.NavButtonCurrentLocation : styles.NavButton)}
                  >
                    {page.mobileIcon}
                    <p>{page.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
        :
        <div className={`${styles.NavBar} ${(!visible) ? styles.NavBarHidden : (scrolled) ? styles.NavBarScrolled : ""}`}>
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
