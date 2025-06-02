"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
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
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-black/70 shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-3 flex items-center justify-between gap-4 bg-black/50 ">
          {/* LOGO */}
          <Link href="/" className="">
            <Image src={"/assets/logo.png"} alt="Logo" width={80} height={80} />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-wrap justify-center items-center gap-6 flex-shrink  ">
            {/* max-w 60% to give some breathing room, flex-wrap so links don't overlap */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm lg:text-md uppercase font-semibold tracking-wider text-white/80 hover:text-orange-400 transition-colors duration-200 group whitespace-nowrap"
                /* whitespace-nowrap prevents nav labels from breaking lines */
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* PHONE + ENQUIRE + MOBILE MENU */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0">
            {/* flex-shrink-0 to prevent shrinking */}

            {/* Phone Number - show only on large screens */}
            <a
              href="https://wa.me/+919811098193"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-sm lg:text-md font-semibold text-white/80  whitespace-nowrap"
              /* whitespace-nowrap to prevent phone number wrapping */
            >
              <Phone className="w-5 h-5 text-orange-400" />
              <span>+91 9811098193</span>
            </a>

            {/* Enquire Now */}
            <Link
              href={"/enquiry"}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold transition-all whitespace-nowrap"
              /* Added whitespace-nowrap to keep button text on single line */
            >
              Enquire Now
            </Link>

            {/* Hamburger Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="block lg:hidden text-white hover:text-orange-400 cursor-pointer "
              /* Fixed typo bloack -> block */
              onClick={toggleSidebar}
            >
              <Menu className="w-6 h-6 md:w-9" />
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-2/3 sm:w-2/3 md:w-100 bg-[#030E27] text-white z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-1 text-white hover:text-orange-400 cursor-pointer "
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleSidebar}
              className="text-base font-medium text-white/90 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
