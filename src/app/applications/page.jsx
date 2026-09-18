import React from "react";
import { applications } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/applications" },
  title: "Applications - Jawla Advance Technology",
  description:
    "APPLICATIONS Home Chocolate Candies Coffee and Tea Biscuits and Cookies Detergent and Chemicals Industrial Items Namkeen and Snacks Liquid and Viscous Noodles",
};

export default function ApplicationsSection() {
  return (
    <section className="py-12 bg-[#FBFBFB]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  alt={item.name}
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
      </div>
    </section>
  );
}
