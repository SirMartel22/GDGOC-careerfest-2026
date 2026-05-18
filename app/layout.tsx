import type { Metadata } from "next";
import { Anton, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Analytics } from '@vercel/analytics/next';

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerFest 2026",
  description: "GDG on Campus University of Ilorin CareerFest 2026",
  icons: {
    icon: "/footer-logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className={`${anton.variable} ${outfit.variable} min-h-full flex flex-col`}>
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
