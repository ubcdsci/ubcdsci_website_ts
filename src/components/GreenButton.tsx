import { HashLink as Link } from 'react-router-hash-link';

import styles from '@/assets/styles/components/GreenButton.module.scss';


/**
 * Renders a link Button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const GreenButton = (props: any) => {
  return (props.target === "_blank" ?
    <span>
      <a target={props.target} href={props.href} rel={props.rel} className={styles.GreenButton}>
        {props.text}
      </a>
    </span>
    :
    <span>
      <Link smooth to={`${props.href}#`} className={styles.GreenButton}>
        {props.text}
      </Link>
    </span>
  );
};

export default GreenButton;
