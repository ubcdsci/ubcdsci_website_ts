import { motion } from 'framer-motion';

import styles from '@/assets/styles/components/Background.module.scss';


type BackgroundProps = {
  src?: string;
  alpha?: number;
  blur?: number;
}

/**
 * Renders a Background.
 * @param {string} src Image source.
 * @param {number} opacity Opacity of the overlay (0-1).
 * @param {number} blur Blur of the overlay (in pixels).
 * @returns {JSX.Element} JSX Component.
 */
const Background = (props : BackgroundProps) => {
  return (
    <div className={styles.Background}>
      <div
        className={styles.Overlay}
        style={{
          backgroundColor: `rgba(var(--bg-dark), ${props.alpha ? props.alpha : 0})`,
          backdropFilter: `blur(${props.blur ? props.blur : 0}px)`,
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          className={styles.BackgroundImage}
          src={props.src ? props.src : ""}
          alt=""
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default Background;
