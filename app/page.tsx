"use client";
import { Search, Phone, Mail, ChevronRight, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { PropertyCarousel } from "@/components/property-carousel";
import { HeroSection } from "@/components/heroSection";
import Locations from "@/components/locations";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSection videoUrl="/assets/hero_vdo.mp4" imageUrl="" heading="" />
      </section>

      {/* Property Carousel */}
      <section className="py-16 md:py-20 bg-slate-100">
        <PropertyCarousel />
      </section>

      {/* Locations */}
      <section className="bg-slate-50">
        <Locations />
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              Why Choose Tree House
            </h2>
            <div className="h-1 w-20 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We provide comprehensive real estate solutions with expert
              guidance, transparent processes, and personalized service tailored
              to your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Feature 1 */}
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.15)",
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-slate-100">
                <Search className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900 text-center">
                Expert Property Search
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center mb-4">
                Advanced search tools and personalized recommendations to find
                your perfect property match quickly and efficiently.
              </p>
              <button className="w-full flex items-center justify-center text-slate-700 font-medium hover:text-slate-900 transition-colors text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.15)",
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-slate-100">
                <Shield className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900 text-center">
                Trusted Service
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center mb-4">
                Dedicated support and professional guidance throughout your real
                estate journey with complete transparency.
              </p>
              <button className="w-full flex items-center justify-center text-slate-700 font-medium hover:text-slate-900 transition-colors text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(15, 23, 42, 0.15)",
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-slate-100">
                <Award className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900 text-center">
                Proven Results
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center mb-4">
                Years of experience with successful transactions and satisfied
                clients across diverse property segments.
              </p>
              <button className="w-full flex items-center justify-center text-slate-700 font-medium hover:text-slate-900 transition-colors text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 p-8 bg-slate-50 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-slate-600">
                Properties Sold
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                1000+
              </div>
              <div className="text-sm md:text-base text-slate-600">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                15+
              </div>
              <div className="text-sm md:text-base text-slate-600">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                50+
              </div>
              <div className="text-sm md:text-base text-slate-600">
                Locations
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center px-6 py-10 md:p-12">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Find Your Dream Property?
                </h3>
                <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                  Connect with our expert advisors today and discover properties
                  that perfectly match your lifestyle and investment goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors text-sm md:text-base">
                    Schedule Consultation
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-slate-400 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white transition-colors text-sm md:text-base">
                    Browse Properties
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl w-full max-w-md p-6 md:p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 rounded-full p-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Call us anytime
                      </p>
                      <p className="text-white text-lg md:text-xl font-semibold">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Email us
                      </p>
                      <p className="text-white text-lg md:text-xl font-semibold">
                        info@treehouse.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
