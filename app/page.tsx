"use client";
import { Search, Phone, Mail, ChevronRight, Shield, Award, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import Locations from "@/components/locations";
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
      <section className="px-6 py-16 bg-slate-50/50 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 tracking-tight">
              Featured Properties
            </h1>
            <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-4"></div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
      <section className="">
        <PropertyCarousel />
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 overflow-hidden bg-slate-25">
        {/* Primary Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-white to-slate-100/20"></div>

        {/* Hexagonal Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
            radial-gradient(circle at 50% 50%, #64748b 1.5px, transparent 1.5px),
            radial-gradient(circle at 0% 50%, #64748b 1px, transparent 1px),
            radial-gradient(circle at 100% 50%, #64748b 1px, transparent 1px)
          `,
            backgroundSize: "120px 104px, 120px 104px, 120px 104px",
            backgroundPosition: "0 0, 60px 52px, -60px 52px",
          }}
        ></div>

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(100, 116, 139, 0.3) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.3) 0.5px, transparent 0.5px)
          `,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Organic Shapes */}
        <div className="absolute top-10 left-[10%] w-96 h-96 bg-gradient-to-br from-slate-100/10 to-slate-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-gradient-to-br from-slate-200/8 to-slate-300/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-[10%] w-64 h-64 bg-gradient-to-br from-slate-150/6 to-slate-200/3 rounded-full blur-2xl"></div>

        {/* Orange Accent Shapes - Very Subtle */}
        <div className="absolute top-1/4 left-[20%] w-32 h-32 bg-gradient-to-br from-orange-100/8 to-orange-200/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-[25%] w-40 h-40 bg-gradient-to-br from-orange-50/6 to-orange-100/3 rounded-full blur-3xl"></div>

        {/* Diagonal Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.003]"
          style={{
            backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(100, 116, 139, 0.1) 40px,
              rgba(100, 116, 139, 0.1) 41px
            )
          `,
          }}
        ></div>

        <div className="relative mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <div className="relative w-16 h-0.5 mx-auto mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group text-center relative"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Card Background with Subtle Pattern */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-slate-200/20 shadow-sm group-hover:shadow-lg group-hover:bg-white/60 group-hover:border-orange-200/20 transition-all duration-300"></div>

                  {/* Card Pattern */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-[0.01] group-hover:opacity-[0.02] transition-opacity duration-300"
                    style={{
                      backgroundImage: `
                      radial-gradient(circle at 25% 25%, #64748b 0.8px, transparent 0.8px),
                      radial-gradient(circle at 75% 75%, #64748b 0.5px, transparent 0.5px)
                    `,
                      backgroundSize: "30px 30px, 20px 20px",
                      backgroundPosition: "0 0, 15px 15px",
                    }}
                  ></div>

                  <div className="relative p-8">
                    {/* Icon Container */}
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      {/* Icon Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/60 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300"></div>

                      {/* Orange Accent Ring - Only on Hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-orange-200/40 transition-colors duration-300"></div>

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-slate-600 group-hover:text-slate-700 transition-colors duration-300" />
                      </div>

                      {/* Subtle Orange Glow on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 to-orange-200/0 group-hover:from-orange-100/10 group-hover:to-orange-200/5 rounded-full transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-medium mb-4 text-slate-700 group-hover:text-slate-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                  {/* Orange Accent Dot */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-orange-400/0 group-hover:bg-orange-400/60 rounded-full transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      {/* <section className="bg-slate-50">
        <Locations />
      </section> */}



      

    </div>
  );
}
