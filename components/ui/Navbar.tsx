"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Modal from "./Modal";
import DirectionModal from "./DirectionModal";
import SubmitForm from "../submit/SubmitForm";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDirection, setShowDirection] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Generate DP", href: "/get-dp" },
    { name: "Venue", href: "/#schedule" },
  ];

  const REGISTRATION_URL = "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-ilorin-ilorin-nigeria-presents-careerfest-2026-career-ready-whats-next/";

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
            {navLinks.map((link) => {
              if (link.name === "Venue") {
                return (
                  <button 
                    key={link.name}
                    onClick={() => setShowDirection(true)}
                    className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors tracking-wider bg-transparent border-none cursor-pointer p-0"
                    style={{ 
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" 
                    }}
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors tracking-wider"
                  style={{ 
                    textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" 
                  }}
                  onClick={(e) => {
                    if (link.name === "Home" && (pathname === "/get-dp" || pathname === "/")) {
                      e.preventDefault();
                      setShowComingSoon(true);
                    }
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Section - Right */}
          <div className="hidden md:block">
            <a 
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#EA4336] text-white px-8 py-2.5 rounded-2xl font-anton text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide cursor-pointer"
            >
              RSVP
            </a>
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
            {navLinks.map((link) => {
              if (link.name === "Venue") {
                return (
                  <button 
                    key={link.name}
                    onClick={() => {
                      setIsOpen(false);
                      setShowDirection(true);
                    }}
                    className="text-white font-anton uppercase text-3xl tracking-widest hover:text-[#FAAB00] transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-white font-anton uppercase text-3xl tracking-widest hover:text-[#FAAB00] transition-colors"
                  onClick={(e) => {
                    if (link.name === "Home" && (pathname === "/get-dp" || pathname === "/")) {
                      e.preventDefault();
                      setIsOpen(false);
                      setShowComingSoon(true);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <a 
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs text-center bg-[#EA4336] text-white px-8 py-5 rounded-2xl font-anton text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide mt-4 cursor-pointer"
            >
              RSVP
            </a>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-anton uppercase leading-none tracking-tight">
              Submit Your Project
            </h2>
            <p className="text-gray-500 font-bold">
              Show us what you&apos;ve built! Provide your details below.
            </p>
          </div>
          <SubmitForm 
            className="space-y-4" 
            onSuccess={() => setShowModal(false)} 
          />
        </div>
      </Modal>

      <DirectionModal 
        isOpen={showDirection}
        onClose={() => setShowDirection(false)}
      />

      <Modal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        title="Coming Soon"
        message="Check back later!"
      />
    </>
  );
};

export default Navbar;
