// Library imports
import { useEffect,useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';


// Component import
import {clubIntroData as data} from '@/configs/config';

// Style imports
import styles from './ClubIntro.module.scss';
import { FaChevronRight } from "react-icons/fa";



/**
 * Renders a link Button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ProjectButton = (props: any) => {
    return (props.target === "_blank" ?
      <span>
        <a target={props.target} href={props.href} rel={props.rel} className={styles.ProjectButton}>
          {props.text}
         <FaChevronRight className={styles.ProjectButtonIcon} size={32} color={props.color}/>
        </a>
      </span>
      :
      <span>
        <Link smooth to={`${props.href}#`} className={styles.ProjectButton}>
          {props.text}
        <FaChevronRight className={styles.ProjectButtonIcon} size={32} color={props.color}/>
        </Link>
      </span>
    );
  };
  

/**
 * Creates a card component
 * @param {number} index Data index.
 * @returns {JSX.Element} JSX Component. 
 */

const Card = (props: {index: number}) => {
    return (
        <div className={styles.Card}>
            <img className={styles.CardImage} src={data[props.index].image} alt={data[props.index].title}/>
            <div className={styles.CardContent}>
                <div className={styles.CardTitle}>{data[props.index].title}</div>
                <div className={styles.CardDesc}>{data[props.index].description1}</div>
                <div className={styles.CardDesc}>{data[props.index].description2 || ""}</div>
            </div>
            <ProjectButton text={data[props.index].button} href="/" color={data[props.index].color}/>
        </div>
    );
}

/**
 * Creates a Cards Container component
 * @returns {JSX.Element} JSX Component. 
 */
const ClubIntroCardData = () => {
    return(
        <section className={styles.ClubIntroSection}>
            <div className={styles.Divider}>
                <span>MISSION STATEMENT</span>
            </div>
            <h1 className={styles.ClubIntroTitle}>
                We prioritize learning through <span> collaborative work.</span>
            </h1>
            <div className={styles.CardContainer}>
                {data.map((item,index: number) => {
                    return(
                        <Card index={index}/>
                    );
                }) }
            </div>
        </section>

    );
}


export default ClubIntroCardData;