import React from 'react';
import { content } from '../content';

export default function Testimonials() {
  if (!Array.isArray(content.testimonials) || content.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F27A2E]">
            Client Stories
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#2B2B2B]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between"
            >
              <p className="text-sm text-gray-700 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="font-bold text-sm text-[#2B2B2B]">{t.author}</div>
                <div className="text-xs text-gray-500">{t.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
