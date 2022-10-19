// Library imports.
import React from "react";

// Component imports.

// Media imports.

/**
 * Renders a link Button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function GreenButton(props) {
  return (
    <div className="registrationButtonContainer">
      <a target="_blank" href={props.href} rel="noreferrer noopener">
        {props.text}
      </a>
    </div>
  );
}
