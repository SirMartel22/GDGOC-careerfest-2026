import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#34A853] backdrop-blur-md border-b border-[#2d9147]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/main-logo.png" 
            alt="CareerFest '26" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors">About</Link>
          <Link href="#faq" className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors">FAQ</Link>
          <Link href="/get-dp" className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors">Generate DP</Link>
          <Link href="/projects" className="text-white hover:text-[#FAAB00] font-anton uppercase text-lg transition-colors">View Submissions</Link>
          
          <Link 
            href="/submit" 
            className="bg-[#EA4336] text-white px-8 py-2.5 rounded-full font-anton text-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide"
          >
            Submit Project →
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
