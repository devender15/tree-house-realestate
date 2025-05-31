import { HeroSection } from "@/components/heroSection";
import ResidentialProperty from "@/components/residential-property";
import { residentialData } from "@/data/residentialProperties";

export default function ResidentialPage() {
  return (
    <div>
      <HeroSection
        imageUrl={"/assets/residential/thumb.png"}
        heading="Residential"
        subheading=""
      />

      <ResidentialProperty />

      {/* Dark content section */}
      <section className="bg-gray-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          {residentialData.map((data, idx) => (
            <div key={idx} className="mb-14">
              <h1 className="text-4xl font-bold mb-4 font-poppins leading-snug">
                {data.heading}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed font-light font-poppins">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
