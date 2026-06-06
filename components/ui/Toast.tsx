"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineInformationCircle } from "react-icons/hi2";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  title?: string;
  type?: "success" | "info";
}

const Toast = ({ 
  message, 
  isVisible, 
  onClose, 
  duration = 3000, 
  title = "Success!", 
  type = "success" 
}: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`fixed top-24 right-4 md:right-8 z-[110] flex items-center gap-4 text-white px-6 py-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-sm ${
            isSuccess ? "bg-[#34A853]" : "bg-[#4285F4]"
          }`}
        >
          <div className={`bg-white p-1.5 rounded-xl border-2 border-black flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
            isSuccess ? "text-[#34A853]" : "text-[#4285F4]"
          }`}>
            {isSuccess ? (
              <HiOutlineCheckCircle className="text-2xl" />
            ) : (
              <HiOutlineInformationCircle className="text-2xl" />
            )}
          </div>
          <div>
            <p className="font-anton uppercase tracking-wider text-lg text-black leading-none">{title}</p>
            <p className="font-bold text-xs text-white/95 mt-1">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
