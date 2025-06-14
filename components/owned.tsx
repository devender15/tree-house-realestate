"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { ourProperties } from "@/data/weown";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

// Reusable animated wrapper
const AnimatedCard = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    >
      {children}
    </motion.div>
  );
};

const Owned = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent font-poppins mb-6">
              Our Owned Properties
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
              <div className="w-8 h-0.5 bg-blue-500"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Premium real estate investments curated for discerning clients
            </p>
          </motion.div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {ourProperties.map((property, index) => (
            <AnimatedCard key={property.id} index={index}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 flex flex-col h-full">
                {/* Property Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Property Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-poppins mb-2 drop-shadow-lg">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin size={16} className="text-blue-300" />
                      <span className="text-sm font-medium">
                        {property.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-between flex-1">
                  {/* Property Details */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4 font-poppins">
                      Property Features
                    </h4>
                    <ul className="space-y-3">
                      {property.details.map((point, index) => (
                        <li key={index} className="flex items-start group/item">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-600 transition-colors"></div>
                          <span className="text-slate-700 leading-relaxed text-sm lg:text-base">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {property.contact.agent.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {property.contact.agent}
                        </p>
                        <p className="text-xs text-slate-500">Property Agent</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 group/contact">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover/contact:shadow-md transition-shadow">
                          <Mail size={14} className="text-blue-500" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">
                          {property.contact.email}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 group/contact">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover/contact:shadow-md transition-shadow">
                          <Phone size={14} className="text-blue-500" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">
                          {property.contact.phone}
                        </span>
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
  );
};

export default Owned;
