import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/normal-ffs-packaging-machine-jat-301" },
  title: "Best Normal FFS Packaging Machine Manufacturer in Faridabad",
  description:
    "Normal FFS packaging machine manufacturer in Faridabad & Delhi NCR. JAT-301 packs 2–200 g at 30–80 pouches/min for spices, tea & namkeen.",
  keywords: [
    "normal FFS packaging machine",
    "normal FFS packaging machine manufacturer",
    "normal FFS packaging machine manufacturer In Faridabad",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://www.jawlaadvancetechnology.com/normal-ffs-packaging-machine-jat-301#product",
      name: "Normal FFS Packaging Machine (JAT-301)",
      model: "JAT-301",
      sku: "JAT-301",
      category: "FFS Packaging Machine",
      image:
        "https://www.jawlaadvancetechnology.com/PRODUCTS/normal-ffs-packaging-machine-jat-301/p1.png",
      description:
        "Normal FFS packaging machine by a Faridabad manufacturer. Volumetric cup filler, 2 g to 200 g, 30 to 80 pouches per minute, centre, 3-side and 4-side seal.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: {
        "@id": "https://www.jawlaadvancetechnology.com/#organization",
      },
      weight: { "@type": "QuantitativeValue", value: 500, unitCode: "KGM" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Pack Size", value: "2 g to 200 g" },
        {
          "@type": "PropertyValue",
          name: "Output",
          value: "30 to 80 pouches per minute",
        },
        {
          "@type": "PropertyValue",
          name: "Filling System",
          value: "Volumetric cup filler",
        },
        {
          "@type": "PropertyValue",
          name: "Seal Type",
          value: "Centre seal, 3-side seal, 4-side seal",
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
          name: "Normal FFS Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/normal-ffs-packaging-machine-jat-301",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a normal FFS packaging machine and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A normal FFS packaging machine is a vertical form fill seal machine that makes pouches from a roll of laminated film. It shapes the film into a tube, drops a measured quantity of product in, and seals and cuts the pouch in one continuous cycle. Jawla Advance Technology's JAT-301 does this at 30 to 80 pouches per minute.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a normal FFS packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A normal FFS packaging machine from Jawla Advance Technology is priced based on pack range, seal type and accessories. The final price depends on your product and pouch sizes, so share them with the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "Which products can I pack with the Jawla Advance Technology JAT-301?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-301 packs free-flowing powders and granules. Common products are spices, masala, tea, coffee, namkeen, heena, detergent, daal, pulses, sugar, salt and seeds. It is not ideal for sticky flours like besan, which pack better on an auger filler such as the JAT-307.",
          },
        },
        {
          "@type": "Question",
          name: "What pouch sizes can the JAT-301 make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JAT-301 fills pouches from 2 g to 200 g. You change the pack weight by changing or adjusting the volumetric cups. It can make centre seal, 3-side seal and 4-side seal pouches, so one machine can serve several pack sizes and pouch styles.",
          },
        },
        {
          "@type": "Question",
          name: "How many pouches per minute can a normal FFS machine pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology's normal FFS machine packs 30 to 80 pouches per minute. Smaller, lighter pouches run at the higher end, while larger or slower-flowing products run at the lower end. At full speed that is roughly 1,800 to 4,800 pouches an hour from one operator.",
          },
        },
        {
          "@type": "Question",
          name: "Which is better for my business, normal FFS or high speed FFS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose the normal FFS JAT-301 if you pack 2 g to 200 g pouches at moderate volume and want lower cost. Choose the high speed FFS JAT-302 if you sell very small sachets, like pan masala or mouth freshener, in huge volumes, because it runs at 100 to 450 pouches per minute.",
          },
        },
        {
          "@type": "Question",
          name: "Can a normal FFS machine pack sticky powders like besan or maida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not reliably. Sticky and very fine powders do not fill volumetric cups evenly, which causes weight variation. For besan, maida and sattu, Jawla Advance Technology recommends the Collar Auger Filling Packaging Machine JAT-307, which uses a rotating screw to measure each pouch accurately.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best normal FFS packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best normal FFS packaging machine manufacturers in Faridabad and Delhi NCR. It builds the JAT-301 in-house, lets buyers test their own product before ordering, and provides installation, operator training, genuine spares and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology provide installation, training and service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology's engineers install and commission the JAT-301 at your site, train your operators on running, changeovers and cleaning, and provide preventive maintenance, breakdown support and genuine spare parts. Service across Faridabad and Delhi NCR is fast because the team is based locally.",
          },
        },
        {
          "@type": "Question",
          name: "How do I maintain a normal FFS packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clean the hopper and cups after every shift, wipe the sealing jaws regularly, lubricate moving parts on schedule and use good-quality laminated film. Book a preventive service before your peak season. With this routine, the JAT-301 runs with very little unplanned downtime.",
          },
        },
      ],
    },
  ],
};

const keySpecs = [
  { feature: "Pack size", value: "2 g to 200 g" },
  { feature: "Output", value: "30 to 80 pouches per minute" },
  { feature: "Filling system", value: "Volumetric cup filler" },
  { feature: "Seal types", value: "Centre seal, 3-side seal, 4-side seal" },
  { feature: "Machine weight", value: "About 500 kg" },
  { feature: "Body finish", value: "Electrostatic powder coating" },
  { feature: "Film", value: "Heat-sealable laminated roll film" },
];

const packableProducts = [
  "Spices and masala powders",
  "Tea and coffee",
  "Namkeen and small snacks",
  "Heena and other powders",
  "Detergent and washing powder",
  "Daal, pulses, lentils and granules",
  "Sugar, salt and seeds",
];

const businessBenefits = [
  "Replace manual packing: one machine can pack thousands of pouches per shift.",
  "Consistent weight: cup filling keeps every pack uniform.",
  "Flexible pouch styles: centre seal, 3-side seal or 4-side seal.",
  "Low running cost: efficient motors and low maintenance needs.",
  "Easy operation: simple controls with minimal training.",
];

const whyChooseReasons = [
  "They can visit our factory and see the machine pack their own product.",
  "Our engineers install and commission the machine and train the operators.",
  "Spare parts such as sealing jaws, heaters and cups are kept in stock.",
  "Service visits across Delhi NCR are quick.",
  "We also supply across India and export to international buyers.",
];

const maintenanceTips = [
  "Clean the hopper and cups at the end of each shift.",
  "Check sealing jaws for residue and wipe them regularly.",
  "Lubricate moving parts as per the maintenance schedule.",
  "Use good-quality laminated film for clean, strong seals.",
  "Book preventive service before peak season.",
];

const buyersChecklist = [
  "Pack range: does the machine cover every pouch weight you sell today and plan to sell next year?",
  "Real output: what speed will it achieve with your product, not just the brochure maximum?",
  "Seal quality: can you see and test sample pouches made with your own product and film?",
  "Service distance: how quickly can an engineer reach your factory when the machine stops?",
  "Spare parts: are sealing jaws, heaters and cups kept in stock, and at what cost?",
  "Training: will your operators be trained on changeovers and daily cleaning?",
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
        {/* H1 + Quick Answer */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Best Normal FFS Packaging Machine Manufacturer in Faridabad</h1>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a normal FFS packaging machine
            manufacturer in Ballabgarh, Faridabad, serving all of Delhi NCR.
            Its JAT-301 machine forms, fills and seals 2 g to 200 g pouches at
            30 to 80 pouches per minute, which makes it a practical,
            affordable choice for spice, tea, coffee and namkeen packers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Jawla Advance Technology LLP is a normal FFS packaging machine
            manufacturer in Faridabad and Delhi NCR. Our Normal FFS Packaging
            Machine (JAT-301) forms, fills and seals pouches of 2 g to 200 g
            at 30 to 80 pouches per minute. It is the most popular choice for
            spice, tea, coffee and namkeen businesses that want reliable
            automatic packing at a sensible price.
          </p>
        </div>

        {/* Key Specifications */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Key Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 pr-4 font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="py-2 font-bold text-gray-900">JAT-301</th>
                </tr>
              </thead>
              <tbody>
                {keySpecs.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-700">
                      {spec.feature}
                    </td>
                    <td className="py-2 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What Is a Normal FFS Packaging Machine */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            What Is a Normal FFS Packaging Machine?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            FFS means Form Fill Seal. A normal FFS machine is a vertical
            pouch packing machine that pulls laminated film from a roll,
            forms it into a pouch, fills a measured quantity of product and
            seals it, all in one continuous cycle. &quot;Normal&quot; refers
            to the standard-speed version, which balances output, accuracy
            and cost for small and medium units.
          </p>
        </div>

        {/* Products You Can Pack */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Products You Can Pack
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The JAT-301 works with free-flowing powders and granules:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            {packableProducts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            This makes one machine useful as a namkeen packing machine, a
            spice powder packing machine and a granule packing machine.
          </p>
        </div>

        {/* How the Cup Filling System Works */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            How the Cup Filling System Works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The machine uses a volumetric cup filler. A rotating plate
            carries adjustable cups under the product hopper. Each cup fills
            to a set volume and drops its contents into the pouch as it
            forms. Changing the cup size changes the pack weight. This
            system is simple, fast and very reliable for products that flow
            freely.
          </p>
        </div>

        {/* Built to Last */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Built to Last
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The JAT-301 weighs about 500 kg, so it stays stable at full speed
            and vibrates less. The outer body has electrostatic powder
            coating that resists scratches, rust and dust. A continuous
            sealing mechanism gives strong seals that stop leakage and keep
            products fresh.
          </p>
        </div>

        {/* Benefits for Your Business */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Benefits for Your Business
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
            {businessBenefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Why Choose Jawla Advance Technology */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Why Choose Jawla Advance Technology as Your Normal FFS Packaging
            Machine Manufacturer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As a normal FFS packaging machine manufacturer based in
            Ballabgarh, Faridabad, we build every JAT-301 in-house and test
            it before dispatch. Customers in Delhi, Gurugram, Noida,
            Ghaziabad and Palwal choose us because:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Normal FFS or High Speed FFS */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Normal FFS or High Speed FFS?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The JAT-301 suits most small and medium units with outputs up to
            80 pouches per minute. If you pack very small sachets in large
            volumes, such as pan masala or mouth freshener, our{" "}
            <Link
              href="/ffs-high-speed-packaging-machine"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              FFS High Speed Packaging Machine (JAT-302)
            </Link>{" "}
            can produce 100 to 450 pouches per minute. Our team will help you
            compare both based on your daily target.
          </p>
        </div>

        {/* Maintenance Tips */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Maintenance Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
            {maintenanceTips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Who Uses the JAT-301 */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Who Uses the JAT-301 in Faridabad and Delhi NCR
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most JAT-301 buyers are growing food businesses that have
            outgrown hand packing. Typical users include masala and spice
            grinders in Faridabad and Palwal, tea and coffee packers in
            Delhi, namkeen makers in Ghaziabad and Noida, and detergent units
            in the industrial belts of Gurugram and Sonipat. Many are family
            businesses packing 5,000 to 30,000 pouches a day who want a
            machine that is simple to run, easy to service and fast to pay
            back.
          </p>
        </div>

        {/* Buyer's Checklist */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Buyer&apos;s Checklist Before You Order
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ask these questions before you buy any FFS machine, from us or
            anyone else:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            {buyersChecklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            A good normal FFS packaging machine manufacturer will answer all
            six clearly and let you test before you pay.
          </p>
        </div>

        {/* Request a Price */}
        <div>
          <h2 className="text-xl sm:text-xl md:2xl font-bold text-[#BB2426] mb-4">
            Request a Price From a Trusted Normal FFS Packaging Machine
            Manufacturer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Share your product, pack weights and seal style. We will suggest
            the right cup set and configuration and send a detailed quote.
            Contact our team through the{" "}
            <Link
              href="/contact-us"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              website enquiry form
            </Link>
            . Jawla Advance Technology is the normal FFS packaging machine
            manufacturer that spice, tea and namkeen brands across Faridabad
            and Delhi NCR rely on.
          </p>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-xl  sm:text-xl  md:2xl font-bold text-[#BB2426] mb-4">
            FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-700 mt-1">{faq.answer}</p>
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
