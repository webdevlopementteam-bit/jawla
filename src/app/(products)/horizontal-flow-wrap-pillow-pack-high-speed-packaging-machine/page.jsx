import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: {
    canonical: "/horizontal-flow-wrap-pillow-pack-high-speed-packaging-machine",
  },
  title: "Best High Speed Flow Wrap Pillow Pack Machine Manufacturer",
  description:
    "High speed horizontal flow wrap pillow pack machine manufacturer in Faridabad & Delhi NCR. JAT-310 packs 2/4 biscuits at up to 300 packs/min.",
  keywords: [
    "horizontal flow wrap pillow pack high speed packaging machine",
    "horizontal flow wrap pillow pack high speed packaging machine manufacturer",
    "horizontal flow wrap pillow pack high speed packaging machine manufacturer In Faridabad",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.jawlaadvancetechnology.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.jawlaadvancetechnology.com/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "High Speed Flow Wrap Pillow Pack Machine",
          item: "https://www.jawlaadvancetechnology.com/horizontal-flow-wrap-pillow-pack-high-speed-packaging-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a high speed flow wrap pillow pack machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high speed flow wrap pillow pack machine automatically feeds small products like biscuits onto a conveyor and wraps them in sealed film pillow packs at very high speed. Jawla Advance Technology's JAT-310 produces up to 300 packs per minute for single, 2 and 4 biscuit packs.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a high speed biscuit packing machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology JAT-310 high speed flow wrap machine is priced based on pack formats, feeder setup and accessories. Share your biscuit size and line speed with the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "How many packs per minute can the JAT-310 produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-310 produces up to 300 packs per minute, depending on product size and film. That is up to about 18,000 packs an hour, which makes it suitable for biscuit plants supplying large distributor and retail volumes.",
          },
        },
        {
          "@type": "Question",
          name: "Can the JAT-310 pack 2 and 4 biscuit packs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The JAT-310 is designed to pack single biscuits, 2-biscuit packs and 4-biscuit packs. Operators can switch between these formats to match market demand without losing speed or accuracy.",
          },
        },
        {
          "@type": "Question",
          name: "What products besides biscuits can the JAT-310 pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-310 also packs cookies, chocolate bars, cakes, rusk, noodles and other small FMCG products in pillow pack format, as long as the product size suits its automatic feeding system.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JAT-310 safe for fragile biscuits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Biscuits move on a smooth horizontal conveyor and are never dropped, and precise sealing and cutting avoid crushing. This keeps crumbs and broken pieces to a minimum, even at high speed.",
          },
        },
        {
          "@type": "Question",
          name: "What motor and power does the JAT-310 use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-310 uses a 2 HP Crompton Greaves gear motor on a single-phase supply. This gives stable, low-cost running and makes installation easier in units that do not have a three-phase connection.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between the JAT-310 and the JAT-311?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-310 makes small single, 2 or 4 biscuit pillow packs at up to 300 packs per minute. The JAT-311 makes larger 50 g, 75 g and 100 g one-edge packs with a dual feeder at up to 200 packs per minute.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best horizontal flow wrap pillow pack high speed packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best horizontal flow wrap pillow pack high speed packaging machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-310 in-house, lets biscuit makers test their own biscuits before ordering, and provides installation, training, spares and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology provide installation and support for the JAT-310?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology installs and commissions the JAT-310, aligns the feeder to your biscuit size, trains your operators and provides technical support, preventive maintenance and spare parts across Delhi NCR and remotely elsewhere.",
          },
        },
      ],
    },
  ],
};

const keySpecs = [
  { feature: "Output", value: "Up to 300 packs per minute" },
  {
    feature: "Pack formats",
    value: "Single, 2-biscuit and 4-biscuit pillow packs",
  },
  {
    feature: "Feeding",
    value: "Automatic feeding with long conveyor and hopper",
  },
  { feature: "Sealing", value: "Continuous sealing with temperature control" },
  { feature: "Motor", value: "2 HP Crompton Greaves gear motor, single phase" },
  { feature: "Body", value: "Stainless steel with non-corrosive powder coating" },
  { feature: "Film", value: "Heat-sealable laminated roll film" },
];

const machineUses = [
  "2 biscuit packing machine",
  "4 biscuit packaging machine",
  "Cookie wrapping machine",
  "Small-size pillow pack machine",
];

const featuresBenefits = [
  "High output: up to 300 packs per minute from one machine.",
  "Automatic feeding: less manual handling and more consistent positioning.",
  "Continuous sealing: uninterrupted production and uniform pack quality.",
  "Airtight packs: accurate temperature control preserves crunch and freshness.",
  "Low power: single-phase 2 HP gear motor keeps running costs low.",
  "Durable build: stainless steel with non-corrosive powder coating for long hours.",
  "Low maintenance: strong components and simple upkeep.",
];

const whyChooseReasons = [
  "Every machine goes through strict quality checks before dispatch.",
  "Machines follow international quality standards for long service life.",
  "Our engineers install the machine and train operators on feeding, sealing and changeovers.",
  "Spare parts and prompt after-sales support are available across Delhi NCR.",
  "We also supply biscuit manufacturers across India and in export markets.",
];

const buyersChecklist = [
  "Biscuit size: share exact dimensions and thickness so the feeder can be set correctly.",
  "Pack format: confirm whether you need single, 2-piece or 4-piece packs, or all three.",
  "Line speed: match the wrapper speed to your oven and cooling conveyor output.",
  "Breakage test: run your most fragile biscuit and check crumbs and broken pieces.",
  "Film: use a heat-sealable laminate that seals well at high speed.",
  "Spares plan: keep spare jaws and heaters, since high speed means more wear.",
];

const faqs = jsonLd["@graph"][1].mainEntity.map((item, index) => ({
  question: `${index + 1}. ${item.name}`,
  answer: item.acceptedAnswer.text,
}));

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={
            "Horizontal Flow Wrape Pillow Pack High Speed Packaging Machine"
          }
          image={
            "/PRODUCTS/horizontal-flow-wrape-pillow-pack-high-speed-packaging-machine/top.png"
          }
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/horizontal-flow-wrape-pillow-pack-high-speed-packaging-machine/p1.png"
          }
          sampleImage={
            "/PRODUCTS/horizontal-flow-wrape-pillow-pack-high-speed-packaging-machine/p2.png"
          }
          productTitle={
            "Horizontal Flow Wrape Pillow Pack High Speed Packaging Machine (JAT-310)"
          }
          productDescription={"2 OR 4 Biscuit specially in high speed"}
          productTagline={"High-Speed 2/4 Biscuit Pillow Packaging Machine"}
        />
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 font-sans space-y-10">
        {/* H1 + Quick Answer */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">Top Horizontal Flow Wrap Pillow Pack High Speed Packaging Machine Manufacturer</h1>
          <p className="leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a horizontal flow wrap pillow
            pack high speed packaging machine manufacturer in Faridabad,
            Delhi NCR. Its fully automatic JAT-310 packs single, 2-biscuit
            and 4-biscuit pillow packs at up to 300 packs per minute, with
            automatic feeding and a single-phase 2 HP gear motor.
          </p>
          <p className="leading-relaxed">
            Jawla Advance Technology LLP is a horizontal flow wrap pillow
            pack high speed packaging machine manufacturer in Faridabad and
            Delhi NCR. Our JAT-310 is a fully automatic flow wrap machine
            built for biscuit makers who pack 2-biscuit and 4-biscuit packs
            in very high volumes. With automatic feeding and continuous
            sealing, it produces up to 300 packs per minute while handling
            fragile biscuits with care.
          </p>
        </div>

        {/* Key Specifications */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Key Specifications
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse text-base text-gray-700">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 font-bold text-black border-r border-gray-200 w-1/2">
                    Feature
                  </th>
                  <th className="p-3 font-bold text-black w-1/2">JAT-310</th>
                </tr>
              </thead>
              <tbody>
                {keySpecs.map((spec, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      {spec.feature}
                    </td>
                    <td className="p-3 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Built for Small Biscuit Packs */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Built for Small Biscuit Packs
          </h2>
          <p className="leading-relaxed">
            Small biscuit packs sell in enormous numbers at low price
            points, so packing speed decides profit. The JAT-310 is designed
            for this market. Biscuits are fed automatically from the hopper
            onto the conveyor, positioned accurately and wrapped in a tight
            pillow pack. Operators can switch between single, double and
            four-piece packs to match market demand without losing speed or
            accuracy.
          </p>
          <p className="leading-relaxed">The machine works as a:</p>
          <ul className="list-disc pl-5 space-y-2">
            {machineUses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Gentle on Fragile Products */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Gentle on Fragile Products
          </h2>
          <p className="leading-relaxed">
            Biscuits and cookies crumble easily. The JAT-310 keeps them
            moving smoothly on a horizontal conveyor, so they are never
            dropped or squeezed. Precise sealing and cutting create uniform
            packs with minimal breakage and product waste.
          </p>
        </div>

        {/* Features and Benefits */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Features and Benefits
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {featuresBenefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Why Choose Jawla Advance Technology */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Why Choose Jawla Advance Technology as Your High Speed Flow Wrap
            Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            As a high speed flow wrap machine manufacturer with its own
            factory in Ballabgarh, Faridabad, we design every JAT-310 for
            continuous biscuit production. Bakery and biscuit units choose
            us because:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Which Flow Wrap Machine Do You Need */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Which Flow Wrap Machine Do You Need?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-black">
                JAT-310 (this machine):
              </span>{" "}
              automatic feeding for small 2 or 4 biscuit packs at up to 300
              packs per minute.
            </li>
            <li>
              <Link
                href="/one-edge-biscuit-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-311 One-Edge Biscuit Machine:
              </Link>{" "}
              dual feeder for 50 g, 75 g and 100 g packs at up to 200 packs
              per minute.
            </li>
            <li>
              <Link
                href="/best-automatic-family-pack-rusk-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-312 Family Pack Machine:
              </Link>{" "}
              50 g to 400 g family packs of rusk, biscuits and cake.
            </li>
            <li>
              <Link
                href="/horizontal-flow-wrap-pillow-pack-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-308
              </Link>{" "}
              and{" "}
              <Link
                href="/hotel-pack-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-309
              </Link>
              : versatile flow wrap machines for mixed products.
            </li>
          </ul>
          <p className="leading-relaxed">
            Share your pack sizes and daily volume, and we will recommend
            the right model.
          </p>
        </div>

        {/* Installation and Support */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Installation and Support
          </h2>
          <p className="leading-relaxed">
            Our engineers install and commission the JAT-310 at your plant,
            align the feeding system to your biscuit size and train your
            team. We then support you with preventive maintenance, breakdown
            visits and genuine spares, with remote help available for
            customers outside Delhi NCR.
          </p>
        </div>

        {/* Who Uses the JAT-310 */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Uses the JAT-310 in Faridabad and Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The JAT-310 is built for biscuit plants that sell small,
            low-price packs in very large numbers. Typical buyers include
            biscuit and cookie makers in Faridabad, Sonipat and Bahadurgarh
            supplying ₹5 packs to kirana stores, bakeries producing 2-piece
            packs for hotels and schools, and FMCG brands that need a
            dedicated high-speed wrapper at the end of an oven line.
          </p>
        </div>

        {/* Buyer's Checklist */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Buyer&apos;s Checklist Before You Order
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {buyersChecklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed">
            A proven high speed flow wrap machine manufacturer will match
            the JAT-310 to your line before dispatch.
          </p>
        </div>

        {/* Get a Quote */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Get a Quote From a Leading Horizontal Flow Wrap Pillow Pack High
            Speed Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            Tell us your biscuit size, pack format and target output.
            Contact our team through the{" "}
            <Link
              href="/contact-us"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>{" "}
            for a detailed quote. Choose Jawla Advance Technology, the
            horizontal flow wrap pillow pack high speed packaging machine
            manufacturer that biscuit brands across Faridabad and Delhi NCR
            trust.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-2">
          <h2 className="text-[#BB2426] text-xl font-bold mb-4">FAQs</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-1">
                <p className="font-bold text-gray-800">{faq.question}</p>
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
