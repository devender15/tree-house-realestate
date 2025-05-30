export interface Property {
    id: string
    title: string
    location: string
    category: "new-launch" | "residential" | "commercial"
    image: string
    price?: string
    bhk?: string
    features?: string[]
    description?: string
  }
  
  export const properties: Property[] = [
    {
      id: "1",
      title: "BELAPERLA CENTRAL PARK RESORT",
      location: "Sector 48 Gurugram",
      category: "new-launch",
      image: "/assets/BELAPERLA CENTRAL PARK RESORT.jpeg",
      price: "₹2.5 Cr",
      bhk: "3-4 BHK",
      features: ["Swimming Pool", "Gym", "Garden", "Security"],
      description: "Luxury resort-style living with world-class amenities",
    },
    {
      id: "2",
      title: "EXPERION THE TRILLION",
      location: "Sector 48 Gurugram",
      category: "residential",
      image: "/assets/experion-the-trillion-1-thumbnail.jpg",
      price: "₹3.2 Cr",
      bhk: "4-5 BHK",
      features: ["Club House", "Sports Complex", "Retail Plaza"],
      description: "Premium residential complex with modern architecture",
    },
    {
      id: "3",
      title: "MNB ANANTA VILASA",
      location: "Sector 56 Gurugram",
      category: "residential",
      image: "/assets/mnb-ananta-vilasa-1.jpg",
      price: "₹1.8 Cr",
      bhk: "2-3 BHK",
      features: ["Green Spaces", "Kids Play Area", "Jogging Track"],
      description: "Serene living spaces surrounded by nature",
    },
    {
      id: "4",
      title: "TRUMP TOWERS",
      location: "Sector 65 Gurugram",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹5.5 Cr",
      bhk: "Office Spaces",
      features: ["Business Center", "Conference Rooms", "Parking"],
      description: "Premium commercial spaces for modern businesses",
    },
    {
      id: "5",
      title: "GODREJ ARISTOCRAT",
      location: "Sector 49 Gurugram",
      category: "new-launch",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹2.8 Cr",
      bhk: "3-4 BHK",
      features: ["Spa", "Yoga Studio", "Library", "Cafeteria"],
      description: "Elegant homes with sophisticated design and amenities",
    },
    {
      id: "6",
      title: "DLF PRIVANA",
      location: "Sector 76 Gurugram",
      category: "residential",
      image: "/assets/dlf-privana-west-sector-76-gurgaon-1.jpeg",
      price: "₹4.2 Cr",
      bhk: "4-5 BHK",
      features: ["Golf Course View", "Private Elevator", "Terrace Garden"],
      description: "Ultra-luxury residences with exclusive amenities",
    },
    {
      id: "7",
      title: "EMAAR PALM HILLS",
      location: "Sector 77 Gurugram",
      category: "new-launch",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹3.5 Cr",
      bhk: "3-4 BHK",
      features: ["Central Park", "Retail Boulevard", "School"],
      description: "Integrated township with complete lifestyle amenities",
    },
    {
      id: "8",
      title: "VATIKA CITY",
      location: "Sector 49 Gurugram",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹1.2 Cr",
      bhk: "Retail Spaces",
      features: ["Food Court", "Entertainment Zone", "Ample Parking"],
      description: "Prime retail and commercial spaces in bustling location",
    },
    {
      id: "9",
      title: "SOBHA INTERNATIONAL CITY",
      location: "Sector 109 Gurugram",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹2.1 Cr",
      bhk: "2-3 BHK",
      features: ["International School", "Hospital", "Shopping Mall"],
      description: "Self-sustained community with world-class infrastructure",
    },
  ]
  
  export const getPropertiesByCategory = (category: Property["category"]) => {
    return properties.filter((property) => property.category === category)
  }
  
  export const getAllProperties = () => properties
  