"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

interface Tool {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const techStack: Tool[] = [
  { title: "HTML5", description: "Page structure", icon: <i className="bx bxl-html5" /> },
  { title: "CSS3", description: "Styling and layout", icon: <i className="bx bxl-css3" /> },
  { title: "JavaScript", description: "Interactivity", icon: <i className="bx bxl-javascript" /> },
  { title: "Tailwind CSS", description: "Utility-first CSS", icon: <i className="bx bxl-tailwind-css" /> },
  { title: "React", description: "UI library", icon: <i className="bx bxl-react" /> },
  { title: "Next.js", description: "React framework", icon: <SiNextdotjs /> },
];

const devTools: Tool[] = [
  { title: "VS Code", description: "Code editor", icon: <i className="bx bxl-visual-studio" /> },
  { title: "GitHub", description: "Version control", icon: <i className="bx bxl-github" /> },
  { title: "Figma", description: "UI/UX design", icon: <i className="bx bxl-figma" /> },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function ToolGroup({ label, tools }: { label: string; tools: Tool[] }) {
  return (
    <div>
      <h3 className="text-sm text-[#E5E5E7]/50">{label}</h3>

      <ul className="mt-4 grid grid-cols-1 border-b border-white/10 sm:grid-cols-3 sm:gap-x-8">
        {tools.map((tool) => (
          <motion.li
            key={tool.title}
            variants={itemVariants}
            className="group flex items-center gap-4 border-t border-white/10 py-4 sm:flex-col sm:items-start sm:gap-6 sm:py-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center text-4xl text-[#E5E5E7] opacity-60 transition-opacity duration-300 group-hover:opacity-100 sm:h-12 sm:w-12 sm:justify-start sm:text-5xl lg:h-14 lg:w-14 lg:text-6xl">
              {tool.icon}
            </span>

            <div className="min-w-0">
              <p className="text-base font-medium text-[#E5E5E7] sm:text-lg">
                {tool.title}
              </p>
              <p className="text-sm text-[#E5E5E7]/50">{tool.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const animatedTopRadius = useTransform(scrollYProgress, [0, 1], ["3rem", "0rem"]);
  const topRadius = isDesktop ? animatedTopRadius : "0rem";

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      style={{ borderTopLeftRadius: topRadius, borderTopRightRadius: topRadius }}
      className="relative z-20 w-full overflow-hidden bg-[#2E2E2E] px-5 py-16 sm:px-10 sm:py-20 md:flex md:min-h-screen md:items-center md:py-24 lg:px-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#E5E5E7] sm:text-5xl lg:text-6xl"
          >
            Tech Stack &amp; Tools
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-sm leading-relaxed text-[#E5E5E7]/60 sm:mt-6 sm:text-base"
          >
            The technologies and tools I use to build responsive, modern, and user-friendly web applications while continuously improving my development skills.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:col-span-7">
          <ToolGroup label="Tech stack" tools={techStack} />
          <ToolGroup label="Tools" tools={devTools} />
        </div>
      </motion.div>
    </motion.section>
  );
}