'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    y: "100%", 
    opacity: 0 
  },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: { 
      duration: 1, 
      ease: [0.25, 1, 0.5, 1] 
    } 
  },
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const brandText = "Narayana.";
  const letters = Array.from(brandText);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ 
            y: "-100%", 
            transition: { 
              duration: 0.9, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2A2A2A] text-white overflow-hidden select-none"
        >
          <div className="flex flex-col items-center justify-center space-y-3- sm:space-y-4 px-4 w-full max-w-xl text-center">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 0.7 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="text-xs sm:text-sm tracking-[0.25em] font-poppins text-center uppercase"
              >
                Web Portfolio
              </motion.p>
            </div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center overflow-hidden text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center"
            >
              {letters.map((letter, index) => (
                <span key={index} className="inline-block overflow-hidden pb-1">
                  <motion.span
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <div className="w-48 sm:w-60 space-y-2 pt-2">
              <div className="relative w-full h-[4px] bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FF5F56] via-[#FFBD2E] to-[#27C93F] origin-left"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              <div className="flex justify-end">
                <span className="text-xs sm:text-sm font-poppins text-[#FF5F56] font-medium">
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