"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { HiOutlineClock, HiMapPin } from "react-icons/hi2";
import Modal from "../ui/Modal";
import DirectionModal from "../ui/DirectionModal";

const days = [
  {
    day: "May 20",
    type: "Workshop & Kickoff",
    title: "Pre-Challenge Workshop & Challenge Opens",
    time: "1:00 PM",
    color: "#4285F4",
    bgColor: "#E3F2FD",
    actionType: "link",
    link: "https://bit.ly/Pre-CareerFest26"
  },
  {
    day: "May 25",
    type: "Deadline",
    title: "Submission Deadline — Projects Due",
    time: "11:59 PM",
    color: "#34A853",
    bgColor: "#E8F5E9",
    actionType: "modal",
    modalType: "submission"
  },
  {
    day: "June 15",
    type: "Finale",
    title: "Winners Announced at Main CareerFest Day",
    time: "10:00 AM",
    color: "#FAAB00",
    bgColor: "#FFF8E1",
    actionType: "modal",
    modalType: "finale"
  }
];

const Schedule = () => {
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showFinaleModal, setShowFinaleModal] = useState(false);
  const [showDirection, setShowDirection] = useState(false);

  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
            <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
            <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// timeline</span>
          </div>
          <Image
            src="/solid-shape.png"
            alt="Design Shape"
            width={400}
            height={30}
            className="h-auto opacity-80 hidden md:block w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter">
              Mark Your <br /> Calendar.
            </h2>
          </div>

          {/* Workshop Callout */}
          <div className="max-w-md bg-[#E3F2FD] border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4285F4] opacity-10 rounded-2xl blur-2xl" />
            <div className="space-y-8">
              <p className="text-[#1E1E1E] text-xl leading-tight">
                <span className="font-bold">Pre-Career Fest Venue:</span> <span className="font-medium text-gray-600">Mooth Court, Faculty of Law, University of Ilorin</span>
              </p>
              <div className="flex flex-row items-center gap-4">
                <button
                  onClick={() => setShowDirection(true)}
                  className=" bg-white text-[#1E1E1E] px-4 py-3 rounded-xl font-anton text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <HiMapPin /> Direct Me
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {days.map((item, index) => (
            <div key={index} className="flex flex-col border-4 border-black rounded-[3rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all group min-h-[380px]">
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between" style={{ backgroundColor: item.bgColor }}>
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-5xl font-anton uppercase text-[#1E1E1E] leading-none">{item.day}</span>
                    <span className="px-6 py-2 rounded-2xl text-white text-sm font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: item.color }}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E1E1E] leading-tight">{item.title}</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-gray-600 font-bold">
                    <HiOutlineClock className="text-xl" />
                    <span>{item.time || "10:00 AM"}</span>
                  </div>
                  {item.day !== "May 25" && (
                    <div className="flex items-center gap-2 text-gray-600 font-bold">
                      <HiOutlineClock className="text-xl" />
                      <span>4 Hours</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 bg-white border-t-4 border-black">
                {item.actionType === "link" ? (
                  <Link
                    href={item.link || "#"}
                    target="_blank"
                    className="block w-full py-4 text-center rounded-2xl text-white font-anton text-xl transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 uppercase"
                    style={{ backgroundColor: item.color }}
                  >
                    RSVP
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      if (item.modalType === "submission") setShowSubmissionModal(true);
                      if (item.modalType === "finale") setShowFinaleModal(true);
                    }}
                    className="w-full py-4 rounded-2xl text-white font-anton text-xl transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 uppercase"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.modalType === "submission" ? "Submit Project" : "RSVP"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={showSubmissionModal}
        onClose={() => setShowSubmissionModal(false)}
        title="Coming Soon!"
        message="The submission portal isn't open yet. Check back during the challenge window!"
      />

      <Modal
        isOpen={showFinaleModal}
        onClose={() => setShowFinaleModal(false)}
        title="Coming Soon!"
        message="Registration for the Main Career Fest is coming soon. Stay tuned for official announcements!"
      />

      <DirectionModal
        isOpen={showDirection}
        onClose={() => setShowDirection(false)}
      />
    </section>
  );
};

export default Schedule;
