import { animateScroll as scroll } from "react-scroll";

export const scrollTop = (duration : number=500) => {
  scroll.scrollToTop({ duration, delay: 0, smooth: "easeInOutQuart" });
};
