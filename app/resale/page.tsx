import { HeroSection } from "@/components/heroSection";
import Resale from "@/components/resale";

export default function ResalePage() {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/resale_bg.jpg"
        heading="RESALE PROPERTIES"
        subheading=""
      />

      <Resale />
    </div>
  );
}
