import { HeroSection } from "@/components/heroSection";
import { Construction } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 flex flex-col">
      {/* Hero Section */}
      <HeroSection
        imageUrl="/images/farmhouse-placeholder.jpg" // Replace with your actual image path if available
        heading="Farmhouse and Farmlands"
      />

      {/* Coming Soon Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 text-slate-800 rounded-full mx-auto mb-6">
            <Construction className="w-10 h-10" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Coming Soon
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            We’re working hard to bring you the best farmhouse and farmland
            listings. Stay tuned for updates, or reach out to us for early
            inquiries!
          </p>

          <div className="mt-8">
                      <Link
            href={"/enquiry"}
                          className="px-6 py-3 rounded-md bg-slate-700 text-white font-medium hover:bg-slate-800 transition duration-300 shadow">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
