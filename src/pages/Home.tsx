import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { screenFade } from '@/utils/framerAnims';

import GreenButton from '@/components/GreenButton';
import CarouselFrame from '@/components/CarouselFrame';

import styles from '@/assets/styles/pages/Home.module.scss';

import titleImage from '@/assets/images/1.gif';
import Page from '@/templates/Page';
import { ROUTES } from '@/configs/routes';


/**
 * Renders the Home page. \
 * This is the landing page of the website.
 * @route /
 */
const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const events = false;

  const duration = 0.5;
  const viewport = {
    once: true
  };

  return (
    <Page title="Home">
      <div className={styles.Home}>
        <motion.div
          className={styles.MainContent}
          initial="offscreen"
          whileInView="onscreen"
          variants={screenFade}
          viewport={viewport}
          transition={{ duration }}
        >
          { isMobile &&
            <img src={titleImage} alt="title" />
          }

          <div className={styles.TextBlock}>
            <h1>UBC</h1>
            <h1>Data Science Club</h1>

            <p>
              A student-led club that aims to provide students with an
              opportunity to learn about data science through hands-on learning.
            </p>

            <div className={styles.Buttons}>
              <GreenButton text="Ongoing Projects" href={ROUTES.PROJECTS} />
              <GreenButton text="Upcoming Events" href={ROUTES.EVENTS} />
              <GreenButton text="Our Club" href={ROUTES.ABOUT_US} />
            </div>
          </div>
          
          { !isMobile &&
            <img src={titleImage} alt="title" />
          }
        </motion.div>

        {/* <motion.div
          className={styles.RecentEvents}
          initial="offscreen"
          whileInView="onscreen"
          variants={screenFade}
          viewport={viewport}
          transition={{ duration }}
        >
          <h1>Recent Events</h1>

          <div className={styles.Events}>
            { events ?
              <>
                
              </>
              :
              <p>No events found.</p>
            }
          </div>
        </motion.div> */}

        {/* <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={screenFade}
          viewport={viewport}
          transition={{ duration }}
        >
          <CarouselFrame />
        </motion.div> */}

        <motion.div
          className={styles.SponsorContent}
          initial="offscreen"
          whileInView="onscreen"
          variants={screenFade}
          viewport={viewport}
          transition={{ duration }}
        >
            <h1>Become a Sponsor!</h1>

            <p>
              Learn about our sponsorship benefits by&nbsp;
              <a href="/media/UBCDsci_Sponsorship_Package.pdf" download>
                downloading
              </a>
              &nbsp;our sponsorship package.
            </p>
        </motion.div>
      </div>
    </Page>
  );
};

export default Home;
