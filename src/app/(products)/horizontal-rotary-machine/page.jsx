import React from "react";
import TopCard from "@/components/TopCard";

import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/horizontal-rotary-machine" },
  title: "Horizontal Rotary Machine (JAT-305)",
  description:
    "Buy Horizontal Rotary Machine (JAT-305) from Jawla Advance Technology. High speed rotary pouch packing machine for tea, sugar, spices & mouth freshener.",
  keywords: [
    "Horizontal Rotary Machine",
    "Packaging Machine",
    "Jawla Advance Technology",
    "Best Packaging Machine Manufacturer",
    "Rotary Pouch Packing Machine",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Horizontal Rotary Machine"}
          image={"/PRODUCTS/horizontal-rotary-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/horizontal-rotary-machine/p1.webp"}
          sampleImage={"/PRODUCTS/horizontal-rotary-machine/p2.webp"}
          productTitle={"Horizontal Rotary Machine (JAT-305)"}
          productDescription={
            "Tea, Washing Powder, Spices, Sugar, Mouth Freshner, Pan Masala, Khaini etc."
          }
          productTagline={
            "Fulfilling the Smallest Packaging needs with Top-notch Solutions"
          }
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Horizontal Rotary Machine (JAT-305) - Jawla Advance Technology
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.rotary} />
    </>
  );
}
