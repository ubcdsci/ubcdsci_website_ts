import styles from "./Team.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { TeamData } from "@/configs/config";

const Team = () => {
  return (
    <div className={styles.Container}>
      <span className={styles.Label}>&#60;TEAM/&#62;</span>
      {TeamData.map((section) => (
        <section key={section.title} className={styles.Section}>
          <h1 className={styles.Title}>{section.title}</h1>
          <div className={styles.CardGrid}>
            {section.members.map((member) => (
              <article key={`${section.title}-${member.name}`} className={styles.Card}>
                <img
                  className={styles.MemberImage}
                  src={member.image}
                  alt={`${member.name} portrait`}
                />
                <div className={styles.CardLabel}>
                  <p className={styles.Name}>{member.name}</p>
                  <p className={styles.Position}>{member.position}</p>
                  <a
                    className={styles.LinkedInLink}
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <FaLinkedin aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Team;
