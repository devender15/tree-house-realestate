"use client";

import {
  Crown,
  ArrowRight,
  Home,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function ExclusiveBanner() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden border-y border-orange-100 ">
      {/* Light background accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200/25 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="py-12 md:py-16  overflow-hidden">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Crown className="w-5 h-5" />
              <span className="tracking-wide">EXCLUSIVE PROPERTIES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent block mb-2">
                Premium Properties in Gurgaon
              </span>
              <span className="text-gray-800 block">
                Your Dream Investment Awaits
              </span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover exclusive commercial, residential, farmhouse and farmland
              opportunities
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left - Features */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {[
                  {
                    icon: Home,
                    title: "Commercial & Residential",
                    description:
                      "Premium office spaces and luxury homes in prime locations",
                  },
                  {
                    icon: MapPin,
                    title: "Farmhouse & Farmlands",
                    description:
                      "Newly added exclusive farmhouse properties and agricultural lands",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50 hover:border-orange-300 transition-all duration-300 hover:bg-white/90"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact & CTA */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50">
                <h3 className="font-bold text-gray-800 text-lg mb-4">
                  Get In Touch
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700 font-medium">
                      +91 9811098193
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700 font-medium">
                      Treehousefarmland@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/919509594949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-4 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>

                <Link
                  href={"/enquiry"}
                  className="group w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
