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

      <section className="bg-gray-100 py-20">
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

        <h1 className="mx-42 p-6 mb-5 text-2xl text-red-500 ">{filtered.length} results found</h1>
        <div className="max-w-8xl mx-42 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md hover:shadow-orange-300/40 transition-shadow border border-orange-200 overflow-hidden"
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
