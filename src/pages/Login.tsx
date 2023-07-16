import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/configs/firebaseConfig';

import { toastError, toastSuccess } from '@/utils/toastMessages';
import { scrollTop } from '@/utils/mouseScrolling';

import styles from '@/assets/styles/pages/Login.module.scss';
import { LogoColour as Logo } from '@/components/Logos';


/**
 * Renders the Login page component.
 */
const Login = (props : any) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [persist, setPersist] = useState<boolean>(false);

  const userRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // Handle form submission.
  const handleSubmit = async () => {
    // Attempt sign in.
    try {
      await signInWithEmailAndPassword(auth, username, password);
      toastSuccess("Successfully logged in.");
      scrollTop();
      navigate('/home');
    } catch (err: any) {
      toastError("Failed to log in.");
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
  // TODO: Implement with Firebase.
  const handlePersist = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersist(e.target.checked);
  };
  
  useEffect(() => {
    // Redirect if user is already logged in.
    if (auth.currentUser) {
      scrollTop();
      navigate('/home');
    }

    // Focus on input field.
    if (userRef) userRef.current?.focus();
  }, [auth.currentUser]);

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
