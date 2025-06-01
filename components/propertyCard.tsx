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
    <div className="bg-orange-100/50 rounded-lg shadow-md overflow-hidden">
      {/* card image */}
      <div className="relative">
        <Image
          src={image || "/assets/default.jpg"}
          width={600}
          height={450}
          alt="property image"
          className="w-full object-cover"
        />
        <span className="absolute top-3 right-2 bg-orange-600 px-3 py-1 text-white rounded-full text-sm font-medium">
          {category}
        </span>
      </div>

      {/* card content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-orange-700">
            {title.toUpperCase()}
          </h1>
        </div>
        <div className="flex gap-2 text-orange-500 font-light mt-1 items-center">
          <MapPinIcon width={18} /> {location}
        </div>

        {/* buttons */}
        <div className="flex gap-2 mt-4">
          <Link
            href={`/enquiry`}
            className="px-4 py-1.5 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            Enquire Now
          </Link>

          <Link
            href={`/details/${id}`}
            className="border border-orange-600 text-orange-600 font-semibold px-4 py-1.5 rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300"
          >
            View Details
          </Link>

          <a
            href="https://wa.me/919509594949"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
          >
            <MessageCircleMore
              width={35}
              height={35}
              color="#25D366"
              className="font-light"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
