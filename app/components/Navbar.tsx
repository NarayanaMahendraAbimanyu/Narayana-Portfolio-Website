"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [contactInView, setContactInView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";
  const isPortfolio = pathname === "/portfolio";

  // Keep "Contact" highlighted while the contact section is on screen.
  useEffect(() => {
    if (!isHome) {
      setContactInView(false);
      return;
    }
    const el = document.getElementById("contact");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isHome]);

  // Lock scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHome) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      router.push("/#contact");
    }
  };

  const navLinks = [
    {
      title: "Home",
      href: "/",
      onClick: scrollToTop,
      active: isHome && !contactInView,
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      onClick: () => setIsOpen(false),
      active: isPortfolio,
    },
    {
      title: "Contact",
      href: "/#contact",
      onClick: scrollToContact,
      active: isHome && contactInView,
    },
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { y: reduceMotion ? 0 : 24, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.7, ease } },
  };

  return (
    <>
      <motion.header
        initial={{ y: reduceMotion ? 0 : -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="fixed top-4 sm:top-6 md:top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-6"
      >
        <nav
          aria-label="Main"
          className="w-full max-w-2xl flex items-center justify-between rounded-full bg-[#161616]/90 py-2 pl-5 pr-2 sm:pl-7 sm:pr-2.5 text-white shadow-xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-md"
        >
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </span>
            <span className="font-['Poppins'] text-lg sm:text-xl font-bold tracking-tight">
              Narayn.
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={link.onClick}
                  aria-current={link.active ? "page" : undefined}
                  className={`relative block rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-white ${
                    link.active ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
                      className="absolute inset-0 rounded-full bg-white/10"
                    />
                  )}
                  <span className="relative">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#161616] px-6 sm:px-10 pt-32 pb-10 text-white md:hidden"
          >
            <ul>
              {navLinks.map((link) => (
                <motion.li
                  key={link.title}
                  variants={itemVariants}
                  className="border-b border-white/10 first:border-t"
                >
                  <Link
                    href={link.href}
                    onClick={link.onClick}
                    aria-current={link.active ? "page" : undefined}
                    className={`block py-5 font-['Poppins'] text-4xl sm:text-5xl font-semibold tracking-tight transition-colors duration-300 ${
                      link.active ? "text-white" : "text-white/40 active:text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.a
              variants={itemVariants}
              href="mailto:narayanamahendraabimanyu@gmail.com"
              className="break-all text-sm text-white/55 transition-colors duration-300 hover:text-white"
            >
              narayanamahendraabimanyu@gmail.com
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}