'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const BRAND = 'Narayana.';
const DURATION = 2800;
const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];

const DOTS = [
  { color: '#FF5F56', threshold: 8 },
  { color: '#FFBD2E', threshold: 42 },
  { color: '#27C93F', threshold: 76 },
];

const nameVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.25,
    },
  },
};

const letterVariants: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: EASE },
  },
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(eased * 100);

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(() => setIsFinished(true), 350);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          role="status"
          aria-label="Memuat halaman"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#2A2A2A] px-6 text-white select-none"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

          <div className="relative flex w-full max-w-xs flex-col items-center text-center sm:max-w-md lg:max-w-xl">
            <div className="mb-7 flex items-center gap-2 sm:mb-9 sm:gap-2.5 lg:mb-11">
              {DOTS.map((dot, index) => {
                const lit = progress >= dot.threshold;
                return (
                  <motion.span
                    key={dot.color}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: lit ? 1 : 0.18,
                      scale: lit ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                      delay: lit ? 0 : index * 0.05,
                    }}
                    className="block h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5"
                    style={{ backgroundColor: dot.color }}
                  />
                );
              })}
            </div>

            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
            >
              {Array.from(BRAND).map((letter, index) => (
                <span
                  key={index}
                  className="inline-block overflow-hidden pb-[0.14em]"
                >
                  <motion.span
                    variants={letterVariants}
                    className="inline-block"
                    style={letter === '.' ? { color: '#FF5F56' } : undefined}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
              className="mt-2 text-xs font-light sm:mt-3 sm:text-sm lg:text-base"
            >
              Front End Developer &amp; Web Designer
            </motion.p>

            <div className="mt-10 w-56 sm:mt-12 sm:w-72 lg:mt-14 lg:w-80">
              <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF5F56] via-[#FFBD2E] to-[#27C93F]"
                  style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-light text-white/40">Memuat</span>
                <span className="font-medium tabular-nums text-white/80">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};