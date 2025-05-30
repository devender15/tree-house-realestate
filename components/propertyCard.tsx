"use client";

import Image from "next/image";
import { MapPin, MapPinIcon, MessageCircle } from "lucide-react";

type CardData = {
  title: string;
  location: string;
  image: string;
};

const PropertyCard = ({ title, location, image }: CardData) => {
  return (
    <div className="border">
      <div className="border border-red-500">
        <Image src={image} width={600} height={450} alt="property image" />
      </div>
      <div className="border border-blue-300 p-4  ">
        <h1 className="text-lg font-semibold pl-0.5">{title}</h1>
        <div className="flex gap-2 text-gray-500 ">
          {" "}
          <MapPinIcon width={18} /> {location}
        </div>

        <div className="flex justify-end ">
          <button className="border px-3 py-1.5 rounded-full ml-3 ">enquire now</button>
          <button className="border px-3 py-1.5 rounded-full ml-3 ">view details</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
