import { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

import styles from '@/assets/styles/components/AccordionItem.module.scss';


/**
 * Renders the Accordion component.
 * @returns {JSX.Element} JSX Component.
 */
const AccordionItem = (props: {item: {question : any, answer : any}, index: number}) => {
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

export default AccordionItem;
