"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import Image from "next/image";
import SearchBar from "./search";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
      )}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-8 lg:px-12">
        <div className="text-center text-white max-w-7xl w-full">
          {/* Refined Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <p
              className={`${inter.className} text-amber-200/90 text-xs md:text-sm uppercase tracking-[0.5em] font-light mb-6`}
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {subheading}
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
          </motion.div>

          {/* Elegant Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className={`${playfair.className} text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-[6rem] leading-[0.9] font-bold mb-16`}
            style={{
              background:"linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            {heading || (
              <>
                <span className="block tracking-[-0.02em]">LUXURY</span>
                <span className="block tracking-[-0.02em] text-amber-100/95">
                  ESTATES
                </span>
              </>
            )}
          </motion.h1>

          {/* Sophisticated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`${poppins.className} text-slate-200/90 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-20 font-light leading-relaxed tracking-wide`}
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Where exceptional properties meet{" "}
            <span className="text-amber-200/95 font-medium">
              discerning taste
            </span>
          </motion.p>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-2 border border-white/10">
              <SearchBar />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-4">
          <span
            className={`${inter.className} text-amber-200/70 text-[10px] uppercase tracking-[0.3em] font-light`}
            style={{
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            Explore Below
          </span>
          <div className="relative">
            <div className="w-px h-20 bg-gradient-to-b from-amber-200/50 via-white/30 to-transparent" />
            <motion.div
              animate={{ y: [0, 32, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-1 h-6 bg-gradient-to-b from-amber-200/80 to-white/60 absolute top-0 left-[-1.5px] rounded-full"
              style={{
                boxShadow: "0 0 8px rgba(251, 191, 36, 0.4)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
    </section>
  );
}
