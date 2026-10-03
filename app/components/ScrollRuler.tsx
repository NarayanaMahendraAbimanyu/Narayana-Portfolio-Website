"use client";

import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const progress = reduceMotion ? scrollYProgress : smooth;
  const clipPath = useTransform(
    progress,
    (v) => `inset(0 ${(1 - Math.min(Math.max(v, 0), 1)) * 100}% 0 0)`
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <motion.div
        style={{
          clipPath,
          background:
            "linear-gradient(to right, #FF5F56 0 33.333%, #FFBD2E 33.333% 66.666%, #27C93F 66.666% 100%)",
        }}
        className="h-full w-full"
      />
    </div>
  );
}