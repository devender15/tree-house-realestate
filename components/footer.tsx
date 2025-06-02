import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-poppins">
                <Image
                  src={"/assets/logo.png"}
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-gray-400 mb-4 font-poppins">
                Your trusted partner in finding the perfect property investment.
              </p>
              <div className="flex space-x-4 ">
                <Link
                  href="/enquiry"
                  className="bg-white px-2 py-2 rounded-sm font-poppins text-black"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/residential"
                    className="hover:text-white font-poppins"
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commercial"
                    className="hover:text-white font-poppins"
                  >
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/rent" className="hover:text-white font-poppins">
                    Rent
                  </Link>
                </li>
                <li>
                  <Link href="/plot" className="hover:text-white font-poppins">
                    Plots
                  </Link>
                </li>
                <li>
                  <Link href="/resale" className="hover:text-white font-poppins">
                    Resale
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">
                Property Types
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Apartments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Plots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Commercial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center font-poppins">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91-9999999999</span>
                </div>
                <div className="flex items-center font-poppins">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@primeestates.com</span>
                </div>
                <div className="flex items-center font-poppins">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-poppins">
            <p>&copy; 2025 Tree House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
