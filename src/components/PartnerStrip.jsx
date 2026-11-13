import React from 'react';
import { content } from '../content';

export default function PartnerStrip() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
          {/* Label text */}
          <div className="max-w-xs">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#F27A2E] block">
              Strategic Partnership
            </span>
            <p className="text-sm font-semibold text-[#2B2B2B] mt-0.5">
              In official collaboration with
            </p>
            <p className="text-xs text-gray-500">
              {content.partner.regNumber}
            </p>
          </div>

          {/* Clean Partner Logo Card */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-subtle transition-shadow max-w-md sm:max-w-lg">
            <img
              src={content.partner.logo}
              alt={`${content.partner.legalName} - ${content.partner.description}`}
              width="320"
              height="76"
              className="w-full h-auto max-h-16 sm:max-h-20 object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
