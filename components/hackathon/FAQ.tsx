"use client"
import { useState } from "react";
import Image from "next/image"
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    q: "Do I need to be a developer to participate?",
    a: "Not at all. This challenge is open to every student regardless of your field. Writers, designers, storytellers, and non-techies are all welcome."
  },
  {
    q: "What tools do I need to use?",
    a: "Projects should incorporate Google AI or Cloud tools. The pre-challenge workshop on May 20 will walk you through everything you need to get started."
  },
  {
    q: "Can I work in a team?",
    a: "Yes. Solo or team your call."
  },
  {
    q: "What counts as a valid project?",
    a: "Any working solution that addresses an SDG problem. It could be an app, a tool, a design system, a content platform as long as it does something real."
  },
  {
    q: "When's the deadline to submit?",
    a: "May 25, 2026. No extensions."
  },
  {
    q: "Is there a registration fee?",
    a: "Zero. Free. Just build."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
              <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} className="h-auto w-auto" />
              <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// faq</span>
            </div>
            <Image 
                src="/solid-shape.png"
                alt="Design Shape"
                width={400}
                height={30}
                className="h-auto opacity-80 hidden md:block w-auto"
            />
        </div>

        <h2 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter mb-16">
          Got <br /> Questions?
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-4 border-black rounded-[2rem] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className="text-2xl font-bold text-[#1E1E1E] pr-8">{faq.q}</span>
                <HiChevronDown className={`text-3xl transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-8 pt-0 border-t-2 border-black/10">
                  <p className="text-xl text-gray-600 font-medium leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
