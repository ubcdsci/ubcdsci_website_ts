import { HashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';

import { scrollTop } from "@/utils/mouseScrolling";

import SearchBar from '@/components/SearchBar';

import styles from "@/assets/styles/pages/PageNotFound.module.scss";

import { LogoColour as Logo } from '@/components/Logos';
import Page from '@/templates/Page';


/**
 * Renders the 404 Error page.
 * @returns {JSX.Element} JSX Component.
 */
const ErrorPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Page title={"np.isnan(\"page\")"}>
      <div className={styles.PageNotFound}>
        { isMobile && <Logo className={styles.Logo} /> }

        <div className={styles.TextBlock}>
          <h1 className={styles.Oops}>OOPS!</h1>

          <h1 className={styles.Error}>404 ERROR – PAGE NOT FOUND</h1>

          <p>
            Looks like we have a missing page or something.<br />
            Let's just go ahead and set&nbsp;
            <code>na.rm=TRUE</code>... <br />
            ...and voila! A nice&nbsp;
            <Link to="/home" onClick={() => scrollTop()}>clean page</Link> is waiting for you!
          </p>

          {/* <h4 className={styles.Search}>(alternatively, try using the search bar below)</h4>
          <SearchBar /> */}
        </div>

        { !isMobile && <Logo className={styles.Logo} /> }
      </div>
    </Page>
  );
};

export default ErrorPage;
