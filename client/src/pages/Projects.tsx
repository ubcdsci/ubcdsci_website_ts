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
      <h1 className="heading text-center text-3xl font-bold">
        Become a Member and Join a Project Group Today!
      </h1>
      <h1 className="subheading text-center opacity-80
      font-bold">Click on the cards to learn more...</h1>
      <div className="projectsGrid grid lg:grid-cols-2 justify-evenly md:grid-cols-1">
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
                      className="cardLink no-underline text-sm text-[#006aff]"
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
                  className="cardLink no-underline text-sm text-[#006aff]"
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
