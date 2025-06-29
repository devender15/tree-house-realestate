"use client"

import EnquiryForm from "@/components/enquiryForm"
import { motion } from "framer-motion"
import { Phone, Mail, Building2, Leaf } from "lucide-react"

export default function EnquiryPage() {
  return (
    <div className="py-10 md:py-20 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-emerald-200/20 blur-2xl" />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-teal-200/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-green-200/15 blur-xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.05)_1px,transparent_0)] bg-[size:32px_32px]" />

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Panel - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <Leaf className="text-white w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Tree House Realty</h1>
                  <p className="text-sm text-emerald-600 font-medium">Construction Pvt Ltd</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Let's Build Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    {" "}
                    Dream
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-md">
                  Connect with us for premium farmland, construction, and real estate solutions.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Phone className="text-emerald-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                      <p className="text-gray-600 font-medium">+91-9811098193</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <Mail className="text-teal-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                      <p className="text-gray-600 font-medium">Treehousefarmland@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors flex-shrink-0">
                      <Building2 className="text-green-600 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        905 DLF Corporate Tower-1
                        <br />
                        Sector 74, Gurgaon
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="lg:pl-8">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
