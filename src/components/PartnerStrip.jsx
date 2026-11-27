import React from 'react';
import { content } from '../content';

export default function PartnerStrip() {
  const photo = content.partner?.photo;

  return (
    <section className="py-14 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
          {/* Label text */}
          <div className="max-w-xs">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C25212] block">
              Strategic Partnership
            </span>
            <p className="text-base font-semibold text-[#2B2B2B] mt-0.5">
              In official collaboration with
            </p>
            <p className="text-sm text-gray-600 font-medium mt-0.5">
              {content.partner.legalName} | RC {content.partner.regNumber}
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

        {/* Partner Management Photo Card */}
        {photo && (
          <div className="mt-10 md:mt-12 max-w-3xl mx-auto">
            <figure className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-subtle transition-shadow flex flex-col">
              <div className="w-full aspect-[4/3] bg-stone-100 flex items-center justify-center overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="p-5 sm:p-6 text-base font-medium text-[#2B2B2B] leading-relaxed border-t border-gray-100 text-center">
                {photo.caption}
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
