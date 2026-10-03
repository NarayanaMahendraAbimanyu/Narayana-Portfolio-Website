"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoClose, IoExpandOutline, IoContractOutline } from "react-icons/io5";
import { FaReact, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiFramer } from "react-icons/si";

type TabType = "projects" | "certificates";

interface TechStackItem {
  name: string;
  subtext: string;
  icon: React.ReactNode;
}

interface PortfolioItem {
  id: number;
  title: string;
  meta: string;
  description: string;
  image: string;
  link?: string;
  techStack: TechStackItem[];
}

const icon = "text-2xl sm:text-3xl text-white";

const projectItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Rebuild Website Event Organizer (Pra PKL Project)",
    meta: "Pra PKL",
    description:
      "Proyek ini merupakan bagian dari program Pra PKL yang diselenggarakan oleh sekolah. Bersama tim lintas peminatan, saya berkolaborasi dengan sebuah industri untuk membangun ulang website Event Organizer berdasarkan desain yang telah dibuat oleh tim. Dalam proyek ini, saya bertanggung jawab mengubah desain menjadi website yang responsif dan fungsional menggunakan React dan Tailwind CSS.",
    image: "/project1.png",
    link: "https://new.ikutaja.id/",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className={icon} /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className={icon} /> },
    ],
  },
  {
    id: 2,
    title: "Bouquet Business Landing Page",
    meta: "Proyek pribadi",
    description:
      "Saya mengembangkan website landing page untuk bisnis bouquet milik orang tua saya, dimulai dari proses perancangan antarmuka menggunakan Figma hingga implementasi menjadi website yang dapat digunakan. Proyek ini bertujuan untuk meningkatkan kehadiran bisnis secara online dengan tampilan yang modern, responsif, dan mudah digunakan oleh pelanggan.",
    image: "/project2.png",
    link: "https://annie-mariea-bouquet.vercel.app/",
    techStack: [
      { name: "Next.js", subtext: "React Framework", icon: <SiNextdotjs className={icon} /> },
      { name: "TypeScript", subtext: "Typed JavaScript", icon: <SiTypescript className={icon} /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className={icon} /> },
      { name: "Figma", subtext: "Design Tool", icon: <FaFigma className={icon} /> },
    ],
  },
  {
    id: 3,
    title: "Creative Web Competition – BYTESFEST 2026",
    meta: "Kompetisi",
    description:
      "Saya mengikuti Creative Web Competition yang diselenggarakan oleh BYTESFEST 2026 bersama tim. Dalam kompetisi ini, kami mengembangkan website informatif yang membahas Kota Malang, Jawa Timur, mulai dari pengenalan kota, budaya, hingga makanan khasnya. Saya berperan sebagai Web Designer sekaligus Front-End Developer dengan fokus pada perancangan antarmuka dan implementasi tampilan website menggunakan React dan Tailwind CSS. Meskipun belum berhasil melaju ke babak final, pengalaman ini memberikan banyak pembelajaran mengenai kerja sama tim dan pengembangan website untuk kebutuhan kompetisi.",
    image: "/project3.png",
    link: "https://ngalam-creativeweb.vercel.app/",
    techStack: [
      { name: "React JS", subtext: "Frontend Library", icon: <FaReact className={icon} /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className={icon} /> },
    ],
  },
  {
    id: 4,
    title: "Personal Website Portfolio",
    meta: "Proyek pribadi",
    description:
      "Saya merancang dan mengembangkan website portfolio pribadi untuk menampilkan profil, pengalaman, serta proyek-proyek yang pernah saya kerjakan. Proses pengembangan dimulai dengan membuat desain di Figma berdasarkan berbagai referensi, kemudian diimplementasikan menjadi website menggunakan Next.js, TypeScript, dan Tailwind CSS. Untuk meningkatkan pengalaman pengguna, saya juga memanfaatkan Framer Motion agar setiap animasi terlihat lebih halus dan interaktif.",
    image: "/project4.png",
    link: "https://portfolio-nrynamhndra.vercel.app/",
    techStack: [
      { name: "Next.js", subtext: "React Framework", icon: <SiNextdotjs className={icon} /> },
      { name: "TypeScript", subtext: "Typed JavaScript", icon: <SiTypescript className={icon} /> },
      { name: "Tailwind CSS", subtext: "Utility-First CSS", icon: <RiTailwindCssFill className={icon} /> },
      { name: "Framer Motion", subtext: "Animation Library", icon: <SiFramer className={icon} /> },
      { name: "Figma", subtext: "Design Tool", icon: <FaFigma className={icon} /> },
    ],
  },
];

const certificateItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Creative Web Competition – BYTESFEST 2026",
    meta: "Juni – Juli 2026",
    description:
      "Mengikuti Creative Web Competition yang diselenggarakan oleh BYTESFEST 2026 pada periode Juni hingga Juli 2026. Bersama tim, saya mengembangkan sebuah website bertema Kota Malang dengan fokus pada pengembangan front-end dan desain antarmuka. Meskipun belum berhasil melaju ke babak final, kompetisi ini memberikan pengalaman berharga dalam kolaborasi tim dan pengembangan website untuk ajang kompetitif.",
    image: "/cert1.png",
    techStack: [],
  },
  {
    id: 2,
    title: "SEEFEST Competition – Universitas Telkom Surabaya",
    meta: "25 Apr – 18 Mei 2026",
    description:
      "Berpartisipasi dalam kompetisi SEEFEST yang diselenggarakan oleh Universitas Telkom Surabaya pada 25 April hingga 18 Mei 2026. Melalui kompetisi ini, saya memperoleh pengalaman dalam bekerja sama dengan tim, mengembangkan solusi berbasis teknologi, serta meningkatkan kemampuan berpikir kreatif dan pemecahan masalah.",
    image: "/cert2.png",
    techStack: [],
  },
  {
    id: 3,
    title: "FICTPACT CUP – Universitas Katolik Soegijapranata",
    meta: "1 Feb – 8 Apr 2026",
    description:
      "Mengikuti kompetisi FICTPACT CUP yang diselenggarakan oleh Universitas Katolik Soegijapranata pada periode 1 Februari hingga 8 April 2026. Bersama tim, saya berpartisipasi dalam proses pengembangan proyek dan memperoleh pengalaman berharga dalam kolaborasi, manajemen waktu, serta penerapan keterampilan di bidang pengembangan web.",
    image: "/cert3.png",
    techStack: [],
  },
  {
    id: 4,
    title: "Laravel Web Programmer Training – Telkom DigiUp 2025",
    meta: "Desember 2025",
    description:
      "Mengikuti pelatihan Laravel Web Programmer yang diselenggarakan oleh Telkom DigiUp pada Desember 2025. Pelatihan ini membahas dasar-dasar pengembangan aplikasi web menggunakan framework Laravel, mulai dari konsep MVC, routing, database, hingga implementasi fitur-fitur dasar dalam membangun aplikasi web.",
    image: "/cert4.png",
    techStack: [],
  },
];

const tabs: { key: TabType; label: string }[] = [
  { key: "projects", label: "Projects" },
  { key: "certificates", label: "Certificates" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function PortfolioSection() {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [activeId, setActiveId] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentItems = activeTab === "projects" ? projectItems : certificateItems;
  const active = currentItems.find((i) => i.id === activeId) ?? currentItems[0];

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const switchTab = (tab: TabType) => {
    setActiveTab(tab);
    setActiveId(1);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsFullscreen(false);
  };

  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedItem]);

  return (
    <section className="relative w-full bg-[#2E2E2E] text-[#E5E5E7] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 md:items-end">
          <h2 className="md:col-span-7 font-['Poppins'] font-semibold tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-white">
            My Portfolio
          </h2>
          <p className="md:col-span-5 max-w-md text-sm sm:text-base leading-relaxed text-[#E5E5E7]/60">
            Explore my journey through projects and certifications, showcasing the
            practical skills and milestones I&apos;ve achieved along the way.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          className="mt-12 sm:mt-16 flex items-center gap-8 border-b border-white/10"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => switchTab(tab.key)}
                className={`relative pb-4 text-base sm:text-lg font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:text-white ${
                  isActive ? "text-white" : "text-[#E5E5E7]/45 hover:text-[#E5E5E7]/80"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs sm:text-sm font-normal text-[#E5E5E7]/40">
                  {(tab.key === "projects" ? projectItems : certificateItems).length}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="portfolio-tab-line"
                    transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-white"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Index + preview */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <motion.ul
            key={activeTab}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="md:col-span-7"
          >
            {currentItems.map((item) => {
              const isActive = active.id === item.id;
              const tags = item.techStack.map((t) => t.name).join(", ");
              return (
                <motion.li
                  key={item.id}
                  variants={rowVariants}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    onClick={() => setSelectedItem(item)}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    className={`group w-full flex items-center gap-4 sm:gap-6 py-6 sm:py-7 text-left transition-opacity duration-500 focus-visible:outline-none ${
                      isActive ? "opacity-100" : "md:opacity-40"
                    }`}
                  >
                    {/* thumbnail: mobile only (desktop uses the preview panel) */}
                    <span className="md:hidden shrink-0 w-24 sm:w-32 aspect-[16/10] rounded-lg overflow-hidden bg-[#1f1f1f]">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </span>

                    <span className="flex-1 min-w-0">
                      <span
                        className={`block text-lg sm:text-xl lg:text-2xl font-medium leading-snug tracking-tight text-white transition-transform duration-500 md:group-hover:translate-x-1.5 ${
                          isActive ? "md:translate-x-1.5" : ""
                        }`}
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      >
                        {item.title}
                      </span>
                      <span className="mt-1.5 block text-sm text-[#E5E5E7]/55">
                        {item.meta}
                        {tags ? ` — ${tags}` : ""}
                      </span>
                    </span>

                    <HiArrowUpRight
                      className={`hidden sm:block shrink-0 text-xl text-white transition-all duration-500 ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Desktop preview */}
          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-28 pt-8">
              <button
                onClick={() => setSelectedItem(active)}
                aria-label={`Open ${active.title}`}
                className="relative block w-full aspect-[4/5] lg:aspect-[16/12] rounded-lg overflow-hidden bg-[#1f1f1f] cursor-pointer  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <AnimatePresence>
                  <motion.img
                    key={`${activeTab}-${active.id}`}
                    src={active.image}
                    alt={active.title}
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Footer link */}
        <div className="mt-12 sm:mt-16">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-base sm:text-lg font-medium text-white"
          >
            <span className="border-b border-white/40 pb-0.5 transition-colors duration-300 group-hover:border-white">
              See all work
            </span>
            <HiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Detail dialog */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm ${
              isFullscreen ? "p-0" : "p-4 sm:p-6 md:p-10"
            }`}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className={`relative w-full overflow-y-auto bg-[#2E2E2E] text-[#E5E5E7] ${
                isFullscreen
                  ? "h-full rounded-none p-6 sm:p-10 md:p-16"
                  : "max-w-5xl max-h-[90vh] rounded-lg p-5 sm:p-8 md:p-10"
              }`}
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen((v) => !v)}
                  aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                  className="hidden sm:grid place-items-center w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur transition-colors duration-300 hover:bg-black/70"
                >
                  {isFullscreen ? (
                    <IoContractOutline className="text-xl" />
                  ) : (
                    <IoExpandOutline className="text-xl" />
                  )}
                </button>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="grid place-items-center w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur transition-colors duration-300 hover:bg-black/70"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Left: image + tech */}
                <div className="md:col-span-7 flex flex-col gap-8">
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#1f1f1f]">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>

                  {selectedItem.techStack.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white">Built with</h3>
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        {selectedItem.techStack.map((tech) => (
                          <li
                            key={tech.name}
                            className="flex items-center gap-4 py-3 border-t border-white/10"
                          >
                            <span className="shrink-0 w-9 grid place-items-center">
                              {tech.icon}
                            </span>
                            <span className="leading-tight">
                              <span className="block text-sm font-semibold text-white">
                                {tech.name}
                              </span>
                              <span className="block text-xs text-[#E5E5E7]/55">
                                {tech.subtext}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right: text */}
                <div className="md:col-span-5 flex flex-col gap-5 md:pt-1">
                  <div>
                    <p className="text-sm text-[#E5E5E7]/55">{selectedItem.meta}</p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-white">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-[#E5E5E7]/75">
                    {selectedItem.description}
                  </p>

                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#E5E5E7] px-6 py-3 text-sm sm:text-base font-semibold text-[#010102] transition-colors duration-300 hover:bg-white"
                    >
                      Visit website
                      <HiArrowUpRight className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}