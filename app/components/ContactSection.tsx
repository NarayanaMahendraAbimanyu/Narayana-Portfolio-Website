"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const EMAIL = "narayanamahendraabimanyu@gmail.com";

const links = [
  {
    label: "Resume",
    detail: "PDF",
    href: "/resume-narayanamahendra.pdf",
  },
  {
    label: "GitHub",
    detail: "NarayanaMahendraAbimanyu",
    href: "https://github.com/NarayanaMahendraAbimanyu",
  },
  {
    label: "Instagram",
    detail: "@abcdlmnryna_",
    href: "https://instagram.com/abcdlmnryna_",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const reveal: Variants = {
    hidden: { y: reduceMotion ? 0 : "40%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.1, ease },
    },
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#2E2E2E] text-[#E5E5E7] px-5 sm:px-8 md:px-12 pt-20 sm:pt-24 md:pt-32 pb-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto w-full max-w-6xl"
      >
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 md:items-end">
          <div className="md:col-span-8 overflow-hidden pb-2">
            <motion.h2
              variants={reveal}
              className="font-['Poppins'] font-semibold tracking-tight leading-[0.95] text-5xl sm:text-7xl md:text-8xl text-white"
            >
              Let&apos;s talk
              <br />
              together.
            </motion.h2>
          </div>
          <motion.p
            variants={reveal}
            className="md:col-span-4 max-w-sm text-sm sm:text-base leading-relaxed text-[#E5E5E7]/60"
          >
            Have a project, a collaboration, or just a question? Email is the
            fastest way to reach me.
          </motion.p>
        </div>

        {/* Email */}
        <motion.div variants={reveal} className="mt-14 sm:mt-20 md:mt-24">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex max-w-full items-start gap-3 sm:gap-4 text-white focus-visible:outline-none"
          >
            <span className="relative break-all font-medium tracking-tight leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              {EMAIL}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white/25" />
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full" />
            </span>
            <ArrowUpRight
              className="mt-1 sm:mt-1.5 shrink-0 w-5 h-5 sm:w-7 sm:h-7 lg:w-9 lg:h-9 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </a>

          <div className="mt-6">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[#E5E5E7]/80 transition-colors duration-300 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "done" : "idle"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden />
                      Copy email
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Links */}
        <motion.ul variants={reveal} className="mt-16 sm:mt-24 md:mt-28">
          {links.map((link) => (
            <li key={link.label} className="border-t border-white/10">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-5 sm:py-6 focus-visible:outline-none"
              >
                <span
                  className="text-xl sm:text-2xl font-medium tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  {link.label}
                </span>
                <span className="flex items-center gap-4 min-w-0">
                  <span className="truncate text-sm sm:text-base text-[#E5E5E7]/50 transition-colors duration-300 group-hover:text-[#E5E5E7]/80">
                    {link.detail}
                  </span>
                  <ArrowUpRight
                    className="shrink-0 w-5 h-5 text-white/60 transition-all duration-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Footer */}
        <motion.div
          variants={reveal}
          className="mt-16 sm:mt-24 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-sm text-[#E5E5E7]/45"
        >
          <span>Sidoarjo, Indonesia</span>
          <span>&copy; 2026 Narayn.</span>
        </motion.div>
      </motion.div>
    </section>
  );
}