"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  const [baseDuration, setBaseDuration] = useState(30); // Base duration in seconds

  const filteredProperties = useMemo(() => 
    properties.filter((property) =>
      property.search?.some((tag) =>
        tag.toLowerCase().includes(selectedLocation.toLowerCase())
      )
    ), [selectedLocation]);

  // Calculate animation duration based on number of cards
  const animationDuration = useMemo(() => {
    if (filteredProperties.length <= 1) return 0;
    return baseDuration * (filteredProperties.length / 4); // Adjust based on default of 4 cards
  }, [filteredProperties, baseDuration]);

  // Handle single card case
  const shouldAnimate = filteredProperties.length > 1;
  const scrollingProperties = shouldAnimate 
    ? [...filteredProperties, ...filteredProperties] 
    : filteredProperties;

  return (
    <section className="py-16 md:py-24 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header and Location Filter */}
        <div className="flex flex-col items-center mb-1 gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 text-center mb-6">
            Premium <span className="text-orange-600">Locations</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg text-center">
            Discover prime real estate opportunities in Gurgaon's most
            sought-after neighborhoods
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl mt-6">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base transition-all duration-300 border shadow-sm hover:shadow-md ${
                  selectedLocation === location
                    ? "bg-slate-800 text-white shadow-md"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">{location}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Continuous Scrolling Cards */}
        <div className="overflow-hidden py-10 relative min-h-[380px] flex items-center justify-center">
          <div 
            className={`flex space-x-6 ${shouldAnimate ? 'animate-scroll' : 'justify-center'}`}
            style={shouldAnimate ? { 
              animationDuration: `${animationDuration}s`,
              width: 'max-content'
            } : {}}
          >
            {filteredProperties.length > 0 ? (
              scrollingProperties.map((property, index) => (
                <div 
                  key={`${property.id}-${index}`}
                  className="transform transition-all duration-500 ease-out hover:scale-105 hover:z-10"
                  style={{ 
                    flex: '0 0 auto',
                    width: '280px',
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  <PropertyCard {...property} />
                </div>
              ))
            ) : (
              <div className="text-center w-full py-16 px-4">
                <div className="bg-slate-50 rounded-xl py-12 px-6 max-w-md mx-auto shadow-sm">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">
                    No Properties Found
                  </h3>
                  <p className="text-slate-500">
                    We couldn't find properties for this location. Try another
                    area.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Gradient overlays - only show when scrolling */}
          {shouldAnimate && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20"></div>
            </>
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
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mt-16 md:mt-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 lg:h-[450px]">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl w-full h-full flex items-center justify-center">
                <span className="text-slate-300 text-lg">Location Map</span>
              </div>
            </div>

            <div className="px-6 py-8 md:p-10 lg:p-12">
              <div className="mb-3 flex items-center gap-2">
                <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">
                  Prime Locations
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Strategic <span className="text-orange-600">Investment Hubs</span>{" "}
                in Delhi NCR
              </h3>

              <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed">
                Our carefully curated properties are located in high-growth
                corridors with excellent connectivity, modern infrastructure,
                and strong appreciation potential.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Golf Course Ext Road",
                  "Southern Peripheral Road",
                  "Dwarka Expressway",
                  "MG Road",
                  "Sohna Road",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-full text-xs md:text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg transition-colors duration-300 font-medium">
                Explore Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;