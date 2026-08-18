"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, useScroll, Variants } from "framer-motion";
import { Mail } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const textY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const cardScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const fullText = "Front End Developer & Web Designer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section ref={sectionRef} className="h-auto min-h-screen w-full flex items-center justify-center px-5 pt-28 pb-32 sm:px-6 sm:pt-32 sm:pb-16 md:px-16 md:py-12 lg:px-24 bg-[#E5E5E7] overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center">
        <motion.div
          style={{ y: textY }}
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden py-0.5">
            <motion.p
              variants={wordVariants}
              className="text-sm md:text-base font-normal text-[#010102]/70"
            >
              East Java, Indonesia
            </motion.p>
          </div>

          <div className="flex flex-col space-y-1 mb-3">
            <div className="overflow-hidden py-0.5 flex items-center gap-2 sm:gap-2.5 flex-wrap">
              <motion.h1
                variants={wordVariants}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#010102]"
              >
                Hi, I'm
              </motion.h1>
              <motion.span
                variants={wordVariants}
                className="inline-block px-2.5 sm:px-3 py-0.5 font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight bg-[#010102] text-[#E5E5E7] rounded-sm"
              >
                Narayana
              </motion.span>
            </div>

            <div className="overflow-hidden py-0.5">
              <motion.h1
                variants={wordVariants}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#010102]"
              >
                Mahendra.
              </motion.h1>
            </div>
          </div>

          <div className="overflow-hidden py-0.5 mb-3">
            <motion.div variants={wordVariants} className="text-base sm:text-lg md:text-3xl font-bold text-[#010102] flex items-center flex-wrap">
              <span className="font-normal text-[#010102]/70 mr-2">as</span>
              <span>{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block w-2.5 h-6 md:h-7 bg-[#010102] ml-1.5 vertical-middle"
              />
            </motion.div>
          </div>

          <div className="overflow-hidden py-1 mb-3">
            <motion.div variants={wordVariants} className="flex items-center gap-3">
              <a
                href="mailto:narayanamahendraabimanyu@gmail.com"
                aria-label="Email"
                className="p-3 sm:p-3.5 rounded-2xl bg-transparent border border-[#010102] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] transition-all duration-500 ease-out shadow-sm hover:scale-105"
              >
                <Mail className="w-6 h-6 transition-colors duration-500" />
              </a>

              <a
                href="https://github.com/NarayanaMahendraAbimanyu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 sm:p-3.5 rounded-2xl bg-transparent border border-[#010102] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] transition-all duration-500 ease-out shadow-sm hover:scale-105 flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 fill-current transition-colors duration-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/abcdlmnryna_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 sm:p-3.5 rounded-2xl bg-transparent border border-[#010102] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] transition-all duration-500 ease-out shadow-sm hover:scale-105 flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 fill-current transition-colors duration-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </motion.div>
          </div>

          <div className="overflow-hidden py-1">
            <motion.div variants={wordVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/resume-narayanamahendra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-sm md:text-base transition-transform duration-200 active:scale-95 shadow-md inline-block bg-[#2A2A2A] text-white hover:bg-black"
              >
                RESUME
              </a>

              <motion.a
                href="/portfolio"
                className="relative overflow-hidden px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-sm md:text-base border-2 border-[#2A2A2A] shadow-sm flex items-center justify-center group text-[#010102] bg-transparent"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="absolute inset-0 z-0 bg-[#2A2A2A]"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                />
                <motion.span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Explore My Projects
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: cardY, scale: cardScale }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center perspective-1000 mt-8 sm:mt-10 lg:mt-0"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[360px] aspect-[4/5] p-3.5 sm:p-4 cursor-pointer"
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              style={{ overflow: "visible" }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="24"
                ry="24"
                fill="none"
                stroke="#010102"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                className="animate-[dash_20s_linear_infinite]"
              />
            </svg>

            <style jsx>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -1000;
                }
              }
            `}</style>

            <div 
              style={{ transform: "translateZ(20px)" }}
              className="relative w-full h-full rounded-2xl overflow-hidden bg-[#222222] shadow-2xl"
            >
              <Image
                src="/fotonarayana-hero.png"
                alt="Foto Narayana Mahendra Abimanyu"
                fill
                priority
                className="object-cover object-center transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}