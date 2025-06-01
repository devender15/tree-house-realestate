import { HeroSection } from "@/components/heroSection";
import Rent from "@/components/onrent";

export default function Page() {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/rent/bg.webp"
        heading="ON RENT"
        subheading=""
      />

      <Rent />
    </div>
  );
}
