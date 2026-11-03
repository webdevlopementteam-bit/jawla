import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/hotel-pack-packaging-machine" },
  title: "Hotel Pack Packaging Machine (JAT-309) - Jawla Advance Technology",
  description:
    "Buy Hotel Pack Packaging Machine (JAT-309) from Jawla Advance Technology. Versatile pillow and tray pack machine for hotel amenities, bakery & biscuits.",
  keywords: [
    "Hotel Pack Packaging Machine",
    "Packaging Machine",
    "Jawla Advance Technology",
    "Best Packaging Machine Manufacturer",
    "Pillow Pack Packaging Machine",
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
          Hotel Pack Packaging Machine (JAT-309) - Jawla Advance Technology
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.hotel} />
    </>
  );
}
