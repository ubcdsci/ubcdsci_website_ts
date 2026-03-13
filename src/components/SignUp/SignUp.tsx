import { useState } from 'react';
import styles from './SignUp.module.scss';

import { LogoNewScale as Logo } from '../Logos';
import { createCheckoutSession } from '@/services/membershipApi';

const SignUpSection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleJoin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { url } = await createCheckoutSession();
      window.location.href = url;
    } catch {
      setError('Unable to start checkout. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.SignUpContainer}>
      <div className={styles.LogoContainer}>
        <Logo />
      </div>
      <h1 className={styles.SignUpTitle}>
        Ready to
        <span> learn with data?</span>
      </h1>
      <p className={styles.SignUpDescription}>
        Embark on a journey with us and enter a realm of innovation and collaboration.
      </p>
      <span className={styles.SignUpButton}>
        <button
          className={styles.JoinButton}
          onClick={handleJoin}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Join Us'}
        </button>
      </span>
      {error && <p className={styles.ErrorMessage}>{error}</p>}
    </div>
  );
};

export default SignUpSection;
