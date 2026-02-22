import './PastEvents.scss';
import { TEXTS } from '../../statics/staticFiles';
import { PastEvents as data } from '../../configs/config';
import { PastEventCard } from './PastEventsCard/PastEventsCard';

/**
 * Creates a Cards Container component as a List
 * @returns {JSX.Element} JSX Component. 
 */
const PastEvents = () => {
    return (
        <section id = "pastEvents" className='past-events-section'>
            <div className='past-events-section-title'>
                {TEXTS.EVENTS.PAST_EVENTS.TITLE}
            </div>
            <div className='past-events-list'>
                
                {data.map((item, index) => (
                    <PastEventCard key={index} item={item} />
                ))}
            </div>
        </section>
    );
}

export default PastEvents;
