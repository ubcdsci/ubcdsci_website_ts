// Library imports.


// Component imports.


// Style imports.
import styles from "./ContactUs.module.scss";

// Media imports.



// TODO: Complete rework of this page.
/**
 * Renders the Contact Us page.
 * @returns {JSX.Element} JSX Component.
 */
const ContactUs = () => {
  return (
    // <MovingText
    //   type="fadeIn"
    //   duration="1500ms"
    //   delay="0s"
    //   direction="normal"
    //   timing="ease"
    //   iteration="1"
    //   fillMode="none"
    // >
      <div className="contactus--content flex lg:py-36 justify-evenly flex-col lg:flex-row	p-14 text-center gap-y-8	">
        <div className="contactus">
          <h1 className="font-bold text-3xl	my-2	">
            UBC Data Science
            <br />
            Club Room
          </h1>
          <p className="my-2">
            6133 University Blvd <br /> Vancouver, BC, V6T 1Z1
          </p>
          <p className="my-2">
            Email: <br />
            <a
              href="mailto:datascienceclububc@gmail.com"
              className="contactLink hover:text-txthl hover:underline"
            >
              datascienceclububc@gmail.com
            </a>
          </p>
          <p className="my-2">
            Discord: <br />
            <a
              href="https://discord.com/invite/4AycB34acK"
              className="contactLink hover:text-txthl hover:underline"
            >
              UBC Data Science Club
            </a>
          </p>
          <p className="my-2">
            Instagram: <br />
            <a
              href="https://www.instagram.com/ubcdatascienceclub/?hl=en"
              className="contactLink hover:text-txthl hover:underline"
            >
              @ubcdatascienceclub
            </a>
          </p>
          <p className="my-2">
            Facbook: <br />
            <a
              href="https://www.facebook.com/ubcdatascience"
              className="contactLink hover:text-txthl hover:underline"
            >
              @ubcdatascience
            </a>
          </p>
          <p className="my-2">
            Campusbase: <br />
            <a
              href="https://amscampusbase.ubc.ca/feeds?type=club&type_id=58911"
              className="contactLink hover:text-txthl hover:underline"
            >
              AMS Data Science Club @ UBC
            </a>
          </p>
        </div>
        <iframe
          title="map-location"
          src="https://maps.google.com/maps?q=6133%20University%20Blvd,%20Vancouver%20BC&t=k&z=17&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="lg:w-1/2 bg-white w-full h-96 lg:h-auto"
        />
      </div>
  );
};

export default ContactUs;
