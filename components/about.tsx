"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import {
  Building2,
  Handshake,
  Leaf,
  Search,
  TrendingUp,
  CheckCircle,
  Shield,
  Award,
  Users,
  Target,
  ArrowRight,
  Star,
  Eye,
  Zap,
  Camera,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left - rect.width / 2)
    mouseY.set(event.clientY - rect.top - rect.height / 2)
  }

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div ref={containerRef} className="bg-slate-50 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23334155' strokeWidth='1'%3E%3Cpath d='M0 0h120v120H0z'/%3E%3Cpath d='M0 30h120M0 60h120M0 90h120'/%3E%3Cpath d='M30 0v120M60 0v120M90 0v120'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements - Hidden on mobile for performance */}
      <motion.div
        style={{ y: parallaxY1 }}
        className="hidden md:block fixed top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        style={{ y: parallaxY2 }}
        className="hidden md:block fixed top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-2xl pointer-events-none"
      />

      {/* Revolutionary Hero Section - Fully Responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Enhanced Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            >
              {/* Animated Badge - Responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                </motion.div>
                <span className="text-slate-700 font-semibold tracking-wider uppercase">
                  <span className="hidden sm:inline">Professional Real Estate Solutions</span>
                  <span className="sm:hidden">Real Estate Excellence</span>
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-amber-500" />
                </motion.div>
              </motion.div>

              {/* Dynamic Title - Fully Responsive */}
              <div className="space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                >
                  <span className="text-orange-600">Tree House</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="block text-slate-800 mt-1 md:mt-2"
                  >
                    Realty
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "6rem" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-1 md:h-1.5 bg-orange-600 rounded-full mx-auto lg:mx-0"
                />

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
                >
                  Professional real estate solutions built on trust, expertise, and integrity
                </motion.p>
              </div>

              {/* Interactive Buttons - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-slate-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-slate-700 transition-all duration-300 shadow-lg relative overflow-hidden text-sm md:text-base"
                >
                  <Link href={"/enquiry"} className="relative z-10 flex items-center justify-center gap-2">
                    <span className="hidden sm:inline">Schedule Consultation</span>
                    <span className="sm:hidden">Get Consultation</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/"
                    className="group border-2 border-slate-300 text-slate-700 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:border-slate-400 hover:bg-slate-100 transition-all duration-300 relative overflow-hidden inline-flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
                  >
                    <span className="relative z-10">View Properties</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Showcase - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="lg:col-span-6 relative order-1 lg:order-2"
              onMouseMove={handleMouseMove}
            >
              {/* Main Image Container - Responsive Height */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] perspective-1000">
                {/* Background Glow - Hidden on mobile */}
                <motion.div
                  style={{ x: x, y: y }}
                  className="hidden md:block absolute inset-0 bg-gradient-to-br from-orange-200/30 via-slate-200/30 to-blue-200/30 rounded-3xl blur-3xl"
                />

                {/* Responsive Image Grid */}
                <div className="relative grid grid-cols-8 grid-rows-8 md:grid-cols-12 md:grid-rows-12 gap-2 md:gap-3 h-full">
                  {/* Large Featured Image - Responsive Spans */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="col-span-8 row-span-5 md:col-span-8 md:row-span-7 relative rounded-2xl md:rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
                  >
                    <Image
                      src="/assets/plot/bg.jpg"
                      alt="Premium Plot Development"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute bottom-3 md:bottom-6 left-3 md:left-6 text-white"
                    >
                      <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                        <span className="hidden sm:inline">Premium Plot Development</span>
                        <span className="sm:hidden">Premium Plots</span>
                      </h3>
                      <p className="text-slate-200 text-xs md:text-sm mb-2 md:mb-3">
                        <span className="hidden md:inline">Strategic land acquisition and development</span>
                        <span className="md:hidden">Prime locations</span>
                      </p>
                      <div className="hidden md:flex items-center gap-2 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>Prime location analysis</span>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-2 md:top-4 right-2 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Camera className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Small Images - Responsive Layout */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    className="col-span-8 row-span-3 md:col-span-4 md:row-span-4 relative rounded-md md:rounded-md overflow-hidden shadow-xl group cursor-pointer"
                  >
                    <Image
                      src="/assets/plot/bg.jpg"
                      alt="Agricultural Properties"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                    <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-white">
                      <p className="text-xs md:text-sm font-bold">Agricultural</p>
                      <p className="text-xs text-slate-200 hidden md:block">Farmland & Rural Estates</p>
                    </div>
                  </motion.div>

                  {/* Mobile: Stack remaining images, Desktop: Grid layout */}
                  <div className="h-40 col-span-8 md:col-span-4 border-red-500 space-y-2 md:space-y-0 md:grid md:grid-rows-8 md:gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateX: -5 }}
                      className="h-24 md:h-auto md:row-span-3 relative rounded-xl md:rounded-md overflow-hidden shadow-xl group cursor-pointer"
                    >
                      <Image
                        src="/assets/commercial/bg.png"
                        alt="Commercial Real Estate"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-white">
                        <p className="text-xs md:text-sm font-bold">Commercial</p>
                        <p className="text-xs text-slate-200 hidden md:block">Business Properties</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                      className="h-32 md:h-auto md:row-span-5 relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                    >
                      <Image
                        src="/assets/residential/bg.jpg"
                        alt="Strategic Consulting"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                        <p className="text-sm md:text-lg font-bold">
                          <span className="hidden md:inline">Strategic Consulting</span>
                          <span className="md:hidden">Consulting</span>
                        </p>
                        <p className="text-xs md:text-sm text-slate-200 hidden md:block">Expert advisory services</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

            
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive About Section - Responsive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          style={{ y: parallaxY3 }}
          className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-slate-50 rounded-full blur-3xl opacity-30"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            {/* Left Images Column - Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4 md:space-y-6 order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="/assets/hero_thumb.jpg"
                  alt="Tree House Realty Excellence"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                    <span className="hidden md:inline">Excellence in Real Estate</span>
                    <span className="md:hidden">Real Estate Excellence</span>
                  </h3>
                  <p className="text-slate-200 text-sm">Our promise to every client</p>
                </motion.div>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl md:rounded-2xl p-4 md:p-6 text-center"
                >
                  <Handshake className="w-6 h-6 md:w-8 md:h-8 text-slate-600 mx-auto mb-2 md:mb-3" />
                  <p className="text-slate-800 font-bold text-sm md:text-base">Trust</p>
                  <p className="text-slate-600 text-xs md:text-sm">Built on integrity</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl md:rounded-2xl p-4 md:p-6 text-center"
                >
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-orange-600 mx-auto mb-2 md:mb-3" />
                  <p className="text-orange-800 font-bold text-sm md:text-base">Expertise</p>
                  <p className="text-orange-600 text-xs md:text-sm">Professional service</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Column - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-slate-100 rounded-full"
                >
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                  <span className="text-slate-700 font-medium text-sm md:text-base">About Our Company</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                    Our Company
                  </span>
                </h2>

                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Tree House Realty stands as a premier real estate firm dedicated to delivering exceptional property
                    solutions for discerning clients and strategic investors. Our commitment to excellence, combined
                    with deep market expertise, ensures that every transaction is handled with the utmost
                    professionalism and care.
                  </p>
                  <p>
                    We specialize in connecting clients with premium land acquisitions, agricultural properties, and
                    commercial real estate opportunities that align with their vision and investment objectives.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-slate-50 border-l-4 border-slate-600 p-4 md:p-6 rounded-r-lg"
                >
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-slate-400 mb-2 md:mb-3" />
                  <p className="text-slate-800 text-base md:text-lg font-medium italic">
                    "Excellence in real estate isn't just our standard—it's our promise to every client we serve."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section - Responsive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <motion.div
          style={{ y: parallaxY1 }}
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-100/30 to-white/30 backdrop-blur-sm"
        />
        <div className="relative max-w-4xl lg:max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl md:rounded-2xl mb-6 md:mb-8 shadow-2xl">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8">
              Our Mission
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              To deliver unparalleled real estate services through strategic expertise, market intelligence, and
              unwavering commitment to client success. We empower informed decision-making in property acquisition,
              development, and investment across residential, commercial, and agricultural sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Fully Responsive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive real estate solutions tailored to your unique requirements
            </p>
          </motion.div>

          {/* Service Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Building2,
                title: "Premium Plot Development",
                desc: "Strategic land acquisition and development opportunities in prime locations with exceptional growth potential.",
                features: ["Prime location analysis", "Investment-grade properties", "Custom development solutions"],
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                iconColor: "text-slate-600",
              },
              {
                icon: Leaf,
                title: "Agricultural Properties",
                desc: "Specialized expertise in agricultural real estate, from productive farmland to luxury rural estates.",
                features: ["Soil quality assessment", "Water rights verification", "Agricultural zoning expertise"],
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                iconColor: "text-green-600",
              },
              {
                icon: Building2,
                title: "Commercial Real Estate",
                desc: "Full-service commercial property solutions for businesses and institutional investors.",
                features: ["Market analysis reports", "Investment property evaluation", "Commercial lease negotiation"],
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                iconColor: "text-purple-600",
              },
              {
                icon: Search,
                title: "Strategic Consulting",
                desc: "Expert advisory services for complex real estate transactions and portfolio optimization.",
                features: ["Due diligence services", "Market trend analysis", "Investment strategy planning"],
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
                iconColor: "text-amber-600",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${service.bgColor} rounded-xl md:rounded-2xl p-6 md:p-8 border ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 w-fit mb-4 md:mb-6 shadow-sm">
                  <service.icon className={`w-6 h-6 md:w-8 md:h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-slate-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.desc}</p>
                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Responsive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 shadow-2xl border border-slate-200">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Why Choose <span className="text-slate-600">Tree House Realty</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Our commitment to excellence sets us apart in the real estate industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Trusted Expertise",
                  desc: "Decades of combined experience in real estate markets with a proven track record of successful transactions.",
                },
                {
                  icon: Award,
                  title: "Professional Excellence",
                  desc: "Industry-leading standards in service delivery, market analysis, and client relationship management.",
                },
                {
                  icon: Users,
                  title: "Client-Centric Approach",
                  desc: "Personalized service tailored to your specific needs, timeline, and investment objectives.",
                },
                {
                  icon: TrendingUp,
                  title: "Market Intelligence",
                  desc: "Advanced market research and analytics to ensure optimal investment decisions and timing.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 md:p-6 group cursor-pointer"
                >
                  <div className="bg-slate-100 rounded-xl md:rounded-2xl p-3 md:p-4 w-fit mx-auto mb-4 md:mb-6 group-hover:bg-slate-200 transition-colors">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action - Responsive */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-200/30 to-orange-200/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-xl md:rounded-2xl mb-6 md:mb-8 shadow-2xl"
              >
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                Partner With <span className="text-slate-300">Excellence</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto">
                At Tree House Realty, we understand that real estate represents more than transactions—it's about
                building futures, creating opportunities, and establishing lasting value. Let our expertise guide your
                next strategic real estate decision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-800 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg hover:bg-slate-100 transition-colors duration-200 shadow-lg"
                >
                  <Link
                  href="/enquiry"
                  >
                  Schedule Consultation
                  </Link>
                </motion.button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/"
                    className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg hover:bg-white hover:text-slate-800 transition-colors duration-200 inline-block w-full sm:w-auto text-center"
                  >
                    View Properties
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
