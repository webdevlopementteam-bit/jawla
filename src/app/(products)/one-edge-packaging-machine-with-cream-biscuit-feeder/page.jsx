import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/one-edge-packaging-machine-with-cream-biscuit-feeder" },
  title: "One-Edge Packaging Machine With Cream Biscuit Feeder (JAT-313) - Jawla Advance Technology",
  description:
    "Buy One-Edge Packaging Machine With Cream Biscuit Feeder (JAT-313) from Jawla Advance Technology. Dedicated feeder for sandwich & cream biscuits (80–150 packs/min).",
  keywords: [
    "One-Edge Packaging Machine With Cream Biscuit Feeder",
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
          title={"One-edge Packaging Machine with Cream Biscuit Feeder"}
          image={
            "/PRODUCTS/one-edge-packaging-machine-with-cream-biscuit-feeder/top.webp"
          }
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/one-edge-packaging-machine-with-cream-biscuit-feeder/p1.webp"
          }
          sampleImage={
            "/PRODUCTS/one-edge-packaging-machine-with-cream-biscuit-feeder/p2.webp"
          }
          productTitle={
            "One-edge Packaging Machine with Cream Biscuit Feeder (JAT-313)"
          }
          productDescription={"Cream Biscuit"}
          productTagline={
            "Cream Biscuit Packaging Machine—Optimum Production, Minimum Downtime"
          }
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          One-Edge Packaging Machine With Cream Biscuit Feeder (JAT-313) - Jawla Advance Technology
        </h1>
      </section>
      <SuppliedProductContent page={suppliedProductContent.creamBiscuit} />
    </>
  );
}
