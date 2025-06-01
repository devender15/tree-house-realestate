"use client";

import { PT_Serif } from "next/font/google";
import Image from "next/image";
import SearchBar from "./search";

const PTSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <section className="relative h-[90vh] overflow-hidden">
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
      ) : (
        imageUrl && (
          <Image
            src={imageUrl}
            alt="Hero Background"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl w-full space-y-6">
          <p className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-wide">
            {subheading}
          </p>
          <h1
            className={`${PTSerif.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold`}
          >
            {heading || "JOURNEY BEGINS"}
          </h1>

          {/* Search Bar */}
          <div className="mt-6 sm:mt-10 px-2 sm:px-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
