// Style imports.
import styles from './Background.module.scss';

/**
 * Renders a Background.
 * @param {string} src Image source.
 * @param {number} opacity Opacity of the overlay (0-1).
 * @param {number} blur Blur of the overlay (in pixels).
 * @returns {JSX.Element} JSX Component.
 */
const Background = (props : {src? : string, opacity? : number, blur? : number}) => {
  return (
    <div className={styles.Background}>
      <div
        className={styles.Overlay}
        style={{
          backgroundColor: `rgba(var(--bg-dark), ${props.opacity ? props.opacity : 0})`,
          backdropFilter: `blur(${props.blur ? props.blur : 0}px)`
        }}
      />
      
      <img
        className={styles.BackgroundImage}
        src={props.src ? props.src : ""}
        alt=""
        draggable={false}
      />
    </div>
  );
};

export default Background;
