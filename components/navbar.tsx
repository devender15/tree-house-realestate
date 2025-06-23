"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";

const navItems = [
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Our Owned", href: "/owned" },
  { label: "Farmhouse/Farmlands", href: "/farmhouse" },
  { label: "Plots", href: "/plot" },
  { label: "Rent", href: "/rent" },
  { label: "Resale", href: "/resale" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const scrolled = useScroll(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      <div className="hidden sm:block bg-slate-50 border-b border-slate-200 text-slate-600 text-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/+919811098193"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="font-medium">+91 9811098193</span>
            </a>
            <a
              href="mailto:info@treehouserealty.com"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors duration-200"
            >
              <Mail size={16} />
              <span className="font-medium">Treehousefarmland@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm font-medium">
              Follow us:
            </span>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition-colors duration-200"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "shadow-lg backdrop-blur-md bg-slate-900/90 "
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={"/assets/logo.png"}
                    alt="Tree House Real Estate"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                </div>
               
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Call to Action */}
            <div className="flex items-center gap-4">
              <Link
                href={"/enquiry"}
                className="hidden sm:block bg-orange-600 text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-slate-800 transition-colors duration-200"
              >
                Enquire Now
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`block lg:hidden h-10 w-10 transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-slate-100 text-slate-900"
                }`}
                onClick={toggleSidebar}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation for Tablets */}
        <div className="hidden md:block lg:hidden border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex overflow-x-auto py-2 hide-scrollbar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 whitespace-nowrap transition-colors duration-200"
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
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={toggleSidebar}
        />

        {/* Sidebar Content */}
        <div
          ref={sidebarRef}
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } shadow-xl border-l border-slate-200`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <Link
                href="/"
                onClick={toggleSidebar}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Image
                    src={"/assets/logo.png"}
                    alt="Tree House Real Estate"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg text-slate-900 leading-none">
                    Tree House
                  </h1>
                  {/* <p className="text-xs text-slate-500 font-medium tracking-wide">
                    REAL ESTATE
                  </p> */}
                </div>
              </Link>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleSidebar}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-200 px-6 py-6 bg-slate-50">
              <div className="space-y-4 mb-6">
                <a
                  href="tel:+919811098193"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors duration-200"
                >
                  <div className="bg-slate-200 p-2 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-medium">+91 9811098193</span>
                </a>
                <a
                  href="mailto:info@treehouserealty.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors duration-200"
                >
                  <div className="bg-slate-200 p-2 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    Treehousefarmland@gmail.com
                  </span>
                </a>
              </div>

              <div className="flex justify-center mb-6">
                <a
                  href="#"
                  className="bg-slate-200 p-3 rounded-lg hover:bg-slate-300 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <Link
                href={"/enquiry"}
                className="block w-full text-center bg-slate-900 text-white rounded-lg px-4 py-3 font-medium hover:bg-slate-800 transition-colors duration-200"
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
