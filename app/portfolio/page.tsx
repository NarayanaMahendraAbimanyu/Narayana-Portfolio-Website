'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoClose, IoExpandOutline, IoContractOutline } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiTypescript, SiFramer } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

type TabType = 'projects' | 'certificates';

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
  link?: string;
  techStack: TechStackItem[];
}

const projectsData: PortfolioItem[] = [
  {
    id: 1,
    title: "Rebuild Website Event Organizer (Pra PKL Project)",
    description: "Proyek ini merupakan bagian dari program Pra PKL yang diselenggarakan oleh sekolah. Bersama tim lintas peminatan, saya berkolaborasi dengan sebuah industri untuk membangun ulang website Event Organizer berdasarkan desain yang telah dibuat oleh tim. Dalam proyek ini, saya bertanggung jawab mengubah desain menjadi website yang responsif dan fungsional menggunakan React dan Tailwind CSS.",
    image: "/project1.png",
    link: "https://new.ikutaja.id/",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 2,
    title: "Bouquet Business Landing Page",
    description: "Saya mengembangkan website landing page untuk bisnis bouquet milik orang tua saya, dimulai dari proses perancangan antarmuka menggunakan Figma hingga implementasi menjadi website yang dapat digunakan. Proyek ini bertujuan untuk meningkatkan kehadiran bisnis secara online dengan tampilan yang modern, responsif, dan mudah digunakan oleh pelanggan.",
    image: "/project2.png",
    link: "https://annie-mariea-bouquet.vercel.app/",
    techStack: [
      { name: "Next.js", subtext: "React Framework", icon: <SiNextdotjs className="text-2xl sm:text-3xl text-white" /> },
      { name: "TypeScript", subtext: "Typed JavaScript", icon: <SiTypescript className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
      { name: "Figma", subtext: "Design Tool", icon: <FaFigma className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 3,
    title: "Creative Web Competition – BYTESFEST 2026",
    description: "Saya mengikuti Creative Web Competition yang diselenggarakan oleh BYTESFEST 2026 bersama tim. Dalam kompetisi ini, kami mengembangkan website informatif yang membahas Kota Malang, Jawa Timur, mulai dari pengenalan kota, budaya, hingga makanan khasnya. Saya berperan sebagai Web Designer sekaligus Front-End Developer dengan fokus pada perancangan antarmuka dan implementasi tampilan website menggunakan React dan Tailwind CSS. Meskipun belum berhasil melaju ke babak final, pengalaman ini memberikan banyak pembelajaran mengenai kerja sama tim dan pengembangan website untuk kebutuhan kompetisi.",
    image: "/project3.png",
    link: "https://ngalam-creativeweb.vercel.app/",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
  {
    id: 4,
    title: "Personal Website Portfolio",
    description: "Saya merancang dan mengembangkan website portfolio pribadi untuk menampilkan profil, pengalaman, serta proyek-proyek yang pernah saya kerjakan. Proses pengembangan dimulai dengan membuat desain di Figma berdasarkan berbagai referensi, kemudian diimplementasikan menjadi website menggunakan Next.js, TypeScript, dan Tailwind CSS. Untuk meningkatkan pengalaman pengguna, saya juga memanfaatkan Framer Motion agar setiap animasi terlihat lebih halus dan interaktif.",
    image: "/project4.png",
    link: "https://portfolio-nrynamhndra.vercel.app/",
    techStack: [
      { name: "Next.js", subtext: "React Framework", icon: <SiNextdotjs className="text-2xl sm:text-3xl text-white" /> },
      { name: "TypeScript", subtext: "Typed JavaScript", icon: <SiTypescript className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
      { name: "Framer Motion", subtext: "Animation Library", icon: <SiFramer className="text-2xl sm:text-3xl text-white" /> },
      { name: "Figma", subtext: "Design Tool", icon: <FaFigma className="text-2xl sm:text-3xl text-white" /> },
    ],
  },
];

const certificatesData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Creative Web Competition – BYTESFEST 2026',
    description: 'Mengikuti Creative Web Competition yang diselenggarakan oleh BYTESFEST 2026 pada periode Juni hingga Juli 2026. Bersama tim, saya mengembangkan sebuah website bertema Kota Malang dengan fokus pada pengembangan front-end dan desain antarmuka. Meskipun belum berhasil melaju ke babak final, kompetisi ini memberikan pengalaman berharga dalam kolaborasi tim dan pengembangan website untuk ajang kompetitif.',
    image: '/cert1.png',
    techStack: [],
  },
  {
    id: 2,
    title: 'SEEFEST Competition – Universitas Telkom Surabaya',
    description: 'Berpartisipasi dalam kompetisi SEEFEST yang diselenggarakan oleh Universitas Telkom Surabaya pada 25 April hingga 18 Mei 2026. Melalui kompetisi ini, saya memperoleh pengalaman dalam bekerja sama dengan tim, mengembangkan solusi berbasis teknologi, serta meningkatkan kemampuan berpikir kreatif dan pemecahan masalah.',
    image: '/cert2.png',
    techStack: [],
  },
  {
    id: 3,
    title: 'FICTPACT CUP – Universitas Katolik Soegijapranata',
    description: 'Mengikuti kompetisi FICTPACT CUP yang diselenggarakan oleh Universitas Katolik Soegijapranata pada periode 1 Februari hingga 8 April 2026. Bersama tim, saya berpartisipasi dalam proses pengembangan proyek dan memperoleh pengalaman berharga dalam kolaborasi, manajemen waktu, serta penerapan keterampilan di bidang pengembangan web.',
    image: '/cert3.png',
    techStack: [],
  },
  {
    id: 4,
    title: 'Laravel Web Programmer Training – Telkom DigiUp 2025',
    description: 'Mengikuti pelatihan Laravel Web Programmer yang diselenggarakan oleh Telkom DigiUp pada Desember 2025. Pelatihan ini membahas dasar-dasar pengembangan aplikasi web menggunakan framework Laravel, mulai dari konsep MVC, routing, database, hingga implementasi fitur-fitur dasar dalam membangun aplikasi web.',
    image: '/cert4.png',
    techStack: [],
  },
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
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHoverStack, setActiveHoverStack] = useState<string | null>(null);

  const currentItems = activeTab === 'projects' ? projectsData : certificatesData;

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsFullscreen(false);
  };

  return (
    <div className="min-h-screen bg-[#2E2E2E] text-[#E5E5E7] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 flex-grow flex flex-col items-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E5E5E7] mb-3 tracking-tight">
              My Portfolio
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-normal text-[#E5E5E7]/70 leading-relaxed">
              Explore my journey through projects and certifications, showcasing the practical skills and milestones I&apos;ve achieved along the way.
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14">
            <button
              onClick={() => setActiveTab('projects')}
              className={`rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-[#010102] text-[#E5E5E7] outline-2 outline-offset-2 outline-[#010102]'
                  : 'bg-[#E5E5E7] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] hover:outline-2 hover:outline-offset-2 hover:outline-[#010102]'
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`rounded-full px-6 sm:px-8 py-2 sm:py-2.5 font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-[#010102] text-[#E5E5E7] outline-2 outline-offset-2 outline-[#010102]'
                  : 'bg-[#E5E5E7] text-[#010102] hover:bg-[#010102] hover:text-[#E5E5E7] hover:outline-2 hover:outline-offset-2 hover:outline-[#010102]'
              }`}
            >
              Certificates
            </button>
          </div>

          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 w-full"
          >
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onClick={() => setSelectedItem(item)}
                className="group/card relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-3 sm:p-4 md:p-5">
                  <p className="flex-1 min-w-0 truncate text-left text-sm sm:text-base md:text-lg font-semibold text-white">
                    {item.title}
                  </p>

                  <button className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2E2E2E] flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
                    <HiArrowUpRight className="text-[#E5E5E7] text-lg sm:text-xl" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

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
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
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
                  ? 'fixed inset-0 rounded-none p-6 sm:p-12 md:p-16 flex flex-col justify-center'
                  : 'relative w-full max-w-5xl rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl max-h-[90vh]'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start">
                <div className="md:col-span-7 flex flex-col gap-6">
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative shadow-inner bg-[#1a1a1a]">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
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
                                  transition={{ duration: 0.2, ease: 'easeOut' }}
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

                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#E5E5E7] text-[#010102] font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 transition-transform duration-300 hover:scale-105"
                    >
                      <span>Visit Website</span>
                      <HiArrowUpRight className="text-base sm:text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
}