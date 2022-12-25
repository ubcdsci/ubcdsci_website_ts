// Library imports.


// Component imports.


// Style imports.
import styles from "./ContentStrip.module.scss";

// Media imports.



/**
 * Renders a ContentStrip.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ContentStrip = (props: {flex : string, title : string, imageSource? : string, text? : JSX.Element, content? : JSX.Element}) => {
  return (
    <div className={`${styles.ContentStrip} ${props.flex === "row" ? styles.FlexRow : styles.FlexColumn}`}>
      <div className={styles.ContentText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>

      {props.content}

      { props.imageSource && (
        <img src={props.imageSource} alt={props.title} />
      )}
    </div>
  );
};

export default ContentStrip;
