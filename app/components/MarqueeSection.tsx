"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";

const DOT_COLORS = ["#FF5F56", "#FFBD2E", "#27C93F"];
const ITEM_COUNT = 9;
const CENTER_INDEX = 4;

function MarqueeRow({
  label,
  weightClass,
  x,
}: {
  label: string;
  weightClass: string;
  x: MotionValue<string> | number;
}) {
  return (
    <motion.div
      style={{ x }}
      aria-hidden="true"
      className="flex w-max items-center gap-6 sm:gap-10 md:gap-14"
    >
      {Array.from({ length: ITEM_COUNT }).map((_, index) => (
        <React.Fragment key={index}>
          <span
            className={`whitespace-nowrap text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${weightClass} ${
              index === CENTER_INDEX ? "text-[#2A2A2A]" : "text-[#2A2A2A]/20"
            }`}
          >
            {label}
          </span>
          {index < ITEM_COUNT - 1 && (
            <span
              className="h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"
              style={{ backgroundColor: DOT_COLORS[index % DOT_COLORS.length] }}
            />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}

export default function MarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = !!useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 120,
    mass: 0.5,
    restDelta: 0.001,
  });

  const topX = useTransform(smoothProgress, [0, 0.5, 1], ["40vw", "0vw", "-40vw"]);
  const bottomX = useTransform(smoothProgress, [0, 0.5, 1], ["-40vw", "0vw", "40vw"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden border-y border-[#2A2A2A]/10 bg-[#E5E5E7] py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <p className="sr-only">Front End Developer and Web Designer</p>

      <div className="flex flex-col items-center gap-3 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:gap-5 md:gap-6">
        <MarqueeRow
          label="Front End Developer"
          weightClass="font-light"
          x={reduceMotion ? 0 : topX}
        />
        <MarqueeRow
          label="Web Designer"
          weightClass="font-light"
          x={reduceMotion ? 0 : bottomX}
        />
      </div>
    </section>
  );
}