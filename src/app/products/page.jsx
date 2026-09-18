import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata = {
  alternates: { canonical: "/products" },
  title: "Products - Jawla Advance Technology",
  description:
    "PRODUCTS Home Normal FFS Packaging Machine (JAT-301) FFS Liquid Packaging Machine (JAT-301A) FFS High Speed Packaging Machine (JAT-302) FFS D-Motion Type",
};

export default function ProductsGrid() {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
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
                    alt={product.name}
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
      </div>
    </section>
  );
}
