"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const contacts = [
  { label: "Email", href: "mailto:narayanamahendraabimanyu@gmail.com", external: false },
  { label: "GitHub", href: "https://github.com/NarayanaMahendraAbimanyu", external: true },
  { label: "Instagram", href: "https://instagram.com/abcdlmnryna_", external: true },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const rise: Variants = {
    hidden: { y: reduceMotion ? 0 : "105%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease } },
  };

  const fade: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
  };

  return (
    <section className="w-full min-h-screen bg-[#E5E5E7] text-[#010102] flex items-center px-5 sm:px-8 md:px-12 pt-32 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center"
      >
        <div className="lg:col-span-7">
          <h1 className="font-['Poppins'] font-semibold tracking-tight leading-[0.95] text-6xl sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={rise} className="block">
                Narayana
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={rise} className="block">
                Mahendra A.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            className="mt-8 sm:mt-10 text-xl sm:text-2xl font-medium tracking-tight"
          >
            Front-end developer and Beginner web designer.
          </motion.p>
          <motion.p
            variants={fade}
            className="mt-3 max-w-md text-base leading-relaxed text-[#010102]/60"
          >
            I design interfaces in Figma and build them into responsive websites
            with React and Next.js.
          </motion.p>

          <motion.div
            variants={fade}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-[#010102] px-7 py-3.5 text-sm sm:text-base font-semibold text-[#E5E5E7] transition-colors duration-300 hover:bg-[#2E2E2E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#010102]"
            >
              View projects
            </Link>
            <a
              href="/resume-narayanamahendra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm sm:text-base font-semibold focus-visible:outline-none"
            >
              <span className="border-b-2 border-[#010102]/25 pb-0.5 transition-colors duration-300 group-hover:border-[#010102] group-focus-visible:border-[#010102]">
                Download resume
              </span>
            </a>
          </motion.div>

          <motion.ul
            variants={fade}
            className="mt-14 sm:mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#010102]/15 pt-6"
          >
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group text-sm font-medium text-[#010102]/60 transition-colors duration-300 hover:text-[#010102] focus-visible:text-[#010102] focus-visible:outline-none"
                >
                  <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-[#010102] group-focus-visible:border-[#010102]">
                    {c.label}
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.figure
          variants={fade}
          className="lg:col-span-5 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] mx-auto lg:mx-0 lg:justify-self-end"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-[#222222]">
            <Image
              src="/fotonarayana-hero.png"
              alt="Foto Narayana Mahendra Abimanyu"
              fill
              priority
              sizes="(min-width: 1024px) 380px, 360px"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 text-sm text-center lg:text-left text-[#010102]/55">
            East Java, Indonesia
          </figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}