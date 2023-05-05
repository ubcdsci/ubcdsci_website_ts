// Library imports.
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { BsPencilSquare, BsHouseFill } from 'react-icons/bs';

// Utility imports.
import { scrollTop } from '@/utils/mouseScrolling';

// Style imports.
import styles from './NavBar.module.scss';

// Component imports.
import { navbarData as data } from '@/configs/config';
import SearchBar from '@/components/SearchBar/SearchBar';
import GreenButton from '@/components/GreenButton/GreenButton';

// Media imports.
import { ReactComponent as Logo } from '@/images/logo/logo-bw.svg';


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
  // const [scrollOffset, setScrollOffset] = useState(0);

  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 1080px)" });

  const handleScrollingTop = () => {
    setToggleNavMenu(false);
    scrollTop();
  };

  const toggleMenu = () => {
    setToggleNavMenu(!toggleNavMenu);
  };

  const handleScroll = useCallback(
    (e : Event) => {
      const offset = window.scrollY;
      const threshold = document.getElementsByClassName(styles.NavBar)[0].clientHeight || 0;

      setScrolled(offset > threshold);
      setVisible((!scrolled || offset <= threshold) || mouseOver); // replace !scrolled with offset <= scrollOffset for visibility when scrolling up
      // setScrollOffset(offset);
    }, [scrolled, mouseOver]
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
    // setScrollOffset(window.scrollY);
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [handleScroll]);

  return (
    <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      { isMobile ?
        <>
          <div className={`${styles.NavBar} ${scrolled ? styles.NavBarScrolled : ""} ${toggleNavMenu ? styles.NavBarScrolled : ""}`}>
            <div className={styles.MobileContainer}>
              <Link to="/home" onClick={handleScrollingTop} className={styles.HomeButton}>
                <Logo className={(location.pathname === "/home" ? styles.HomeButtonCurrentLocation : styles.HomeButton)} />
              </Link>
              
              <button className={`${toggleNavMenu ? styles.HamburgerMenuButtonClosed : styles.HamburgerMenuButton}`} onClick={toggleMenu}>
                <div />
                <div />
                <div />
              </button>
            </div>
          </div>
          
          <div className={`${toggleNavMenu ? styles.HamburgerMenu : styles.HamburgerMenuClosed}`}>
            {/* <SearchBar /> */}
            
            <ul className={styles.NavButtonsMenu}>
              <li>
                <a
                  href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.NavButtonRegister}
                >
                  <BsPencilSquare />
                  <p>Register Now!</p>
                </a>
              </li>

              <li>
                <Link
                  to={'/home'}
                  onClick={handleScrollingTop}
                  className={(location.pathname === '/home' ? styles.NavButtonCurrentLocation : styles.NavButton)}
                >
                  <BsHouseFill />
                  <p>Home</p>
                </Link>
              </li>

              {data.map((page) => (
                <li key={page.key}>
                  <Link
                    to={page.href}
                    onClick={handleScrollingTop}
                    className={(location.pathname === page.href ? styles.NavButtonCurrentLocation : styles.NavButton)}
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
              <Link to="/home" onClick={handleScrollingTop}>
                <Logo className={(location.pathname === "/home" ? styles.HomeButtonCurrentLocation : styles.HomeButton)} />
              </Link>

              {data.map((page) => (
                <span key={page.key} className={styles.Button}>
                  <Link
                    to={page.href}
                    onClick={handleScrollingTop}
                    className={(location.pathname === page.href ? styles.NavButtonCurrentLocation : styles.NavButton)}
                  >
                    {page.text}
                  </Link>
                  {createDropDown(page, page.href)}
                </span>
              ))}

              <GreenButton
                text="Register Now"
                href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
                target="_blank"
                rel="noreferrer noopener"
              />
            </span>

            {/* <SearchBar /> */}
          </div>
        </div>
      }
    </nav>
  );
};

export default NavBar;
