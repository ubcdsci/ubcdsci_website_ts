// Library imports.
import { useState } from "react";

// Component imports.
import { execMembersData as data } from "../../configs/config";

// Style imports.
import styles from "./ExecProfile.module.scss";

// Media imports.
import profileDefault from "../../images/profileDefault.png";


/**
 * Renders an ExecProfile.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ExecProfile = (props: any) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.ExecProfile}>
      { data.map((member, index) => (
        <div key={index} className={index === imageIndex ? styles.CardActive : styles.Card}>
          <img src={member.image || profileDefault} alt={member.name} />

          <div className={styles.CardContent}>
            <h1 className={styles.ExecTitle}>{member.title}</h1>
            <h1 className={styles.ExecName}>{member.name}</h1>
            <blockquote>{member.description}</blockquote>
            {/* { index === imageIndex && <blockquote>{member.description}</blockquote> } */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExecProfile;
