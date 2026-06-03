"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const BENEFITS = [
  { text: "Direct matching with internship opportunities", color: "#1E1E1E" },
  { text: "One-on-one CV optimization workshops", color: "#FAAB00" },
  { text: "Mentorship and direct ecosystem growth opportunities", color: "#34A853" },
];

const INTEREST_TAGS = [
  { text: "Developers", color: "#F5F5F5", textColor: "#1E1E1E", rotate: -5, x: "6%", y: "8%" },
  { text: "AI Enthusiasts", color: "#C3E6CB", textColor: "#1E1E1E", rotate: 8, x: "24%", y: "15%" },
  { text: "Brand Designers", color: "#F8D7DA", textColor: "#1E1E1E", rotate: -12, x: "8%", y: "42%" },
  { text: "Vibe coding", color: "#E83E8C", textColor: "#FFFFFF", rotate: 14, x: "68%", y: "10%" },
  { text: "Cybersecurity", color: "#4FC3F7", textColor: "#1E1E1E", rotate: -6, x: "42%", y: "18%" },
  { text: "Creators", color: "#FFE082", textColor: "#1E1E1E", rotate: 11, x: "72%", y: "38%" },
  { text: "Writers", color: "#B39DDB", textColor: "#FFFFFF", rotate: -9, x: "46%", y: "5%" },
  { text: "Storytellers", color: "#A5D6A7", textColor: "#1E1E1E", rotate: 6, x: "75%", y: "56%" },
  { text: "Web Developers", color: "#D4EDDA", textColor: "#1E1E1E", rotate: -14, x: "5%", y: "65%" },
  { text: "Mobile Devs", color: "#FFF3CD", textColor: "#1E1E1E", rotate: 12, x: "40%", y: "58%" },
  { text: "Cloud Engineers", color: "#F8D7DA", textColor: "#1E1E1E", rotate: -4, x: "72%", y: "76%" },
  { text: "UI/UX", color: "#E83E8C", textColor: "#FFFFFF", rotate: 9, x: "58%", y: "48%" },
  { text: "Data Analysts", color: "#17A2B8", textColor: "#FFFFFF", rotate: -11, x: "24%", y: "72%" },
  { text: "Tech Writers", color: "#C3E6CB", textColor: "#1E1E1E", rotate: 13, x: "55%", y: "66%" },
  { text: "Product Managers", color: "#FFE082", textColor: "#1E1E1E", rotate: -10, x: "25%", y: "32%" },
  { text: "DevOps", color: "#F5F5F5", textColor: "#1E1E1E", rotate: -12, x: "55%", y: "86%" },
  { text: "Digital Marketers", color: "#D4EDDA", textColor: "#1E1E1E", rotate: 4, x: "10%", y: "85%" },
];

export default function WhatToExpect() {
  return (
    <section id="about" className="w-full bg-[#4285F4] py-24 px-4 md:px-8 border-b-4 border-black relative overflow-hidden select-none">
      {/* Structural Tech Blueprint Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column Content Layout (Span 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 w-full">
            {/* Section Header Badge */}
            <div className="inline-block bg-[#FAAB00] border-4 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl self-start w-fit">
              <span className="text-xs md:text-sm font-outfit uppercase tracking-wider text-black font-black block">
                MAIN DAY EXPECTATIONS • JUNE 15
              </span>
            </div>

            {/* Heading in Exactly Two Lines */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton text-white uppercase tracking-tighter leading-[0.95] m-0">
              WHAT YOU WALK AWAY WITH
            </h2>

            {/* Description context paragraph */}
            <p className="text-sm md:text-base lg:text-lg text-white font-outfit font-black max-w-xl leading-snug text-left drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">
              CareerFest 2026 is engineered to give you real, testable capabilities and structural placement growth.
            </p>

            {/* Thick Outlined Checklist System */}
            <div className="flex flex-col gap-4 pt-4 w-full">
              {BENEFITS.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-4 bg-white border-4 border-black rounded-2xl p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 stroke-[3]" style={{ color: benefit.color }} />
                  <span className="font-outfit text-sm md:text-base text-black font-extrabold leading-snug">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column Interactive Tags Container Box (Span 5) */}
          <div className="lg:col-span-5 flex flex-col space-y-6 w-full">
            {/* Top right design shape aligned to badge */}
            <div className="flex justify-end w-full">
              <div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px]">
                <Image
                  src="/solid-shape.png"
                  alt="Design Shape"
                  width={400}
                  height={80}
                  className="h-auto w-full object-contain block ml-auto"
                />
              </div>
            </div>

            {/* Draggable Tags Black Container */}
            <div className="w-full h-[400px] md:h-[500px] bg-[#1E1E1E] border-4 border-black rounded-[2.5rem] relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-0 select-none">
                <h3 className="font-anton text-3xl md:text-4xl text-white/15 uppercase tracking-tighter leading-none">
                  OPEN TO EVERYONE
                </h3>
                <p className="font-outfit text-xs text-white/10 font-black max-w-xs mt-2 uppercase tracking-widest">
                  Regardless of your field of study
                </p>
              </div>

              {/* Interactive Drag Pills */}
              {INTEREST_TAGS.map((tag, idx) => (
                <motion.div
                  key={idx}
                  drag
                  dragConstraints={{ top: 15, left: 15, right: 260, bottom: 360 }}
                  whileDrag={{ scale: 1.1, rotate: 0, zIndex: 40 }}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: idx * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundColor: tag.color,
                    color: tag.textColor,
                    transform: `rotate(${tag.rotate}deg)`,
                    left: tag.x,
                    top: tag.y,
                  }}
                  className="absolute font-outfit text-xs md:text-sm font-black px-5 py-2.5 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-grab active:cursor-grabbing z-10 select-none whitespace-nowrap uppercase tracking-wide"
                >
                  {tag.text}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}