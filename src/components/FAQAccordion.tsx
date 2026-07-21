import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQAccordion.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion" role="tablist">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              className="faq-trigger"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
              id={`faq-trigger-${index}`}
              role="tab"
            >
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon-wrapper">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </button>
            <div
              className="faq-content"
              id={`faq-content-${index}`}
              aria-labelledby={`faq-trigger-${index}`}
              role="tabpanel"
              hidden={!isOpen}
            >
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
