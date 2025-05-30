"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { TabButton } from "@/components/tab-button";
import { useScroll } from "@/hooks/use-scroll";

import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";

export default function HomePage() {
  const scrolled = useScroll(20);
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen overflow-hidden">
        <HeroSection
          videoUrl={"/assets/hero.mp4"}
          imageUrl={""}
          heading={"Residential"}
        />
      </section>

      <PropertyCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">
              Why Choose Tree House
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
              We provide comprehensive real estate solutions with expert
              guidance and transparent processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">
                Expert Property Search
              </h3>
              <p className="text-gray-600 font-poppins">
                Advanced search tools to find your perfect property match
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">
                24/7 Support
              </h3>
              <p className="text-gray-600 font-poppins">
                Round-the-clock assistance for all your real estate needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">
                Transparent Process
              </h3>
              <p className="text-gray-600 font-poppins">
                Clear documentation and honest pricing with no hidden costs
              </p>
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
}
