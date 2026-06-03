"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  FileText,
  Layers,
  MessagesSquare,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

// Practical tracks configuration data
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
    color: "#1E1E1E",
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
      id="schedule"
      ref={containerRef}
      className="w-full bg-[#34A853] py-24 px-4 md:px-8 border-b-4 border-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="w-full mb-16 pb-4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
            <div className="flex-1">
              <div className="inline-block bg-white border-4 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl self-start">
                <span className="text-xs md:text-sm font-outfit uppercase tracking-wider text-black font-black block">
                  THE TRACK PATHWAY • JUNE 15
                </span>
              </div>
            </div>

            <div className="hidden md:flex w-full md:w-[40%] justify-start">
              <div className="w-full max-w-[280px] md:max-w-[320px]">
                <Image
                  src="/solid-shape.png"
                  alt="Design Shape"
                  width={400}
                  height={80}
                  className="h-auto w-full object-contain block"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 w-full">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-anton text-[#F5F5F5] uppercase tracking-tighter leading-none m-0">
                PRACTICAL SESSIONS
              </h2>
            </div>

            <div className="w-full md:w-[40%] flex justify-start">
              <p className="text-sm md:text-base text-[#1E1E1E] font-outfit font-black max-w-sm leading-snug text-left">
                Follow the journey through five core hubs engineered to elevate your engineering, design, and placement capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Wrapper Grid */}
        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[6px] bg-black z-0 rounded-full -translate-x-1/2" />
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[6px] origin-top bg-white -translate-x-1/2 z-0 rounded-full"
            style={{ scaleY }}
          />

          {/* Sequential Cards Layout Map */}
          <div className="space-y-16 relative z-10">
            {SESSIONS_DATA.map((session, index) => {
              const IconComponent = session.icon;
              const isLeft = session.align === "left";

              return (
                <div
                  key={session.id}
                  className={`flex flex-col md:flex-row w-full items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                    } relative pl-12 md:pl-0`}
                >

                  {/* Timeline Intersection Node Dot Component */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", delay: 0.05 }}
                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-black -translate-x-1/2 flex items-center justify-center z-20 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300"
                    style={{ backgroundColor: session.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>

                  {/* Individual Block Content Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full md:w-[44%] rounded-[2rem] border-4 border-black bg-white p-6 md:p-8 relative group transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {/* Content Details Layout Row */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">

                      {/* Icon Box wrapper */}
                      <div
                        className="p-3 rounded-xl border-2 border-black flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        style={{ color: session.color }}
                      >
                        <IconComponent className="w-6 h-6 stroke-[2.5]" />
                      </div>

                      <div className="space-y-2">
                        {/* Title Display */}
                        <h3 className="text-xl md:text-2xl font-anton uppercase tracking-wide text-[#1E1E1E]">
                          {session.title}
                        </h3>

                        {/* Description Text */}
                        <p className="text-sm md:text-base font-outfit text-[#1E1E1E]/80 font-medium leading-relaxed">
                          {session.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Sequential Number Stamp Background */}
                    <span className="absolute bottom-4 right-6 text-5xl font-anton text-black/5 select-none transition-colors duration-300 group-hover:text-black/10">
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