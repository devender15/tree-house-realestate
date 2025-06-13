import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] bg-cover opacity-10"></div>
      <footer className="bg-[#0f1a2f] text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Logo + Description */}
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
              <Link
                href="/enquiry"
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b8972e] hover:from-[#b8972e] hover:to-[#9c7e25] text-[#0f1a2f] px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Links */}
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

            {/* Property Types */}
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

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37] border-b border-[#d4af37]/30 pb-2">Contact Info</h4>
              <div className="space-y-5">
                {[
                  {
                    icon: <Phone className="w-5 h-5 text-[#d4af37]" />,
                    label: "Phone",
                    value: "+91-9811098193",
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-[#d4af37]" />,
                    label: "Email",
                    value: "Treehousefarmland@gmail.com",
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-[#d4af37]" />,
                    label: "Location",
                    value: "Delhi NCR, India",
                  },
                ].map(({ icon, label, value }) => (
                  <div className="flex items-start" key={label}>
                    <div className="bg-[#d4af37]/10 p-2 rounded-lg mr-4 mt-1">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[#a0aec0]">{label}</p>
                      <p className="text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#1e2d49] mt-12 pt-8 text-[#a0aec0]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-center sm:text-left">&copy; 2025 Tree House Real Estate. All rights reserved.</p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
