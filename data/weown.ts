export interface Property {
  id: number;
  title: string;
  location: string;
  category: string;
  area?: string;
  price?: string;
  features?: string[];
  image: string;
  contact: {
    agent: string;
    email: string;
    phone: string;
  };
}


export const ourProperties: Property[] = [
  {
    id: 1,
    title: "Pre-Rented Office Spaces – DLF Corporate Greens",
    location: "Sector 74, Gurgaon",
    category: "Commercial",
    area: "1,634 sq. ft. + 1,634 sq. ft.",
    price: "₹2.70 Crore",
    features: ["Rental Income: ₹1.20 Lac/month each"],
    image: "/assets/corporate-greens.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 2,
    title: "Industrial Plots – Khushkhera & Bhiwadi",
    location: "Khushkhera & Bhiwadi Industrial Area",
    category: "Industrial",
    area: "6000 sq. m (Khushkhera), 4000 sq. m (Bhiwadi)",
    price: "₹8 Cr each plot",
    features: [
      "6000 sq. m @ ₹25,000/sq. m (Khushkhera)",
      "Corner plot (Bhiwadi)",
      "Subdivided: 2000 + 2000 sq. m",
    ],
    image: "/assets/khuskhera.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 3,
    title: "Builder Floors & Kothis – Paschim Vihar",
    location: "Paschim Vihar, Delhi",
    category: "Residential",
    area: "370 sq. yd & 181 gaj",
    price: "₹33 Cr (Kothi), ₹13 Cr (Floor)",
    features: [
      "370 sq. yd Kothi @ ₹33 Cr (Main Road)",
      "181 gaj, 4-story builder floor @ ₹13 Cr",
      "Prime rental and builder location",
    ],
    image: "/assets/paschim-vihar.webp",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 4,
    title: "Hill View Plots – Sector 59, Gurgaon",
    location: "Near Hayatt Hotel, Sector 59, Gurgaon",
    category: "Residential Plots",
    area: "4 Plots, 1200 Gaj each",
    price: "₹40,000 per Gaj",
    features: [
      "Opposite UK’s university",
      "7km from Hayatt Hotel",
    ],
    image: "/assets/hill-view.avif",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 5,
    title: "Premium Kothi & Builder Floor – DLF Phase 3",
    location: "DLF Phase 3, Gurgaon",
    category: "Luxury",
    area: "500 Gaj (Kothi and Floor)",
    price: "₹22 Cr (Kothi), ₹8 Cr (Floor)",
    features: [
      "Newly built by DLF",
      "Top floor + terrace",
      "Fully furnished with premium fittings",
    ],
    image: "/assets/dlf.jpeg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 6,
    title: "Farm Land – Ansal Aravali Retreat",
    location: "Ansal Aravali Retreat",
    category: "Farm Land",
    area: "1 - 1 acre (farm), 1 acre (developed)",
    price: "₹3 Cr (raw), ₹3.50 Cr (developed)",
    features: ["Developed & raw options available"],
    image: "/assets/ansal-aravali.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 7,
    title: "Brand New Furnished Offices – DLF Corporate Greens",
    location: "Sector 74, Gurgaon",
    category: "Commercial",
    area: "3 units, 1,634 sq. ft. each",
    price: "₹2.70 Crore (each)",
    features: [
      "Brand new & beautifully furnished",
      "Fully furnished 3 office units",
    ],
    image: "/assets/dlf-corporate-new.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 8,
    title: "Industrial Plots – Salarpur & Bhiwadi",
    location: "Salarpur & Bhiwadi Industrial Area",
    category: "Industrial",
    area: "6000 sq. m (Salarpur), 4000 sq. m (Bhiwadi)",
    price: "₹8 Cr each plot",
    features: [
      "6000 sq. m @ ₹25,000/sq. m",
      "Corner plot (Bhiwadi)",
      "Subdivision: 2000 + 2000 sq. m",
    ],
    image: "/assets/industrial-bhiwadi.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 9,
    title: "Commercial Kothi & Floors – Paschim Vihar",
    location: "Paschim Vihar, Delhi",
    category: "Commercial",
    area: "370 sq. yd & 200 gaj",
    price: "₹33 Cr (Kothi), ₹13 Cr (Builder Floor)",
    features: [
      "Next to White House & McDonald's on 75m Road",
      "G-2 Kothi: 370 sq. yd @ ₹33 Cr",
      "Top location – G Block, 200 Gaj 4-story @ ₹13 Cr",
      "Ideal for builder floors & rental income",
    ],
    image: "/assets/paschim-commercial.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
];


