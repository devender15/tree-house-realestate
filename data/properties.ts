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
}

export const properties: Property[] = [

  {
    id: "1",
    title: "Belaperla Central Park Resort",
    location: "Sector 48, Gurugram, Gurgaon",
    search: ["Sector 48", "gurugram", "gurgaon", "Belaperla Central Park Resort"],
    category: "residential",
    image: "/assets/residential/belaperla-central-park-resort-thumbnail.jpg"
  },
  {
    id: "2",
    title: "Experion The Trillion",
    location: "Sector 48, Gurugram, Gurgaon",
    search: ["Sector 48", "gurugram", "gurgaon", "Experion The Trillion"],
    category: "residential",
    image: "/assets/residential/experion-the-trillion-thumbnail.jpg"
  },
  {
    id: "3",
    title: "MNB Ananta Vilasa",
    location: "Sector 56, Gurugram, Gurgaon",
    search: ["Sector 56", "gurugram", "gurgaon", "MNB Ananta Vilasa"],
    category: "residential",
    image: "/assets/residential/mnb-ananta-vilasa-thumbnail.jpg"
  },
  {
    id: "4",
    title: "Hero Homes The Palatial",
    location: "Sector 104, Gurugram, Gurgaon",
    search: ["Sector 104", "gurugram", "gurgaon", "Hero Homes The Palatial"],
    category: "residential",
    image: "/assets/residential/hero-homes-the-palatial-thumbnail.jpg"
  },
  {
    id: "5",
    title: "Conscient Elaira Residences",
    location: "Sector 80, Gurugram, Gurgaon",
    search: ["Sector 80", "gurugram", "gurgaon", "Conscient Elaira Residences"],
    category: "residential",
    image: "/assets/residential/conscient-elaira-residences-thumbnail.jpg"
  },
  {
    id: "6",
    title: "Birla Arika",
    location: "Sector 31, Gurugram, Gurgaon",
    search: ["Sector 31", "gurugram", "gurgaon", "Birla Arika"],
    category: "residential",
    image: "/assets/residential/birla-arika-thumbnail.jpg"
  },
  {
    id: "7",
    title: "BPTP Amstoria Verti Greens",
    location: "Sector 102, Gurugram, Gurgaon",
    search: ["Sector 102", "gurugram", "gurgaon", "BPTP Amstoria Verti Greens"],
    category: "residential",
    image: "/assets/residential/bptp-amstoria-verti-greens-thumbnail.jpg"
  },
  {
    id: "8",
    title: "Elan The Emperor",
    location: "Sector 106, Gurugram, Gurgaon",
    search: ["Sector 106", "gurugram", "gurgaon", "Elan The Emperor"],
    category: "residential",
    image: "/assets/residential/elan-the-emperor-thumbnail.jpeg"
  },
  {
    id: "9",
    title: "Emaar Urban Ascent",
    location: "Sector 112, Gurugram, Gurgaon",
    search: ["Sector 112", "gurugram", "gurgaon", "Emaar Urban Ascent"],
    category: "residential",
    image: "/assets/residential/emaar-urban-ascent-thumbnail.jpg"
  },
  {
    id: "10",
    title: "Adani Samsara Ivana",
    location: "Sector 63, Gurugram, Gurgaon",
    search: ["Sector 63", "gurugram", "gurgaon", "Adani Samsara Ivana"],
    category: "residential",
    image: "/assets/residential/adani-samsara-ivana-thumbnail.jpg"
  },
  {
    id: "11",
    title: "Navraj The Antalyas",
    location: "Sector 37D, Gurugram, Gurgaon",
    search: ["Sector 37D", "gurugram", "gurgaon", "Navraj The Antalyas"],
    category: "residential",
    image: "/assets/residential/navraj-the-antalyas-thumbnail.jpg"
  },
  {
    id: "12",
    title: "Emaar Amaris",
    location: "Sector 62, Gurugram, Gurgaon",
    search: ["Sector 62", "gurugram", "gurgaon", "Emaar Amaris"],
    category: "residential",
    image: "/assets/residential/emaar-amaris-thumbnail.jpg"
  },
  {
    id: "13",
    title: "Godrej Miraya",
    location: "Sector 43, Gurugram, Gurgaon",
    search: ["Sector 43", "gurugram", "gurgaon", "Godrej Miraya"],
    category: "residential",
    image: "/assets/residential/godrej-miraya-thumbnail.jpg"
  },
  {
    id: "14",
    title: "M3M Soulitude",
    location: "Sector 89, Gurugram, Gurgaon",
    search: ["Sector 89", "gurugram", "gurgaon", "M3M Soulitude"],
    category: "residential",
    image: "/assets/residential/m3m-soulitude-thumbnail.jpg"
  },
  {
    id: "15",
    title: "3 BHK Conscient Hines Elevate On Sale",
    location: "Sector 59 Gurugram, Gurgaon",
    search: ["Sector 59", "gurugram", "gurgaon", "3 BHK Conscient Hines Elevate On Sale"],
    category: "residential",
    image: "/assets/residential/3-bhk-conscient-hines-elevate-on-sale-thumbnail.jpeg"
  },
  {
    id: "16",
    title: "M3M Opus at M3M Merlin",
    location: "Sector 67 Gurugram, Gurgaon",
    search: ["Sector 67", "gurugram", "gurgaon", "M3M Opus at M3M Merlin"],
    category: "residential",
    image: "/assets/residential/m3m-opus-at-m3m-merlin-thumbnail.jpg"
  },
  {
    id: "17",
    title: "Eldeco Fairway Reserve",
    location: "Sector 80 Gurugram, Gurgaon",
    search: ["Sector 80", "gurugram", "gurgaon", "Eldeco Fairway Reserve"],
    category: "residential",
    image: "/assets/residential/eldeco-fairway-thumbnail.jpg"
  },
  {
    id: "18",
    title: "Paras The Florett Enclave",
    location: "Sector 59 Gurugram, Gurgaon",
    search: ["Sector 59", "gurugram", "gurgaon", "Paras The Florett Enclave"],
    category: "residential",
    image: "/assets/residential/paras-the-florett-enclave-thumbnail.jpg"
  },
  {
    id: "19",
    title: "Ameya Sapphire 57",
    location: "Sector 57, Gurugram, Gurgaon",
    search: ["Sector 57", "gurugram", "gurgaon", "Ameya Sapphire 57"],
    category: "commercial",
    image: "/assets/commercial/ameya-sapphire-57-thumbnail.jpg"
  },
  {
    id: "20",
    title: "DLF Club Arcade",
    location: "Sector 91, Gurugram, Gurgaon",
    search: ["Sector 91", "gurugram", "gurgaon", "DLF Club Arcade"],
    category: "commercial",
    image: "/assets/commercial/dlf-club-arcade-thumbnail.jpg"
  },
  {
    id: "21",
    title: "AIPL Joy District",
    location: "Sector 88, Gurugram, Gurgaon",
    search: ["Sector 88", "gurugram", "gurgaon", "AIPL Joy District"],
    category: "commercial",
    image: "/assets/commercial/aipl-joy-district-thumbnail.jpg"
  },
  {
    id: "22",
    title: "M3M Route 65",
    location: "Sector 65, Gurugram, Gurgaon",
    search: ["Sector 65", "gurugram", "gurgaon", "M3M Route 65"],
    category: "commercial",
    image: "/assets/commercial/m3m-route-65-thumbnail.jpg"
  },
  {
    id: "23",
    title: "Suncity The Empire",
    location: "Sector 43, Gurugram, Gurgaon",
    search: ["Sector 43", "gurugram", "gurgaon", "Suncity The Empire"],
    category: "commercial",
    image: "/assets/commercial/suncity-the-empire-thumbnail.jpg"
  },
  {
    id: "24",
    title: "Magnum Global Park Gurgaon",
    location: "Sector 58, Gurugram, Gurgaon",
    search: ["Sector 58", "gurugram", "gurgaon", "Magnum Global Park Gurgaon"],
    category: "commercial",
    image: "/assets/commercial/magnum-global-park-gurgaon-thumbnail.jpg"
  },
  {
    id: "25",
    title: "Elan Imperial",
    location: "Sector 82, Gurugram, Gurgaon",
    search: ["Sector 82", "gurugram", "gurgaon", "Elan Imperial"],
    category: "commercial",
    image: "/assets/commercial/elan-imperial-thumbnail.jpg"
  },
  {
    id: "26",
    title: "Elan The Mark",
    location: "Sector 106, Dwarka Expressway, Gurugram, Gurgaon",
    search: ["Sector 106", "Dwarka Expressway", "gurugram", "gurgaon", "Elan The Mark"],
    category: "commercial",
    image: "/assets/commercial/elan-the-mark-thumbnail.jpeg"
  },
  {
    id: "27",
    title: "M3M Paragon 57",
    location: "Sector 57, Gurugram, Gurgaon",
    search: ["Sector 57", "gurugram", "gurgaon", "M3M Paragon 57"],
    category: "commercial",
    image: "/assets/commercial/m3m-paragon-57-thumbnail.jpg"
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










  // {
  //   id: "1",
  //   title: "M3M Urbana",
  //   location: "Sector 67, Gurugram, Gurgaon",
  //   search: ["Golf Course Ext Road", "Sector 67"],
  //   category: "residential",
  //   image: "/assets/experion-the-trillion-1-thumbnail.jpg",
  //   // price: "₹12 Cr",
  //   // bhk: "NA",
  //   // features: [
  //   //   "Retail & Office Mix",
  //   //   "Central Air Conditioning",
  //   //   "Easy Access to NH8",
  //   // ],
  //   // description: "Modern mixed-use development with retail and office spaces",
  // },
  // {
  //   id: "2",
  //   title: "DLF Cyber City",
  //   location: "Cyber City, Gurugram, Gurgaon",
  //   search: ["New Gurgaon", "Cyber City"],
  //   category: "commercial",
  //   image: "/assets/dlf-cyber-city.jpg",
  //   price: "₹50 Cr",
  //   bhk: "NA",
  //   features: [
  //     "Grade A Office Spaces",
  //     "High-Speed Elevators",
  //     "Ample Parking",
  //   ],
  //   description:
  //     "Premium office spaces in the heart of Gurugram's business district",
  // },
  // {
  //   id: "3",
  //   title: "The Address",
  //   location: "Sector 104, Noida, Delhi NCR",
  //   search: ["New Gurgaon", "Sector 104"],
  //   category: "residential",
  //   image: "/assets/the-address-noida.jpg",
  //   price: "₹85 Lakh",
  //   bhk: "3 BHK",
  //   features: ["Swimming Pool", "24/7 Security", "Clubhouse Access"],
  //   description: "Luxury apartments with modern amenities and green spaces",
  // },
  // {
  //   id: "4",
  //   title: "Tata Primanti",
  //   location: "Sector 72, Gurugram, Gurgaon",
  //   search: ["Sothern Pheripery Road", "Sector 72"],
  //   category: "new-launch",
  //   image: "/assets/tata-primanti.jpg",
  //   price: "₹1.2 Cr",
  //   bhk: "2 BHK",
  //   features: [
  //     "Eco-Friendly Construction",
  //     "Smart Home Features",
  //     "Close to Metro Station",
  //   ],
  //   description:
  //     "Newly launched sustainable housing project with smart features",
  // },
  // {
  //   id: "5",
  //   title: "Ireo Victory Valley",
  //   location: "Sector 67, Gurugram, Gurgaon",
  //   search: ["Golf Course Ext Road", "Sector 67"],
  //   category: "residential",
  //   image: "/assets/residential/thumb.png",
  //   price: "₹3.5 Cr",
  //   bhk: "4 BHK",
  //   features: ["Golf Course View", "Gym & Spa", "Children's Play Area"],
  //   description: "Luxury villas with beautiful golf course views",
  // },
  // {
  //   id: "6",
  //   title: "Paras Downtown",
  //   location: "Sector 59, Gurugram, Gurgaon",
  //   search: ["Golf Course Ext Road", "Sector 59"],
  //   category: "commercial",
  //   image: "/assets/residential/thumb.png",
  //   price: "₹15 Cr",
  //   bhk: "NA",
  //   features: ["Retail Spaces", "Food Court", "Multi-level Parking"],
  //   description: "Commercial retail complex with modern facilities",
  // },
  // {
  //   id: "7",
  //   title: "Godrej Air",
  //   location: "Sector 150, Noida, Delhi NCR",
  //   search: ["New Gurgaon", "Sector 150"],
  //   category: "new-launch",
  //   image: "/assets/godrej-air.jpg",
  //   price: "₹75 Lakh",
  //   bhk: "3 BHK",
  //   features: ["Eco-friendly Design", "Jogging Track", "Community Hall"],
  //   description:
  //     "Environment-friendly residential township with modern amenities",
  // },
  // {
  //   id: "8",
  //   title: "DLF One Horizon Center",
  //   location: "Golf Course Road, Gurugram, Gurgaon",
  //   search: ["Golf Course Road"],
  //   category: "commercial",
  //   image: "/assets/dlf-one-horizon.jpg",
  //   price: "₹100 Cr",
  //   bhk: "NA",
  //   features: [
  //     "LEED Platinum Rated",
  //     "High-Speed Internet",
  //     "Cafeteria & Lounge",
  //   ],
  //   description: "Premium office tower with world-class facilities",
  // },
  // {
  //   id: "9",
  //   title: "Emaar Palm Heights",
  //   location: "Sector 77, Gurugram, Gurgaon",
  //   search: ["Dwarka Expressway", "Sector 77"],
  //   category: "residential",
  //   image: "/assets/emaar-palm-heights.jpg",
  //   price: "₹1.1 Cr",
  //   bhk: "3 BHK",
  //   features: ["Lake View", "Swimming Pool", "24/7 Security"],
  //   description: "Spacious apartments with serene lake views",
  // },
  // {
  //   id: "10",
  //   title: "Unitech Cyber Park",
  //   location: "Sector 39, Gurugram, Gurgaon",
  //   search: ["Golf Course Road", "Sector 39"],
  //   category: "commercial",
  //   image: "/assets/unitech-cyber-park.jpg",
  //   price: "₹35 Cr",
  //   bhk: "NA",
  //   features: ["Business Lounge", "Conference Rooms", "Centralized AC"],
  //   description: "Modern commercial offices in the heart of Gurugram",
  // },
];

export const getPropertiesByCategory = (category: Property["category"]) => {
  return properties.filter((property) => property.category === category);
};

export const getAllProperties = () => properties;
