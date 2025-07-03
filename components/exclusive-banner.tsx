"use client";

import { Crown, ArrowRight, Home, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ExclusiveBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-teal-100">
            <Crown className="w-4 h-4" />
            <span>EXCLUSIVE PROPERTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Properties in Gurgaon
            <span className="block text-teal-600 mt-2">
              Your Dream Investment Awaits
            </span>
          </h2>

          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover exclusive commercial, residential, farmhouse and farmland
            opportunities
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Home,
                title: "Commercial & Residential",
                description:
                  "Premium office spaces and luxury homes in prime locations",
                imageUrl: "url('/assets/commercial_bg.png')",
              },
              {
                icon: MapPin,
                title: "Farmhouse & Farmlands",
                description:
                  "Newly added exclusive farmhouse properties and agricultural lands",
                imageUrl: "url('/assets/farmhouse_bg.png')",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white h-50 lg:h-auto relative overflow-hidden rounded-sm md:rounded-md lg:rounded-xl p-6 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group"
                style={{
                  backgroundImage: feature.imageUrl,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "full",
                  height: "full",
                }}
              >
                <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-black/0 border z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 z-10">
                  <div className="p-5">
                    <h3 className="font-semibold text-white text-lg mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-100 leading-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm md:rounded-md lg:rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    +91 9811098193
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm break-all">
                    Treehousefarmland@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919509594949"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-sm md:rounded-md font-medium transition-colors duration-300 w-full"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Enquiry
              </a>

              <Link
                href={"/enquiry"}
                className="group w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-sm md:rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
