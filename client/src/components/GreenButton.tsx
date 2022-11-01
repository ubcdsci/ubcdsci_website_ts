// Library imports.


// Component imports.


// Media imports.


/**
 * Renders a link Button.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const GreenButton = (props: any) => {
  return (
    <div className={
      "green-button-container " +
      props.className +
      " bg-green-700 rounded-lg text-white text-center py-1 px-[1rem] transition-colors hover:bg-green-600"
    }>
      <a
        target="_blank"
        href={props.href}
        rel="noreferrer noopener"
        className={
          "green-button " +
          "text-gray-50 hover:text-white"
        }
      >
        {props.text}
      </a>
    </div>
  );
}

export default GreenButton;
