// Library imports.


// Component imports.


// Media imports.



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
      <div className="contactus--content">
        <div className="contactus">
          <h1>
            UBC Data Science
            <br />
            Club Room
          </h1>
          <p>
            6133 University Blvd <br /> Vancouver, BC, V6T 1Z1
          </p>
          <p>
            Email: <br />
            <a
              href="mailto:datascienceclububc@gmail.com"
              className="contactLink"
            >
              datascienceclububc@gmail.com
            </a>
          </p>
          <p>
            Discord: <br />
            <a
              href="https://discord.com/invite/4AycB34acK"
              className="contactLink"
            >
              UBC Data Science Club
            </a>
          </p>
          <p>
            Instagram: <br />
            <a
              href="https://www.instagram.com/ubcdatascienceclub/?hl=en"
              className="contactLink"
            >
              @ubcdatascienceclub
            </a>
          </p>
          <p>
            Facbook: <br />
            <a
              href="https://www.facebook.com/ubcdatascience"
              className="contactLink"
            >
              @ubcdatascience
            </a>
          </p>
          <p>
            Campusbase: <br />
            <a
              href="https://amscampusbase.ubc.ca/feeds?type=club&type_id=58911"
              className="contactLink"
            >
              AMS Data Science Club @ UBC
            </a>
          </p>
        </div>
        <iframe
          title="map-location"
          src="https://maps.google.com/maps?q=6133%20University%20Blvd,%20Vancouver%20BC&t=k&z=17&ie=UTF8&iwloc=&output=embed"
          width="800"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    // </MovingText>
  );
}

export default ContactUs;
