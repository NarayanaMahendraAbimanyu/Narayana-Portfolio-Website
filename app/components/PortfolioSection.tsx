"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoClose, IoExpandOutline, IoContractOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

type TabType = "projects" | "certificates";

interface TechStackItem {
  name: string;
  subtext: string;
  icon: React.ReactNode;
}

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: TechStackItem[];
}

const projectItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Name Project 1",
    description: "Description of project 1 - High quality web development solution built for modern experience.",
    image: "/project1.jpg",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
      { name: "Next.js", subtext: "React Framework", icon: <SiNextdotjs className="text-2xl sm:text-3xl text-white" /> },
      { name: "TypeScript", subtext: "Typed JavaScript", icon: <SiTypescript className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 2,
    title: "Name Project 2",
    description: "Description of project 2 - Interactive web application with seamless UI/UX design.",
    image: "/project2.jpg",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Styling Framework", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 3,
    title: "Name Project 3",
    description: "Description of project 3 - Scalable frontend platform built with clean architecture.",
    image: "/project3.jpg",
    techStack: [
      { name: "Next.js", subtext: "Fullstack Framework", icon: <SiNextdotjs className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 4,
    title: "Name Project 4",
    description: "Description of project 4 - Custom web experience designed with performance focus.",
    image: "/project4.jpg",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "TypeScript", subtext: "Typed Language", icon: <SiTypescript className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
];

const certificateItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Certificate One",
    description: "Official Certification of Frontend Web Development mastery.",
    image: "/cert1.jpg",
    techStack: [],
  },
  {
    id: 2,
    title: "Certificate Two",
    description: "Professional Web Design & Interactive Development Certificate.",
    image: "/cert2.jpg",
    techStack: [],
  },
  {
    id: 3,
    title: "Certificate Three",
    description: "React JS & Modern Frontend Stack Certification.",
    image: "/cert3.jpg",
    techStack: [],
  },
  {
    id: 4,
    title: "Certificate Four",
    description: "Full Stack Development Foundations Certification.",
    image: "/cert4.jpg",
    techStack: [],
  },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHoverStack, setActiveHoverStack] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const currentItems = activeTab === "projects" ? projectItems : certificateItems;

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsFullscreen(false);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#2E2E2E] flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl w-full flex flex-col items-center text-center"
      >
        <div className="overflow-hidden p-1">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] text-[#E5E5E7]"
          >
            My Portfolio
          </motion.h2>
        </div>

        <div className="overflow-hidden p-1 mb-8 sm:mb-10 md:mb-12">
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-normal text-[#E5E5E7]/70 max-w-md sm:max-w-xl"
          >
            Explore my journey through projects and certifications, showcasing the practical skills and milestones I&apos;ve achieved along the way.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-14"
        >
          <button
            onClick={() => setActiveTab("projects")}
            className={`rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-[#010102] text-[#E5E5E7] outline-2 outline-offset-2 outline-[#010102]"
                : "bg-[#E5E5E7] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] hover:outline-2 hover:outline-offset-2 hover:outline-[#010102]"
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-[#010102] text-[#E5E5E7] outline-2 outline-offset-2 outline-[#010102]"
                : "bg-[#E5E5E7] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] hover:outline-2 hover:outline-offset-2 hover:outline-[#010102]"
            }`}
          >
            Certificates
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 w-full mb-10 sm:mb-12 md:mb-14"
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group/card relative w-full aspect-[16/10] rounded-2xl bg-[#D9D9D9] overflow-hidden cursor-pointer"
            >
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#010102]">{item.title}</p>
              </div>

              <button className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#010102] flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
                <HiArrowUpRight className="text-[#E5E5E7] text-lg sm:text-xl" />
              </button>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href="/portfolio"
            className="group/see relative inline-flex items-center gap-0.5 rounded-full bg-[#E5E5E7] text-[#010102] font-semibold text-sm sm:text-base px-6 sm:px-7 py-2.5 sm:py-3"
          >
            <span>See More</span>
            <span className="flex items-center">
              <span>&gt;</span>
              <span className="w-0 opacity-0 -translate-x-2 group-hover/see:w-[0.6rem] group-hover/see:opacity-100 group-hover/see:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 overflow-hidden">
                &gt;
              </span>
              <span className="w-0 opacity-0 -translate-x-2 group-hover/see:w-[0.6rem] group-hover/see:opacity-100 group-hover/see:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 overflow-hidden">
                &gt;
              </span>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10"
          >
            <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <IoContractOutline className="text-xl sm:text-2xl" />
                ) : (
                  <IoExpandOutline className="text-xl sm:text-2xl" />
                )}
              </button>
              <button
                onClick={handleCloseModal}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                title="Close"
              >
                <IoClose className="text-xl sm:text-2xl" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#2E2E2E] text-[#E5E5E7] transition-all duration-500 overflow-y-auto ${
                isFullscreen
                  ? "fixed inset-0 rounded-none p-6 sm:p-12 md:p-16 flex flex-col justify-center"
                  : "relative w-full max-w-5xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl max-h-[90vh]"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
                <div className="md:col-span-7 flex flex-col gap-6">
                  <div className="w-full aspect-[16/10] rounded-2xl bg-[#D9D9D9] overflow-hidden relative shadow-inner">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {selectedItem.techStack && selectedItem.techStack.length > 0 && (
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                        {selectedItem.techStack.map((tech, index) => (
                          <div
                            key={index}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setActiveHoverStack(tech.name)}
                            onMouseLeave={() => setActiveHoverStack(null)}
                          >
                            <AnimatePresence>
                              {activeHoverStack === tech.name && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.85 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 8, scale: 0.85 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className="absolute bottom-full mb-3 z-30 flex flex-col items-center pointer-events-none"
                                >
                                  <div className="bg-[#E5E5E7] text-[#010102] px-3.5 py-1.5 rounded-xl shadow-xl flex flex-col items-center min-w-[110px] text-center">
                                    <span className="text-xs font-bold leading-tight">
                                      {tech.name}
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-600 leading-tight">
                                      {tech.subtext}
                                    </span>
                                  </div>
                                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#E5E5E7] -mt-[1px]" />
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                              {tech.icon}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {selectedItem.title}
                  </h2>
                  <div className="flex flex-col gap-1">
                    <span className="text-base sm:text-lg font-bold text-white">
                      Description
                    </span>
                    <p className="text-sm sm:text-base font-normal text-[#E5E5E7]/80 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}