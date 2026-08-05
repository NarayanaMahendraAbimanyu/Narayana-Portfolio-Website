"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 2.5,
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
        <div className="overflow-hidden mb-3">
          <motion.p
            variants={textRevealVariants}
            className="text-xs sm:text-sm md:text-base font-light text-[#E5E5E7]/70 tracking-wide"
          >
            Get in touch
          </motion.p>
        </div>

        <div className="overflow-hidden mb-8 sm:mb-12">
          <motion.h2
            variants={textRevealVariants}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight"
          >
            Let’s Talk
            <br />
            Together.
          </motion.h2>
        </div>

        <div className="overflow-hidden inline-block max-w-full">
          <motion.div variants={textRevealVariants}>
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
        </div>
      </motion.div>

      <div className="overflow-hidden max-w-5xl mx-auto w-full my-4 md:my-8">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 md:gap-16 text-xs sm:text-sm md:text-base font-normal tracking-wider text-[#E5E5E7]/70"
        >
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
        </motion.div>
      </div>
    </section>
  );
}