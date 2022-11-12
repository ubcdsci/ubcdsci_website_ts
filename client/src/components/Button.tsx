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
        <button
          className={
            (props.currentLocation ?
              "CurrentLocation font-normal text-green-300 text-shadow-sm" :
              "font-normal text-gray-50 hover:text-green-200"
            ) + 
            " text-s mt-1 ml-3 mr-3 transition-colors "
          }>
          {props.text}
        </button>
    </Link>
  );
}

export default Button;