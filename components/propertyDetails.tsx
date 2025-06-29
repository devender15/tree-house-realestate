"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Building,
  MapPin,
  Phone,
  Check,
  ChevronRight,
  Share2,
  Star,
  MoveRight,
  Calendar,
  Home,
  Users,
  Award,
  Navigation,
  Clock,
  Car,
  ShoppingBag,
  Hospital,
} from "lucide-react"
import { properties } from "@/data/properties"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import EnquiryForm from "./enquiryForm"

const PropertyDetails = ({ id }: { id: string }) => {
  const property = id ? properties.find((p) => p.id === id) : properties[0]

  if (!property)
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center space-y-4">
          <Building className="w-16 h-16 mx-auto text-slate-300" />
          <h2 className="text-2xl font-semibold text-slate-700">Property Not Found</h2>
          <p className="text-slate-500">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/properties">
            <Button variant="outline" className="mt-2 bg-transparent">
              Browse Properties
            </Button>
          </Link>
        </div>
      </div>
    )

  const { title, location, category, image, details } = property
  const similarProperties = properties.filter((p) => p.id !== id && p.category === category).slice(0, 3)

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=800&width=1200"}
          alt={title}
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-6 md:mx-12 lg:mx-24">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">{category}</Badge>
              <Badge className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2">
                <Calendar className="h-4 w-4 mr-1" />
                Dec 2025 Possession
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{title}</h1>

            <div className="flex items-center gap-3 text-white/90 text-lg mb-6">
              <MapPin className="h-5 w-5" />
              <span>{location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919509594949"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>

              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-md border border-white/30 px-6 py-4 rounded-full"
              >
                <Phone className="h-5 w-5 " />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-2 md:mx-12 lg:mx-45 mt-20 relative z-10">
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Property Overview */}
            {details?.overview && (
              <Card className="bg-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{details.overview.heading}</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                    <p className="leading-relaxed">{details.overview.paragraph1}</p>
                    <p className="leading-relaxed">{details.overview.paragraph2}</p>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Check className="h-5 w-5 text-emerald-600" />
                      <span className="font-semibold text-slate-900">Assured Best Price</span>
                    </div>
                    <p className="text-slate-700">
                      Get the best deal with our price match guarantee and exclusive offers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features Grid */}
            {details?.features && (
              <Card className="bg-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Premium Features</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 group"
                      >
                        <div className="bg-emerald-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Specifications */}
            {details?.specifications && (
              <Card className="bg-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{details.specifications.heading}</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-slate-700 space-y-4 mb-8">
                    <p className="leading-relaxed">{details.specifications.paragraph1}</p>
                    <p className="leading-relaxed">{details.specifications.paragraph2}</p>
                  </div>

                  {details.specifications.highlights && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {details.specifications.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-xl border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors duration-300"
                          >
                            <div className="bg-orange-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-slate-700 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Location & Connectivity */}
            {details?.location_advantage && (
              <Card className="bg-slate-900 text-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">{details.location_advantage.heading}</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-slate-300 space-y-4 mb-8">
                    <p className="leading-relaxed">{details.location_advantage.paragraph1}</p>
                    <p className="leading-relaxed">{details.location_advantage.paragraph2}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: Navigation, place: "Indira Gandhi Airport", distance: "18 km", time: "25 min" },
                      { icon: Car, place: "MG Road Metro Station", distance: "5 km", time: "8 min" },
                      { icon: ShoppingBag, place: "Ambience Mall", distance: "3 km", time: "5 min" },
                      { icon: Hospital, place: "Medanta Hospital", distance: "7 km", time: "10 min" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors duration-300"
                      >
                        <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.place}</div>
                          <div className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                            <span>{item.distance}</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold text-lg">
                    <Navigation className="h-5 w-5 mr-2" />
                    View Location on Map
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Developer Information */}
            {details?.about_developer && (
              <Card className="bg-white shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    {details.about_developer.logo && (
                      <div className="bg-slate-100 p-6 rounded-xl w-32 h-20 flex items-center justify-center">
                        <div className="bg-slate-300 border-2 border-dashed border-slate-400 rounded-lg w-full h-full flex items-center justify-center">
                          <Building className="h-8 w-8 text-slate-500" />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-slate-900 mb-3">{details.about_developer.heading}</h2>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                          25+ Years Experience
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">CRISIL Rated</Badge>
                        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Award Winner</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                    <p className="leading-relaxed">{details.about_developer.paragraph1}</p>
                    <p className="leading-relaxed">{details.about_developer.paragraph2}</p>
                  </div>

                  {details.about_developer.conclusion && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border-l-4 border-slate-900">
                      <p className="text-slate-800 font-semibold italic">"{details.about_developer.conclusion}"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-30">
              <EnquiryForm />
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-20 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Similar Properties You Might Like</h2>
            <Link
              href={`/${category}`}
              className="text-orange-600 hover:text-orange-700 flex items-center gap-2 font-semibold"
            >
              View All Properties
              <MoveRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProperties.map((similarProperty) => (
              <Link href={`/details/${similarProperty.id}`} key={similarProperty.id} className="group block">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={similarProperty.image || "/placeholder.svg?height=300&width=400"}
                      alt={similarProperty.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                      {similarProperty.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                      {similarProperty.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{similarProperty.location}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-slate-500">Starting from</span>
                      <ChevronRight className="h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
