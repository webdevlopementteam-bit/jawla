import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

const machineTechnicalSpecs = [
  { feature: "Usage", spec: "Industrial" },
  { feature: "Material", spec: "Mild Steel" },
  { feature: "Feature", spec: "Highly Efficient" },
  { feature: "Computerized", spec: "No" },
  { feature: "Automatic Grade", spec: "Semi-Automatic" },
  { feature: "Control System", spec: "Frequency Speed Control" },
  { feature: "Drive Type", spec: "Electric" },
  { feature: "Voltage", spec: "220 Volt (V)" },
  { feature: "Warranty", spec: "1 Year" },
];

export const metadata = {
  alternates: { canonical: "/collar-type-cup-filler-packaging-machine" },
  title: "Top Collar Type Cup Filler Packaging Machine Supplier in Delhi NCR",
  description:
    "Buy Collar Type Cup Filler Packaging Machine from Jawla Advance Technology. High accuracy volumetric cup filler for rice, pulses, namkeen & spices (100g–1kg).",
  keywords: [
    "Collar Type Cup Filler Packaging Machine",
    "Collar Type Cup Filler Packaging Machine supplier in delhi ncr",
    "Collar Type Cup Filler Packaging Machine price",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          as="h1"
          title={"Collar Type Cup Filler Packaging Machine"}
          image={"/PRODUCTS/collar-type-cup-filler-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/collar-type-cup-filler-packaging-machine/p1.webp"
          }
          showRating={false}
        >
          <div className="pt-1">
            <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg mb-3">
              Technical Specifications
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Technical Parameter
                    </th>
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {machineTechnicalSpecs.map((spec, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-2.5 px-4 font-medium text-gray-800">
                        {spec.feature}
                      </td>
                      <td className="py-2.5 px-4 text-gray-700">
                        {spec.spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </MainProductDetails>

        {/* Title, Rating, Packing Products */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 space-y-3 sm:space-y-4">
             <h2 className="text-2xl md:text-3xl font-bold text-black">
          Collar Type Cup Filler Packaging Supplier In Delhi Ncr
        </h2>
          <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg pt-1 sm:pt-2">
            Packing Products
          </h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed max-w-2xl">
            Spices, Namkeen, Rice, Pulses etc.
          </p>
          <p className="text-gray-500 font-bold text-sm sm:text-base md:text-sm lg:text-base leading-relaxed pt-1">
            High Degree of Tolerance with Optimum Runtime
          </p>
        </div>

        {/* Sample Packaging Products */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 pb-8 sm:pb-10 md:pb-12">
          <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-68 lg:h-80">
            <Image
              src="/PRODUCTS/collar-type-cup-filler-packaging-machine/p2.webp"
              alt="Sample Packaging Products"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 60vw, 650px"
              className="object-contain object-left"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
    
      </section>
      <SuppliedProductContent page={suppliedProductContent.collarCup} />
    </>
  );
}
