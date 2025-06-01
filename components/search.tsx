"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (propertyType) queryParams.append("type", propertyType);
    if (searchQuery) queryParams.append("query", searchQuery);

    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-md p-4 sm:p-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-1/4">
          <Select onValueChange={setPropertyType}>
            <SelectTrigger className="h-12 font-medium text-black w-full border">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:flex-1">
          <Input
            placeholder="Location, Project, or Builder"
            className="h-12 text-black w-full border font-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full md:w-auto">
          <Button
            className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-md transition"
            onClick={handleSearch}
          >
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
