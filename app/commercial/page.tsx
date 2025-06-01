import Commercial from "@/components/commercial";
import { HeroSection } from "@/components/heroSection";

export default function CommercialPage() {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/commercial/bg.png"
        heading="Commercial"
        subheading=""
      />

      <Commercial />
    </div>
  );
}
