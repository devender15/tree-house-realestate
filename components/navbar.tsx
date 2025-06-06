"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
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

  // Close sidebar when clicking outside
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

  // Close sidebar when window resizes to desktop size
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
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/+919811098193"
              className="flex items-center gap-2 hover:text-orange-100 transition group"
            >
              <Phone size={14} className="group-hover:animate-pulse" />
              <span>+91 9811098193</span>
            </a>
            <a
              href="mailto:info@treehouserealty.com"
              className="flex items-center gap-2 hover:text-orange-100 transition group"
            >
              <Mail size={14} className="group-hover:animate-pulse" />
              <span>Treehousefarmland@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-light">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition hover:scale-110"
              >
                <Facebook size={12} />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition hover:scale-110"
              >
                <Twitter size={12} />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition hover:scale-110"
              >
                <Instagram size={12} />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition hover:scale-110"
              >
                <Linkedin size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 z-10">
                <div className="bg-orange-100 rounded-xl p-1.5 shadow-md">
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
                {/* <div className="hidden md:block">
                  <h1 className="font-bold text-xl tracking-tight text-orange-700">
                    Tree House
                  </h1>
                  <p className="text-xs font-light tracking-widest text-gray-600">
                    REAL ESTATE SOLUTIONS
                  </p>
                </div> */}
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-5 py-3 text-base font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 group whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-8" />
                  </Link>
                ))}
              </nav>

              {/* Call to Action */}
              <div className="flex items-center gap-4">
                <Link
                  href={"/enquiry"}
                  className="hidden sm:block rounded-xl px-6 py-2.5 text-sm font-bold transition-all whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Enquire Now
                </Link>

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="block lg:hidden cursor-pointer rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-600"
                  onClick={toggleSidebar}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Navigation for Tablets */}
        <div className="bg-orange-50 hidden md:block lg:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex overflow-x-auto py-2 hide-scrollbar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 whitespace-nowrap"
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleSidebar}
        />

        {/* Sidebar Content */}
        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-md bg-gradient-to-b from-white to-orange-50 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } shadow-2xl`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white shadow-sm">
              <Link
                href="/"
                onClick={toggleSidebar}
                className="flex items-center gap-3"
              >
                <div className="bg-orange-100 rounded-xl p-1.5 shadow-md">
                  <div className="bg-white rounded-lg p-1">
                    <Image
                      src={"/assets/logo.png"}
                      alt="Tree House Real Estate"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                {/* <div>
                  <h1 className="font-bold text-lg text-orange-700 tracking-tight">
                    Tree House
                  </h1>
                  <p className="text-xs font-light text-gray-600 tracking-wide">
                    REAL ESTATE SOLUTIONS
                  </p>
                </div> */}
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-600 transition"
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
                  className="py-4 px-5 rounded-xl text-gray-700 hover:bg-orange-500 hover:text-white font-medium transition-all flex items-center gap-3 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:bg-white transition" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-orange-100 px-6 py-5 bg-white">
              <div className="mb-4">
                <a
                  href="tel:+919811098193"
                  className="flex items-center gap-4 text-gray-800 font-medium py-2.5 group"
                >
                  <div className="bg-orange-100 p-2 rounded-xl group-hover:bg-orange-500 transition">
                    <Phone className="w-5 h-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <span className="group-hover:text-orange-600 transition">
                    +91 9811098193
                  </span>
                </a>
                <a
                  href="mailto:info@treehouserealty.com"
                  className="flex items-center gap-4 text-gray-800 py-2.5 group"
                >
                  <div className="bg-orange-100 p-2 rounded-xl group-hover:bg-orange-500 transition">
                    <Mail className="w-5 h-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <span className="group-hover:text-orange-600 transition">
                    Treehousefarmland@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="#"
                  className="bg-orange-100 p-2 rounded-xl hover:bg-orange-500 transition"
                >
                  <Facebook className="w-5 h-5 text-orange-600 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-orange-100 p-2 rounded-xl hover:bg-orange-500 transition"
                >
                  <Twitter className="w-5 h-5 text-orange-600 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-orange-100 p-2 rounded-xl hover:bg-orange-500 transition"
                >
                  <Instagram className="w-5 h-5 text-orange-600 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-orange-100 p-2 rounded-xl hover:bg-orange-500 transition"
                >
                  <Linkedin className="w-5 h-5 text-orange-600 hover:text-white" />
                </a>
              </div>

              <Link
                href={"/enquiry"}
                className="block w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl px-4 py-3.5 font-bold transition shadow-md hover:shadow-lg"
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
