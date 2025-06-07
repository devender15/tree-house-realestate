"use client";

import Image from "next/image";
import { MapPinIcon } from "lucide-react";
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
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/assets/default.jpg"}
          fill
          alt={title}
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
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

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <Link
            href={`/enquiry`}
            className="flex-1 min-w-[70px] sm:min-w-[100px] bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-1.5 sm:px-3 rounded-lg text-center transition-colors duration-200 text-xs sm:text-sm md:text-base"
          >
            <span>Enquire</span>
          </Link>

          <Link
            href={`/details/${id}`}
            className="flex-1 min-w-[70px] sm:min-w-[100px] border border-orange-600 text-orange-600 hover:bg-orange-50 font-medium py-2 px-1.5 sm:px-3 rounded-lg text-center transition-colors duration-200 text-xs sm:text-sm md:text-base"
          >
            <span>Details</span>
          </Link>

          <a
            href="https://wa.me/+919811098193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200 w-9 h-9 sm:w-12 sm:h-12"
            aria-label="Contact via WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
