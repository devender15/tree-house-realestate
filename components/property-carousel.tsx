"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabButton } from "@/components/tab-button";
import {
  properties,
  getPropertiesByCategory,
  type Property,
} from "@/data/properties";
import PropertyCard from "./propertyCard";

export function PropertyCarousel() {
  const [activeTab, setActiveTab] = useState<Property["category"]>("new-launch");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

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
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
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
    <section className="py-20 bg-white text-orange-700">
      <div className="mx-60 px-4 max-w-[90rem]">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-wrap gap-6">
            <TabButton
              active={activeTab === "new-launch"}
              onClick={() => setActiveTab("new-launch")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-orange-600 text-white shadow-lg"
              inactiveClassName="text-orange-600 border border-orange-300 hover:bg-orange-100"
            >
              New Launch
            </TabButton>
            <TabButton
              active={activeTab === "residential"}
              onClick={() => setActiveTab("residential")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-orange-600 text-white shadow-lg"
              inactiveClassName="text-orange-600 border border-orange-300 hover:bg-orange-100"
            >
              Residential
            </TabButton>
            <TabButton
              active={activeTab === "commercial"}
              onClick={() => setActiveTab("commercial")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-orange-600 text-white shadow-lg"
              inactiveClassName="text-orange-600 border border-orange-300 hover:bg-orange-100"
            >
              Commercial
            </TabButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 px-3 w-full sm:w-1/2 lg:w-1/3"
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
            <div className="flex items-center space-x-5">
              <Button
                variant="outline"
                onClick={scrollPrev}
                className="w-14 h-14 flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg shadow-md transition-colors duration-300"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="outline"
                onClick={scrollNext}
                className="w-14 h-14 flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-lg shadow-md transition-colors duration-300"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="text-sm text-orange-500 font-semibold tracking-wide">
              {selectedIndex + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
