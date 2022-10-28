// Library imports.


// Component imports.
import { projectsListData as data } from "../utils/config";
import Card from "../components/Card";

// Media imports.



/**
 * Renders the Projects page.
 * @returns {JSX.Element} JSX Component.
 */
const Projects = () => {
  return (
    <div className="content">
      <br></br>
      <h1 className="heading">
        Become a Member and Join a Project Group Today!
      </h1>
      <h1 className="subheading">Click on the cards to learn more...</h1>
      <div className="projectsGrid">
        {data.map((project, index) => (
          // <MovingText
          //   type="fadeIn"
          //   duration="2000ms"
          //   delay="0s"
          //   direction="normal"
          //   timing="ease"
          //   iteration="1"
          //   fillMode="none"
          // >
            <Card
              key={index}
              title={project.title}
              id={project.id}
              src={project.src}
              concepts={project.concepts}
              tech={project.tech}
              body={project.body}
            >
              <p>
                {project.competition_info && (
                  <>
                    <a
                      className="cardLink"
                      href={project.competition_info}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Competition Info
                    </a>
                    &nbsp;|&nbsp;
                  </>
                )}
                <a
                  className="cardLink"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </p>
            </Card>
          // </MovingText>
        ))}
      </div>
    </div>
  );
}

export default Projects;
