import { HeroSection } from "@/components/heroSection";
import Plots from "@/components/plots";

export default function PlotPage() {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/plot/bg.jpg"
        heading="PLOTS FOR SALE"
        subheading=""
      />

      <Plots />
    </div>
  );
}
