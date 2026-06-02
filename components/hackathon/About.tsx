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
    bgColor: "#4285F4", 
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
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl md:text-5xl font-anton text-[#1E1E1E] uppercase tracking-tighter">
              Careerfest 2025 Recaps:
            </h2>
          </div>
          <Image 
            src="/solid-shape.png"
            alt="Design Shape"
            width={400}
            height={80}
            className="h-auto opacity-100 hidden md:block w-auto max-w-[320px] lg:max-w-full"
          />
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
          whileHover={{ transition: { duration: 60 } }}
        >
          {DOUBLE_RECAP_ITEMS.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="relative w-[280px] md:w-[340px] h-[380px] md:h-[420px] flex-shrink-0 bg-white p-2 border-4 border-black rounded-2xl mx-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              
              {/* --- NEO-BRUTALIST WIREFRAME CORNER HANDLES --- */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white border-2 border-black z-20 rounded-sm" />

              {/* Conditional Structure Rendering */}
              {item.type === "stat" ? (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center p-6 text-center border-2 border-black rounded-xl"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <h3 className="text-5xl md:text-6xl font-anton text-[#1E1E1E] tracking-tighter uppercase leading-none mb-4">
                    {item.value}
                  </h3>
                  <span className="px-4 py-2 bg-white text-[#1E1E1E] font-outfit text-xs md:text-sm font-black uppercase rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {item.label}
                  </span>
                </div>
              ) : (
                <div className="w-full h-full relative overflow-hidden border-2 border-black bg-gray-100 rounded-xl group">
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    sizes="340px"
                    className="object-cover rounded-xl transition-transform duration-500 scale-100 group-hover:scale-105"
                    priority={idx < 4}
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-xl" />
                </div>
              )}

            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}