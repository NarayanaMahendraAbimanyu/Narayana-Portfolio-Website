"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

export default function PrincipalsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
    },
  };

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
    <section className="relative md:sticky md:top-0 w-full min-h-[auto] md:min-h-screen bg-[#E5E5E7] flex flex-col items-center justify-center py-16 sm:py-20 px-4 overflow-hidden z-10">

      <motion.div
        custom={0.3}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute top-[20%] md:left-[25%] lg:left-[20%]"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <i className="bx bxl-github text-3xl sm:text-4xl text-black"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.4}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute top-[45%] md:left-[15%] lg:left-[18%]"
      >
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <i className="bx bxl-visual-studio text-3xl sm:text-4xl text-black"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.5}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute bottom-[20%] md:left-[28%] lg:left-[22%]"
      >
        <motion.div
          animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <i className="bx bxl-figma text-3xl sm:text-4xl text-black"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.3}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute top-[18%] md:right-[25%] lg:right-[20%]"
      >
        <motion.div
          animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <i className="bx bxl-react text-3xl sm:text-4xl text-black"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.4}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute top-[42%] md:right-[15%] lg:right-[18%]"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <i className="bx bxl-tailwind-css text-3xl sm:text-4xl text-black"></i>
        </motion.div>
      </motion.div>

      <motion.div
        custom={0.5}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="hidden md:block absolute bottom-[22%] md:right-[28%] lg:right-[22%]"
      >
        <motion.div
          animate={{ y: [12, -12, 12], x: [6, -6, 6] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D1D1D4] rounded-2xl flex items-center justify-center shadow-sm"
        >
          <SiNextdotjs className="text-3xl sm:text-4xl text-black" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-2 sm:space-y-3"
      >
        <div className="overflow-hidden py-1">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-3xl font-bold font-['Poppins'] text-black mb-2"
          >
            My Principals
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-center text-[18px] sm:text-[28px] md:text-[46px] leading-[1.3] sm:leading-[1.2] md:leading-[1.1] font-semibold text-black/50 space-y-0">

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              I <span className="text-black">design and engineer</span>
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              responsive web solutions by
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              blending aesthetic precision,
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              clean code, and optimized
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              performance to drive user
            </motion.div>
          </div>

          <div className="overflow-hidden py-0.5">
            <motion.div variants={itemVariants}>
              engagement.
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}