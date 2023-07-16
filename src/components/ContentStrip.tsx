import { useMediaQuery } from 'react-responsive';

import styles from '@/assets/styles/components/ContentStrip.module.scss';


/**
 * Renders a ContentStrip.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ContentStrip = (props: {flex : string, title : string, imageSource? : string, text? : JSX.Element, content? : JSX.Element}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  
  return (
    <div className={`${styles.ContentStrip} ${(props.flex === "row" && !isMobile) ? styles.FlexRow : styles.FlexColumn}`}>
      <div className={styles.ContentText}>
        <h1>{props.title}</h1>
        {props.text}
      </div>

      {props.content}

      { props.imageSource && (
        <img src={props.imageSource} alt={props.title} />
      )}
    </div>
  );
};

export default ContentStrip;
