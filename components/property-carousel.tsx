"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import {
  properties,
  getPropertiesByCategory,
  type Property,
} from "@/data/properties";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 lg:py-24 lg:h-screen bg-white overflow-hidden">
      <div className="w-full max-w-none mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 max-w-7xl mx-auto">
          <div className="space-y-3  ">
            <h2 className="text-3xl leading-8 sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
              New Launches
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Discover our latest premium properties
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={selectedIndex === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 transition-all duration-200 ${
                selectedIndex === 0
                  ? "text-gray-300 bg-white border-gray-200 cursor-not-allowed"
                  : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50 hover:border-orange-300 hover:text-orange-600 cursor-pointer shadow-sm hover:shadow-md"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollNext}
              disabled={selectedIndex >= totalSlides - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 transition-all duration-200 ${
                selectedIndex >= totalSlides - 1
                  ? "text-gray-300 bg-white border-gray-200 cursor-not-allowed"
                  : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50 hover:border-orange-300 hover:text-orange-600 cursor-pointer shadow-sm hover:shadow-md"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 w-full min-w-[320px] sm:min-w-0 sm:w-1/2 lg:w-1/3"
                >
                  <div className="group bg-white rounded-xl overflow-hidden border-2 border-orange-200/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-5">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          {property.location}
                        </p>
                      </div>

                      <Link
                        href={`/details/${property.id}`}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-md font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-200 group/link cursor-pointer transform hover:scale-105"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => {
              if (Math.abs(index - selectedIndex) > 1) {
                return null;
              }

              return (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    index === selectedIndex
                      ? "bg-orange-600 w-8 h-3"
                      : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
