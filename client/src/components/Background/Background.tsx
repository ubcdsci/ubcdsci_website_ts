import styles from './Background.module.scss';

const Background = (props : any) => {
  return (
    <div className={styles.Background}>
      <div className={styles.Overlay}/>
      
      <img
        className={styles.BackgroundImage}
        src={props.src ? props.src : ""}
        alt=""
      />
    </div>
  );
};

export default Background;
