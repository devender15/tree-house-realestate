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

interface HeroSectionProps {
  videoUrl?: string;
  imageUrl?: string;
  heading?: string;
  subheading?: string;
}

export function HeroSection({
  videoUrl,
  imageUrl,
  heading = "START THEIR JOURNEY",
  subheading = "WHERE YOUR DREAMS",
}: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] overflow-hidden">
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
          <img
            src={imageUrl}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4 font-cinzel pt-16">
          <p className="text-lg mb-4 tracking-wider font-cinzel">
            {subheading}
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight font-cinzel">
            {heading}
          </h1>
          <p className="text-xl mb-12 opacity-90 font-poppins">
            Explore premium properties across the city with our expert guidance
          </p>

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
                  <SelectItem value="50-1cr">₹50L - ₹1Cr</SelectItem>
                  <SelectItem value="1-2cr">₹1Cr - ₹2Cr</SelectItem>
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
