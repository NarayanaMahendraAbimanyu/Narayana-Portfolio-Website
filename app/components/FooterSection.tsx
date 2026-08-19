'use client';

import React from 'react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#2b2b2b] text-white py-6 sm:py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start flex-1">
          <span className="font-bold text-xl sm:text-2xl tracking-wide">Narayn.</span>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col items-center text-center gap-1 flex-none">
          <p className="font-normal text-[11px] sm:text-xs md:text-sm whitespace-normal lg:whitespace-nowrap text-gray-300">
            Narayana Mahendra Abimanyu - Front End Developer & Web Designer
          </p>
          <p className="font-normal text-[8px] sm:text-[11px] md:text-xs text-gray-400">
            © 2026 Narayana Mahendra A. All rights reserved
          </p>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-1">
          <button 
            onClick={scrollToTop}
            className="group relative w-9 h-9 sm:w-10 sm:h-10 bg-[#d9d9d9] rounded-full flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 focus:outline-none"
            aria-label="Scroll to top"
          >
            <span className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="relative z-10 h-4 w-4 text-black group-hover:text-white transform group-hover:-translate-y-0.5 transition-all duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;