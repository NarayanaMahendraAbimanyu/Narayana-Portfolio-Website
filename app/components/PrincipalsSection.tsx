"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

export default function PrincipalsSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "center center"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const itemY1 = useTransform(progress, [0, 0.2], [60, 0]);
  const itemOpacity1 = useTransform(progress, [0, 0.2], [0, 1]);

  const itemY2 = useTransform(progress, [0.15, 0.35], [60, 0]);
  const itemOpacity2 = useTransform(progress, [0.15, 0.35], [0, 1]);

  const itemY3 = useTransform(progress, [0.3, 0.5], [60, 0]);
  const itemOpacity3 = useTransform(progress, [0.3, 0.5], [0, 1]);

  const itemY4 = useTransform(progress, [0.45, 0.65], [60, 0]);
  const itemOpacity4 = useTransform(progress, [0.45, 0.65], [0, 1]);

  const itemY5 = useTransform(progress, [0.6, 0.8], [60, 0]);
  const itemOpacity5 = useTransform(progress, [0.6, 0.8], [0, 1]);

  const itemY6 = useTransform(progress, [0.75, 0.95], [60, 0]);
  const itemOpacity6 = useTransform(progress, [0.75, 0.95], [0, 1]);

  const itemY7 = useTransform(progress, [0.85, 1.0], [60, 0]);
  const itemOpacity7 = useTransform(progress, [0.85, 1.0], [0, 1]);

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (customDelay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#E5E5E7] flex flex-col items-center justify-center py-16 sm:py-20 pb-80 px-4 overflow-hidden z-10"
    >
      <motion.div
        custom={0.3}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-[6%] left-[6%] sm:top-[10%] sm:left-[10%] md:top-[20%] md:left-[25%] lg:left-[20%]"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <i className="bx bxl-github text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.4}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-[32%] left-[4%] sm:top-[38%] sm:left-[8%] md:top-[45%] md:left-[15%] lg:left-[18%]"
      >
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <i className="bx bxl-visual-studio text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.5}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-[10%] left-[7%] sm:bottom-[14%] sm:left-[11%] md:bottom-[20%] md:left-[28%] lg:left-[22%]"
      >
        <motion.div
          animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <i className="bx bxl-figma text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.3}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-[6%] right-[6%] sm:top-[10%] sm:right-[10%] md:top-[18%] md:right-[25%] lg:right-[20%]"
      >
        <motion.div
          animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <i className="bx bxl-react text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.4}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute top-[32%] right-[4%] sm:top-[38%] sm:right-[8%] md:top-[42%] md:right-[15%] lg:right-[18%]"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <i className="bx bxl-tailwind-css text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.5}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-[10%] right-[7%] sm:bottom-[14%] sm:right-[11%] md:bottom-[22%] md:right-[28%] lg:right-[22%]"
      >
        <motion.div
          animate={{ y: [12, -12, 12], x: [6, -6, 6] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="group cursor-pointer w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-transparent border-2 border-[#010102] hover:bg-[#010102] rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-200"
        >
          <SiNextdotjs className="text-xl sm:text-2xl md:text-4xl text-[#010102] group-hover:text-[#E7E7E7] transition-colors duration-200" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-2 sm:space-y-3">
        <div className="overflow-hidden py-1">
          <motion.h2
            style={{ y: itemY1, opacity: itemOpacity1 }}
            className="text-xl sm:text-3xl font-bold font-['Poppins'] text-black mb-2"
          >
            My Principals
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-center text-[18px] sm:text-[28px] md:text-[46px] leading-[1.3] sm:leading-[1.2] md:leading-[1.1] font-semibold text-black/50 space-y-0">
          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY2, opacity: itemOpacity2 }}>
              I <span className="text-black">design and engineer</span>
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY3, opacity: itemOpacity3 }}>
              responsive web solutions by
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY4, opacity: itemOpacity4 }}>
              blending aesthetic precision,
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY5, opacity: itemOpacity5 }}>
              clean code, and optimized
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY6, opacity: itemOpacity6 }}>
              performance to drive user
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div style={{ y: itemY7, opacity: itemOpacity7 }}>
              engagement.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}