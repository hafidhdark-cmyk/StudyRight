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
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E9BE0]">
            Common Questions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {content.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#2B2B2B] hover:text-[#F27A2E]"
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <Icon
                  name={openIndex === idx ? 'X' : 'ChevronRight'}
                  className="w-4 h-4 text-gray-400 shrink-0"
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
