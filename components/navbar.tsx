"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

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

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 py-4 w-full transition-all overflow-hidden  ${
          scrolled ? "shadow-md  bg-slate-900" : "bg-slate-900"
        }`}
      >
        <div className=" px-4 sm:px-6 lg:px-10 xl:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-10">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Tree House Real Estate"
                width={40}
                height={40}
                className="rounded w-full h-full "
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-4 text-lg font-medium transition ${
                  scrolled
                    ? "text-slate-300 hover:text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/enquiry"
              className="hidden lg:block border-3 bg-blac border-white text-white hover:text-white/80 hover:border-white/80 px-6 py-2 text-lg font-semibold rounded-full transition"
            >
              Enquire Now
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className={`block lg:hidden h-10 w-10 transition ${
                scrolled
                  ? "hover:bg-slate-800 text-slate-100"
                  : "hover:bg-slate-100 text-slate-100"
              }`}
              onClick={toggleSidebar}
            >
              <Menu className="w-full h-full" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          />

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 z-50 h-full w-full sm:max-w-2/3 md:max-w-2/3 bg-white shadow-xl border-l border-slate-200 transform transition-transform duration-300 will-change-transform translate-x-0"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link
                  href="/"
                  onClick={toggleSidebar}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/assets/logo.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </div>
                  <span className="font-bold text-lg text-slate-900">
                    Tree House
                  </span>
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleSidebar}
                    className="block px-4 py-3 rounded text-slate-700 hover:bg-slate-100 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="border-t px-6 py-6 bg-slate-50 space-y-4">
                <a
                  href="tel:+919811098193"
                  className="flex gap-3 items-center text-slate-700 hover:text-slate-900"
                >
                  <div className="bg-slate-200 p-2 rounded-lg">
                    <Phone size={16} />
                  </div>
                  +91 9811098193
                </a>
                <a
                  href="mailto:treehousefarmland@gmail.com"
                  className="flex gap-3 items-center text-slate-700 hover:text-slate-900"
                >
                  <div className="bg-slate-200 p-2 rounded-lg">
                    <Mail size={16} />
                  </div>
                  Treehousefarmland@gmail.com
                </a>
                <Link
                  href="/enquiry"
                  onClick={toggleSidebar}
                  className="block w-full text-center bg-slate-900 text-white rounded-lg py-3 font-medium hover:bg-slate-800"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
