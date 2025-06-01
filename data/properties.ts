export interface Property {
  id: string;
  title: string;
  location: string;
  category: "new-launch" | "residential" | "commercial" | "rent" | "plots" | "resale";
  image: string;
  price?: string;
  bhk?: string;
  features?: string[];
  description?: string;
  search: string[];
  details?: {
    overview?: {
      heading?: string;
      paragraph1?: string;
      paragraph2?: string;
    },
    features?: string[];
    specifications?: {
      heading?: string;
      paragraph1?: string;
      paragraph2?: string;
      highlights?: string[];
    },
    location_advantage?: {
      heading?: string;
      paragraph1?: string;
      paragraph2?: string;
      highlights?: string[];
    },
    about_developer?: {
      logo?: string;
      heading?: string;
      paragraph1?: string;
      paragraph2?: string;
      conclusion?: string;
    },
    [key: string]: any;
  }
}


export const properties: Property[] = [

  {
    id: "1",
    title: "Belaperla Central Park Resort",
    location: "Sector 48, Gurugram, Gurgaon",
    search: ["Sector 48", "gurugram", "gurgaon", "Belaperla Central Park Resort"],
    category: "residential",
    image: "/assets/residential/belaperla-central-park-resort-thumbnail.jpg",
    details: {
      overview: {
        heading: "Welcome to Belaperla Central Park Resort, Sector 48 Gurgaon – Where Global Luxury Meets Everyday Living",
        paragraph1: "Discover a new dimension of luxury at Belaperla Central Park Resort, located in the heart of Sector 48, Gurgaon. These meticulously designed fully furnished Studio and One-Bedroom residences offer a seamless blend of elegance, functionality, and world-class hospitality. Each home is exquisitely appointed with premium interiors, intelligent space planning, and modern conveniences that cater to the lifestyle of a discerning global community.",
        paragraph2: "Set amidst nearly 20 acres of lush landscaped greens, Belaperla offers residents a serene retreat from the city's bustle. Wake up to sweeping views of nature and end your day in your private Jacuzzi, surrounded by tranquility. These residences are not just homes—they are sanctuaries of peace, style, and sophistication.",
      },
      features: ["Fully Furnished Studio & 1 BHK Residences", "Private Jacuzzi in Select Units", "16 Curated Themed Lounges", "Nearly 20 Acres of Landscaped Greens", "Premium Interiors with Sweeping Views", "Resort-Style Living in Central Park, Sector 48 Gurgaon"],
      specifications: {
        heading: "Belaperla Central Park Resort, Sector 48 Gurgaon – A Signature Lifestyle Experience",
        paragraph1: "Located in the premium locality of Sector 48, Gurgaon, Belaperla Central Park Resort presents an exclusive opportunity to experience resort-style living in the heart of the city. Crafted for modern professionals and urban families, this luxury development features fully furnished studio and 1-bedroom residences that blend elegance, comfort, and functionality.",
        paragraph2: "Each apartment is designed to offer a high-quality living experience, featuring floor-to-ceiling double-glazed windows for enhanced light, noise control, and thermal efficiency. The residences are equipped with an advanced air purification system, ensuring clean indoor air year-round. Every detail, from interior finishes to construction materials, reflects excellence and durability.",
        highlights: ["Fully Furnished Studio & 1 BHK Apartments", "Themed Lounges on Every Alternate Floor", "World-Class Clubhouse with Premium Amenities", "Floor-to-Ceiling Double-Glazed Glass Windows", "Superior Quality Construction and Finishes", "Air Purification System in All Apartments", "Prime Location in Sector 48, Gurgaon"]
      },
      location_advantage: {
        heading: "Belaperla Central Park Resort, Sector 48 Gurgaon – A Prime Location with Unmatched Connectivity",
        paragraph1: "Nestled in one of Gurgaon's most well-connected sectors, Belaperla Central Park Resort offers a lifestyle of convenience, with top landmarks just minutes away. This premium address places you close to the city's major business hubs, hospitals, hotels, and entertainment zones, making everyday life effortlessly smooth.",
        paragraph2: "From easy access to Rajiv Chowk and NH48 to being just minutes from Medanta Hospital and Vivanta by Taj, the location enhances both personal and professional convenience. Whether you're commuting to the Millennium City Centre, relaxing on Golf Course Road, or catching a flight from IGI Airport, everything is within reach.",
        highlights: ["RAJIV CHOWK / NH-48 – 7 Minutes", "MEDANTA HOSPITAL – 7 Minutes", "VIVANTA BY TAJ – 10 Minutes", "MILLENNIUM CITY CENTRE – 10 Minutes", "GOLF COURSE ROAD – 15 Minutes", "AMBIENCE MALL – 15 Minutes", "IGI AIRPORT – 25 Minutes"],
      },
      about_developer: {
        logo: "/assets/developers/central-park-logo.jpg",
        heading: "Developer Name : Central Park",
        paragraph1: "Not to be confused with Central Park in New York City, it is a well-known real estate developer in India. Central Park will soon become the premier amongst the other real estate developers Gurgaon, thanks to their portfolio of residential properties and commercial plots.",
        paragraph2: "Ever since its foundation in 2001, the company has spent over three years cultivating a positive reputation. This has been possible because of its iconic architecture and innovative design. The buildings have the best modern amenities so that residents have the chance to experience the best lifestyle. The company can be credited with the most luxurious residential apartments in the prime real estate locations in the city of Gurgaon.",
        conclusion: "In summary, Central Park has many luxurious residential projects that you can invest in. Each project, with its range of world-class amenities and facilities, takes the builders closer to becoming the topmost real estate developers Gurgaon. Central Park is the way to go if you plan to buy an apartment or build your own home. "
      },
    }
  },
  {
    id: "2",
    title: "Experion The Trillion",
    location: "Sector 48, Gurugram, Gurgaon",
    search: ["Sector 48", "gurugram", "gurgaon", "Experion The Trillion"],
    category: "residential",
    image: "/assets/residential/experion-the-trillion-thumbnail.jpg",
    details: {
      overview: {
        heading: "Experion The Trillion: Overview of a Landmark Ultra-Luxury Development in Sector 48, Gurgaon",
        paragraph1: "Nestled in the heart of Sector 48, Gurgaon, Experion The Trillion emerges as an epitome of sophisticated living and exclusive luxury. This ultra-premium residential project redefines the art of luxury living, offering a rare opportunity to experience elegance, comfort, and privacy in one of the most coveted areas of Gurgaon. Positioned near Sohna Road, this contemporary masterpiece brings together timeless design and cutting-edge technology to create a living experience that is second to none.",
        paragraph2: "Experion The Trillion Sector 48 Gurgaon presents a unique blend of opulence and functionality, making it an address that only the select few can call home. Set on a sprawling 5.5-acre land, the development features 3 & 4 BHK residences that cater to the discerning needs of high-net-worth individuals. With expansive layouts, premium specifications, and world-class amenities, it is designed to offer an unmatched living experience for those who seek exclusivity and sophistication."
      },
      features: [
        "Spacious 3 BHK and 4 BHK residences ranging from 3,000 to 3,600 sq. ft. for luxurious family living.",
        "Sophisticated design with grand entrances and thoughtfully planned modern interiors.",
        "Equipped with smart technologies and modern infrastructure for ultimate comfort and safety.",
        "24/7 advanced security systems ensure privacy and restricted access for residents.",
        "Eco-friendly design with energy-efficient systems and lush green spaces promoting sustainability."
      ],
      specifications: {
        heading: "Experion The Trillion Sector 48 Gurgaon: Ultra-Luxury Residences for Elite Living",
        paragraph1: "Experion The Trillion, located in the prestigious Sector 48, Gurgaon, redefines ultra-luxury living. This exceptional residential development offers a perfect blend of modern elegance, state-of-the-art design, and world-class amenities. Spanning across 5.5 acres, the project features luxurious 3 BHK and 4 BHK apartments, each meticulously crafted to provide an unparalleled living experience.0",
        paragraph2: "With spacious layouts ranging from 3,000 sq. ft. to 3,600 sq. ft., every residence at Experion The Trillion is designed to ensure comfort, privacy, and sophistication. The project is home to just 540 exclusive units spread across three towers, ensuring that residents enjoy a serene, private living environment. The development also boasts a 65,000 sq. ft. clubhouse, complete with premium amenities such as a modern fitness center, infinity pool, concierge services, and more.",
        highlights: [
          "5.497 Acres",
          "540 Exclusive Units",
          "80% Open and Covered Green Spaces",
          "GRIHA Rated Green Building",
          "1 Lakh Sq. Ft. of Amenities Space",
          "3 & 4 BHK Typology",
          "VRV/VRF Air Conditioning & Modular Kitchen",
          "Stilt + 45-Storey Towers",
          "4 Units Per Core",
          "4 High-Speed Elevators + 1 Service Lift",
          "Grand Entrance Lobby",
          "Basement Entrance Lobby with Green Atrium",
          "Multi-Layer Security System",
          "Two Car Parkings Per Unit",
          "3 Basements"
        ]

      },
      location_advantage: {
        heading: "Experion The Trillion - A Premier Residential Address in Sector 48, Gurgaon",
        paragraph1: "Located in the rapidly developing Sector 48 of Gurgaon, Experion The Trillion offers a lifestyle of unmatched luxury and convenience. This vibrant location is not only known for its top-notch infrastructure but also its serene, green surroundings, making it one of the safest and most sought-after areas in the city. With ample parks and greenery, the area promises a peaceful living experience for families.",
        highlights: ["Rajiv Chowk/NH8 – 5 minutes", "Vivanta by Taj – 10 minutes", "Huda City Centre – 10 minutes", "Golf Course Road – 15 minutes", "Ambience Mall – 15 minutes", "IGI Airport – 25 minutes"]
      },
      about_developer: {
        logo: "/assets/developers/experion-developers-logo.jpeg",
        heading: "Developer Name : Experion Developers",
      }
    }
  },
  {
    id: "3",
    title: "MNB Ananta Vilasa",
    location: "Sector 56, Gurugram, Gurgaon",
    search: ["Sector 56", "gurugram", "gurgaon", "MNB Ananta Vilasa"],
    category: "residential",
    image: "/assets/residential/mnb-ananta-vilasa-thumbnail.jpg",
    details: {
      overview: {
        heading: "Discover Elevated Living at Ananta Vilasa: Luxury Redefined in Gurugram",
        paragraph1: "Welcome to Ananta Vilasa, where luxury meets comfort in the most exclusive way. Situated in the prestigious heart of Gurugram’s Sector 56, along the renowned Golf Course Road, Ananta Vilasa offers a distinctive living experience like no other. This stunning 15-story tower is home to only 74 boutique 4.5 BHK residences, making it an intimate and highly sought-after address for those who value privacy, sophistication, and elegance.",
        paragraph2: "Designed by the acclaimed architect Reza Kabul, Ananta Vilasa is a celebration of refined living. Each residence is thoughtfully crafted with superior attention to detail and an unwavering commitment to quality. Spanning generous spaces, every 4.5 BHK apartment is meticulously designed to offer the perfect balance of comfort and luxury. The spacious floor plans provide ample room for families to live, relax, and entertain in an atmosphere of serene sophistication."
      },
      features: [
        "Exclusive 15-story tower with only 74 boutique 4.5 BHK residences.",
        "Sophisticated interior design crafted by the renowned architect, Reza Kabul.",
        "Generous living spaces, featuring natural light and ample ventilation.",
        "Private balconies with stunning views of the surroundings.",
        "High-tech systems for home automation, ensuring seamless control of comfort features.",
        "Top-quality finishing with state-of-the-art materials, offering an exceptional living experience.",
        "Premium location in Sector 56, Gurugram, with easy access to major business, entertainment, and education hubs."
      ],
      specifications: {
        highlights: [
          "Structure: Reinforced concrete structure for durability and safety.",
          "Flooring: Imported marble flooring in living areas and premium wooden flooring in bedrooms.",
          "Walls & Paint: High-quality emulsion paint on internal walls, with durable exterior paint.",
          "Windows: Double-glazed, energy-efficient windows that ensure a calm and serene environment inside the residence.",
          "Kitchen: Modular kitchen with high-end fittings, granite countertops, and energy-efficient appliances.",
          "Bathroom: Designer bathroom with premium sanitary ware, elegant fittings, and modern shower cubicles.",
          "Home Automation: Smart home automation for lighting, air-conditioning, and security.",
          "Security: 24/7 surveillance, video door phones, and a robust security system to ensure your safety."
        ]
      },
      location_advantage: {
        heading: "Location Advantage: Prime Connectivity and Convenience",
        paragraph1: "Ananta Vilasa is strategically located in Sector 56 of Gurugram, an area renowned for its luxury developments and prime connectivity. This sought-after location offers easy access to key destinations across the city, providing residents with the perfect blend of convenience and exclusivity.",
        highlights: [
          "Paras Hospital: One of the leading healthcare providers in the region.",
          "Artemis Hospital: Renowned for its advanced medical services and care.",
          "Marengo Asia Hospital: Offering world-class healthcare services.",
          "Golf Course Road: A well-established road connecting residents to the heart of Gurugram.",
          "Golf Course Extension Road: Enhancing accessibility to key commercial hubs.",
          "FNG Expressway: Connecting the area to Noida and Faridabad, easing commute.",
          "DLF Cyberhub: A prime business and entertainment destination.",
          "Worldmark: A popular shopping and dining spot.",
          "South Point Mall: The perfect place for shopping and entertainment.",
          "DLF Cybercity: A major IT hub in Gurugram.",
          "DLF Horizon Centre: Housing several multinational offices.",
          "Grand Hyatt Offices: One of the most prestigious office locations in the city.",
          "GD Goenka Public School: A leading school known for its academic excellence.",
          "DPS International School: Offering world-class education facilities.",
          "St. Xavier’s High School: Another top-tier institution known for its high academic standards.",
          "Grand Hyatt: An international luxury hotel.",
          "DoubleTree by Hilton: Known for its comfort and world-class services.",
          "Lemon Tree: Offering budget-friendly but luxurious stay options."
        ]
      },
      about_developer: {
        logo: "/assets/developers/mnb-buildfab-private-limited-logo.jpeg",
        heading: "Developer Name : MNB Buildfab Private Limited",
        paragraph1: "MNB Buildfab stands as a beacon of quality, integrity, and innovation in the real estate industry. Established by a visionary group of experienced professionals, the company has become synonymous with excellence and trust in the vibrant city of Gurugram, Haryana. With 49 years of combined experience, the founding members of MNB Buildfab—Mohit Bajaj, Amit Bajaj, Sudhir Chadha, Hardev Singh, Ankit Chadha, and Nakul Bajaj—bring a wealth of knowledge and expertise to every project. Each of these founders has been instrumental in crafting the company’s ethos, which revolves around a commitment to delivering spaces that exceed the expectations of our clients.",
        paragraph2: "This diverse and dynamic team is at the heart of MNB Buildfab’s success, and their collective experience has allowed the company to flourish in a rapidly changing industry. At MNB Buildfab, we understand that real estate is more than just about brick and mortar; it’s about creating environments that foster growth, comfort, and a sense of belonging. This is why our approach to real estate development is not only focused on functionality but also on shaping the future of urban spaces.",
        conclusion: "In conclusion, MNB Buildfab Private Limited is more than just a real estate development company; it is a testament to the passion, expertise, and commitment of its founders. With a strong focus on integrity, excellence, and innovation, we have earned the trust of our clients and partners over the years, and we continue to shape the future of real estate in Gurugram and beyond."
      }
    }
  },
  {
    id: "4",
    title: "Hero Homes The Palatial",
    location: "Sector 104, Gurugram, Gurgaon",
    search: ["Sector 104", "gurugram", "gurgaon", "Hero Homes The Palatial"],
    category: "residential",
    image: "/assets/residential/hero-homes-the-palatial-thumbnail.jpg",
    details: {
      overview: {
        heading: "Hero Homes The Palatial Sector 104, Gurugram: A New Era of Luxurious Living",
        paragraph1: "Hero Homes The Palatial is a groundbreaking residential project located in Sector 104, Gurugram. This ultra-luxurious development brings a new standard of living with a fusion of modern design, sophisticated architecture, and world-class amenities. Hero Homes The Palatial promises not only an elegant home but also a lifestyle of grandeur and exclusivity. Set in one of the most prominent locales along the Dwarka Expressway, the project offers seamless connectivity to Delhi, key commercial hubs, and other essential services.",
      },
      features: [
        "Located in Sector 104, Gurugram with excellent connectivity via Dwarka Expressway.",
        "Close to Diplomatic Enclave, Golf Course, Gurugram Railway Station, and IGI Airport.",
        "Near upcoming ₹2600 Cr. Convention Centre, boosting future value.",
        "Spacious 3 & 4 BHK apartments with modern and elegant architectural design.",
        "Italian marble flooring adds a luxurious and sophisticated finish.",
        "Modular kitchen designed for convenience and efficient living.",
        "Smart home features with advanced sensor-based controls.",
        "85% open area ensures a fresh, green, and breathable environment.",
        "7-star ultra-luxury clubhouse offering premium amenities.",
        "Massive 60,000 sq. ft. clubhouse as the community's social hub.",
        "Dedicated courts for badminton, basketball, and volleyball.",
        "Indoor chess pods for peaceful recreation.",
        "Spa and sauna facilities for full-body relaxation.",
        "Multi-purpose lounge for social events and gatherings.",
        "Eco-friendly features like landscaped gardens and rainwater harvesting.",
        "Energy-efficient lighting promotes sustainable living."
      ],
      specifications: {
        paragraph1: "The Palatial residences are equipped with world-class specifications designed to enhance luxury and comfort. These include:",
        highlights: [
          "Italian Marble Flooring: Elegance and durability in every room.",
          "Modular Kitchen: Fully functional and modern kitchens with top-tier fittings.",
          "High-Speed Lifts: Each tower has 4+1 lifts, ensuring quick access to the upper floors.",
          "Smart Home Sensor Devices: Modern technology for ease of living.",
          "State-of-the-art Free Living: With 75% open area, the project offers a harmonious blend of luxury living and nature."
        ]

      },
      location_advantage: {
        heading: "Hero Homes The Palatial, Dwarka Expressway – Ideal Location for Luxurious Living",
        paragraph1: "Hero Homes The Palatial, located on the rapidly developing Dwarka Expressway, offers unmatched connectivity between Gurgaon, Delhi, and other key regions. This prime location ensures residents have easy access to essential amenities while enjoying the peace of suburban living.",
        highlights: [
          "DWARKA EXPRESSWAY – 300 Meters",
          "UPCOMING METRO STATION – 500 Meters",
          "ROYAL OAK INTERNATIONAL SCHOOL – 3 KM",
          "SHANTI NIKETAN PUBLIC SCHOOL – 1.6 KM",
          "MALL OF SECTOR 109 – 2 KM",
          "IGI AIRPORT – 15 Minutes",
          "DLF CYBERCITY – 15 Minutes",
          "AMBIENCE MALL – 15 Minutes",
          "NATIONAL HIGHWAY-8 – 10-30 Minutes",
          "YASHOBHOOMI – 10-30 Minutes",
          "UDYOG VIHAR – 10-30 Minutes",
          "MEDANTA HOSPITAL – 10-30 Minutes",
          "GOLF COURSE EXTENSION ROAD – 10-30 Minutes",
          "GURGAON RAILWAY STATION – 1 KM",
          "MG ROAD METRO STATION – 9.5 KM"
        ]

      },
      about_developer: {
        logo: "/assets/developers/hero-homes-logo.jpeg",
        heading: "Developer Name : Hero Homes",
      }
    }
  },
  {
    id: "5",
    title: "Conscient Elaira Residences",
    location: "Sector 80, Gurugram, Gurgaon",
    search: ["Sector 80", "gurugram", "gurgaon", "Conscient Elaira Residences"],
    category: "residential",
    image: "/assets/residential/conscient-elaira-residences-thumbnail.jpg",
    details: {
      overview: {
        heading: "Conscient Elaira Residences – Ultra-Luxury Living in Sector 80, Gurgaon",
        paragraph1: "Welcome to Conscient Elaira Residences, an epitome of opulence and sophistication nestled in the heart of Sector 80, Gurgaon. This ultra-luxury residential project brings together world-class architecture, expansive green spaces, and cutting-edge amenities to offer a living experience like no other. Developed by Shapoorji Pallonji, one of the most prestigious names in the real estate industry, this residential masterpiece is poised to be a landmark in the dynamic Gurgaon real estate market.",
        paragraph2: "The project spans across a sprawling 5.5-acre land parcel, with 4 majestic towers that will offer a total of 580 units, of which 280 units are being launched in the first phase. If you’re seeking a home that combines luxury, privacy, and convenience, Conscient Elaira is where your search ends.",
      },
      features: [
        "4 Iconic Towers with 580 Units",
        "75,000 to 100,000 sqft Clubhouse with World-Class Amenities",
        "Smart Home Features for Future-Ready Living",
        "Podium-Style Architecture for Enhanced Aesthetics",
        "Eco-Friendly Sustainable Design",
        "Infinity Pool, Meditation Zones, and Scenic Green Spaces",
        "Luxury Interiors with Floor-to-Ceiling Windows",
        "Strategic Location in Sector 80, Gurgaon near NH-48 & Dwarka Expressway"
      ],
      specifications: {
        heading: "Specifications of Conscient Elaira Residences:",
        paragraph1: "Conscient Elaira Residences offers exclusive and meticulously designed living spaces, combining contemporary elegance with functionality. The apartments range in size from 1995 sqft to 2700 sqft, featuring a variety of layouts to suit your needs. Whether you are looking for a spacious 3 BHK or a 3 BHK with Stilt and Servant Quarter, this project has it all.",
        highlights: [
          "3 BHK Apartments – 1995, 2200, and 2400 sqft",
          "3 BHK + Study + Servant – 2800 sqft",
          "Podium-Style Twin Towers",
          "75,000 sqft 2-Level Clubhouse",
          "Smart Home Integration for Modern Living",
          "Floor-to-Ceiling Windows for Panoramic Views",
          "Premium Fixtures, Fittings, and Spacious Balconies"
        ]
      },
      location_advantage: {
        heading: "Location Advantage of Conscient Elaira Sector 80, Gurgaon",
        paragraph1: "Conscient Elaira Residences offers a premium living experience, thanks to its strategically located address in Sector 80, Gurgaon. Over the past two decades, this area has experienced remarkable development, with numerous high-end residential and commercial projects emerging in the region. Conscient Group has also introduced the Conscient Parq luxury residential project in the same vicinity.",
        paragraph2: "The connectivity to major highways, including Dwarka Expressway and NH-8, ensures easy access to Delhi, Manesar, and other key areas. The location is also in close proximity to major business hubs like Cyber City, Global Business Park, and Frontline Business Centre, making it an ideal choice for professionals and businesspeople.",
        highlights: [
          "Birla Navya School: 1.6 KM",
          "DSD College: 5.7 KM",
          "Yashlok Medical Centre: 4.4 KM",
          "Elan Mercado Mall: 950 M",
          "Garhi Harsaru Junction: 8.7 KM",
          "Delhi Airport: 30 KM"
        ]

      },
      about_developer: {
        logo: "/assets/developers/conscient-infrastructure-logo.jpg",
        heading: "Developer Name: Conscient Group",
        paragraph1: "Conscient Infrastructure is driven by the vision to build modern homes for the nation that are on par with global projects. This fact has led them on the path of innovation and design, making them one of the most sought-after real estate developers Gurgaon. The company is known for its commitment to building high-quality residential and commercial buildings. Since its foundation in 1990, the company has worked tirelessly in building premium residential and commercial complexes.",
        paragraph2: "The company has a progressive mindset. In the three decades since its foundation, the company has only developed future-proof homes that can be easily altered to fit the needs of modern home dwellers. Because of its customer-centric approach, the company has been able to establish itself as a trusted brand in the Indian real estate industry.",
        conclusion: "Regarding trust, most real estate developers Gurgaon, cannot compete against Conscient Infrastructure. This has been made possible because of the company's dedication to delivering the best residential and commercial projects for over three decades."
      }
    }

  },
  {
    id: "6",
    title: "Birla Arika",
    location: "Sector 31, Gurugram, Gurgaon",
    search: ["Sector 31", "gurugram", "gurgaon", "Birla Arika"],
    category: "residential",
    image: "/assets/residential/birla-arika-thumbnail.jpg",
    details: {
      overview: {
        heading: "Birla Arika Sector 31 Gurgaon: A New Era of Luxurious Living",
        paragraph1: "A Grand New Address in Gurugram, Birla Arika emerges as one of the most prestigious residential developments in Sector 31. Designed by Birla Estates, a name synonymous with luxury, trust, and quality, this residential project aims to offer an unparalleled living experience. Spread over 13.3 acres of lush green land, the project stands as a symbol of modernity, affluence, and sophistication. With a strategic location and a robust infrastructure, Birla Arika Sector 31 Gurgaon promises to be a coveted address for future homeowners and investors alike.",
      },
      features: [
        "75% open area for natural light, fresh air, and relaxation.",
        "58% of the project dedicated to lush green spaces and landscapes.",
        "Exclusive 4.5 BHK premium residences in Sector 31, Gurugram."
      ],
      specifications: {
        heading: "Embrace Luxury, Sustainability, and Comfort",
        paragraph1: "Birla Arika, located in Sector 31, Gurugram, is a premier residential development that seamlessly combines luxury, sustainability, and contemporary living. Boasting a strategic location, top-tier amenities, and eco-conscious design, it offers an exceptional opportunity for homeowners and investors alike. Whether you seek an upscale residence or a valuable investment, Birla Arika delivers excellence on both fronts. Experience the pinnacle of refined living — welcome to the new standard of opulence with Birla Arika.",
        highlights: [
          "Luxurious 4.5 BHK residences designed for spacious and comfortable living.",
          "Strategically located in Sector 31, Gurgaon, with excellent connectivity to NH-8, Dwarka Expressway, and Golf Course Road.",
          "Proximity to major commercial hubs like Cyber Hub, DLF Cyber City, and Udyog Vihar.",
          "World-class amenities including 4 exclusive clubhouses, swimming pool, sports courts, fitness center, children’s play area, yoga and meditation zones, and sky deck.",
          "24/7 security and surveillance for a safe living environment.",
          "Expected possession by December 2031, allowing ample planning and investment appreciation.",
          "RERA-registered project (Registration No: GGM/914/646/2025/17) ensuring transparency and trust.",
          "75% open area featuring extensive green spaces and landscaped areas for recreation and relaxation.",
          "Sector 31 offers excellent infrastructure, schools, hospitals, malls, and business hubs, making it ideal for residential living and investment.",
          "Birla Arika combines prime location, luxury, sustainability, and strong growth potential, presenting a safe and lucrative investment opportunity."
        ]
      },
      location_advantage: {
        heading: "Location Advantage of Birla Arika, Sector 31, Gurgaon:",
        paragraph1: "Located in the prime area of Sector 31, Gurgaon, Birla Arika offers unparalleled connectivity and access to some of the most popular destinations in the city and beyond. This strategically positioned locality is adjacent to National Highway-8 and Golf Course Road, making commuting hassle-free for residents.",
        highlights: [
          "Indira Gandhi International Airport (IGI): 18 KM",
          "Aerocity: Nearby",
          "Golf Course Extension Road & Dwarka Expressway: Nearby",
          "Ajanta Public School: 0.8 KM",
          "Rishi Public School: 1.2 KM",
          "Star Mall: 2.3 KM",
          "32nd Avenue (Milestone): 2.8 KM",
          "Shivam Hospital: 2.2 KM",
          "Medanta - The Medicity: 2.6 KM",
          "Gurgaon Railway Station: 5.9 KM"
        ]

      },
      about_developer: {
        logo: "/assets/developers/birla-estate-logo.jpg",
        heading: "Developer Name : Birla Estates",
        paragraph1: "Birla Estates is part of the prestigious Birla Group of Industries, which has developed numerous projects in India and made a name for itself. Every residential project developed by the group has an aesthetic appeal designed to fit the modern man's lifestyle. The group aspires to be known as the prime real estate developers Gurgaon, and with this agenda in mind, they have invested in building a township project.",
        paragraph2: "Birla Estates' projects are renowned for their contemporary urban architecture and state-of-the-art amenities. Each apartment is thoughtfully designed to offer modern comforts and conveniences. Additionally, the group strategically selects prime locations to ensure residents have easy access to schools, hospitals, and commercial hubs.",
        conclusion: "For an unparalleled living experience, choose an apartment crafted by one of Gurgaon's most reputable real estate developers. Enjoy the convenience of city-center living, complemented by verdant surroundings and a comprehensive range of modern amenities designed to ensure your utmost comfort."
      }
    }
  },
  {
    id: "7",
    title: "BPTP Amstoria Verti Greens",
    location: "Sector 102, Gurugram, Gurgaon",
    search: ["Sector 102", "gurugram", "gurgaon", "BPTP Amstoria Verti Greens"],
    category: "residential",
    image: "/assets/residential/bptp-amstoria-verti-greens-thumbnail.jpg",
    details: {
      overview: {
        heading: "BPTP Amstoria Verti Greens Ultra-Luxury Residential Project in Sector 102, Dwarka Expressway, Gurgaon",
        paragraph1: "BPTP Amstoria Verti Greens is a premium residential launch situated in the prime locale of Sector 102, Dwarka Expressway, Gurgaon. Spread across approximately 9.43 acres, the project features five high-rise towers offering luxurious 2BHK and 3BHK apartments. With elegant specifications, top-tier amenities, and a highly strategic location, it presents an ideal opportunity for those seeking an upscale and refined living experience.",
        paragraph2: "BPTP is renowned for delivering premium residential developments, and Amstoria Verti Greens upholds this legacy. Thoughtfully crafted to suit the demands of contemporary urban living, the project seamlessly integrates luxury with natural surroundings to offer an elevated lifestyle. Whether you seek comfort, elegance, or strong investment potential, BPTP Amstoria Verti Greens stands out as a property you can invest in with confidence."
      },
      features: [
        "9.43 Acres of Total Land Area",
        "1.55 Lac Square Feet of Club & Landscape Area",
        "7 High-Speed Lifts Per Tower",
        "5 Majestic Towers",
        "4 Spacious Units Per Floor",
        "3 Exclusive Club & Amenity Zones",
        "IGBC Platinum Pre-Certification for Sustainability",
        "Luxurious 2 & 3 BHK Residences",
        "15 Floors Across 5 Towers",
        "10.33 Feet Floor-to-Floor Height for Maximum Comfort",
        "Sky Decks & Expansive Balconies in Every Unit",
        "Air-Conditioned Tower Lobbies with Welcoming Reception Desk"
      ],
      specifications: {
        heading: "Project Overview",
        highlights: [
          "Total Project Area: 126 Acres (509.9K sq.m.)",
          "Standard Living/Dining: Oil Bound Distemper walls with Vitrified Tile Flooring",
          "Deluxe Living/Dining: POP Punning with Acrylic Emulsion and Imported Marble Flooring",
          "Standard Bedrooms: Oil Bound Distemper and Vitrified Tile Flooring",
          "Deluxe Bedrooms: POP Punning with Acrylic Emulsion, Designer/Imported Vitrified or Laminated Wooden Flooring",
          "Standard Toilets: Ceramic Tile Flooring, Granite/Marble Counter, and CP Fittings",
          "Deluxe Toilets: Imported Marble Flooring, Designer Vitrified Tiles, Shower Cubicles, and Elegant CP Fittings",
          "Standard Doors/Windows: Powder Coated Aluminium/UPVC Windows and Painted Board Shutters on Hardwood Frames",
          "Deluxe Doors/Windows: Powder Coated Aluminium/UPVC Windows and Molded/Veneered Doors",
          "Standard Kitchen: Vitrified Tile Flooring, Ceramic Tile Dado, Granite Counter with SS Sink",
          "Deluxe Kitchen: Designer Vitrified/Marble Flooring, Designer Tile Dado, Granite Counter with Double Bowl Sink, Modular Setup with Chimney and Hob",
          "Standard Facilities: Copper Wiring, Split AC Provision, 7.5 KVA Backup, Elevator Provision",
          "Deluxe Facilities: Copper Wiring, VRV/VRF AC System, 7.5 KVA Backup, and MRL Elevators"
        ]

      },
      location_advantage: {
        heading: "Location Advantage of BPTP Amstoria Verti Greens:",
        paragraph1: "BPTP Amstoria Verti Greens enjoys a prime location on Dwarka Expressway in Sector 102, Gurgaon, offering excellent connectivity and accessibility. Just a 5-minute drive from Delhi, the project provides seamless access to major destinations such as Noida, Faridabad, and other key parts of the NCR, making it a perfect choice for contemporary urban living.",
        highlights: [
          "Delhi – Just 5 minutes away",
          "Cyber Hub – 10–15 minutes drive",
          "Ambience Mall – 10–15 minutes drive",
          "Imperial Heritage School – 5–10 minutes away",
          "Dwarka Golf Course – 15 minutes",
          "New Diplomatic Enclave – 20 minutes",
          "IICC Yashobhoomi – 15 minutes",
          "Bharat Vandana Park – 20 minutes",
          "IGI International Airport – 30 minutes",
          "Sheetla Mata Hospital – 5 minutes",
          "Medanta Hospital – 20 minutes",
          "Global City – 12 minutes",
          "Amex Headquarters – 15 minutes"
        ]

      },
      about_developer: {
        logo: "/assets/developers/bptp-logo.jpg",
        heading: "Developer Name : BPTP",
      }
    }
  },
  {
    id: "8",
    title: "Elan The Emperor",
    location: "Sector 106, Gurugram, Gurgaon",
    search: ["Sector 106", "gurugram", "gurgaon", "Elan The Emperor"],
    category: "residential",
    image: "/assets/residential/elan-the-emperor-thumbnail.jpeg",
    details: {
      overview: {
        heading: "Elan The Emperor – Super Luxury Residences in Sector 106, Gurgaon",
        paragraph1: "Experience unmatched luxury at **Elan The Emperor**, where sophisticated living seamlessly blends with cutting-edge design. Located in the prestigious Sector 106, Gurgaon, this elite development offers a distinctive lifestyle featuring spacious balconies and dedicated concierge services—bringing a new standard of elegance and convenience to modern urban living.",
        paragraph2: "Crafted for the elite, **Elan The Emperor** exemplifies architectural brilliance and unmatched craftsmanship, offering residences that seamlessly merge style, comfort, and premium quality. Located along the fast-developing **Dwarka Expressway**, often dubbed “Mini Singapore,” this 7-star development is a true symbol of opulence. Every home is a meticulously designed masterpiece, built to the highest standards of excellence. Whether you seek serene retreat or upscale urban living, Elan The Emperor delivers an exceptional lifestyle tailored for those who demand nothing but the finest."
      },
      features: [
        "Every apartment overlooks expansive central greens, offering breathtaking views.",
        "Contemporary and opulent design showcasing a perfect fusion of modern aesthetics and luxury.",
        "Air-conditioned triple-height lobby that exudes grandeur from the moment you arrive.",
        "Strategically located with seamless connectivity to Delhi.",
        "Just a short drive to Indira Gandhi International Airport for convenient travel.",
        "1.5 lakh sq. ft. 8-level luxury clubhouse with world-class amenities for indulgent living."
      ],
      specifications: {
        heading: "Top Amenities at Elan The Emperor – Experience Luxury Living Like Never Before",
        paragraph1: "At Elan The Emperor, we offer an exceptional range of amenities to complement your luxurious lifestyle",
        highlights: [
          "Expansive balconies offering panoramic views from spacious private spaces.",
          "State-of-the-art 24/7 security system ensuring peace of mind.",
          "Exclusive residents-only clubhouse with world-class amenities.",
          "Grand, beautifully designed swimming pool for ultimate relaxation.",
          "Landscaped gardens providing a serene environment for leisurely strolls.",
          "Fully equipped modern gym catering to all fitness needs.",
          "Dedicated jogging and walking paths within lush surroundings.",
          "Smart home features for enhanced convenience and modern living.",
          "Gourmet dining options offering exquisite culinary experiences within the community.",
          "Safe and vibrant children's play area for exploration and fun.",
          "Sports courts including tennis and badminton for active lifestyles."
        ]
      },
      location_advantage: {
        heading: "Elan The Emperor – Prime Location in Sector 106, Gurgaon",
        paragraph1: "Elan The Emperor, situated in Sector 106 just off the Dwarka Expressway, boasts a strategic location that provides residents with exceptional connectivity and convenience. Its prime positioning offers effortless access to key urban hubs, making it the perfect choice for both professional and recreational living.",
        highlights: [
          "15-Minute Drive to Delhi Airport",
          "Close to MG Road",
          "Proximity to Business Hubs",
          "Well-Connected via Dwarka-Gurugram Expressway",
          "Essential Public Infrastructure Nearby"
        ]

      },
      about_developer: {
        logo: "/assets/developers/elan-logo.jpg",
        heading: "Developer Name : Elan",
        paragraph1: "Widely recognized for developing some of the most iconic commercial complexes, the Elan Group stands as a prominent leader among real estate developers in Gurgaon. Since its inception, the company has built a distinguished legacy centered on innovation, quality, and unwavering commitment to customer satisfaction.",
        paragraph2: "The group has been honored with multiple awards for its commercial developments, including the prestigious Iconic Project of the Year award in 2020. The distinctive and refined design philosophy of the Elan Group aligns perfectly with the evolving needs of modern India. With this vision, the company has initiated several projects in Gurgaon. Recognizing the immense potential of the Delhi NCR region, the group has strategically invested in numerous commercial ventures to foster economic growth and create new income opportunities for the local community. In this article, we will explore some of these notable projects, along with a flagship residential development led by the Elan Group.",
        conclusion: "The Group has secured its leading position among real estate developers in Gurgaon by consistently prioritizing customer satisfaction. Companies that genuinely understand and address their customers’ needs are well-equipped to deliver the same level of excellence and superior results as demonstrated by the Elan Group."
      }
    }
  },
  {
    id: "9",
    title: "Emaar Urban Ascent",
    location: "Sector 112, Gurugram, Gurgaon",
    search: ["Sector 112", "gurugram", "gurgaon", "Emaar Urban Ascent"],
    category: "residential",
    image: "/assets/residential/emaar-urban-ascent-thumbnail.jpg",
    details: {
      overview: {
        heading: "Emaar Urban Ascent Luxury Apartment in Sector 112 Gurgaon",
        paragraph1: "Emaar Urban Ascent sets a new standard for refined living. Experience the vibrant lifestyle of Dwarka Expressway while residing in spacious 3 & 4 BHK luxury homes. Enjoy seamless commutes to Delhi, access to premier shopping destinations, and convenient weekend escapes—all within reach. Thoughtfully designed with safety in mind, the innovative podium layout elevates all amenities, including the Clubhouse, providing a peaceful environment shielded from traffic disturbances.",
        paragraph2: "Emaar Urban Ascent Designed with cutting-edge eco-friendly features, this is more than just a place to live; it's a seamless blend of modern living and nature. Experience the sustainable lifestyle of tomorrow, today, at our IGBC Gold Pre-Certified project."
      },
      features: [
        "Spacious 3 BHK & 4 BHK Apartments",
        "Fully Finished Units with smart, space-efficient designs",
        "Large Windows and Wide Balconies offering natural light and scenic views",
        "Pre-launch Pricing starting at ₹15,900 per sq. ft.",
        "RERA Approval: GGM/898/630/2025/01"
      ],
      specifications: {
        paragraph1: "Experience your dream lifestyle where comfort, wellness, and convenience seamlessly blend. Enjoy a range of thoughtfully designed amenities that enhance and elevate your everyday living.",
        highlights: [
          "Multi-purpose Lawn over Podium",
          "Jogging Track",
          "Zen Garden",
          "Open-Air Theatre",
          "Cozy Seating Nooks with Trellis",
          "Yoga Pavilion",
          "Clubhouse",
          "Gymnasium",
          "Kids' Play Area",
          "Swimming Pool with Kids' Pool",
          "Multi-purpose Court",
          "Badminton Court",
          "Squash Court",
          "Restaurant",
          "Café",
          "Banquet Hall",
          "Pet Park"
        ]
      },
      location_advantage: {
        heading: "Emaar Urban Ascent Located on 29-kilometer Dwarka Expressway is a game-changing infrastructure project, providing unbeatable connectivity and world-class amenities.",
        highlights: [
          "Prime Connectivity: Links Dwarka (Delhi) to NH-8 for quick access to business hubs, airports, and key residential areas.",
          "Investment Hotspot: Close to commercial centers and upcoming projects, ideal for high-return real estate investments.",
          "Integrated Urban Ecosystem: Surrounded by top schools, hospitals, and retail, offering a convenient lifestyle.",
          "Thriving Community: Home to 2.5 lakh+ residents in New Gurugram, witnessing strong growth and development."
        ]

      },
      about_developer: {
        logo: "/assets/developers/emaar-india-logo.jpeg",
        heading: "Developer Name : Emaar India",
        paragraph1: "Since its entry into the Indian real estate market in 2005, Emaar India has won widespread acclaim for developing iconic and luxurious properties across Gurgaon. Headquartered in Gurgaon, the company boasts a diverse portfolio of residential and commercial projects, earning it a strong reputation as one of the leading real estate developers in Gurgaon.",
        conclusion: "Emaar Group has firmly positioned itself among the top real estate developers in Gurgaon. With a steadfast commitment to customer satisfaction and ongoing innovation in development, the company is poised for significant growth in the near future."
      }
    }
  },
  {
    id: "10",
    title: "Adani Samsara Ivana",
    location: "Sector 63, Gurugram, Gurgaon",
    search: ["Sector 63", "gurugram", "gurgaon", "Adani Samsara Ivana"],
    category: "residential",
    image: "/assets/residential/adani-samsara-ivana-thumbnail.jpg",
    details: {
      overview: {
        heading: "Adani Samsara Ivana – A Premium Residential Development in Sector 63, Gurgaon",
        paragraph1: "Adani Samsara Ivana is an upscale residential development situated in the prime Golf Course Extension Road area, Sector 63, Gurgaon. This project presents a fantastic opportunity for those looking for low-rise luxury living in Gurgaon, offering spacious 4BHK floors complete with a terrace, basement, and utility area—perfectly blending comfort and ample space.",
        paragraph2: "Developed by Adani Realty, a trusted name synonymous with excellence, this project aims to elevate the standards of luxurious living. It offers a secure, gated community equipped with CCTV surveillance, providing residents with safety and peace of mind. As part of a sprawling 70-acre integrated development, the project’s value and appeal are further enhanced.",
      },
      features: [
        "Low-rise 4BHK luxury floors with terrace, basement, and utility space",
        "Secured gated community with CCTV surveillance and private basements for 1st and 2nd floors",
        "Two dedicated car parking spaces per floor with EV charging points",
        "Part of a 70-acre integrated development with low-density living and AC lobbies",
        "Excellent connectivity via Golf Course Extension Road, Sohna Road, NH-8, and Gurgaon-Manesar Expressway",
        "World-class amenities including clubhouse, gymnasium, swimming pool, landscaped gardens, and sports courts",
        "Sustainable design with eco-friendly features like rainwater harvesting and energy-efficient systems"
      ]
      ,
      specifications: {
        heading: "Key Features of Adani Samsara Ivana, Sector 63, Gurgaon:",
        highlights: [
          "Secured gated community with access control and CCTV surveillance",
          "Part of an expansive 70-acre integrated development",
          "Modular kitchen",
          "Direct terrace access to the basement for the 1st and 2nd floors",
          "Two car parking spaces with every floor",
          "EV charging points",
          "Kids' play area",
          "Air-conditioned lobbies with two common elevators",
          "Senior citizen zone",
          "Fully equipped gymnasium",
          "Spacious lobby area",
          "Video game arena",
          "Table tennis court",
          "Half basketball court",
          "Dance/Zumba space",
          "24/7 gated security",
          "Direct terrace access for the 3rd and 4th floors"
        ]

      },
      location_advantage: {
        heading: "Location Advantages of Adani Samsara Ivana, Sector 63:",
        highlights: [
          "2 mins away: Retail/Shopping Convenience – Close proximity to daily essentials and shopping venues.",
          "5 mins away: Grand Hyatt Hotel – A prestigious luxury hotel ideal for business or leisure.",
          "5 mins away: Golf Course Road/Rapid Metro/Sohna Road – Excellent connectivity to key roads.",
          "15 mins away: Reputed Healthcare Facilities – Artemis, Fortis, Paras, Max Hospital nearby.",
          "15 mins away: HUDA City Centre Metro Station – Convenient metro access.",
          "15 mins away: MG Road – Commercial and entertainment hub with shopping and dining.",
          "20 mins away: Ambience Mall – Premium shopping, dining, and entertainment destination.",
          "30 mins away: Indira Gandhi International Airport (IGI) – Major international airport.",
          "30 mins away: Surrounded by Premium Residences – 4S Aurum, Silverglades Legacy, etc.",
          "Well-connected via SPR Road and Dwarka Expressway for smooth transportation."
        ]
        ,
      },
      about_developer: {
        logo: "/assets/developers/adani-realty-logo.jpeg",
        heading: "Developer Name : Adani Realty",
        paragraph1: "Adani Realty stands out as one of the leading real estate developers in Gurgaon. The company has earned a strong reputation by delivering numerous high-quality residential and commercial projects across the city. Known for its commitment to excellence, Adani Realty consistently meets the expectations of modern buyers and businesses. Below, we delve into some of their successful developments and highlight their key features.",
        conclusion: "Adani Realty is on track to become synonymous with “real estate developers Gurgaon.” With numerous projects in the pipeline, the group is set to transform Gurgaon’s skyline, contributing significantly to the growth of one of India’s fastest-evolving cities."
      },
    }
  },
  {
    id: "11",
    title: "Navraj The Antalyas",
    location: "Sector 37D, Gurugram, Gurgaon",
    search: ["Sector 37D", "gurugram", "gurgaon", "Navraj The Antalyas"],
    category: "residential",
    image: "/assets/residential/navraj-the-antalyas-thumbnail.jpg",
    details: {
      overview: {
        heading: "Navraj The Antalyas – Luxury Living in Sector 37D, Gurgaon",
        paragraph1: "Navraj The Antalyas is a premium, under-construction residential project situated in Sector 37D, Gurgaon—an emerging and highly desirable area within the National Capital Region (NCR). Crafted to provide a sophisticated lifestyle with modern amenities, this development is perfect for those seeking a contemporary and well-connected home in Gurgaon. Offering a variety of apartments and independent floors, Navraj The Antalyas caters to diverse preferences and budgets, ensuring a perfect home for every buyer.",
      },
      features: [
        "Strategic location in Sector 37D with proximity to NH8, Dwarka Expressway, and Golf Course Road",
        "Close to reputed schools like GD Goenka, Amity, and Indus World",
        "Nearby hospitals including Shri Balaji Hospital and Trauma Center",
        "Modern amenities including clubhouse, swimming pool, fitness center, and children’s play area",
        "24/7 security with CCTV surveillance",
        "Variety of property options: 3BHK and 4BHK apartments and independent floors",
        "Spacious layouts with balcony, carpet, and super area options",
        "Strong investment potential due to infrastructure growth and rental demand",
        "High-quality construction with premium flooring, modular kitchens, and designer fittings",
        "Excellent connectivity via public transport, railway stations, and major road networks",
        "Eco-friendly features like rainwater harvesting, waste management, and energy-efficient design",
        "Ample landscaped green spaces and gardens promoting healthy living"
      ],
      specifications: {
        heading: "Navraj The Antalyas – Key Highlights at a Glance",
        highlights: [
          "Prime location in Sector 37D, Gurgaon, offering easy connectivity to major business centers, transport routes, and educational institutions.",
          "Available property types include 3BHK and 4BHK apartments, along with 4BHK independent floors.",
          "Spanning 13.16 acres, the project comprises 200 units across 5 towers with 25 floors each.",
          "Offers modern amenities such as a clubhouse, swimming pool, fitness center, children’s play area, and landscaped gardens.",
          "RERA registered to ensure transparency and buyer confidence.",
          "Expected possession date set for April 2027.",
          "Investment outlook is strong with an 18.2% price appreciation in the last quarter.",
          "Constructed with premium materials and finishes for a contemporary and comfortable living experience."
        ]

      },
      location_advantage: {
        heading: "Navraj The Antalyas Location Overview",
        highlights: [
          "Strategically located in Sector 37D, Gurgaon, a highly sought-after area.",
          "Excellent connectivity with NH8 and Golf Course Road nearby.",
          "Close to reputed schools like Indus World, GD Goenka, and Amity.",
          "Proximity to major MNCs, IT parks, and corporate offices.",
          "Just a 30-minute drive to Indira Gandhi International (IGI) Airport.",
          "Southern Peripheral Road accessible within a minute’s drive.",
          "Easy access to roads connecting to Sohna.",
          "Rajiv Chowk is only 15 minutes away.",
          "Nearby shopping malls and key markets for convenience."
        ]

      },
      about_developer: {
        logo: "/assets/developers/navraj-infotech-private-limited-logo.jpeg",
        heading: "Developer Name : Navraj Infotech Private Limited",
        paragraph1: "Navraj Infratech Private Limited, founded in 2011, has earned a strong reputation in the real estate and infrastructure sector for its commitment to quality and innovation. The company has steadily built a distinct identity by offering thoughtfully designed and strategically positioned residential and commercial spaces. Over its impressive 15-year journey, Navraj Infratech has experienced significant growth and has become one of the most trusted and dependable builders in the NCR region, especially in Gurugram (Gurgaon) and Haryana.",
      },
    }
  },
  {
    id: "12",
    title: "Emaar Amaris",
    location: "Sector 62, Gurugram, Gurgaon",
    search: ["Sector 62", "gurugram", "gurgaon", "Emaar Amaris"],
    category: "residential",
    image: "/assets/residential/emaar-amaris-thumbnail.jpg",
    details: {
      overview: {
        heading: "Emaar Amaris Gurugram – A Premium Residential Address in Sector 62",
        paragraph1: "Emaar Amaris, situated in Sector 62 Gurugram, is a premium residential project by the esteemed Emaar India Group. This development pioneers the concept of 'Digital Homes,' allowing residents to manage various home functions via touch and voice commands. Offering spacious 3 BHK and 4 BHK apartments ranging from 2200 sq.ft to between 2700 and 3100 sq.ft, the project ensures generous living spaces without sacrificing luxury. With careful attention to detail and upscale design, Emaar Amaris seamlessly combines modernity, comfort, and exclusivity.",
        paragraph2: "Emaar Amaris Gurugram epitomizes sophistication, aiming to set a new standard in luxury living. The project promises to elevate residents’ lifestyles by offering an exceptional living environment complemented by world-class amenities. The name 'Amaris' reflects the developer’s vision of delivering an aristocratic lifestyle infused with exclusivity and grandeur. Spanning 6.11 acres, the development consists of four high-rise towers with a total of 522 meticulously designed apartments.",
      },
      features: [
        "Luxury Residential Project",
        "4 Towers, 34 Storeys",
        "3 & 4 BHK Apartments",
        "Hines Specifications",
        "All Modern Amenities",
        "Developed by Emaar India",
        "Servant and Powder Room in All Units"
      ]
      ,
      specifications: {
        heading: "Digital Apartments: A Seamless Blend of Technology and Security",
        highlights: [
          "Emaar Amaris offers a unique living experience with Digital Apartments enhancing convenience and security through advanced automation.",
          "Residents can control various apartment features via touch and voice commands for effortless and intuitive living.",
          "Automated Access system includes Voice and Touch-Activated Video Door controllable remotely for added convenience and security.",
          "Biometric Authorization allows unlocking the main door with fingerprint scan, adding an extra layer of security.",
          "Apartments are equipped with Panic Buttons that send automatic alerts to emergency services for quick assistance.",
          "Voice-Activated System enables residents to control AC, music, drapes, and lighting through simple voice commands.",
          "Emaar Amaris redefines modern living with state-of-the-art digital solutions."
        ]

      },
      location_advantage: {
        heading: "Emaar Amaris Gurgaon – Prime Location",
        paragraph1: "Emaar Amaris is ideally situated in the highly desirable Sector 62 of Gurgaon, providing residents with excellent connectivity to key areas in both Gurgaon and Delhi. Located along the vibrant Golf Course Extension Road corridor, this prime spot offers easy access to major business districts, commercial centers, and leisure destinations. The strategic location ensures convenience for work and recreation alike, making Emaar Amaris an attractive choice for those seeking modern urban living with seamless accessibility.",
        highlights: [
          "Pragyanam School – 1.5 km",
          "Heritage Xperiential Learning School – 3.5 km",
          "St. Xavier's High School – 3.6 km",
          "DPS International School – 4.5 km",
          "Sector 55-56 Metro Station – 4.3 km",
          "HUDA City Centre Metro Station – 9 km",
          "Gurgaon Railway Station – 15 km",
          "Indira Gandhi International Airport – 21.5 km",
          "Marengo Asia Hospitals – 4.3 km",
          "CK Birla Hospital Gurgaon – 4.7 km",
          "Artemis Hospital Gurgaon – 5.4 km",
          "Park Hospital – 6.5 km",
          "WorldMark Gurgaon – 1.9 km",
          "Grand Hyatt Gurgaon – 3.5 km",
          "Omaxe Gurgaon Mall – 6.2 km",
          "Kingdom of Dreams – 10.3 km"
        ]
        ,
      },
      about_developer: {
        logo: "/assets/developers/emaar-india-logo.jpg",
        heading: "Developer Name : Emaar India",
        paragraph1: "Since its entry into the Indian real estate market in 2005, Emaar India Group has won widespread acclaim by developing iconic and luxurious properties across Gurgaon. Headquartered in Gurgaon, the company boasts a diverse portfolio of residential and commercial projects, earning it a strong reputation as one of the leading real estate developers in the city.",
        conclusion: "Emaar Group has established itself as one of the leading real estate developers Gurgaon. Because of their commitment to delivering customer satisfaction through continuous innovation in development, the growth of the company will be exponential in the near future. "
      },
    }
  },
  {
    id: "13",
    title: "Godrej Miraya",
    location: "Sector 43, Gurugram, Gurgaon",
    search: ["Sector 43", "gurugram", "gurgaon", "Godrej Miraya"],
    category: "residential",
    image: "/assets/residential/godrej-miraya-thumbnail.jpg",
    details: {
      overview: {
        heading: "Godrej Miraya Sector 43, Gurgaon: Your Ideal Living Space",
        paragraph1: "Finding the perfect home is more than choosing a location—it’s about embracing a lifestyle that enriches your everyday life. Godrej Miraya, situated in Sector 43, Gurgaon, offers precisely that—a sophisticated, comfortable, and holistic living experience tailored to the needs of contemporary families and individuals. Blending luxury, convenience, and a close connection to nature, Godrej Miraya is not just a residence but a place to truly flourish.",
        paragraph2: "Godrej Miraya, situated in Sector 43, Gurgaon, is nestled in the prime location of Golf Course Road, offering a seamless blend of luxury and serenity. Known for its elegant charm and calm ambiance, Golf Course Road stands as one of Gurgaon’s most sought-after neighborhoods. This lively area provides an ideal lifestyle, perfectly suited to the preferences of modern professionals and millennials.",
      },
      features: [
        "Spacious 3 & 4 BHK apartments with open floor plans and premium finishes",
        "Prime location in Sector 43, Gurgaon on prestigious Golf Course Road",
        "Close proximity to major commercial hubs, schools, hospitals, and shopping centers",
        "Excellent connectivity via Rapid Metro, NH-8, and IGI Airport (25 minutes away)",
        "Comprehensive amenities including clubhouse, gym, swimming pool, and sports court",
        "Relaxation facilities like Hammam Room, Turkish Bath, and alfresco dining",
        "Eco-friendly features including energy efficiency, rainwater harvesting, and waste management",
        "24/7 security with CCTV, manned personnel, and community-focused spaces"
      ]
      ,
      specifications: {
        heading: "Highlights - Godrej Miraya, Gurgaon",
        highlights: [
          "Easy access from Golf Course Road, one of Gurgaon’s most prestigious addresses",
          "Spans across 5.157 acres of prime land",
          "Total of 248 exclusive apartments",
          "High-rise structure with 3 towers, each having G+32 floors"
        ]

      },
      location_advantage: {
        heading: "Location Advantage - Godrej Miraya, Gurgaon",
        paragraph1: "Situated in Sector 43, Gurgaon, Godrej Miraya boasts exceptional connectivity, giving residents convenient access to major destinations across both Delhi and Gurgaon. Nestled in a highly sought-after area along Golf Course Road, this development presents a prime opportunity to live close to important landmarks, elevating your daily lifestyle.",
        paragraph2: "Living at Godrej Miraya means being in close proximity to major business hubs, leisure destinations, and essential services.",
        highlights: [
          "Indira Gandhi International Airport – 25 Min.",
          "Aerocity – 25 Min.",
          "Mahipalpur – 20 Min.",
          "Golf Course Extension Road – 5 Min.",
          "DLF Cyber City – 15 Min.",
          "Leela Hotel – 15 Min.",
          "National Highway-8 – 10 Min.",
          "Appu Ghar – 5 Min.",
          "Naivedyam – 2 Min.",
          "Paras Hospital – 1 Min.",
          "Fortis Hospital – 12 Min.",
          "Millennium City Centre Gurugram – 4 Min.",
          "Gold Souk Mall – 6 Min.",
          "Galleria Market – 4 Min.",
          "Ridge Valley School – 2 Min.",
          "Delhi Public School, Sushant Lok – 2 Min."
        ]
      },
      about_developer: {
        logo: "/assets/developers/godrej-properties-logo.jpeg",
        heading: "Developer Name : Godrej Properties",
        paragraph1: "The Godrej Group has helped the country’s development in more ways than one. Godrej Properties, a subsidiary of the Group, have revolutionised the Indian real estate industry. Just by examining one state, you will realise the importance of these builders to modern India. For home buyers, no other real estate developers Gurgaon offer the same level of quality and luxury as Godrej Properties.",
        conclusion: "The company continues to build its legacy by developing high-quality residential units. This way, the name Godrej Properties will one day become synonymous with real estate developers Gurgaon. "
      },
    }
  },
  {
    id: "14",
    title: "M3M Soulitude",
    location: "Sector 89, Gurugram, Gurgaon",
    search: ["Sector 89", "gurugram", "gurgaon", "M3M Soulitude"],
    category: "residential",
    image: "/assets/residential/m3m-soulitude-thumbnail.jpg",
    details: {
      overview: {
        heading: "M3M Soulitude: A Luxurious Low-Rise Living Experience in Gurgaon",
        paragraph1: "M3M Soulitude is not merely a residential complex; it offers a comprehensive living experience that combines luxury with practicality. The project reflects a careful fusion of innovative design, outstanding amenities, and a prime location, tailored to meet the varied demands of contemporary families and professionals.",
      },
      features: [
        "Spanning 52 acres with 864 ready-to-move-in residential units.",
        "Prime location in Sector 89, Gurgaon with excellent connectivity to Dwarka Expressway, KMP Expressway, and NH8.",
        "Luxury 2.5 BHK and 3.5 BHK boutique floors with modern design and high-end finishes.",
        "State-of-the-art clubhouse, gym, and multipurpose courts for fitness and recreation.",
        "Five-tier smart access control and 24/7 security for enhanced safety.",
        "Dedicated EV charging points promoting eco-friendly living.",
        "Exclusive amenities like floating sauna, scenic pool, and rooftop jogging track.",
        "Proximity to schools, hospitals, banks, IGI Airport, and upcoming metro station.",
        "Energy-efficient VRV/VRF air conditioning and double-glazed windows for comfort and savings.",
        "Elegant interiors with Italian marble flooring and stylish modular kitchens."
      ],
      specifications: {
        heading: "Smart Shots: Your Path to Luxury Living with M3M India",
        paragraph1: "At M3M India, we understand the importance of making homeownership accessible and straightforward. Our \"Smart Shots\" program is designed to provide you with an unparalleled experience in purchasing your dream property.",
        highlights: [
          "Book your property with just ₹2 Lakhs\* as a minimal deposit.",
          "Flexible payment plans with ZERO booking fee and easy installment options.",
          "100% money-back guarantee if possession is delayed beyond 2 years.",
          "FREE personal office and private terrace included with luxury floors.",
          "First gated low-rise township in New Gurugram offering a secure, serene lifestyle."
        ]
      },
      location_advantage: {
        heading: "Location Advantage of M3M Soulitude, Sector 89, Gurugram",
        highlights: [
          "Saai Sports Hub DLF: 6-minute drive",
          "Wellness Club Gym Xpress, Sector 89: 3-minute drive",
          "MPRC Sports Park, Sector 92: 7-minute drive",
          "Delhi Public School Uday Nagar: 20-minute drive",
          "St. Xavier's High School, Golf Course Extension Road: 15-minute drive",
          "RPS International School, Gurugram: 5-minute drive",
          "Gurugram University, Nirvana Rd: 20-minute drive",
          "Govt. PG College, Basai Road: 13-minute drive",
          "Royal Institute of Science & Management: 7-minute drive",
          "Max Super Speciality Hospital near Huda City Centre: 18-minute drive",
          "Medanta the Medicity, Sector 38: 16-minute drive",
          "Fortis Memorial Research Institute, Sector 44: 20-minute drive",
          "Manipal Hospital, Palam Vihar: 19-minute drive",
          "Eros City Square, Rosewood City, Ghasola: 15-minute drive",
          "Gurgaon Dreamz Mall: 14-minute drive",
          "Orris Market 89, New Gurgaon: 4-minute drive"
        ]

      },
      about_developer: {
        logo: "/assets/developers/m3m-india-logo.jpeg",
        heading: "Developer Name : M3M India",
        paragraph1: "Established in 1998, M3M India has quickly become a prominent leader in the Indian real estate market. Committed to redefining luxury living and commercial spaces, the company emphasizes innovation, quality, and sustainability. Its diverse portfolio spans residential, commercial, and retail projects, earning the trust of both investors and homebuyers.",
        paragraph2: "ExpertiseWith over two decades of experience, M3M India possesses extensive expertise in the real estate market. The company’s team comprises industry professionals who are well-versed in market trends, customer preferences, and regulatory frameworks. This deep knowledge enables M3M to anticipate and meet the evolving needs of its clients effectively.",
        conclusion: "In summary, M3M India represents innovation and excellence in real estate. With a strong legacy, unwavering quality, and dedication to sustainability, it is a trusted name for luxury living and investments in India. Continuously growing its portfolio, M3M is committed to shaping the future of the real estate industry."
      },
    }
  },
  {
    id: "15",
    title: "3 BHK Conscient Hines Elevate On Sale",
    location: "Sector 59 Gurugram, Gurgaon",
    search: ["Sector 59", "gurugram", "gurgaon", "3 BHK Conscient Hines Elevate On Sale"],
    category: "residential",
    image: "/assets/residential/3-bhk-conscient-hines-elevate-on-sale-thumbnail.jpeg",
    details: {
      overview: {
        heading: "3 Bhk Conscinet Hines Elevate on Sale ",
        paragraph1: "We offer affordable luxury 3 and 4 BHK homes in Conscient Hines Elevate, available in all sizes. Located in Sector 59, Gurgaon, this upscale residential project by Conscient and Hines features spacious, thoughtfully designed apartments along with world-class amenities.",
        paragraph2: "The project offers 3 and 4 BHK apartments spread across 7 acres, each designed for maximum comfort and luxury. Apartments come with premium features like modular kitchens, high-quality flooring, and top-notch bathroom fittings.",
      },
      features: [
        "Luxury Apartments with modern amenities and spacious interiors.",
        "Located in Sector 59, Gurugram, a rapidly growing area.",
        "High-rise towers offering stunning surrounding views.",
        "Ample green spaces providing a peaceful, healthy environment.",
        "Well-equipped clubhouse with swimming pool, gym, and lounge.",
        "Smart homes with advanced automation controlled via smartphones.",
        "Excellent connectivity to major highways and transport hubs.",
        "24/7 robust security with CCTV, manned guards, and access control.",
        "Sustainable design featuring rainwater harvesting and energy-efficient systems."
      ]
      ,
      specifications: {
        heading: "Key Highlights:",
        highlights: [
          "Spacious 3 & 4 BHK Apartments",
          "High-rise Towers with breathtaking views",
          "Smart Homes with advanced home automation systems",
          "Modular Kitchens, premium fittings, and high-quality flooring",
          "Ample Green Spaces for a serene and eco-friendly environment",
          "Fully Equipped Clubhouse with gym, swimming pool, lounge, and more",
          "24/7 Security with CCTV, manned gates, and access control",
          "Sustainable Living with rainwater harvesting and energy-efficient systems"
        ]

      },
      location_advantage: {
        heading: "Location Advantages – Sector 59, Gurugram:",
        highlights: [
          "Rapidly developing neighborhood",
          "Excellent connectivity to Golf Course Extension Road, NH-8, and metro stations",
          "Close proximity to top schools, hospitals, malls, and business hubs"
        ]

      },
      about_developer: {
        logo: "/assets/developers/conscient-infrastructure-logo.jpg",
        heading: "Developer Name : Conscient Infrastructure",
        paragraph1: "Conscient Infrastructure is guided by a vision to create modern homes that match global standards. This commitment to innovation and design has established them as one of Gurgaon’s most sought-after real estate developers. Since its inception in 1990, the company has dedicated itself to delivering high-quality residential and commercial projects, earning a strong reputation for excellence.",
        paragraph2: "With a progressive mindset, Conscient Infrastructure has spent over three decades crafting future-ready homes designed to adapt to the evolving needs of modern residents. Its strong customer-centric approach has helped the company build lasting trust and emerge as a respected name in the Indian real estate industry.",
        conclusion: "Regarding trust, most real estate developers Gurgaon, cannot compete against Conscient Infrastructure. This has been made possible because of the company's dedication to delivering the best residential and commercial projects for over three decades."
      },
    }
  },
  {
    id: "16",
    title: "M3M Opus at M3M Merlin",
    location: "Sector 67 Gurugram, Gurgaon",
    search: ["Sector 67", "gurugram", "gurgaon", "M3M Opus at M3M Merlin"],
    category: "residential",
    image: "/assets/residential/m3m-opus-at-m3m-merlin-thumbnail.jpg",
    details: {
      overview: {
        heading: "M3M Opus at M3M Merlin: Redefining Luxury Living in Gurugram",
        paragraph1: "Discover M3M Opus at M3M Merlin – a premium residential enclave in the vibrant core of Gurugram. Thoughtfully crafted for those who value elegance, comfort, and modern convenience, this contemporary development stands out for its prime location, innovative architecture, and world-class amenities. M3M Opus at M3M Merlin delivers an elevated living experience that perfectly balances luxury and lifestyle.",
      },
      features: [
        "Designed by the award-winning Studio Symbiosis, offering modern and elegant architecture.",
        "Spacious 3 BHK + S apartments with optimized natural light and ventilation.",
        "Premium clubhouse with indoor games, lounges, gym, and multi-purpose hall.",
        "Eco-friendly features including rainwater harvesting and solar-powered lighting.",
        "Prime location with seamless connectivity to NH-8, Sohna Road, and key business hubs."
      ]
      ,
      specifications: {
        heading: "Prime Location: The Address of Choice Affluent Catchment Area",
        paragraph1: "M3M Opus at M3M Merlin is situated in Sector 67, one of Gurugram’s most sought-after locales.",
        highlights: [
          "Located just 30 minutes from IGI Airport with seamless access to Golf Course Road Extension.",
          "Club Sands features the largest pool in the area with six unique swimming experiences.",
          "Each 3 BHK apartment spans 2,398 sq ft with 270° city and Aravalli views and high-end finishes.",
          "Premium interiors include 11-foot ceilings, imported marble flooring, and smart home features.",
          "Attractive payment plan: Pay 30% now and balance upon super-structure and possession."
        ]

      },
      location_advantage: {
        heading: "Location Advantage: A Hub of Connectivity",
        paragraph1: "M3M Opus at M3M Merlin Sector 67 Gurugram benefits from its prime location, ensuring easy access to major transport routes and essential amenities.",
        highlights: [
          "Direct connectivity to Golf Course Extension Road, Sohna Road, and NH-8 for effortless travel.",
          "Close to metro stations and public transport for easy citywide accessibility.",
          "Near prestigious schools like Shri Ram School and Delhi Public School.",
          "Quick access to top-tier hospitals including Medanta and Fortis.",
          "Surrounded by major malls and entertainment centers for a vibrant lifestyle."
        ]
      },
      about_developer: {
        logo: "/assets/developers/m3m-india-logo.jpg",
        heading: "Developer Name : M3M India",
        paragraph1: "Established in 1998, M3M India has quickly risen to prominence in the Indian real estate landscape. Driven by a vision to transform luxury living and commercial environments, the company emphasizes innovation, superior quality, and sustainable development. With a robust and varied portfolio of residential, commercial, and retail projects, M3M has earned a strong reputation among both homebuyers and investors.",
        conclusion: "In summary, M3M India stands as a beacon of innovation and excellence in the real estate sector. Its rich history, commitment to quality, and focus on sustainability make it a trusted choice for those seeking luxury living and investment opportunities in India. With a portfolio that continues to expand, M3M remains dedicated to shaping the future of real estate."
      },
    }
  },
  {
    id: "17",
    title: "Eldeco Fairway Reserve",
    location: "Sector 80 Gurugram, Gurgaon",
    search: ["Sector 80", "gurugram", "gurgaon", "Eldeco Fairway Reserve"],
    category: "residential",
    image: "/assets/residential/eldeco-fairway-thumbnail.jpg",
    details: {
      overview: {
        heading: "Eldeco Fairway Reserve Sector 80: A Luxury Living Experience in Manesar, Gurugram",
        paragraph1: "Eldeco Fairway Reserve is a premium residential development nestled in Sector 80, Manesar, Gurugram. Spread across 8.34 acres of prime land, this project by the reputed Eldeco Group is set to become a landmark in the region. Designed to cater to the lifestyle needs of modern families, it offers spacious 3 & 4 BHK apartments ranging from 2200 to 3600 sq. ft., combining contemporary comfort with the tranquility of nature.",
      },
      features: [
        "Low-density development with less than 40 apartments per acre",
        "85% open area with 4.5 acres of central greens and iconic water feature",
        "No additional FAR loading under TOD or TDR policies",
        "Spacious 3 & 4 BHK apartments ranging from 2200 to 3600 sq. ft.",
        "Open-plan tower layout with infinity views and no direct tower facing",
        "11 ft clear ceiling height with premium specifications and modular kitchens",
        "VRV all-weather air conditioning and automation-ready homes",
        "World-class clubhouse with gym, spa, pools, and mini theatre",
        "Extensive outdoor amenities including sports courts, pet park, and amphitheatre",
        "Strategic location near Delhi-Jaipur Expressway with strong future connectivity"
      ],
      specifications: {
        heading: "Eldeco Fairway Reserve epitomizes luxurious living in the heart of Sector 80, Manesar, Gurugram. With a focus on modern comforts, natural serenity, and community living, this project caters to the diverse needs of contemporary families. Whether you desire an active lifestyle, a tranquil retreat, or a vibrant community, Eldeco Fairway Reserve has it all. Don't miss the chance to be part of this exceptional residential experience—explore the possibilities today and secure your dream home in this landmark development.",
        highlights: [
          "Strategically located in Manesar with seamless access to key Gurgaon sectors",
          "Prime location offering easy connectivity to commercial and recreational hubs",
          "Luxury apartments designed with high-quality materials and modern finishes",
          "Spacious layouts with abundant natural light for a welcoming atmosphere",
          "State-of-the-art fitness centers and relaxing swimming pools",
          "Beautifully landscaped gardens and dedicated children’s play areas",
          "Amenities fostering community living and residents’ well-being",
          "Focus on elegance, comfort, and an unparalleled living experience",
          "Ideal for those seeking a serene retreat or an active lifestyle",
          "Perfect blend of convenience and sophisticated luxury living"
        ]

      },
      location_advantage: {
        heading: "Location Advantage of Eldeco Fairway Reserve",
        highlights: [
          "Manesar is a rapidly developing suburb of Gurugram offering modern living and strategic location",
          "Located a short drive from Gurugram’s corporate hubs with excellent connectivity and infrastructure",
          "Sector 80 offers easy access to Delhi-Jaipur Expressway for quick commutes to Delhi and Jaipur",
          "Upcoming Dwarka Expressway will further enhance connectivity to the National Capital Region (NCR)",
          "Ideal for professionals working in corporate offices and industrial sectors of Gurugram",
          "Surrounded by reputed educational institutions ensuring quality schooling for families",
          "Well-represented healthcare facilities with numerous hospitals and clinics",
          "Shopping centers, restaurants, and recreational spaces provide convenience and entertainment",
          "Green spaces and parks add natural charm amid urban development",
          "Sector 80, Manesar is poised for significant growth, making it an attractive investment opportunity",
          "Combines accessibility, essential services, and vibrant lifestyle for a thriving community",
          "Strategic location and quality living make it ideal for future-focused investors"
        ]

      },
      about_developer: {
        logo: "/assets/developers/eldeco-logo.png",
        heading: "Developer Name : Eldeco Group",
        paragraph1: "Since 1985, the Eldeco Group has been a pioneer in real estate development, known for its timely delivery and high-quality projects. With over 200 completed developments across 20 cities in North India, Eldeco’s portfolio spans large integrated townships, high-rise condominiums, industrial estates, malls, and office buildings. Currently, 30 more projects are underway. Having developed more than 30 million sq. ft. and served over 30,000 satisfied customers, Eldeco has established a strong presence in cities including Lucknow, Kanpur, Agra, Greater Noida, Noida, and Gurgaon—where the brand is synonymous with trust and excellence. The Group is also expanding in Panipat, Sonipat, Ludhiana, Jhansi, Bareilly, Panchkula, Neemrana, Delhi, Kasauli, Rudrapur, Gorakhpur, Rishikesh, and Jalandhar. Its flagship industrial development is the distinctive 1,200-acre Eldeco Sidcul Industrial Park located in Sitarganj, Uttarakhand.",
        paragraph2: "Eldeco’s strength is rooted in its professional and experienced workforce. Complementing our in-house expertise, we partner with top-tier consultants and contractors to consistently deliver high-quality projects. Our operations are founded on principles of superior construction, exceptional quality, and unwavering customer satisfaction. Over the years, the Group has earned numerous awards and accolades in recognition of its outstanding projects.",
        conclusion: "In conclusion, Eldeco Group’s commitment to excellence, strong professional team, and collaborative approach have established it as a trusted name in real estate. With a focus on quality construction and customer satisfaction, Eldeco continues to deliver remarkable projects that set industry benchmarks. Its consistent achievements and recognized expertise ensure a promising future as it expands and innovates in the real estate sector."
      },
    }
  },
  {
    id: "18",
    title: "Paras The Florett Enclave",
    location: "Sector 59 Gurugram, Gurgaon",
    search: ["Sector 59", "gurugram", "gurgaon", "Paras The Florett Enclave"],
    category: "residential",
    image: "/assets/residential/paras-the-florett-enclave-thumbnail.jpg",
    details: {
      overview: {
        heading: "Discover Paras The Florett Enclave: Luxury Apartments in Sector 59, Gurugram ",
        paragraph1: "Paras The Florett Enclave is a prestigious residential project situated in the bustling Sector 59 of Gurugram. It offers a distinctive living experience by combining contemporary design, premium amenities, and eco-friendly practices. Surrounded by verdant greenery and beautifully landscaped gardens, the enclave provides a serene yet lively environment, ideal for families who value luxury, comfort, and community living.",
        paragraph2: "Paras The Florett Enclave is a carefully crafted residential project developed by the esteemed Paras Developers, known for their commitment to quality and innovation. Spanning over 6.2 acres, this low-rise development integrates seamlessly with the natural landscape, creating a serene atmosphere that enhances the living experience. The design is focused on maximizing natural light and ventilation, ensuring that each apartment is airy and inviting.",
      },
      features: [
        "Meticulously designed 2 BHK and 3 BHK apartments with premium fittings.",
        "Spacious layouts maximizing functionality and comfort.",
        "Abundant natural light through large windows and open balconies.",
        "High-quality finishes including vitrified and anti-skid tiles.",
        "Modular kitchens with granite countertops and premium fittings.",
        "Luxurious bathrooms with top-quality sanitary fixtures.",
        "World-class amenities like clubhouse, swimming pool, and gym.",
        "Advanced security with CCTV surveillance, manned guards, and controlled entry.",
        "Sustainable features such as energy-efficient lighting and rainwater harvesting.",
        "Prime location with excellent connectivity to Gurgaon, Delhi, and key commercial hubs."
      ],
      specifications: {
        heading: "Paras The Florett Enclave Project Highlights",
        highlights: [
          "Strategically located in Sector 59, Gurugram, offering luxury builder floors in a private community with assigned parking.",
          "Developed by Paras Buildtech, featuring a five-tier security system for enhanced safety.",
          "Lavish green open areas and 100% power backup with provisions for individual AC units.",
          "Available in 2+U and 3+U BHK configurations, ranging from 1,390 to 1,750 SQFT.",
          "Close to major malls and landmarks like the Grand Hyatt, with prices starting at ₹2.25 Cr*."
        ]

      },
      location_advantage: {
        heading: "Location Advantages of Florett Enclave",
        paragraph1: "Paras The Florett Enclave enjoys a prime location in Sector 59, Gurugram, right next to the Grand Hyatt Hotel and offering picturesque views of the Aravalli Hills. Its strategic placement ensures seamless access to major transport links, reputed healthcare centers, and top educational institutions, making it a highly desirable and secure investment destination.",
        highlights: [
          "500 meters to Magnum Towers",
          "600 meters to Good Earth",
          "1.5 kilometers to Ascendas International Tech Park",
          "2 kilometers to Golf Course Road",
          "2.5 kilometers to Emaar Digi Greens",
          "2.8 kilometers to the Rapid Metro Station",
          "3.2 kilometers to Heritage Xperiential School",
          "6 kilometers to One Horizon Center",
          "7 kilometers to both DPS International School and Sohna Road",
          "12 kilometers to DLF Cyberhub",
          "21 kilometers to Indira Gandhi International Airport, Delhi"
        ]
      },
      about_developer: {
        logo: "/assets/developers/paras-buildtech-logo.jpg",
        heading: "Developer Name : Paras Buildtech",
        paragraph1: "Paras Buildtech stands as a leading force in the Indian real estate industry, recognized for its dedication to quality and forward-thinking design. Founded with the vision of crafting world-class residential and commercial developments, the company has delivered multiple successful projects across key cities. Known for its customer-centric approach, Paras Buildtech has earned a strong reputation for dependable execution and construction excellence.",
        paragraph2: "Paras Buildtech prioritizes high-quality construction and contemporary design in all its projects. Each development is thoughtfully crafted using top-grade materials that ensure both durability and aesthetic appeal. The innovative architectural approach focuses on maximizing space, natural light, and ventilation to create comfortable and inviting living environments. Additionally, the company integrates sustainable practices by incorporating eco-friendly technologies and materials, promoting a greener and more responsible lifestyle for its residents.",
        conclusion: "Paras Buildtech continues to redefine luxury living, creating spaces that are not only beautiful but also functional and sustainable, making it a leader in the real estate market."
      },
    }
  },
  {
    id: "19",
    title: "Ameya Sapphire 57",
    location: "Sector 57, Gurugram, Gurgaon",
    search: ["Sector 57", "gurugram", "gurgaon", "Ameya Sapphire 57"],
    category: "commercial",
    image: "/assets/commercial/ameya-sapphire-57-thumbnail.jpg",
    details: {
      overview: {
        heading: "Ameya Sapphire 57: Premium Commercial Property Investment Opportunity in Sector 57, Gurgaon",
        paragraph1: "Ameya Sapphire 57 stands as a landmark commercial project in Sector 57, Gurgaon, offering a blend of high-street retail, office spaces, and F&B outlets. Designed to cater to the needs of modern businesses and discerning shoppers, the project features contemporary architecture, ample parking, and a vibrant atmosphere. Its strategic location ensures excellent visibility and accessibility, making it a preferred choice for brands and investors alike.",
        paragraph2: "With a focus on convenience and customer experience, Ameya Sapphire 57 provides a seamless environment for shopping, dining, and business. The project is surrounded by established residential communities, ensuring a steady flow of footfall and long-term value for occupants and investors."
      },
      features: [
        "Prime location on Golf Course Extension Road, Sector 57, Gurgaon",
        "High-street retail, office spaces, and F&B outlets",
        "Modern architecture with premium finishes",
        "Ample surface and basement parking for visitors and tenants",
        "Wide frontage for maximum visibility",
        "Dedicated zones for anchor stores, cafes, and restaurants",
        "High footfall from surrounding residential catchment",
        "24x7 security and professional facility management"
      ],
      specifications: {
        heading: "Project Specifications – Ameya Sapphire 57",
        paragraph1: "Ameya Sapphire 57 is thoughtfully designed with modern amenities and robust infrastructure to support a thriving commercial environment.",
        paragraph2: "The project features spacious retail units, efficient office layouts, high-speed elevators, and advanced security systems, ensuring a comfortable and secure experience for all occupants.",
        highlights: [
          "Premium commercial project in Sector 57, Gurgaon",
          "Offers high-street retail, office spaces, and F&B outlets",
          "Located on Golf Course Extension Road with high visibility",
          "Double-height shop fronts and modern architecture",
          "Surrounded by dense residential catchment ensuring high footfall",
          "Ample surface and basement parking for visitors and tenants",
          "Developed by the reputed Ameya Group with timely delivery track record"
        ]

      },
      location_advantage: {
        heading: "Strategic Location Benefits",
        paragraph1: "Ameya Sapphire 57 enjoys a prime position in Sector 57, Gurgaon, offering excellent connectivity to major roads, business hubs, and residential neighborhoods.",
        highlights: [
          "0.42 km to The British Oak Tree School – top educational facility nearby",
          "0.39 km to Artemis Hospital – quick access to premium healthcare",
          "1.60 km to Indian Overseas Bank, Wazirabad Branch – convenient banking services",
          "1.57 km to The Grand Vitara Hotel – ideal for guest stays and events",
          "1.13 km to Ryders Sports Academy – excellent for recreation and fitness",
          "1.96 km to Pioneer Urban Square – major business and commercial hub"
        ]

      },
      about_developer: {
        logo: "/assets/developers/ameya-logo.png",
        heading: "Developer Name : Ameya Group",
        paragraph1: "Ameya Group is a renowned name in the real estate sector, recognized for delivering high-quality commercial and retail developments in Gurgaon. The group is committed to innovation, timely delivery, and customer satisfaction.",
        paragraph2: "With a proven track record of successful projects, Ameya Group continues to set new benchmarks in commercial real estate, focusing on strategic locations and modern design.",
      },
    }
  },

  {
    id: "20",
    title: "DLF Club Arcade",
    location: "Sector 91, Gurugram, Gurgaon",
    search: ["Sector 91", "gurugram", "gurgaon", "DLF Club Arcade"],
    category: "commercial",
    image: "/assets/commercial/dlf-club-arcade-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "21",
    title: "AIPL Joy District",
    location: "Sector 88, Gurugram, Gurgaon",
    search: ["Sector 88", "gurugram", "gurgaon", "AIPL Joy District"],
    category: "commercial",
    image: "/assets/commercial/aipl-joy-district-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "22",
    title: "M3M Route 65",
    location: "Sector 65, Gurugram, Gurgaon",
    search: ["Sector 65", "gurugram", "gurgaon", "M3M Route 65"],
    category: "commercial",
    image: "/assets/commercial/m3m-route-65-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "23",
    title: "Suncity The Empire",
    location: "Sector 43, Gurugram, Gurgaon",
    search: ["Sector 43", "gurugram", "gurgaon", "Suncity The Empire"],
    category: "commercial",
    image: "/assets/commercial/suncity-the-empire-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "24",
    title: "Magnum Global Park Gurgaon",
    location: "Sector 58, Gurugram, Gurgaon",
    search: ["Sector 58", "gurugram", "gurgaon", "Magnum Global Park Gurgaon"],
    category: "commercial",
    image: "/assets/commercial/magnum-global-park-gurgaon-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "25",
    title: "Elan Imperial",
    location: "Sector 82, Gurugram, Gurgaon",
    search: ["Sector 82", "gurugram", "gurgaon", "Elan Imperial"],
    category: "commercial",
    image: "/assets/commercial/elan-imperial-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "26",
    title: "Elan The Mark",
    location: "Sector 106, Dwarka Expressway, Gurugram, Gurgaon",
    search: ["Sector 106", "Dwarka Expressway", "gurugram", "gurgaon", "Elan The Mark"],
    category: "commercial",
    image: "/assets/commercial/elan-the-mark-thumbnail.jpeg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "27",
    title: "M3M Paragon 57",
    location: "Sector 57, Gurugram, Gurgaon",
    search: ["Sector 57", "gurugram", "gurgaon", "M3M Paragon 57"],
    category: "commercial",
    image: "/assets/commercial/m3m-paragon-57-thumbnail.jpg",
    details: {
      overview: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
      },
      features: [],
      specifications: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: []
      },
      location_advantage: {
        heading: "",
        paragraph1: "",
        paragraph2: "",
        highlights: [],
      },
      about_developer: {
        logo: "/assets/developers/",
        heading: "",
        paragraph1: "",
        paragraph2: "",
        conclusion: ""
      },
    }
  },
  {
    id: "28",
    title: "M3M Jewel",
    location: "Sector 25, MG Road, Gurugram, Gurgaon",
    search: ["Sector 25", "MG Road", "gurugram", "gurgaon", "M3M Jewel"],
    category: "commercial",
    image: "/assets/commercial/m3m-jewel-thumbnail.jpg"
  },
  {
    id: "29",
    title: "M3M Cosmopolitan",
    location: "Sector 66, Golf Course Ext Road, Gurugram, Gurgaon",
    search: ["Sector 66", "Golf Course Ext Road", "gurugram", "gurgaon", "M3M Cosmopolitan"],
    category: "commercial",
    image: "/assets/commercial/m3m-cosmopolitan-thumbnail.jpg"
  },
  {
    id: "30",
    title: "M3M Tee Point",
    location: "Sector 66, Gurugram, Gurgaon",
    search: ["Sector 66", "gurugram", "gurgaon", "M3M Tee Point"],
    category: "commercial",
    image: "/assets/commercial/m3m-tee-point-thumbnail.jpg"
  },
  {
    id: "31",
    title: "M3M Urbana Premium",
    location: "Sector 67, Gurugram, Gurgaon",
    search: ["Sector 67", "gurugram", "gurgaon", "M3M Urbana Premium"],
    category: "commercial",
    image: "/assets/commercial/m3m-urbana-premium-thumbnail.jpg"
  },
  {
    id: "32",
    title: "M3M Corner Walk",
    location: "Sector 74, Gurugram, Gurgaon",
    search: ["Sector 74", "gurugram", "gurgaon", "M3M Corner Walk"],
    category: "commercial",
    image: "/assets/commercial/m3m-corner-walk-thumbnail.jpg"
  },
  {
    id: "33",
    title: "M3M Food Nation",
    location: "Sector 65, Golf Course Ext Road, Gurugram, Gurgaon",
    search: ["Sector 65", "Golf Course Ext Road", "gurugram", "gurgaon", "M3M Food Nation"],
    category: "commercial",
    image: "/assets/commercial/m3m-food-nation-thumbnail.jpeg"
  },
  {
    id: "34",
    title: "M3M International Financial Center",
    location: "Sector 66, Golf Course Ext Road, Gurugram, Gurgaon",
    search: ["Sector 66", "Golf Course Ext Road", "gurugram", "gurgaon", "M3M International Financial Center"],
    category: "commercial",
    image: "/assets/commercial/m3m-international-financial-center-thumbnail.jpg"
  },
  {
    id: "35",
    title: "M3M Service Apartments",
    location: "Sector 67, Golf Course Ext Road, Gurugram, Gurgaon",
    search: ["Sector 67", "Golf Course Ext Road", "gurugram", "gurgaon", "M3M Service Apartments"],
    category: "commercial",
    image: "/assets/commercial/m3m-service-apartments-thumbnail.jpg"
  },
  {
    id: "36",
    title: "M3M Prive 73",
    location: "Sector 73, Gurugram, Gurgaon",
    search: ["Sector 73", "gurugram", "gurgaon", "M3M Prive 73"],
    category: "commercial",
    image: "/assets/commercial/m3m-prive-73-thumbnail.jpg"
  },
  {
    id: "37",
    title: "4 BHK Apartments for Rent in Emerald Floors Premier",
    location: "Sector 65, Golf Course Ext Road",
    search: ["Sector 65", "Golf Course Ext Road", "gurugram", "gurgaon", "4 BHK Apartments for Rent in Emerald Floors Premier"],
    category: "rent",
    image: "/assets/rent/emerald-floors-premier-thumbnail.jpg"
  },
  {
    id: "38",
    title: "4 BHK Independent Floor for Rent in Sector 65 Gurgaon",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "gurgaon", "gurugram", "4 BHK Independent Floor for Rent in Sector 65 Gurgaon"],
    category: "rent",
    image: "/assets/rent/sector-65-independent-floor-thumbnail.jpg"
  },
  {
    id: "39",
    title: "Emaar Palm Springs Apartment for Rent",
    location: "DLF Phase-5, Golf Course Road",
    search: ["DLF Phase 5", "Golf Course Road", "gurugram", "gurgaon", "Emaar Palm Springs Apartment for Rent"],
    category: "rent",
    image: "/assets/rent/emaar-palm-springs-thumbnail.jpg"
  },
  {
    id: "40",
    title: "3 BHK Apartment for Rent in DLF Phase 5",
    location: "DLF Phase-5, Golf Course Road",
    search: ["DLF Phase-5", "Golf Course Road", "gurugram", "gurgaon", "3 BHK Apartment for Rent in DLF Phase 5"],
    category: "rent",
    image: "/assets/rent/dlf-phase-5-apartment-thumbnail.jpg"
  },
  {
    id: "41",
    title: "Prominent Swastik Greens",
    location: "Sector M9 & M10, IMT Manesar, Gurugram",
    search: ["Sector M9", "Sector M10", "IMT Manesar", "Gurugram", "Gurgaon", "Prominent Swastik Greens"],
    category: "plots",
    image: "/assets/plots/prominent-swastik-greens-thumbnail.jpg"
  },
  {
    id: "42",
    title: "Emaar Marbella Phase 2 Plots",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "Gurgaon", "Gurugram", "Emaar Marbella Phase 2 Plots"],
    category: "plots",
    image: "/assets/plots/emaar-marbella-phase-2-thumbnail.jpg"
  },
  {
    id: "43",
    title: "JMS Primeland Plots",
    location: "Sector 95A, New Gurgaon",
    search: ["Sector 95A", "New Gurgaon", "New Gurugram", "JMS Primeland Plots"],
    category: "plots",
    image: "/assets/plots/jms-primeland-thumbnail.jpg"
  },
  {
    id: "44",
    title: "Emerald Hills Villa Plots",
    location: "Sector 65, Golf Course Ext Road",
    search: ["Sector 65", "Golf Course Ext Road", "Gurgaon", "Gurugram", "Emerald Hills Villa Plots"],
    category: "plots",
    image: "/assets/plots/emerald-hills-villa-plots-thumbnail.jpg"
  },
  {
    id: "45",
    title: "Emerald Hills Plots",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "Gurgaon", "Gurugram", "Emerald Hills Plots"],
    category: "plots",
    image: "/assets/plots/emerald-hills-plots-thumbnail.jpg"
  },
  {
    id: "46",
    title: "Pyramid Spring Valley Plots",
    location: "Sector 35, Sohna",
    search: ["Sector 35", "Sohna", "Pyramid Spring Valley Plots", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/pyramid-spring-valley-thumbnail.jpg"
  },
  {
    id: "47",
    title: "Ansal Versalia Plots",
    location: "Sector 67, Gurgaon",
    search: ["Sector 67", "Gurgaon", "Gurugram", "Ansal Versalia Plots"],
    category: "plots",
    image: "/assets/plots/ansal-versalia-thumbnail.jpg"
  },
  {
    id: "48",
    title: "Ansal Esencia Plots",
    location: "Sector 67, Gurgaon",
    search: ["Sector 67", "Gurgaon", "Gurugram", "Ansal Esencia Plots"],
    category: "plots",
    image: "/assets/plots/ansal-esencia-thumbnail.jpg"
  },
  {
    id: "49",
    title: "Adani Brahma Plots Gurgaon",
    location: "Sector 63/65, Golf Course Ext Road",
    search: ["Sector 63", "Sector 65", "Golf Course Ext Road", "Gurgaon", "Gurugram", "Adani Brahma Plots Gurgaon"],
    category: "plots",
    image: "/assets/plots/adani-brahma-plots-thumbnail.jpg"
  },
  {
    id: "50",
    title: "Adani Plots Gurgaon",
    location: "Sector 63/65, Golf Course Ext Road",
    search: ["Sector 63", "Sector 65", "Golf Course Ext Road", "Gurgaon", "Gurugram", "Adani Plots Gurgaon"],
    category: "plots",
    image: "/assets/plots/adani-plots-gurgaon-thumbnail.jpg"
  },
  {
    id: "51",
    title: "Adani Plots Sector 65 Gurgaon",
    location: "Sector 65, Golf Course Ext Road",
    search: ["Sector 65", "Golf Course Ext Road", "Gurgaon", "Gurugram", "Adani Plots Sector 65"],
    category: "plots",
    image: "/assets/plots/adani-plots-sector-65-thumbnail.jpeg"
  },
  {
    id: "52",
    title: "Uppal G99 Plots",
    location: "Sector 99, Gurgaon",
    search: ["Sector 99", "Uppal G99", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/uppal-g99-thumbnail.jpg"
  },
  {
    id: "53",
    title: "HUDA Plots on Sale",
    location: "All Gurgaon Sector, Golf Course Road",
    search: ["HUDA Plots", "Gurgaon", "Gurugram", "Golf Course Road"],
    category: "plots",
    image: "/assets/plots/huda-plots-thumbnail.jpg"
  },
  {
    id: "54",
    title: "BPTP Amstoria Plots",
    location: "Sector 102, Gurgaon",
    search: ["Sector 102", "BPTP Amstoria", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/bptp-amstoria-thumbnail.jpg"
  },
  {
    id: "55",
    title: "BPTP Fortuna Plots",
    location: "Sector 70A, Gurgaon",
    search: ["Sector 70A", "BPTP Fortuna", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/bptp-fortuna-thumbnail.png"
  },
  {
    id: "56",
    title: "Godrej Retreat Plots Faridabad",
    location: "Sector 83, Faridabad",
    search: ["Sector 83", "Faridabad", "Godrej Retreat"],
    category: "plots",
    image: "/assets/plots/godrej-retreat-faridabad-thumbnail.jpg"
  },
  {
    id: "57",
    title: "Experion The Westerlies",
    location: "Sector 108, Gurgaon",
    search: ["Sector 108", "Experion The Westerlies", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/experion-the-westerlies-thumbnail.jpg"
  },
  {
    id: "58",
    title: "IREO City Plots",
    location: "Sector 60, Gurgaon",
    search: ["Sector 60", "IREO City", "Gurgaon", "Gurugram"],
    category: "plots",
    image: "/assets/plots/ireo-city-thumbnail.jpg"
  },
  {
    id: "59",
    title: "3 BHK Conscient Hines Elevate on Sale",
    location: "Sector 59, Gurgaon",
    search: ["Sector 59", "Conscient Hines", "Elevate", "3 BHK", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/conscient-hines-elevate-thumbnail.jpeg"
  },
  {
    id: "60",
    title: "Emaar Marbella Phase 2 Plots",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "Emaar", "Marbella Phase 2", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-marbella-phase-2-thumbnail.jpg"
  },
  {
    id: "61",
    title: "Emaar DigiHomes",
    location: "Sector 62, Golf Course Ext Road",
    search: ["Sector 62", "Golf Course Ext Road", "Emaar DigiHomes", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-digihomes-thumbnail.jpg"
  },
  {
    id: "62",
    title: "M3M Tee Point",
    location: "Sector 66, Gurgaon",
    search: ["Sector 66", "M3M", "Tee Point", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-tee-point-thumbnail.jpg"
  },
  {
    id: "63",
    title: "M3M Urbana Premium",
    location: "Sector 67, Gurgaon",
    search: ["Sector 67", "M3M", "Urbana Premium", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-urbana-premium-thumbnail.jpg"
  },
  {
    id: "64",
    title: "M3M Heights",
    location: "Sector 65, Golf Course Ext Road",
    search: ["Sector 65", "M3M", "Heights", "Golf Course Ext Road", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-heights-thumbnail.jpg"
  },
  {
    id: "65",
    title: "M3M Corner Walk",
    location: "Sector 74, Gurgaon",
    search: ["Sector 74", "M3M", "Corner Walk", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-corner-walk-thumbnail.jpg"
  },
  {
    id: "66",
    title: "M3M Prive 73",
    location: "Sector 73, Gurgaon",
    search: ["Sector 73", "M3M", "Prive 73", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-prive-73-thumbnail.jpg"
  },
  {
    id: "67",
    title: "M3M Urbana",
    location: "Sector 67, Gurgaon",
    search: ["Sector 67", "M3M", "Urbana", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-urbana-thumbnail.jpg"
  },
  {
    id: "68",
    title: "M3M Urbana One Key Resiments",
    location: "Sector 67, Gurgaon",
    search: ["Sector 67", "M3M", "Urbana One Key", "Resiments", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-urbana-one-key-thumbnail.jpg"
  },
  {
    id: "69",
    title: "M3M 65th Avenue",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "M3M", "65th Avenue", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-65th-avenue-thumbnail.jpeg"
  },
  {
    id: "70",
    title: "M3M Broadway",
    location: "Sector 71, Gurgaon",
    search: ["Sector 71", "M3M", "Broadway", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/m3m-broadway-thumbnail.jpg"
  },
  {
    id: "71",
    title: "Emaar Emerald Plaza",
    location: "Sector 65, Gurgaon",
    search: ["Sector 65", "Emaar", "Emerald Plaza", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-emerald-plaza-thumbnail.jpg"
  },
  {
    id: "72",
    title: "Emaar Palm Square",
    location: "Sector 66, Gurgaon",
    search: ["Sector 66", "Emaar", "Palm Square", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-palm-square-thumbnail.jpg"
  },
  {
    id: "73",
    title: "Emaar Palm Springs Plaza",
    location: "Golf Course Road, Gurgaon",
    search: ["Golf Course Road", "Emaar", "Palm Springs Plaza", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-palm-springs-plaza-thumbnail.jpeg"
  },
  {
    id: "74",
    title: "Emaar Palm Terraces Select",
    location: "Sector 66, Golf Course Ext Road",
    search: ["Sector 66", "Emaar", "Palm Terraces Select", "Golf Course Ext Road", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-palm-terraces-select-thumbnail.jpg"
  },
  {
    id: "75",
    title: "Emaar Capital Towers",
    location: "M G Road, Gurgaon",
    search: ["MG Road", "Emaar", "Capital Towers", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-capital-towers-thumbnail.jpg"
  },
  {
    id: "76",
    title: "Emaar Marbella Villas",
    location: "Sector 66, Golf Course Ext Road",
    search: ["Sector 66", "Emaar", "Marbella Villas", "Golf Course Ext Road", "Gurgaon", "Gurugram"],
    category: "resale",
    image: "/assets/resale/emaar-marbella-villas-thumbnail.jpg"
  },
  {
    id: "77",
    title: "Belaperla Central Park Resort",
    location: "Sector 48, Gurugram",
    search: ["Sector 48", "Belaperla", "Central Park Resort", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/belaperla-central-park-resort-thumbnail.jpg"
  },
  {
    id: "78",
    title: "Experion The Trillion",
    location: "Sector 48, Gurugram",
    search: ["Sector 48", "Experion", "The Trillion", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/experion-the-trillion-thumbnail.jpg"
  },
  {
    id: "79",
    title: "MNB Ananta Vilasa",
    location: "Sector 56, Gurugram",
    search: ["Sector 56", "MNB", "Ananta Vilasa", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/mnb-ananta-vilasa-thumbnail.jpg"
  },
  {
    id: "80",
    title: "Hero Homes The Palatial",
    location: "Sector 104, Gurugram",
    search: ["Sector 104", "Hero Homes The Palatial", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/hero-homes-the-palatial-thumbnail.jpg"
  },
  {
    id: "81",
    title: "Conscient Elaira Residences",
    location: "Sector 80, Gurugram",
    search: ["Sector 80", "Conscient Elaira Residences", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/conscient-elaira-residences-thumbnail.jpg"
  },
  {
    id: "82",
    title: "Birla Arika",
    location: "Sector 31, Gurugram",
    search: ["Sector 31", "Birla arika", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/birla-arika-thumbnail.jpg"
  },
  {
    id: "83",
    title: "BPTP Amstoria Verti Greens",
    location: "Sector 102, Gurugram",
    search: ["Sector 102", "BPTP", "Amstoria Verti Greens", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/bptp-amstoria-verti-greens-thumbnail.jpg"
  },
  {
    id: "84",
    title: "Elan The Emperor",
    location: "Sector 106, Gurugram",
    search: ["Sector 106", "Elan the Emperor", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/elan-the-emperor-thumbnail.jpeg"
  },
  {
    id: "85",
    title: "Emaar Urban Ascent",
    location: "Sector 112, Gurugram",
    search: ["Sector 112", "Emaar", "Urban Ascent", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/emaar-urban-ascent-thumbnail.jpg"
  },
  {
    id: "86",
    title: "Ameya Sapphire 57",
    location: "Sector 57, Gurugram",
    search: ["Sector 57", "Ameya Sapphire 57", "Gurgaon", "Gurugram"],
    category: "new-launch",
    image: "/assets/new-launch/ameya-sapphire-57-new-thumbnail.jpg"
  },


];

export const getPropertiesByCategory = (category: Property["category"]) => {
  return properties.filter((property) => property.category === category);
};

export const getAllProperties = () => properties;
