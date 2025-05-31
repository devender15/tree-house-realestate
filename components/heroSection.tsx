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
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <Select>
                <SelectTrigger className="h-12 font-poppins text-black w-full">
                  <SelectValue
                    placeholder="Property Type"
                    className="text-black"
                  />
                </SelectTrigger>
                <SelectContent className="!text-black">
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12 font-poppins text-black w-full">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent className="text-black">
                  <SelectItem value="under-50">Under ₹50L</SelectItem>
                  <SelectItem value="50-1cr">₹50L – ₹1Cr</SelectItem>
                  <SelectItem value="1-2cr">₹1Cr – ₹2Cr</SelectItem>
                  <SelectItem value="above-2cr">Above ₹2Cr</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Location, Project, or Builder"
                className="h-12 font-poppins text-black w-full"
              />

              <Button className="h-12 bg-orange-500 hover:bg-orange-600 font-poppins cursor-pointer w-full">
                <Search className="w-4 h-4 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
