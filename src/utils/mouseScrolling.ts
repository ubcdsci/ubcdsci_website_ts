import { animateScroll as scroll } from "react-scroll";

/**
 * Scrolls to the top of the page.
 * @param duration The time in milliseconds for the scroll animation to complete. Defaults to 500.
 */
function scrollTop(duration=500) {
  scroll.scrollToTop({ duration, delay: 0, smooth: "easeInOutQuart" });
}

/**
 * Scrolls to the bottom of the page.
 * @param duration The time in milliseconds for the scroll animation to complete. Defaults to 500.
 */
function scrollBottom(duration=500) {
  scroll.scrollToBottom({ duration, delay: 0, smooth: "easeInOutQuart" });
}

export { scrollTop, scrollBottom };
