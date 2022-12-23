// Library imports.
import { AnimationOnScroll } from "react-animation-on-scroll";

// Component imports.
// import MovingText from "react-moving-text";
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
      <div id="dsci_title" className="flex items-center p-16 md:p-10">
        <div className="md:p-10 lg:w-1/2 lg:px- lg:py-15">
          {/* <MovingText
            type="fadeInFromLeft"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          > */}
            <h1 className="text-7xl font-bold lg:text-8xl my-2">UBC</h1>
            <h1 className="text-7xl font-bold text-txthl lg:text-8xl">DataSci</h1>
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
            <p className="subtitle--home my-4">
              A student-led club that aims to provide students with an
              opportunity to learn about data science through hands-on learning
            </p>
            <div className="buttons--home flex">
              <GreenButton
                text="Ongoing Projects"
                href="projects"
              ></GreenButton>
              <GreenButton text="Upcoming Events" href="/events"></GreenButton>
              <GreenButton text="Our Club" href="/about-us"></GreenButton>
            </div>
          {/* </MovingText> */}
        </div>
        <div className="titleImage hidden lg:inline w-1/2 py-10">
          {/* <MovingText
            type="fadeInFromRight"
            duration="1500ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          > */}
            <img src={titleImage} alt="title"></img>
          {/* </MovingText> */}
        </div>
      </div>

      <div id="sponsorUs" className="bg-sponsor h-80 bg-blend-lighten	bg-bg p-10">
        <AnimationOnScroll animateIn="fadeIn">
          <h1 className="sponsor-us--title text-5xl font-bold	text-center p-2">Become a Sponsor!</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="fadeIn" delay={200}>
          <p className="sponsor-us--text mx-auto text-center">
            Learn about our sponsorship benefits by {""}
            <a
              href="/media/UBCDsci_Sponsorship_Package.pdf"
              className="sponsor-us--link hover:text-bghl delay-150 underline"
              download
            >downloading our sponsorship package
            </a>
            .
          </p>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Home;
