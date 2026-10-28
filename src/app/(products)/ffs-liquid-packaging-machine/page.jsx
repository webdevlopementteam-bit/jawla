import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/ffs-liquid-packaging-machine" },
  title: "Best Liquid Packaging Machine Manufacturer in Delhi NCR",
  description:
    "Liquid packaging machine manufacturer in Delhi NCR. Pack oil, shampoo & syrups in 2–100 ml pouches at 50–60 pouches/min. Get price.",
  keywords: [
    "liquid packaging machine",
    "liquid packaging machine manufacturer",
    "liquid packaging machine manufacturer In Delhi NCR",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"FFS Liquid Packaging Machine"}
          image={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-liquid-packaging-machine/p1.webp"}
          sampleImage={"/PRODUCTS/ffs-liquid-packaging-machine/p2.webp"}
          productTitle={"FFS Liquid Packaging Machine (JAT-301A)"}
          productDescription={"Shampoo, Oils, Lubricant, Liquid Chocolate etc."}
          productTagline={"Quickly Sealing the Novelty of Liquid Products"}
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Best FFS Liquid Packaging Machine Manufacturer - Jawla Advance Technology
        </h1>
      </section>
      <SuppliedProductContent page={suppliedProductContent.liquid} />
    </>
  );
}
