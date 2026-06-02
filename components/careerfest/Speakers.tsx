"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// facilitators configuration data
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
    color: "#34A853",
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
    color: "#34A853",
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
    <section className="w-full bg-[#F5F5F5] py-24 px-4 md:px-8 border-b-4 border-black relative select-none text-[#1E1E1E]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="w-full mb-16 pb-4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
            <div className="flex-1">
              <div className="inline-block bg-white border-4 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl self-start">
                <span className="text-xs md:text-sm font-outfit uppercase tracking-wider text-[#EA4336] font-black block">
                  EXPERT SELECTION
                </span>
              </div>
            </div>

            <div className="w-full md:w-[40%] flex justify-start">
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
              <h2 className="text-5xl md:text-7xl font-anton text-[#1E1E1E] uppercase tracking-tighter leading-none m-0">
                MINDSET SPEAKERS
              </h2>
            </div>

            <div className="w-full md:w-[40%] flex justify-start">
              <p className="text-sm md:text-base text-[#1E1E1E]/80 font-outfit font-black max-w-sm leading-snug text-left">
                Click on any facilitator card to inspect their background, operational focus track, and workshop layout specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Speakers Grid Layout*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SPEAKERS_DATA.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="relative w-full h-[400px] md:h-[450px] bg-white border-4 border-black p-3 cursor-pointer group transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl"
            >
              {/* --- THICK BRUTALIST WIREFRAME CORNER HANDLES --- */}
              <div className="absolute -top-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-white border-2 border-black z-20 rounded-sm" />
              <div className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-white border-2 border-black z-20 rounded-sm" />

              {/* Dynamic Inner Structural Accent Frame Line */}
              <div
                className="absolute inset-1.5 border-2 pointer-events-none z-10 transition-transform duration-300 rounded-xl"
                style={{ borderColor: speaker.color }}
              />

              {/* Top Track Label Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black px-4 py-1 z-20 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-[11px] font-outfit font-bold text-[#1E1E1E] uppercase tracking-wider block whitespace-nowrap">
                  {speaker.trackBadge}
                </span>
              </div>

              <div className="w-full h-full relative overflow-hidden border-2 border-black bg-gray-100 rounded-xl">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 scale-100 group-hover:scale-102 rounded-xl"
                />
                {/* Overlay shading gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none rounded-xl" />
              </div>

              {/* Bottom Right Floating Core Details Capsule */}
              <div className="absolute bottom-4 right-4 max-w-[90%] bg-white border-2 border-black rounded-xl px-4 py-2 z-20 text-right shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 group-hover:rotate-1">
                <h3 className="font-anton text-base md:text-lg text-[#1E1E1E] uppercase tracking-wide leading-tight">
                  {speaker.name}
                </h3>
                <p className="font-outfit text-xs text-[#1E1E1E]/80 font-bold mt-1 leading-none">
                  {speaker.role} <span className="text-black font-extrabold">@{speaker.company}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* --- FACILITATOR MODAL VIEWPORT --- */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Backdrop Shadow Block Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Core Window Card container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#F5F5F5] border-4 border-black rounded-[2rem] p-6 md:p-8 z-10 flex flex-col md:flex-row gap-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              {/* Dynamic top edge border strip based on theme color context */}
              <div
                className="absolute top-0 left-0 right-0 h-4 border-b-2 border-black"
                style={{ backgroundColor: selectedSpeaker.color }}
              />

              {/* Close Window Button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 p-2 rounded-xl border-2 border-black bg-white text-[#1E1E1E] hover:bg-[#EA4336] hover:text-white transition-colors duration-200 z-30 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <X className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Profile Image Column Left */}
              <div className="w-full md:w-[220px] h-[240px] relative flex-shrink-0 border-4 border-black p-2 bg-white mt-6 md:mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
                <div className="w-full h-full relative overflow-hidden border-2 border-black rounded-xl">
                  <Image
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Content Column Layout Side Right */}
              <div className="flex flex-col justify-between flex-grow pt-6">
                <div>
                  <span
                    className="text-xs font-outfit font-extrabold uppercase tracking-widest px-3 py-1 border-2 border-black bg-white rounded-md inline-block mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{ color: selectedSpeaker.color }}
                  >
                    {selectedSpeaker.trackBadge}
                  </span>

                  <h3 className="text-3xl font-anton text-[#1E1E1E] uppercase tracking-wide leading-none mb-1">
                    {selectedSpeaker.name}
                  </h3>

                  <p className="text-sm font-outfit text-[#1E1E1E]/90 font-bold mb-4">
                    {selectedSpeaker.role} <span className="text-black font-black">@ {selectedSpeaker.company}</span>
                  </p>

                  <hr className="border-2 border-black mb-4" />

                  <p className="text-sm md:text-base font-outfit text-[#1E1E1E] font-medium leading-relaxed">
                    {selectedSpeaker.bio}
                  </p>
                </div>

                {/* Footer contextual tracking line inside modal */}
                <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
                  <span className="text-xs font-outfit font-extrabold uppercase tracking-wider text-[#1E1E1E]/50">
                    GDG On Campus CareerFest 2026
                  </span>
                  <div className="w-3 h-3 rounded-full border-2 border-black" style={{ backgroundColor: selectedSpeaker.color }} />
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}