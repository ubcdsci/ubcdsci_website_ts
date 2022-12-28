// Library imports.
import { useEffect, useState, useCallback } from "react";

// Component imports.
import { execMembersData as data } from "../../configs/config";

// Style imports.
import styles from "./ExecProfile.module.scss";

// Media imports.
import profileDefault from "../../images/profileDefault.png";


const AUTO_TIME = 8; // Seconds.

/**
 * Creates a Card component.
 * @param {number} index Data index.
 * @param {boolean} isCurrent Whether the card is isCurrent.
 * @returns {JSX.Element} JSX Component.
 */
const Card = (props: { index : number, isCurrent? : boolean, onClick? : any }) => {
  return (
    <div className={props.isCurrent ? styles.CardActive : styles.Card} onClick={props.onClick}>
      <img src={data[props.index].image || profileDefault} alt={data[props.index].name} />

      <div className={styles.CardContent}>
        <h1 className={styles.ExecTitle}>{data[props.index].title}</h1>
        <h1 className={styles.ExecName}>{data[props.index].name}</h1>
        { props.isCurrent &&
          <blockquote>{data[props.index].description}</blockquote>
        }
      </div>
    </div>
  );
};

/**
 * Renders an ExecProfile.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ExecProfile = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex]       = useState(0);
  const [nextIndex, setNextIndex]       = useState(0);

  const previous = () => {
    (currentIndex === 0) ?
      setCurrentIndex(data.length - 1) : setCurrentIndex(currentIndex - 1);
  };

  const next = useCallback(
    () => { (currentIndex === data.length - 1) ?
      setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }, [currentIndex]
  );

  useEffect(() => {
    if (currentIndex === 0) {
      setPrevIndex(data.length - 1);
      setNextIndex(currentIndex + 1);
    } else if (currentIndex === data.length - 1) {
      setPrevIndex(currentIndex - 1);
      setNextIndex(0);
    } else {
      setPrevIndex(currentIndex - 1);
      setNextIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, AUTO_TIME * 1000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className={styles.ExecProfile}>
      <Card index={prevIndex} onClick={previous} />
      <Card index={currentIndex} isCurrent={true} />
      <Card index={nextIndex} onClick={next} />
    </div>
  );
};

export default ExecProfile;
