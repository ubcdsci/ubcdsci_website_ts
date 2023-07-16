import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toastError, toastSuccess } from '@/utils/toastMessages';
import { scrollTop } from '@/utils/mouseScrolling';
import { auth } from '@/configs/firebaseConfig';
import { footerData as data } from '@/configs/config';

import styles from '@/assets/styles/components/Footer.module.scss';
import { LogoBW as Logo } from './Logos';


/**
 * Renders the Footer component.
 */
const Footer = (props: any) => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  /**
   * Handles the logout process.
   * @async
   */
  const handleLogout = async () => {
    try {
      await auth.signOut();
      toastSuccess("Successfully logged out.");
      scrollTop();
      navigate('/home');
    } catch (err: any) {
      toastError("Failed to log out.");
    }
  };

  /**
   * Checks if the link leads to an external site. \
   * If so, return a link with the proper attributes.
   * @param link Link to check.
   */
  const checkExternal = (link: SMLink): React.ReactElement => {
    return (
      <Link
        smooth
        to={link.href}
        draggable="false"
        target={link.external ? "_blank" : "_self"}
        rel={link.external ? "noreferrer" : ""}
      >
        {link.text}
      </Link>
    );
  };

  return (
    <footer className={styles.Footer}>
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
              <Link to={col.href} onClick={() => scrollTop()} draggable="false">
                {col.title}
              </Link>
            </p>

            { col.links.map((link : SMLink, index : number) => (
              <p key={index} className={styles.ColumnSub}>
                {checkExternal(link)}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.CopyrightBlock}>
        <Logo className={styles.Logo} />
        <span>
          &copy; 2022-{new Date().getFullYear()} UBC Data Science Club. <br />
          All Rights Reserved.
        </span>
      </div>

      { (user) ?
        <button className={styles.LogInOutButton} onClick={() => handleLogout()}>
          Log out of "{ user.email }"
        </button> :
        <button className={styles.LogInOutButton} onClick={() => navigate('/login')}>
          Log in as administrator
        </button>
      }
    </footer>
  );
}

export default Footer;