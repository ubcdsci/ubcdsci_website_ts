// Library imports.


// Component imports.


// Media imports.



/**
 * Renders a ContentStrip.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Event = (props: any) => {
  return (
    // <MovingText
    //   type="fadeIn"
    //   duration="1500ms"
    //   delay="0s"
    //   direction="normal"
    //   timing="ease"
    //   iteration="1"
    //   fillMode="none"
    // >
      <div className="EventBlock">
        <div className="EventDivider"></div>
        <h1 className="EventTitle">{props.title}</h1>
        <p className="EventPostDate">{props.date}</p>
        {props.img !== undefined ? (
          <img className="EventImage" alt="event-img" src={props.img}></img>
        ) : (
          <></>
        )}
        <div className="EventBodyContainer">
          <p className="EventBody">{props.body}</p>
          <div className="EventChildren">{props.children}</div>
        </div>
      </div>
    // </MovingText>
  );
}

export default Event;
