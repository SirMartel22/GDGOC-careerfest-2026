import Image from "next/image";
import Link from "next/link";

import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                {/* Logo Section */}
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="/footer-logo.png"
                        alt="GDG on Campus University of Ilorin"
                        width={300}
                        height={150}
                        className="h-auto w-auto max-w-[300px] md:max-w-[400px]"
                    />
                </div>

                {/* Irregular Design Placeholder */}
                <div className="w-full max-w-md flex justify-center py-4">
                    <div className="relative w-full h-12 flex items-center justify-center">
                        {/* Using a placeholder for the irregular design provided later */}
                        <div className="text-gray-500 font-mono text-sm tracking-widest flex items-center gap-4">
                            <span>*</span>
                            <span className="w-16 h-[1px] bg-gray-700"></span>
                            <span className="text-xl">🌐</span>
                            <span className="w-16 h-[1px] bg-gray-700"></span>
                            <span>*</span>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 md:gap-8">
                    <SocialIcon href="#" icon="twitter" />
                    <SocialIcon href="#" icon="instagram" />
                    <SocialIcon href="#" icon="facebook" />
                    <SocialIcon href="#" icon="linkedin" />
                </div>

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="italic text-sm text-gray-400 font-light tracking-wide">
                        Copyright © Technical Team, GDG on Campus Unilorin 2026
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        twitter: <FaXTwitter size={24} />,
        instagram: <FaInstagram size={24} />,
        facebook: <FaFacebookF size={24} />,
        linkedin: <FaLinkedinIn size={24} />,
    };

    return (
        <Link
            href={href}
            className="bg-white text-black p-5 rounded-full hover:bg-[#34A853] hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110"
            aria-label={icon}
        >
            {icons[icon]}
        </Link>
    );
};

export default Footer;
