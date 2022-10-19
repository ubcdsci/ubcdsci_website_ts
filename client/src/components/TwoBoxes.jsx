// Library imports.
import React from "react";

// Component imports.

// Media imports.

/**
 * Renders a TwoBoxes.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
export default function TwoBoxes(props) {
  return (
    <div style={{ width: "100%", height: "150px" }}>
      <div className="Box"></div>
      <div className="Box"></div>
    </div>
  );
}
