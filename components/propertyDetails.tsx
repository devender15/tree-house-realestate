import { properties } from "@/data/properties";
import Image from "next/image";
import React from "react";

const PropertyDetails = ({ id }: { id: string }) => {
  const property = properties.find((p) => p.id === id);

  return (
    <div>
      {property ? (
        <div className="mt-20">
          <Image
            src={property.image || "/assets/default.jpg"}
            width={600}
            height={450}
            alt="property image"
          />
          <h1>{property.title}</h1>
          <p>{property.description}</p>
          <p>Location: {property.location}</p>
          {/* <p>Price: {property.price}</p> */}
        </div>
      ) : (
        "Property not found"
      )}
    </div>
  );
};

export default PropertyDetails;
