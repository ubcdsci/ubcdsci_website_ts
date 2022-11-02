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
    <div className={`contentStrip ${props.type} md:flex md:justify-around
   md:items-center px-10 md:py-20`}>
      {props.preImageSource && (
        <img className= "md:w-1/2 lg:w-1/3" src={props.preImageSource} alt={props.title} />
      )}
      <div className="contentText w-10/12 md:w-1/3">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <br></br>
        <p>{props.text}</p>
      </div>
      {props.content}
      {props.postImageSource && (
        <img className= "md:w-1/2 lg:w-1/3" src={props.postImageSource} alt={props.title} />
      )}
    </div>
  );
}

export default ContentStrip;
