import { HeroSection } from "@/components/heroSection";
import ResidentialProperty from "@/components/residential-property";

export default function ResidentialPage() {
  return (
    <div>
      <HeroSection
        imageUrl={"/assets/residential/bg.jpg"}
        heading="Residential"
        subheading=""
      />

      <ResidentialProperty />
    </div>
  );
}
