"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

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
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection("contact");

    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-10 left-0 right-0 z-50 w-full px-3 sm:px-6 md:px-16 lg:px-24 flex justify-center"
    >
      <nav className="w-full max-w-3xl bg-[#2A2A2A] text-white px-3 sm:px-6 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-between shadow-xl border border-white/10 backdrop-blur-md">
        <Link
          href="/"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 sm:gap-3 cursor-pointer group focus:outline-none"
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] inline-block transition-transform duration-300 group-hover:scale-110" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] inline-block transition-transform duration-300 group-hover:scale-110" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] inline-block transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-bold text-sm sm:text-lg md:text-xl tracking-wider text-white transition-opacity duration-300 group-hover:opacity-80">
            Narayn.
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 text-[11px] sm:text-sm md:text-base">
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
            href="#contact"
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
      </nav>
    </motion.header>
  );
}