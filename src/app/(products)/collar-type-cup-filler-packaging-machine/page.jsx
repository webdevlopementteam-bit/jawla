import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/collar-type-cup-filler-packaging-machine" },
  title: "Buy Collar Type Cup Filler Packaging Machine",
  description:
    "Collar type cup filler packaging machine manufacturer in Delhi NCR. JAT-314 packs rice, pulses & namkeen, 100 g–1 kg. Get quote.",
  keywords: [
    "collar type cup filler packaging machine",
    "collar type cup filler packaging machine manufacturer",
    "collar type cup filler packaging machine manufacturer In Delhi NCR",
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
          Top Collar Type Cup Filler Packaging Machine Manufacturer - Jawla Advance Technology
        </h1>
      </section>
      <SuppliedProductContent page={suppliedProductContent.collarCup} />
    </>
  );
}
