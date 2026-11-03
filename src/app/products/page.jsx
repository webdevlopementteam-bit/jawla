import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata = {
  alternates: { canonical: "/products" },
  title:
    "Packaging Machine - Fully & Semi Automatic Packaging Machines",
  description:
    "Explore 15+ high-performance packaging machine models by Jawla Advance Technology. Featuring powder packaging machines, liquid packaging machines, FFS & flow wrap systems.",
  keywords: [
    "Packaging Machine",
    "Liquid Packaging Machine",
    "Powder Packaging Machine",
    "Fully Automatic Packaging Machine",
    "Semi Automatic Packaging Machine",
    "Best Packaging Machine Manufacturer",
    "Jawla Advance Technology",
  ],
};

export default function ProductsGrid() {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Industrial Packaging Machine & Automation Systems
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-gray-700 sm:text-base">
          <span className="font-bold text-black">Quick answer: </span>
          Jawla Advance Technology LLP is a premier packaging machine manufacturer in
          Ballabgarh, Faridabad, serving Delhi NCR, India and export markets. We
          engineer 15 high-performance models covering vertical FFS machines, liquid packaging machines,
          powder packaging machines, collar auger fillers, multi-head weighers, and horizontal flow wrap machines
          for pack sizes ranging from 2 ml and 2 g sachets up to 10 kg bulk packs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 sm:h-64 md:h-60 lg:h-60 xl:h-80 mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.path}
                    alt={`${product.name} - Packaging Machine Manufacturer`}
                    fill
                    className="object-contain p-1"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                {/* Red Title Banner */}
                <Link
                  href={`/${product.slug}`}
                  className="w-full bg-[#bd2a2a] hover:bg-[#6E6D76] text-white text-center font-bold text-xs sm:text-sm  py-3 px-3 rounded-lg transition-colors duration-200 min-h-[52px] md:min-h-[100px] lg:min-h-[80px] flex items-center justify-center leading-snug"
                >
                  {product.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Informative Content Section for SEO */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
              Comprehensive Packaging Machine Range for Every Production Scale
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Jawla Advance Technology, we build advanced machinery engineered to meet diverse industrial packaging requirements across India and overseas. From single-sachet pouch packaging to automated family-pack flows, our machines deliver continuous output, airtight seal integrity, and minimal product wastage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-[#bd2a2a] mb-2">
                Fully Automatic Packaging Machine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our fully automatic packaging machine systems handle film forming, precise dosing, continuous heat-sealing, batch coding, and cutting in one synchronized cycle. Ideal for medium to high-volume manufacturing lines in food processing, snacks, cosmetics, and pharmaceuticals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#bd2a2a] mb-2">
                Semi Automatic Packaging Machine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designed for flexible batch runs and growing enterprises, our semi automatic packaging machine series provides rugged durability with user-friendly operation, allowing fast changeovers between different pack sizes and granular products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-[#bd2a2a] mb-2">
                Powder Packaging Machine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Equipped with high-precision servo auger fillers, our powder packaging machines accurately fill spices, flour, coffee, detergent, and chemical powders without dust leakage or weight variation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#bd2a2a] mb-2">
                Liquid Packaging Machine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Utilizing anti-corrosion stainless steel contact parts and positive displacement piston dosers, our liquid packaging machines pack edible oils, shampoos, juices, lubricants, and syrups into leak-proof pouches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
