import styles from "./HeroSection.module.scss";
import { MEMBERSHIP_FORM_URL } from "@/configs/config";

const HeroSection = () => {
  return (
    <div className={styles.HeroContainer}>
      <span className={styles.Label}>&#60;UBC DATASCIENCE CLUB /&#62;</span>
      <h1 className={styles.HeroTitle}>
        An academic community for all your{" "}
        <span className={styles.Statistical}>statistical</span> needs.
      </h1>
      <p className={styles.HeroDescription}>
        Fostering future data science leaders through an inclusive community{" "}
        that connects{" "}
        <span className={styles.Highlight}>academia with industry.</span>
      </p>
      <div className={styles.EmailRegister}>
        <a
          href={MEMBERSHIP_FORM_URL}
          target="_blank"
          rel="noreferrer noopener"
          className={styles.RegisterButton}
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;