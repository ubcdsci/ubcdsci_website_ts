// Library imports.
import { useSelector, useDispatch } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';

// Utility imports.
import { scrollTop } from '@/utils/mouseScrolling';

// API imports.
import { logout, reset } from '@/api/auth/authSlice';

// Component imports.
import { footerData as data } from '@/configs/config';

// Style imports.
import styles from './Footer.module.scss';

// Media imports.
import { ReactComponent as Logo } from '@/images/logo/logo-bw.svg';


/**
 * Renders a Footer.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Footer = (props: any) => {
  const { user } = useSelector((state : any) => state.auth);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    toast("🕊️ Successfully logged out.", {
      progressStyle: {
        background: "rgb(var(--primary-dark))",
      },
    });
    scrollTop(0);

    dispatch(logout() as any);
    dispatch(reset());
  };

  const checkExternal = (link: SMLink) => {
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

      { (user && user.user) &&
        <button className={styles.LogoutButton} onClick={handleLogout}>
          Log out of user "{user.user}"
        </button>
      }
    </footer>
  );
}

export default Footer;