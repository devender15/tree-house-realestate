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
    <section className="w-full py-16  px-4 sm:px-6 lg:px-8 lg:py-30 lg:h-scree bg-slate-800 overflow-hidden">
      <div className="w-full max-w-none mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 lg:mx-20">
          <div className="space-y-3  ">
            <h2 className="text-3xl leading-8 sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              New Launches
            </h2>
            <p className="text-lg text-gray-300 font-medium">
              Discover our latest premium properties
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 hidden lg:flex ">
            <button
              onClick={scrollPrev}
              disabled={selectedIndex === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 ${
                selectedIndex === 0
                  ? "text-gray-300 bg-white border-gray-200 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={scrollNext}
              disabled={selectedIndex >= totalSlides - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${
                selectedIndex >= totalSlides - 1
                  ? "text-gray-300 bg-white border-gray-200 cursor-not-allowed"
                  : "text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative  xl:mx-20">
          <div className="overflow-hidden py-1" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="flex-shrink-0 w-full min-w-[320px] sm:min-w-0 sm:w-1/2 lg:w-1/3"
                >
                  <div className="group bg-gray-200 rounded-xs overflow-hidden transition-all duration-300 cursor-pointer">
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
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-1 transition-colors duration-200">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                          <MapPin className="w-4 h-4 text-black" />
                          {property.location}
                        </p>
                      </div>

                      <Link
                        href={`/details/${property.id}`}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white text-md font-semibold rounded-xs hover:from-orange-600 hover:to-orange-700 transition-all duration-200 group/link cursor-pointer transform hover:scale-105"
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
                      ? "bg-white w-8 h-3"
                      : "bg-gray-400 hover:bg-gray-400 w-3 h-3"
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
