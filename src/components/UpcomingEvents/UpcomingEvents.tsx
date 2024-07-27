import styles from './UpcomingEvents.module.scss';
import {TEXTS} from '../../statics/staticFiles';

import {UpcomingEvents as data} from '../../configs/config'
import { UpcomingEventCard } from './UpcomingEventCard/UpcomingEventCard';


/**
 * Creates a Cards Container component
 * @returns {JSX.Element} JSX Component. 
 */
const UpcomingEvents = () => {
    return(
        <section className={styles.UpcomingEventsSection}>
            <div className={styles.SectionLabel}>
                {TEXTS.EVENTS.UPCOMING_EVENTS.LABEL}
            </div>
            <div className={styles.SectionTitle}>
                {TEXTS.EVENTS.UPCOMING_EVENTS.TITLE}
            </div>
            <div className={styles.CardContainer}>
                {data.map((item : UpcomingEventObject) => {
                    return(
                        <UpcomingEventCard item={item} />
                    );
                }) }
            </div>
        </section>

    );
}


export default UpcomingEvents;