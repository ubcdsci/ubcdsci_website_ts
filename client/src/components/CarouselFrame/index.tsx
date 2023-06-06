// Library imports.
import { useEffect, useState, useCallback, useRef } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

// Component imports.
import { carouselData as data } from '@/configs/config';

// Style imports.
import styles from './CarouselFrame.module.scss';

// Media imports.



const AUTO_TIME = 10; // Seconds.

/**
 * Creates a Carousel Item component.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const CarouselItem = (props: { index : number, onClick? : any }) => {
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
    <div className={styles.CarouselItem} ref={carousel}>
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
  const [touchStart, setTouchStart]     = useState(0);
  const [touchEnd, setTouchEnd]         = useState(0);

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
      className={styles.CarouselFrame}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
