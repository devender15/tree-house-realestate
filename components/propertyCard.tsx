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
    <div className="">
      {/* card image */}
      <div className=" relative ">
        <Image
          src={image || "/assets/default.jpg"}
          width={600}
          height={450}
          alt="property image"
        />
        <span className="absolute top-3 right-2 bg-gray-600  px-3 text-white rounded-full text-sm ">
          {category}
        </span>
      </div>

      {/* card content */}
      <div className=" p-4 ">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-semibold pl-0.5">
            {title.toUpperCase()}
          </h1>
        </div>
        <div className="flex gap-2 text-gray-500 font-light ">
          {" "}
          <MapPinIcon width={18} /> {location}
        </div>

        {/* buttons */}
        <div className="flex gap-2 mt-4  ">
          <button className=" px-3 py-1.5 rounded-full border-gray-400 bg-red-400 text-white font-semibold hover:cursor-pointer hover:bg-red-500 ">
            enquire now
          </button>

          <Link
            href={`/details/${id}`}
            className="border border-red-400 text-red-500 font-semibold px-3 py-1.5 rounded-full transition ease-in   hover:bg-red-500 hover:text-white hover:cursor-pointer "
          >
            view details
          </Link>

          <button className=" rounded-full ">
            <MessageCircleMore
              width={35}
              height={35}
              color="green"
              className="font-light "
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
