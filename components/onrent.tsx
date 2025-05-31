"use client";

import React, { useEffect, useState } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "./propertyCard";

const Rent = () => {
  const [rentData, setRentData] = useState([]);

  useEffect(() => {
    const filtered = properties.filter(
      (property) => property.category === "rent"
    );
    setRentData(filtered);
  }, []);

  return (
    <section className="bg-gray-100 py-20  ">
      <div className="max-w-8xl mx-42  px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rentData.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md hover:shadow-orange-300/40 transition-shadow border border-orange-200 overflow-hidden"
          >
            <PropertyCard
              title={property.title}
              location={property.location}
              image={property.image}
              category={property.category}
              price={property.price}
              bhk={property.bhk}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rent;
