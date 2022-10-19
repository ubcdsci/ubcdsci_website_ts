// Library imports.
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

// Component imports.
import { footerData as data } from "../utils/config";
// import NewsletterForm from "./NewsletterForm";

// Media imports.
import Icon from "../images/logo/icon-white.png";

// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};

// Check if links to external site and returns element.
let checkExternal = (link) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        className="small"
        draggable="false"
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
    );
  } else {
    return (
      <Link smooth to={link.href} className="small" draggable="false">
        {link.text}
      </Link>
    );
  }
};

/**
 * Renders a Footer.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function Footer(props) {
  return (
    <footer className="footer">
      {/* NEWSLETTER FORM BLOCK */}
      {/* <NewsletterForm /> */}

      {/* SOCIAL MEDIA BLOCK */}
      <div className="smBlock">
        <br></br>
        <h4 className="stayConnected">Stay Connected with UBC Data Science!</h4>
        <div className="smButtons">
          {data.smLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="iconLink"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="horizontalRule" />

      {/* COLUMN LINKS BLOCK */}
      <div className="linksBlock">
        {data.columns.map((col) => (
          <div key={col.title} className="column">
            <h4 className="columntitle">
              <Link
                to={col.href}
                className="titleLink"
                onClick={scrollTop}
                draggable="false"
              >
                {col.title}
              </Link>
            </h4>

            {col.links.map((link, i) => (
              <p key={link.text + i}>{checkExternal(link)}</p>
            ))}
          </div>
        ))}
      </div>

      {/* COPYRIGHT BLOCK */}
      <div className="copyrightBlock">
        <span className="copyright">
          <img src={Icon} alt="icon" draggable="false" />
          <p>
            Copyright © {new Date().getFullYear()} UBC Data Science Club. <br />
            All Rights Reserved.
          </p>
        </span>
      </div>
    </footer>
  );
}
