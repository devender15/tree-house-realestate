"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Loader2,
  AlertCircle,
  Send,
  User,
  Building,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function EnquiryForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const validateForm = () => {
    const { name, company, email, phone } = formData;
    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      setError("Please enter a valid phone number.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await res.json();
        setError(data?.error || "Failed to send message. Please try again.");
      }
    } catch {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  if (submitted) {
    return (
      <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
            Thank You!
          </h3>
          <p className="text-slate-600 mb-2 text-lg">
            Your enquiry has been received successfully.
          </p>
          <p className="text-slate-500 text-sm">
            Our team will contact you within 24 hours.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-green-600">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Redirecting to homepage...
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-white/80 backdrop-blur-xl">
      <CardContent className="p-6 md:p-8">
        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-red-700 text-sm">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="name"
                className="text-slate-700 font-medium flex items-center gap-2"
              >
                <User className="w-4 h-4" />
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
                className="h-11 border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 rounded-xl bg-white/50"
                required
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="company"
                className="text-slate-700 font-medium flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                Company *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
                className="h-11 border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 rounded-xl bg-white/50"
                required
              />
            </div>
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="email"
                className="text-slate-700 font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
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
                className="h-11 border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 rounded-xl bg-white/50"
                required
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="phone"
                className="text-slate-700 font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className="h-11 border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 rounded-xl bg-white/50"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <Label
              htmlFor="message"
              className="text-slate-700 font-medium flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Your Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How we can help"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className="min-h-[100px] border-slate-200 focus:border-slate-400 focus:ring-slate-400/20 rounded-xl bg-white/50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing Your Request...
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Send className="w-5 h-5" />
                Send Enquiry
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
