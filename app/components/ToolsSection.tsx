"use client";

import React, { useRef, useState } from "react";
import { motion, Variants, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

interface ToolItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
}

function ToolItem({ icon, title, description, variants }: ToolItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center p-1"
    >
      {icon}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.1, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 0.8, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.1, y: 12, filter: "blur(8px)" }}
            transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0 sm:mb-0 md:mb-1 z-50 pointer-events-none"
          >
            <div className="relative bg-[#E5E5E7] text-[#2E2E2E] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 shadow-xl whitespace-nowrap">
              <p className="text-xs sm:text-sm md:text-base font-bold leading-tight">
                {title}
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm font-normal text-[#2E2E2E]/70 leading-tight">
                {description}
              </p>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#E5E5E7] rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const topRadius = useTransform(scrollYProgress, [0, 1], ["3rem", "0rem"]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const frameworkTools = [
    {
      icon: (
        <i className="bx bxl-html5 text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "HTML5",
      description: "Page structure",
    },
    {
      icon: (
        <i className="bx bxl-css3 text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "CSS3",
      description: "Styling and layout",
    },
    {
      icon: (
        <i className="bx bxl-javascript text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "JavaScript",
      description: "Interactivity",
    },
    {
      icon: (
        <i className="bx bxl-tailwind-css text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "Tailwind CSS",
      description: "Utility-first CSS",
    },
    {
      icon: (
        <i className="bx bxl-react text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "React",
      description: "UI library",
    },
    {
      icon: (
        <SiNextdotjs className="w-[3rem] h-[3rem] sm:w-[3.75rem] sm:h-[3.75rem] md:w-[4.5rem] md:h-[4.5rem] text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
      ),
      title: "Next.js",
      description: "React framework",
    },
  ];

  const devTools = [
    {
      icon: (
        <i className="bx bxl-visual-studio text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "VS Code",
      description: "Code editor",
    },
    {
      icon: (
        <i className="bx bxl-github text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "GitHub",
      description: "Version control",
    },
    {
      icon: (
        <i className="bx bxl-figma text-5xl sm:text-6xl md:text-7xl text-[#E5E5E7] opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></i>
      ),
      title: "Figma",
      description: "UI/UX design",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ borderTopLeftRadius: topRadius, borderTopRightRadius: topRadius }}
      className="relative z-20 w-full min-h-screen bg-[#2E2E2E] flex flex-col items-center justify-center py-12 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center"
      >
        <div className="overflow-hidden p-1">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 font-['Poppins'] text-[#E5E5E7]"
          >
            Tech Stack &amp; Tools
          </motion.h2>
        </div>

        <div className="overflow-hidden p-1 mb-10 sm:mb-14 md:mb-16">
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-md font-normal text-[#E5E5E7]/70"
          >
            The technologies and tools I use to build responsive, modern, and user-friendly web applications while continuously improving my development skills.
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12 max-w-sm sm:max-w-xl md:max-w-3xl mb-8 sm:mb-10 md:mb-12">
          {frameworkTools.map((tool, index) => (
            <ToolItem
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              variants={itemVariants}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 sm:gap-y-10 md:gap-x-12 md:gap-y-12 max-w-xs sm:max-w-sm md:max-w-md">
          {devTools.map((tool, index) => (
            <ToolItem
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              variants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}