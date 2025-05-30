"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { TabButton } from "@/components/tab-button"
import { useScroll } from "@/hooks/use-scroll"

import { PropertyCarousel } from "@/components/property-carousel"

export default function HomePage() {
  const scrolled = useScroll(20)
  const [activeTab, setActiveTab] = useState("featured")

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Sticky with transparent background that changes on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-900 shadow-md py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold font-poppins text-white">
              TREE<span className="text-orange-500">HOUSE</span>
            </div>
            <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Commercial
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Residential
              </a>
              
              
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Plots
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Rent
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Resale
              </a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-poppins">
                Our Owned Properties
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 font-poppins text-white">
              <Phone className="w-4 h-4" />
              <span>+91-9999999999</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 font-poppins">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full height (100vh) */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4 font-cinzel pt-16">
            <p className="text-lg mb-4 tracking-wider font-cinzel">WHERE YOUR DREAMS</p>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight font-cinzel">START THEIR JOURNEY</h1>
            <p className="text-xl mb-12 opacity-90 font-poppins">
              Explore premium properties across the city with our expert guidance
            </p>

            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <Select>
                  <SelectTrigger className="h-12 font-poppins text-black w-full">
                    <SelectValue placeholder="Property Type" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="!text-black">
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="h-12 font-poppins text-black w-full">
                    <SelectValue placeholder="Budget Range" />
                  </SelectTrigger>
                  <SelectContent className="text-black">
                    <SelectItem value="under-50">Under ₹50L</SelectItem>
                    <SelectItem value="50-1cr">₹50L - ₹1Cr</SelectItem>
                    <SelectItem value="1-2cr">₹1Cr - ₹2Cr</SelectItem>
                    <SelectItem value="above-2cr">Above ₹2Cr</SelectItem>
                  </SelectContent>
                </Select>

                <Input placeholder="Location, Project, or Builder" className="h-12 font-poppins text-black w-full" />

                <Button className="h-12 bg-orange-500 hover:bg-orange-600 font-poppins cursor-pointer w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PropertyCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Why Choose Tree House</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
              We provide comprehensive real estate solutions with expert guidance and transparent processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Expert Property Search</h3>
              <p className="text-gray-600 font-poppins">Advanced search tools to find your perfect property match</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">24/7 Support</h3>
              <p className="text-gray-600 font-poppins">Round-the-clock assistance for all your real estate needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Transparent Process</h3>
              <p className="text-gray-600 font-poppins">Clear documentation and honest pricing with no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-poppins">
                TREE<span className="text-orange-500">HOUSE</span>
              </div>
              <p className="text-gray-400 mb-4 font-poppins">
                Your trusted partner in finding the perfect property investment.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="font-poppins text-black">
                  Contact Us
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Plots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Resale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Property Types</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Plots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Commercial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center font-poppins">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91-9999999999</span>
                </div>
                <div className="flex items-center font-poppins">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@primeestates.com</span>
                </div>
                <div className="flex items-center font-poppins">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-poppins">
            <p>&copy; 2025 Tree House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
