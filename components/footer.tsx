import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] bg-cover opacity-5"></div>
      <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo + Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src={"/assets/logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="bg-white p-2 rounded-xl shadow-lg"
                />
              </div>
              <p className="text-slate-400 mb-6 font-light leading-relaxed text-sm lg:text-base">
                Your premier partner in discovering exceptional property
                investments that stand the test of time.
              </p>
              <Link
                href="/enquiry"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-orange-500 border-b border-orange-500/30 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Residential", "Commercial", "Rent", "Plots", "Resale"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="text-slate-400 hover:text-orange-500 transition-all duration-300 flex items-center group text-sm"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-orange-500 border-b border-orange-500/30 pb-2">
                Property Types
              </h4>
              <ul className="space-y-3">
                {[
                  "Apartments",
                  "Villas",
                  "Plots",
                  "Commercial",
                  "Luxury Homes",
                ].map((type) => (
                  <li key={type}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-orange-500 transition-all duration-300 flex items-center group text-sm"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-orange-500 border-b border-orange-500/30 pb-2">
                Contact Info
              </h4>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-4 h-4 text-orange-500" />,
                    label: "Phone",
                    value: "+91-9811098193",
                  },
                  {
                    icon: <Mail className="w-4 h-4 text-orange-500" />,
                    label: "Email",
                    value: "Treehousefarmland@gmail.com",
                  },
                  {
                    icon: <MapPin className="w-4 h-4 text-orange-500" />,
                    label: "Location",
                    value: "Gurgaon, Haryana",
                  },
                ].map(({ icon, label, value }) => (
                  <div className="flex items-start" key={label}>
                    <div className="bg-orange-500/10 p-2 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-500 text-xs uppercase tracking-wide font-medium">
                        {label}
                      </p>
                      <p className="text-slate-300 text-sm mt-1 break-words">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
              <p className="text-center sm:text-left text-sm">
                &copy; {new Date().getFullYear()} Tree House Real Estate. All
                rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
