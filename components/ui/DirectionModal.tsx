"use client";

import { useState } from "react";
import { HiXMark, HiMapPin } from "react-icons/hi2";

interface DirectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DirectionModal = ({ isOpen, onClose }: DirectionModalProps) => {
  const [location, setLocation] = useState("");

  const handleDirectMe = () => {
    const destination = "University of Ilorin";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(location)}&destination=${encodeURIComponent(destination)}`;
    window.open(mapsUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl hover:scale-110 transition-transform"
        >
          <HiXMark />
        </button>

        <div className="space-y-8">
          <div className="w-20 h-20 bg-[#34A853] border-4 border-black rounded-2xl mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white">
            <HiMapPin size={40} />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-anton uppercase leading-none tracking-tight">
                Find the Venue
            </h2>
            <p className="text-gray-500 font-bold">Enter your starting point to get directions.</p>
          </div>

          <div className="space-y-4">
            <label className="block font-anton text-xl uppercase text-[#1E1E1E]">Present Location</label>
            <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Tanke, Ilorin"
                className="w-full px-6 py-4 rounded-xl border-4 border-black focus:outline-none focus:bg-gray-50 transition-all font-bold text-lg"
            />
          </div>

          <button 
            onClick={handleDirectMe}
            className="w-full bg-[#4285F4] text-white py-5 rounded-2xl font-anton text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
          >
            Direct me to the venue
          </button>
          
          <p className="text-center text-sm font-bold text-gray-400 italic">
            Venue: University of Ilorin, Main Campus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectionModal;
