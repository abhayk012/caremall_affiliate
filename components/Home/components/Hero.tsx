import { Button } from "@/components/ui/button"
import EarningsDashboard from "./Herodashboard"

const Hero = () => {
  return (
    <div className="h-screen flex gap-5 justify-between items-center px-8 md:px-24 bg-gradient-to-t from-[#FFDADA] to-[#FFFFFF]">
      {/* Left Content */}
      <div className="flex-1 pt-12">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Earn Up To 30% Commission Promoting Top Products
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Join CareMall's affiliate program and start earning passive income by promoting thousands of quality
              products to your audience.
            </p>
          </div>
          <Button className="w-fit px-8 py-6 bg-red-500 hover:bg-red-600 text-white text-base font-medium rounded-lg">
            Start Earning Today
          </Button>
        </div>
      </div>

      {/* Right Dashboard */}
      <div className="flex-1 flex justify-end pr-8">
        <EarningsDashboard />
      </div>
    </div>
  )
}

export default Hero
