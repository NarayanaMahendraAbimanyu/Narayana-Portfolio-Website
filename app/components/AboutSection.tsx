"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const PHOTO_SRC = "/fotonryna-about.png";

const education = [
  { school: "SMK Telkom Sidoarjo", period: "2024 – Now" },
  { school: "SMP Negeri 2 Gedangan", period: "2021 – 2024" },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = useState<number>(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateStickyTop = () => {
      setStickyTop(Math.min(0, window.innerHeight - element.offsetHeight));
    };

    updateStickyTop();

    const observer = new ResizeObserver(updateStickyTop);
    observer.observe(element);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);
  const contentY = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40]);

  return (
    <section
      ref={containerRef}
      id="about"
      style={{ "--about-top": `${stickyTop}px` } as React.CSSProperties}
      className="relative flex w-full items-center justify-center overflow-hidden bg-[#E5E5E7] px-5 py-24 sm:px-10 md:sticky md:top-[var(--about-top)] md:min-h-screen md:pb-28 md:pt-16 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 sm:mb-12">
          <h2 className="text-4xl font-semibold tracking-tight text-[#2A2A2A] sm:text-5xl lg:text-6xl">
            About Me
          </h2>
          <p className="mt-2 text-base text-[#2A2A2A]/60 sm:text-lg">
            Getting to know me better
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div style={{ y: imageY }} className="lg:col-span-5">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#2A2A2A]">
              <div className="flex shrink-0 items-center gap-3 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="truncate text-xs text-white/50">
                  Narayana Mahendra
                </span>
              </div>

              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] lg:flex-1">
                <Image
                  src={PHOTO_SRC}
                  alt="Narayana Mahendra"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: contentY }}
            className="flex flex-col justify-between gap-10 lg:col-span-7"
          >
            <p className="text-base leading-relaxed text-[#2A2A2A] sm:text-lg lg:text-xl">
              Hello!, I am <span className="font-semibold">Narayana Mahendra</span>, with a strong interest in Front-End Development and a passion for Web Design. I believe that an appealing visual design must always be backed by a solid technical foundation. That is why I am always enthusiastic about blending creative layouts with programming logic to bring digital interfaces to life. The ultimate goal of every project I work on is to deliver web products that are not only pleasing to the eye but also highly practical and intuitive to use.
            </p>

            <dl className="border-b border-[#2A2A2A]/15">
              <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-[#2A2A2A]/15 py-4 sm:grid-cols-[8rem_1fr] sm:py-5">
                <dt className="text-sm text-[#2A2A2A]/60">Based in</dt>
                <dd className="text-base font-medium text-[#2A2A2A] sm:text-lg">
                  Sidoarjo, East Java, Indonesia
                </dd>
              </div>

              <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-[#2A2A2A]/15 py-4 sm:grid-cols-[8rem_1fr] sm:py-5">
                <dt className="text-sm text-[#2A2A2A]/60">Education</dt>
                <dd className="flex flex-col gap-3">
                  {education.map((item) => (
                    <div
                      key={item.school}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
                    >
                      <span className="text-base font-medium text-[#2A2A2A] sm:text-lg">
                        {item.school}
                      </span>
                      <span className="text-sm tabular-nums text-[#2A2A2A]/60">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>

              <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-[#2A2A2A]/15 py-4 sm:grid-cols-[8rem_1fr] sm:py-5">
                <dt className="text-sm text-[#2A2A2A]/60">Status</dt>
                <dd className="flex items-center gap-3 text-base font-medium text-[#2A2A2A] sm:text-lg">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#27C93F] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </span>
                  Open for new project
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}