// Library imports.


// Component imports.
import GreenButton from "../components/GreenButton";

// Media imports.
import titleImage from "../images/1.gif";
// import FAQImage from "../images/3.gif";




/**
 * Renders the Home page.
 * @returns {JSX.Element} JSX Component.
 */
const Home = () => {
  return (
    <>
      <div id="dsci_title">
        <span>
          {/* <MovingText
            type="fadeInFromLeft"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          > */}
            <h1 className="title--home">UBC</h1>
            <h1 className="title--home2">DataSci</h1>
          {/* </MovingText> */}
          {/* <MovingText
            type="fadeInFromLeft"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          > */}
            <p className="subtitle--home">
              A student-led club that aims to provide students with an
              opportunity to learn about data science through hands-on learning
            </p>
            <div className="buttons--home">
              <GreenButton
                text="Ongoing Projects"
                href="projects"
              ></GreenButton>
              <GreenButton text="Upcoming Events" href="/events"></GreenButton>
              <GreenButton text="Our Club" href="/about-us"></GreenButton>
            </div>
          {/* </MovingText> */}
        </span>
        <span>
          {/* <MovingText
            type="fadeInFromRight"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          > */}
            <img src={titleImage} alt="title" className="titleImage"></img>
          {/* </MovingText> */}
        </span>
      </div>

      <div id="sponsorUs">
        {/* <ScrollAnimation animateIn="fadeIn"> */}
          <h1 className="sponsor-us--title">Become a Sponsor!</h1>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeIn" delay={200}> */}
          <code className="sponsor-us--text">
            Learn about our sponsorship benefits by {""}
            <a
              href="/media/UBCDsci_Sponsorship_Package.pdf"
              className="sponsor-us--link"
              download
            >
              <code style={{ fontWeight: "bold", fontSize: "105%" }}>
                downloading our sponsorship package
              </code>
            </a>
            .
          </code>
        {/* </ScrollAnimation> */}
      </div>
    </>
  );
}

export default Home;
