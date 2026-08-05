"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"EN" | "ID">("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "ID" : "EN"));
  };

  const isHome = pathname === "/";
  const isPortfolio = pathname === "/portfolio";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 left-0 right-0 z-50 w-full px-3 sm:px-6 md:px-16 lg:px-24 flex justify-center"
    >
      <nav className="w-full max-w-6xl bg-[#2A2A2A] text-white px-3 sm:px-6 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-between shadow-xl border border-white/10 backdrop-blur-md">
        <Link
          href="/"
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
            className={`transition-all duration-300 hover:text-white whitespace-nowrap ${
              isHome ? "font-bold text-white" : "font-normal text-white/50"
            }`}
          >
            HOME
          </Link>

          <Link
            href="/portfolio"
            className={`transition-all duration-300 hover:text-white whitespace-nowrap ${
              isPortfolio ? "font-bold text-white" : "font-normal text-white/50"
            }`}
          >
            PORTFOLIO
          </Link>

          <span className="hidden sm:inline text-white/40 font-light select-none">
            |
          </span>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-2 bg-[#E5E5E7] text-[#010102] px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-md sm:rounded-lg font-medium text-[11px] sm:text-sm transition-all duration-300 hover:bg-white active:scale-95 shadow-sm"
          >
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{lang}</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}