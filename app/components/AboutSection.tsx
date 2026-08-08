"use client";

import React from "react";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center bg-[#E7E7E7]"
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#333333] border-2 border-gray-400/80 rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-12 shadow-lg relative ring-1 ring-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center items-center relative w-full h-[400px] md:h-[450px] lg:h-[550px]">
              <div className="w-full h-full flex items-center justify-center relative z-10 cursor-grab active:cursor-grabbing">
                <Lanyard
                  position={[0, 0, 14]}
                  gravity={[0, -40, 0]}
                  frontImage="/fotonarayana-about.png"
                  imageFit="cover"
                  lanyardWidth={2}
                />
              </div>
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