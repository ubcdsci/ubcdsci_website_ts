// Library imports.


// Component imports.


// Media imports.



/**
 * Renders a ContentStrip.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ContentStrip = (props: any) => {

  return (
    <div className={`contentStrip ${props.flex} md:flex md:justify-around
   md:items-center px-10 md:py-20`}>
      {!props.imageSource && <div className="contentText w-full">
        <h1 className="text-3xl font-bold text-center">{props.title}</h1>
        <br></br>
        <p>{props.text}</p>
      </div>}
      {props.imageSource && <div className="contentText w-10/12 md:w-1/3">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <br></br>
        <p>{props.text}</p>
      </div>}
      {props.content}
      {props.imageSource && (
        <img className= "md:w-1/2 lg:w-1/3" src={props.imageSource} alt={props.title} />
      )}
    </div>
  );
}

export default ContentStrip;
