// Library imports.


// Component imports.
import { workshopData as data } from "../utils/config";
import Event from "../components/Event";

// Media imports.
import dsci_workshop from "../images/event/dsci_workshop.png";
import guest_speaker from "../images/event/guest_speaker.jpg";
import guest_speaker2 from "../images/event/guest_speaker2.jpg";



/**
 * Renders the Events page.
 * @returns {JSX.Element} JSX Component.
 */
const Events = () => {
  return (
    <>
      <div id="upcomingEvents"></div>

      <div id="pastEvents">
        <Event
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
        </Event>
      </div>

      <div id="ongoingEvents">
        <Event
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
        </Event>
      </div>
    </>
  );
}

export default Events;
