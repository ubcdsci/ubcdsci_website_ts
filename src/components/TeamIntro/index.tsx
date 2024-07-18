// import libraries
import { useEffect, useState } from "react"

// import styling 
import styles from './TeamIntro.module.scss'; 

// import text data
import {teamIntroData as data} from "@/configs/config";

// text component



// card component
const Card = (props: {index:number}) => {
    return (
        <div className={styles.Card}>
            <div className={styles.FlexContainer}>

                <div className={styles.TextContainer}>
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
                        <span>
                            <p>
                                {data[props.index].body1_1}
                                <b>opportunity to learn about the field of data science</b>&nbsp;
                                {data[props.index].body1_2}
                            </p>
                            <p>
                                {data[props.index].body2_1}&nbsp;
                                <b>attend events</b>&nbsp;
                                {data[props.index].body2_2}&nbsp;
                                <b>learn from mentors</b>
                                {data[props.index].body2_3}&nbsp;
                                <b>join a team to build a project</b>&nbsp;
                                {data[props.index].body2_4}
                            </p>
                        </span>     
                    </div>
                </div>
        
                {/* Placeholder image component */}
                <div className={styles.ImageContainer}>
                    <img src={data[props.index].image} alt="Placeholder"/>
                 </div>

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