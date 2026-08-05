"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-2 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center bg-[#E7E7E7]"
    >
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#333333] border-2 border-gray-400/80 rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-12 shadow-lg relative ring-1 ring-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center relative pt-20 lg:pt-32 pb-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-28 lg:h-40 bg-[#111] z-0 flex flex-col items-center justify-evenly border-x border-black/50">
                <div className="w-1.5 h-4 bg-gray-700 rounded-sm" />
                <div className="w-1.5 h-4 bg-gray-700 rounded-sm" />
                <div className="w-1.5 h-4 bg-gray-700 rounded-sm" />
              </div>

              <motion.div
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
                initial={{ rotate: -10, opacity: 0, y: 20 }}
                whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  mass: 1.2,
                  delay: 0.2,
                }}
                style={{ transformOrigin: "top center" }}
                className="relative w-full max-w-[220px] rounded-[18px] border-2 border-[#5B5B87] bg-[#171721] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 cursor-grab active:cursor-grabbing flex flex-col items-center"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-8 border-2 border-[#5B5B87] rounded-md z-20 flex items-start justify-center bg-[#171721]">
                  <div className="w-2 h-4 bg-[#111] mt-1 rounded-sm" />
                </div>

                <div className="relative w-full aspect-[3/4] rounded-[10px] overflow-hidden bg-black pointer-events-none mb-3 border border-white/5">
                  <Image
                    src="/fotonarayana-about.png"
                    alt="Narayana Mahendra Abimanyu"
                    fill
                    priority
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="flex flex-col items-center justify-center space-y-1.5 w-full pb-1 pointer-events-none">
                  <span className="bg-[#5B5B87] text-white text-[11px] font-bold px-3 py-1 rounded-sm tracking-wide">
                    Programmer
                  </span>
                  <span className="text-gray-200 text-xs font-bold tracking-wider">
                    Web Developer
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-gray-100">
              <div>
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3"
                >
                  About Me
                </motion.h2>

                <div className="space-y-1">
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                    className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal text-justify"
                  >
                    Saya{" "}
                    <span className="bg-black text-white px-2 py-0.5 rounded font-semibold border border-white/10">
                      Narayana
                    </span>{" "}
                    Mahendra Abimanyu, siswa dari SMK Telkom Sidoarjo kelas XII jurusan Teknik Jaringan Akses dan Telekomunikasi (TJAT) dengan kelas perminatan Programmer.
                  </motion.p>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                    className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal text-justify"
                  >
                    Saya memiliki dasar yang baik dalam pengembangan website dan telah mengerjakan berbagai proyek website sederhana sebagai bagian dari pembelajaran di sekolah. Saya memiliki ketertarikan yang tinggi pada dunia pemrograman, senang mempelajari teknologi baru, serta terus mengembangkan kemampuan untuk menciptakan solusi digital yang bermanfaat.
                  </motion.p>
                </div>
              </div>

              <div className="pt-2">
                <motion.h3
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.3 }}
                  className="text-xl sm:text-2xl font-bold text-white mb-4"
                >
                  Education
                </motion.h3>

                <div className="space-y-2">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <span className="bg-black text-white px-3.5 sm:px-4 py-1.5 rounded-md text-sm sm:text-base font-extrabold tracking-wide border border-white/10 shrink-0">
                      2021 – 2024
                    </span>
                    <span className="text-sm sm:text-lg font-bold text-gray-200">
                      SMP Negeri 2 Gedangan
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <span className="bg-black text-white px-3.5 sm:px-4 py-1.5 rounded-md text-sm sm:text-base font-extrabold tracking-wide border border-white/10 shrink-0">
                      2024 – Now
                    </span>
                    <span className="text-sm sm:text-lg font-bold text-gray-200">
                      SMK Telkom Sidoarjo
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}