"use client";

import { HiXMark } from "react-icons/hi2";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal = ({ isOpen, onClose, title, message }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transform transition-all animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-3xl hover:scale-110 transition-transform"
        >
          <HiXMark />
        </button>

        <div className="space-y-6 text-center">
          <div className="w-20 h-20 bg-[#FAAB00] border-4 border-black rounded-2xl mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-4xl">🚀</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-anton uppercase leading-none tracking-tight">
            {title}
          </h2>
          
          <p className="text-xl font-bold text-gray-600 leading-relaxed">
            {message}
          </p>

          <button 
            onClick={onClose}
            className="w-full bg-[#EA4336] text-white py-5 rounded-2xl font-anton text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
