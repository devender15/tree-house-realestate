"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";

const navItems = [
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Our Owned", href: "/owned" },
  { label: "Plots", href: "/plot" },
  { label: "Rent", href: "/rent" },
  { label: "Resale", href: "/resale" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const scrolled = useScroll(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#0f1a2f] to-[#1a2b4a] text-[#d4af37] text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/+919811098193"
              className="flex items-center gap-2 hover:text-[#f0d07d] transition-all duration-300 group"
            >
              <Phone size={14} className="group-hover:animate-pulse" />
              <span>+91 9811098193</span>
            </a>
            <a
              href="mailto:info@treehouserealty.com"
              className="flex items-center gap-2 hover:text-[#f0d07d] transition-all duration-300 group"
            >
              <Mail size={14} className="group-hover:animate-pulse" />
              <span>Treehousefarmland@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-light">Follow us:</span>
            <div className="flex gap-2">
              {/* <a
                href="#"
                className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={12} />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 hover:scale-110"
              >
                <Twitter size={12} />
              </a> */}
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={12} />
              </a>
              {/* <a
                href="#"
                className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center hover:bg-[#d4af37]/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={12} />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "shadow-xl backdrop-blur-md bg-[#0f1a2f]/90" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-10 group">
              <div className="bg-[#d4af37] rounded-xl p-1.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="bg-white rounded-lg p-1">
                  <Image
                    src={"/assets/logo.png"}
                    alt="Tree House Real Estate"
                    width={scrolled ? 42 : 48}
                    height={scrolled ? 42 : 48}
                    className="transition-all duration-300"
                  />
                </div>
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-3 text-base font-medium text-black hover:text-[#d4af37] transition-all duration-300 group ${scrolled ? "text-white" : "text-black"}`}
                >
                  {item.label}
                  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              ))}
            </nav>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <Link
                href={"/enquiry"}
                className="hidden sm:block rounded-xl px-6 py-2.5 text-sm font-bold transition-all whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8972e] hover:from-[#b8972e] hover:to-[#9c7e25] text-[#0f1a2f] hover:text-white"
              >
                Enquire Now
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="block lg:hidden cursor-pointer rounded-xl bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37]"
                onClick={toggleSidebar}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation for Tablets */}
        <div className="hidden md:block lg:hidden bg-[#0f1a2f] py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex overflow-x-auto py-1 hide-scrollbar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-white hover:text-[#d4af37] whitespace-nowrap transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={toggleSidebar}
        />

        {/* Sidebar Content */}
        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-md bg-gradient-to-b from-[#0f1a2f] to-[#1a2b4a] transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } shadow-2xl`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-[#0f1a2f] shadow-md">
              <Link
                href="/"
                onClick={toggleSidebar}
                className="flex items-center gap-3"
              >
                <div className="bg-[#d4af37] rounded-xl p-1.5 shadow-md">
                  <div className="bg-white rounded-lg p-1">
                    <Image
                      src={"/assets/logo.png"}
                      alt="Tree House Real Estate"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-white tracking-tight">
                    Tree House
                  </h1>
                  <p className="text-xs font-light text-[#d4af37] tracking-wide">
                    LUXURY REAL ESTATE
                  </p>
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-xl bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37] transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col px-6 py-8 space-y-3 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleSidebar}
                  className="py-4 px-5 rounded-xl text-white hover:bg-[#d4af37] hover:text-[#0f1a2f] font-medium transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] group-hover:bg-[#0f1a2f] transition-all duration-300" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-[#1a2b4a] px-6 py-5 bg-[#0f1a2f]">
              <div className="mb-4">
                <a
                  href="tel:+919811098193"
                  className="flex items-center gap-4 text-white font-medium py-2.5 group"
                >
                  <div className="bg-[#d4af37]/10 p-2 rounded-xl group-hover:bg-[#d4af37] transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#d4af37] group-hover:text-[#0f1a2f]" />
                  </div>
                  <span className="group-hover:text-[#d4af37] transition-all duration-300">
                    +91 9811098193
                  </span>
                </a>
                <a
                  href="mailto:info@treehouserealty.com"
                  className="flex items-center gap-4 text-white py-2.5 group"
                >
                  <div className="bg-[#d4af37]/10 p-2 rounded-xl group-hover:bg-[#d4af37] transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#d4af37] group-hover:text-[#0f1a2f]" />
                  </div>
                  <span className="group-hover:text-[#d4af37] transition-all duration-300">
                    Treehousefarmland@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="#"
                  className="bg-[#d4af37]/10 p-2 rounded-xl hover:bg-[#d4af37] transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-[#d4af37] hover:text-[#0f1a2f]" />
                </a>
                <a
                  href="#"
                  className="bg-[#d4af37]/10 p-2 rounded-xl hover:bg-[#d4af37] transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 text-[#d4af37] hover:text-[#0f1a2f]" />
                </a>
                <a
                  href="#"
                  className="bg-[#d4af37]/10 p-2 rounded-xl hover:bg-[#d4af37] transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-[#d4af37] hover:text-[#0f1a2f]" />
                </a>
                <a
                  href="#"
                  className="bg-[#d4af37]/10 p-2 rounded-xl hover:bg-[#d4af37] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[#d4af37] hover:text-[#0f1a2f]" />
                </a>
              </div>

              <Link
                href={"/enquiry"}
                className="block w-full text-center bg-gradient-to-r from-[#d4af37] to-[#b8972e] hover:from-[#b8972e] hover:to-[#9c7e25] text-[#0f1a2f] rounded-xl px-4 py-3.5 font-bold transition-all shadow-lg hover:shadow-xl"
                onClick={toggleSidebar}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}