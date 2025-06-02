"use client";

import React, { useEffect, useState } from "react";
import { properties, Property } from "@/data/properties";
import PropertyCard from "./propertyCard";

const Plots = () => {
  const [plotsData, setPlotsData] = useState<Property[]>([]);

  useEffect(() => {
    const filtered = properties.filter(
      (property) => property.category === "plots"
    );

    // If there's a type mismatch, explicitly assert the type
    setPlotsData(filtered as Property[]);
  }, []);

  return (
    <section className="bg-gray-50 py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Plots for Sale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Premium plots for your dream home
          </p>
        </div>

        {/* Property Grid */}
        {plotsData.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
            {plotsData.map((property) => (
              <PropertyCard
                key={property?.id}
                id={property?.id}
                title={property?.title ?? "Untitled"}
                location={property?.location ?? "Location not specified"}
                image={property?.image ?? "/fallback.jpg"}
                category={property?.category ?? "unknown"}
              />
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

export default Plots;
