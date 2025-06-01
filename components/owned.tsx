"use client";

import React from "react";
import { ourProperties } from "@/data/weown";
import Image from "next/image";

const Owned = () => {
  return (
    <section className="bg-orange-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-16 font-poppins">
          Our Owned Properties
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ourProperties.map((property) => (
            <div
              key={property.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-orange-200 bg-white"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-orange-700 font-poppins">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 italic font-poppins">
                  📍 {property.location}
                </p>

                <ul className="list-disc list-inside text-sm text-gray-700 font-poppins space-y-1">
                  {property.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="pt-4 border-t text-xs text-gray-500 font-poppins">
                  <p>
                    <span className="font-semibold">Agent:</span>{" "}
                    {property.contact.agent}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {property.contact.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {property.contact.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Owned;
