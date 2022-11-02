// Library imports.


// Component imports.
import ContentStrip from "../components/ContentStrip";
import ExecProfile from "../components/ExecProfile";
import FAQ from "../components/FAQ";

// Media imports.
import MissionGif from "../images/5.gif";
import DescriptionGif from "../images/2.gif";



/**
 * Renders the About page.
 * @returns {JSX.Element} JSX Component.
 */
const AboutUs = () => {
  document.getElementById("root");

  return (
    <>
      <div className="aboutus--content pt-20 md:pt-0">
        <div id="clubDescription">
          <ContentStrip
            type="strip1"
            title="Club Description"
            text={
              <blockquote style={{ fontWeight: "300", fontSize: "100%" }}>
                The AMS Data Science Club at UBC aims to provide students with
                an opportunity to learn about data science algorithms and
                methodologies by working together to solve difficult problems
                with data. Members are able to learn from mentors, attend
                events, and join a team to build a project or enter data science
                competitions.
              </blockquote>
            }
            postImageSource={MissionGif}
          />
        </div>

        <div id="missionStatement">
          <ContentStrip
            type="strip2"
            title="Our Mission Statement"
            text={
              <blockquote>
                <p>The purposes of this AMS Club are as follows:</p>
                <p>
                  1. Provide students with engaging projects to learn data
                  science skills through application.
                </p>
                <p>
                  2. Enable and encourage students to find opportunities
                  involving data science outside of the club and/or UBC.
                </p>
                <p>
                  3. Promote learning by hosting and facilitating events for
                  students to explore data science.
                </p>
                <p>
                  4. Create an environment which allows for students new to data
                  science to learn from experienced students and for experienced
                  students to learn by mentoring.
                </p>
                <p>
                  The Data Science Club’s mission is to provide students with an
                  opportunity to learn about data science algorithms and
                  methodologies by working together to solve specific problems.
                </p>
              </blockquote>
            }
            postImageSource={DescriptionGif}
          />
        </div>
      </div>
      <div id="executiveTeam">
        <ContentStrip
          type="strip3--matrix"
          title="Club Executives"
          content={<ExecProfile />}
        />
      </div>
      {/* <AnimationOnScroll initiallyVisible={true} animateIn="animate__headShake"> */}
        <div id="faq">
          <ContentStrip
            type="strip3--matrix"
            title="FAQ"
            text={<blockquote></blockquote>}
            content={<FAQ></FAQ>}
          />
        </div>
      {/* </AnimationOnScroll> */}
    </>
  );
}

export default AboutUs;
