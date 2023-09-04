// Library imports.
import { useEffect, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { setCredentials } from './authSlice';
import { useTwoFactorMutation } from './authApiSlice';
import { useGenerateMutation, useVerifyMutation } from '../twofa/twofaApiSlice';
import { scrollTop } from '@/utils/mouseScrolling';

import styles from './TwoFactor.module.scss';


/**
 * Two-factor authentication page.
 * @returns {JSX.Element} JSX Component.
 */
const TwoFactor = (props : any) => {
  const [code, setCode] = useState<string>('');
  const [secret, setSecret] = useState<{ secret: string, qrImageDataUrl: string } | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [twoFactor] = useTwoFactorMutation();
  const [verify] = useVerifyMutation();
  const [generate] = useGenerateMutation();

  /**
   * Submission handler.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (code.length !== 6) {
      toast.error(`🐦 Error - Invalid Code`);
      return;
    }

    try {
      // Verify the 2FA code.
      const verification = await verify({
        token: code,
        username: jwtDecode<any>(sessionStorage.getItem("loginStep2VerificationToken") || '').loginStep2Verification.username
      }).unwrap();

      toast(`🕊️ ${verification.message}!`, {
        progressStyle: {
          background: "rgb(var(--primary-dark))",
        },
      });

      // Attempt to login.
      const { accessToken } = await twoFactor({
        loginStep2VerificationToken: sessionStorage.getItem("loginStep2VerificationToken"),
        twoFactorAuthToken: verification.token
      }).unwrap();

      dispatch(setCredentials({ accessToken }));
      localStorage.setItem("authToken", accessToken);
      sessionStorage.removeItem("loginStep2VerificationToken");
            
      // Successful login.
      toast(`🕊️ Successfully logged in!`, {
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
            errorMessage = err.data?.message || 'Unknown Error';
            break;
        }
      }

      toast.error(`🐦 Error ${ err.status } - ${ errorMessage }`);
    }
  };
  
  /**
   * Generate a 2FA token.
   */
  const generateToken = async () => {
    try {
      const otpData = await generate({ 
        username: jwtDecode<any>(sessionStorage.getItem("loginStep2VerificationToken") || '').loginStep2Verification.username
      }).unwrap();
      const { secret, qrImageDataUrl } = otpData;
      setSecret({ secret, qrImageDataUrl });
    } catch (err: any) {
      setSecret(null);
    }
  };

  // Generate a 2FA token on page load.
  useEffect(() => {
    generateToken();
  }, [navigate]);

  return (
    <div className={styles.TwoFactor}>
      <h1>Two-Factor Authentication</h1>

      { secret && (
        <div className={styles.Secret}>
          <h2>Scan the QR code below with your authenticator app.</h2>
          <img src={secret.qrImageDataUrl} alt="QR Code" />
        </div>
      )}

      <h2>Enter the code from your authenticator app.</h2>

      <div className={styles.Fields}>
        <fieldset>
          <legend>Two-Factor Code</legend>

          <label htmlFor="code" />
          <input
            type="number"
            id="code"
            autoComplete="off"
            max={999999}
            maxLength={6}
            required
            onChange={(e) => setCode(e.target.value)}
          />
        </fieldset>

        <div className={styles.Submission}>
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactor;
