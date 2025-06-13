import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] bg-cover opacity-10"></div>
      <footer className="bg-[#0f1a2f] text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="mb-6">
                <Image
                  src={"/assets/logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="bg-white p-2 rounded-xl"
                />
              </div>
              <p className="text-[#a0aec0] mb-6 font-light leading-relaxed">
                Your premier partner in discovering exceptional property investments that stand the test of time.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/enquiry"
                  className="bg-gradient-to-r from-[#d4af37] to-[#b8972e] hover:from-[#b8972e] hover:to-[#9c7e25] text-[#0f1a2f] px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37] border-b border-[#d4af37]/30 pb-2">Quick Links</h4>
              <ul className="space-y-4">
                {["Residential", "Commercial", "Rent", "Plots", "Resale"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-[#a0aec0] hover:text-[#d4af37] transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37] border-b border-[#d4af37]/30 pb-2">Property Types</h4>
              <ul className="space-y-4">
                {["Apartments", "Villas", "Plots", "Commercial", "Luxury Homes"].map((type) => (
                  <li key={type}>
                    <a 
                      href="#" 
                      className="text-[#a0aec0] hover:text-[#d4af37] transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37] border-b border-[#d4af37]/30 pb-2">Contact Info</h4>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-2 rounded-lg mr-4 mt-1">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-[#a0aec0]">Phone</p>
                    <p className="text-white">+91-9811098193</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-2 rounded-lg mr-4 mt-1">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-[#a0aec0]">Email</p>
                    <p className="text-white">Treehousefarmland@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#d4af37]/10 p-2 rounded-lg mr-4 mt-1">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-[#a0aec0]">Location</p>
                    <p className="text-white">Delhi NCR, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1e2d49] mt-12 pt-8 text-center text-[#a0aec0]">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2025 Tree House Real Estate. All rights reserved.</p>
              <div className="mt-4 md:mt-0 flex gap-6">
                <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;