// Style imports.
import styles from './Background.module.scss';

/**
 * Renders a Background.
 * @param {string} src Image source.
 * @param {number} opacity Opacity of the overlay.
 * @returns {JSX.Element} JSX Component.
 */
const Background = (props : {src : string, opacity : number}) => {
  return (
    <div className={styles.Background}>
      <div className={styles.Overlay} style={{opacity: props.opacity ? props.opacity : "0.7"}} />
      
      <img
        className={styles.BackgroundImage}
        src={props.src ? props.src : ""}
        alt=""
      />
    </div>
  );
};

export default Background;
