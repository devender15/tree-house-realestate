"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home } from "lucide-react";
import EnquiryForm from "./enquiryForm";
import { properties } from "@/data/properties";
import Link from "next/link";

const PropertyDetails = ({ id }: { id: string }) => {
  const property = properties.find((p) => p.id === id);

  if (!property)
    return (
      <div className="mt-32 text-center text-xl text-gray-600">
        Property not found
      </div>
    );

  const { title, location, category, image, details } = property;
  const [activeTab, setActiveTab] = useState("overview");

  const tabClass = (tab: string) =>
    `whitespace-nowrap px-4 py-3 font-medium transition-all duration-300 border-b-2 ${
      activeTab === tab
        ? "border-orange-500 text-orange-500 font-semibold"
        : "border-transparent text-gray-500 hover:text-orange-500 hover:border-orange-500"
    }`;

  return (
    <div className="mt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
      {/* Left Content Section */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold mb-2 text-gray-900 leading-tight">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-gray-600 flex items-center gap-2 text-base md:text-lg">
              <svg
                className="w-5 h-5 text-gray-600 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.53-2.26 6.226-5 9.88C9.26 15.226 7 11.53 7 9z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {location}
            </p>

            <div className="w-px h-5 bg-gray-300 mx-1"></div>

            <div className="flex items-center gap-2 text-gray-700 text-base md:text-lg">
              <Home className="w-5 h-5" />
              <span className="capitalize">{category}</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
              ₹ Assured Best Price
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={image || "/assets/default.jpg"}
            alt="Property image"
            layout="responsive"
            width={800}
            height={500}
            className="object-cover w-full"
            priority
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="https://wa.me/919509594949"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3.5 px-6 rounded-full text-center shadow-md hover:bg-green-700 transition-all duration-300 font-medium text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href={"/enquiry"}
            className="flex-1 bg-orange-500 text-white py-3.5 px-6 text-center rounded-full shadow-md hover:bg-orange-600 transition-all duration-300 font-medium text-base sm:text-lg"
          >
            Get a Call back
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-2 border-b border-gray-200">
          <div className="flex gap-1 sm:gap-4 overflow-x-auto pb-px scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {[
              "overview",
              "features",
              "specifications",
              "location_advantage",
              "about_developer",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={tabClass(tab)}
              >
                {tab === "overview"
                  ? "Overview"
                  : tab === "features"
                  ? "Features"
                  : tab === "specifications"
                  ? "Specifications"
                  : tab === "location_advantage"
                  ? "Location Advantage"
                  : "Developer"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="pt-6 pb-4">
          {activeTab === "overview" && details?.overview && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {details.overview?.heading}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.overview?.paragraph1}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.overview?.paragraph2}
              </p>
            </div>
          )}

          {activeTab === "features" && details?.features && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.features?.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-700 text-base sm:text-lg"
                  >
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "specifications" && details?.specifications && (
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {details.specifications?.heading}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.specifications?.paragraph1}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.specifications?.paragraph2}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-4 text-gray-900">
                Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.specifications?.highlights?.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-700 text-base sm:text-lg"
                  >
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "location_advantage" &&
            details?.location_advantage && (
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {details.location_advantage?.heading}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {details.location_advantage?.paragraph1}
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {details.location_advantage?.paragraph2}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {details.location_advantage?.highlights?.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 text-base sm:text-lg"
                    >
                      <span className="text-blue-500 mr-2 mt-1">📍</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {activeTab === "about_developer" && details?.about_developer && (
            <div className="space-y-5">
              <div className="flex items-center gap-5 mb-3">
                {details.about_developer?.logo && (
                  <div className="w-40 bg-white p-3 rounded-lg shadow-sm">
                    <Image
                      src={details.about_developer.logo}
                      alt="Developer logo"
                      width={160}
                      height={80}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                )}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {details.about_developer?.heading}
                </h2>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.about_developer?.paragraph1}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {details.about_developer?.paragraph2}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                {details.about_developer?.conclusion}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:sticky lg:top-32 h-fit">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default PropertyDetails;
