"use client";
import { Award, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import ExclusiveBanner from "@/components/exclusive-banner";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const featured = [
  {
    title: "Commercial",
    link: "/commercial",
    image: "/assets/commercial/bg.png",
  },
  {
    title: "Residensial",
    link: "/residential",
    image: "/assets/residential/bg.jpg",
  },
  {
    title: "Plots",
    link: "/plot",
    image: "/assets/plot/bg.jpg",
  },
];

const features = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description:
      "Decades of combined experience in real estate markets with a proven track record of successful transactions.",
  },
  {
    icon: Star,
    title: "Professional Excellence",
    description:
      "Industry-leading standards in service delivery, market analysis, and client relationship management.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Personalized service tailored to your specific needs, timeline, and investment objectives.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "Advanced market research and analytics to ensure optimal investment decisions and timing.",
  },
];

export default function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSection videoUrl="/assets/hero_vdo.mp4" imageUrl="" heading="" />
      </section>

      {/* featured properties */}
      <section className="px-6 py-16 lg:h-screen bg-white md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto lg:mt-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 tracking-tight">
              Featured Properties
            </h1>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-4"></div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {featured?.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-wide group-hover:translate-y-[-2px] transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Subtle indicator */}
                  <div className="w-8 h-0.5 bg-white/60 mt-3 group-hover:w-12 group-hover:bg-orange-400 transition-all duration-300"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/30 rounded-lg transition-colors duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ExclusiveBanner />

      {/* Property Carousel */}
      <section>
        <PropertyCarousel />
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              Why Choose Tree House Realty
            </h2>
            <div className="relative w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-green-600 to-amber-500 rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
              Our commitment to excellence sets us apart in the real estate
              industry
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {/* Trusted Expertise */}
            <div className="group text-center relative bg-white rounded-xl border border-green-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="relative p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-green-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-green-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                  Trusted Expertise
                </h3>
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  Decades of combined experience with proven track record of
                  successful transactions.
                </p>
              </div>
            </div>

            {/* Professional Excellence */}
            <div className="group text-center relative bg-white rounded-xl border border-blue-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="relative p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                  Professional Excellence
                </h3>
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  Industry-leading standards in service delivery and client
                  relationship management.
                </p>
              </div>
            </div>

            {/* Client-Centric Approach */}
            <div className="group text-center relative bg-white rounded-xl border border-orange-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="relative p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-amber-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-amber-700 transition-colors duration-300">
                  Client-Centric Approach
                </h3>
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  Personalized service tailored to your specific needs and
                  investment objectives.
                </p>
              </div>
            </div>

            {/* Market Intelligence */}
            <div className="group text-center relative bg-white rounded-xl border border-purple-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="relative p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-purple-700 transition-colors duration-300">
                  Market Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed text-base mb-6">
                  Advanced research and analytics to ensure optimal investment
                  decisions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">
                Partner With Excellence
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                At Tree House Realty, we understand that real estate represents
                more than transactions—it's about building futures, creating
                opportunities, and establishing lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      

      
    </div>
  );
}
