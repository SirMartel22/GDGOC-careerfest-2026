"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FAQ_DATA = [
  {
    question: "Who can attend CareerFest 2026?",
    answer: "Everyone! Whether you are a developer, designer, writer, product manager, or just tech-curious, this event is built to map out your structural career growth regardless of your field of study.",
  },
  {
    question: "Do I need to bring my laptop?",
    answer: "Absolutely. This is a practical, hands-on ecosystem accelerator. You will need your laptop for live CV optimization booths, tracking pathways, and interactive workshop tasks.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, the event is completely free! However, physical seating capacities and specialized review booths are strictly limited, so claiming your pass early is mandatory.",
  },
  {
    question: "What should I expect from the CV Review Booths?",
    answer: "You will get direct, one-on-one constructive breakdowns from senior engineers and technical recruiters. They will inspect your formatting architecture, portfolio mapping, and structural visibility.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FAAB00] py-24 px-4 md:px-4 border-b-4 border-black relative select-none text-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="w-full mb-16 pb-4 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">
            <div className="flex-1">
              <div className="inline-block bg-white border-4 border-black px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl self-start">
                <span className="text-xs md:text-sm font-outfit uppercase tracking-wider text-black font-black block">
                  GOT QUESTIONS?
                </span>
              </div>
            </div>

            {/* Solid Shape Graphic Element */}
            <div className="hidden md:flex w-full md:w-[40%] justify-start">
              <div className="w-full max-w-[360px] md:max-w-[500px]">
                <Image
                  src="/solid-shape.png"
                  alt="Design Shape"
                  width={400}
                  height={90}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 w-full justify-start">
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-anton uppercase tracking-tighter leading-none text-white m-0">
                FREQUENT<br /> KNOWLEDGE BASE
              </h2>
            </div>

            {/* Description Context Paragraph */}
            <div className="w-full md:w-[40%] flex justify-start">
              <p className="text-sm md:text-base text-black font-outfit font-black max-w-sm leading-snug text-left">
                Quick breakdowns regarding layout specs, gate pass requirements, and venue mechanics.
              </p>
            </div>

          </div>
        </div>

        {/* Accordion Container List */}
        <div className="flex flex-col gap-6">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                {/* Trigger Button Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-outfit font-black text-base md:text-xl gap-4 cursor-pointer select-none bg-white hover:bg-black/5 transition-colors duration-150 border-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-[#4285F4] flex-shrink-0 stroke-[3]" />
                    <span>{faq.question}</span>
                  </div>

                  {/* Plus Icon Spinner */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-shrink-0 p-1 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <Plus className="w-4 h-4 md:w-5 h-5 stroke-[3]" />
                  </motion.div>
                </button>

                {/* Collapsible content pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t-4 border-black bg-[#F5F5F5] font-outfit font-bold text-sm md:text-base text-black/90 leading-relaxed relative">
                        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:12px_100%]" />
                        <p className="relative z-10 pt-5">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}