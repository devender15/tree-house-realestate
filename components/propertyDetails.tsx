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
    return <div className="mt-20 text-center text-xl">Property not found</div>;

  const { title, location, category, image, details } = property;
  const [activeTab, setActiveTab] = useState("overview");

  const tabClass = (tab: string) =>
    `whitespace-nowrap px-2 sm:px-4 py-2 font-medium transition border-b-2 ${
      activeTab === tab
        ? "border-orange-500 text-orange-500 font-semibold"
        : "border-transparent text-gray-500 hover:text-orange-500 hover:border-orange-500"
    }`;

  return (
    <div className="mt-40 pb-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content Section */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-gray-800">
          {title}
        </h1>
        <p className="text-gray-500 mb-4 flex items-center gap-2 text-sm sm:text-base">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.53-2.26 6.226-5 9.88C9.26 15.226 7 11.53 7 9z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {location}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Home className="w-4 h-4" />
            <span className="capitalize">{category}</span>
          </div>

          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
            ₹ Assured Best Price
          </span>
        </div>

        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src={image || "/assets/default.jpg"}
            alt="property image"
            layout="responsive"
            width={720}
            height={480}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="https://wa.me/919509594949"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 text-white py-3 rounded-full text-center shadow-md hover:bg-green-700 transition font-medium"
          >
            Whatsapp
          </a>
          <Link
            href={"/enquiry"}
            className="w-full bg-orange-500 text-white py-3 text-center rounded-full shadow-md hover:bg-orange-600 transition font-medium"
          >
            Get a Call back
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 overflow-x-scroll border-b my-8 text-base sm:text-lg scrollbar-hide">
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

        {/* Tab Content */}
        {activeTab === "overview" && details?.overview && (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
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
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Key Features
            </h2>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              {details.features?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "specifications" && details?.specifications && (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {details.specifications?.heading}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.specifications?.paragraph1}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.specifications?.paragraph2}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mt-4">
              Highlights
            </h3>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              {details.specifications?.highlights?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "location_advantage" && details?.location_advantage && (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {details.location_advantage?.heading}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.location_advantage?.paragraph1}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.location_advantage?.paragraph2}
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg">
              {details.location_advantage?.highlights?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "about_developer" && details?.about_developer && (
          <div className="space-y-4">
            {details.about_developer?.logo && (
              <div className="w-40">
                <Image
                  src={details.about_developer.logo}
                  alt="developer logo"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              {details.about_developer?.heading}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.about_developer?.paragraph1}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.about_developer?.paragraph2}
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {details.about_developer?.conclusion}
            </p>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="lg:sticky lg:top-32">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default PropertyDetails;
