"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

type TabType = "projects" | "certificates";

interface PortfolioItem {
  id: number;
  title: string;
}

const projectItems: PortfolioItem[] = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" },
  { id: 3, title: "Project Three" },
  { id: 4, title: "Project Four" },
];

const certificateItems: PortfolioItem[] = [
  { id: 1, title: "Certificate One" },
  { id: 2, title: "Certificate Two" },
  { id: 3, title: "Certificate Three" },
  { id: 4, title: "Certificate Four" },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

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

  return (
    <section className="relative w-full min-h-screen bg-[#2E2E2E] flex flex-col items-center justify-center py-1 sm:py-20 md:py-2 px-4 sm:px-6 md:px-10">
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
          className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14"
        >
          <button
            onClick={() => setActiveTab("projects")}
            className={`group relative overflow-hidden rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-colors duration-500 ${
              activeTab === "projects" ? "bg-[#010102] text-[#E5E5E7]" : "bg-[#E5E5E7] text-[#010102]"
            }`}
          >
            {activeTab !== "projects" && (
              <span className="absolute inset-0 bg-[#010102] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            )}
            <span
              className={`relative z-10 transition-colors duration-500 ${
                activeTab !== "projects" ? "group-hover:text-[#E5E5E7]" : ""
              }`}
            >
              Projects
            </span>
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`group relative overflow-hidden rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-colors duration-500 ${
              activeTab === "certificates" ? "bg-[#010102] text-[#E5E5E7]" : "bg-[#E5E5E7] text-[#010102]"
            }`}
          >
            {activeTab !== "certificates" && (
              <span className="absolute inset-0 bg-[#010102] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            )}
            <span
              className={`relative z-10 transition-colors duration-500 ${
                activeTab !== "certificates" ? "group-hover:text-[#E5E5E7]" : ""
              }`}
            >
              Certificates
            </span>
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 w-full mb-10 sm:mb-12 md:mb-14"
        >
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group/card relative w-full aspect-[16/10] rounded-2xl bg-[#D9D9D9] overflow-hidden"
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
    </section>
  );
}