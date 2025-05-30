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

      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {residentialData.map((data, idx) => (
          <div key={idx}>
            <h1 className="text-3xl font-bold mb-3 ">{data.heading}</h1>
            <p className="text-gray-600 text-xl">{data.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
