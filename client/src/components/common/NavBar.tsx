// Library imports.
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

// Interface imports.
import { DropDowns, Page } from "../../utils/config";

// Component imports.
import { navbarData as data } from "../../utils/config";
import Button from "../Button";
import GreenButton from "../GreenButton";
// import SearchBar from '../SearchBar';

// Media imports.
import SimpleIcon from "../../images/logo/simple-icon.png";




// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};

// Check if links to external site and returns element.
let checkExternal = (link: DropDowns, pageLink: string) => {
  if (link.external) {
    return (
      <a href={link.href} className="ddLink" target="_blank" rel="noreferrer">
        {link.text}
      </a>
    );
  } else {
    return (
      <HashLink smooth to={`${pageLink}${link.href}`} className="ddLink">
        {link.text}
      </HashLink>
    );
  }
};

/**
 * Recursively generates a drop down menu.
 * @param {JSONObject} page Page JSON object.
 * @returns {JSX.Element} JSX Component.
 */
function createDropDown(page: (Page | DropDowns), pageLink: string) {
  return (
    <div className="dropDownMenu">
      <ul className="dropDownContent">
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
  );
}

/**
 * Renders a NavBar.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const NavBar = (props: any) => {
  // Scroll wheel event; show/hide navigation bar.
  let [mouseHover, setMouseHover] = useState(false);
  let [visible, setVisible] = useState(true);
  let visiblity = visible ? "visible" : "hidden";

  // Scroll wheel event; animate navigation bar based on position.
  let [pos, setPos] = useState(true);
  let position = pos ? "" : " unpinned";

  // Sets effects on component mount.
  useEffect(() => {
    let handleNavBarScroll = (e: WheelEvent) => {
      setVisible(e.deltaY === 0 || mouseHover);
    };

    let handleAnimTransition = () => {
      var bodyRect = document.body.getBoundingClientRect();
      setPos(window.pageYOffset < bodyRect.top);
    };

    let handleMouseHoverTop = (e: MouseEvent) => {
      let refHeight;
      let navbar = document.querySelector(".navbar");

      (navbar !== null) ? refHeight = navbar.clientHeight : refHeight = 0;
      setMouseHover(e.clientY <= refHeight);
      setVisible(visible || mouseHover);
    };

    window.addEventListener("wheel", handleNavBarScroll);
    window.addEventListener("scroll", handleAnimTransition);
    window.addEventListener("mousemove", handleMouseHoverTop);
    return () => {
      window.removeEventListener("wheel", handleNavBarScroll);
      window.removeEventListener("scroll", handleAnimTransition);
      window.removeEventListener("mousemove", handleMouseHoverTop);
    };
  });

  return (
    <>
      <nav className={"navbar " + visiblity + position} id="navigationBar">
        <span className="homeContainer">
          <HashLink
            to="/home"
            className="homelink"
            onClick={scrollTop}
            draggable="false"
          >
            <img
              src={SimpleIcon}
              alt="Home"
              draggable="false"
              className={
                "homeIcon " +
                (props.currentLocation === "Home" ? "CurrentLocation" : "")
              }
              style={{ marginRight: "5px" }}
            />
          </HashLink>
        </span>

        <span className="pagesContainer">
          {data.map((page) => (
            <span key={page.key} className="navPageButton">
              <Button
                text={page.text}
                href={page.href}
                currentLocation={props.currentLocation === page.key}
              />
              {createDropDown(page, page.href)}
            </span>
          ))}

          <GreenButton
            text="Register Now"
            href="https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC"
          ></GreenButton>
        </span>

        <span className="searchBarContainer">{/* <SearchBar /> */}</span>
      </nav>
    </>
  );
}

export default NavBar;