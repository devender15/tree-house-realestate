"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Montserrat } from "next/font/google";
import Image from "next/image";
import SearchBar from "./search";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

interface HeroSectionProps {
  videoUrl?: string;
  imageUrl?: string;
  heading?: string;
  subheading?: string;
}

export function HeroSection({
  videoUrl,
  imageUrl,
  heading,
  subheading = "WHERE YOUR HOME",
}: HeroSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Media */}
      {videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : imageUrl ? (
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          quality={100}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl w-full space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${montserrat.className} text-lg md:text-xl uppercase tracking-[0.2em] font-light text-gray-100`}
          >
            {subheading}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] font-bold max-w-3xl mx-auto`}
          >
            {heading || "JOURNEY BEGINS"}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-12 px-4 max-w-2xl mx-auto w-full"
          >
            <SearchBar />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white mt-2 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
