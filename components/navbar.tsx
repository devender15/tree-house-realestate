"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Mail } from "lucide-react";
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

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

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
      <div className="bg-orange-600 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919811098193"
              className="flex items-center gap-1.5 hover:text-orange-100 transition"
            >
              <Phone size={14} /> <span>+91 9811098193</span>
            </a>
            <a
              href="mailto:info@treehouserealty.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-orange-100 transition"
            >
              <Mail size={14} /> <span>info@treehouserealty.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span>Follow us:</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-7 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "top-0" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between gap-4 rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-white shadow-lg py-2 px-4 border border-gray-100"
                : "bg-transparent py-3"
            }`}
          >
            {/* LOGO */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={"/assets/logo.png"}
                alt="Tree House Real Estate"
                width={scrolled ? 70 : 80}
                height={scrolled ? 70 : 80}
                className="transition-all duration-300"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group whitespace-nowrap ${
                    scrolled
                      ? "text-gray-800 hover:text-orange-600"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-current transition-all transform scale-x-0 group-hover:scale-x-100 ${
                      scrolled ? "bg-orange-600" : "bg-orange-300"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTAs + MOBILE MENU */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/enquiry"}
                className={`hidden sm:block rounded-full px-4 py-2 text-sm font-bold transition-all whitespace-nowrap ${
                  scrolled
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "bg-white hover:bg-orange-50 text-orange-700"
                }`}
              >
                Enquire Now
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className={`block lg:hidden cursor-pointer ${
                  scrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleSidebar}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-full max-w-sm bg-white text-gray-800 z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          shadow-2xl
        `}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <Link href="/" onClick={toggleSidebar}>
              <Image
                src={"/assets/logo.png"}
                alt="Tree House Real Estate"
                width={100}
                height={100}
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col px-6 py-8 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleSidebar}
                className="py-3 px-4 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t px-6 py-5 bg-gray-50">
            <div className="mb-4">
              <a
                href="tel:+919811098193"
                className="flex items-center gap-3 text-gray-800 font-medium py-2"
              >
                <Phone className="w-5 h-5 text-orange-600" />
                <span>+91 9811098193</span>
              </a>
              <a
                href="mailto:info@treehouserealty.com"
                className="flex items-center gap-3 text-gray-800 py-2"
              >
                <Mail className="w-5 h-5 text-orange-600" />
                <span>info@treehouserealty.com</span>
              </a>
            </div>
            <Link
              href={"/enquiry"}
              className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white rounded-full px-4 py-3 font-bold transition"
              onClick={toggleSidebar}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
