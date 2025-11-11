"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Category {
  id: number
  name: string
  products: string
  commission: string
  image: string
}

const PromoteCategories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      products: "5,000+",
      commission: "20-30%",
      image: "/laptop.png",
    },
    {
      id: 2,
      name: "Cosmetics",
      products: "8,000+",
      commission: "20-30%",
      image: "/cosmetics.png",
    },
    {
      id: 3,
      name: "Home Appliances",
      products: "5,000+",
      commission: "20-30%",
      image: "/appliances.png",
    },
    {
      id: 4,
      name: "Women's Apparel",
      products: "5,000+",
      commission: "20-30%",
      image: "/apparels.png",
    },
    {
      id: 5,
      name: "Shoes",
      products: "8,000+",
      commission: "20-30%",
      image: "/shoes.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Promote Top Selling Categories</h2>
          <p className="text-gray-600">
            Access over 10,000 products across multiple categories. Choose what suits your audience best.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="mb-6 h-40 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-red-600 font-semibold">Products</span>
                  <span className="text-gray-600">{category.products}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-red-600 font-semibold">Commission</span>
                  <span className="text-gray-600">{category.commission}</span>
                </div>
              </div>

              {/* Get Link Button */}
              <button className="text-red-600 font-semibold text-sm hover:text-red-700 flex items-center justify-center w-full gap-1">
                Get Link <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Categories Button */}
        <div className="text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold">
            Featured All Categories
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PromoteCategories
