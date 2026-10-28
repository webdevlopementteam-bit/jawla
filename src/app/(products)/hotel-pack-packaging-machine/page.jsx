import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/hotel-pack-packaging-machine" },
  title: "Buy Hotel Pack Packaging Machine",
  description:
    "Hotel pack packaging machine manufacturer in Delhi NCR. JAT-309 makes up to 80 pillow or tray packs/min for bakery & HoReCa. Call now.",
  keywords: [
    "hotel pack packaging machine",
    "hotel pack packaging machine manufacturer",
    "hotel pack packaging machine manufacturer In Delhi NCR",
  ],
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Hotel Pack Packaging Machine"}
          image={"/PRODUCTS/hotel-pack-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/hotel-pack-packaging-machine/p1.webp"}
          sampleImage={"/PRODUCTS/hotel-pack-packaging-machine/p2.webp"}
          productTitle={"Hotel Pack Packaging Machine (JAT-309)"}
          productDescription={
            "Biscuit, Chocolate Bar, Noodles, Bearing, Maggi, Samtaing Towels, Scotch Bar, Gur, Cake, Tray Pack Items & Electronic Items etc."
          }
          productTagline={
            "Tray and Pillow Packing Machine-Multipurpose, Quick, and Damage free"
          }
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Best Hotel Pack Packaging Machine Manufacturer - Jawla Advance Technology
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.hotel} />
    </>
  );
}
