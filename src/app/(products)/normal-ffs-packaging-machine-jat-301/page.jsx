import React from "react";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  title: "Best Normal FFS Packaging Machine - Jawla Advance Technology",
  description:
    "Buy high quality Normal FFS Packaging Machine from Jawla Advance Technology for fast, accurate and reliable packaging solutions. Contact us now!",
};

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Normal FFS Packaging Machine"}
          image={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/top.png"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/p1.png"}
          sampleImage={
            "/PRODUCTS/normal-ffs-packaging-machine-jat-301/chutki.png"
          }
          productTitle={"Normal FFS Packaging Machine (JAT-301)"}
          productDescription={
            "Spices, Namkeen, Tea, Coffee, Heena, Powder, All granular & Detergent"
          }
          productTagline={
            "Electrostatically Powerful and Highly-Conventional in use"
          }
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12 border-t border-gray-200">
        {" "}
        {/* Product Description */}
        <div>
          <h2 className="text-xl sm:text-xl  md:2xl font-bold text-[#BB2426] mb-4">
            Product Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Known for its reliability and top-notch quality, our automatic
            <strong className="text-red-600 hover:text-[#BB2426]">
              {" "}
              packaging machines{" "}
            </strong>
            manufacture an array of packing pouches for food products like
            Namkeen, Coffee, Spices-Masala, Tea and other products akin to
            powder form. This Pouch Packing Machine yields 2 to 200 grams of 30
            to 80 pouches in a minute, thereby ensuring scores of production in
            a day. Use of this packaging machine is manifold in nature; hence,
            it can be utilized as Namkeen Packing Machine as well as Spice
            Powder Packaging Machine. Manifesting on volumetric cup filling
            system, one can also employ this machine for Granule Packaging of
            Daal, Pulses, and other forms of Lentils.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            The machines are scientifically adept with continuous sealing
            mechanism leaving no room for any kind of leakage. Moreover, it
            follows 3/4th sided Seal and Center Seal mechanism to accomplish the
            process. Weighing 500 kilograms, the machine’s outer body is
            electrostatically powder coated to make it tougher and conventional
            for use. It is safe and provides zero factual errors, hence, can be
            employed for tea, coffee, and Namkeen Packaging.
          </p>
        </div>
        {/* Energy Efficient and Cost-Effective */}
        <div>
          <h2 className="text-xl  sm:text-xl  md:2xl font-bold text-[#BB2426] mb-4">
            Energy Efficient and Cost-Effective
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The JAT-301 <strong>Normal FFS Packaging Machine</strong> is made to
            produce a lot of work while using as little power as possible. Its
            motors and mechanisms use less energy, which helps lower electricity
            costs while still providing consistent performance.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            This machine is a great investment because it doesn’t need much
            maintenance and works reliably. Putting the packaging process on
            autopilot also cuts down on labor costs and makes production more
            efficient overall.
          </p>
        </div>
        {/* Why Choose Jawla Advance Technology */}
        <div>
          <h2 className="text-xl  sm:text-xl  md:2xl font-bold text-[#BB2426] mb-4">
            Why Choose Jawla Advance Technology?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jawla Advance Technology is known for delivering high-quality and
            dependable packaging machinery. The{" "}
            <strong className="text-red-600 hover:text-[#BB2426]">
              Normal FFS Packaging Machine (JAT-301)
            </strong>{" "}
            reflects the company’s commitment to innovation, performance, and
            customer satisfaction.
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>Durable and robust design</li>
            <li>Easy operation and maintenance</li>
            <li>Accurate filling and strong sealing</li>
            <li>Flexible packaging options</li>
            <li>Reliable after-sales support</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            This Normal FFS Packaging Machine is the ideal solution for
            businesses seeking consistent packaging quality and improved
            productivity.
          </p>
        </div>
        {/* FAQs */}
        <div>
          <h2 className="text-xl  sm:text-xl  md:2xl font-bold text-[#BB2426] mb-4">
            FAQs
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                1. What products can be packed using the Normal FFS Packaging
                Machine (JAT-301)?
              </h3>
              <p className="text-gray-700">
                The machine can pack products such as sugar, salt, spices,
                flour, grains, detergents, seeds, pharmaceutical powders, and
                other free-flowing or granular materials.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                2. Is the JAT-301 Normal FFS Packaging Machine easy to operate?
              </h3>
              <p className="text-gray-700">
                Yes, it is designed with a user-friendly control panel that
                allows easy operation with minimal training.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                3. Does this machine provide accurate filling and sealing?
              </h3>
              <p className="text-gray-700">
                Absolutely. The machine ensures precise filling and strong,
                leak-proof sealing for consistent packaging quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                4. What is the maintenance requirement for this machine?
              </h3>
              <p className="text-gray-700">
                The machine requires low maintenance due to its durable
                construction and quality components. Regular cleaning and basic
                servicing ensure smooth operation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                5. Why should I choose Jawla Advance Technology for a Normal FFS
                Packaging Machine?
              </h3>
              <p className="text-gray-700">
                Jawla Advance Technology offers reliable, high-performance
                machines with strong after-sales support, customization options,
                and proven industrial quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
