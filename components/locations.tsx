"use client";

import { useState, useEffect, useMemo, useRef } from "react";
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
  const [baseDuration] = useState(40); // Slower base duration
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    return baseDuration * (filteredProperties.length / 3);
  }, [filteredProperties, baseDuration]);

  // Handle single card case
  const shouldAnimate = filteredProperties.length > 1 && !isMobile;
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
    <section className="py-12 md:py-20 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header and Location Filter */}
        <div className="flex flex-col items-center mb-8 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 mb-4">
              Premium <span className="text-orange-600">Locations</span>
            </h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            >
              Discover prime real estate opportunities in Gurgaon's most
              sought-after neighborhoods
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 w-full max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {locations.map((location) => (
              <motion.button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 border shadow-sm ${
                  selectedLocation === location
                    ? "bg-slate-800 text-white border-slate-800"
                    : "bg-white text-gray-800 hover:bg-gray-50 border-gray-200"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {location}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Property Cards Container */}
        <div className="relative">
          {isMobile ? (
            // Mobile: Horizontal scroll
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 px-2" style={{ width: "max-content" }}>
                <AnimatePresence mode="wait">
                  {filteredProperties.length > 0 ? (
                    filteredProperties.map((property, index) => (
                      <motion.div
                        key={property.id}
                        className="flex-shrink-0"
                        style={{ width: "280px" }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <PropertyCard {...property} />
                      </motion.div>
                    ))
                  ) : (
                    <NoPropertiesFound />
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // Desktop: Continuous scroll or grid
            <div
              className="overflow-hidden py-8 relative min-h-[420px] flex items-center justify-center"
              ref={containerRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                className={`flex gap-6 ${
                  shouldAnimate ? "animate-scroll" : "justify-center flex-wrap"
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
                        className="flex-shrink-0 transform transition-all duration-300 ease-out hover:scale-105"
                        style={{ width: "320px" }}
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
                    <NoPropertiesFound />
                  )}
                </AnimatePresence>
              </div>

              {/* Subtle gradient overlays - only for desktop scrolling */}
              {shouldAnimate && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
                </>
              )}
            </div>
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

        {/* Enhanced CTA Section */}
        <motion.div
          className="bg-[#f9fafb] rounded-3xl overflow-hidden shadow-xl border border-gray-100 mt-16 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              className="order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-6"
                variants={fadeInUp}
              >
                Decades of Excellence in{" "}
                <span className="text-orange-500">Real Estate Development</span>
              </motion.h3>

              <motion.p
                className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed"
                variants={fadeInUp}
              >
                With years of industry experience, we specialize in helping
                homebuyers, investors, and businesses find ideal properties in
                Gurgaon. Our approach combines local expertise, personalized
                service, and data-driven market analysis.
              </motion.p>

              {/* Enhanced Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4 md:gap-6"
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
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-slate-600 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/assets/team.png"
                alt="Professional real estate team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-12"></div>

          {/* Second Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/assets/nego.png"
                alt="Client consultation meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "🏡",
                  title: "Personalized Property Search",
                  desc: "We listen to your needs and help you discover properties that match your goals, lifestyle, and budget.",
                },
                {
                  icon: "🤝",
                  title: "Expert Negotiation & Guidance",
                  desc: "Our experienced team supports you through every negotiation, ensuring transparency and fair value.",
                },
                {
                  icon: "📝",
                  title: "Seamless Closing Process",
                  desc: "From paperwork to final approvals, we coordinate everything for a stress-free closing experience.",
                },
              ].map(({ icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100"
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    backgroundColor: "#f8fafc",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-2xl md:text-3xl flex-shrink-0 mt-1">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                      {title}
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// No Properties Found Component
const NoPropertiesFound = () => (
  <motion.div
    className="text-center w-full py-16 px-4"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    <div className="bg-slate-50 rounded-2xl py-12 px-6 max-w-md mx-auto border border-gray-100">
      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl">🏠</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">
        No Properties Found
      </h3>
      <p className="text-slate-500">
        We couldn't find properties for this location. Try another area.
      </p>
    </div>
  </motion.div>
);

export default PropertyCarousel;
