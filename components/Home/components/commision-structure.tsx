"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface Plan {
  name: string
  commission: string
  monthlyLimit: string
  badge?: string
  features: string[]
  featured?: boolean
}

const CommissionStructure = () => {
  const plans: Plan[] = [
    {
      name: "Starter",
      commission: "10%",
      monthlyLimit: "Monthly Sales: ₹1,000",
      features: ["10% commission on all sales", "Basic marketing materials", "Monthly payments", "Email support"],
    },
    {
      name: "Professional",
      commission: "25%",
      monthlyLimit: "Monthly Sales: ₹25,000+",
      badge: "FEATURED",
      featured: true,
      features: [
        "25% commission on all sales",
        "Premium marketing materials",
        "Weekly webinars & support",
        "Weekly payments",
        "Dedicated account manager",
        "Priority email support",
      ],
    },
    {
      name: "Elite",
      commission: "30%",
      monthlyLimit: "Monthly Sales: ₹75,000+",
      features: [
        "30% commission on all sales",
        "Premium marketing materials",
        "24/7 priority support",
        "Weekly payments",
        "Dedicated account manager",
        "Custom promotional items",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 md:px-24 bg-white" id="commissions">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Commission Structure</h2>
          <p className="text-gray-600">Earn more as you grow. Our tiered commission structure rewards your success</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border-2 p-8 transition-all ${
                plan.featured
                  ? "border-red-600 bg-white shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

              {/* Commission */}
              <div className="mb-4">
                <p className="text-4xl font-bold text-gray-900">{plan.commission}</p>
                <p className="text-gray-600 text-sm">{plan.monthlyLimit}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 font-semibold rounded ${
                  plan.featured
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommissionStructure
