import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: {
    canonical: "/fully-automatic-multi-head-weighing-packaging-machine-jat-306",
  },
  title: "Buy Fully Automatic Multi-Head Weighing Packaging Machine In Faridabad",
  description:
    "Fully automatic multi-head weighing packaging machine manufacturer in Faridabad & Delhi NCR. 100 g–1 kg, 40–400 packs/min. Request quote.",
  keywords: [
    "fully automatic multi-head weighing packaging machine",
    "fully automatic multi-head weighing packaging machine manufacturer",
    "fully automatic multi-head weighing packaging machine manufacturer In Faridabad",
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
          name: "Multi-Head Weighing Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/fully-automatic-multi-head-weighing-packaging-machine-jat-306",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a multi-head weighing packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A multi-head weighing packaging machine uses several small weigh buckets to measure product, picks the combination closest to the target weight, and drops it into a form fill seal packer. Jawla Advance Technology's JAT-306 does this automatically for 100 g to 1 kg pouches.",
          },
        },
        {
          "@type": "Question",
          name: "How does a multi-head weigher achieve such high accuracy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each bucket holds a portion of product and is weighed separately. In a fraction of a second, the controller checks many bucket combinations and releases the one closest to your target. This is far more accurate than cups or augers for irregular products like chips and cashews.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a multi-head weighing packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology JAT-306 is priced based on the number of heads, pack range and accessories. Because it cuts giveaway, many buyers recover part of the cost through saved product. Contact the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "Which products can the JAT-306 pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-306 packs chips, namkeen, bhujia, puffs, dry fruits like cashews, almonds, raisins and peanuts, seeds, grains, whole spices and fresh or processed vegetables. It is ideal for irregular, fragile or high-value products.",
          },
        },
        {
          "@type": "Question",
          name: "What pouch sizes and speed does the JAT-306 offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-306 packs 100 g to 1 kg pouches at 40 to 400 packets per minute, depending on product type and pouch size. Light snacks in small packs run faster, while heavy 1 kg packs run at the lower end.",
          },
        },
        {
          "@type": "Question",
          name: "What power supply does a multi-head weighing machine need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology's JAT-306 runs on a 1 HP three-phase servo motor with a quick AC speed control unit. Plan a stable three-phase connection at your site. Exact total load depends on configuration, so confirm with Jawla Advance Technology before installation.",
          },
        },
        {
          "@type": "Question",
          name: "Is a multi-head weigher better than a cup filler?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the product. For irregular or fragile items like chips, namkeen and cashews, a multi-head weigher is far more accurate. For uniform, free-flowing items like rice or pulses, a cup filler such as the JAT-314 is simpler and more economical.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JAT-306 suitable for chips and namkeen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Chips and namkeen are light, irregular and fragile, which makes volume filling inaccurate. Multi-head weighing handles them gently and hits the target weight closely, so it is the preferred method for snack brands.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best fully automatic multi-head weighing packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best fully automatic multi-head weighing packaging machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-306 in-house, runs weighing trials with your own product, and provides installation, calibration, operator training and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology install and calibrate the JAT-306?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology's engineers install the JAT-306, calibrate the weigher for your product and pack weights, and train operators on settings, changeovers and cleaning. Preventive maintenance, breakdown support and spares are available across Delhi NCR.",
          },
        },
      ],
    },
  ],
};

const keySpecs = [
  { feature: "Pack size", value: "100 g to 1 kg" },
  {
    feature: "Output",
    value: "40 to 400 packets per minute (product dependent)",
  },
  { feature: "Weighing", value: "Multi-head combination weigher" },
  { feature: "Maximum film width", value: "700 mm" },
  { feature: "Sealing", value: "Centre seal, leak-proof" },
  { feature: "Film draw", value: "Clutch-brake mechanism" },
  { feature: "Speed control", value: "Quick AC speed control unit" },
  { feature: "Motor", value: "1 HP three-phase servo motor (Crompton)" },
  {
    feature: "Body",
    value: "Powder coated against moisture, dust and stress",
  },
  { feature: "Film", value: "Heat-sealable laminated roll film" },
];

const packableProducts = [
  "Snacks: chips, namkeen, bhujia, puffs and extruded snacks",
  "Dry fruits: cashews, almonds, raisins and peanuts",
  "Seeds and grains: seeds, rice, pulses and similar products",
  "Spices: whole spices and free-flowing spice products",
  "Vegetables: fresh and processed vegetables",
];

const businessBenefits = [
  "Accurate weight: combination weighing hits the target weight on every pack, which cuts costly giveaway.",
  "High output: up to 400 packets per minute depending on the product.",
  "Retail and bulk packs: one machine handles 100 g to 1 kg.",
  "Hygienic packing: automatic handling reduces human contact with food.",
  "Better shelf life: laminated film and strong seals block moisture and air.",
  "Attractive packs: uniform pouches look professional in modern retail.",
];

const whyChooseReasons = [
  "They can run trials with their own snacks or dry fruits at our factory.",
  "Our engineers install the machine and calibrate the weigher for their product.",
  "Operators receive complete training on settings, changeovers and cleaning.",
  "Spare parts and service support are available locally.",
  "We also supply food processors across India and export to international buyers.",
];

const buyersChecklist = [
  "Product type: confirm your product is irregular or fragile, where multi-head weighing gives real value.",
  "Target weights: list every pack weight from 100 g to 1 kg you need.",
  "Accuracy trial: ask for a weighing test with your own product and check the variation.",
  "Power: plan a three-phase supply for the 1 HP servo motor.",
  "Film width: check your laminate fits the 700 mm maximum.",
  "Calibration support: confirm the weigher will be calibrated on site.",
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
          title={"Fully Automatic Multi-head Weighing and Packaging Machine"}
          image={
            "/PRODUCTS/fully-automatic-multi-head-weighing-packaging-machine-jat-306/top.png"
          }
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/fully-automatic-multi-head-weighing-packaging-machine-jat-306/p1.png"
          }
          sampleImage={
            "/PRODUCTS/fully-automatic-multi-head-weighing-packaging-machine-jat-306/p2.png"
          }
          productTitle={
            "Fully Automatic Multi-head Weighing, Packaging Machine (JAT-306)"
          }
          productDescription={
            " Chips, Dry Fruits, Namkeen, Spices, Seeds, Vegetables etc."
          }
          productTagline={"Precisely Weighing and Packing the Products"}
        />
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 font-sans space-y-10">
        {/* H1 + Quick Answer */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">Top Fully Automatic Multi-Head Weighing Packaging Machine Manufacturer</h1>
          <p className="leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a fully automatic multi-head
            weighing packaging machine manufacturer in Faridabad, Delhi NCR.
            Its JAT-306 weighs and packs chips, namkeen, dry fruits, seeds,
            spices and vegetables in 100 g to 1 kg pouches at 40 to 400
            packets per minute, with very low product giveaway.
          </p>
          <p className="leading-relaxed">
            Jawla Advance Technology LLP is a fully automatic multi-head
            weighing packaging machine manufacturer in Faridabad and Delhi
            NCR. Our JAT-306 weighs and packs chips, dry fruits, namkeen,
            spices, seeds and vegetables into pouches from 100 g to 1 kg at
            40 to 400 packets per minute. It combines precise multi-head
            weighing with a vertical form fill seal packer, giving you
            accurate retail packs with very little product giveaway.
          </p>
        </div>

        {/* Key Specifications */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Key Specifications
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse text-base text-gray-700">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 font-bold text-black border-r border-gray-200 w-1/2">
                    Feature
                  </th>
                  <th className="p-3 font-bold text-black w-1/2">JAT-306</th>
                </tr>
              </thead>
              <tbody>
                {keySpecs.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0">
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

        {/* What Is a Multi-Head Weighing Packaging Machine */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            What Is a Multi-Head Weighing Packaging Machine?
          </h2>
          <p className="leading-relaxed">
            A multi-head weigher has several small weigh buckets arranged in
            a circle. Each bucket holds a part of the product. The
            controller instantly checks different combinations of buckets
            and releases the one closest to your target weight. This is why
            multi-head machines are so accurate for irregular products like
            chips, cashews and namkeen, where cups or augers cannot measure
            well. The weighed product then drops into the FFS packer, which
            forms, fills and seals the pouch.
          </p>
        </div>

        {/* Products You Can Pack */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Products You Can Pack
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {packableProducts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed pt-2">
            The JAT-306 also works as a dedicated dry fruit packing machine
            and seeds packing machine.
          </p>
        </div>

        {/* Benefits for Your Business */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Benefits for Your Business
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {businessBenefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Built for Continuous Production */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Built for Continuous Production
          </h2>
          <p className="leading-relaxed">
            The JAT-306 uses a clutch-brake film draw mechanism and a quick
            AC speed control unit, so film moves smoothly even at high
            speeds. The 1 HP three-phase servo motor gives consistent
            performance with low power consumption. A powder-coated body
            protects against moisture, dust and sudden operational stress,
            and a robust structure keeps vibration low through long shifts.
          </p>
        </div>

        {/* Why Choose Jawla Advance Technology */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Why Choose Jawla Advance Technology as Your Multi-Head Weighing
            Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            As a multi-head weighing packaging machine manufacturer based in
            Ballabgarh, Faridabad, we build and test every machine in-house.
            Food brands across Delhi NCR choose us because:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Multi-Head Weigher or Cup Filler */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Multi-Head Weigher or Cup Filler?
          </h2>
          <p className="leading-relaxed">
            For free-flowing, uniform products like rice or pulses, our{" "}
            <Link
              href="/collar-type-cup-filler-packaging-machine"
              className="text-[#E13538] font-bold hover:underline"
            >
              Collar Type Cup Filler (JAT-314)
            </Link>{" "}
            is a cost-effective choice. For irregular or fragile products
            like chips and cashews, or when every gram of giveaway matters,
            the multi-head weigher gives far better accuracy. Our team will
            compare both for your product.
          </p>
        </div>

        {/* Who Uses the JAT-306 */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Who Uses the JAT-306 in Faridabad and Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The JAT-306 is chosen by food brands where every gram counts.
            Typical buyers include namkeen and chips makers in Delhi and
            Ghaziabad, dry fruit packers in Old Delhi and Faridabad
            supplying modern retail and gifting, seed companies in Sonipat
            and Palwal, and frozen or fresh vegetable packers serving
            supermarkets. For these products, a small overfill on every pack
            quickly becomes a large monthly loss.
          </p>
        </div>

        {/* Buyer's Checklist */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Buyer&apos;s Checklist Before You Order
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {buyersChecklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed">
            A serious multi-head weighing packaging machine manufacturer
            will prove accuracy with your product before you buy.
          </p>
        </div>

        {/* Get a Quote */}
        <div className="space-y-3">
          <h2 className="text-[#E13538] text-xl font-bold mb-3">
            Get a Quote From a Trusted Fully Automatic Multi-Head Weighing
            Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            Share your product, pack weights and daily target. Contact our
            team through the{" "}
            <Link
              href="/contact-us"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>{" "}
            for a detailed quote. Choose Jawla Advance Technology, the
            multi-head weighing packaging machine manufacturer that snack
            and dry fruit brands across Faridabad and Delhi NCR rely on.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-2">
          <h2 className="text-[#E13538] text-xl font-bold mb-4">FAQs</h2>

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
