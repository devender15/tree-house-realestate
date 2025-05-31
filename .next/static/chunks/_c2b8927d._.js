(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c2b8927d._.js", {

"[project]/components/heroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroSection": (()=>HeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HeroSection({ videoUrl, imageUrl, heading = "START THEIR JOURNEY", subheading = "WHERE YOUR DREAMS" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-navy h-screen flex items-center justify-center text-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                className: "absolute inset-0 w-full h-full object-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/videos/luxury-property.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/components/heroSection.tsx",
                    lineNumber: 30,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/heroSection.tsx",
                lineNumber: 29,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-navy/75 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/components/heroSection.tsx",
                lineNumber: 32,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-2xl mx-auto space-y-6 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-6xl font-heading",
                        children: [
                            "Find Your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "Dream Home"
                            }, void 0, false, {
                                fileName: "[project]/components/heroSection.tsx",
                                lineNumber: 35,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/heroSection.tsx",
                        lineNumber: 34,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "Explore luxury properties with ease and style."
                    }, void 0, false, {
                        fileName: "[project]/components/heroSection.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "flex flex-col sm:flex-row gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by city, neighborhood, or keyword",
                                className: "flex-grow px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gold"
                            }, void 0, false, {
                                fileName: "[project]/components/heroSection.tsx",
                                lineNumber: 39,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/components/heroSection.tsx",
                                lineNumber: 44,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/heroSection.tsx",
                        lineNumber: 38,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/heroSection.tsx",
                lineNumber: 33,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/heroSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/properties.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllProperties": (()=>getAllProperties),
    "getPropertiesByCategory": (()=>getPropertiesByCategory),
    "properties": (()=>properties)
});
const properties = [
    {
        id: "1",
        title: "M3M Urbana",
        location: "Sector 67, Gurugram, Gurgaon",
        search: [
            "Golf Course Ext Road",
            "Sector 67"
        ],
        category: "residential",
        image: "/assets/experion-the-trillion-1-thumbnail.jpg",
        price: "₹12 Cr",
        bhk: "NA",
        features: [
            "Retail & Office Mix",
            "Central Air Conditioning",
            "Easy Access to NH8"
        ],
        description: "Modern mixed-use development with retail and office spaces"
    },
    {
        id: "2",
        title: "DLF Cyber City",
        location: "Cyber City, Gurugram, Gurgaon",
        search: [
            "New Gurgaon",
            "Cyber City"
        ],
        category: "commercial",
        image: "/assets/dlf-cyber-city.jpg",
        price: "₹50 Cr",
        bhk: "NA",
        features: [
            "Grade A Office Spaces",
            "High-Speed Elevators",
            "Ample Parking"
        ],
        description: "Premium office spaces in the heart of Gurugram's business district"
    },
    {
        id: "3",
        title: "The Address",
        location: "Sector 104, Noida, Delhi NCR",
        search: [
            "New Gurgaon",
            "Sector 104"
        ],
        category: "residential",
        image: "/assets/the-address-noida.jpg",
        price: "₹85 Lakh",
        bhk: "3 BHK",
        features: [
            "Swimming Pool",
            "24/7 Security",
            "Clubhouse Access"
        ],
        description: "Luxury apartments with modern amenities and green spaces"
    },
    {
        id: "4",
        title: "Tata Primanti",
        location: "Sector 72, Gurugram, Gurgaon",
        search: [
            "Sothern Pheripery Road",
            "Sector 72"
        ],
        category: "new-launch",
        image: "/assets/tata-primanti.jpg",
        price: "₹1.2 Cr",
        bhk: "2 BHK",
        features: [
            "Eco-Friendly Construction",
            "Smart Home Features",
            "Close to Metro Station"
        ],
        description: "Newly launched sustainable housing project with smart features"
    },
    {
        id: "5",
        title: "Ireo Victory Valley",
        location: "Sector 67, Gurugram, Gurgaon",
        search: [
            "Golf Course Ext Road",
            "Sector 67"
        ],
        category: "residential",
        image: "/assets/ireo-victory-valley.jpg",
        price: "₹3.5 Cr",
        bhk: "4 BHK",
        features: [
            "Golf Course View",
            "Gym & Spa",
            "Children's Play Area"
        ],
        description: "Luxury villas with beautiful golf course views"
    },
    {
        id: "6",
        title: "Paras Downtown",
        location: "Sector 59, Gurugram, Gurgaon",
        search: [
            "Golf Course Ext Road",
            "Sector 59"
        ],
        category: "commercial",
        image: "/assets/paras-downtown.jpg",
        price: "₹15 Cr",
        bhk: "NA",
        features: [
            "Retail Spaces",
            "Food Court",
            "Multi-level Parking"
        ],
        description: "Commercial retail complex with modern facilities"
    },
    {
        id: "7",
        title: "Godrej Air",
        location: "Sector 150, Noida, Delhi NCR",
        search: [
            "New Gurgaon",
            "Sector 150"
        ],
        category: "new-launch",
        image: "/assets/godrej-air.jpg",
        price: "₹75 Lakh",
        bhk: "3 BHK",
        features: [
            "Eco-friendly Design",
            "Jogging Track",
            "Community Hall"
        ],
        description: "Environment-friendly residential township with modern amenities"
    },
    {
        id: "8",
        title: "DLF One Horizon Center",
        location: "Golf Course Road, Gurugram, Gurgaon",
        search: [
            "Golf Course Road"
        ],
        category: "commercial",
        image: "/assets/dlf-one-horizon.jpg",
        price: "₹100 Cr",
        bhk: "NA",
        features: [
            "LEED Platinum Rated",
            "High-Speed Internet",
            "Cafeteria & Lounge"
        ],
        description: "Premium office tower with world-class facilities"
    },
    {
        id: "9",
        title: "Emaar Palm Heights",
        location: "Sector 77, Gurugram, Gurgaon",
        search: [
            "Dwarka Expressway",
            "Sector 77"
        ],
        category: "residential",
        image: "/assets/emaar-palm-heights.jpg",
        price: "₹1.1 Cr",
        bhk: "3 BHK",
        features: [
            "Lake View",
            "Swimming Pool",
            "24/7 Security"
        ],
        description: "Spacious apartments with serene lake views"
    },
    {
        id: "10",
        title: "Unitech Cyber Park",
        location: "Sector 39, Gurugram, Gurgaon",
        search: [
            "Golf Course Road",
            "Sector 39"
        ],
        category: "commercial",
        image: "/assets/unitech-cyber-park.jpg",
        price: "₹35 Cr",
        bhk: "NA",
        features: [
            "Business Lounge",
            "Conference Rooms",
            "Centralized AC"
        ],
        description: "Modern commercial offices in the heart of Gurugram"
    }
];
const getPropertiesByCategory = (category)=>{
    return properties.filter((property)=>property.category === category);
};
const getAllProperties = ()=>properties;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/propertyCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$more$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleMore$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle-more.js [app-client] (ecmascript) <export default as MessageCircleMore>");
"use client";
;
;
;
const PropertyCard = ({ title, location, image, category, price })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " relative ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image || "/assets/default.jpg",
                        width: 600,
                        height: 450,
                        alt: "property image"
                    }, void 0, false, {
                        fileName: "[project]/components/propertyCard.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-3 right-2 bg-gray-600  px-3 text-white rounded-full text-sm ",
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/components/propertyCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/propertyCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " p-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold pl-0.5",
                                children: title.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: " text-xl mr-5 text-blue-500 font-semibold ",
                                children: [
                                    "PRICE: ",
                                    price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/propertyCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 text-gray-500 font-light ",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                width: 18
                            }, void 0, false, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            " ",
                            location
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/propertyCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mt-4  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: " px-3 py-1.5 rounded-full border-gray-400 bg-red-400 text-white font-semibold hover:cursor-pointer hover:bg-red-500 ",
                                children: "enquire now"
                            }, void 0, false, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "border border-red-400 text-red-500 font-semibold px-3 py-1.5 rounded-full transition ease-in   hover:bg-red-500 hover:text-white hover:cursor-pointer ",
                                children: "view details"
                            }, void 0, false, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: " rounded-full ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$more$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleMore$3e$__["MessageCircleMore"], {
                                        width: 35,
                                        height: 35,
                                        color: "green",
                                        className: "font-light "
                                    }, void 0, false, {
                                        fileName: "[project]/components/propertyCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/propertyCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/propertyCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/propertyCard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/propertyCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_c = PropertyCard;
const __TURBOPACK__default__export__ = PropertyCard;
var _c;
__turbopack_context__.k.register(_c, "PropertyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/residential-property.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$properties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/properties.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$propertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/propertyCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ResidentialProperty = ()=>{
    _s();
    const [residentData, setResidentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResidentialProperty.useEffect": ()=>{
            const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$properties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["properties"].filter({
                "ResidentialProperty.useEffect.filtered": (property)=>property.category === "residential"
            }["ResidentialProperty.useEffect.filtered"]);
            setResidentData(filtered);
        }
    }["ResidentialProperty.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-100 py-20  ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-8xl mx-42  px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
            children: residentData.map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md hover:shadow-orange-300/40 transition-shadow border border-orange-200 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$propertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: property.title,
                        location: property.location,
                        image: property.image,
                        category: property.category,
                        price: property.price,
                        bhk: property.bhk
                    }, void 0, false, {
                        fileName: "[project]/components/residential-property.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, property.id, false, {
                    fileName: "[project]/components/residential-property.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/residential-property.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/residential-property.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(ResidentialProperty, "tjkDpt3Hz4yaSwslcpGrMnzr6SI=");
_c = ResidentialProperty;
const __TURBOPACK__default__export__ = ResidentialProperty;
var _c;
__turbopack_context__.k.register(_c, "ResidentialProperty");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c2b8927d._.js.map