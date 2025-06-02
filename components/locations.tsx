"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { properties } from "../data/properties";
import Image from "next/image";
import PropertyCard from "./propertyCard";

const locations = [
  "Golf Course Ext Road",
  "M3M",
  "Dwarka Expressway",
  "Gurgaon",
];

const PropertyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: true,
  });
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const filteredProperties = properties.filter((property) =>
    property.search?.some((tag) =>
      tag.toLowerCase().includes(selectedLocation.toLowerCase())
    )
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0);
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, filteredProperties, onSelect]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Premium <span className="text-orange-500">Locations</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover prime real estate opportunities in Gurgaon's most
            sought-after neighborhoods
          </p>
        </div>

        {/* Location Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14 lg:mb-18">
          <div className="lg:border lg:border-orange-100 p-2 rounded-full flex flex-wrap justify-center gap-3 lg:bg-orange-50">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-5 cursor-pointer py-2.5 rounded-full transition-all duration-300 font-medium text-sm md:text-base
                ${
                  selectedLocation === location
                    ? "bg-orange-400  text-white font-semibold shadow-md"
                    : "bg-white text-orange-500 font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white"
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative mb-16 md:mb-20 lg:mb-28">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="flex-shrink-0 min-w-0 pl-4 w-full sm:w-1/2 lg:w-1/3"
                  >
                    <PropertyCard {...property} className="h-full" />
                  </div>
                ))
              ) : (
                <div className="text-center w-full py-16 px-4">
                  <div className="bg-slate-50 rounded-xl py-12 px-6 max-w-md mx-auto">
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
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 md:h-96 lg:h-[500px]">
              <Image
                src="/assets/hero_thumb.jpg"
                alt="Property locations map"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="px-6 py-8 md:p-10 lg:p-12">
              <div className="mb-2 flex items-center gap-2">
                <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">
                  Prime Locations
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Strategic <span className="text-orange-600">Investment Hubs</span>{" "}
                in Delhi NCR
              </h3>

              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Our carefully curated properties are located in high-growth
                corridors with excellent connectivity, modern infrastructure,
                and strong appreciation potential. Discover why investors choose
                these locations.
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
                    className="px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-medium shadow-sm border border-orange-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper components for icons
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default PropertyCarousel;
