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
    <div className={"registration-button-container " + props.className}>
      <a target="_blank" href={props.href} rel="noreferrer noopener">
        {props.text}
      </a>
    </div>
  );
}

export default GreenButton;
