"use client";

import { useState } from "react";
import { Search, Phone, Mail } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import Locations from "@/components/locations";

export default function HomePage() {
  const scrolled = useScroll(20);
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="min-h-screen bg-">
      <section className="relative h-auto overflow-hidden  ">
        <HeroSection
          videoUrl={""}
          imageUrl={"/assets/hero-bg.png"}
          heading={""}
        />
      </section>

      <PropertyCarousel />

      <Locations />

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-br from-black to-black/70 text-white">
        <div className="max-w-8xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4 font-poppins text-white">
              Why Choose Tree House
            </h2>
            <p className="text-gray-300 max-w-xl mt-5 mx-auto text-xl font-medium font-poppins">
              We provide comprehensive real estate solutions with expert
              guidance and transparent processes.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-45 ">
            {/* Feature 1 */}
            <div className="text-center bg-[#1E293B] rounded-lg px-8 py-10 shadow-xl hover:shadow-2xl transition duration-300 border border-white/10">
              <div className="w-18 h-18 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white font-poppins">
                Expert Property Search
              </h3>
              <p className="text-gray-300 font-poppins text-lg leading-6 mt-5">
                Advanced search tools to find your perfect property match.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-[#1E293B] rounded-lg px-8 py-10 shadow-xl hover:shadow-2xl transition duration-300 border border-white/10">
              <div className="w-18 h-18 bg-orange-500  rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white font-poppins">
                24/7 Support
              </h3>
              <p className="text-gray-300 font-poppins text-lg leading-6 mt-5">
                Round-the-clock assistance for all your real estate needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-[#1E293B] rounded-lg px-8 py-10 shadow-xl hover:shadow-2xl transition duration-300 border border-white/10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white font-poppins">
                Transparent Process
              </h3>
              <p className="text-gray-300 font-poppins text-lg leading-6 mt-5">
                Clear documentation and honest pricing with no hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
