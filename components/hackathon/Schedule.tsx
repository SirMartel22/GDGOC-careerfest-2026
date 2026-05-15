import Image from "next/image";
import Link from "next/link"

const days = [
  {
    day: "May 20",
    type: "Workshop",
    title: "Pre-Challenge Workshop — Google AI & Cloud Tools",
    color: "#EA4336",
    bgColor: "#FFEBEE"
  },
  {
    day: "May 20",
    type: "Live",
    title: "Challenge Opens — Start Building",
    color: "#4285F4",
    bgColor: "#E3F2FD"
  },
  {
    day: "May 25",
    type: "Deadline",
    title: "Submission Deadline — Projects Due",
    color: "#34A853",
    bgColor: "#E8F5E9"
  },
  {
    day: "June 15",
    type: "Finale",
    title: "Winners Announced at Main CareerFest Day",
    color: "#FAAB00",
    bgColor: "#FFF8E1"
  }
];

const Schedule = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
              <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} />
              <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// timeline</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-anton text-[#1E1E1E] uppercase leading-[0.9] tracking-tighter">
              Mark Your <br /> Calendar.
            </h2>
          </div>

          {/* Workshop Callout */}
          <div className="max-w-md bg-[#E3F2FD] border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4285F4] opacity-10 rounded-full blur-2xl" />
            <h4 className="font-anton text-2xl text-[#4285F4] uppercase mb-2">Pre-Challenge Workshop · May 20</h4>
            <p className="text-[#1E1E1E] font-medium mb-6">
              Not sure where to start? Join the workshop before the challenge kicks off. Learn how to use Google AI and Cloud tools to build your solution from scratch.
            </p>
            <Link href="/workshop" className="font-bold text-[#4285F4] hover:underline underline-offset-4 decoration-2">
              → Register for Workshop
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {days.map((item, index) => (
            <div key={index} className="flex flex-col border-4 border-black rounded-[3rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all group h-full">
              <div className="p-10 space-y-8 flex-grow" style={{ backgroundColor: item.bgColor }}>
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-anton uppercase text-[#1E1E1E] leading-none">{item.day}</span>
                  <span className="px-6 py-2 rounded-full text-white text-sm font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ backgroundColor: item.color }}>
                    {item.type}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#1E1E1E] leading-tight">{item.title}</h3>
                <div className="pt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-gray-600 font-bold">
                    <span>⏰</span>
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 font-bold">
                    <span>⌛</span>
                    <span>4 Hours</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white border-t-4 border-black">
                <button className="w-full py-4 rounded-2xl text-white font-anton text-xl transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 uppercase" style={{ backgroundColor: item.color }}>
                  {item.type === "Virtual" ? "Set Reminder" : "Get Ticket"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
