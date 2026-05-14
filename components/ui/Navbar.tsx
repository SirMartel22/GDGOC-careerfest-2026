import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          {/* Using a placeholder for the specific header logo */}
          <div className="flex items-center gap-2">
            <span className="text-[#FF9900] text-2xl font-mono">{"{"}</span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-gray-900 tracking-tight">Build with AI</span>
              <span className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold">University of Ilorin</span>
            </div>
            <span className="text-[#FF9900] text-2xl font-mono">{"}"}</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link 
            href="/get-dp" 
            className="text-[#FF9900] font-semibold text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#FF9900] hover:opacity-80 transition-opacity"
          >
            Get DP
          </Link>

          <Link 
            href="#speakers" 
            className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            Speakers
          </Link>
          <Link 
            href="#team" 
            className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
