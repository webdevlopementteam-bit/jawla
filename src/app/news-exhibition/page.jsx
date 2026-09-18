import React from "react";
import Image from "next/image";
import { exhibitions } from "@/lib/data";

export const metadata = {
  alternates: { canonical: "/news-exhibition" },
  title: "News/Exhibition - Jawla Advance Technology",
  description:
    "We cordially invite you to visit Jawla Advance Technology LLP at the 8th World Mithai Namkeen Convention & Expo, from 19–21 December 2025 at Yashobhoomi,",
};

export default function ExhibitionsSection() {
  return (
    <section className="bg-white py-12 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((item) => (
            <div key={item.id} className="flex flex-col space-y-4">
              {/* Poster Card Container */}
              <div className="bg-[#f8f8f8] p-3 rounded-lg border border-gray-200 shadow-sm flex justify-center items-center">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                  {item.title}
                </h3>

                <p className="text-sm font-bold text-black">
                  {item.dateLocation}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {item.hallStall && (
                  <p className="text-sm text-gray-700 leading-relaxed pt-1">
                    {item.hallStall}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
