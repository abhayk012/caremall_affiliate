"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"

export default function ReadyToEarn() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    promotionMethod: "select",
  })

  const features = [
    "No Signup fees or hidden costs",
    "Instant access to 10,000+ products",
    "Real-time tracking dashboard",
    "Multiple payment options",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="bg-red-600 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Start Earning</h2>
            <p className="text-sm md:text-base mb-6 text-red-100">
              Join CareMall's affiliate program and start earning passive income. It's easy, fast and simple to get
              started.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-white">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-red-100 mb-2">Average time to first sale</p>
              <p className="text-3xl md:text-4xl font-bold text-white">7 Days</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-lg p-6 md:p-8 h-fit">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Create Your Account</h3>
            <p className="text-sm text-gray-600 mb-6">Start earning in less than 5 minutes</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number*</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How will you Promote*</label>
                <select
                  name="promotionMethod"
                  value={formData.promotionMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  required
                >
                  <option value="select">Select</option>
                  <option value="social-media">Social Media</option>
                  <option value="blog">Blog</option>
                  <option value="website">Website</option>
                  <option value="email">Email</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
              >
                Create Account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
