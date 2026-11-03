import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/collar-auger-filling-packaging-machine" },
  title: "Collar Auger Filling Packaging Machine (JAT-307) - Powder Packaging Machine",
  description:
    "Buy Collar Auger Filling Packaging Machine (JAT-307) from Jawla Advance Technology. High accuracy powder packaging machine for besan, spices, maida & sattu (10g–10kg).",
  keywords: [
    "Collar Auger Filling Packaging Machine",
    "Powder Packaging Machine",
    "Packaging Machine",
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
          title={"Collar Auger Filling Packaging Machine"}
          image={"/PRODUCTS/collar-auger-filling-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/collar-auger-filling-packaging-machine/p1.webp"
          }
          sampleImage={
            "/PRODUCTS/collar-auger-filling-packaging-machine/p2.webp"
          }
          productTitle={"Collar Auger Filling Packaging Machine (JAT-307)"}
          productDescription={
            "Besan, Spices, Sattu, Maida & all kind of sticky products."
          }
          productTagline={
            "Ensures Versatile Functionality and Maximum Production"
          }
        />
      </section>

      <section className="w-full bg-white font-sans px-4 md:px-8 lg:px-20 pt-10">
        <h1 className="text-2xl md:text-3xl font-bold text-black">
          Collar Auger Filling Packaging Machine (JAT-307) - Powder Packaging Machine
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.auger} />
    </>
  );
}
