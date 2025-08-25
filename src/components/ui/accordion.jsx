import { useState } from 'react';
import './accordion.css';

const Accordion = ({ type, collapsible, children }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const handleMouseEnter = (value) => {
    if (type === 'single') {
      setOpenItems(new Set([value]));
    } else {
      const newOpenItems = new Set(openItems);
      newOpenItems.add(value);
      setOpenItems(newOpenItems);
    }
  };

  const handleMouseLeave = (value) => {
    if (type === 'single') {
      setOpenItems(new Set());
    } else {
      const newOpenItems = new Set(openItems);
      newOpenItems.delete(value);
      setOpenItems(newOpenItems);
    }
  };

  return (
    <div className="accordion">
      {children.map((child) => {
        const isOpen = openItems.has(child.props.value);
        return (
          <div 
            key={child.props.value} 
            className="accordion-item"
            onMouseEnter={() => handleMouseEnter(child.props.value)}
            onMouseLeave={() => handleMouseLeave(child.props.value)}
          >
            <div
              className="accordion-trigger"
              aria-expanded={isOpen}
            >
              {child.props.children[0].props.children}
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="accordion-content-inner">
                {child.props.children[1].props.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AccordionItem = ({ value, children }) => {
  return { props: { value, children } };
};

const AccordionTrigger = ({ children }) => {
  return { props: { children } };
};

const AccordionContent = ({ children }) => {
  return { props: { children } };
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };