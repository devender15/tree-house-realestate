"use client";

import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import useEnquiryStore from "@/store/store";

const navItems = [
  { label: "Commercial", href: "/commercial" },
  { label: "Residential", href: "/residential" },
  { label: "Plots", href: "/plots" },
  { label: "Rent", href: "/rent" },
  { label: "Resale", href: "/resale" },
  { label: "Our Properties", href: "/owned-properties" },
];

export default function Navbar() {
  const { setEnquiry } = useEnquiryStore();

  const scrolled = useScroll(10);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-black/70 shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-black tracking-wide font-mono text-white"
        >
          TREE<span className="text-orange-400">HOUSE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm uppercase font-semibold tracking-wider text-white/80 hover:text-orange-400 transition-colors duration-200"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

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

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-orange-400"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
