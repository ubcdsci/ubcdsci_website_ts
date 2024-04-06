// JSX Component
import styles from "./HomeV2.module.scss";

const Home = () => {
  return (
    <div className={styles.HeroContainer}>
      <span className={styles.Label}>&#60;UBC DATASCIENCE CLUB /&#62;</span>
      <h1 className={styles.HeroTitle}>
        An academic community for all your{" "}
        <span className={styles.Statistical}>statistical</span> needs.
      </h1>
      <p className={styles.HeroDescription}>
        Fostering future data science leaders through an inclusive community{" "}
        that connects{" "}
        <span className={styles.Highlight}>academia with industry.</span>
      </p>
      <div className={styles.EmailRegister}>
        <input type="text" placeholder="EMAIL" className={styles.EmailInput} />
        <button className={styles.RegisterButton}>Register</button>
      </div>
    </div>
  );
};

export default Home;
