import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/one-edge-biscuit-packaging-machine" },
  title: "One-Edge Biscuit Packaging Machine (JAT-311) - Jawla Advance Technology",
  description:
    "Buy One-Edge Biscuit Packaging Machine (JAT-311) from Jawla Advance Technology. High speed dual feeder wrapper for 50g, 75g & 100g slug packs (up to 200 packs/min).",
  keywords: [
    "One-Edge Biscuit Packaging Machine",
    "Packaging Machine",
    "Biscuit Packaging Machine",
    "Jawla Advance Technology",
    "Best Packaging Machine Manufacturer",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"One-edge Biscuit Packaging Machine"}
          image={"/PRODUCTS/one-edge-biscuit-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/one-edge-biscuit-packaging-machine/p1.webp"}
          sampleImage={"/PRODUCTS/one-edge-biscuit-packaging-machine/p2.webp"}
          productTitle={
            "One-edge Biscuit Packaging Machine with Dual Feeder for 50gm, 75gm & 100gm (JAT-311)"
          }
          productDescription={"Biscuits Especially"}
          productTagline={"One-edge Biscuit, Bread Packaging Machine"}
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          One-Edge Biscuit Packaging Machine (JAT-311) - Jawla Advance Technology
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.oneEdgeBiscuit} />
    </>
  );
}
