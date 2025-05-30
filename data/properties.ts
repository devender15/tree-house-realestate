export interface Property {
  id: string;
  title: string;
  location: string;
  category: "new-launch" | "residential" | "commercial";
  image: string;
  price?: string;
  bhk?: string;
  features?: string[];
  description?: string;
  search: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    title: "M3M Urbana",
    location: "Sector 67, Gurugram, Gurgaon",
    search: ["Golf Course Ext Road", "Sector 67"],
    category: "residential",
    image: "/assets/experion-the-trillion-1-thumbnail.jpg",
    price: "₹12 Cr",
    bhk: "NA",
    features: [
      "Retail & Office Mix",
      "Central Air Conditioning",
      "Easy Access to NH8",
    ],
    description: "Modern mixed-use development with retail and office spaces",
  },
  {
    id: "2",
    title: "DLF Cyber City",
    location: "Cyber City, Gurugram, Gurgaon",
    search: ["New Gurgaon", "Cyber City"],
    category: "commercial",
    image: "/assets/dlf-cyber-city.jpg",
    price: "₹50 Cr",
    bhk: "NA",
    features: [
      "Grade A Office Spaces",
      "High-Speed Elevators",
      "Ample Parking",
    ],
    description:
      "Premium office spaces in the heart of Gurugram's business district",
  },
  {
    id: "3",
    title: "The Address",
    location: "Sector 104, Noida, Delhi NCR",
    search: ["New Gurgaon", "Sector 104"],
    category: "residential",
    image: "/assets/the-address-noida.jpg",
    price: "₹85 Lakh",
    bhk: "3 BHK",
    features: ["Swimming Pool", "24/7 Security", "Clubhouse Access"],
    description: "Luxury apartments with modern amenities and green spaces",
  },
  {
    id: "4",
    title: "Tata Primanti",
    location: "Sector 72, Gurugram, Gurgaon",
    search: ["Sothern Pheripery Road", "Sector 72"],
    category: "new-launch",
    image: "/assets/tata-primanti.jpg",
    price: "₹1.2 Cr",
    bhk: "2 BHK",
    features: [
      "Eco-Friendly Construction",
      "Smart Home Features",
      "Close to Metro Station",
    ],
    description:
      "Newly launched sustainable housing project with smart features",
  },
  {
    id: "5",
    title: "Ireo Victory Valley",
    location: "Sector 67, Gurugram, Gurgaon",
    search: ["Golf Course Ext Road", "Sector 67"],
    category: "residential",
    image: "/assets/ireo-victory-valley.jpg",
    price: "₹3.5 Cr",
    bhk: "4 BHK",
    features: ["Golf Course View", "Gym & Spa", "Children's Play Area"],
    description: "Luxury villas with beautiful golf course views",
  },
  {
    id: "6",
    title: "Paras Downtown",
    location: "Sector 59, Gurugram, Gurgaon",
    search: ["Golf Course Ext Road", "Sector 59"],
    category: "commercial",
    image: "/assets/paras-downtown.jpg",
    price: "₹15 Cr",
    bhk: "NA",
    features: ["Retail Spaces", "Food Court", "Multi-level Parking"],
    description: "Commercial retail complex with modern facilities",
  },
  {
    id: "7",
    title: "Godrej Air",
    location: "Sector 150, Noida, Delhi NCR",
    search: ["New Gurgaon", "Sector 150"],
    category: "new-launch",
    image: "/assets/godrej-air.jpg",
    price: "₹75 Lakh",
    bhk: "3 BHK",
    features: ["Eco-friendly Design", "Jogging Track", "Community Hall"],
    description:
      "Environment-friendly residential township with modern amenities",
  },
  {
    id: "8",
    title: "DLF One Horizon Center",
    location: "Golf Course Road, Gurugram, Gurgaon",
    search: ["Golf Course Road"],
    category: "commercial",
    image: "/assets/dlf-one-horizon.jpg",
    price: "₹100 Cr",
    bhk: "NA",
    features: [
      "LEED Platinum Rated",
      "High-Speed Internet",
      "Cafeteria & Lounge",
    ],
    description: "Premium office tower with world-class facilities",
  },
  {
    id: "9",
    title: "Emaar Palm Heights",
    location: "Sector 77, Gurugram, Gurgaon",
    search: ["Dwarka Expressway", "Sector 77"],
    category: "residential",
    image: "/assets/emaar-palm-heights.jpg",
    price: "₹1.1 Cr",
    bhk: "3 BHK",
    features: ["Lake View", "Swimming Pool", "24/7 Security"],
    description: "Spacious apartments with serene lake views",
  },
  {
    id: "10",
    title: "Unitech Cyber Park",
    location: "Sector 39, Gurugram, Gurgaon",
    search: ["Golf Course Road", "Sector 39"],
    category: "commercial",
    image: "/assets/unitech-cyber-park.jpg",
    price: "₹35 Cr",
    bhk: "NA",
    features: ["Business Lounge", "Conference Rooms", "Centralized AC"],
    description: "Modern commercial offices in the heart of Gurugram",
  },
];

export const getPropertiesByCategory = (category: Property["category"]) => {
  return properties.filter((property) => property.category === category);
};

export const getAllProperties = () => properties;
