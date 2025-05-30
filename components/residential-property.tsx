"use client";

import React from "react";
import { residentialProperties } from "@/data/residentialProperties";
import PropertyCard from "./propertyCard";

const ResidentialProperty = () => {
  return (
    <div className="max-w-8xl px-34 py-15 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-100 ">
      {residentialProperties.map((property) => (
        <div
          key={property.id}
          className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow rounded-md "
        >
          <PropertyCard
            title={property.title}
            location={property.location}
            image={property.image}
            category={property.category}
            price={property.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ResidentialProperty;
