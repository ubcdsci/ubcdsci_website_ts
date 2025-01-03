// Library imports.
import { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

// Component imports.


// Style imports.
import styles from './AccordionItem.module.scss';

// Media imports.


/**
 * Renders the Accordion component.
 * @returns {JSX.Element} JSX Component.
 */
const Accordion = (props: {item: {question : any, answer : any}, index: number}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.AccordionItemOpen : styles.AccordionItem} key={props.index}>
      <div className={styles.AccordionItemHeader} onClick={toggleAccordion}>
        <div className={styles.AccordionItemQuestion}>
          {props.item.question}
        </div>

        <div className={isOpen ? styles.ButtonUp : styles.ButtonDown}>
          <BsFillCaretDownFill />
        </div>
      </div>
    
      <div className={styles.AccordionItemAnswer}>
        {props.item.answer}
      </div>
    </div>
  );
};

export default Accordion;
