"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function RegisterCTA() {
  const REGISTRATION_URL = "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-ilorin-ilorin-nigeria-presents-careerfest-2026-career-ready-whats-next/";

  return (
    <section id="register" className="w-full bg-white py-24 px-4 md:px-8 border-b-4 border-black relative overflow-hidden select-none text-black">
      {/* Subtle blueprint grid for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header Alignment: Limited Slots left, Solid Shape right */}
        <div className="flex justify-between items-center mb-12 w-full">
          <div className="flex items-center gap-2 bg-[#EA4336] text-white px-5 py-2.5 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
            <span className="text-xs md:text-sm font-outfit font-black uppercase tracking-wider">
              LIMITED SLOTS AVAILABLE
            </span>
          </div>

          <Image
            src="/solid-shape.png"
            alt="Design Shape"
            width={400}
            height={30}
            className="h-auto opacity-80 hidden md:block w-auto max-w-[280px] md:max-w-[400px]"
          />
        </div>

        {/* Centered CTA Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-left md:items-center">
          <h2 className="text-5xl text-left md:text-center md:text-8xl font-anton uppercase tracking-tighter leading-none mb-6 text-[#1E1E1E]">
            DON&apos;T JUST BUILD.<br />
            GET HIRED.
          </h2>

          {/* Context Description */}
          <p className="text-base md:text-2xl text-black/80 font-outfit font-bold max-w-2xl mb-12 leading-snug">
            Secure your terminal seat for GDG On Campus CareerFest 2026. Review booths, hot-seat interview rounds, and direct tech placements are waiting.
          </p>

          <motion.a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-2/4 md:w-1/4 inline-flex items-center gap-4 bg-[#34A853] text-white font-anton text-2xl md:text-4xl uppercase tracking-wide px-10 py-4 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer"
          >
            RSVP
            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 stroke-[3] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-1 border-2 border-dashed border-white/20 pointer-events-none rounded-lg" />
          </motion.a>

          {/* Decorative Floating Background Subtexts */}
          <div className="mt-8 font-outfit font-extrabold text-xs md:text-sm text-black/40 uppercase tracking-widest">
            ENTRY REQUIREMENT: AN OPEN MIND & YOUR LAPTOP
          </div>
        </div>

      </div>
    </section>
  );
}