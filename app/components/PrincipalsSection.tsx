"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

const STATEMENT =
  "I design and engineer responsive web solutions by blending aesthetic precision, clean code, and optimized performance to drive user engagement.";

const tools: { name: string; icon: React.ReactNode }[] = [
  { name: "GitHub", icon: <i className="bx bxl-github" /> },
  { name: "VS Code", icon: <i className="bx bxl-visual-studio" /> },
  { name: "Figma", icon: <i className="bx bxl-figma" /> },
  { name: "React", icon: <i className="bx bxl-react" /> },
  { name: "Tailwind CSS", icon: <i className="bx bxl-tailwind-css" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
];

function Word({
  word,
  progress,
  range,
  reduceMotion,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}) {
  const opacity = useTransform(progress, range, [reduceMotion ? 1 : 0.2, 1]);
  return <motion.span style={{ opacity }}>{word}</motion.span>;
}

export default function PrincipalsSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = !!useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "end 0.5"],
  });

  const words = STATEMENT.split(" ");
  const total = words.length + 2;

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#E5E5E7] px-5 py-16 pb-16 sm:px-10 sm:py-20 sm:pb-20 md:min-h-screen md:pb-40 lg:min-h-screen lg:px-16 lg:pb-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight text-[#2A2A2A] sm:text-3xl lg:col-span-4 lg:pt-2">
          My Principals
        </h2>

        <div className="lg:col-span-8">
          <p
            ref={textRef}
            className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#2A2A2A] sm:text-4xl md:text-5xl xl:text-6xl"
          >
            {words.map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                <Word
                  word={word}
                  progress={scrollYProgress}
                  range={[index / total, (index + 3) / total]}
                  reduceMotion={reduceMotion}
                />{" "}
              </React.Fragment>
            ))}
          </p>

          <ul className="mt-10 flex flex-wrap gap-2 border-t border-[#2A2A2A]/15 pt-8 sm:mt-12 sm:gap-3">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-[#2A2A2A]/20 px-4 py-2 text-sm font-medium text-[#2A2A2A] transition-colors duration-200 hover:border-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#E5E5E7] sm:text-base [&_i]:text-xl [&_svg]:text-xl"
              >
                {tool.icon}
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}