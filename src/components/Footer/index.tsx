// Library imports.
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
// import { toast } from 'react-toastify';

import { scrollTop } from '@/utils/mouseScrolling';
import { footerData as data } from '@/configs/config';
// import useAuth from '@/hooks/useAuth';
// import usePersist from '@/hooks/usePersist';
// import { useSendLogoutMutation, useRefreshMutation } from '@/features/auth/authApiSlice';
// import { selectCurrentToken } from '@/features/auth/authSlice';

import styles from './Footer.module.scss';
import { LogoBW as Logo } from '../Logos';


/**
 * Renders a Footer.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Footer = (props: any) => {
  // const { id, username } = useAuth();
  // const [persist] = usePersist();
  // const [refresh] = useRefreshMutation();

  // const navigate = useNavigate();
  // const token = useSelector(selectCurrentToken);

  // const [sendLogout, {
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error
  // }] = useSendLogoutMutation();

  // Handle logout.
  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/login');
  //     toast("🕊️ Successfully logged out.", {
  //       progressStyle: {
  //         background: "rgb(var(--primary-dark))",
  //       },
  //     });
  //     scrollTop(0);
  //   } else if (isError) {
  //     toast.error(`🐛 ${error?.message}`);
  //   }
  // }, [isSuccess, isError, error]);

  // Handle refresh.
  // useEffect(() => {
  //   const verifyRefreshToken = async () => {
  //     try {
  //       await refresh();
  //     } catch (err) {
  //       // console.error(err);
  //     }
  //   }

  //   if (!token && persist)
  //     verifyRefreshToken();
  // }, [token, refresh]);

  // Returns the appropriate link.
  const checkExternal = (link: SMLink) => {
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

      {/* { (id && username) ?
        <button className={styles.LogInOutButton} onClick={() => sendLogout(id)}>
          Log out of user "{username}"
        </button> :
        <button className={styles.LogInOutButton} onClick={() => navigate('/login')}>
          Log in as administrator
        </button>
      } */}
    </footer>
  );
}

export default Footer;