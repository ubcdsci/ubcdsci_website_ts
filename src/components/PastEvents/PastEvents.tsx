import './PastEvents.scss'
import {TEXTS} from '../../statics/staticFiles';

import {PastEvents as data} from '../../configs/config'
import { PastEventCard } from './PastEventsCard/PastEventsCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation , EffectCards, EffectCreative} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


/**
 * Creates a Cards Container component
 * @returns {JSX.Element} JSX Component. 
 */
const PastEvents = () => {
    return(
        <section className='past-events-section'>
            <div className='past-events-section-title'>
                {TEXTS.EVENTS.PAST_EVENTS.TITLE}
            </div>
            <Swiper
                effect={'creative'}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                    },
                    next: {
                    translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
                className=""
                >
                    <div className=''>
                        {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <PastEventCard item={item} />
                        </SwiperSlide>
                        ))}
                    </div>
            </Swiper>
        </section>

    );
}


export default PastEvents;