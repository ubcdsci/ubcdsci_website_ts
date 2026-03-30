import GreenButton from '@/components/GreenButton';
import styles from './MembershipCancel.module.scss';

const MembershipCancel = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.IconWrapper}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" stroke="rgb(255, 60, 60)" strokeWidth="2.5" fill="rgba(255, 60, 60, 0.1)" />
          <path d="M20 20L36 36M36 20L20 36" stroke="rgb(255, 60, 60)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <h1 className={styles.Heading}>Payment Failed</h1>
      <p className={styles.Subheading}>We couldn't process your membership registration</p>
      <p className={styles.Body}>
        Your payment was not completed. Please check your payment details and try again.
      </p>
      <GreenButton href="/home" text="Try Again" className={styles.Button} />
    </div>
  );
};

export default MembershipCancel;
