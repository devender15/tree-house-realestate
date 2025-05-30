import React from "react";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-poppins">
                TREE<span className="text-orange-500">HOUSE</span>
              </div>
              <p className="text-gray-400 mb-4 font-poppins">
                Your trusted partner in finding the perfect property investment.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-poppins text-black"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-poppins">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Rent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Plots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white font-poppins">
                    Resale
                  </a>
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
