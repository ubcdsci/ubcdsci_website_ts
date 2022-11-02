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
      <div className="EventBlock mb-7 p-7 lg:px-32">
        <div className="EventDivider bg-white h-px w-10 mb-3"></div>
        <h1 className={"EventTitle text-3xl font-bold"}>{props.title}</h1>
        <p className="EventPostDate opacity-60">{props.date}</p>
        {props.img !== undefined ? (
          <img className="EventImage w-11/12 lg:w-5/6 mx-auto my-4" alt="event-img" src={props.img}></img>
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
