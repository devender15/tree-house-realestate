"use client";

import React from "react";
import { ourProperties } from "@/data/weown";

const Owned = () => {
  return (
    <section className="bg-gradient-to-b from-black to-black/50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-12">
          Our Owned Properties
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ourProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-200 hover:shadow-orange-300/50 transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-orange-600">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  📍 {property.location}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  {property.details.map((point, index) => (
                    <p key={index}>• {point}</p>
                  ))}
                </div>
                <div className="pt-4 text-xs text-gray-500 border-t">
                  <p>Agent: {property.contact.agent}</p>
                  <p>Email: {property.contact.email}</p>
                  <p>Phone: {property.contact.phone}</p>
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
