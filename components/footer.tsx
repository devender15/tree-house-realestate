import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/footer-bg.jpg')] bg-cover opacity-5"></div>
      <footer className="bg-slate-900 text-slate-300 py-12 lg:pb-50 relative z-10">
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
                  className=""
                />
              </div>
              <p className="text-slate-400 mb-6 font-light leading-relaxed text-sm lg:text-base">
                Your premier partner in discovering exceptional property
                investments that stand the test of time.
              </p>
              <Link
                href="/enquiry"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium shadow-lg  transition-all duration-300 transform text-md"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-2xl mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Residential", "Commercial", "Rent", "Plots", "Resale"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase()}`}
                        className="text-white/70 hover:text-white transition-all duration-300 flex items-center group text-lg"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="font-bold text-2xl mb-6 text-white">
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
                      className="text-white/70 hover:text-white transition-all duration-300 flex items-center group text-lg"
                    >
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-2xl mb-6 text-white">
                Contact Info
              </h4>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-white" />,
                    label: "Phone",
                    value: "+91-9811098193",
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-white" />,
                    label: "Email",
                    value: "Treehousefarmland@gmail.com",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-white" />,
                    label: "Location",
                    value: "Gurgaon, Haryana",
                  },
                ].map(({ icon, label, value }) => (
                  <div className="flex justify-center items-center " key={label}>
                    <div className="mr-3 mt-0.5 flex-shrink-0">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1 ">
                      <p className="text-white text-sm space-y-auto break-words">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
