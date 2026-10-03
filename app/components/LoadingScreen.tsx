'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

interface Greeting {
  text: string;
  lang: string;
  dir?: 'rtl';
  /** Latin script gets tight tracking; other scripts keep their natural spacing. */
  latin?: boolean;
}

// The last entry is the one the screen settles on.
const GREETINGS: Greeting[] = [
  { text: 'Hello', lang: 'en', latin: true },
  { text: 'Bonjour', lang: 'fr', latin: true },
  { text: 'こんにちは', lang: 'ja' },
  { text: 'Hola', lang: 'es', latin: true },
  { text: '안녕하세요', lang: 'ko' },
  { text: 'مرحبا', lang: 'ar', dir: 'rtl' },
  { text: 'Sugeng rawuh', lang: 'jv', latin: true },
  { text: 'Halo', lang: 'id', latin: true },
];

const FIRST_HOLD = 550;
const STEP = 200;
const LAST_HOLD = 1400;

// Total time until the screen lifts away.
const TOTAL = FIRST_HOLD + (GREETINGS.length - 2) * STEP + LAST_HOLD;
// The bar hits 100% a beat before the screen lifts.
const BAR_DURATION = TOTAL - 300;

// Each dot matches one third of the bar (same colors, same order).
const DOTS = [
  { color: '#FF5F56', from: 0 },
  { color: '#FFBD2E', from: 100 / 3 },
  { color: '#27C93F', from: (100 / 3) * 2 },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_STACK =
  "'Poppins', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans Arabic', system-ui, sans-serif";

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const reduceMotion = useReducedMotion();
  const last = GREETINGS.length - 1;
  const [index, setIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Count 0% to 100% over the same timeline as the greetings.
  useEffect(() => {
    const duration = reduceMotion ? 900 : BAR_DURATION;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // Gentle ease in and out so it doesn't feel mechanical.
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(eased * 100);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  // Step through the greetings, then hold on the last one.
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (reduceMotion) {
      setIndex(last);
      timers.push(setTimeout(() => setIsFinished(true), 1200));
    } else {
      let elapsed = FIRST_HOLD;
      for (let i = 1; i <= last; i++) {
        const step = i;
        timers.push(setTimeout(() => setIndex(step), elapsed));
        elapsed += i === last ? LAST_HOLD : STEP;
      }
      timers.push(setTimeout(() => setIsFinished(true), elapsed));
    }

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion, last]);

  // Keep the page from scrolling underneath while loading.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const greeting = GREETINGS[index];
  const isLast = index === last;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isFinished && (
        <motion.div
          role="status"
          aria-label="Memuat halaman"
          initial={{ y: '0%' }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.4 } }
              : { y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }
          }
          className="fixed inset-0 z-[70] flex select-none flex-col bg-[#2A2A2A] text-white"
        >
          {/* Greeting */}
          <div
            aria-hidden
            className="flex flex-1 flex-col items-center justify-center px-6 text-center"
          >
            <h1
              lang={greeting.lang}
              dir={greeting.dir}
              style={{ fontFamily: FONT_STACK }}
              className={`whitespace-nowrap text-[2.5rem] font-semibold leading-[1.15] sm:text-7xl lg:text-8xl ${
                greeting.latin ? 'tracking-tight' : ''
              }`}
            >
              {isLast && !reduceMotion ? (
                <motion.span
                  key={greeting.text}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="inline-block"
                >
                  {greeting.text}
                </motion.span>
              ) : (
                <span key={greeting.text}>{greeting.text}</span>
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isLast ? 0.6 : 0 }}
              transition={{ duration: 0.7, delay: isLast ? 0.35 : 0, ease: 'easeOut' }}
              className="mt-4 text-sm sm:mt-5 sm:text-base lg:text-lg"
            >
              Selamat datang di portfolio saya.
            </motion.p>
          </div>

          {/* Footer: progress bar (bottom center), then wordmark + dots */}
          <div
            aria-hidden
            className="flex flex-col items-center gap-8 px-6 pb-7 sm:gap-10 sm:px-10 sm:pb-10"
          >
            <div className="w-56 sm:w-72 lg:w-80">
              <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: `inset(0 ${100 - progress}% 0 0)`,
                    background:
                      'linear-gradient(to right, #FF5F56 0 33.333%, #FFBD2E 33.333% 66.666%, #27C93F 66.666% 100%)',
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-light text-white/40">Memuat</span>
                <span className="font-medium tabular-nums text-white/80">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              <span className="text-sm font-semibold tracking-tight text-white/60 sm:text-base">
                Narayana<span className="text-[#FF5F56]">.</span>
              </span>

              <div className="flex items-center gap-2 sm:gap-2.5">
                {DOTS.map((dot) => {
                  const lit = progress >= dot.from;
                  return (
                    <motion.span
                      key={dot.color}
                      animate={{ opacity: lit ? 1 : 0.18, scale: lit ? 1 : 0.8 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="block h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                      style={{ backgroundColor: dot.color }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};