"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
  const contentY = useTransform(smoothProgress, [0, 0.5, 1], [150, 0, -150]);
  const headerY = useTransform(smoothProgress, [0, 0.5, 1], [-50, 0, 50]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative md:sticky md:top-0 w-full min-h-[auto] md:min-h-screen py-32 md:py-1 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center bg-[#E5E5E7] overflow-hidden"
    >
      <motion.div style={{ y: headerY }} className="flex flex-col items-center justify-center mb-10 md:mb-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-1">
          About Me
        </h2>
        <p className="text-lg md:text-xl font-normal text-gray-700">
          Getting to know me better
        </p>
      </motion.div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          style={{ y: imageY }}
          className="lg:col-span-4 w-full h-full"
        >
          <div className="bg-[#2A2A2A] border-2 border-[#2A2A2A] rounded-3xl p-2 w-full h-full flex flex-col shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[360px] lg:h-full border-[3px] border-white rounded-2xl overflow-hidden bg-black">
              <Image
                src="/fotonryna-about.png"
                alt="Narayana Mahendra"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: contentY }} className="lg:col-span-8 flex flex-col gap-6">
          <div className="w-full bg-[#333333] rounded-[24px] p-6 sm:p-8 md:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
            <p className="text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed text-justify">
              Hello!, I am <span className="font-bold underline">Narayana Mahendra</span>, with a strong interest in Front-End Development and a passion for Web Design. I believe that an appealing visual design must always be backed by a solid technical foundation. That is why I am always enthusiastic about blending creative layouts with programming logic to bring digital interfaces to life. The ultimate goal of every project I work on is to deliver web products that are not only pleasing to the eye but also highly practical and intuitive to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="w-full bg-[#333333] rounded-[24px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay in</h3>
                <p className="text-white text-lg sm:text-xl font-semibold w-3/4">
                  Sidoarjo, East Java, Indonesia.
                </p>
              </div>

              <div className="mt-8">
                <div className="w-full h-[2px] bg-[#E5E5E7] mb-5"></div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#00FF00] animate-pulse"></div>
                  <span className="text-white font-semibold text-base sm:text-lg">
                    Open for new project
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#C7C7C7] rounded-[24px] p-6 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Education
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-5">
                  <div className="bg-black text-white px-3 py-1.5 rounded text-sm sm:text-base font-bold w-fit whitespace-nowrap">
                    2021 – 2024
                  </div>
                  <span className="text-black font-bold text-base sm:text-lg">
                    SMP Negeri 2 Gedangan
                  </span>
                </div>

                <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-5">
                  <div className="bg-black text-white px-3 py-1.5 rounded text-sm sm:text-base font-bold w-fit whitespace-nowrap">
                    2024 – Now
                  </div>
                  <span className="text-black font-bold text-base sm:text-lg">
                    SMK Telkom Sidoarjo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}