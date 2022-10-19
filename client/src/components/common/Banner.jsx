// Library imports.
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Component imports.
import { particlesData as data } from "../utils/config";

// Media imports.
import IconDark from "../images/logo/icon-colour-white.png";
import IconLight from "../images/logo/icon-colour-black.png";

/**
 * Renders a NavBar.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function Banner(props) {
  // Initialize tsParticles
  let particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="banner">
      <div className="vignette">
        <div className="vignetteDark" />
        <div className="vignetteLight" />
      </div>
      <Particles id="particles" init={particlesInit} options={data} />
      <span className="homeContainer">
        <Link to="/home" className="homelink" draggable="false">
          <div className="homeIcons">
            <img
              src={IconDark}
              alt="Home"
              className="homeDark"
              draggable="false"
            />
            <img
              src={IconLight}
              alt="Home"
              className="homeLight"
              draggable="false"
            />
          </div>
          <h1 className="titlefront">UBC Data</h1>
          <h1 className="titleback">Sci</h1>
        </Link>
      </span>
    </div>
  );
}
