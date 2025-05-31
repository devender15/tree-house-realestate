"use client";
import React from "react";
import { Search, Phone, Mail } from "lucide-react";

import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import Locations from "@/components/locations";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden">
        <HeroSection videoUrl="/assets/hero_vdo.mp4" imageUrl="" heading="" />
      </section>

      <PropertyCarousel />

      <Locations />

      <section className="py-20 md:py-32 bg-gradient-to-br from-black to-black/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
              Why Choose Tree House
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-medium font-poppins mt-5">
              We provide comprehensive real estate solutions with expert
              guidance and transparent processes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center bg-slate-800 rounded-xl px-6 py-10 shadow-md hover:shadow-xl transition duration-300 border border-white/10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-poppins">
                Expert Property Search
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-poppins">
                Advanced search tools to find your perfect property match.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-slate-800 rounded-xl px-6 py-10 shadow-md hover:shadow-xl transition duration-300 border border-white/10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-poppins">
                24/7 Support
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-poppins">
                Round-the-clock assistance for all your real estate needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-slate-800 rounded-xl px-6 py-10 shadow-md hover:shadow-xl transition duration-300 border border-white/10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 font-poppins">
                Transparent Process
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-poppins">
                Clear documentation and honest pricing with no hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
