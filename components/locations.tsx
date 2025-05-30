import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { properties } from "../data/properties"; // Adjust path if needed

const locations = [
  "Golf Course Ext Road",
  "Sothern Pheripery Road",
  "Dwarka Expressway",
  "Golf Course Road",
  "New Gurgaon",
];

const PropertyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedLocation, setSelectedLocation] = useState(
    "Golf Course Ext Road"
  );

  const filteredProperties = properties.filter((property) =>
    property.search?.some((tag) =>
      tag.toLowerCase().includes(selectedLocation.toLowerCase())
    )
  );

  // Re-init scroll position on location change
  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [filteredProperties, emblaApi]);

  return (
    <div className="py-14 bg-[#030E27] text-white">
      <h2 className="text-center text-4xl font-serif mb-8">LOCATIONS</h2>

      {/* Location Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-400">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`px-5 py-2 text-sm rounded-full border transition duration-300 ease-in-out ${
              selectedLocation === location
                ? "border-white text-white bg-white/10"
                : "border-gray-600 hover:text-white hover:border-white"
            }`}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden max-w-7xl mx-auto px-4" ref={emblaRef}>
        <div className="flex gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="relative flex-shrink-0 w-[320px] h-[440px] rounded-xl overflow-hidden shadow-xl bg-gray-800"
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-0"
                />
                <div className="absolute z-10 bg-black bg-opacity-60 w-full h-full flex flex-col justify-end p-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {property.title}
                  </h3>
                  <p className="text-sm flex items-center">
                    <span className="mr-2">📍</span>
                    {property.location}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-full py-10 text-lg text-gray-300">
              No properties found for this location.
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#030E27] text-white py-20">
        <div className="max-w-7xl mx-auto my-40 px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE BLOCK (You can replace this div with your <Image /> component) */}
          <div className="w-full h-[400px] bg-gray-800 rounded-xl shadow-lg flex items-center justify-center overflow-hidden ">
            <img src="/assets/aboutThumb.png" alt="" />
          </div>

          {/* TEXT BLOCK */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-snug">
              EXPLORE LOCATIONS
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Discover premium real estate locations across Gurgaon and Delhi
              NCR. Whether you’re searching for residential or commercial
              properties, we make your journey seamless and rewarding.
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
                  className="px-6 py-2 rounded-full border border-gray-500 text-gray-300 hover:border-white hover:text-white transition duration-300"
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
