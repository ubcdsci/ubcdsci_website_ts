// Library imports.
import React, { useState } from "react";

// Component imports.

// Media imports.

/**
 * Renders a Card.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function Card(props) {
  const [orientation, setOrientation] = useState(false);

  return (
    <div
      className="projectCard"
      id={props.id}
      onClick={() => setOrientation((x) => !x)}
    >
      {orientation ? (
        <div className="textDiv--back">
          <h4 className="projectCard--title">{props.title}</h4>
          <p className="projectCard--body">{props.body}</p>
          {props.children}
        </div>
      ) : (
        <>
          <div className="textDiv">
            <h4 className="projectCard--title">{props.title}</h4>
            <p className="projectCard--body">{props.concepts}</p>
          </div>
          <div className="imgDiv">
            <img
              className="projectImage"
              alt={"project: " + props.title}
              src={props.src}
            ></img>
          </div>
        </>
      )}
    </div>
  );
}
