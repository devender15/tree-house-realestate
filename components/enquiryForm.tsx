"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, AlertCircle, Send, User, Mail, Phone, MessageSquare, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function EnquiryForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError(null)
  }

  const validateForm = () => {
    const { name, email, phone } = formData
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all required fields.")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      return false
    }

    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      setError("Please enter a valid phone number.")
      return false
    }

    setError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setLoading(false)

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        const data = await res.json()
        setError(data?.error || "Failed to send message. Please try again.")
      }
    } catch {
      setLoading(false)
      setError("Something went wrong. Please try again later.")
    }
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/")
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [submitted, router])

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 backdrop-blur-xl">
          <CardContent className="p-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600 mb-2 text-lg">Your enquiry has been received successfully.</p>
              <p className="text-gray-500 text-sm mb-6">Our team will contact you within 24 hours.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-3 text-emerald-600 bg-emerald-100 rounded-full px-4 py-2 inline-flex"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-sm font-medium">Redirecting to homepage...</span>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="bg-white">
        <CardContent className="p-8">
          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-red-700 text-sm font-medium">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <Label htmlFor="name" className="text-gray-700 font-semibold flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <User className="w-3 h-3 text-emerald-600" />
                  </div>
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl bg-gray-50/50 transition-all duration-200 hover:bg-white focus:bg-white"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <Label htmlFor="phone" className="text-gray-700 font-semibold flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-teal-600" />
                  </div>
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 9811098193"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl bg-gray-50/50 transition-all duration-200 hover:bg-white focus:bg-white"
                  required
                />
              </motion.div>
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <Label htmlFor="email" className="text-gray-700 font-semibold flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-3 h-3 text-blue-600" />
                </div>
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl bg-gray-50/50 transition-all duration-200 hover:bg-white focus:bg-white"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <Label htmlFor="message" className="text-gray-700 font-semibold flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-purple-600" />
                </div>
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements, project details, or any questions you have..."
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                className="min-h-[120px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl bg-gray-50/50 resize-none transition-all duration-200 hover:bg-white focus:bg-white"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing Your Request...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Send Enquiry
                    <Send className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
