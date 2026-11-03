import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/ffs-liquid-packaging-machine" },
  title: "Liquid Packaging Machine (JAT-301A)",
  description:
    "Buy Liquid Packaging Machine (JAT-301A) from Jawla Advance Technology. Dosing oil, shampoo, lubricants, sauces & syrups (2ml–100ml) at 50–60 pouches/min.",
  keywords: [
    "Liquid Packaging Machine",
    "Packaging Machine",
    "Jawla Advance Technology",
    "Best Packaging Machine Manufacturer",
    "FFS Liquid Packaging Machine",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Liquid Packaging Machine"}
          image={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-liquid-packaging-machine/p1.webp"}
          sampleImage={"/PRODUCTS/ffs-liquid-packaging-machine/p2.webp"}
          productTitle={"Liquid Packaging Machine (JAT-301A)"}
          productDescription={"Shampoo, Oils, Lubricant, Liquid Chocolate etc."}
          productTagline={"Quickly Sealing the Novelty of Liquid Products"}
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Liquid Packaging Machine (JAT-301A) - Jawla Advance Technology
        </h1>
      </section>
      <SuppliedProductContent page={suppliedProductContent.liquid} />
    </>
  );
}
