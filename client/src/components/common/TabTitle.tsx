// Library imports.
import { Helmet } from "react-helmet";

// Component imports.

// Media imports.

/**
 * Sets the title for the browser tab.
 * @param {String} props.title The title to set.
 * @returns {JSX.Element} JSX Component.
 */
const TabTitle = (props: any) => {
  return (
    <Helmet>
      <title>{props.title} – UBC Data Science Club</title>
      {props.description !== undefined ? (
        <meta name="description" content={props.description} />
      ) : (
        <meta name="description" content={`
          AMS UBC Data Science Club
        `} />
      )}
    </Helmet>
  );
}

export default TabTitle;