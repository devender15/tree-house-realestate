"use client";

import React, { useEffect, useState, useRef } from "react";
import { properties, Property } from "@/data/properties";
import PropertyCard from "./propertyCard";
import { motion, useAnimation, useInView } from "framer-motion";

// Smooth scroll animation with spring effect
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

const Commercial = () => {
  const [commercialData, setCommercialData] = useState<Property[]>([]);

  useEffect(() => {
    const filtered = properties.filter(
      (property) => property?.category === "commercial"
    );
    setCommercialData(filtered as Property[]);
  }, []);

  return (
    <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Commercial Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Premium commercial spaces for your business needs
          </p>
        </div>

        {/* Property Grid */}
        {commercialData.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
            {commercialData.map((property, index) => (
              <AnimatedCard key={property.id} index={index}>
                <PropertyCard
                  id={property.id}
                  title={property.title ?? "Untitled"}
                  location={property.location ?? "Location not specified"}
                  image={property.image ?? "/fallback.jpg"}
                  category={property.category ?? "unknown"}
                />
              </AnimatedCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              No commercial properties available at the moment
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Commercial;
