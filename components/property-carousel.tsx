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
import PropertyCard from "./propertyCard";

export function PropertyCarousel() {
  const [activeTab, setActiveTab] =
    useState<Property["category"]>("new-launch");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Initialize Embla with loop and alignment options.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    // NOTE: Embla's slidesToScroll is merely how many "scroll-snaps" to advance.
    // But controlling "how many are fully visible" is done via CSS widths/basis.
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Handlers for prev/next
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Update selected index whenever Embla changes slides
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // When Embla API is ready, attach listeners
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    // setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Whenever the activeTab changes, filter & reInit Embla (and reset to slide 0)
  useEffect(() => {
    const filtered = getPropertiesByCategory(activeTab);
    setFilteredProperties(filtered);

    if (emblaApi) {
      emblaApi.reInit();
      // Force carousel to jump back to slide 0 so we never end up "out of bounds."
      emblaApi.scrollTo(0);
      setSelectedIndex(0);
    }
  }, [activeTab, emblaApi]);

  return (
    <section className="py-42 bg-gradient-to-b from-black via-black/70 to-black text-gray-100">
      <div className="mx-60 px-4 max-w-8xl">
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
        <div className="relative">
          {/* Embla viewport: overflow-hidden so only the intended slides are visible */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="
                    basis-[calc(50%-0.75rem)]  /* two cards per view minus half the gap */
                    flex-shrink-0
                    mx-3                      /* total gap of 1.5rem between cards */
                  "
                >
                  {/* Card */}
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
          <div className="flex justify-between items-center mt-6 px-2">
            <div className="flex items-center space-x-5">
              {/* Left Button */}
              <Button
                variant="outline"
                onClick={scrollPrev}
                className="
                  w-14 h-14 
                  flex items-center justify-center 
                  border-2 border-white 
                  text-black 
                  hover:bg-white hover:text-[#030E27] 
                  rounded-lg 
                  shadow-md 
                  transition-colors duration-300
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
                  border-2 border-white 
                  text-black 
                  hover:bg-white hover:text-[#030E27] 
                  rounded-lg 
                  shadow-md 
                  transition-colors duration-300
                "
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>

            <div className="text-sm text-gray-400 font-semibold tracking-wide">
              {selectedIndex + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
