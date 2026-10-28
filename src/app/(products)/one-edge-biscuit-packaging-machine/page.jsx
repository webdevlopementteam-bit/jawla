import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/one-edge-biscuit-packaging-machine" },
  title: "Top One-Edge Biscuit Packaging Machine Manufacturer In Delhi NCR",
  description:
    "One-edge biscuit packaging machine manufacturer in Delhi NCR. JAT-311 dual feeder packs 50/75/100 g at up to 200 packs/min. Call now.",
  keywords: [
    "one-edge biscuit packaging machine",
    "one-edge biscuit packaging machine manufacturer",
    "one-edge biscuit packaging machine manufacturer In Delhi NCR",
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
          Top One-Edge Biscuit Packaging Machine Manufacturer
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.oneEdgeBiscuit} />
    </>
  );
}
