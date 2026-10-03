import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/ffs-half-pneumatic-packaging-machine" },
  title: "Buy FFS Half Pneumatic Packaging Machine | Jawla Advance Technology",
  description:
    "Half pneumatic packaging machine manufacturer in Faridabad & Delhi NCR. JAT-304 packs 2–300 g at up to 60 pouches/min. Training included.",
  keywords: [
    "half pneumatic packaging machine",
    "half pneumatic packaging machine manufacturer",
    "half pneumatic packaging machine manufacturer In Faridabad",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://www.jawlaadvancetechnology.com/ffs-half-pneumatic-packaging-machine#product",
      name: "FFS Half Pneumatic Packaging Machine (JAT-304)",
      model: "JAT-304",
      sku: "JAT-304",
      category: "Half Pneumatic Packaging Machine",
      image:
        "https://www.jawlaadvancetechnology.com/PRODUCTS/ffs-half-pneumatic-packaging-machine/p1.png",
      description:
        "Half pneumatic FFS packaging machine by a Faridabad manufacturer. 2 g to 300 g, up to 60 pouches per minute, cup filler, centre seal.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: {
        "@id": "https://www.jawlaadvancetechnology.com/#organization",
      },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Pack Size", value: "2 g to 300 g" },
        {
          "@type": "PropertyValue",
          name: "Output",
          value: "Up to 60 pouches per minute",
        },
        {
          "@type": "PropertyValue",
          name: "Filling System",
          value: "Volumetric cup filler",
        },
        { "@type": "PropertyValue", name: "Seal Type", value: "Centre seal" },
      ],
    },
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
          name: "Half Pneumatic Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/ffs-half-pneumatic-packaging-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a half pneumatic packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A half pneumatic packaging machine uses compressed air for part of its movement, usually sealing, while the rest runs mechanically. This gives firm, even sealing pressure at a lower cost than a fully automatic line. Jawla Advance Technology's JAT-304 uses this design for spice, tea and namkeen pouches.",
          },
        },
        {
          "@type": "Question",
          name: "What is a half pneumatic packaging machine used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is used to pack granular and powder products such as masala, spices, tea, coffee, namkeen, pulses and detergent into airtight pouches. Jawla Advance Technology's JAT-304 is mainly bought by small and medium food units moving from hand packing to machine packing.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a half pneumatic packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology JAT-304 half pneumatic packaging machine is priced based on pack range and accessories. It is one of the most affordable ways to start automatic pouch packing. Contact the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "What pouch sizes can the JAT-304 fill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-304 fills pouches from 2 g to 300 g using a volumetric cup system. You adjust or change the cups to change pack weight, so one machine can handle small sachets and larger retail pouches of spices, tea or namkeen.",
          },
        },
        {
          "@type": "Question",
          name: "How many pouches per minute does the JAT-304 produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-304 produces up to 60 pouches per minute. That is roughly 3,600 pouches an hour, many times faster than manual weighing and sealing, while giving every pouch the same weight and seal quality.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an air compressor for a half pneumatic machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A half pneumatic machine needs a compressed air supply to operate its sealing system. Jawla Advance Technology advises on the right compressor size and air line setup during installation so the machine seals consistently and runs smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JAT-304 easy for first-time buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The JAT-304 is simple to run, and Jawla Advance Technology provides complete in-house training on operation, cleaning, maintenance and troubleshooting. Most operators become comfortable within a few days, even if they have never used a packaging machine before.",
          },
        },
        {
          "@type": "Question",
          name: "Is a half pneumatic machine the same as a semi automatic machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mostly yes. A half pneumatic machine is a type of semi automatic machine, because part of the cycle is air-driven and some steps depend on the operator. It sits between manual packing and a fully automatic FFS machine in cost and output.",
          },
        },
        {
          "@type": "Question",
          name: "Can I upgrade from the JAT-304 to a fully automatic machine later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Jawla Advance Technology customers start with the JAT-304 and add a fully automatic machine such as the Normal FFS JAT-301 or FFS High Speed JAT-302 when orders grow. The controls are familiar, so operators adapt quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best half pneumatic packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best half pneumatic packaging machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-304 in-house, lets buyers test their own product before ordering, and provides installation, full operator training, genuine spares and fast local service.",
          },
        },
      ],
    },
  ],
};

const keySpecs = [
  { feature: "Pack size", value: "2 g to 300 g" },
  { feature: "Output", value: "Up to 60 pouches per minute" },
  { feature: "Filling system", value: "Volumetric cup filler" },
  { feature: "Sealing", value: "Centre seal, airtight and leak-proof" },
  {
    feature: "Build",
    value: "Non-corrosive parts with powder-coated finish",
  },
  { feature: "Operation", value: "Half pneumatic (semi-automatic)" },
];

const packableProducts = [
  "Masala and spice powders",
  "Tea and coffee",
  "Namkeen and small snacks",
  "Detergent and washing powder",
  "Pulses, daal and other granules",
  "Edible food items that flow freely",
];

const featuresBenefits = [
  "Wide pack range: one machine covers 2 g sachets to 300 g pouches.",
  "Consistent weight: cup filling delivers accurate, repeatable quantity.",
  "Freshness locked in: the centre seal keeps moisture out and aroma in.",
  "Zero-leak packs: strong seals stop powder leaking during transport.",
  "Long life: non-corrosive parts and powder coating resist dust and harsh conditions.",
  "Cost-effective output: up to 60 pouches per minute cuts manual labour sharply.",
];

const whoShouldBuy = [
  "Spice and masala brands starting automatic packing",
  "Tea and coffee packers serving local and regional markets",
  "Namkeen and detergent units with moderate daily volumes",
  "First-time machine buyers who want easy operation and full training",
];

const whyChooseReasons = [
  "Training is included. We give complete in-house training on operation, maintenance and troubleshooting, which is ideal for first-time buyers.",
  "You can test first. Bring your product to our factory and see the pouches it makes.",
  "Service is close by. Our engineers cover Faridabad, Delhi, Gurugram, Noida, Ghaziabad and Palwal.",
  "Spares are in stock. Sealing jaws, cups and heaters are available quickly.",
];

const gettingStartedSteps = [
  "We deliver the machine to your unit.",
  "Our engineers install it and connect power and air supply.",
  "We set cups and sealing for your product and pack size.",
  "Your operators are trained on daily running and cleaning.",
  "Production starts, with our service team available for support.",
];

const maintenanceTips = [
  "Drain moisture from the air line regularly.",
  "Clean the hopper and cups after each shift.",
  "Wipe sealing jaws to keep seals clean.",
  "Check pneumatic fittings for leaks during routine service.",
];

const buyersChecklist = [
  "Air supply: plan a suitable air compressor and dry air line for the pneumatic system.",
  "Pack range: confirm every pouch weight you sell falls within 2 g to 300 g.",
  "Product flow: cup filling works best for free-flowing products, so test sticky powders first.",
  "Film quality: use good heat-sealable laminate for a reliable centre seal.",
  "Training: make sure at least two staff are trained on running and cleaning.",
  "Upgrade path: ask how easily you can add a fully automatic model later.",
];

const faqs = jsonLd["@graph"][2].mainEntity.map((item, index) => ({
  question: `${index + 1}. ${item.name}`,
  answer: item.acceptedAnswer.text,
}));

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"FFS Half Pneumatic Packaging Machine"}
          image={"/PRODUCTS/ffs-half-pneumatic-packaging-machine/top.png"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-half-pneumatic-packaging-machine/p1.png"}
          sampleImage={"/PRODUCTS/ffs-half-pneumatic-packaging-machine/p2.png"}
          productTitle={"FFS Half Pneumatic Packaging Machine (JAT-304)"}
          productDescription={
            "Spices, Namkeen, Tea, Coffee, Heena, Powder, All granular & Detergent"
          }
          productTagline={
            "Granule Packing Machine- Locks the Freshness and maintains Zero Leakage"
          }
        />
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 font-sans space-y-10">
        {/* H1 + Quick Answer */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">Best Half Pneumatic Packaging Machine Manufacturer - Jawla Advance Technology</h1>
          <p className="leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a half pneumatic packaging
            machine manufacturer in Faridabad, Delhi NCR. Its JAT-304 packs
            masala, spices, tea, coffee, namkeen and detergent in 2 g to 300
            g pouches at up to 60 pouches per minute, with an airtight centre
            seal and full operator training included.
          </p>
          <p className="leading-relaxed">
            Jawla Advance Technology LLP is a half pneumatic packaging
            machine manufacturer in Faridabad and Delhi NCR. Our FFS Half
            Pneumatic Packaging Machine (JAT-304) packs masala, spices, tea,
            coffee, namkeen, detergent and other granular products in
            pouches from 2 g to 300 g. With cup filling at up to 60 pouches
            per minute and a strong centre seal, it gives small and medium
            units airtight, leak-free packs at a budget-friendly price.
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
                  <th className="p-3 font-bold text-black w-1/2">JAT-304</th>
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

        {/* What Is a Half Pneumatic Packaging Machine */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            What Is a Half Pneumatic Packaging Machine?
          </h2>
          <p className="leading-relaxed">
            A half pneumatic machine uses compressed air (pneumatics) for
            part of its movement, such as operating the sealing or cutting
            jaws, while the rest runs mechanically. Pneumatic action gives
            firm, even sealing pressure, which is important for airtight
            pouches of spice powders. Because only part of the system is
            pneumatic, the machine stays simpler and more affordable than a
            fully automatic line.
          </p>
        </div>

        {/* Products You Can Pack */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Products You Can Pack
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {packableProducts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
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

        {/* Who Should Buy the JAT-304 */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Should Buy the JAT-304?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {whoShouldBuy.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Why Choose Jawla Advance Technology */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Why Choose Jawla Advance Technology as Your Half Pneumatic
            Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            Our team of skilled machinists builds each JAT-304 at our
            factory in Sarurpur Industrial Area, Ballabgarh, Faridabad. As a
            half pneumatic packaging machine manufacturer focused on food
            packaging, we aim for three results: airtight sealing, maximum
            freshness and zero leakage.
          </p>
          <p className="leading-relaxed">
            Buyers across Delhi NCR choose us because:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Half Pneumatic vs Fully Automatic */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Half Pneumatic vs Fully Automatic
          </h2>
          <p className="leading-relaxed">
            The JAT-304 is perfect for small to medium output. If your
            orders grow beyond 60 pouches per minute, our fully automatic
            range, including the{" "}
            <Link
              href="/normal-ffs-packaging-machine-jat-301"
              className="text-[#E13538] font-bold hover:underline"
            >
              Normal FFS (JAT-301)
            </Link>{" "}
            and{" "}
            <Link
              href="/ffs-high-speed-packaging-machine"
              className="text-[#E13538] font-bold hover:underline"
            >
              FFS High Speed (JAT-302)
            </Link>
            , offers higher speeds. Many customers start with the JAT-304 and
            add a fully automatic machine later.
          </p>
        </div>

        {/* Installation and Getting Started */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Installation and Getting Started
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {gettingStartedSteps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Maintenance Tips */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Maintenance Tips
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {maintenanceTips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Who Uses the JAT-304 */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Uses the JAT-304 in Faridabad and Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The JAT-304 is popular with first-time machine buyers. Typical
            users include small masala grinders in Faridabad and Ballabgarh,
            tea packers supplying local markets in Delhi, namkeen makers in
            Ghaziabad, and detergent units in Palwal and Sonipat. Most of
            them pack a few thousand pouches a day, want to stop
            hand-sealing, and need a machine their existing staff can learn
            quickly.
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
            An experienced half pneumatic packaging machine manufacturer
            will help you plan all of this before delivery.
          </p>
        </div>

        {/* Get a Quote */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Get a Quote From a Trusted Half Pneumatic Packaging Machine
            Manufacturer
          </h2>
          <p className="leading-relaxed">
            Share your product, pack weights and daily target, and we will
            send the right configuration and price. Contact our team through
            the{" "}
            <Link
              href="/contact-us"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>
            . Jawla Advance Technology is the half pneumatic packaging
            machine manufacturer that spice, tea and namkeen units across
            Faridabad and Delhi NCR trust.
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
