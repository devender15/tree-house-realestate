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
    <div
      className="
        bg-orange-100/50 rounded shadow-md overflow-hidden
        lg:min-w-0
        min-w-[300px]
      "
    >
      {/* card image */}
      <div className="relative">
        <Image
          src={image || "/assets/default.jpg"}
          width={600}
          height={360}
          alt="property image"
          className="w-full object-cover"
        />
        <span className="absolute top-3 right-2 bg-orange-600 px-2 lg:px-3 py-1 text-white rounded-full text-xs lg:text-sm  lg:font-medium badge capitalize ">
          {category}
        </span>
      </div>

      {/* card content */}
      <div className="px-2 py-3  lg:p-4 ">
        <div className="flex justify-between items-center">
          <h1 className=" text-lg lg:text-xl font-semibold text-orange-700 whitespace-nowrap overflow-hidden text-ellipsis">
            {title.toUpperCase()}
          </h1>
        </div>
        <div className="flex gap-1 lg:gap-2 text-orange-500 text-sm lg:text-md font-light mt-1 items-center whitespace-nowrap overflow-hidden text-ellipsis">
          <MapPinIcon width={18} /> {location}
        </div>

        {/* buttons */}
        <div className="mt-4 flex items-center lg:flex-wrap gap-2">
          <Link
            href={`/enquiry`}
            className=" px-2.5 lg:px-4 py-1.5 rounded-full bg-orange-600 text-white text-sm lg:text-md font-semibold hover:bg-orange-700 transition-colors duration-300 whitespace-nowrap"
          >
            Enquire Now
          </Link>

          <Link
            href={`/details/${id}`}
            className="border border-orange-600 text-orange-600 font-semibold px-2 lg:px-4 py-1.5 text-sm lg:text-md rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            View Details
          </Link>

          <a
            href="https://wa.me/+919811098193"
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
