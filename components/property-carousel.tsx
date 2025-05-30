"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TabButton } from "@/components/tab-button"
import { properties, getPropertiesByCategory, type Property } from "@/data/properties"
import Image from "next/image"

export function PropertyCarousel() {
  const [activeTab, setActiveTab] = useState<Property["category"]>("new-launch")
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    const filtered = getPropertiesByCategory(activeTab)
    setFilteredProperties(filtered)
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [activeTab, emblaApi])

  return (
    <section className="py-16 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Featured Properties</h2>
          <p className="text-gray-300 font-poppins">Discover premium properties across different categories</p>
        </div> */}

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8">
            <TabButton active={activeTab === "new-launch"} onClick={() => setActiveTab("new-launch")}>
              New Launch
            </TabButton>
            <TabButton active={activeTab === "residential"} onClick={() => setActiveTab("residential")}>
              Residential
            </TabButton>
            <TabButton active={activeTab === "commercial"} onClick={() => setActiveTab("commercial")}>
              Commercial
            </TabButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filteredProperties.map((property) => (
                <div key={property.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
                    {/* Property Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={property.id === "1"}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2 font-poppins">{property.title}</h3>
                      <div className="flex items-center text-gray-300 mb-4 font-poppins">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <Button className="bg-white text-black hover:bg-gray-100 font-poppins" size="sm">
                          Enquire Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-black hover:bg-white hover:text-black font-poppins"
                          size="sm"
                        >
                          View Details
                        </Button>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 p-2">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                className=" border-black text-black hover:bg-white hover:text-black cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                className="border-black text-black hover:bg-white hover:text-black cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-sm text-gray-300 font-poppins">
              {selectedIndex + 1} / {scrollSnaps.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
