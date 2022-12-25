// Library imports.
import { useMediaQuery } from "react-responsive";

// Component imports.
import GreenButton from "../../components/GreenButton";

// Style imports.
import styles from "./Home.module.scss";

// Media imports.
import titleImage from "../../images/1.gif";


/**
 * Renders the Home page.
 * @returns {JSX.Element} JSX Component.
 */
const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className={styles.Home}>
      <div className={styles.MainContent}>
        { isMobile && <img src={titleImage} alt="title" /> }

        <div className={styles.TextBlock}>
            <h1>UBC</h1>
            <h1>Data Science Club</h1>

            <p>
              A student-led club that aims to provide students with an
              opportunity to learn about data science through hands-on learning.
            </p>

            <div className={styles.Buttons}>
              <GreenButton text="Ongoing Projects" href="projects" />
              <GreenButton text="Upcoming Events" href="/events" />
              <GreenButton text="Our Club" href="/about-us" />
            </div>
        </div>
        
        { !isMobile && <img src={titleImage} alt="title" /> }
      </div>

      <div className={styles.SponsorContent}>
          <h1>Become a Sponsor!</h1>

          <p>
            Learn about our sponsorship benefits by&nbsp;
            <a href="/media/UBCDsci_Sponsorship_Package.pdf" download>
              downloading
            </a>
            &nbsp;our sponsorship package.
          </p>
      </div>
    </div>
  );
};

export default Home;
