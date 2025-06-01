"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropertyCard from "./propertyCard"; // Adjust path as needed
import { properties } from "../data/properties"; // Adjust path as needed

const locations = [
  "Golf Course Ext Road",
  "M 3 M",
  "Dwarka Expressway",
  "Gurgaon",
];

const PropertyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedLocation, setSelectedLocation] = useState(
    "Golf Course Ext Road"
  );

  const filteredProperties = properties.filter((property) =>
    property.search?.some((tag) =>
      tag.toLowerCase().includes(selectedLocation.toLowerCase())
    )
  );

  // Reset scroll to start on location change
  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [filteredProperties, emblaApi]);

  return (
    <section className=" bg-white text-orange-700">
      {/* Title */}
      <h2 className="text-center text-6xl font-serif font-semibold mb-12 text-orange-700">
        LOCATIONS
      </h2>

      {/* Location Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`
              px-5 py-3 text-lg rounded-full transition duration-300 ease-in-out font-semibold
              ${
                selectedLocation === location
                  ? " bg-orange-600 text-white shadow-lg"
                  : "border border-orange-300 bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
              }
            `}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden max-w-[1200px] mx-auto px-4"
        ref={emblaRef}
      >
        <div className="flex gap-6 select-none touch-pan-x">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <PropertyCard
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  image={property.image}
                  category={property.category}
                />
              </div>
            ))
          ) : (
            <div className="text-center w-full py-10 text-lg text-orange-400">
              No properties found for this location.
            </div>
          )}
        </div>
      </div>

      {/* Following Image + Text Block */}
      <div className="text-orange-700 py-20 my-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE BLOCK */}
        <div className="w-full h-[600px] bg-orange-50 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src="/assets/aboutThumb.png"
              alt="About Thumb"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 leading-snug text-orange-700">
            EXPLORE LOCATIONS
          </h2>
          <p className="text-orange-600 mb-8 text-lg leading-relaxed">
            Discover premium real estate locations across Gurgaon and Delhi NCR.
            Whether you’re searching for residential or commercial properties,
            we make your journey seamless and rewarding.
          </p>

          {/* BUTTON GROUP */}
          <div className="flex flex-wrap gap-4">
            {[
              "Golf Course Ext Road",
              "Southern Peripheral Road",
              "Dwarka Expressway",
              "Golf Course Road",
              "New Gurgaon",
            ].map((location) => (
              <button
                key={location}
                className="
                  px-6 py-2 rounded-full border border-orange-400 
                  text-orange-600 hover:border-orange-600 hover:bg-orange-600 hover:text-white
                  transition duration-300 font-semibold
                "
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
