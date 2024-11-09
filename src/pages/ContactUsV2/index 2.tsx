import styles from "./ContactUsV2.module.scss";
import {
  InstagramLogo,
  LinkedinLogo,
  DiscordLogo,
  GithubLogo,
} from "@/components/SocialLogos";

const ContactUsV2 = () => {
  return (
    <div className={styles.Container}>
      <span className={styles.Label}>&#60;CONTACT US/&#62;</span>
      <h1 className={styles.Title}>
        Connect with us on our{" "}
        <span className={styles.SocialText}>socials!</span>
      </h1>
      <p className={styles.Description}>
        Keep up with our latest events, workshops and opportunities. Whether
        you're a beginner or an expert, there's something for everyone!
      </p>
      <div className={styles.Socials}>
        <a
          href="https://www.instagram.com/ubcdsci/"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLogo}
        >
          <InstagramLogo />
        </a>
        <a
          href="https://www.linkedin.com/company/ubc-data-science-club/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLogo}
        >
          <LinkedinLogo />
        </a>
        <a
          href="https://discord.gg/s3cs7UndxB"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLogo}
        >
          <DiscordLogo />
        </a>
        <a
          href="https://github.com/ubcdsci"
          target="_blank"
          rel="noreferrer"
          className={styles.SocialLogo}
        >
          <GithubLogo />
        </a>
      </div>
    </div>
  );
};

export default ContactUsV2;
