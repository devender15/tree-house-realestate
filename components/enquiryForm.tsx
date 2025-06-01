"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <div
      className="
        w-full
        max-w-md
        sm:max-w-lg
        bg-white
        rounded-lg
        shadow-lg
        p-6
        sm:p-8
        mx-3
        sm:mx-0
      "
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
        What's on your Mind
      </h1>
      <p className="text-gray-700 mb-6 text-sm sm:text-base">
        We’re here to help! Tell us what you’re looking for and we’ll get you
        connected to the right people.
      </p>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm sm:text-base">
          <p className="font-semibold">Thanks! Your message has been sent.</p>
          <p className="mt-1 text-green-600">
            Redirecting you to the homepage...
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5"
          noValidate
        >
          {error && (
            <p className="text-red-600 bg-red-100 p-3 rounded text-sm sm:text-base">
              {error}
            </p>
          )}

          <input
            type="text"
            name="name"
            required
            aria-label="Name"
            placeholder="Name*"
            className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="text"
            name="company"
            required
            aria-label="Company"
            placeholder="Company*"
            className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.company}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            required
            aria-label="Email"
            placeholder="Email*"
            className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="tel"
            name="phone"
            required
            aria-label="Phone"
            placeholder="Phone*"
            className="w-full border border-gray-300 p-2 sm:p-3 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
          />
          <textarea
            name="message"
            aria-label="Message"
            placeholder="Type your message here"
            className="w-full border border-gray-300 p-2 sm:p-3 rounded h-20 sm:h-28 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 sm:py-3 rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
