"use client";

import { useState, useEffect } from "react";
import { X, Home, MapPin, Star, ArrowRight, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function ExclusivePopup() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // Show faster (3 seconds)

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-md flex items-center justify-center z-[1000] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gradient-to-br from-white to-slate-50 rounded-xs shadow-2xl w-full max-w-2xl relative overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 z-10 cursor-pointer text-slate-400 hover:text-slate-700 transition-colors duration-200 bg-white rounded-full p-2 shadow-sm"
          onClick={() => setVisible(false)}
        >
          <X className="w-4 h-4" />
        </motion.button>

        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 px-6 py-8 text-center border-b border-amber-200">
          <div className="absolute top-3 left-6 flex items-center gap-2 text-amber-700">
            <Crown className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-medium tracking-wider">
              VIP ACCESS
            </span>
          </div>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-tight">
              <span className="block text-amber-600 text-lg md:text-xl mb-2 font-medium">
                Exclusive Opportunity
              </span>
              Premium Properties
              <span className="block text-xl md:text-2xl text-slate-600 font-medium mt-1">
                Just for You
              </span>
            </h1>
            <p className="text-sm text-slate-600 px-4">
              Handpicked luxury listings available only to VIP clients
            </p>
          </motion.div>
        </div>

        {/* Content Grid - Hidden on mobile */}
        {!isMobile && (
          <div className="p-5">
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              {/* Feature Cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-4 shadow border border-slate-100 hover:border-amber-200 transition-colors"
              >
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
                  <Home className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  Premium Listings
                </h3>
                <p className="text-slate-600 text-xs">
                  Off-market properties & exclusive developments
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-4 shadow border border-slate-100 hover:border-amber-200 transition-colors"
              >
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  Prime Locations
                </h3>
                <p className="text-slate-600 text-xs">
                  Most sought-after neighborhoods
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-4 shadow border border-slate-100 hover:border-amber-200 transition-colors"
              >
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
                  <Star className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">
                  Expert Curation
                </h3>
                <p className="text-slate-600 text-xs">
                  Personally selected by specialists
                </p>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-5 text-white mb-5"
            >
              <div className="grid grid-cols-4 gap-3 text-center">
                <div>
                  <div className="text-xl font-bold mb-1">50+</div>
                  <div className="text-slate-300 text-xs">Exclusive</div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-1">$2.5M</div>
                  <div className="text-slate-300 text-xs">Avg Value</div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-1">24h</div>
                  <div className="text-slate-300 text-xs">Early Access</div>
                </div>
                <div>
                  <div className="text-xl font-bold mb-1">100%</div>
                  <div className="text-slate-300 text-xs">Verified</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: isMobile ? 0.3 : 0.7 }}
          className="text-center p-5 bg-gradient-to-r from-amber-50 to-amber-100 border-t border-amber-200"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              {isMobile ? "View Now" : "Explore Properties"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="text-slate-600 hover:text-slate-800 px-4 py-2 font-medium transition-colors text-sm">
              {isMobile ? "Later" : "Maybe Later"}
            </button>
          </div>
          <p className="text-amber-700 text-xs mt-3 font-medium">
            Limited time offer • VIP members only
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
