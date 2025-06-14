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
    <div className="bg-slate-100 backdrop-blur-md rounded-md shadow-lg p-4 sm:p-6 mx-auto w-full max-w-7xl ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="w-full  md:w-[20%] min-w-[180px]">
          <Select onValueChange={setPropertyType}>
            <SelectTrigger className="h-12 font-medium bg-white text-black w-full rounded-md border-2 border-gray-500 ">
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

        {/* Search Input */}
        <div className="flex-1 w-full">
          <Input
            placeholder="Location, Project, or Builder"
            className="h-12 bg-white text-black w-full border-2 border-gray-500 rounded-md font-normal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <Button
            className="w-full md:w-auto h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-md transition cursor-pointer "
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
