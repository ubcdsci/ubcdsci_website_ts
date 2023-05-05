// Library imports.
import { useState, useEffect } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

// Utility imports.
import { scrollTop } from '@/utils/mouseScrolling';

// Style imports.
import styles from './ScrollToTop.module.scss';


/**
 * Renders a ScrollToTop button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ScrollToTop = (props: any) => {
  // Scroll wheel event; show/hide button
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    var bodyRect = document.body.getBoundingClientRect();
    setVisible(window.scrollY - bodyRect.top < bodyRect.height / 4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BsArrowUpCircle
      className={`${visible ? styles.ScrollToTopHidden : styles.ScrollToTop}`}
      title="Return to Top"
      onClick={() => scrollTop()}
    />
  );
};

export default ScrollToTop;
