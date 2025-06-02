import { HeroSection } from "@/components/heroSection";
import PropertyCard from "@/components/propertyCard";
import { properties } from "@/data/properties";

function filterProperties(type: string | null, query: string | null) {
  return properties.filter((property) => {
    const matchesType = type ? property.category === type : true;
    const matchesQuery = query
      ? property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase())
      : true;
    return matchesType && matchesQuery;
  });
}

export default function SearchResultsPage({
  searchParams,
}: {
  searchParams: { type?: string; query?: string };
}) {
  const { type, query } = searchParams;
  const filtered = filterProperties(type || null, query || null);

  return (
    <div>
      <HeroSection
        imageUrl="/assets/search_bg.png"
        heading="SEARCH"
        subheading=""
      />

      <section className="bg-gray-50 py-4 md:py-20">
        {!filtered.length && (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-800">
              No results found.
            </h2>
            <p className="text-gray-600 mt-4">
              Try adjusting your search criteria.
            </p>
          </div>
        )}

        <h1 className="font-bold sm:mx-5 md:mx-12 py-4 px-2 lg:mx-20 xl:mx-42 lg:px-6 md:text-2xl text-orange-600 ">
          {filtered.length} results found
        </h1>
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-5 md:mx-12
          px-2 lg:mx-20 xl:mx-42 lg:px-6 lg:gap-6  xl:gap-8 "
        >
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md hover:shadow-orange-300/40 transition-shadow  border-orange-200 overflow-hidden"
            >
              <PropertyCard
                id={property.id}
                title={property.title}
                location={property.location}
                image={property.image}
                category={property.category}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
