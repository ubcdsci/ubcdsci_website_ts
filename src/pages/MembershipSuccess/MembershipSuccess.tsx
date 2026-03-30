import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GreenButton from '@/components/GreenButton';
import { verifySession } from '@/services/membershipApi';
import styles from './MembershipSuccess.module.scss';

const MembershipSuccess = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verify = async () => {
      if (sessionId) {
        try {
          await verifySession(sessionId);
        } catch (error) {
          console.error('Session verification failed:', error);
        }
      }
      setLoading(false);
    };
    verify();
  }, [sessionId]);

  if (loading) {
    return (
      <div className={styles.Container}>
        <div className={styles.Spinner} />
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <div className={styles.IconWrapper}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" stroke="rgb(10, 229, 130)" strokeWidth="2.5" fill="rgba(10, 229, 130, 0.1)" />
          <path d="M16 28.5L23.5 36L40 20" stroke="rgb(10, 229, 130)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className={styles.Heading}>Membership Confirmed</h1>
      <p className={styles.Subheading}>Welcome to the UBC Data Science Club community!</p>
      <p className={styles.Body}>
        A confirmation email has been sent to your email with further details.
      </p>
      <GreenButton href="/home" text="Go to Member Portal" className={styles.Button} />
    </div>
  );
};

export default MembershipSuccess;
