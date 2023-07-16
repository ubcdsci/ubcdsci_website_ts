import { motion } from 'framer-motion';
import { BsChevronDoubleRight, BsCalendarEvent, BsLink45Deg, BsPencilFill, BsTrashFill } from 'react-icons/bs';

import { screenBottomToTop } from '@/utils/framerAnims';

import styles from '@/assets/styles/pages/Events.module.scss';

import dsci_workshop from '@/assets/images/events/dsci_workshop.png';
import guest_speaker2 from '@/assets/images/events/guest_speaker2.jpg';


/**
 * Renders an Event post.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const EventPost = (props: {title : string, date : Date, body : JSX.Element | string, img : string}) => {
  // const { user } = useSelector((state : any) => state.auth);

  // const date = props.date;
  // const postUrl = "";
  // `/events/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${props.title.toLowerCase().replace(/ /g, "-")}`;

  return (
    <div className={styles.EventPost}>
      <br />
      {/* <div className={styles.Options}>
        <BsLink45Deg className={styles.Copy} title="Copy Event Details" />
        { user && user.user &&
          <>
            <BsTrashFill className={styles.Delete} title="Delete Post" />
            <BsPencilFill className={styles.Edit} title="Edit Post" />
          </>
        }
      </div> */}

      <div className={styles.LineDividerTop} />

      <h1 className={styles.Title}>
        {/* <a href={postUrl} rel="noreferrer">{props.title}</a> */}
        {props.title}
      </h1>

      <div className={styles.Date}>
        <BsCalendarEvent />
        {props.date.toLocaleDateString()}
      </div>

      {/* <div className={styles.Date} title="Add to Calendar">
        <BsCalendarEvent />
        {props.date.toLocaleDateString()}
      </div> */}

      { props.img && <img alt="" src={props.img} /> }

      <div className={styles.EventBody}>
        {props.body}
      </div>

      {/* <div className={styles.MoreButton}>
        <a href={postUrl} target="_blank" rel="noreferrer">Learn More</a>
        <BsChevronDoubleRight />
      </div> */}

      <div className={styles.LineDividerBottom} />
    </div>
  );
};

interface Events {
  title: string;
  date: Date;
  body: JSX.Element | string;
  img?: string;
}

const tempOngoingEventsData : Events[] = [
  {
    title: "Data Science Workship Series!!!",
    date: new Date(),
    body: `
      Join us every other Sunday to learn from data science workshops hosted by our club presidenton our discord server!
      Come for an hour to learn more about data science and machine learning techniques!
    `,
    img: dsci_workshop,
  },
];

const tempUpcomingEventsData : Events[] = [
  // {
  //   title: "Simple Test Post",
  //   date: new Date(),
  //   body: `
  //     Join us every other Sunday to learn from data science workshops hosted by our club president on our Discord server!
  //     Come for an hour to learn more about data science and machine learning techniques!
  //   `,
  //   img: dsci_workshop,
  // },
];

const tempPastEventsData : Events[] = [
  {
    title: "Interview: Becoming a DATA SCIENTIST",
    date: new Date("March 29. 2022"),
    body:
    <p>
      Our club is presenting a member-exclusive event <b>Panel Interview: Becoming a Data Scientist</b>.
      Five data science professionals are invited to share their personal journeys in navigating their career paths to where they are today, in data science.
      Come meet, eat pizza and ask questions to our amazing panel of data scientists!
    </p>,
    img: guest_speaker2,
  },
  {
    title: "JOIN OUR EXEC TEAM!",
    date: new Date("March 24. 2022"),
    body: `
      Our executive election is happening THIS Sunday, March 27 at 3pm, online and in-person!
      If you'd like to run for any of these positions, check out our executive package in our Instragram bio and join our Discord server for more details.
      All club members are eligible to run and vote for the elections, so make sure your voice is heard this weekend!
    `,
  },
];

/**
 * Renders the Events page.
 * @returns {JSX.Element} JSX Component.
 */
const Events = () => {
  const duration = 0.5;
  const viewport = {
    once: true
  };

  return (
    <div className={styles.Events}>
      <div id="ongoingEvents" className={styles.Ongoing}>
        <h1>Ongoing Events</h1>
        { (tempOngoingEventsData.length === 0) ?
          (<h2 className={styles.NoEvents}>There are no ongoing events at the moment.</h2>) : 
          (tempOngoingEventsData.map((event : Events, index : number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventPost
                title={event.title}
                date={event.date}
                body={event.body}
                img={event.img || ""}
              />
            </motion.div>
          )))}
      </div>

      <div id="upcomingEvents" className={styles.Upcoming}>
        <h1>Upcoming Events</h1>
        { (tempUpcomingEventsData.length === 0) ?
          (<h2 className={styles.NoEvents}>There are no upcoming events at the moment.</h2>) : 
          (tempUpcomingEventsData.map((event : Events, index : number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventPost
                title={event.title}
                date={event.date}
                body={event.body}
                img={event.img || ""}
              />
            </motion.div>
          )))}
      </div>

      <div id="pastEvents" className={styles.Past}>
        <h1>Past Events</h1>
        { (tempPastEventsData.length === 0) ?
          (<h2 className={styles.NoEvents}>There are no past events at the moment.</h2>) : 
          (tempPastEventsData.map((event : Events, index : number) => (
            <motion.div
              key={event.title}
              initial="offscreen"
              whileInView="onscreen"
              variants={screenBottomToTop}
              viewport={viewport}
              transition={{ duration }}
            >
              <EventPost
                title={event.title}
                date={event.date}
                body={event.body}
                img={event.img || ""}
              />
            </motion.div>
          )))}
      </div>
    </div>
  );
}

export default Events;
