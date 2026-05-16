"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// facilitators
const SPEAKERS_DATA = [
  {
    id: 1,
    name: "Dr. Adebayo Omotosho",
    role: "Lead Technical Recruiter",
    company: "TalentMatch Global",
    trackBadge: "CV Review Booths",
    image: "/Images/speaker1.jpg",
    color: "#4285F4", 
    bio: "Ex-Google Senior Engineer with over 8 years of experience vetting engineering talent across Europe and Africa. Specialist in clean technical resume mapping, portfolio architectures, and structural career scaling.",
  },
  {
    id: 2,
    name: "Sarah Johnstone",
    role: "Senior HR Specialist",
    company: "DevOps Africa",
    trackBadge: "Interview Simulations",
    image: "/Images/speaker2.jpg",
    color: "#EA4336",
    bio: "Global talent acquisition manager who has vetted over 15,000 corporate tech resumes. Sarah hosts behavioral strategy circles and runs real-time hot-seat mock engineering interviews.",
  },
  {
    id: 3,
    name: "Imran Bello",
    role: "Principal Product Designer",
    company: "Cre8 Studio",
    trackBadge: "Portfolio Building",
    image: "/Images/speaker3.jpg",
    color: "#FAAB00", 
    bio: "Interaction designer specializing in design systems and scalable user experiences. Imran guides engineers and designers on how to structure practical project case studies that grab recruiters' attention.",
  },
  {
    id: 4,
    name: "Blessing Okon",
    role: "Ecosystem Growth Lead",
    company: "CloudSphere",
    trackBadge: "Visibility Lab",
    image: "/images/speaker4.jpg",
    color: "#34A853", // Google Green
    bio: "Community strategist helping technical builders optimize their global digital presence. Blessing specializes in brand engineering, open-source visibility, and helping remote developers get scouted directly on LinkedIn.",
  },
  {
    id: 5,
    name: "Dr. Adebayo Omotosho",
    role: "Lead Technical Recruiter",
    company: "TalentMatch Global",
    trackBadge: "CV Review Booths",
    image: "/Images/speaker1.jpg",
    color: "#4285F4", 
    bio: "Ex-Google Senior Engineer with over 8 years of experience vetting engineering talent across Europe and Africa. Specialist in clean technical resume mapping, portfolio architectures, and structural career scaling.",
  },
  {
    id: 6,
    name: "Imran Bello",
    role: "Principal Product Designer",
    company: "Cre8 Studio",
    trackBadge: "Portfolio Building",
    image: "/Images/speaker3.jpg",
    color: "#FAAB00", 
    bio: "Interaction designer specializing in design systems and scalable user experiences. Imran guides engineers and designers on how to structure practical project case studies that grab recruiters' attention.",
  },
  {
    id: 7,
    name: "Blessing Okon",
    role: "Ecosystem Growth Lead",
    company: "CloudSphere",
    trackBadge: "Visibility Lab",
    image: "/images/speaker4.jpg",
    color: "#34A853", // Google Green
    bio: "Community strategist helping technical builders optimize their global digital presence. Blessing specializes in brand engineering, open-source visibility, and helping remote developers get scouted directly on LinkedIn.",
  },
  {
    id: 8,
    name: "Sarah Johnstone",
    role: "Senior HR Specialist",
    company: "DevOps Africa",
    trackBadge: "Interview Simulations",
    image: "/Images/speaker2.jpg",
    color: "#EA4336",
    bio: "Global talent acquisition manager who has vetted over 15,000 corporate tech resumes. Sarah hosts behavioral strategy circles and runs real-time hot-seat mock engineering interviews.",
  },
];

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof SPEAKERS_DATA[0] | null>(null);

  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-4 md:px-8 border-b-4 border-[#1E1E1E] relative select-none text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b-2 border-[#1E1E1E]/10 pb-8">
          <div>
            <span className="text-sm font-outfit uppercase tracking-widest text-[#EA4336] font-bold block mb-2">
              EXPERT SELECTION
            </span>
            <h2 className="text-4xl md:text-6xl font-anton text-[#1E1E1E] uppercase tracking-tight leading-none">
              MINDSET <span className="text-[#4285F4]">SPEAKERS</span>
            </h2>
          </div>
          <p className="text-sm md:text-lg text-[#1E1E1E]/70 font-outfit font-light max-w-sm leading-relaxed">
            Click on any facilitator card to inspect their background, operational focus track, and workshop layout specifications.
          </p>
        </div>

        {/* Speakers Grid Layout*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS_DATA.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="relative w-full h-[400px] md:h-[450px] bg-white border-2 border-[#1E1E1E] p-3 cursor-pointer group transition-transform duration-300"
            >
              {/*WIREFRAME CORNER*/}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-[#1E1E1E] z-20" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-[#1E1E1E] z-20" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white border border-[#1E1E1E] z-20" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white border border-[#1E1E1E] z-20" />

              {/*Inner Color Frame Layer */}
              <div 
                className="absolute inset-2 border-2 pointer-events-none z-10 transition-transform duration-300 group-hover:scale-[1.01]" 
                style={{ borderColor: speaker.color }}
              />

              {/* Top Track Label Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-[#1E1E1E] px-4 py-1 z-20 rounded-sm shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)]">
                <span className="text-[10px] md:text-xs font-outfit font-medium text-[#1E1E1E] uppercase tracking-wider">
                  {speaker.trackBadge}
                </span>
              </div>

              {/* Speaker Headshot Container */}
              <div className="w-full h-full relative overflow-hidden bg-gray-100 rounded-sm">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-w-7xl) 300px"
                  className="object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                />
                {/* Subtle overlay shading gradient shadow layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Bottom Right Floating Core Details Capsule */}
              <div className="absolute bottom-4 right-4 max-w-[85%] bg-white border border-[#1E1E1E] rounded-xl px-4 py-2.5 z-20 text-right shadow-[3px_3px_0px_0px_#1E1E1E] transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-anton text-base md:text-lg text-[#1E1E1E] uppercase tracking-wide leading-tight">
                  {speaker.name}
                </h3>
                <p className="font-outfit text-[11px] text-[#1E1E1E]/70 font-light mt-0.5 leading-none">
                  {speaker.role} <span className="font-medium text-[#1E1E1E]">@{speaker.company}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* --- FACILITATOR MODAL --- */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop Shadow Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-[#1E1E1E]/80 backdrop-blur-sm"
            />

            {/* Modal Core Window Card container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 25 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#F5F5F5] border-4 border-[#1E1E1E] rounded-2xl p-6 md:p-8 z-10 flex flex-col md:flex-row gap-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              {/* Dynamic decorative structural background block accent based on speaker theme */}
              <div 
                className="absolute top-0 left-0 right-0 h-3" 
                style={{ backgroundColor: selectedSpeaker.color }}
              />

              {/* Close Window Command Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full border-2 border-[#1E1E1E] bg-white text-[#1E1E1E] hover:bg-[#EA4336] hover:text-white transition-colors duration-200 z-30"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Profile Frame Visual Side Left column */}
              <div className="w-full md:w-[220px] h-[240px] relative flex-shrink-0 border-2 border-[#1E1E1E] p-1.5 bg-white mt-4 md:mt-0">
                <div className="w-full h-full relative overflow-hidden rounded-sm">
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Column Layout Side Right */}
              <div className="flex flex-col justify-between flex-grow pt-2">
                <div>
                  <span 
                    className="text-xs font-outfit font-bold uppercase tracking-widest px-2.5 py-1 border border-[#1E1E1E] bg-white rounded-md inline-block mb-3 shadow-[1px_1px_0px_0px_#1E1E1E]"
                    style={{ color: selectedSpeaker.color }}
                  >
                    {selectedSpeaker.trackBadge}
                  </span>
                  
                  <h3 className="text-3xl font-anton text-[#1E1E1E] uppercase tracking-wide leading-none mb-1">
                    {selectedSpeaker.name}
                  </h3>
                  
                  <p className="text-sm font-outfit text-[#1E1E1E]/80 font-medium mb-4">
                    {selectedSpeaker.role} <span className="text-[#1E1E1E] font-bold">@ {selectedSpeaker.company}</span>
                  </p>
                  
                  <hr className="border-[#1E1E1E]/10 mb-4" />
                  
                  <p className="text-sm md:text-base font-outfit text-[#1E1E1E]/80 font-light leading-relaxed">
                    {selectedSpeaker.bio}
                  </p>
                </div>

                {/* Interactive Base Action Tag inside modal */}
                <div className="mt-6 pt-4 border-t border-[#1E1E1E]/10 flex items-center justify-between">
                  <span className="text-xs font-outfit font-semibold uppercase tracking-wider text-[#1E1E1E]/40">
                    GDG On Campus CareerFest 2026
                  </span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedSpeaker.color }} />
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}