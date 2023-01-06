// Library imports.
import { useState } from "react";

// Component imports.
import { projectsListData as data } from "../../configs/config";

// Style imports.
import styles from "./Projects.module.scss";

// Media imports.


/**
 * Creates a Card component.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Card = (props: {project : ProjectContent, children?: any}) => {
  const [orientation, setOrientation] = useState(false);

  const handleCardClick = () => {
    setOrientation((x) => !x);
  };

  return (
    <div className={styles.Card}>
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

            <div className={styles.Image}>
              <img
                alt={"project: " + props.project.title}
                src={props.project.image}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};


/**
 * Renders the Projects page.
 * @returns {JSX.Element} JSX Component.
 */
const Projects = () => {
  return (
    <div className={styles.Projects}>
      <h1>Become a Member and Join a Project Group Today!</h1>
      <h1>Click on the cards to learn more...</h1>

      <div className={styles.ProjectsGrid}>
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
