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
    bgColor: "#FAAB00",
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
    bgColor: "#4285F4", 
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
    src: "/images/recap11.jpg",
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
    bgColor: "#34A853", 
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
    <section className="w-full bg-[#1E1E1E] py-16 overflow-hidden border-b-4 border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        
        {/* Section Top Header*/}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#F5F5F5]/10 pb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-4xl font-anton text-[#F5F5F5] uppercase tracking-wide">
              Careerfest 2025 Recaps:
            </h2>
          </div>
          
          {/* Decorative Asset Vector*/}
          <div className="hidden md:flex items-center gap-4 bg-[#F5F5F5] text-[#1E1E1E] px-5 py-2.5 rounded-full border-2 border-[#1E1E1E] font-outfit text-sm font-medium shadow-[4px_4px_0px_0px_#4285F4]">
            <span>✳</span>
            <span>───→</span>
            <span className="font-semibold tracking-wider">GDG ON CAMPUS UNILORIN</span>
            <span className="opacity-40">〰〰〰</span>
            <span>✳</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Scrolling Container */}
      <div className="flex w-full overflow-hidden relative py-4 select-none">
        
        <motion.div 
          className="flex gap-6 flex-nowrap"
          animate={{ x: [0, -1920] }} // Adjust transform distance based on contents width scale
          transition={{
            ease: "linear",
            duration: 25, 
            repeat: Infinity,
          }}
          whileHover={{ transition: { duration: 40 } }} 
        >
          {DOUBLE_RECAP_ITEMS.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="relative w-[280px] md:w-[350px] h-[380px] md:h-[420px] flex-shrink-0 bg-[#1E1E1E] p-1.5 border-t-2 border-b-2 border-l border-r border-[#F5F5F5]/30 mx-1"
            >
              
              {/* --- THE RETRO WIREFRAME VIEWPORT CORNERS --- */}
              {/* Top Left */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F5F5F5] border border-[#1E1E1E] z-20" />
              {/* Top Right */}
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F5F5F5] border border-[#1E1E1E] z-20" />
              {/* Bottom Left */}
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F5F5F5] border border-[#1E1E1E] z-20" />
              {/* Bottom Right */}
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F5F5F5] border border-[#1E1E1E] z-20" />

              {/* Conditional Card Rendering Structure */}
              {item.type === "stat" ? (
                <div 
                  className="w-full h-full rounded-sm flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:scale-[0.99]"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h3 className="text-6xl md:text-7xl font-anton text-[#1E1E1E] tracking-tighter leading-none mb-4">
                    {item.value}
                  </h3>
                  <span className="px-4 py-1.5 bg-[#F5F5F5] text-[#1E1E1E] font-outfit text-sm md:text-base font-medium rounded-sm border-2 border-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E]">
                    {item.label}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full relative overflow-hidden bg-[#2A2A2A] rounded-sm group">
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    sizes="(max-w-7xl) 350px"
                    className="object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                    priority={idx < 4}
                  />
                  {/* Overlay vignette shading effect inside viewport */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/40 to-transparent pointer-events-none" />
                </div>
              )}

            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}