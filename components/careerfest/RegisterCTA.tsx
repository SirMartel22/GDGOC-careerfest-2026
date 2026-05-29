"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles, Terminal } from "lucide-react";

export default function RegisterCTA() {
  const REGISTRATION_URL = "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-ilorin-ilorin-nigeria-presents-careerfest-2026-career-ready-whats-next/";

  return (
    <section className="w-full bg-white py-28 px-4 md:px-8 border-b-4 border-black relative overflow-hidden select-none text-black">
      {/* Subtle blueprint grid for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Retro Wireframe Corner Accents */}
      <div className="absolute top-4 left-4 text-black/20 hidden md:flex items-center gap-2 font-mono text-xs">
        <Terminal className="w-4 h-4" /> SEC_05 // INBOUND_CTA
      </div>
      <div className="absolute bottom-4 right-4 text-black/20 hidden md:flex items-center gap-2 font-mono text-xs">
        <Code2 className="w-4 h-4" /> STATUS: READY_TO_LAUNCH
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Urgent Action Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#EA4336] text-white border-4 border-black px-5 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl"
        >
          <Sparkles className="w-4 h-4 fill-white" />
          <span className="text-xs md:text-sm font-outfit font-black uppercase tracking-wider">
            LIMITED SLOTS AVAILABLE
          </span>
        </motion.div>

        {/* Catchy Massive Heading */}
        <h2 className="text-5xl md:text-8xl font-anton uppercase tracking-tighter leading-none mb-6">
          DON&apos;T JUST BUILD.<br />
          <span className="text-[#4285F4]">GET HIRED.</span>
        </h2>

        {/* Context Description */}
        <p className="text-base md:text-2xl text-black/80 font-outfit font-bold max-w-2xl mb-12 leading-snug">
          Secure your terminal seat for GDG On Campus CareerFest 2026. Review booths, hot-seat interview rounds, and direct tech placements are waiting.
        </p>

        {/* --- THE ULTRA-THICK BRUTALIST REGISTER BUTTON --- */}
        <motion.a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-4 bg-[#34A853] text-white font-anton text-2xl md:text-4xl uppercase tracking-wide px-10 py-6 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 cursor-pointer"
        >
          CLAIM YOUR PASS
          <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 stroke-[3] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          
          {/* Internal block blueprint lines inside the button for depth */}
          <div className="absolute inset-1 border-2 border-dashed border-white/20 pointer-events-none rounded-lg" />
        </motion.a>

        {/* Decorative Floating Background Subtexts */}
        <div className="mt-8 font-outfit font-extrabold text-xs md:text-sm text-black/40 uppercase tracking-widest">
          ⚡ ENTRY REQUIREMENT: AN OPEN MIND & YOUR LAPTOP ⚡
        </div>

      </div>
    </section>
  );
}