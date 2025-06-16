"use client";

import React, { useEffect, useState, useRef } from "react";
import { properties, Property } from "@/data/properties";
import PropertyCard from "./propertyCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { Key, Calendar, Award } from "lucide-react";

// Animated wrapper component
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
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const Rent = () => {
  const [rentData, setRentData] = useState<Property[]>([]);

  useEffect(() => {
    const filtered = properties.filter(
      (property) => property?.category === "rent"
    );
    setRentData(filtered as Property[]);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-50 py-20 md:py-28 overflow-hidden">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/80 shadow-sm">
              <Key className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700 text-sm font-semibold tracking-wider uppercase">
                Rental Portfolio
              </span>
              <Calendar className="w-4 h-4 text-slate-500" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
              Properties
              <span className="block text-slate-600 mt-2">For Rent</span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Premium rental properties offering flexibility and comfort for your living and business needs
            </p>
          </motion.div>
        </div>

        {/* Property Grid */}
        {rentData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {rentData.map((property, index) => (
              <AnimatedCard key={property.id} index={index}>
                <div className="h-full">
                  <PropertyCard
                    id={property.id}
                    title={property.title ?? "Untitled"}
                    location={property.location ?? "Location not specified"}
                    image={property.image ?? "/fallback.jpg"}
                    category={property.category ?? "unknown"}
                  />
                </div>
              </AnimatedCard>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-slate-200/80 shadow-sm max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">No Rental Properties Available</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                We're currently updating our rental property portfolio. Please check back soon for premium rental
                opportunities.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <Award className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-500 font-medium">Quality rentals coming soon</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Rent;