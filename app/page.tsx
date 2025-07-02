"use client";
import { Award, Star, Users, TrendingUp } from "lucide-react";
import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import ExclusiveBanner from "@/components/exclusive-banner";
import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/enquiryForm";


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
    image: "/assets/resi_bg.png",
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
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSection videoUrl="/assets/hero_vdo.mp4" imageUrl="" heading="" />
      </section>

      {/* featured properties */}
      <section className="px-2 py-16 flex flex-col items-center justify-center lg:h-screen bg-slate-800 md:px-12 lg:px-25">
        <div className="w-full ">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Featured Properties
            </h1>
            <div className="w-16 h-0.5 bg-gray-400 mx-auto mt-4"></div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {featured?.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="group relative aspect-[5/5] overflow-hidden rounded- bg-white overflow-hidden transition-all duration-500 ease-out"
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
                  <div className="w-8 h-0.5 bg-white/60 mt-3 group-hover:w-12 transition-all duration-300"></div>
                </div>
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

      {/* === Parallax “Why Choose Us” Section === */}
      <section
        className="w-full relative bg-cover bg-center bg-fixed py-20"
        style={{ backgroundImage: `url('/assets/chooseUs_bg.png')` }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Why Choose Tree House Realty
            </h2>
            <div className="mx-auto mb-6 w-24 h-1 bg-gradient-to-r from-green-600 to-amber-500 rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              Our commitment to excellence sets us apart in the real estate
              industry. We build futures, create opportunities, and deliver
              lasting value for every client.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            {/* Trusted Expertise */}
            <div className="group text-center relative bg-green-50 rounded-xl border border-green-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-green-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-green-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                  Decades of combined experience with a proven track record of
                  successful transactions.
                </p>
              </div>
            </div>

            {/* Professional Excellence */}
            <div className="group text-center relative bg-blue-50 rounded-xl border border-blue-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
            <div className="group text-center relative bg-orange-50 rounded-xl border border-orange-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-amber-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
            <div className="group text-center relative bg-purple-50 rounded-xl border border-purple-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-8">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-purple-50 rounded-xl group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

          <div className="mt-16 pt-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Partner With Excellence
              </h3>
              <p className="text-lg text-slate-100 mb-8">
                At Tree House Realty, we understand that real estate represents
                more than transactions—it's about building futures, creating
                opportunities, and establishing lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Parallax “Contact Us” Section === */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 sm:py-20 lg:py-28 px-1 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
                {/* Left Info Panel */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contact Us
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                      Get in Touch with{" "}
                      <span className="block mt-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                        Tree House Realty
                      </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                      Whether you're looking to buy, sell, or just need guidance — our expert team is here to help. Drop
                      us a message or visit our office for personalized assistance.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8 pt-4">
                    {/* Visit Us */}
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-300">
                          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                          <div className="text-gray-300 leading-relaxed">
                            <p className="font-medium">905, DLF Corporate Tower – 1</p>
                            <p>Sector 74, Gurgaon, Haryana</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-300">
                          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-white">Email</h3>
                          <a
                            href="mailto:hello@treehouserealty.com"
                            className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                          >
                            hello@treehouserealty.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-300">
                          <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-white">Phone</h3>
                          <a
                            href="tel:+918001234567"
                            className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
                          >
                            +91 800-123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Form Panel */}
                <div className="lg:pl-8">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </section>
    </div>
  );
}
