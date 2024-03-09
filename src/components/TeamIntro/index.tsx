// import libraries
import { useEffect, useState } from "react"

// import styling 
import styles from './TeamIntro.module.scss'; 

// import text data
import {teamIntroData as data} from "@/configs/config";


// card component
const Card = (props: {index:number}) => {

    return (
        <div className={styles.Card}>
            <div className={styles.TitleLineContainer}>
                <div className={styles.CardTitle}>{data[props.index].title1}</div>
                <div className={styles.CardLine}></div>
            </div>
            <div className={styles.CardTitle2}>
                <span>Providing </span>
                <span className={styles.GradientText}>events, mentors, and teams </span>
                <span>for students.</span>
            </div>
            <div className={styles.CardBody}>
                <div>{data[props.index].body1}</div>
                <div>{data[props.index].body2}</div>
  
            </div>
          



            
        </div>
    );
};



// card container component
const TeamIntro = () => {
    return (
        <div className={styles.TitleLineContainer}>
            {data.map((item, index: number) => {
                return (
                    <Card index={index}/>
                );
            })}
        </div>
    );

};

export default TeamIntro;