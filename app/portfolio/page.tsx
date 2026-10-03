'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoClose, IoExpandOutline, IoContractOutline } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs, SiTypescript, SiFramer } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import Navbar from '../components/Navbar';

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
    title: "Rebuild Website Event Organizer",
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
    title: "City of Malang - Tourism & Culture Website",
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
  {
    id: 5,
    title: "XPACT - UMKM & Student Platform",
    description: "Saya berperan sebagai Frontend Developer dalam kompetisi FICTPACT CUP dengan mengembangkan konsep platform yang menghubungkan UMKM dan pelajar melalui berbagai project. Platform ini memungkinkan UMKM menawarkan kebutuhan seperti desain poster atau pembuatan website statis yang dapat diambil oleh pelajar sebagai kesempatan untuk memperoleh pengalaman melalui project nyata. Saya mengimplementasikan desain UI/UX menjadi website menggunakan React JS dan Tailwind CSS.",
    image: "/project5.png",
    link: "https://fictpactcup-fsociety.vercel.app/",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className="text-2xl sm:text-3xl text-white" /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className="text-2xl sm:text-3xl text-white" /> },
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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const getHost = (item: PortfolioItem): string => {
  if (!item.link) return 'certificate';
  try {
    return new URL(item.link).host;
  } catch {
    return item.link;
  }
};

const getSubtext = (item: PortfolioItem): string =>
  item.techStack.length > 0
    ? item.techStack.map((tech) => tech.name).join(', ')
    : item.description;

function WindowDot({
  color,
  label,
  onClick,
  disabled = false,
  children,
}: {
  color: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="group/dot flex h-6 w-6 items-center justify-center disabled:cursor-default"
    >
      <span
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[10px] text-black/70 transition-opacity duration-200 ${
          disabled ? 'opacity-40' : ''
        }`}
        style={{ backgroundColor: color }}
      >
        <span className="opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover/dot:opacity-100">
          {children}
        </span>
      </span>
    </button>
  );
}

function BrowserFrame({ item }: { item: PortfolioItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#222222]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-xs text-white/50">
          {getHost(item)}
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-[#1b1b1b]">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [previewIndex, setPreviewIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentItems = activeTab === 'projects' ? projectsData : certificatesData;
  const previewItem = currentItems[previewIndex] ?? currentItems[0];

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'projects', label: 'Projects', count: projectsData.length },
    { id: 'certificates', label: 'Certificates', count: certificatesData.length },
  ];

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setPreviewIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsFullscreen(false);
  };

  useEffect(() => {
    if (!selectedItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
        setIsFullscreen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedItem]);

  return (
    <div className="flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#2E2E2E] text-[#E5E5E7]">
      <Navbar />

      <main className="w-full flex-grow pb-24 pt-20 sm:pb-32 sm:pt-24 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-16">
          <header className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              My Portfolio
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#E5E5E7]/60 sm:mt-6 sm:text-base">
              Explore my journey through projects and certifications, showcasing the practical skills and milestones I&apos;ve achieved along the way.
            </p>
          </header>

          <div className="mt-10 inline-flex rounded-full border border-white/10 bg-white/5 p-1 sm:mt-14">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 sm:px-7 sm:py-2.5 sm:text-base ${
                    isActive ? 'text-[#010102]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-tab-pill"
                      transition={{ duration: 0.45, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-[#E5E5E7]"
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {tab.label}
                    <span className="text-xs opacity-60">{tab.count}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-12 sm:mt-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
            <motion.ul
              key={activeTab}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="border-b border-white/10 lg:col-span-7"
            >
              {currentItems.map((item, index) => {
                const isActive = index === previewIndex;
                return (
                  <motion.li
                    key={`${activeTab}-${item.id}`}
                    variants={rowVariants}
                    className="border-t border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      onMouseEnter={() => setPreviewIndex(index)}
                      onFocus={() => setPreviewIndex(index)}
                      className={`group flex w-full items-center gap-4 py-5 text-left transition-opacity duration-300 sm:gap-6 sm:py-7 ${
                        isActive ? 'lg:opacity-100' : 'lg:opacity-40'
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-lg bg-[#222222] sm:w-40 lg:hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="text-lg font-medium leading-snug text-white sm:text-2xl lg:text-3xl">
                          {item.title}
                        </h2>
                        <p className="mt-1.5 line-clamp-1 text-xs text-white/50 sm:text-sm">
                          {getSubtext(item)}
                        </p>
                      </div>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 sm:h-12 sm:w-12 ${
                          isActive
                            ? 'lg:border-transparent lg:bg-[#E5E5E7] lg:text-[#010102]'
                            : ''
                        }`}
                      >
                        <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:text-xl" />
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>

            <aside className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${previewIndex}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <BrowserFrame item={previewItem} />
                    <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-white/50">
                      {previewItem.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="portfolio-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className={`fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center ${
              isFullscreen ? 'p-0' : 'p-0 sm:p-6 lg:p-10'
            }`}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedItem.title}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE }}
              className={`flex flex-col overflow-hidden border border-white/10 bg-[#292929] shadow-2xl ${
                isFullscreen
                  ? 'h-full w-full rounded-none'
                  : 'max-h-[92vh] w-full max-w-5xl rounded-t-3xl sm:rounded-2xl'
              }`}
            >
              <div className="flex shrink-0 items-center gap-3 border-b border-white/10 bg-[#222222] px-4 py-2.5 sm:px-5 sm:py-3">
                <div className="flex items-center gap-0.5">
                  <WindowDot color="#FF5F56" label="Close" onClick={handleCloseModal}>
                    <IoClose />
                  </WindowDot>
                  <WindowDot
                    color="#FFBD2E"
                    label="Exit fullscreen"
                    onClick={() => setIsFullscreen(false)}
                    disabled={!isFullscreen}
                  >
                    <IoContractOutline />
                  </WindowDot>
                  <WindowDot
                    color="#27C93F"
                    label="Enter fullscreen"
                    onClick={() => setIsFullscreen(true)}
                    disabled={isFullscreen}
                  >
                    <IoExpandOutline />
                  </WindowDot>
                </div>

                <div className="min-w-0 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-center text-xs text-white/50 sm:text-sm">
                  {getHost(selectedItem)}
                </div>

                <div className="hidden w-[76px] sm:block" />
              </div>

              <div className="overflow-y-auto">
                <div
                  className={`grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10 ${
                    isFullscreen ? 'mx-auto w-full max-w-7xl' : ''
                  }`}
                >
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#1b1b1b]">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 lg:col-span-5">
                    <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {selectedItem.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#E5E5E7]/75 sm:text-base">
                      {selectedItem.description}
                    </p>

                    {selectedItem.techStack.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <span className="text-sm text-white/50">Built with</span>
                        <ul className="flex flex-wrap gap-2">
                          {selectedItem.techStack.map((tech) => (
                            <li
                              key={tech.name}
                              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-sm text-white/90 [&_svg]:!text-base"
                            >
                              {tech.icon}
                              {tech.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedItem.link && (
                      <a
                        href={selectedItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E5E5E7] px-5 py-2.5 text-sm font-semibold text-[#010102] transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
                      >
                        <span>Visit Website</span>
                        <HiArrowUpRight className="text-base sm:text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}