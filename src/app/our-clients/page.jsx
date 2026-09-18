import React from "react";
import { clients } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: "OUR CLIENTS - Jawla Advance Technology",
  description:
    "OUR CLIENTS Home",
};

export default function page() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#FBFBFB]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative overflow-hidden h-24 sm:h-28 lg:h-32 bg-white rounded-lg border border-gray-200/80 shadow-sm flex items-center justify-center p-3 sm:p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.22)] after:absolute after:inset-0 after:z-10 after:w-[200%] after:-translate-x-[120%] after:skew-x-[-20deg] after:bg-gradient-to-r after:from-transparent after:via-black/10 after:to-transparent after:transition-transform after:duration-700 after:ease-out group-hover:after:translate-x-[60%]"
            >
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <Image
                  src={client.path}
                  alt={`Client ${index + 1}`}
                  width={260}
                  height={130}
                  className="w-[95%] h-[95%] sm:w-full sm:h-full lg:w-[90%] lg:h-[90%] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
