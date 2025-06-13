"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Landmark,
} from "lucide-react";
import {
  properties,
  getPropertiesByCategory,
  type Property,
} from "@/data/properties";
import PropertyCard from "./propertyCard";

export function PropertyCarousel() {
  const [activeTab, setActiveTab] =
    useState<Property["category"]>("new-launch");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setTotalSlides(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const filtered = getPropertiesByCategory(activeTab);
    setFilteredProperties(filtered);

    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
      setSelectedIndex(0);
    }
  }, [activeTab, emblaApi]);

  return (
    <section className="py-24 bg-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header and Tabs */}
        <div className="flex flex-col items-center mb-1 gap-5 ">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 text-center mb-8">
            Discover Our <span className="text-orange-600">Featured Properties</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {[
              {
                label: "New Launch",
                value: "new-launch",
                icon: <Building2 className="w-5 h-5" />,
              },
              {
                label: "Residential",
                value: "residential",
                icon: <Home className="w-5 h-5" />,
              },
              {
                label: "Commercial",
                value: "commercial",
                icon: <Landmark className="w-5 h-5" />,
              },
            ].map(({ label, value, icon }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value as Property["category"])}
                className={`flex items-center justify-center gap-2 p-4 rounded-sm cursor-pointer text-base transition-all duration-300 border shadow-sm hover:shadow-md ${
                  activeTab === value
                    ? "bg-slate-700 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {icon}
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center ">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className=" flex-shrink-0 px-3 w-full min-w-[280px] sm:min-w-0 sm:w-1/2 lg:w-1/3"
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center px-2">
            <div className="text-sm text-gray-600 font-medium">
              <span className="font-bold">{selectedIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{totalSlides}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm
                   transition-colors cursor-pointer duration-300 ${
                  selectedIndex === 0
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-gray-700 border-gray-400 "
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={scrollNext}
                disabled={selectedIndex >= totalSlides - 1}
                className={`w-10 h-10 flex items-center justify-center  rounded-full bg-white shadow-sm
                   transition-colors cursor-pointer duration-300 ${
                  selectedIndex >= totalSlides - 1
                    ? "text-gray-300 border-gray-200 cursor-not-allowed"
                    : "text-gray-700 border-gray-400 "
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
