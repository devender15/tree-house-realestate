import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { properties } from "../data/properties"; // Adjust path if needed

const locations = [
  "Golf Course Ext Road",
  "M 3 M",
  "Dwarka Expressway",
  "Gurgaon",
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
    <section className="py-20 bg-gradient-to-bl from-black to-black/70 text-white ">
      {/* Title */}
      <h2 className="text-center text-6xl font-serif font-semibold mb-12">
        LOCATIONS
      </h2>

      {/* Location Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16  ">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => setSelectedLocation(location)}
            className={`
          px-5 py-3 text-lg rounded-md transition duration-300 ease-in-out
          ${
            selectedLocation === location
              ? "border border-yellow-500 text-yellow-500 bg-white"
              : "border border-gray-700 text-gray-400 bg-white/90 hover:border-yellow-500 hover:text-yellow-500"
          }
        `}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden max-w-8xl mx-30 px-4 " ref={emblaRef}>
        <div className="flex gap-8 justify-center  ">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div
                key={property.id}
                className="relative flex-shrink-0 w-[480px] h-[300px] rounded-lg overflow-hidden shadow-xl bg-gray-800"
              >
                {/* Underlying Image */}center
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />
                {/* Gradient Overlay (bottom dark → top transparent) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                {/* Text Content at the Bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                  <h3 className="text-lg font-semibold mb-1 text-white drop-shadow-md">
                    {property.title}
                  </h3>
                  <p className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-yellow-500">📍</span>
                    {property.location}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-full py-10 text-lg text-gray-400">
              No properties found for this location.
            </div>
          )}
        </div>
      </div>

      {/* Following Image + Text Block */}
      <div className=" text-white py-20  my-20 ">
        <div className=" mx-40 px-6 grid md:grid-cols-2 gap-16 items-center ">
          {/* IMAGE BLOCK */}
          <div className="w-full h-[600px] bg-gray-800 rounded-lg shadow-lg flex items-center justify-center overflow-hidden ">
            <img
              src="/assets/aboutThumb.png"
              alt="About Thumb"
              className="object-cover w-full h-full"
            />
          </div>

          {/* TEXT BLOCK */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 leading-snug">
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
                  className="
                px-6 py-2 rounded-full border border-gray-500 
                text-gray-300 hover:border-yellow-500 hover:text-yellow-500 
                transition duration-300
              "
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
