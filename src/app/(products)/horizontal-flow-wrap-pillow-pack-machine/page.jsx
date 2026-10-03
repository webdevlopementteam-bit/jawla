import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/horizontal-flow-wrap-pillow-pack-machine" },
  title: "Best Horizontal Flow Wrap Pillow Pack Machine Manufacturer | Jawla Advance Technology",
  description:
    "Horizontal flow wrap pillow pack machine manufacturer in Faridabad & Delhi NCR. JAT-308 wraps biscuits, noodles, cakes & parts. Enquire now.",
  keywords: [
    "horizontal flow wrap pillow pack machine",
    "horizontal flow wrap pillow pack machine manufacturer",
    "horizontal flow wrap pillow pack machine manufacturer In Faridabad",
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
          name: "Horizontal Flow Wrap Pillow Pack Machine",
          item: "https://www.jawlaadvancetechnology.com/horizontal-flow-wrap-pillow-pack-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a horizontal flow wrap pillow pack machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A horizontal flow wrap pillow pack machine wraps solid products in a tube of film, sealing along the bottom and at both ends to form a pillow-shaped pack. Products move on a horizontal conveyor and are never dropped. Jawla Advance Technology's JAT-308 uses this method for food and non-food items.",
          },
        },
        {
          "@type": "Question",
          name: "Which products can the JAT-308 pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-308 packs biscuits, cookies, rusk, chocolate bars, noodles, cakes, gur, scotch bars, towels, gauze, bearings, cycle tubes, electronic items and tray pack products. It suits almost any solid item that fits its film width.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a flow wrap pillow pack machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology JAT-308 flow wrap pillow pack machine is priced based on product size, feeding system and accessories. Share your product dimensions with the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "What is the production speed of the JAT-308?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-308 speed depends on product length, pack style and film. For very high-volume 2 or 4 biscuit packs, Jawla Advance Technology's JAT-310 high speed model runs at up to 300 packs per minute.",
          },
        },
        {
          "@type": "Question",
          name: "Can the JAT-308 make family packs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Besides single pillow packs, the JAT-308 can wrap several items together as family or combo packs, and can also wrap products placed in trays. This flexibility makes it useful for bakeries and FMCG units with varied pack formats.",
          },
        },
        {
          "@type": "Question",
          name: "What film does a flow wrap machine use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-308 uses heat-sealable laminated roll film up to 550 mm wide. Continuous sealing creates leak-proof, tamper-resistant packs that protect products from moisture, dust and damage during storage and transport.",
          },
        },
        {
          "@type": "Question",
          name: "Can one flow wrap machine pack both food and non-food items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The JAT-308 is used for food items like biscuits and noodles and for non-food items like towels, bearings and electronic parts. Changing pack length and settings for a new product is done on the control panel.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between vertical FFS and horizontal flow wrap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vertical FFS machines drop loose powders, granules or liquids into a pouch. Horizontal flow wrap machines carry solid items along a conveyor and wrap them without dropping, which protects fragile or shaped products like biscuits and bars.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best horizontal flow wrap pillow pack machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best horizontal flow wrap pillow pack machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-308 in-house, lets buyers test their own products before ordering, and provides installation, operator training, genuine spares and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology provide installation and training for the JAT-308?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology installs the machine, sets it up for your product sizes and film, trains your operators on sealing and changeovers, and provides preventive maintenance, breakdown support and spares across Delhi NCR.",
          },
        },
      ],
    },
  ],
};

const keySpecs = [
  { feature: "Pack style", value: "Pillow pack, family pack, tray pack" },
  {
    feature: "Film",
    value: "Heat-sealable laminated roll film up to 550 mm wide",
  },
  {
    feature: "Sealing",
    value: "Continuous sealing, leak-proof and tamper-resistant",
  },
  { feature: "Body", value: "Powder-coated main body" },
  { feature: "Contact parts", value: "High-grade stainless steel" },
];

const packableProducts = [
  "Biscuits, cookies and rusk",
  "Chocolate bars and confectionery",
  "Noodles and instant noodle packs",
  "Cakes and bakery products",
  "Gur and scotch bars",
  "Towels, gauze and sanitary products",
  "Bearings, cycle tubes and small industrial parts",
  "Electronic items and tray pack products",
];

const featuresBenefits = [
  "Versatile: one machine wraps food and non-food items of many sizes.",
  "Attractive packs: neat pillow packs improve shelf appeal and brand value.",
  "Strong seals: continuous sealing gives leak-proof, tamper-resistant packs.",
  "Hygienic build: stainless steel contact parts and a powder-coated body.",
  "Handles humidity and dust: built for continuous industrial use.",
  "Low vibration: a solid design keeps operation stable.",
  "Simple controls: operators adjust pack length and speed easily.",
  "Low maintenance: regular cleaning and routine service are enough.",
];

const whyChooseReasons = [
  "They can see the machine wrap their own product before buying.",
  "Our engineers install the machine and set it up for their pack sizes.",
  "Operators receive full training on film loading, sealing and changeovers.",
  "Spare parts and quick service are available across Faridabad, Delhi, Gurugram, Noida and Ghaziabad.",
  "We also serve customers across India and export to international markets.",
];

const maintenanceTips = [
  "Clean the infeed conveyor and sealing jaws daily.",
  "Match sealing temperature to your film type.",
  "Check film alignment to avoid wrinkles.",
  "Follow the lubrication schedule for moving parts.",
];

const buyersChecklist = [
  "Product size: share the length, width and height of your largest and smallest items.",
  "Pack style: decide between single pillow packs, family packs or tray packs.",
  "Film width: confirm your laminate fits the 550 mm maximum.",
  "Real speed: ask for a trial with your product to see actual packs per minute.",
  "Feeding: check whether manual or automatic infeed suits your line.",
  "Service: confirm quick engineer support and spare jaws in Delhi NCR.",
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
          title={"Horizontal Flow Wrap Pillow Pack Machine"}
          image={"/PRODUCTS/horizontal-flow-wrap-pillow-pack-machine/top.png"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/horizontal-flow-wrap-pillow-pack-machine/p1.png"
          }
          sampleImage={
            "/PRODUCTS/horizontal-flow-wrap-pillow-pack-machine/p2.png"
          }
          productTitle={"Horizontal Flow Wrap Pillow Pack Machine (JAT-308)"}
          productDescription={
            "Biscuit, Chocolate Bar, Noodles, Cycle Tube, Gauze, Bearing, Maggi, Sataining Towels, Scotch Bar, Gur, Cake, Tray Pack items & Electronic items etc."
          }
          productTagline={"Pillow packs the small Items with Great Care"}
        />
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 font-sans space-y-10">
        {/* H1 + Quick Answer */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-1">Best Horizontal Flow Wrap Pillow Pack Machine Manufacturer - Jawla Advance Technology</h1>
          <p className="leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a horizontal flow wrap pillow
            pack machine manufacturer in Faridabad, Delhi NCR. Its JAT-308
            wraps biscuits, chocolate bars, noodles, cakes, gur, towels,
            bearings and electronic parts into sealed pillow packs, using
            laminated film up to 550 mm wide and stainless steel contact
            parts.
          </p>
          <p className="leading-relaxed">
            Jawla Advance Technology LLP is a horizontal flow wrap pillow
            pack machine manufacturer in Faridabad and Delhi NCR. Our
            JAT-308 wraps solid products such as biscuits, chocolate bars,
            noodles, cakes, rusk, gur, towels, bearings and electronic parts
            into neat, sealed pillow packs. It is a versatile machine for
            food, FMCG, pharmaceutical and industrial units that need
            attractive, hygienic packs at a steady speed.
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
                  <th className="p-3 font-bold text-black w-1/2">JAT-308</th>
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

        {/* How a Horizontal Flow Wrap Machine Works */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            How a Horizontal Flow Wrap Machine Works
          </h2>
          <p className="leading-relaxed">
            Products travel along a horizontal infeed conveyor into a film
            tube formed from a single roll. A fin seal runs along the bottom
            of the pack, and rotary end-seal jaws close and cut each end. The
            result is the familiar pillow pack seen on biscuits, chocolate
            bars and noodles. Because products move horizontally and are
            never dropped, flow wrapping is gentle on fragile items and
            suits both single pieces and multi-piece family packs.
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
          <p className="leading-relaxed pt-2">
            Its flexible setup also lets it work as a family pack machine
            for bulk and combo packs.
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
            Why Choose Jawla Advance Technology as Your Horizontal Flow Wrap
            Pillow Pack Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            As a horizontal flow wrap pillow pack machine manufacturer with
            its own factory in Ballabgarh, Faridabad, we design, build and
            test every JAT-308 in-house. Bakery, FMCG and industrial units
            across Delhi NCR choose us because:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Choosing Between Our Flow Wrap Models */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Choosing Between Our Flow Wrap Models
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-black">
                JAT-308 Flow Wrap Pillow Pack Machine:
              </span>{" "}
              versatile, for many product types and sizes.
            </li>
            <li>
              <Link
                href="/hotel-pack-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-309 Hotel Pack Machine:
              </Link>{" "}
              pillow and tray packs for bakery and HoReCa items, up to 80
              packs per minute.
            </li>
            <li>
              <Link
                href="/horizontal-flow-wrap-pillow-pack-high-speed-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                JAT-310 High Speed Flow Wrap Machine:
              </Link>{" "}
              automatic feeding for 2 or 4 biscuit packs at up to 300 packs
              per minute.
            </li>
          </ul>
          <p className="leading-relaxed">
            Our team will recommend the right model after understanding your
            product and output target.
          </p>
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

        {/* Who Uses the JAT-308 */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Uses the JAT-308 in Faridabad and Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The JAT-308 suits units that wrap solid items of many shapes.
            Typical buyers include bakeries and biscuit makers in Faridabad
            and Delhi, gur and chikki producers, instant noodle packers,
            hospital and hygiene product suppliers packing gauze and towels,
            and auto and electrical component makers in Faridabad and
            Gurugram who pillow-pack bearings and small parts for dispatch.
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
            An experienced horizontal flow wrap pillow pack machine
            manufacturer will set up and test the machine for your exact
            products.
          </p>
        </div>

        {/* Get a Quote */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Get a Quote From a Trusted Horizontal Flow Wrap Pillow Pack
            Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            Share your product dimensions, pack style and daily target.
            Contact our team through the{" "}
            <Link
              href="/contact-us"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>{" "}
            for a detailed quote. Choose Jawla Advance Technology, the
            horizontal flow wrap pillow pack machine manufacturer that
            businesses across Faridabad and Delhi NCR trust.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-2">
          <h2 className="text-[#BB2426] text-xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

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
