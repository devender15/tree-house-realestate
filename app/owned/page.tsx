import { HeroSection } from "@/components/heroSection";
import Owned from "@/components/owned";

export default function Page() {
  return (
    <div>
      <HeroSection imageUrl="/assets/logo.png" heading="We Own" subheading="" />
      <Owned />
    </div>
  );
}
