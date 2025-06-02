"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TabButton } from "@/components/tab-button";
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

    return () => {
      emblaApi.off("select", onSelect);
    };
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
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-orange-50 p-2 rounded-full border border-orange-100">
            <TabButton
              active={activeTab === "new-launch"}
              onClick={() => setActiveTab("new-launch")}
              className="py-2 px-5 md:px-6 font-semibold rounded-full transition-all duration-300"
              activeClassName="bg-orange-600 text-white shadow-md"
              inactiveClassName="text-orange-600 hover:bg-orange-100"
            >
              New Launch
            </TabButton>
            <TabButton
              active={activeTab === "residential"}
              onClick={() => setActiveTab("residential")}
              className="py-2 px-5 md:px-6 font-semibold rounded-full transition-all duration-300"
              activeClassName="bg-orange-600 text-white shadow-md"
              inactiveClassName="text-orange-600 hover:bg-orange-100"
            >
              Residential
            </TabButton>
            <TabButton
              active={activeTab === "commercial"}
              onClick={() => setActiveTab("commercial")}
              className="py-2 px-5 md:px-6 font-semibold rounded-full transition-all duration-300"
              activeClassName="bg-orange-600 text-white shadow-md"
              inactiveClassName="text-orange-600 hover:bg-orange-100"
            >
              Commercial
            </TabButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div className="overflow-hidden mb-6" ref={emblaRef}>
            <div className="flex">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 px-3 w-full min-w-[280px] sm:min-w-0 sm:w-1/2 lg:w-1/3"
                >
                  <PropertyCard
                    id={property.id}
                    title={property.title}
                    location={property.location}
                    image={property.image}
                    category={property.category}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-2">
            {/* Slide Counter */}
            <div className="text-sm text-orange-700 font-medium">
              <span className="font-bold">{selectedIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{totalSlides}</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-300 ${
                  selectedIndex === 0
                    ? "text-orange-300 border-orange-200 cursor-not-allowed"
                    : "text-orange-700 border-orange-400 hover:bg-orange-50"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={scrollNext}
                disabled={selectedIndex >= totalSlides - 1}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors duration-300 ${
                  selectedIndex >= totalSlides - 1
                    ? "text-orange-300 border-orange-200 cursor-not-allowed"
                    : "text-orange-700 border-orange-400 hover:bg-orange-50"
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
