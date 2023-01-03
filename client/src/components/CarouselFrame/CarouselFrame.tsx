// Library imports.
import { useEffect, useState, useCallback } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Type declarations imports.
import { CarouselContent } from "../../declarations";

// Component imports.
import { carouselData as data } from "../../configs/config";

// Style imports.
import styles from "./CarouselFrame.module.scss";

// Media imports.
// import HPE from "../../images/HPE.png";


const AUTO_TIME = 8; // Seconds.

/**
 * Creates a Carousel Item component.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const CarouselItem = (props: { index : number, onClick? : any }) => {
  return (
    <div className={styles.CarouselItem}>
      <h1>{data[props.index].title}</h1>

      <div className={styles.ImageContainer}>
        <img src={data[props.index].image} alt="" />
      </div>
      
      <p>{data[props.index].description}</p>
    </div>
  );
};


/**
 * Renders a CarouselFrame.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const CarouselFrame = () => {
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
    <div className={styles.CarouselFrame}>
      { (data.length > 1) &&
        <div className={styles.LeftArrow} onClick={previous}>
          <BsArrowLeft />
        </div>
      }

      <CarouselItem index={currentIndex} />

      { (data.length > 1) &&
        <div className={styles.RightArrow} onClick={next}>
          <BsArrowRight />
        </div>
      }

      <div className={styles.Dots}>
        {data.map((item: CarouselContent, index: number) => {
          return (
            <div
              key={index} 
              className={index === currentIndex ? styles.DotActive : styles.Dot}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselFrame;
