// Library imports.
import React from "react";
import { Helmet } from "react-helmet";

// Component imports.

// Media imports.

/**
 * Sets the title for the browser tab.
 * @param {String} props.title The title to set.
 * @returns {JSX.Element} JSX Component.
 */
export default function TabTitle(props) {
  return (
    <Helmet>
      <title>{props.title} – UBC Data Science Club</title>
      {props.description !== undefined ? (
        <meta name="description" content={props.description} />
      ) : null}
    </Helmet>
  );
}
