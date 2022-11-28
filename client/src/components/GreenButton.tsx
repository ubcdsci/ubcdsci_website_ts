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
      " bg-txtll rounded-[20px] text-white text-center py-[0.5rem] px-[1.2rem] transition-colors duration-500 hover:bg-txthl "
      + "mr-4"
    }> 
      <a
        target="_blank"
        href={props.href}
        rel="noreferrer noopener"
        className={
          "green-button " +
          "text-gray-50 hover:text-white text-sm"
        }
      >
        {props.text}
      </a>
    </div>
  );
}

export default GreenButton;
