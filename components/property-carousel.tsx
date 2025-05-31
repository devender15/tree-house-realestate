"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabButton } from "@/components/tab-button";
import {
  properties,
  getPropertiesByCategory,
  type Property,
} from "@/data/properties";
import Image from "next/image";

export function PropertyCarousel() {
  const [activeTab, setActiveTab] =
    useState<Property["category"]>("new-launch");
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
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const filtered = getPropertiesByCategory(activeTab);
    setFilteredProperties(filtered);
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [activeTab, emblaApi]);

  return (
    <section className="py-42  bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100">
      <div className="mx-60 px-4 max-w-8xl ">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-6">
            <TabButton
              active={activeTab === "new-launch"}
              onClick={() => setActiveTab("new-launch")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              New Launch
            </TabButton>
            <TabButton
              active={activeTab === "residential"}
              onClick={() => setActiveTab("residential")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              Residential
            </TabButton>
            <TabButton
              active={activeTab === "commercial"}
              onClick={() => setActiveTab("commercial")}
              className="px-6 py-2 font-semibold rounded-full transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              Commercial
            </TabButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative  ">
          {/* Embla viewport: overflow-hidden so only exactly two cards show */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="
                  basis-[calc(50%-0.75rem)]  /* 50% minus half of the 1.5rem gap */
                  flex-shrink-0
                  mx-3                    /* 0.75rem margin on each side → total gap = 1.5rem */
                "
                >
                  <div className="relative h-95 rounded-xl overflow-hidden group shadow-xl border border-gray-700 bg-gray-600 ">
                    {/* Property Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        priority={property.id === "1"}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-semibold mb-2 font-serif text-white leading-tight drop-shadow-lg">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-300 mb-4 space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base">{property.location}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center space-x-3">
                        <Button className="bg-indigo-600 text-white rounded-md hover:bg-indigo-700 px-5 py-2 text-sm font-semibold shadow-md transition duration-300">
                          Enquire Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md px-5 py-2 text-sm font-semibold transition duration-300"
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 p-3 rounded-full shadow-md transition duration-300"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 px-2">
            <div className="flex items-center space-x-5">
              {/* Left Button */}
              <Button
                variant="outline"
                onClick={scrollPrev}
                className="
                w-14 h-14 
                flex items-center justify-center 
                border-2 border-yellow-500 
                text-yellow-500 
                hover:bg-yellow-500 hover:text-white 
                font-bold 
                rounded-lg 
                shadow-md 
                transition duration-300
              "
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              {/* Right Button */}
              <Button
                variant="outline"
                onClick={scrollNext}
                className="
                w-14 h-14 
                flex items-center justify-center 
                border-2 border-yellow-500 
                text-yellow-500 
                hover:bg-yellow-500 hover:text-white 
                font-bold 
                rounded-lg 
                shadow-md 
                transition duration-300
              "
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="text-sm text-gray-400 font-semibold tracking-wide">
              {selectedIndex + 1} / {scrollSnaps.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
