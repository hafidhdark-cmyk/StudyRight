import React, { useState, useEffect } from 'react';
import Icon from './Icon';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-[84px] right-5 sm:bottom-[88px] sm:right-6 z-40 w-12 h-12 rounded-full bg-[#2B2B2B] hover:bg-black text-white border border-white/15 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 motion-reduce:transition-none active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1E9BE0]/40 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon name="ArrowUp" className="w-5 h-5" />
    </button>
  );
}
