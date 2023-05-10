// Library imports.
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

// API imports.
import { login, reset } from '@/api/auth/authSlice';

// Utility imports.
import { scrollTop } from '@/utils/mouseScrolling';

// Component imports.
import { ErrorMessage } from '@hookform/error-message';

// Style imports.
import styles from './Login.module.scss';

// Media imports.
import { ReactComponent as Logo } from '@/images/logo/logo-colour.svg';


const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

/**
 * Renders the Login page.
 * @returns {JSX.Element} JSX Component.
 */
const Login = (props : any) => {
  // Destructure useForm object for usage.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector((state : any) => state.auth);

  const onSubmit = (formInfo: any) => {
    if (window.grecaptcha) {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise
          .execute(RECAPTCHA_SITE_KEY, { action: "login" })
          .then((token : string) => {
            const userData : UserFormData = {
              username: formInfo.username,
              password: formInfo.password,
              captchaToken: token
            };

            dispatch(login(userData) as any);
          });
      });
    } else {
      toast.error("Please wait for the reCAPTCHA to load.");
    }
  };

  useEffect(() => {
    (isError) && toast.error(message);

    if (isSuccess) {
      toast(`🕊️ Successfully logged in as ${user.user}.`, {
        progressStyle: {
          background: "rgb(var(--primary-dark))",
        },
      });
      navigate('/');
      scrollTop(0);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <form className={styles.Login} autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
      <Logo className={styles.Logo} />

      <div className={styles.Fields}>
        <h1>Log in as Administrator</h1>

        <fieldset>
          <legend>Username</legend>

          <label htmlFor="username" />
          <input
            type="username"
            {...register("username", {
              required: "Please enter admin username.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
          />
        </fieldset>

        <fieldset>
          <legend>Password</legend>

          <label htmlFor="password" />
          <input
            type="password"
            {...register("password", {
              required: "Please enter admin password.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <code className={styles.Error}>{message}</code>
            )}
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
