"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { ourProperties } from "@/data/weown"
import Image from "next/image"
import { MapPin, Mail, Phone, Award, Building2, TrendingUp, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"

// Reusable animation wrapper
const AnimatedCard = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{
        delay: Math.min(index * 0.07, 0.4),
        type: "spring",
        stiffness: 80,
        damping: 14,
        mass: 0.5,
      }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

const Owned = () => {
  return (
    <section className="relative min-h-screen bg-slate-50 py-24 md:py-32 overflow-hidden">
      {/* Background Line Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23334155' strokeWidth='1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 20h100M0 40h100M0 60h100M0 80h100'/%3E%3Cpath d='M20 0v100M40 0v100M60 0v100M80 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Subtle Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/80 shadow-sm">
              <Building2 className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 text-sm font-semibold tracking-wider uppercase">Premium Portfolio</span>
              <Award className="w-4 h-4 text-slate-500" />
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
              Our Owned
              <span className="block text-slate-600 mt-2">Properties</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Exceptional real estate investments meticulously curated for sophisticated investors seeking premium
              opportunities in today's dynamic market
            </p>
          </motion.div>
        </div>

        {/* Property Grid - Improved Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {ourProperties.map((property, index) => (
            <AnimatedCard key={property.id} index={index}>
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col h-full">
                {/* Property Image - Fixed Height */}
                <div className="relative w-full h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200/80 shadow-sm">
                      <Star className="w-3 h-3 text-slate-600 fill-slate-600" />
                      <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Premium</span>
                    </div>
                  </div>

                  {/* Title & Location - Better Positioning */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight drop-shadow-lg line-clamp-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-white/95 drop-shadow line-clamp-1">
                        {property.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body - Flexible Layout */}
                <div className="p-6 lg:p-7 flex flex-col flex-grow bg-white/50">
                  {/* Price & Area - Consistent Height */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-100/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 text-center">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Area</p>
                        <p className="text-slate-800 text-lg font-bold">{property.area}</p>
                      </div>
                      <div className="bg-slate-100/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 text-center">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Market Price</p>
                        <p className="text-slate-800 text-lg font-bold">{property.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features - Flexible Height */}
                  <div className="mb-6 flex-grow">
                    <div className="flex items-center gap-2 mb-5">
                      <TrendingUp className="w-5 h-5 text-slate-600" />
                      <h4 className="text-lg font-bold text-slate-800 tracking-tight">Key Features</h4>
                    </div>
                    <div className="space-y-3">
                      {property.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start group/item">
                          <div className="w-6 h-6 bg-slate-200/80 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 mt-0.5 border border-slate-300/60 group-hover/item:bg-slate-300/80 transition-colors flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                          </div>
                          <span className="text-slate-700 leading-relaxed text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                      {property.features.length > 4 && (
                        <div className="text-slate-500 text-sm font-medium ml-10">
                          +{property.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact Section - Fixed at Bottom */}
                  <div className="bg-slate-100/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/80 mt-auto">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center border-2 border-slate-300/50 shadow-sm flex-shrink-0">
                        <span className="text-white text-lg font-bold">{property.contact.agent.charAt(0)}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-slate-800 font-bold text-base truncate">{property.contact.agent}</p>
                        <p className="text-slate-600 text-sm font-semibold">Senior Property Consultant</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 hover:bg-white/90 transition-colors group/contact">
                        <div className="w-9 h-9 bg-slate-200/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-300/60 flex-shrink-0">
                          <Mail className="w-4 h-4 text-slate-600" />
                        </div>
                        <span className="text-sm text-slate-700 font-semibold truncate">{property.contact.email}</span>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 hover:bg-white/90 transition-colors group/contact">
                        <div className="w-9 h-9 bg-slate-200/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-slate-300/60 flex-shrink-0">
                          <Phone className="w-4 h-4 text-slate-600" />
                        </div>
                        <span className="text-sm text-slate-700 font-semibold">{property.contact.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Owned
