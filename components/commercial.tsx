"use client";

import React, { useEffect, useState } from "react";
import { properties, Property } from "@/data/properties";
import PropertyCard from "./propertyCard";

const Commercial = () => {
  const [commercialData, setCommercialData] = useState<Property[]>([]);

  useEffect(() => {
    const filtered = properties.filter(
      (property) => property?.category === "commercial"
    );
    setCommercialData(filtered as Property[]);
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div
        className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-14
          px-2 lg:mx-42 lg:px-6 lg:gap-8
          
        `}
      >
        {commercialData.map((property) => (
          <div
            key={property?.id}
            className="bg-white rounded-lg shadow-md hover:shadow-orange-300/40 transition-shadow border border-orange-200 overflow-hidden"
          >
            <PropertyCard
              id={property?.id}
              title={property?.title ?? "Untitled"}
              location={property?.location ?? "Location not specified"}
              image={property?.image ?? "/fallback.jpg"}
              category={property?.category ?? "unknown"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commercial;
