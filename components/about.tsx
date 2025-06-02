import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            Tree House
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust and excellence in real estate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Our Story
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We understand how challenging finding the right realtor can be.
                When you engage with us, you're making the right choice with
                India's top-tier real estate professionals.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Under the leadership of Mr. Sanjay Sharma since 2009, we've
                built our reputation on trust, respect, and excellence. We
                believe that
                <span className="font-semibold text-orange-600">
                  {" "}
                  "Trust takes decades to build, seconds to break, and forever
                  to repair"
                </span>
                , which is why we value our clients' trust above all.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Our Core Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Original booking",
                  "Selling properties",
                  "Buying properties",
                  "Property rentals",
                  "Home loan consultancy",
                  "Property valuation",
                  "Real estate investments",
                  "Gurgaon/Delhi NCR leasing",
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We also collaborate with builders to offer properties at various
                stages - pre-launch, launch, and post-launch rates.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Our Mission
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                We're dedicated to building trust, demonstrating leadership, and
                nurturing client relationships. Customer satisfaction is our
                ladder to success, achieved through organic trust-building and
                quality service.
              </p>
              <h3 className="text-xl font-semibold text-orange-500 mb-3 mt-8">
                Why Choose Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We transform property transactions into dream-come-true moments
                with our expertise, creating safe spaces for real estate
                decisions. Our strategic investment approaches and transparent
                platforms ensure the best returns and communication.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Our Team
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Our passionate team considers Tree House India as their own. We
                prioritize both client and employee satisfaction, maintaining
                the highest standards through our family-like work environment.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 italic">
                  "We work as a unified family, where coordination and mutual
                  respect drive our success and service excellence."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Residential Properties
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We create feel-good residential solutions balancing financial
                optimization with lifestyle and community living.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  "Apartments",
                  "Independent Floors",
                  "Villas",
                  "Plots",
                  "Service Apartments",
                  "Townhouses",
                ].map((property, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{property}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4 pb-2 border-b border-orange-100">
                Commercial Properties
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We boost your business reputation and profitability through
                expert support in commercial real estate.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                Our Expertise:
              </h3>
              <ul className="grid grid-cols-1 gap-2 mb-6">
                {[
                  "Leasing assistance",
                  "Buying/selling guidance",
                  "Investment consultancy",
                  "Commercial space rentals",
                ].map((service, index) => (
                  <li key={index} className="flex">
                    <span className="text-orange-500 mr-2">-</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Property Types:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Office spaces",
                  "Retail properties",
                  "Industrial buildings",
                  "Multifamily units",
                  "Hotels/Hospitals",
                  "Mixed-use developments",
                  "Land",
                  "Special purpose properties",
                ].map((type, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
