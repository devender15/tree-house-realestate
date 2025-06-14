"use client";

import { useState, useEffect } from "react";
import { X, Home, MapPin, Star, ArrowRight, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function ExclusivePopup() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[1000] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-slate-50 rounded-3xl shadow-2xl w-full max-w-4xl relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-full p-1 md:p-2 hover:bg-white"
          onClick={() => setVisible(false)}
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-8 md:px-8 md:py-12 text-center">
          <div className="absolute top-3 left-4 md:top-4 md:left-8 flex items-center gap-2 text-slate-600">
            <Crown className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
            <span className="text-xs md:text-sm font-medium">VIP ACCESS</span>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 md:mb-4 leading-tight">
              Exclusive Properties
              <span className="block text-xl md:text-3xl lg:text-4xl text-slate-600 font-medium mt-1 md:mt-2">
                Just for You
              </span>
            </h1>
            <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
              Discover premium properties handpicked by our experts.
              {!isMobile &&
                " These exclusive listings are available only to our VIP members."}
            </p>
          </motion.div>
        </div>

        {/* Content Grid - Hidden on mobile */}
        {!isMobile && (
          <div className="p-4 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Feature Cards */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Home className="w-4 h-4 md:w-6 md:h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-1 md:mb-2">
                  Premium Listings
                </h3>
                <p className="text-slate-600 text-xs md:text-sm">
                  Access to off-market properties and exclusive developments
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-1 md:mb-2">
                  Prime Locations
                </h3>
                <p className="text-slate-600 text-xs md:text-sm">
                  Properties in the most sought-after neighborhoods
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <Star className="w-4 h-4 md:w-6 md:h-6 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-1 md:mb-2">
                  Expert Curation
                </h3>
                <p className="text-slate-600 text-xs md:text-sm">
                  Personally selected by our real estate specialists
                </p>
              </motion.div>
            </div>

            {/* Stats Section - Simplified on mobile */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-4 md:p-6 lg:p-8 text-white mb-6 md:mb-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    50+
                  </div>
                  <div className="text-slate-300 text-xs md:text-sm">
                    Exclusive Properties
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    $2.5M
                  </div>
                  <div className="text-slate-300 text-xs md:text-sm">
                    Average Value
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    24h
                  </div>
                  <div className="text-slate-300 text-xs md:text-sm">
                    Early Access
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                    100%
                  </div>
                  <div className="text-slate-300 text-xs md:text-sm">
                    Verified Listings
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: isMobile ? 0.3 : 0.7 }}
          className="text-center p-4 md:p-8 pt-0 md:pt-0"
        >
          <div className="flex flex-col gap-3 justify-center items-center">
            <button className="group bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm md:text-base">
              {isMobile ? "View Properties" : "Explore Exclusive Properties"}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-slate-600 hover:text-slate-800 px-4 py-3 md:px-6 md:py-4 font-medium transition-colors text-sm md:text-base">
              {isMobile ? "Later" : "Maybe Later"}
            </button>
          </div>
          <p className="text-slate-500 text-xs md:text-sm mt-2 md:mt-4">
            Limited time offer • VIP members only
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
