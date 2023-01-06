// Library imports.
import { useSelector } from 'react-redux';
import { BsChevronDoubleRight, BsCalendarEvent, BsLink45Deg, BsPencilFill, BsTrashFill } from "react-icons/bs";

// Component imports.
import { workshopData as data } from "../../configs/config";
import PostForm from "../../components/PostForm/PostForm";

// Style imports.
import styles from "./Events.module.scss";

// Media imports.
import dsci_workshop from "../../images/events/dsci_workshop.png";
import guest_speaker from "../../images/events/guest_speaker.jpg";
import guest_speaker2 from "../../images/events/guest_speaker2.jpg";


/**
 * Renders an Event post.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const EventPost = (props: {title : string, date : Date, img : string, body : string}) => {
  const date = props.date;
  const postUrl = `/events/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${props.title.toLowerCase().replace(/ /g, "-")}`;

  return (
    <div className={styles.EventPost}>
      <div className={styles.Options}>
        <BsLink45Deg className={styles.Copy} title="Copy Event Details" />
        {/* <BsTrashFill className={styles.Delete} title="Delete Post" />
        <BsPencilFill className={styles.Edit} title="Edit Post" /> */}
      </div>

      <div className={styles.LineDividerTop} />

      <h1 className={styles.Title}>
        <a href={postUrl} rel="noreferrer">{props.title}</a>
      </h1>

      <div className={styles.Date} title="Add to Calendar">
        <BsCalendarEvent />
        {props.date.toLocaleDateString()}
      </div>

      { props.img && <img alt="" src={props.img} /> }

      <div className={styles.EventBody}>
        {props.body}
      </div>

      <div className={styles.MoreButton}>
        <a href={postUrl} target="_blank" rel="noreferrer">Learn More</a>
        <BsChevronDoubleRight />
      </div>

      <div className={styles.LineDividerBottom} />
    </div>
  );
};


/**
 * Renders the Events page.
 * @returns {JSX.Element} JSX Component.
 */
const Events = () => {
  const { user } = useSelector((state : any) => state.auth);

  return (
    <div className={styles.Events}>
      { user && user.user && <PostForm />}

      <div id="upcomingEvents" className={styles.Upcoming}>
        <EventPost
          title="Simple Test Post"
          date={new Date()}
          body={`
            Join us every other Sunday to learn from data science workshops hosted by our club president on our Discord server!
            Come for an hour to learn more about data science and machine learning techniques!
          `}
          img={dsci_workshop}
        />

        <EventPost
          title="Interview: Becoming a DATA SCIENTIST"
          date={new Date()}
          body={`
            Our club is presenting a member-exclusive event *Panel Interview: Becoming a Data Scientist*.
            Five data science professionals are invited to share their personal journeys in navigating their career paths to where they are today, in data science.
            Come meet, eat pizza and ask questions to our amazing panel of data scientists:
          `}
          img={guest_speaker}
        />
      </div>

      <div id="ongoingEvents" className={styles.Ongoing}>
        {/* <Event
          title="Data Science Workship Series!!!"
          date="June 11. 2022"
          body={`
            Join us every other Sunday to learn from data science workshops hosted by our club presidenton our discord server!
            Come for an hour to learn more about data science and machine learning techniques!
          `}
          img={dsci_workshop}
        >
          <p style={{ fontWeight: "bold" }}>Upcoming and Previous Workshops:</p>
          <table style={{ width: "90%" }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Topic</th>
              </tr>
            </thead>
            <tbody>
              {data.map((workshop) => {
                return (
                  <tr key={workshop.date + workshop.topic}>
                    <td style={{ paddingRight: "1rem", marginLeft: "1rem" }}>
                      {workshop.date}
                    </td>
                    <td style={{ padding: "3px" }}>{workshop.topic}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Event> */}
      </div>

      <div id="pastEvents" className={styles.Past}>
        {/* <Event
          title="Interview: Becoming a DATA SCIENTIST"
          date="March 29. 2022"
          body={`
            Our club is presenting a member-exclusive event *Panel Interview: Becoming a Data Scientist*.
            Five data science professionals are invited to share their personal journeys in navigating their career paths to where they are today, in data science.
            Come meet, eat pizza and ask questions to our amazing panel of data scientists:
          `}
          img={guest_speaker}
        >
          <img className="EventImage w-11/12 lg:w-5/6 mx-auto my-4" alt="event-img" src={guest_speaker2} />
          <table>
            <thead>
              <tr>
                <th>Guest Panelists:</th>
              </tr>
            </thead>
            <tbody>
              <tr>Thomas Pin @ PagerDuty</tr>
              <tr>Diego Campeao @ Vancouver Coastal Health</tr>
              <tr>Hessam Teimouri @ Teck Resources</tr>
              <tr>Duong Vu @ UrbanLogiq</tr>
              <tr>Alexander Hinton @ Vancouver Whitecaps FC</tr>
            </tbody>
          </table>
          <p>Please RSVP by completing the form in our bio!</p>
          <p style={{ fontWeight: "bold" }}>
            Time: 6:30PM - 8:30PM, Friday, April 1, 2022<br></br>
            Location: Performance Theatre in Nest, 2nd floor. 6133 University
            Blvd. Vancouver, BC V6T 1Z1
          </p>
          <p style={{ fontWeight: "bold" }}>Free pizza and drinks provided!</p>
        </Event>

        <Event
          title="JOIN OUR EXEC TEAM!"
          date="March 24. 2022"
          body={`
            Our executive election is happening THIS Sunday, March 27 at 3pm, online and in-person!
            If you'd like to run for any of these positions, check out our executive package in our Instragram bio and join our Discord server for more details.
            All club members are eligible to run and vote for the elections, so make sure your voice is heard this weekend!
          `}
        >
          <p>
            If you have any questions, feel free to DM us on any platform. We're
            excited to see and meet you all soon!
          </p>
        </Event> */}
      </div>
    </div>
  );
}

export default Events;
