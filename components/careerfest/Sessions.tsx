"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
    Briefcase,
    FileText,
    Layers,
    MessagesSquare,
    Sparkles
} from "lucide-react";
import { useRef } from "react";

//practical tracks
const SESSIONS_DATA = [
  {
    id: 1,
    title: "CV Review Booths",
    description: "Bring your resume for one-on-one, constructive feedback from recruiters who vet tech talent daily. Learn exactly what gets your paper noticed.",
    icon: FileText,
    color: "#4285F4",
    align: "left",
  },
  {
    id: 2,
    title: "Live Interview Simulations",
    description: "Watch and participate in real-time technical and behavioral mock interviews. Learn how to handle tough questions under pressure.",
    icon: MessagesSquare,
    color: "#EA4336",
    align: "right",
  },
  {
    id: 3,
    title: "Portfolio Building Sessions",
    description: "Review engineering and design case studies. Learn how to present projects so they prove your actual capabilities to hiring managers.",
    icon: Layers,
    color: "#FAAB00",
    align: "left",
  },
  {
    id: 4,
    title: "Practical Employability Workshops",
    description: "No fluff or boring slides. Deep-dive into technical career growth strategies, networking systems, and landing global roles.",
    icon: Briefcase,
    color: "#34A853",
    align: "right",
  },
  {
    id: 5,
    title: "Visibility & Opportunity Sessions",
    description: "Discover what it takes to stand out in a crowded market and optimize your digital presence so recruiters come directly to you.",
    icon: Sparkles,
    color: "#4285F4", 
    align: "left",
  },
];

export default function Sessions() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#1E1E1E] py-24 px-4 md:px-8 border-b-4 border-[#1E1E1E] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-sm font-outfit uppercase tracking-widest text-[#FAAB00] font-bold block mb-3">
            THE TRACK PATHWAY • JUNE 15
          </span>
          <h2 className="text-4xl md:text-6xl font-anton text-[#F5F5F5] uppercase tracking-tight">
            PRACTICAL <span className="text-[#4285F4]">SESSIONS</span>
          </h2>
          <p className="text-base md:text-lg text-[#F5F5F5]/60 font-outfit font-light max-w-lg mx-auto mt-4 leading-relaxed">
            Follow the journey through five core hubs engineered to elevate your engineering, design, and placement capabilities.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#F5F5F5]/10 -translate-x-1/2 z-0 rounded-full hidden md:block" />
          
          {/* Scroll-Chasing Color Line Layer */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] origin-top bg-gradient-to-b from-[#4285F4] via-[#EA4336] via-[#FAAB00] to-[#34A853] -translate-x-1/2 z-0 rounded-full hidden md:block"
            style={{ scaleY }}
          />

          {/* Sequential Cards Mapping Loop */}
          <div className="space-y-12 relative z-10">
            {SESSIONS_DATA.map((session, index) => {
              const IconComponent = session.icon;
              const isLeft = session.align === "left";

              return (
                <div 
                  key={session.id}
                  className={`flex flex-col md:flex-row w-full items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } relative pl-10 md:pl-0`}
                >
                  
                  {/* Timeline Intersection Node Dot */}
                  <motion.div 
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="absolute left-2 md:left-1/2 w-8 h-8 rounded-full border-4 border-[#1E1E1E] -translate-x-1/2 flex items-center justify-center z-20 shadow-md transition-colors duration-300"
                    style={{ backgroundColor: session.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1E1E1E]" />
                  </motion.div>

                  {/* Individual Block Content Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 14 }}
                    className={`w-full md:w-[45%] rounded-2xl border-2 border-[#F5F5F5]/10 bg-[#252525] p-6 md:p-8 relative group transition-all duration-300 hover:border-transparent`}
                  >
                    {/* Block Pop Shadow on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      style={{ 
                        boxShadow: `4px 4px 0px 0px ${session.color}`,
                        border: `2px solid ${session.color}`
                      }}
                    />

                    {/* Content Details Block */}
                    <div className="flex items-start gap-4">
                      {/* Icon Box wrapper */}
                      <div 
                        className="p-3 rounded-xl border border-[#F5F5F5]/10 bg-[#1E1E1E] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: session.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div>
                        {/* Title Display */}
                        <h3 className="text-xl md:text-2xl font-anton uppercase tracking-wide text-[#F5F5F5] mb-2 group-hover:text-[#F5F5F5] transition-colors">
                          {session.title}
                        </h3>
                        
                        {/* Description Text */}
                        <p className="text-sm font-outfit text-[#F5F5F5]/70 font-light leading-relaxed">
                          {session.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Sequential Number Stamp Background */}
                    <span className="absolute bottom-4 right-6 text-5xl font-anton text-[#F5F5F5]/5 select-none transition-colors duration-300 group-hover:text-[#F5F5F5]/10">
                      0{index + 1}
                    </span>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}