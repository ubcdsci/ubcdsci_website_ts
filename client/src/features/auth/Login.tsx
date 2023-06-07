// Library imports.
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLoginMutation } from './authApiSlice';
import { setCredentials } from './authSlice';
import useAuth from '@/hooks/useAuth';
import usePersist from '@/hooks/usePersist';

import { scrollTop } from '@/utils/mouseScrolling';

import styles from './Login.module.scss';
import { ReactComponent as Logo} from '@/images/logo/logo-colour.svg';


const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

/**
 * Renders the Login page.
 * @returns {JSX.Element} JSX Component.
 */
const Login = (props : any) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [persist, setPersist] = usePersist();

  const { username: currentUser } = useAuth();

  const userRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  // Redirect if already logged in.
  useEffect(() => {
    if (currentUser) {
      navigate('/');
      scrollTop(0);
    }
  }, [currentUser]);

  // Focus on input field.
  useEffect(() => {
    if (userRef)
      userRef.current?.focus();
  }, []);

  // Handle form submission.
  const handleSubmit = async () => {
    // Check if reCAPTCHA is loaded.
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise
          .execute(RECAPTCHA_SITE_KEY, { action: "login" })
          .then(async (captchaToken : string) => {
            // TODO: something for captchaToken.
            try {
              // Attempt to login.
              const { accessToken } = await login({ username, password }).unwrap();
              dispatch(setCredentials({ accessToken }));
              setUsername('');
              setPassword('');
              
              // Successful login.
              toast(`🕊️ Successfully logged in as ${ username }.`, {
                progressStyle: {
                  background: "rgb(var(--primary-dark))",
                },
              });
              navigate('/');
              scrollTop(0);
            } catch (err: any) {
              // Failed to login.
              let errorMessage = "No Server Response";
              if (err.status) {
                switch (err.originalStatus) {
                  case 400:
                    errorMessage = 'Missing Username or Password';
                    break;
                  case 401:
                    errorMessage = 'Unauthorized';
                    break;
                  default:
                    errorMessage = err.data?.message;
                    break;
                }
              }

              toast.error(`🐦 Error ${ err.status } - ${ errorMessage }`);
            }
          });
      });
    } else {
      toast.error("Please wait for the reCAPTCHA to load.");
    }
  };

  // Handle username.
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Handle password.
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle persistence checkbox.
  const handlePersist = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersist(e.target.checked);
  };
  
  return (
    <form
      className={styles.Login}
      autoComplete="on"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Logo className={styles.Logo} />

      <div className={styles.Fields}>
        <h1>Log in as Administrator</h1>

        <fieldset>
          <legend>Username</legend>

          <label htmlFor="username" />
          <input
            type="username"
            id="username"
            ref={userRef}
            autoComplete="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Password</legend>

          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePassword}
            required
          />
        </fieldset>

        <fieldset className={styles.Persist}>
          <legend>Trust This Device</legend>

          <label htmlFor="persist" />
          <input
            type="checkbox"
            id="persist"
            checked={persist}
            onChange={handlePersist}
          />
        </fieldset>

        <div className={styles.Submission}>
          <div className={styles.CaptchaNotice}>
            This site is protected by reCAPTCHA and the Google&nbsp;
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a> and&nbsp;
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
              Terms of Service
            </a> apply.
          </div>

          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
