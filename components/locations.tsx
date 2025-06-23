"use client";

import { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "../data/properties";

const locations = [
  "Golf Course Ext Road",
  "M3M",
  "Dwarka Expressway",
  "Gurgaon",
];

const PropertyCarousel = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) =>
        property.search?.some((tag) =>
          tag.toLowerCase().includes(selectedLocation.toLowerCase())
        )
      ),
    [selectedLocation]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedLocation]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProperties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredProperties.length) % filteredProperties.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 tracking-tight">
              Premium Locations
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover exceptional properties in Gurgaon's finest neighborhoods
            </p>
          </div>

          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedLocation === location
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                {location}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProperties.length > 0 ? (
            <div className="relative">
              {/* Main Carousel */}
              <div className="relative h-[500px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                {filteredProperties.map((property, index) => (
                  <div
                    key={property.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Property Image */}
                    <div className="h-full bg-slate-200 flex items-center justify-center">
                      <img
                        src={
                          property.image ||
                          "/placeholder.svg?height=500&width=800"
                        }
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Property Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-medium text-slate-900 mb-2">
                            {property.title}
                          </h3>
                          <p className="text-slate-600 mb-3">
                            {property.description}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-slate-500">
                            <span>{property.bedrooms} Bedrooms</span>
                            <span>{property.bathrooms} Bathrooms</span>
                            <span>{property.squareFootage} sq ft</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-semibold text-slate-900 mb-4">
                            {formatPrice(property.price)}
                          </div>
                          <div className="flex gap-3">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg cursor-pointer">
                              View Details
                            </Button>
                            <Button
                              variant="outline"
                              className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50 px-6 py-2 rounded-lg cursor-pointer"
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                {filteredProperties.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>


              {/* Property Counter */}
              <div className="text-center mt-8">
                <p className="text-slate-500">
                  Showing {currentIndex + 1} of {filteredProperties.length}{" "}
                  properties in {selectedLocation}
                </p>
              </div>
            </div>
          ) : (
            <NoPropertiesFound />
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-light text-slate-900 mb-4">
            Ready to find your perfect home?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through Gurgaon's finest properties
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50 px-8 py-3 rounded-lg cursor-pointer"
            >
              Browse All Properties
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

// No Properties Found Component
const NoPropertiesFound = () => (
  <div className="text-center py-16">
    <div className="max-w-sm mx-auto">
      <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
        <Home className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-xl font-medium text-slate-900 mb-3">
        No Properties Found
      </h3>
      <p className="text-slate-600 mb-6">
        We couldn't find properties for this location. Try exploring other
        areas.
      </p>
      <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg cursor-pointer">
        View All Locations
      </Button>
    </div>
  </div>
);

export default PropertyCarousel;
