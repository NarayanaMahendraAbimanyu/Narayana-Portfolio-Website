'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const projectsData = [
  { id: 1, title: 'Project 1' },
  { id: 2, title: 'Project 2' },
  { id: 3, title: 'Project 3' },
  { id: 4, title: 'Project 4' },
  { id: 5, title: 'Project 5' },
  { id: 6, title: 'Project 6' },
];

const certificatesData = [
  { id: 1, title: 'Certificate 1' },
  { id: 2, title: 'Certificate 2' },
  { id: 3, title: 'Certificate 3' },
  { id: 4, title: 'Certificate 4' },
  { id: 5, title: 'Certificate 5' },
  { id: 6, title: 'Certificate 6' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates'>('projects');

  return (
    <div className="min-h-screen bg-[#EAEAEA] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 flex-grow flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
              My Portofolio
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-normal text-gray-600 leading-relaxed">
              Explore my journey through projects and certifications, showcasing the practical skills and milestones I've achieved along the way.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <button
              onClick={() => setActiveTab('projects')}
              className={`relative overflow-hidden group w-32 sm:w-36 py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm border-2 border-[#2E2E2E] transition-colors duration-300 shadow-sm ${
                activeTab === 'projects'
                  ? 'bg-[#2E2E2E] text-white'
                  : 'bg-[#E5E5E7] text-[#2E2E2E]'
              }`}
            >
              {activeTab !== 'projects' && (
                <span className="absolute inset-0 bg-[#2E2E2E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${
                activeTab === 'projects' ? 'text-white' : 'group-hover:text-white'
              }`}>
                Projects
              </span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`relative overflow-hidden group w-32 sm:w-36 py-2.5 px-5 rounded-xl font-bold text-xs sm:text-sm border-2 border-[#2E2E2E] transition-colors duration-300 shadow-sm ${
                activeTab === 'certificates'
                  ? 'bg-[#2E2E2E] text-white'
                  : 'bg-[#E5E5E7] text-[#2E2E2E]'
              }`}
            >
              {activeTab !== 'certificates' && (
                <span className="absolute inset-0 bg-[#2E2E2E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${
                activeTab === 'certificates' ? 'text-white' : 'group-hover:text-white'
              }`}>
                Certificates
              </span>
            </button>
          </div>

          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full"
            >
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative bg-[#D9D9D9] h-52 sm:h-60 md:h-64 rounded-2xl p-6 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-black/80 flex items-center justify-center overflow-hidden transition-all duration-300">
                    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 relative z-10 text-black group-hover:text-white transform transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H8M17 7V16"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full"
            >
              {certificatesData.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  className="group relative bg-[#D9D9D9] h-44 sm:h-48 md:h-52 rounded-2xl p-5 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-black/80 flex items-center justify-center overflow-hidden transition-all duration-300">
                    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 relative z-10 text-black group-hover:text-white transform transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H8M17 7V16"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}