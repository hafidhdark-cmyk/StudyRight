import React, { useState } from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  if (!Array.isArray(content.faqs) || content.faqs.length === 0) {
    return null;
  }

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E9BE0]">
            Helpful Information
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Clear, straightforward answers about our travel advisory, visa guidance, and consultation services.
          </p>
        </div>

        <div className="space-y-4">
          {content.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
              >
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[56px] py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#2B2B2B] hover:text-[#0C6BA8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C6BA8] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <Icon
                    name="ChevronDown"
                    className={`w-5 h-5 shrink-0 transition-transform duration-250 motion-reduce:transition-none ${
                      isOpen ? 'rotate-180 text-[#0C6BA8]' : 'text-gray-400'
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-[grid-template-rows] duration-250 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-2 text-base text-gray-700 leading-relaxed font-normal border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
