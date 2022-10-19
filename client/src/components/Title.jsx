// Library imports.
import React from "react";

// Component imports.

// Media imports.

/**
 * Renders a Title.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function Title(props) {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="title">{props.text}</h1>
    </div>
  );
}
