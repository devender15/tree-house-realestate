import About from "@/components/about";
import { HeroSection } from "@/components/heroSection";

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        imageUrl="/assets/about.jpg"
        heading="ABOUT US"
        subheading="Learn more about our company"
      />

      <About />
    </div>
  );
}
