"use client";

import React from "react";
import { residentialProperties } from "@/data/residentialProperties";
import PropertyCard from "./propertyCard";

const ResidentialProperty = () => {
  return (
    <div className="max-w-8xl mx-32  py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {residentialProperties.map((property) => (
        <div
          key={property.id}
          className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <PropertyCard
            title={property.title}
            location={property.location}
            image={property.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ResidentialProperty;
