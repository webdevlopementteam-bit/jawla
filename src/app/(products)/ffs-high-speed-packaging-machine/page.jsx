import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/ffs-high-speed-packaging-machine" },
  title: "Top FFS High Speed Packaging Machine | Jawla Advance Technology",
  description:
    "FFS high speed packaging machine manufacturer in Faridabad & Delhi NCR. JAT-302 makes 100–450 pouches/min, 2–100 g, single phase. Get quote.",
  keywords: [
    "FFS high speed packaging machine",
    "FFS high speed packaging machine manufacturer",
    "FFS high speed packaging machine manufacturer in Faridabad",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://www.jawlaadvancetechnology.com/ffs-high-speed-packaging-machine#product",
      name: "FFS High Speed Packaging Machine (JAT-302)",
      model: "JAT-302",
      sku: "JAT-302",
      category: "FFS Packaging Machine",
      image:
        "https://www.jawlaadvancetechnology.com/PRODUCTS/ffs-high-speed-packaging-machine/p1.png",
      description:
        "FFS high speed packaging machine by a Faridabad manufacturer. 2 g to 100 g, 100 to 450 pouches per minute, single phase, 1/2 HP motor, 200 mm film.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: {
        "@id": "https://www.jawlaadvancetechnology.com/#organization",
      },
      weight: { "@type": "QuantitativeValue", value: 700, unitCode: "KGM" },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Filling Capacity",
          value: "2 g to 100 g (up to 200 g granules)",
        },
        {
          "@type": "PropertyValue",
          name: "Production Speed",
          value: "100 to 450 pouches per minute",
        },
        {
          "@type": "PropertyValue",
          name: "Power",
          value: "Single phase, 1/2 HP",
        },
        {
          "@type": "PropertyValue",
          name: "Maximum Roll Width",
          value: "200 mm",
        },
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
          name: "FFS High Speed Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/ffs-high-speed-packaging-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an FFS high speed packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An FFS high speed packaging machine is an automatic form fill seal machine built for small sachets in large volumes. It forms pouches from roll film, fills and seals them continuously. Jawla Advance Technology's JAT-302 produces 100 to 450 pouches per minute for 2 g to 100 g packs.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an FFS high speed packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology JAT-302 FFS high speed packaging machine is priced based on pouch size, seal style and accessories. Share your product and sachet weight with the Faridabad team to get an exact, configuration-based quote.",
          },
        },
        {
          "@type": "Question",
          name: "How many pouches per minute can the JAT-302 make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-302 makes 100 to 450 pouches per minute. Very small, light sachets such as mouth freshener run near the top speed, while heavier or slower-flowing products run lower. That can mean up to about 27,000 sachets an hour from one machine.",
          },
        },
        {
          "@type": "Question",
          name: "Which products is the JAT-302 best for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-302 is best for small sachets of pan masala, mouth freshener, spices, masala, tea, coffee, namkeen, heena, powders, granules and detergent. It is ideal when you sell 1 to 10 rupee packs and need very high daily output.",
          },
        },
        {
          "@type": "Question",
          name: "What pack sizes can an FFS high speed machine fill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology's FFS high speed machine fills 2 g to 100 g per pouch, and up to 200 g for granular products. For larger retail packs of 100 g to 1 kg, the Collar Type Cup Filler JAT-314 or the Multi-Head Weigher JAT-306 is a better fit.",
          },
        },
        {
          "@type": "Question",
          name: "Does the JAT-302 need three-phase power?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The JAT-302 runs on single-phase power with a 1/2 HP motor, which keeps electricity costs low and makes installation easy even in small units. Jawla Advance Technology still recommends checking voltage stability before installation for smooth high-speed running.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between high speed FFS and normal FFS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High speed FFS (JAT-302) runs at 100 to 450 pouches per minute for 2 g to 100 g sachets. Normal FFS (JAT-301) runs at 30 to 80 pouches per minute but covers 2 g to 200 g and costs less. Pick based on sachet size and daily volume.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JAT-302 good for a pan masala or mouth freshener business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Pan masala and mouth freshener brands sell huge numbers of tiny sachets, and the JAT-302 is designed exactly for that. Its leak-proof heat seals keep aroma locked in, and its high speed lets one line meet large distributor orders.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best FFS high speed packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best FFS high speed packaging machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-302 in-house, lets buyers test their own sachets before ordering, and provides installation, operator training, genuine spares and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "What support do I get after buying the JAT-302?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology installs and commissions the JAT-302, trains your operators on speed settings, film loading and cleaning, and provides preventive maintenance, breakdown visits and genuine spares. Remote support is available for buyers outside Delhi NCR and for export customers.",
          },
        },
      ],
    },
  ],
};

const techSpecs = [
  {
    feature: "Filling capacity",
    spec: "2 g to 100 g (up to 200 g for granules)",
  },
  { feature: "Production speed", spec: "100 to 450 pouches per minute" },
  { feature: "Power requirement", spec: "Single phase" },
  { feature: "Motor", spec: "1/2 HP" },
  { feature: "Machine weight", spec: "About 700 kg" },
  { feature: "Film", spec: "Heat-sealable laminated roll film" },
  { feature: "Maximum roll width", spec: "200 mm" },
  { feature: "Operation", spec: "Fully automatic" },
  { feature: "Sealing", spec: "Heat seal, leak-proof" },
];

const fitsBestList = [
  "Pan masala packing machine",
  "Mouth freshener packing machine",
  "Spice and masala sachet machine",
  "Tea and coffee sachet machine",
  "Namkeen and granule packing machine",
  "Heena and detergent powder packing machine",
];

const benefits = [
  "Massive output: up to 450 pouches per minute from one machine.",
  "Low power: single-phase supply and a 1/2 HP motor keep electricity bills low.",
  "Less wastage: accurate dosing and consistent sealing reduce rejected pouches.",
  "Airtight packs: leak-proof heat seals protect aroma and extend shelf life.",
  "Labour saving: one operator can manage what would need a large manual team.",
  "Stable build: a 700 kg frame keeps vibration low at high speed.",
];

const whyChooseReasons = [
  "Top-grade components chosen for continuous running",
  "Every machine tested at our Faridabad factory before dispatch",
  "Clear quality standards set by our in-house professionals",
  "Stocked spare parts and quick service across Delhi NCR",
  "Customisation for pouch size, seal style and product type",
];

const speedTips = [
  "Use consistent-quality laminated film to avoid breaks at high speed.",
  "Keep the product dry so it flows smoothly into the dosing system.",
  "Clean sealing jaws daily to maintain seal quality.",
  "Follow the lubrication schedule for all moving parts.",
  "Train at least two operators per shift.",
];

const buyersChecklist = [
  "Confirm sachet size: the JAT-302 is optimised for 2 g to 100 g; heavier packs need a different model.",
  "Test real speed: ask for a trial with your product and film, since speed depends on flow and pouch length.",
  "Check film width: the machine takes rolls up to 200 mm wide.",
  "Plan power: it runs on single phase, but check your wiring and voltage stability.",
  "Ask about spares: high speed means more jaw and heater wear, so keep a spare kit.",
  "Train two operators: fast machines need confident operators on every shift.",
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
          {/* H1 + Quick Answer */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">Top FFS High Speed Packaging Machine Manufacturer - Jawla Advance Technology</h1>
            <p className="text-gray-700">
              <span className="font-bold text-black">Quick answer: </span>
              Jawla Advance Technology LLP, an FFS high speed packaging
              machine manufacturer in Faridabad, makes the JAT-302, which
              packs 2 g to 100 g sachets at 100 to 450 pouches per minute on
              single-phase power with a 1/2 HP motor. It suits pan masala,
              mouth freshener, spice and tea brands selling small sachets in
              high volume.
            </p>
            <p className="text-gray-700 mt-3">
              Jawla Advance Technology LLP is an FFS high speed packaging
              machine manufacturer in Faridabad and Delhi NCR. Our FFS High
              Speed Packaging Machine (JAT-302) produces 100 to 450 pouches
              per minute, making it one of the fastest ways to pack small
              sachets of pan masala, mouth freshener, spices, tea and
              powders. It runs on single-phase power with a 1/2 HP motor, so
              even compact units can achieve industrial-scale output.
            </p>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-6">
            <h2 className="text-[#E13538] text-xl font-bold">
              Technical Specifications
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded-sm">
              <table className="w-full text-left border-collapse text-base md:text-lg text-gray-700">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-bold text-black border-r border-gray-200 text-center w-1/2 text-base md:text-xl">
                      Feature
                    </th>
                    <th className="p-3 font-bold text-black text-center w-1/2 text-base md:text-xl">
                      JAT-302
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

          {/* Where the JAT-302 Fits Best */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Where the JAT-302 Fits Best
            </h2>
            <p className="text-gray-700">
              High-speed FFS machines are built for products sold in huge
              numbers of small packs. The JAT-302 works as a:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
              {fitsBestList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">
              If your market sells ₹1, ₹2, ₹5 or ₹10 sachets, this is the
              machine that keeps up with demand.
            </p>
          </div>

          {/* How High-Speed FFS Works */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              How High-Speed FFS Works
            </h2>
            <p className="text-gray-700">
              The machine pulls laminated film from the roll and wraps it
              around a forming tube. Vertical and horizontal sealing jaws
              close the pouch while the dosing system drops an exact
              quantity of product. Precision controls keep film pull,
              filling and sealing in sync, so pouches stay uniform even at
              top speed. Finished sachets are cut and discharged
              continuously.
            </p>
          </div>

          {/* Benefits of a High Speed FFS Machine */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Benefits of a High Speed FFS Machine
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
              {benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Why Choose Jawla Advance Technology */}
          <div className="space-y-4 pt-2">
            <h2 className="text-[#E13538] text-xl font-bold">
              Why Choose Jawla Advance Technology as Your FFS High Speed
              Packaging Machine Manufacturer
            </h2>
            <p className="text-gray-700">
              Speed is only useful if the machine runs without constant
              stoppages. As an FFS high speed packaging machine manufacturer
              with an in-house engineering team, we focus on long uptime:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-gray-700">
              {whyChooseReasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* High Speed vs Normal FFS */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              High Speed vs Normal FFS
            </h2>
            <p className="text-gray-700">
              Not every business needs 450 pouches a minute. Our{" "}
              <Link
                href="/normal-ffs-packaging-machine-jat-301"
                className="text-[#E13538] font-bold hover:underline"
              >
                Normal FFS Packaging Machine (JAT-301)
              </Link>{" "}
              packs 2 g to 200 g at 30 to 80 pouches per minute and costs
              less. Choose the JAT-302 when you sell very small sachets in
              high volume, and the JAT-301 when you need more pack-size
              flexibility at moderate output. We will help you decide based
              on your sales plan.
            </p>
          </div>

          {/* Installation, Training and Service */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Installation, Training and Service
            </h2>
            <p className="text-gray-700">
              Our engineers install and commission the JAT-302 at your site
              and train your operators on speed settings, film loading,
              changeovers and cleaning. After installation, we provide
              preventive maintenance, breakdown support and genuine spares.
              Customers in Faridabad, Delhi, Gurugram, Noida and Ghaziabad
              benefit from fast site visits, and we offer remote support for
              buyers across India and abroad.
            </p>
          </div>

          {/* Tips for Maximum Speed and Uptime */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Tips for Maximum Speed and Uptime
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
              {speedTips.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Who Uses the JAT-302 */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Who Uses the JAT-302 in Faridabad and Delhi NCR
            </h2>
            <p className="text-gray-700">
              The JAT-302 is chosen by brands that sell low-price sachets in
              very large numbers. Typical buyers include mouth freshener and
              pan masala units around Delhi, spice brands supplying ₹5 and
              ₹10 packs to kirana stores, tea packers making single-cup
              sachets, and contract packers in Faridabad and Gurugram who run
              several brands on one line. For these businesses, every extra
              pouch per minute adds directly to daily capacity.
            </p>
          </div>

          {/* Buyer's Checklist */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Buyer&apos;s Checklist Before You Order
            </h2>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
              {buyersChecklist.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">
              A reliable FFS high speed packaging machine manufacturer should
              support all of these before and after the sale.
            </p>
          </div>

          {/* Get a Quote */}
          <div className="space-y-4">
            <h2 className="text-[#E13538] text-xl font-bold">
              Get a Quote From a Leading FFS High Speed Packaging Machine
              Manufacturer
            </h2>
            <p className="text-gray-700">
              Share your product, sachet weight and daily target, and we will
              recommend the right configuration with a detailed quote.
              Contact our team through the{" "}
              <Link
                href="/contact-us"
                className="text-[#E13538] font-bold hover:underline"
              >
                website enquiry form
              </Link>
              . Jawla Advance Technology is the FFS high speed packaging
              machine manufacturer trusted by sachet brands across Faridabad
              and Delhi NCR.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <h2 className="text-[#E13538] text-xl font-bold">FAQs</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-bold text-black mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
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
