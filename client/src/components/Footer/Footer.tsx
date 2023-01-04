// Library imports.
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

// Type declarations imports.
import { SMLink } from "../../declarations";

// Component imports.
import { footerData as data } from "../../configs/config";
// import NewsletterForm from "./NewsletterForm";

// Style imports.
import styles from "./Footer.module.scss";

// Media imports.
import VectorLogo from "../VectorLogo";


// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};

// Check if links to external site and returns element.
let checkExternal = (link: SMLink) => {
  if (link.external) {
    return (
      <a
        href={link.href}
        draggable="false"
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
    );
  } else {
    return (
      <Link smooth to={link.href} draggable="false">
        {link.text}
      </Link>
    );
  }
};

/**
 * Renders a Footer.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Footer = (props: any) => {
  return (
    <footer className={styles.Footer}>
      {/* <NewsletterForm /> */}

      <div className={styles.SocialMediaBlock}>
        <h4 className={styles.SMText}>
          Stay Connected with the UBC Data Science Club!
        </h4>
        <div className={styles.SMButtons}>
          {data.smButtons.map((link) => (
            <a key={link.key} href={link.href} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.Line} />

      <div className={styles.LinksBlock}>
        {data.columns.map((col) => (
          <div key={col.title} className={styles.Column}>
            <p className={styles.ColumnMain}>
              <Link to={col.href} onClick={scrollTop} draggable="false">
                {col.title}
              </Link>
            </p>

            { col.links.map((link, i) => (
              <p key={link.text + i} className={styles.ColumnSub}>
                {checkExternal(link)}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.CopyrightBlock}>
        <VectorLogo alt="" className={styles.Logo} />
        <span>
          &copy; 2022-{new Date().getFullYear()} UBC Data Science Club. <br />
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;