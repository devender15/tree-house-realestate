"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import useEnquiryStore from "@/store/store";

const navItems = [
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Plots", href: "/plots" },
  { label: "Rent", href: "/rent" },
  { label: "Resale", href: "/resale" },
  { label: "About Us", href: "/about" },
  { label: "Our Owned", href: "/owned" },
];

export default function Navbar() {
  const { setEnquiry } = useEnquiryStore();
  const scrolled = useScroll(10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-black/70 shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-black tracking-wide font-mono text-white"
          >
            TREE<span className="text-orange-400">HOUSE</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm uppercase font-semibold tracking-wider text-white/80 hover:text-orange-400 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* PHONE + ENQUIRE + MOBILE MENU */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-white/80 font-medium">
              <Phone className="w-4 h-4 text-orange-400" />
              <span className="tracking-wide">+91-9999999999</span>
            </div>

            <Button
              onClick={() => setEnquiry(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-lg transition-all"
            >
              enquire now
            </Button>

            {/* HAMBURGER */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-orange-400"
              onClick={toggleSidebar}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* OVERLAY (only when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#030E27] text-white z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-1 text-white hover:text-orange-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* SIDEBAR LINKS */}
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleSidebar}
              className="text-base font-medium text-white/90 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
