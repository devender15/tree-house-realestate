"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PropertyCard from "./propertyCard"; // Adjust path as needed
import { properties } from "../data/properties"; // Adjust path as needed
import Image from "next/image";

const locations = [
  "Golf Course Ext Road",
  "M3M",
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
    <section className=" bg-white text-orange-400 py-5 ">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 md:mb-7 lg:mb-12 text-orange-500">
        LOCATIONS
      </h2>

      {/* Location Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6 mb-6 md:mb-10 lg:mb-16">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`
              px-3 py-1 text-xs font-md md:font-semibold md:px-5 md:text-lg lg:px-5 lg:py-3 lg:text-lg cursor-pointer rounded-full transition duration-300 ease-in-out font-semibold
              ${
                selectedLocation === location
                  ? " bg-orange-400 text-white shadow-lg"
                  : "border border-orange-500 bg-white text-orange-500 hover:bg-orange-400 hover:text-white"
              }
            `}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden max-w-[1400px] mx-auto md:px-4 "
        ref={emblaRef}
      >
        <div className="flex gap-2 select-none touch-pan-x">
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
      <div className="text-orange-700 py-30 lg:mt-30  max-w-[1400px] mx-auto  grid md:grid-cols-2 gap-6 items-center">
        {/* IMAGE BLOCK */}
        <div className="w-full  md:h-[500px] md:border-2 md:rounded-md shadow-md flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/assets/location.png"
              alt="About Thumb"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-6 leading-snug text-orange-500">
            EXPLORE LOCATIONS
          </h2>
          <p className="text-orange-600 mb-8 text-center text-lg  font-medium leading-relaxed">
            Discover premium real estate locations across Gurgaon and Delhi NCR.
            Whether you are searching for residential or commercial properties,
            we make your journey seamless and rewarding.
          </p>

          {/* BUTTON GROUP */}
          <div className="flex flex-wrap px-2 gap-2 md:gap-4">
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
                  px-3 md:px-6 py-2 text-xs sm:text-sm md:text-md lg:text-lg rounded-full border border-orange-400 
                  text-orange-600 transition duration-300 font-semibold
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
