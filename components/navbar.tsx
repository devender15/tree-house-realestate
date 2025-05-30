"use client";

import { useScroll } from "@/hooks/use-scroll";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const navItems = [
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Plots", href: "/plots" },
  { label: "Rent", href: "/rent" },
  { label: "Resale", href: "/resale" },
  { label: "Our Owned Properties", href: "/owned-properties" },
];

export default function Navbar() {
  const scrolled = useScroll(20);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900 shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-poppins text-white">
          TREE<span className="text-orange-500">HOUSE</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-orange-500 transition-colors font-poppins"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact & Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 font-poppins text-white">
            <Phone className="w-4 h-4" />
            <span>+91-9999999999</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 font-poppins">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
