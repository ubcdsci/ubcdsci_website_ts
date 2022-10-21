// Library imports.
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

// Component imports.

// Media imports.

/**
 * Renders a ScrollToTop button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ScrollToTop = (props: any) => {
  // Scroll wheel event; show/hide button
  let [visible, setVisible] = useState(true);
  let visiblity = visible ? "hidden" : "visible";

  useEffect(() => {
    let handleSTTScroll = () => {
      var bodyRect = document.body.getBoundingClientRect();
      setVisible(window.pageYOffset < bodyRect.top);
    };

    window.addEventListener("scroll", handleSTTScroll);
    return () => {
      window.removeEventListener("scroll", handleSTTScroll);
    };
  });

  return (
    <BsFillArrowUpCircleFill
      className={"scrollToTop " + visiblity}
      title="Go to top"
      onClick={() => {
        scroll.scrollToTop({ duration: 500, delay: 0, smooth: "ease" });
      }}
    />
  );
}

export default ScrollToTop;