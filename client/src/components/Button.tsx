// Library imports.
import { HashLink as Link } from "react-router-hash-link";
import { animateScroll as scroll } from "react-scroll";

// Component imports.

// Media imports.



// Action event definitions.
let scrollTop = () => {
  scroll.scrollToTop({ duration: 500, delay: 0, smooth: "easeInOutQuart" });
};


/**
 * Renders a link Button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const Button = (props: any) => {
  return (
    <Link to={props.href} onClick={scrollTop}>
      {props.currentLocation ? (
        <button
          className="CurrentLocation"
          style={{
            fontWeight: "500",
            fontSize: "85%",
            marginTop: "3px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {props.text}
        </button>
      ) : (
        <button
          style={{
            fontWeight: "500",
            fontSize: "85%",
            marginTop: "3px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {props.text}
        </button>
      )}
    </Link>
  );
}

export default Button;
