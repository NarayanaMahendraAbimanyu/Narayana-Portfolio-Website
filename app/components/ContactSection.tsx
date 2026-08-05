"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactSection() {
  return (
    <section className="w-full bg-[#2E2E2E] text-[#E5E5E7] py-16 px-4 sm:py-24 sm:px-8 md:py-32 md:px-16 lg:px-24 flex flex-col justify-between min-h-[75vh] md:min-h-[85vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-center my-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm md:text-base font-light text-[#E5E5E7]/70 mb-3 tracking-wide"
        >
          Get in touch
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 sm:mb-12 leading-tight"
        >
          Let’s Talk
          <br />
          Together.
        </motion.h2>

        <motion.div variants={itemVariants} className="inline-block max-w-full overflow-hidden">
          <a
            href="mailto:narayanamahendraabimanyu@gmail.com"
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-xl md:text-3xl lg:text-4xl font-medium text-[#E5E5E7] hover:text-white transition-colors duration-300 pb-2 break-all sm:break-normal"
          >
            <span className="relative">
              narayanamahendraabimanyu@gmail.com
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto w-full my-4 md:my-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 md:gap-16 text-xs sm:text-sm md:text-base font-normal tracking-wider text-[#E5E5E7]/70">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 uppercase"
          >
            RESUME
          </a>
          <a
            href="https://github.com/NarayanaMahendraAbimanyu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 uppercase"
          >
            GITHUB
          </a>
          <a
            href="https://bit.ly/4wF2mHA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 uppercase"
          >
            LINKEDIN
          </a>
          <a
            href="https://instagram.com/abcdlmnryna_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 uppercase"
          >
            INSTAGRAM
          </a>
        </div>
      </motion.div>
    </section>
  );
}