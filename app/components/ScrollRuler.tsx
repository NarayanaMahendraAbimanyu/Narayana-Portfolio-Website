"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-[#FF5F56] via-[#FFBD2E] to-[#27C93F] origin-left"
      />
    </div>
  );
}