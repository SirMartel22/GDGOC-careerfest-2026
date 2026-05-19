"use client";

import { HiXMark, HiOutlineRocketLaunch } from "react-icons/hi2";
import { useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  children?: ReactNode;
  maxWidth?: string;
}

const Modal = ({ isOpen, onClose, title = "", message = "", children, maxWidth = "max-w-lg" }: ModalProps) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-12 ${maxWidth} w-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative max-h-[85vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-3xl hover:scale-110 transition-transform z-10"
            >
              <HiXMark />
            </button>

            {children ? (
              <div className="pt-4">
                {children}
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-[#FAAB00] border-4 border-black rounded-2xl mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <HiOutlineRocketLaunch className="text-4xl text-black" />
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
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
