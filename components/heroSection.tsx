"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import Image from "next/image";
import SearchBar from "./search";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-playfair",
// });

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
  subheading = "DISCOVER YOUR PERFECT",
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
          Problem while showing the media.
        </video>
      ) : imageUrl ? (
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Luxury Real Estate"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
          quality={100}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      )}

      {/* Black Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90  to-black/0" />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" /> */}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-8 lg:px-12">
        <div className="text-center text-white max-w-7xl w-full">
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <p
              className={`${inter.className} text-gray-300 text-sm md:text-base uppercase tracking-[0.4em] font-light`}
            >
              {subheading}
            </p>
            <div className="w-32 h-px bg-white/30 mx-auto mt-6" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className={`${poppins.className}  text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.85] font-bold mb-12 text-white`}
          >
            {heading || (
              <>
                <span className="block">LUXURY ESTATES</span>
              </>
            )}
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`${poppins.className} text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-20 font-light leading-relaxed tracking-wide`}
          >
            Where exceptional properties meet discerning taste
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto"
          >
            <SearchBar />
          </motion.div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3">
          <span
            className={`${inter.className} text-white/60 text-xs uppercase tracking-[0.2em] font-light`}
          >
            Explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent relative">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-px h-4 bg-white/80 absolute top-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
