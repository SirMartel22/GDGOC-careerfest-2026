"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Modal from "./Modal";
import DirectionModal from "./DirectionModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDirection, setShowDirection] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Register", href: "/#register" },
    { name: "Generate DP", href: "/get-dp" },
    { name: "Venue", href: "/#schedule" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#34A853]/90 backdrop-blur-md border-b border-[#2d9147]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/main-logo.png" 
                alt="CareerFest '26" 
                width={180} 
                height={50} 
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Middle (Centered) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors tracking-wider"
                style={{ 
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" 
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Section - Right */}
          <div className="hidden md:block">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-[#EA4336] text-white px-8 py-2.5 rounded-2xl font-anton text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide cursor-pointer"
            >
              Submit Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-3xl p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiXMark /> : <HiBars3BottomRight />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-0 left-0 right-0 bg-[#34A853] border-b border-[#2d9147] transition-all duration-300 overflow-hidden ${isOpen ? 'h-screen opacity-100 pt-20' : 'h-0 opacity-0'}`}>
          <div className="flex flex-col p-8 gap-8 items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-white font-anton uppercase text-3xl tracking-widest hover:text-[#FAAB00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setShowModal(true);
              }}
              className="w-full max-w-xs text-center bg-[#EA4336] text-white px-8 py-5 rounded-2xl font-anton text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide mt-4"
            >
              Submit Project
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Coming Soon!"
        message="The submission portal isn't open yet. Keep building and check back during the challenge window!"
      />

      <DirectionModal 
        isOpen={showDirection}
        onClose={() => setShowDirection(false)}
      />
    </>
  );
};

export default Navbar;
