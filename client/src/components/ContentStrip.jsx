// Library imports.
import React from "react";

// Component imports.

// Media imports.

/**
 * Renders a ContentStrip.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function ContentStrip(props) {
  return (
    <div className={`contentStrip ${props.type}`}>
      {props.preImageSource && (
        <img src={props.preImageSource} alt={props.title} />
      )}
      <div className="contentText">
        <h1>{props.title}</h1>
        <br></br>
        <p>{props.text}</p>
      </div>
      {props.content}
      {props.postImageSource && (
        <img src={props.postImageSource} alt={props.title} />
      )}
    </div>
  );
}
