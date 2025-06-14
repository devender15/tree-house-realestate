"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  MapPin,
  Phone,
  Check,
  ChevronRight,
  MessageSquare,
  Share2,
  Star,
  MoveRight,
} from "lucide-react";

import { properties } from "@/data/properties";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import EnquiryForm from "./enquiryForm";

const PropertyDetails = ({ id }: { id: string }) => {
  // Find the property by ID or use the first one as a fallback for preview
  const property = id ? properties.find((p) => p.id === id) : properties[0];

  if (!property)
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center space-y-4">
          <Building className="w-16 h-16 mx-auto text-slate-300" />
          <h2 className="text-2xl font-semibold text-slate-700">
            Property Not Found
          </h2>
          <p className="text-slate-500">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/properties">
            <Button variant="outline" className="mt-2">
              Browse Properties
            </Button>
          </Link>
        </div>
      </div>
    );

  const { title, location, category, image, details } = property;
  const similarProperties = properties.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Section with Image */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <Image
          src={image || "/placeholder.svg?height=800&width=1200"}
          alt={title}
          fill
          className="object-cover w-full h-full brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-slate-700/80 hover:bg-slate-700/90 mb-3 text-white">
              {category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-3 mb-3 text-slate-200">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-4 sm:px-6 md:px-48 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-none shadow-lg">
              {/* Quick Actions */}
              <div className="bg-white p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium"
                  >
                    ₹ Assured Best Price
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200 font-medium"
                  >
                    Dec 2025 Possession
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-slate-600"
                  >
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                </div>
              </div>

              {/* Tabs Section */}
              <Tabs defaultValue="overview" className="w-full">
                <div className="bg-white px-4 border-b border-slate-100">
                  <TabsList className="h-12 bg-transparent gap-2 justify-start w-full overflow-x-auto">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-slate-100 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-700 px-4"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-slate-100 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-700 px-4"
                    >
                      Features
                    </TabsTrigger>
                    <TabsTrigger
                      value="specifications"
                      className="data-[state=active]:bg-slate-100 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-700 px-4"
                    >
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="location_advantage"
                      className="data-[state=active]:bg-slate-100 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-700 px-4"
                    >
                      Location
                    </TabsTrigger>
                    <TabsTrigger
                      value="about_developer"
                      className="data-[state=active]:bg-slate-100 rounded-none border-b-2 border-transparent data-[state=active]:border-slate-700 px-4"
                    >
                      Developer
                    </TabsTrigger>
                  </TabsList>
                </div>

                <CardContent className="p-6 md:p-8">
                  <TabsContent value="overview" className="mt-0 space-y-5">
                    {details?.overview && (
                      <>
                        <h2 className="text-2xl font-semibold text-slate-800">
                          {details.overview?.heading}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {details.overview?.paragraph1}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {details.overview?.paragraph2}
                        </p>

                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[
                            { label: "Project Area", value: "5.5 Acres" },
                            { label: "Total Units", value: "1200" },
                            { label: "Unit Types", value: "2, 3, 4 BHK" },
                            { label: "RERA ID", value: "HR123456" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="bg-slate-50 p-4 rounded-lg"
                            >
                              <div className="text-sm text-slate-500">
                                {item.label}
                              </div>
                              <div className="font-semibold text-slate-900">
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="features" className="mt-0 space-y-5">
                    <h2 className="text-2xl font-semibold text-slate-800">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {details?.features?.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg"
                        >
                          <div className="mt-1">
                            <Check className="h-5 w-5 text-emerald-500" />
                          </div>
                          <span className="text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="specifications"
                    className="mt-0 space-y-5"
                  >
                    {details?.specifications && (
                      <>
                        <h2 className="text-2xl font-semibold text-slate-800">
                          {details.specifications?.heading}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {details.specifications?.paragraph1}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {details.specifications?.paragraph2}
                        </p>

                        <h3 className="text-xl font-semibold text-slate-800 mt-6">
                          Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {details.specifications?.highlights?.map(
                            (point, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg"
                              >
                                <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                                  <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
                                </div>
                                <span className="text-slate-700">{point}</span>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent
                    value="location_advantage"
                    className="mt-0 space-y-5"
                  >
                    {details?.location_advantage && (
                      <>
                        <h2 className="text-2xl font-semibold text-slate-800">
                          {details.location_advantage?.heading}
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                          {details.location_advantage?.paragraph1}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {details.location_advantage?.paragraph2}
                        </p>

                        <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-orange-400" />
                            Connectivity Highlights
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                              {
                                place: "Indira Gandhi Airport",
                                distance: "18 km",
                                time: "25 min",
                              },
                              {
                                place: "MG Road Metro Station",
                                distance: "5 km",
                                time: "8 min",
                              },
                              {
                                place: "Ambience Mall",
                                distance: "3 km",
                                time: "5 min",
                              },
                              {
                                place: "Medanta Hospital",
                                distance: "7 km",
                                time: "10 min",
                              },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <div className="bg-orange-500 w-2 h-2 rounded-full"></div>
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {item.place}
                                  </div>
                                  <div className="text-slate-400 text-sm mt-1">
                                    {item.distance} | {item.time} drive
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <button className="mt-6 w-full py-3.5 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                            View Map Directions{" "}
                            <MoveRight className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </TabsContent>

                  <TabsContent
                    value="about_developer"
                    className="mt-0 space-y-5"
                  >
                    {details?.about_developer && (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-4">
                          {details.about_developer?.logo && (
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 w-40 h-20 flex items-center justify-center">
                              <div className="bg-slate-200 border-2 border-dashed rounded-xl w-full h-full" />
                            </div>
                          )}
                          <div>
                            <h2 className="text-2xl font-semibold text-slate-800">
                              {details.about_developer?.heading}
                            </h2>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs">
                                25+ Years Experience
                              </span>
                              <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs">
                                CRISIL Rated
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {details.about_developer?.paragraph1}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {details.about_developer?.paragraph2}
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 mt-4">
                          <p className="text-slate-700 font-medium">
                            {details.about_developer?.conclusion}
                          </p>
                        </div>
                      </>
                    )}
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919509594949"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Enquiry
              </a>
              <Link
                href={"/enquiry"}
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <Phone className="h-5 w-5" />
                Request Callback
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="bg-slate-800 text-white p-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Enquire Now
                </h3>
              </div>
              <CardContent className="p-5">
                <EnquiryForm />
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Similar Properties Section */}
        <div className="my-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Similar Properties
            </h2>
            <Link
              href={`/${property.category}`}
              className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              View all <MoveRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarProperties.map((property) => (
              <Link
                href={`/details/${property.id}`}
                key={property.id}
                className="group block relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  {/* Title positioned at bottom left */}
                  <h3 className="absolute bottom-3 left-3 right-3 text-lg font-bold text-white line-clamp-1">
                    {property.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
