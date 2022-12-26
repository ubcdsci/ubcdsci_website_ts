// Library imports.
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";

// Component imports.
import SearchBar from '../../components/SearchBar/SearchBar';

// Style imports.
import styles from "./Error.module.scss";

// Media imports.
import ErrorImage from "../../images/logo/logo.png";


// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};

/**
 * Renders the 404 Error page.
 * @returns {JSX.Element} JSX Component.
 */
const ErrorPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className={styles.ErrorPage}>
      <div className={styles.TextBlock}>
        <h1 className={styles.Oops}>OOPS!</h1>

        <h1 className={styles.Error}>404 ERROR – PAGE NOT FOUND</h1>

        <p>
          Looks like we have a missing page or something.<br />
          Let's just go ahead and set&nbsp;
          <code>na.rm=TRUE</code>... <br />
          ...and voila! A nice&nbsp;
          <Link to="/home" onClick={scrollTop}>clean page</Link> is waiting for you!
        </p>

        <h4 className={styles.Search}>(alternatively, try using the search bar below)</h4>
        <SearchBar />
      </div>

      { !isMobile && <img src={ErrorImage} alt="Not even this graphic wants to load :/" /> }
    </div>
  );
};

export default ErrorPage;
