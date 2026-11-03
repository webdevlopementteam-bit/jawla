import React from "react";
import { applications } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/applications" },
  title: "Packaging Machine Applications - Powder, Liquid & Food",
  description:
    "Explore versatile packaging machine applications by Jawla Advance Technology. High-performance powder packaging machines, liquid packaging machines, snack & biscuit solutions.",
  keywords: [
    "Packaging Machine",
    "Powder Packaging Machine",
    "Liquid Packaging Machine",
    "Fully Automatic Packaging Machine",
    "Jawla Advance Technology",
    "Packaging Machine Manufacturer",
  ],
};

export default function ApplicationsSection() {
  return (
    <section className="py-12 bg-[#FBFBFB] font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Packaging Machine Applications Across Diverse Industries
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            From precision powder packaging machines and hygienic liquid packaging machines to high-speed biscuit wrapping and snack pouch packing, Jawla Advance Technology engineers specialized packaging solutions customized for your exact product characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden bg-white rounded-xl p-3 shadow-sm border border-gray-200/80 flex flex-col items-center transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] after:absolute after:inset-0 after:z-10 after:w-[200%] after:-translate-x-[120%] after:skew-x-[-20deg] after:bg-gradient-to-r after:from-transparent after:via-black/15 after:to-transparent after:transition-transform after:duration-700 after:ease-out group-hover:after:translate-x-[60%]"
            >
              {/* Image Container */}
              <div className="relative z-0 w-full h-48 sm:h-52 rounded-t-lg overflow-hidden">
                <Image
                  src={item.path}
                  alt={`${item.name} Packaging Machine - Jawla Advance Technology`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Title Container */}
              <div className="relative z-20 pt-4 pb-2 px-2 w-full text-center">
                <h3 className="text-base font-bold text-gray-900 tracking-wide transition-all duration-500 group-hover:text-black group-hover:scale-[1.03]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Application Information */}
        <div className="mt-14 max-w-7xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Engineered Packaging Solutions for Dry, Granular & Liquid Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-sm leading-relaxed">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-base text-[#bd2a2a] mb-2">Powders & Spices</h3>
              <p>
                Our <strong>powder packaging machines</strong> and collar auger systems prevent dust dissemination while delivering exact grammage for spices, turmeric, maida, coffee, and chemical powders.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-base text-[#bd2a2a] mb-2">Liquids & Viscous Products</h3>
              <p>
                Equipped with sanitary grade dosing cylinders, our <strong>liquid packaging machines</strong> seal edible oils, shampoo, sauces, and lubricants in tamper-evident, zero-leak pouches.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-base text-[#bd2a2a] mb-2">Snacks, Biscuits & Bakery</h3>
              <p>
                From horizontal flow wrap machines to multi-head weighing systems, we protect crispness and structure for namkeen, chips, biscuits, cookies, rusks, and toast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
