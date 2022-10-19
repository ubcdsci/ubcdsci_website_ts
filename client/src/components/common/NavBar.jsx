// Library imports.
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

// Component imports.
import { navbarData as data } from "../utils/config";
import Button from "../components/Button";
import GreenButton from "../components/GreenButton";
// import SearchBar from '../components/SearchBar';

// Media imports.
import SimpleIcon from "../images/logo/simple-icon.png";

// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};

// Check if links to external site and returns element.
let checkExternal = (link, pageLink) => {
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
function createDropDown(page, pageLink) {
  return (
    <div className="dropDownMenu">
      <ul className="dropDownContent">
        {page.dropDowns.map((dd) => {
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
export default function NavBar(props) {
  // Scroll wheel event; show/hide navigation bar.
  let [mouseHover, setMouseHover] = useState(false);
  let [visible, setVisible] = useState(true);
  let visiblity = visible ? "visible" : "hidden";

  // Scroll wheel event; animate navigation bar based on position.
  let [pos, setPos] = useState(true);
  let position = pos ? "" : " unpinned";

  // Sets effects on component mount.
  useEffect(() => {
    let handleNavBarScroll = (e) => {
      setVisible(e.deltaY === 0 || mouseHover);
    };

    let handleAnimTransition = () => {
      var bodyRect = document.body.getBoundingClientRect();
      var refRect = document.querySelector(".banner").getBoundingClientRect();
      setPos(window.pageYOffset < refRect.bottom - bodyRect.top);
    };

    let handleMouseHoverTop = (e) => {
      var refHeight = document.querySelector(".navbar").clientHeight;
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
          <Link
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
          </Link>
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
