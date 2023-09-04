// Library imports.
import { useEffect, useState, useCallback, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

// Component imports.
import { execMembersData as data } from '@/configs/config';

// Style imports.
import styles from './ExecProfile.module.scss';

// Media imports.
import profileDefault from '@/images/profileDefault.png';


const AUTO_TIME = 10; // Seconds.

/**
 * Creates a Card component.
 * @param {number} index Data index.
 * @param {boolean} isCurrent Whether the card is isCurrent.
 * @returns {JSX.Element} JSX Component.
 */
const Card = (props: { index : number, isCurrent? : boolean, onClick? : any }) => {
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      carousel.current.classList.add(styles.AnimateBox);
      setTimeout(() => {
        carousel.current && carousel.current.classList.remove(styles.AnimateBox);
      }, 400);
    }
  }, [props.index]);

  return (
    <div className={props.isCurrent ? styles.CardActive : styles.Card} onClick={props.onClick} ref={carousel}>
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
const ExecProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex]       = useState(0);
  const [nextIndex, setNextIndex]       = useState(0);
  const [touchStart, setTouchStart]     = useState(0);
  const [touchEnd, setTouchEnd]         = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const previous = useCallback(
    () => { (currentIndex === 0) ?
      setCurrentIndex(data.length - 1) : setCurrentIndex(currentIndex - 1);
    }, [currentIndex]
  );

  const next = useCallback(
    () => { (currentIndex === data.length - 1) ?
      setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }, [currentIndex]
  );

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX);
    setTouchEnd(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) next();
    else if (touchEnd - touchStart > 150) previous();
  };

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft")
        previous();
      else if (event.key === "ArrowRight")
        next();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [previous, next]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, AUTO_TIME * 1000);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <div
      className={styles.ExecProfile}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {!isMobile && <Card index={prevIndex} onClick={previous} /> }
      <Card index={currentIndex} isCurrent={true} />
      {!isMobile && <Card index={nextIndex} onClick={next} /> }

       <div className={styles.Dots}>
        {data.map((item, index: number) => {
          return (
            <div
              key={index} 
              className={index === currentIndex ? styles.DotActive : styles.Dot}
              onClick={() => setCurrentIndex(index)}
              title={`${item.title} - ${item.name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExecProfile;
