"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
  { text: "Direct matching with internship opportunities", color: "#4285F4" },
  { text: "Professional corporate headshots for your profiles", color: "#EA4336" },
  { text: "One-on-one CV optimization workshops", color: "#FAAB00" },
  { text: "Mentorship structures and direct ecosystem growth opportunities", color: "#4285F4" },
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
    <section className="w-full bg-[#1E1E1E] py-24 px-4 md:px-8 border-b-4 border-[#1E1E1E] relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column*/}
        <div>
          <span className="text-sm font-outfit uppercase tracking-widest text-[#FAAB00] font-bold block mb-2">
            MAIN DAY EXPECTATIONS • JUNE 15
          </span>
          <h2 className="text-4xl md:text-6xl font-anton text-[#F5F5F5] uppercase tracking-tight leading-none mb-6">
            WHAT YOU <span className="text-[#EA4336]">WALK AWAY</span> WITH
          </h2>
          <p className="text-base md:text-lg text-[#F5F5F5]/60 font-outfit font-light mb-10 leading-relaxed">
            CareerFest 2026 is engineered to give you real, testable capabilities and structural placement growth.
          </p>

          {/*Checklist Rows */}
          <div className="flex flex-col gap-4">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-4 bg-[#252525] border border-[#infinite] border-white/5 rounded-xl p-4 transition-all duration-300 hover:border-white/20"
              >
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: benefit.color }} />
                <span className="font-outfit text-sm md:text-base text-[#F5F5F5]/90 font-light">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column*/}
        <div className="w-full h-[400px] md:h-[500px] bg-[#1A1A1A] border-2 border-white/10 rounded-2xl relative overflow-hidden shadow-[inner_0px_4px_24px_rgba(0,0,0,0.6)] group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-0">
            <h3 className="font-anton text-2xl md:text-3xl text-[#F5F5F5]/20 uppercase tracking-wider">
              OPEN TO EVERYONE
            </h3>
            <p className="font-outfit text-xs text-[#F5F5F5]/10 max-w-xs mt-1 uppercase tracking-widest">
              Regardless of your field of study
            </p>
          </div>

          {INTEREST_TAGS.map((tag, idx) => (
            <motion.div
              key={idx}
              drag
              dragConstraints={{ top: 10, left: 10, right: 250, bottom: 350 }}
              whileDrag={{ scale: 1.1, rotate: 0, zIndex: 40 }}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: idx * 0.3,
                ease: "easeInOut",
              }}
              style={{
                backgroundColor: tag.color,
                color: tag.textColor,
                transform: `rotate(${tag.rotate}deg)`,
                left: tag.x,
                top: tag.y,
              }}
              className="absolute font-outfit text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full border border-black/30 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] cursor-grab active:cursor-grabbing z-10 transition-shadow duration-200 select-none whitespace-nowrap"
            >
              {tag.text}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}