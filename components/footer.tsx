import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t md:pb-20 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Logo & CTA */}
            <div className="flex flex-col items-start">
              <Image src="/assets/logo.png" alt="Tree House Realty" width={100} height={100} className="mb-6" />
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Residential", "Commercial", "Rent", "Plots", "Resale"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="font-semibold text-white text-lg mb-4">Property Types</h4>
              <ul className="space-y-2">
                {["Apartments", "Villas", "Plots", "Commercial", "Luxury Homes"].map((type) => (
                  <li key={type}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <a href="tel:+919811098193" className="text-gray-400 hover:text-white transition-colors duration-300">
                    +91-9811098193
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:Treehousefarmland@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 break-all"
                  >
                    Treehousefarmland@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-400">Gurgaon, Haryana</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <span className="text-gray-500">&copy; 2025 Tree House Realty. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
