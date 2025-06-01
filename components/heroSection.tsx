"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30  to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4 pt-16">
          <p className="text-2xl font-serif font-semibold mb-4 tracking-wider">
            {subheading}
          </p>
          <h1
            className={`${PTSerif.className} text-4xl md:text-7xl mb-8 leading-tight`}
          >
            {heading || "JOURNEY  BEGINS"}
          </h1>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
