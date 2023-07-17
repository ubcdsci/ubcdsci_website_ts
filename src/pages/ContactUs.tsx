import { BsFillPinMapFill } from 'react-icons/bs';

import { contactData as data } from '@/configs/config';

import styles from '@/assets/styles/pages/ContactUs.module.scss';
import Page from '@/templates/Page';


/**
 * Renders the Contact Us page.
 * @returns {JSX.Element} JSX Component.
 */
const ContactUs = () => {
  return (
    <Page title="Contact Us">
      <div className={styles.ContactUs}>
        <div className={styles.Content}>
          <h1>UBC Data Science <br /> Club Room</h1>
          <h2><BsFillPinMapFill /> 6133 University Blvd <br /> Vancouver, BC V6T 1Z1</h2>

          <div className={styles.Contacts}>
            { data.map((item, index) => (
              <div key={index} className={styles.Contact}>
                <p>{item.icon} {item.title}:</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        <iframe
          className={styles.Map}
          title="map-location"
          src="https://maps.google.com/maps?q=6133%20University%20Blvd,%20Vancouver%20BC&t=k&z=17&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Page>
  );
};

export default ContactUs;
