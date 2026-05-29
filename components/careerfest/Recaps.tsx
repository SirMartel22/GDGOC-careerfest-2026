"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// CareerFest 2025 Key Metrics & Recaps
const RECAP_ITEMS = [
  {
    id: 1,
    type: "stat",
    value: "2000+",
    label: "Attendees Packed",
    bgColor: "#EA4336", 
  },
  {
    id: 2,
    type: "image",
    src: "/images/recap1.jpg",
    alt: "Massive crowd of student builders listening to industry insights",
  },
  {
    id: 3,
    type: "image",
    src: "/images/recap2.jpg",
    alt: "Massive crowd of student builders listening to industry insights",
  },
  {
    id: 4,
    type: "image",
    src: "/images/recap3.jpg",
    alt: "Massive crowd of student builders listening to industry insights",
  },
  {
    id: 5,
    type: "image",
    src: "/images/recap4.jpg",
    alt: "Massive crowd of student builders listening to industry insights",
  },
  {
    id: 6,
    type: "image",
    src: "/images/recap5.jpg",
    alt: "Massive crowd of student builders listening to industry insights",
  },
  {
    id: 7,
    type: "stat",
    value: "INSPIRED",
    label: "Community Vibe",
    bgColor: "#4285F4", // Flipped to blue since section container became yellow
  },
  {
    id: 8,
    type: "image",
    src: "/images/recap6.jpg",
    alt: "Speakers sharing career growth paths on stage",
  },
  {
    id: 9,
    type: "image",
    src: "/images/recap7.jpg",
    alt: "Speakers sharing career growth paths on stage",
  },
  {
    id: 10,
    type: "image",
    src: "/images/recap8.jpg",
    alt: "Speakers sharing career growth paths on stage",
  },
  {
    id: 11,
    type: "image",
    src: "/images/recap9.jpg",
    alt: "Speakers sharing career growth paths on stage",
  },
  {
    id: 12,
    type: "stat",
    value: "MASSIVE",
    label: "Twitter/X Buzz",
    bgColor: "#34A853", 
  },
  {
    id: 13,
    type: "image",
    src: "/images/recap10.jpg",
    alt: "Interactive breakout networking circles",
  },
  {
    id: 14,
    type: "image",
    src: "/images/recap12.jpg",
    alt: "Interactive breakout networking circles",
  },
  {
    id: 15,
    type: "image",
    src: "/images/recap12.jpg",
    alt: "Interactive breakout networking circles",
  },
  {
    id: 16,
    type: "stat",
    value: "100%",
    label: "Energy & Impact",
    bgColor: "#EA4336", 
  },
  {
    id: 17,
    type: "image",
    src: "/images/recap13.jpg",
    alt: "Group photograph of energized community members",
  },
  {
    id: 18,
    type: "image",
    src: "/images/recap14.jpg",
    alt: "Group photograph of energized community members",
  },
];

const DOUBLE_RECAP_ITEMS = [...RECAP_ITEMS, ...RECAP_ITEMS];

export default function Recaps() {
  return (
    <section className="w-full bg-[#FAAB00] py-20 overflow-hidden border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        
        {/* Section Top Header Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl md:text-5xl font-anton text-[#1E1E1E] uppercase tracking-tighter">
              Careerfest 2025 Recaps:
            </h2>
          </div>
          
          {/* Branded Pill Badge Alignment */}
          <div className="hidden md:flex items-center gap-4 bg-white text-[#1E1E1E] px-6 py-2.5 rounded-full border-4 border-black font-outfit text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span>✳</span>
            <span>───→</span>
            <span className="tracking-wider uppercase">GDG ON CAMPUS UNILORIN</span>
            <span className="opacity-30">〰〰〰</span>
            <span>✳</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Row */}
      <div className="flex w-full overflow-hidden relative py-4 select-none">
        
        <motion.div 
          className="flex gap-8 flex-nowrap px-4"
          animate={{ x: [0, -2800] }} 
          transition={{
            ease: "linear",
            duration: 32, 
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 60 } }} // Smooth deceleration on hover slowing
        >
          {DOUBLE_RECAP_ITEMS.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="relative w-[280px] md:w-[340px] h-[380px] md:h-[420px] flex-shrink-0 bg-white p-2 border-4 border-black mx-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              
              {/* --- NEO-BRUTALIST WIREFRAME CORNER HANDLES --- */}
              <div className="absolute -top-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-black z-20" />
              <div className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-black z-20" />
              <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-black z-20" />
              <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-black z-20" />

              {/* Conditional Structure Rendering */}
              {item.type === "stat" ? (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center p-6 text-center border-2 border-black"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h3 className="text-5xl md:text-6xl font-anton text-[#1E1E1E] tracking-tighter uppercase leading-none mb-4">
                    {item.value}
                  </h3>
                  <span className="px-4 py-2 bg-white text-[#1E1E1E] font-outfit text-xs md:text-sm font-bold uppercase rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {item.label}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full relative overflow-hidden border-2 border-black bg-gray-100 group">
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    sizes="340px"
                    className="object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                    priority={idx < 4}
                  />
                  {/* Subtle inner overlay vignette */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
              )}

            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}