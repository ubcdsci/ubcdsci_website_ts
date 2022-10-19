// Library imports.
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// Component imports.
// import SearchBar from '../components/SearchBar';

// Media imports.
import ErrorImage from "../images/error.png";

/**
 * Renders the 404 Error page.
 * @returns {JSX.Element} JSX Component.
 */
export default function PageNotFound() {
  return (
    <>
      <div className="container" style={{ marginBottom: "5%" }}>
        <div className="textBlock">
          <h1 className="oops">OOPS!</h1>
          <h1 className="error">404 ERROR – PAGE NOT FOUND</h1>
          <p>
            Looks like we have a missing page or something! <br />
            Let's just go ahead and set&nbsp;
            <span>na.rm=TRUE</span>... <br />
            ...and voila! A nice&nbsp;
            <Link to="/home">clean page</Link>!
          </p>
          {/* <h4 className="search">(alternatively, try searching below)</h4>
          <SearchBar /> */}
        </div>
        <img src={ErrorImage} alt="404 Error" />
      </div>
    </>
  );
}
