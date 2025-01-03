// Library imports.
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

// Utility imports.
import { screenFade } from '@/utils/framerAnims';

// Component imports.
import { projectsListData as data } from '@/configs/config';

// Style imports.
import styles from './Projects.module.scss';

// Media imports.


/**
 * Creates a Card component.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Card = (props: {project: ProjectContent, children?: any}) => {
  const [orientation, setOrientation] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const duration = 0.5;
  const viewport = {
    once: true
  };

  const handleCardClick = (e : any) => {
    (e.target.tagName !== "A") && setOrientation((x) => !x);
  };

  return (
    <motion.div
      className={styles.Card}
      initial="offscreen"
      whileInView="onscreen"
      variants={screenFade}
      viewport={viewport}
      transition={{ duration }}
    >
      <div className={styles.ProjectCard} id={props.project.id} onClick={handleCardClick}>
        {orientation ? (
          <div className={styles.Back}>
            <h1>{props.project.title}</h1>
            
            {props.project.body}

            <div className={styles.Links}>
              { props.project.competition_info && (
                <a href={props.project.competition_info} target="_blank" rel="noreferrer">
                  Competition Info
                </a>
              )}
              <a href={props.project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ) : (
          <>
            {isMobile && (
              <div className={styles.Image}>
                <img
                  alt={"project: " + props.project.title}
                  src={props.project.image || ""}
                />
              </div>
            )}

            <div className={styles.Front}>
              <h1>{props.project.title}</h1>

              <p>{props.project.concepts}</p>

              <div className={styles.Tech}>
                { props.project.tech.map((tech : string, index : number) => (
                  <p key={index}>
                    {tech}{index !== (props.project.tech.length - 1) && ","}
                  </p>
                ))}
              </div>
            </div>

            {!isMobile && (
              <div className={styles.Image}>
                <img
                  alt={"project: " + props.project.title}
                  src={props.project.image}
                />
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};


/**
 * Renders the Projects page.
 * @returns {JSX.Element} JSX Component.
 */
const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.Header}>
        <h1>Become a Member and Join a Project Group Today!</h1>
        <h1>Click on the cards to learn more...</h1>
      </div>

      <div className={styles.ProjectsGrid}>
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
