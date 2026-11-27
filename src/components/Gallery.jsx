import React from 'react';
import { content } from '../content';

export default function Gallery() {
  if (!content.gallery || !Array.isArray(content.gallery.items) || content.gallery.items.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            {content.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.gallery.items.map((item, idx) => (
            <figure
              key={idx}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-subtle transition-shadow flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-stone-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="p-5 sm:p-6 text-base font-medium text-[#2B2B2B] leading-relaxed border-t border-gray-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
