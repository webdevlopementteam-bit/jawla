import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/collar-type-cup-filler-packaging-machine" },
  title: "Collar Type Cup Filler Packaging Machine (JAT-314)",
  description:
    "Buy Collar Type Cup Filler Packaging Machine (JAT-314) from Jawla Advance Technology. High accuracy volumetric cup filler for rice, pulses, namkeen & spices (100g–1kg).",
  keywords: [
    "Collar Type Cup Filler Packaging Machine",
    "Packaging Machine",
    "Jawla Advance Technology",
    "Best Packaging Machine Manufacturer",
    "Cup Filler Packaging Machine",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Collar Type Cup Filler Packaging Machine"}
          image={"/PRODUCTS/collar-type-cup-filler-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/collar-type-cup-filler-packaging-machine/p1.webp"
          }
          sampleImage={
            "/PRODUCTS/collar-type-cup-filler-packaging-machine/p2.webp"
          }
          productTitle={"Collar Type Cup Filler Packaging Machine (JAT-314)"}
          productDescription={"Spices, Namkeen, Rice, Pulses etc."}
          productTagline={"High Degree of Tolerance with Optimum Runtime"}
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Collar Type Cup Filler Packaging Machine (JAT-314) - Jawla Advance Technology
        </h1>
      </section>
      <SuppliedProductContent page={suppliedProductContent.collarCup} />
    </>
  );
}
