import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string | JSX.Element;
};

type FaqAccordionProps = {
  faqs: FaqItem[];
};

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className={`border rounded-lg transition-all duration-200 ${
            openIndex === index 
              ? 'border-primary-300 shadow-sm' 
              : 'border-secondary-200'
          }`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center w-full px-6 py-4 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-lg text-primary-900">{faq.question}</span>
            <ChevronDown 
              className={`h-5 w-5 text-primary-600 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`} 
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6 text-secondary-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;