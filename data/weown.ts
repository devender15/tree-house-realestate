export interface Property {
  id: number;
  title: string;
  location: string;
  category: string;
  details: string[];
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
    details: [
      "Size: 1,634 sq. ft. + 1,634 sq. ft.",
      "Rental Income: ₹1.20 Lac/month each",
      "Asking Price: ₹2.70 Crore",
    ],
    image: "/assets/corporate-greens.jpg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
  {
    id: 2,
    title: "Industrial Plots for Sale – Khushkhera & Bhiwadi",
    location: "Khushkhera & Bhiwadi Industrial Area",
    category: "Industrial",
    details: [
      "6000 sq. m @ ₹25,000/sq. m (Khushkhera)",
      "4000 sq. m (Corner plot, Bhiwadi Phase 1)",
      "Subdivided: 2000 + 2000 sq. m",
      "Price: ₹8 Cr each plot",
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
    details: [
      "370 sq. yd Kothi @ ₹33 Cr (Main Road)",
      "181 gaj, 4-story floor @ ₹13 Cr",
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
    details: [
      "4 Plots: 1200–1200 Gaj each",
      "Opp. UK’s university",
      "7km from Hayatt Hotel",
      "Price: ₹40,000 per Gaj",
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
    details: [
      "Kothi: 500 Gaj on Siris Road @ ₹22 Cr",
      "Builder Floor: 500 Gaj @ ₹8 Cr",
      "Newly built by DLF with top floor + terrace",
      "Fully furnished with premium fittings",
    ],
    image: "/assets/dlf.jpeg",
    contact: {
      agent: "Neeraj Agarwal",
      email: "treehouse6102@gmail.com",
      phone: "9811098193",
    },
  },
];
