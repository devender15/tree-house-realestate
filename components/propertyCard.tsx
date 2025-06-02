"use client";

import Image from "next/image";
import { MapPinIcon, MessageCircleMore } from "lucide-react";
import Link from "next/link";

type CardData = {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
};

const PropertyCard = ({ id, title, location, image, category }: CardData) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 w-full max-w-[700px] my-2 mx-auto">
      {/* Image Section */}
      <div className="relative aspect-video">
        <Image
          src={image || "/assets/default.jpg"}
          fill
          alt={title}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize shadow-md">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1 mb-1">
          {title}
        </h2>

        <div className="flex items-center text-gray-600 text-sm sm:text-base mb-4">
          <MapPinIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Action Buttons - Optimized for mobile */}
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <Link
            href={`/enquiry`}
            className="flex-1 min-w-[70px] sm:min-w-[100px] bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-1.5 sm:px-3 rounded-lg text-center transition-colors duration-200 text-xs sm:text-sm md:text-base"
          >
            <span className="">Enquire</span>
          </Link>

          <Link
            href={`/details/${id}`}
            className="flex-1 min-w-[70px] sm:min-w-[100px] border border-orange-600 text-orange-600 hover:bg-orange-50 font-medium py-2 px-1.5 sm:px-3 rounded-lg text-center transition-colors duration-200 text-xs sm:text-sm md:text-base"
          >
            <span className="">Details</span>
          </Link>

          <a
            href="https://wa.me/+919811098193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-200 w-9 h-9 sm:w-12 sm:h-12"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircleMore className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
