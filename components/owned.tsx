"use client";

import React from "react";
import { ourProperties } from "@/data/weown";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const Owned = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-700 font-poppins mb-4">
            Our Owned Properties
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium real estate investments curated for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-orange-50 flex flex-col"
            >
              {/* Property Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {property.title}
                  </h3>
                  <p className="text-orange-300 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {property.location}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
                <div className="space-y-4 mb-6">
                  <ul className="text-gray-700 font-poppins mt-2 space-y-2">
                    {property.details.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    <span className="font-semibold text-orange-700">
                      Agent:
                    </span>{" "}
                    {property.contact.agent}
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} className="text-orange-500" />
                      <span>{property.contact.email}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} className="text-orange-500" />
                      <span>{property.contact.phone}</span>
                    </p>
                  </div>
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
