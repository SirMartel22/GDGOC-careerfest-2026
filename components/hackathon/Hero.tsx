"use client";

import Image from "next/image";
import { HiArrowRight, HiOutlineRocketLaunch } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../ui/Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-[#FAAB00] pt-32 pb-16 overflow-hidden flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#EA4336] opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4285F4] opacity-10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Top Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <HiOutlineRocketLaunch className="text-2xl text-[#EA4336]" />
              <span className="font-bold text-sm md:text-base text-[#1E1E1E]">Innovation Challenge May 20 – 25, 2026</span>
            </div>
          </div>

          {/* Main Title Section */}
          <div className="text-center mb-16 relative">
            <div className="relative inline-block">
              <span className="text-4xl md:text-7xl font-anton uppercase text-[#1E1E1E]">Pre Career Fest</span>
              <HiOutlineRocketLaunch className="text-4xl md:text-7xl text-[#4285F4]" />
              <span className="text-4xl md:text-7xl font-anton uppercase text-[#1E1E1E]">Challenge</span>
              <div className="absolute -top-6 -right-6 bg-[#FAAB00] px-8 py-3 rounded-2xl text-white font-anton text-2xl md:text-3xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                2026
              </div>
            </div>
          </div>

          {/* GDG Banner */}
          <div className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/fav-icon.png" alt="GDG Logo" width={32} height={32} />
            <span className="font-bold text-lg md:text-2xl tracking-tight text-[#1E1E1E] uppercase">GDG on Campus University of Ilorin</span>
            <HiArrowRight className="text-2xl text-[#34A853] ml-2" />
          </div>

          {/* Description */}
          <p className="max-w-2xl text-center text-xl md:text-2xl font-bold text-[#1E1E1E] mt-12 mb-16 leading-tight">
            Build solutions that matter. Solve SDG problems using Google technology and get noticed by top technical recruiters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-xl">
            <button 
              onClick={() => setShowModal(true)}
              className="flex-1 bg-[#EA4336] text-white py-6 rounded-2xl font-anton text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-center"
            >
              Submit Project
            </button>
            <a href="#about" className="flex-1 bg-white text-[#1E1E1E] py-6 rounded-2xl font-anton text-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-center">
              Learn More
            </a>
          </div>

          {/* Social Proof/Subtext */}
          <div className="mt-16 flex items-center gap-4 text-[#1E1E1E] font-bold">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-200 overflow-hidden">
                  <Image src={`/fav-icon.png`} alt="User" width={48} height={48} className="p-2" />
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base">Join 500+ students already building.</p>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        title="Coming Soon!" 
        message="The submission portal isn't open yet. Keep building and check back during the challenge window!" 
      />
    </>
  );
};

export default Hero;
