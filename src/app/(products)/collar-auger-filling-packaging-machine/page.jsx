import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";
import SuppliedProductContent from "@/components/SuppliedProductContent";
import { suppliedProductContent } from "@/lib/suppliedProductContent";

export const metadata = {
  alternates: { canonical: "/collar-auger-filling-packaging-machine" },
  title: "Best Collar Auger Filling Packaging Machine Manufacturer In Delhi NCR",
  description:
    "Collar auger filling packaging machine manufacturer in Delhi NCR. JAT-307 packs besan, maida & sattu, 10 g–10 kg. Get quote.",
  keywords: [
    "collar auger filling packaging machine",
    "collar auger filling packaging machine manufacturer",
    "collar auger filling packaging machine manufacturer In Delhi NCR",
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
          Best Collar Auger Filling Packaging Machine Manufacturer - Jawla Advance Technology
        </h1>
      </section>

      <SuppliedProductContent page={suppliedProductContent.auger} />
    </>
  );
}
