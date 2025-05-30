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
    <section className="pb-30 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-6">
            <TabButton
              active={activeTab === "new-launch"}
              onClick={() => setActiveTab("new-launch")}
              className="px-6 py-2 font-semibold rounded-lg transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              New Launch
            </TabButton>
            <TabButton
              active={activeTab === "residential"}
              onClick={() => setActiveTab("residential")}
              className="px-6 py-2 font-semibold rounded-lg transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              Residential
            </TabButton>
            <TabButton
              active={activeTab === "commercial"}
              onClick={() => setActiveTab("commercial")}
              className="px-6 py-2 font-semibold rounded-lg transition-colors duration-300"
              activeClassName="bg-indigo-600 text-white shadow-lg"
              inactiveClassName="text-gray-400 hover:text-indigo-400"
            >
              Commercial
            </TabButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-3xl shadow-2xl"
            ref={emblaRef}
          >
            <div className="flex gap-6">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="relative h-[420px] rounded-3xl overflow-hidden group shadow-xl border border-gray-700 bg-gray-900">
                    {/* Property Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={property.id === "1"}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-3xl font-semibold mb-3 font-serif text-white leading-tight drop-shadow-lg">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-gray-300 mb-6 space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base">{property.location}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4">
                        <Button className="bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 px-6 py-3 text-base font-semibold shadow-md transition duration-300">
                          Enquire Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg px-6 py-3 text-base font-semibold transition duration-300"
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
          <div className="flex justify-between items-center mt-10 px-2 max-w-3xl mx-auto">
            <div className="flex items-center space-x-5">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 shadow-md transition duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 shadow-md transition duration-300"
              >
                <ChevronRight className="w-6 h-6" />
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
