import React from 'react';
import { content } from '../content';
import Icon from './Icon';

export default function Gallery() {
  if (!content.gallery || !Array.isArray(content.gallery.items) || content.gallery.items.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          {content.gallery.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-[#0F74B3] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Icon name="GraduationCap" className="w-3.5 h-3.5 text-[#0F74B3]" />
              <span>{content.gallery.eyebrow}</span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            {content.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.gallery.items.map((item, idx) => (
            <figure
              key={idx}
              className="bg-white rounded-3xl p-2.5 sm:p-3.5 border border-gray-200/90 shadow-premium hover:border-[#1E9BE0]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-[4/3] rounded-2xl bg-stone-100 flex items-center justify-center overflow-hidden ring-1 ring-black/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="pt-4 pb-2 px-2.5 flex items-start gap-3.5 flex-grow">
                <div className="w-9 h-9 rounded-xl bg-[#F0F9FF] border border-[#1E9BE0]/25 text-[#0F74B3] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="CheckCircle2" className="w-4 h-4" />
                </div>
                <span className="text-base font-medium text-[#2B2B2B] leading-relaxed">
                  {item.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
