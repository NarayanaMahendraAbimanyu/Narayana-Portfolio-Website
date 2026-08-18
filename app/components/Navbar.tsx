"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isHome = pathname === "/";
  const isPortfolio = pathname === "/portfolio";

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      setActiveSection("");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveSection("contact");
    setIsOpen(false);

    if (isHome) {
      e.preventDefault();
      const targetElement = document.getElementById("contact");
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      e.preventDefault();
      router.push("/#contact");
    }
  };

  const navLinks = [
    { title: "HOME", href: "/", number: "01", action: scrollToTop, active: isHome && activeSection !== "contact" },
    { title: "PORTFOLIO", href: "/portfolio", number: "02", action: () => { setActiveSection(""); setIsOpen(false); }, active: isPortfolio },
    { title: "CONTACT", href: "/#contact", number: "03", action: scrollToContact, active: activeSection === "contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkContainerVariants: Variants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    closed: {
      y: "100%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const numberVariants: Variants = {
    closed: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 md:top-10 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-16 lg:px-24 flex justify-center"
      >
        <nav className="w-full max-w-2xl bg-[#2A2A2A] text-white px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-between shadow-xl border border-white/10 backdrop-blur-md">
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group focus:outline-none"
          >
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] inline-block transition-transform duration-300 group-hover:scale-110" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] inline-block transition-transform duration-300 group-hover:scale-110" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] inline-block transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-xl tracking-wider text-white transition-opacity duration-300 group-hover:opacity-80">
              Narayn.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-5 text-base">
            <Link
              href="/"
              onClick={scrollToTop}
              className={`transition-all duration-300 hover:text-white whitespace-nowrap ${
                isHome && activeSection !== "contact"
                  ? "font-bold text-white"
                  : "font-normal text-white/50"
              }`}
            >
              HOME
            </Link>

            <Link
              href="/portfolio"
              onClick={() => setActiveSection("")}
              className={`transition-all duration-300 hover:text-white whitespace-nowrap ${
                isPortfolio
                  ? "font-bold text-white"
                  : "font-normal text-white/50"
              }`}
            >
              PORTFOLIO
            </Link>

            <a
              href="/#contact"
              onClick={scrollToContact}
              className={`transition-all duration-300 hover:text-white whitespace-nowrap uppercase cursor-pointer ${
                activeSection === "contact"
                  ? "font-bold text-white"
                  : "font-normal text-white/50"
              }`}
            >
              CONTACT
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span>{isOpen ? "CLOSE" : "MENU"}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inline-block text-sm leading-none"
              >
                +
              </motion.span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-[#1A1A1A] text-white flex flex-col justify-start p-6 sm:p-10 pt-28 sm:pt-32 md:hidden"
          >
            <div className="flex flex-col gap-6 sm:gap-8 mt-4">
              {navLinks.map((link) => (
                <div key={link.title} className="border-b border-white/10 pb-4">
                  <Link
                    href={link.href}
                    onClick={link.action}
                    className="flex items-baseline justify-between group"
                  >
                    <motion.div
                      variants={linkContainerVariants}
                      className="overflow-hidden flex"
                    >
                      {link.title.split("").map((char, index) => (
                        <span key={index} className="overflow-hidden inline-block">
                          <motion.span
                            variants={letterVariants}
                            className={`inline-block text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-300 ${
                              link.active
                                ? "text-white"
                                : "text-white/40 group-hover:text-white"
                            }`}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        </span>
                      ))}
                    </motion.div>

                    <motion.span
                      variants={numberVariants}
                      className="text-xs text-white/40 font-mono"
                    >
                      {link.number}
                    </motion.span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}