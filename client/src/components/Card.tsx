// Library imports.
import { useState } from "react";

// Component imports.


// Media imports.



/**
 * Renders a Card.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Card = (props: any) => {
  const [orientation, setOrientation] = useState(false);

  return (
    <div className="p-3 lg:p-10">
      <div
        className="projectCard flex justify-center items-center hover:text-black
        h-[28rem] bg-projlow hover:bg-[#dfe8db] hover:text-[#151414] transition	duration-[400ms] ease-in-out
        shadow-[7px_7px_rgba(51,53,50)] hover:shadow-[8px_8px_rgba(101,103,99)]"
        id={props.id}
        onClick={() => setOrientation((x) => !x)}
      >
        {orientation ? (
          <div className="textDiv--back w-11/12 text-center transition-[width] duration-[400ms] ease-in-out">
            <h4 className="projectCard--title font-bold text-2xl">{props.title}</h4>
            <p className="projectCard--body text-sm">{props.body}</p>
            {props.children}
          </div>
        ) : (
          <>
            <div className="textDiv w-2/6 m-auto transition-[width] duration-[400ms] ease-in-out">
              <h4 className="projectCard--title font-bold text-2xl">{props.title}</h4>
              <p className="projectCard--body text-sm">{props.concepts}</p>
            </div>
            <div className="imgDiv w-3/5 flex justify-end h-full">
              <img
                className="projectImage object-cover	"
                alt={"project: " + props.title}
                src={props.src}
              ></img>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
