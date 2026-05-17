import Image from "next/image"
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineCamera, 
  HiOutlineDocumentText, 
  HiOutlineBriefcase, 
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap
} from "react-icons/hi2";

const rewards = [
  {
    title: "Recruiter Assessment",
    desc: "Top projects reviewed by technical hiring professionals",
    icon: <HiOutlineMagnifyingGlass />,
    color: "#EA4336"
  },
  {
    title: "Professional Headshots",
    desc: "Show up online like you mean it",
    icon: <HiOutlineCamera />,
    color: "#4285F4"
  },
  {
    title: "CV Optimization",
    desc: "Your story, told right",
    icon: <HiOutlineDocumentText />,
    color: "#34A853"
  },
  {
    title: "LinkedIn Premium",
    desc: "Unlock the platform that unlocks careers",
    icon: <HiOutlineBriefcase />,
    color: "#FAAB00"
  },
  {
    title: "Internship Matching",
    desc: "Real roles. Real companies.",
    icon: <HiOutlineRocketLaunch />,
    color: "#EA4336"
  },
  {
    title: "Mentorship",
    desc: "1-on-1 guidance from industry professionals",
    icon: <HiOutlineAcademicCap />,
    color: "#4285F4"
  }
];

const Rewards = () => {
  return (
    <section id="rewards" className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/fav-icon.png" alt="GDG Logo" width={24} height={24} className="h-auto w-auto" />
            <span className="font-bold text-sm tracking-widest uppercase text-[#1E1E1E]">// rewards</span>
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
          Build. Get Noticed. <br /> Get Rewarded.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rewards.map((reward, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all group">
              <div className="text-6xl mb-8 flex items-center justify-center w-fit h-fit" style={{ color: reward.color }}>
                {reward.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-anton text-[#1E1E1E] uppercase leading-none">{reward.title}</h3>
                <p className="text-gray-500 font-bold text-lg leading-tight">{reward.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
