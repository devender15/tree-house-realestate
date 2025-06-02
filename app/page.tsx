"use client";
import React from "react";
import { Search, Phone, Mail } from "lucide-react";
import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import Locations from "@/components/locations";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSection videoUrl="/assets/hero_vdo.mp4" imageUrl="" heading="" />
      </section>

      {/* Property Carousel */}
      <section className="">
        <PropertyCarousel />
      </section>

      {/* Locations */}
      <section className="">
        <Locations />
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-gray-900">
              Why Choose Tree House
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-orange-600 text-lg md:text-xl font-medium font-poppins">
              We provide comprehensive real estate solutions with expert
              guidance and transparent processes.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-tr from-orange-500 to-orange-600">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-900">
                Expert Property Search
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-poppins">
                Advanced search tools to find your perfect property match with
                personalized recommendations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-tr from-orange-500 to-orange-600">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-poppins">
                Dedicated assistance anytime you need it for all your real
                estate requirements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-tr from-orange-500 to-orange-600">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-poppins text-gray-900">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-poppins">
                Clear documentation and honest pricing with no hidden costs
                throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
