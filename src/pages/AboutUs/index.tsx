// Library imports.
import { motion } from 'framer-motion';

// Utility imports.
import { screenLeftToRight, screenRightToLeft, screenFade } from '@/utils/framerAnims';

// Component imports.
import { faqData as data } from '@/configs/config';
import AccordionItem from '@/components/AccordionItem';
import ContentStrip from '@/components/ContentStrip';
import ExecProfile from '@/components/ExecProfile';

// Style imports.
import styles from './AboutUs.module.scss';

// Media imports.
import DescriptionGif from '@/images/2.gif';
import MissionGif from '@/images/5.gif';


/**
 * Renders the About page.
 * @returns {JSX.Element} JSX Component.
 */
const AboutUs = () => {
  const duration = 0.5;
  const viewport = {
    once: true
  };

  return (
    <div className={styles.AboutUs}>
      <motion.div
        id="clubDescription"
        initial="offscreen"
        whileInView="onscreen"
        variants={screenLeftToRight}
        viewport={viewport}
        transition={{ duration }}
      >
        <ContentStrip
          flex="row"
          title="Club Description"
          text={
            <blockquote>
              The AMS Data Science Club at UBC aims to provide students an opportunity to
              learn about the field of data science and subjects related to data science.
              Members are able to attend events such as workshops, learn from mentors,
              and join a team to build a project or enter data science competitions.
            </blockquote>
          }
          imageSource={MissionGif}
        />
      </motion.div>

      <motion.div
        id="missionStatement"
        initial="offscreen"
        whileInView="onscreen"
        variants={screenRightToLeft}
        viewport={viewport}
        transition={{ duration }}
      >
        <ContentStrip
          flex="row"
          title="Our Mission Statement"
          text={
            <blockquote>
              <p>The purposes of this AMS Club are as follows:</p>
              <br />
              <ol style={{listStyle: "decimal", display: "flex", flexDirection: "column", gap: "1rem", marginLeft: "1rem"}}>
                <li>
                  Provide students with engaging projects to learn and apply skills in data science.
                </li>
                <li>
                  Enable and encourage students to find opportunities involving
                  data science outside of the club and/or UBC.
                </li>
                <li>
                  Promote learning by hosting and facilitating events for
                  students to explore topics in data science.
                </li>
                <li>
                  Create a supportive environment that empowers students new to data
                  science by learning from experienced individuals, and for the experienced
                  to learn through mentoring.
                </li>
              </ol>
              <br />
              <p>
                The UBC Data Science Club's goal is to provide students with an
                opportunity to learn about data science algorithms and
                methodologies through collaborative work in order to solve specific
                real-world problems.
              </p>
            </blockquote>
          }
          imageSource={DescriptionGif}
        />
      </motion.div>

      <motion.div
        id="executiveTeam"
        initial="offscreen"
        whileInView="onscreen"
        variants={screenFade}
        viewport={viewport}
        transition={{ duration }}
      >
        <ContentStrip
          flex="column"
          title="Club Executives"
          content={<ExecProfile />}
        />
      </motion.div>

      <motion.div
        id="faq"
        initial="offscreen"
        whileInView="onscreen"
        variants={screenFade}
        viewport={viewport}
        transition={{ duration }}
      >
        <ContentStrip
          flex="column"
          title="FAQ"
          content={
            <div className={styles.Accordion}>
              {data.map((item, index) => (
                <AccordionItem key={index} item={item} index={index} />
              ))}
            </div>
          }
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
