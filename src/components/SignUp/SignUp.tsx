import styles from "./SignUp.module.scss";

import { LogoNewScale as Logo } from "../Logos";
import GreenButton from "../GreenButton";
import { MEMBERSHIP_FORM_URL } from "@/configs/config";

const SignUpSection = () => {
    return (
      <div className={styles.SignUpContainer}>
        <div className={styles.LogoContainer}>
            <Logo />
        </div>
        <h1 className={styles.SignUpTitle}>
         Ready to
          <span> learn with data?</span>
        </h1>
        <p className={styles.SignUpDescription}>
            Embark on a journey with us and enter a realm of innovation and collaboration.
        </p>
        <span className={styles.SignUpButton}>
            <GreenButton
                    text="Join Us"
                    href={MEMBERSHIP_FORM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
            />
        </span>
      </div>
    );
  };

  export default SignUpSection;