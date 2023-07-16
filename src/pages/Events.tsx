import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from 'framer-motion';

import { auth, db } from '@/configs/firebaseConfig';
import { screenBottomToTop } from '@/utils/framerAnims';
import { IEventArticle } from '@/interfaces/IEventArticle';

import EventArticle from '@/components/EventArticle';

import styles from '@/assets/styles/pages/Events.module.scss';


const duration = 0.5;
const viewport = {
  once: true
};

/**
 * Renders the Events page.
 * @returns {JSX.Element} JSX Component.
 */
const Events = () => {
  const [ongoingEventsData, setOngoingEventsData] = useState<any[]>([]);
  const [upcomingEventsData, setUpcomingEventsData] = useState<any[]>([]);
  const [pastEventsData, setPastEventsData] = useState<any[]>([]);

  const [user] = useAuthState(auth);

  // Get all EventArticles from the database.
  useEffect(() => {
    const articleRef = collection(db, "EventArticles");
    const q = query(articleRef, orderBy("date", "desc"));
    
    onSnapshot(q, (querySnapshot) => {
      const ongoingEvents: any[] = [];
      const upcomingEvents: any[] = [];
      const pastEvents: any[] = [];

      // Sort events into their respective categories.
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const date = new Date(data.date.seconds * 1000);

        if (date > new Date())
          upcomingEvents.push({ ...data, id: doc.id });
        else if (date < new Date())
          pastEvents.push({ ...data, id: doc.id });
        else
          ongoingEvents.push({ ...data, id: doc.id });
      });

      setOngoingEventsData(ongoingEvents);
      setUpcomingEventsData(upcomingEvents);
      setPastEventsData(pastEvents);
    });
  }, []);

  return (
    <div className={styles.Events}>
      <div id="ongoingEvents" className={styles.Ongoing}>
        <h1>Ongoing Events</h1>
        { (ongoingEventsData.length === 0) ?
          <h2 className={styles.NoEvents}>
            There are no ongoing events at the moment.
          </h2> : 
          ongoingEventsData.map((event: IEventArticle, index: number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventArticle article={event} />
            </motion.div>
          ))
        }
      </div>

      <div id="upcomingEvents" className={styles.Upcoming}>
        <h1>Upcoming Events</h1>
        { (upcomingEventsData.length === 0) ?
          <h2 className={styles.NoEvents}>
            There are no upcoming events at the moment.
          </h2> : 
          upcomingEventsData.map((event: IEventArticle, index: number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventArticle article={event} />
            </motion.div>
          ))
        }
      </div>

      <div id="pastEvents" className={styles.Past}>
        <h1>Past Events</h1>
        { (pastEventsData.length === 0) ?
          <h2 className={styles.NoEvents}>
            There are no past events at the moment.
          </h2> : 
          pastEventsData.map((event: IEventArticle, index: number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventArticle article={event} />
            </motion.div>
          ))
        }
      </div>
    </div>
  );
}

export default Events;
