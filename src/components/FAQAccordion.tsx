import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const answerId = `faq-answer-${idx}`;
        const buttonId = `faq-button-${idx}`;

        return (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-rose-100 bg-white transition-colors duration-150"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-5 text-left font-display text-base font-semibold text-slate-800 transition-colors hover:text-[#7A3E55] cursor-pointer"
            >
              <span className="pr-4">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#7A3E55] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#F8D7E5]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={answerId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150"
              >
                <div className="pt-2 border-t border-rose-50">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
