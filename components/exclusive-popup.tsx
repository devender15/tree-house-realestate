"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function ExclusivePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={() => setVisible(false)}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Our Exclusive
        </h2>
        <p className="text-gray-700 mb-6">
          Discover hand-picked properties available only to our VIP visitors.
          Dont miss out!
        </p>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">
          Explore Now
        </button>
      </motion.div>
    </motion.div>
  );
}
