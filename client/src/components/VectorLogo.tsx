/**
 * Renders a SVG of the simplified version of the logo.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const VectorLogo = (props: any) => {
  return (
    <div {...props}>
      <svg viewBox="0 0 285.75 285.75" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1.1646651,0,0,1.1646651,-23.96849,-28.09467)">
          <circle style={{strokeWidth: "0.325114"}} cx="138.30946" cy="121.33562" r="66.145836"  />
          <circle style={{strokeWidth: "0.130045"}} cx="47.038063" cy="191.6339" r="26.458334"   />
          <circle style={{strokeWidth: "0.0650225"}} cx="236.44974" cy="101.88864" r="13.229167" />
          <circle style={{strokeWidth: "0.162557"}} cx="232.85631" cy="205.33186" r="33.072918"  />
          <rect style={{strokeWidth: "0.157963"}} width="14.868324" height="44.751663" x="174.29988" y="45.550362"
            transform="matrix(0.69326413,0.72068359,-0.80130405,0.59825731,0,0)" />
          <rect style={{strokeWidth: "0.178376"}} width="15.922833" height="53.285633" x="248.54718" y="-5.4530721"
            transform="matrix(0.91964416,0.39275261,-0.95603955,0.29323776,0,0)" />
          <rect style={{strokeWidth: "0.223213"}} width="21.137772" height="62.855068" x="-7.3135333" y="-308.78275"
            transform="matrix(-0.46873559,0.88333852,-0.76136067,-0.64832856,0,0)" />
        </g>
      </svg>
    </div>
  );
};

export default VectorLogo;
