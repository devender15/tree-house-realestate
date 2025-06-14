"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../data/properties";
import PropertyCard from "./propertyCard";

const locations = [
  "Golf Course Ext Road",
  "M3M",
  "Dwarka Expressway",
  "Gurgaon",
];

const PropertyCarousel = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [baseDuration] = useState(30); // Base duration in seconds
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) =>
        property.search?.some((tag) =>
          tag.toLowerCase().includes(selectedLocation.toLowerCase())
        )
      ),
    [selectedLocation]
  );

  // Calculate animation duration based on number of cards
  const animationDuration = useMemo(() => {
    if (filteredProperties.length <= 1) return 0;
    return baseDuration * (filteredProperties.length / 4);
  }, [filteredProperties, baseDuration]);

  // Handle single card case
  const shouldAnimate = filteredProperties.length > 1;
  const scrollingProperties = shouldAnimate
    ? [...filteredProperties, ...filteredProperties]
    : filteredProperties;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header and Location Filter */}
        <div className="flex flex-col items-center mb-1 gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-6"
          >
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-slate-700 text-center">
              Premium <span className="text-orange-600">Locations</span>
            </h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg text-center mt-4"
            >
              Discover prime real estate opportunities in Gurgaon's most
              sought-after neighborhoods
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 w-full max-w-4xl mt-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {locations.map((location) => (
              <motion.button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`p-4 rounded-lg cursor-pointer text-sm md:text-base transition-all duration-300 border shadow-sm ${
                  selectedLocation === location
                    ? "bg-slate-800 text-white "
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{location}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Continuous Scrolling Cards */}
        <div
          className="overflow-hidden py-10 relative min-h-[380px] flex items-center justify-center"
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className={`flex space-x-6 ${
              shouldAnimate ? "animate-scroll" : "justify-center"
            }`}
            style={
              shouldAnimate
                ? {
                    animationDuration: `${animationDuration}s`,
                    animationPlayState: isHovering ? "paused" : "running",
                    width: "max-content",
                  }
                : {}
            }
          >
            <AnimatePresence mode="wait">
              {filteredProperties.length > 0 ? (
                scrollingProperties.map((property, index) => (
                  <motion.div
                    key={`${property.id}-${index}`}
                    className="transform transition-all duration-500 ease-out hover:scale-105 hover:z-10"
                    style={{
                      flex: "0 0 auto",
                      width: "280px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="text-center w-full py-16 px-4"
                  variants={scaleUp}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="bg-slate-50 rounded-xl py-12 px-6 max-w-md mx-auto shadow-sm">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">
                      No Properties Found
                    </h3>
                    <p className="text-slate-500">
                      We couldn't find properties for this location. Try another
                      area.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Gradient overlays - only show when scrolling */}
          {shouldAnimate && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20"></div>
            </>
          )}

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll linear infinite;
              display: flex;
              align-items: center;
            }
          `}</style>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-[#f9fafb] rounded-2xl overflow-hidden shadow-lg mt-16 md:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center px-6 py-10 md:px-12">
            {/* Left Image */}
            <motion.div
              className="w-full h-72 md:h-96 lg:h-[500px] rounded-xl overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/assets/team.png"
                alt="Team working on real estate planning"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-slate-800 mb-4"
                variants={fadeInUp}
              >
                Decades of Excellence in{" "}
                <span className="text-orange-600">Real Estate Development</span>
              </motion.h3>

              <motion.p
                className="text-slate-600 mb-6 text-base md:text-lg leading-relaxed"
                variants={fadeInUp}
              >
                With years of industry experience, we specialize in helping
                homebuyers, investors, and businesses find the ideal properties
                locating in Gurgaon. Our approach is driven by local expertise,
                personalized service, and data-backed market analysis to ensure
                sound real estate decisions.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-slate-800 mb-10"
                variants={containerVariants}
              >
                {[
                  { value: "1200+", label: "Successful Closings" },
                  { value: "150+", label: "Commercial Projects" },
                  { value: "35", label: "Expert Advisors" },
                  { value: "97%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-3 bg-white rounded-lg shadow-sm"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center px-6 pb-12 md:px-12">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "🏡",
                  title: "Personalized Property Search",
                  desc: "We listen closely to your needs and help you discover properties that match your goals, lifestyle, and budget — whether you're buying your first home or expanding your investment portfolio.",
                },
                {
                  icon: "🤝",
                  title: "Clear Negotiation & Guidance",
                  desc: "Our experienced team supports you through every step of the negotiation, ensuring transparency, fair value, and minimal stress during the deal-making process.",
                },
                {
                  icon: "📝",
                  title: "Hassle-Free Closing Process",
                  desc: "From legal paperwork to final approvals, we coordinate with all parties to streamline your property closing — so you can focus on what matters next.",
                },
              ].map(({ icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-full h-72 md:h-96 lg:h-[500px] rounded-xl overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/assets/nego.png"
                alt="Client consultation in real estate"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
