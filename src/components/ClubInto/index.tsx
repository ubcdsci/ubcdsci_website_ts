// Library imports
import { useEffect,useState } from "react";


// Component import
import {clubIntroData as data} from '@/configs/config';

// Style imports
import styles from './ClubIntro.module.scss';


/**
 * Creates a card component
 * @param {number} index Data index.
 * @returns {JSX.Element} JSX Component. 
 */

const Card = (props: {index: number}) => {
    return (
        <div className={styles.Card}>
            {/* <div className={styles.CardImage}>{data[props.index].}</div> */}
            <div className={styles.CardTitle}>{data[props.index].title}</div>
            <div className={styles.CardDesc}>{data[props.index].description1}</div>
            <div className={styles.CardDesc}>{data[props.index].description2 || ""}</div>
        </div>
    );
}

/**
 * Creates a Cards Container component
 * @returns {JSX.Element} JSX Component. 
 */
const ClubIntroCardData = () => {
    <div className={styles.CardContainer}>
        {data.map((item,index: number) => {
            return(
                <Card index={index}/>
            );
        }) }
    </div>
}


export default ClubIntroCardData;