import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../content';
import Icon from './Icon';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E9BE0]">
            Simple & Transparent
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-gray-600">
            A clear, dependable process whether you are applying for university abroad, embarking on Umrah, or financing a commercial tricycle.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {content.howItWorks.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                {/* Step Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-gray-200 tracking-tight">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1E9BE0] flex items-center justify-center border border-sky-100">
                    <Icon name={step.icon} className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#2B2B2B] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#1E9BE0]">
                <span>Step {step.step} in your journey</span>
                <Icon name="ArrowRight" className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
