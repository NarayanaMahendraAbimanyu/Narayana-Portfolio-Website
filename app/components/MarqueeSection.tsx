"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 120,
    mass: 0.5,
  });

  const topX = useTransform(smoothProgress, [0, 0.5, 1], ["40vw", "0vw", "-40vw"]);
  const bottomX = useTransform(smoothProgress, [0, 0.5, 1], ["-40vw", "0vw", "40vw"]);

  const topItems = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    line1: "Front End",
    line2: "Developer",
    isCenter: i === 12,
  }));

  const bottomItems = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    line1: "Web",
    line2: "Designer",
    isCenter: i === 12,
  }));

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#E5E5E7] py-10 sm:py-16 md:py-20 flex flex-col items-center justify-center space-y-3 sm:space-y-8 md:space-y-12"
    >
      <motion.div
        style={{ x: topX }}
        className="flex w-max items-center justify-center space-x-4 sm:space-x-6 md:space-x-10"
      >
        {topItems.map((item, idx) => (
          <React.Fragment key={item.id}>
            <div
              className={`flex flex-col text-left leading-tight tracking-tight text-base sm:text-xl md:text-2xl lg:text-3xl ${
                item.isCenter ? "font-black text-[#222]" : "font-bold text-gray-400/40"
              }`}
            >
              <span>{item.line1}</span>
              <span>{item.line2}</span>
            </div>
            {idx < topItems.length - 1 && (
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400/40 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      <motion.div
        style={{ x: bottomX }}
        className="flex w-max items-center justify-center space-x-4 sm:space-x-6 md:space-x-10"
      >
        {bottomItems.map((item, idx) => (
          <React.Fragment key={item.id}>
            <div
              className={`flex flex-col text-left leading-tight tracking-tight text-base sm:text-xl md:text-2xl lg:text-3xl ${
                item.isCenter ? "font-black text-[#222]" : "font-bold text-gray-400/40"
              }`}
            >
              <span>{item.line1}</span>
              <span>{item.line2}</span>
            </div>
            {idx < bottomItems.length - 1 && (
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400/40 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}