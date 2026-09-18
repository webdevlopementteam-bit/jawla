import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  title: "Best FFS High Speed Packaging Machine | Jawla Advance Technology",
  description:
    "FFS High Speed Packaging Machine by Jawla Advance Technology offers fast, reliable and precise packaging solutions for food, pharma and industrial use.",
};

export default function ProductDetailSection() {
  const techSpecs = [
    {
      feature: "Filling Capacity",
      spec: "2g to 100g (Up to 200g for granules)",
    },
    { feature: "Production Speed", spec: "100 – 450 pouches per minute" },
    { feature: "Power Requirement", spec: "Single Phase" },
    { feature: "Motor Power", spec: "1/2 Horse Power" },
    { feature: "Machine Weight", spec: "700 Kilograms" },
    { feature: "Film Type", spec: "Heat Sealable Laminated Roll Film" },
    { feature: "Maximum Roll Width", spec: "200 mm" },
    { feature: "Operation Type", spec: "Fully Automatic" },
    { feature: "Sealing Type", spec: "Heat Seal, Leak-Proof" },
  ];
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"FFS High Speed Packaging Machine"}
          image={"/PRODUCTS/ffs-high-speed-packaging-machine/top.png"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-high-speed-packaging-machine/p1.png"}
          sampleImage={"/PRODUCTS/ffs-high-speed-packaging-machine/p2.png"}
          productTitle={"FFS High Speed Packaging Machine (JAT-302)"}
          productDescription={
            "Mouth Freshner, Paan masala, Spices, Namkeen, Tea, Coffee, Heena, Powder, All granular & Detergent"
          }
          productTagline={
            "Controlled Automation Technology armed with Seasoned Machinist"
          }
        />
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 leading-relaxed font-sans">
        <div className="w-full mx-auto space-y-8">
          {/* Section Header */}
          <div>
            <h2 className="text-[#E13538] text-xl font-bold mb-4">
              Product Description
            </h2>
            <p className="text-gray-700">
              At{" "}
              <strong className="text-black font-semibold">
                Jawla Advance Technology
              </strong>
              , our success is built on innovation, advanced engineering, and a
              highly skilled workforce dedicated to delivering high-performance
              packaging solutions. Our{" "}
              <span className="text-[#E13538] font-bold">
                FFS High Speed Packaging Machine
              </span>{" "}
              (Form Fill Seal Machine) is designed to meet the growing demand
              for fast, accurate, and leak-proof small pouch packaging across
              multiple industries.
            </p>
          </div>

          {/* Advanced Packaging Technology */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Advanced Packaging Technology for Maximum Efficiency
            </h2>
            <p className="text-gray-700">
              The{" "}
              <strong className="text-black font-semibold">
                FFS High Speed Packaging Machine
              </strong>{" "}
              is engineered to manufacture vacuum-filled pouches ranging from{" "}
              <strong className="text-black font-semibold">
                2 grams to 100 grams
              </strong>
              , making it ideal for small-quantity packaging requirements. With
              cutting-edge automation and precision control systems, the machine
              ensures consistent output, reduced wastage, and superior sealing
              performance.
            </p>
            <p className="text-gray-700">
              Built using top-grade components and modern technology, this
              machine guarantees durability, reliability, and smooth operation
              even during long production hours. It is a perfect solution for
              businesses looking to enhance productivity while maintaining
              packaging quality.
            </p>
          </div>

          {/* Suitable for Multiple Applications */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Suitable for Multiple Applications
            </h2>
            <p className="text-gray-700">
              Our machine is highly versatile and can be used as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
              <li>
                <strong className="text-black font-semibold">
                  Powder Filling Machine
                </strong>
              </li>
              <li>
                <strong className="text-black font-semibold">
                  Namkeen Packing Machine
                </strong>
              </li>
              <li>
                <strong className="text-black font-semibold">
                  Granule Packing Machine
                </strong>
              </li>
              <li>
                <strong className="text-black font-semibold">
                  Pan Masala Packing Machine
                </strong>
              </li>
              <li>
                <strong className="text-black font-semibold">
                  Mouth Freshener Packing Machine
                </strong>
              </li>
              <li>
                <strong className="text-black font-semibold">
                  Spices Packaging Machine
                </strong>
              </li>
            </ul>
            <p className="text-gray-700">
              The machine is specially designed to handle powder and granule
              products that require small, hygienic, and airtight packaging. It
              ensures leak-proof sealing, preserving product freshness and
              extending shelf life.
            </p>
          </div>

          {/* High-Speed Performance & Specifications */}
          <div className="space-y-6">
            <h2 className="text-[#E13538] text-xl font-bold">
              High-Speed Performance & Technical Specifications
            </h2>
            <p className="text-gray-700">
              The{" "}
              <strong className="text-black font-semibold">
                FFS High Speed Packaging Machine by Jawla Advance Technology
              </strong>{" "}
              is built for performance. It can produce{" "}
              <strong className="text-black font-semibold">
                100 to 450 pouches per minute
              </strong>
              , depending on the product and pouch size. This high-speed output
              significantly increases production capacity while minimizing
              manual labor.
            </p>

            {/* Technical Specifications Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-sm">
              <table className="w-full text-left border-collapse text-base md:text-lg text-gray-700">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-bold text-black border-r border-gray-200 text-center w-1/2 text-base md:text-xl">
                      Feature
                    </th>
                    <th className="p-3 font-bold text-black text-center w-1/2 text-base md:text-xl">
                      Specification
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {techSpecs.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <td className="p-3 font-semibold text-black border-r border-gray-200 text-center text-base md:text-md">
                        {item.feature}
                      </td>
                      <td className="p-3 text-center text-gray-600 text-base md:text-md">
                        {item.spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Choose Jawla Advance Technology */}
          <div className="space-y-4 pt-2">
            <h2 className="text-[#E13538] text-xl font-bold">
              Why Choose Jawla Advance Technology?
            </h2>
            <p className="text-gray-700">
              At{" "}
              <strong className="text-black font-semibold">
                Jawla Advance Technology
              </strong>
              , we combine innovation with expertise. Our in-house team of
              experienced professionals ensures that every machine is designed
              with clearly defined quality standards and performance
              expectations.
            </p>
            <p className="text-gray-700">We focus on:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-700">
              <li>Precision engineering</li>
              <li>Low maintenance requirements</li>
              <li>Long operational life</li>
              <li>Easy operation and user-friendly controls</li>
              <li>Custom solutions based on business needs</li>
            </ul>
            <p className="text-gray-700">
              Our{" "}
              <strong className="text-black font-semibold">
                FFS High Speed Packaging Machine
              </strong>{" "}
              is ideal for small to medium-scale industries looking for reliable
              and cost-effective packaging solutions.
            </p>
            <p className="text-gray-700">
              If you are searching for the best{" "}
              <strong className="text-black font-semibold">
                powder filling machine price
              </strong>{" "}
              that matches your production requirements, click on the{" "}
              <span className="text-[#E13538] font-bold">“Enquire Now”</span>{" "}
              button to get customized details and competitive pricing.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <h2 className="text-[#E13538] text-xl font-bold">FAQs</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-1">
                  1. What is an FFS high-speed packaging machine?
                </h3>
                <p className="text-gray-700">
                  An FFS (Form Fill Seal) High Speed Packaging Machine is an
                  automated system that forms pouches from roll film, fills them
                  with product, and seals them in a continuous high-speed
                  process.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1">
                  2. What products can be packed using this machine?
                </h3>
                <p className="text-gray-700">
                  It can pack powder, granules, spices, pan masala, mouth
                  freshener, namkeen, and other small-quantity food or non-food
                  products.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1">
                  3. What is the production speed of the machine?
                </h3>
                <p className="text-gray-700">
                  The machine can produce between{" "}
                  <strong className="text-black font-semibold">
                    100 to 450 pouches per minute
                  </strong>
                  , depending on pouch size and product type.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-1">
                  4. What is the power requirement of the machine?
                </h3>
                <p className="text-gray-700">
                  The machine operates on{" "}
                  <strong className="text-black font-semibold">
                    single-phase power with 1/2 HP
                  </strong>
                  , making it energy efficient.
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
