import React from "react";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/small-pouch-packing-machine" },
  title: "Best Small Pouch Packing Machine Manufacturer in Delhi NCR",
  description:
    "Jawla Advance Technology is a trusted small pouch packing machine manufacturer in Delhi NCR. Semi-automatic machine at ₹4,00,000 with 1 year warranty. Get a free quote today.",
  keywords: [
    "Small Pouch Packing Machine",
    "Small Pouch Packing Machine Manufacturer In Delhi Ncr",
  ],
};

const technicalSpecs = [
  { parameter: "Usage", details: "Industrial" },
  { parameter: "Material", details: "Mild Steel" },
  { parameter: "Feature", details: "Highly Efficient" },
  { parameter: "Computerized", details: "No" },
  { parameter: "Automatic Grade", details: "Semi-Automatic" },
  { parameter: "Control System", details: "Frequency Speed Control" },
  { parameter: "Drive Type", details: "Electric" },
  { parameter: "Voltage", details: "220 Volt (V)" },
  { parameter: "Warranty", details: "1 Year" },
];

const faqs = [
  {
    question: "1. What is a small pouch packing machine?",
    answer:
      "A small pouch packing machine is a machine that fills and seals small pouches or sachets with products like tea, spices, powders, sugar and liquids.",
  },
  {
    question:
      "2. Who is the best small pouch packing machine manufacturer in Delhi NCR?",
    answer:
      "Jawla Advance Technology LLP is one of the leading manufacturers in Delhi NCR. It builds its machines in-house at Ballabgarh, Faridabad, serves 500+ clients in India and 25+ countries, and has its own installation and service team.",
  },
  {
    question: "3. What is the price of a small pouch packing machine in India?",
    answer:
      "The small pouch packing machine from Jawla Advance Technology is priced at ₹4,00,000 (GST as applicable). It is a semi-automatic, mild steel machine with frequency speed control. For custom requirements, contact us for a tailored quotation.",
  },
  {
    question: "4. What are the technical specifications of the machine?",
    answer:
      "It is a semi-automatic industrial machine made of mild steel, with frequency speed control, electric drive and 220 V supply. It is not computerized, which keeps operation simple and maintenance low.",
  },
  {
    question: "5. What warranty does the machine come with?",
    answer:
      "The machine comes with a 1 year warranty, backed by installation, operator training and after-sales service.",
  },
  {
    question:
      "6. Which products can be packed in a small pouch packing machine?",
    answer:
      "Tea, washing powder, spices, sugar, mouth freshener, pan masala, khaini, seeds, pharmaceutical powders and many other free-flowing products can be packed, depending on the filler type.",
  },
  {
    question:
      "7. What is the difference between automatic and semi-automatic pouch packing machines?",
    answer:
      "Fully automatic machines form, fill, seal and cut pouches without manual work and suit high, steady output. Semi-automatic machines need some manual steps, cost less and suit startups and small units.",
  },
  {
    question:
      "8. How do I choose the right pouch packing machine for my product?",
    answer:
      "Choose based on product type, pack weight, daily output and pouch style. Free-flowing products suit cup fillers, sticky powders need auger fillers, and liquids need piston fillers.",
  },
  {
    question:
      "9. Does Jawla provide installation and training in Delhi NCR?",
    answer:
      "Yes. Jawla's engineers install and commission every machine at your site and train operators on running, changeovers, cleaning and basic troubleshooting. On-site and remote training are both available.",
  },
  {
    question: "10. Can I see a live demo before buying?",
    answer:
      "Yes. You can visit the Jawla factory in Ballabgarh, Faridabad to see machines running and test your own product, or request a video demo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://www.jawlaadvancetechnology.com/small-pouch-packing-machine#product",
      name: "Small Pouch Packing Machine",
      category: "Pouch Packing Machine",
      image:
        "https://www.jawlaadvancetechnology.com/PRODUCTS/horizontal-rotary-machine/p1.webp",
      description:
        "Semi-automatic small pouch packing machine manufactured in Delhi NCR by Jawla Advance Technology. Built with mild steel, frequency speed control, 220 V electric drive and 1 year warranty.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: {
        "@id": "https://www.jawlaadvancetechnology.com/#organization",
      },
      additionalProperty: technicalSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.parameter,
        value: spec.details,
      })),
      offers: {
        "@type": "Offer",
        url: "https://www.jawlaadvancetechnology.com/small-pouch-packing-machine",
        priceCurrency: "INR",
        price: "400000",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@id": "https://www.jawlaadvancetechnology.com/#organization",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.jawlaadvancetechnology.com",
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
          name: "Small Pouch Packing Machine",
          item: "https://www.jawlaadvancetechnology.com/small-pouch-packing-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function SmallPouchPackingMachinePage() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        <TopCard
          title={"Small Pouch Packing Machine"}
          image={"/PRODUCTS/horizontal-rotary-machine/top.webp"}
          as="h1"
        />

        <MainProductDetails
          MachineImage={"/PRODUCTS/horizontal-rotary-machine/p1.webp"}
          productTitle={"Small Pouch Making Machine Manufacturer"}
        >
          <div className="pt-1">
            <h3 className="text-black font-bold text-base sm:text-lg mb-3">
              Technical Specifications
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Parameter
                    </th>
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec) => (
                    <tr
                      key={spec.parameter}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-2.5 px-4 font-medium text-gray-800">
                        {spec.parameter}
                      </td>
                      <td className="py-2.5 px-4 text-gray-700">
                        {spec.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#BB2426] hover:bg-[#9e1d1f] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                Price: ₹4,00,000 (GST as applicable)
              </span>
            </div>
          </div>
        </MainProductDetails>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 space-y-10 border-t border-gray-200">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Small Pouch Packing Machine Manufacturer in Delhi NCR | Jawla
            Advance Technology
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jawla Advance Technology LLP is a trusted{" "}
            <Link
              href="/"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              small pouch packing machine manufacturer in Delhi NCR.
            </Link>{" "}
            With 19+ years of experience, 500+ clients and supply to 25+
            countries, we build reliable, easy-to-operate machines for startups,
            MSMEs and established FMCG brands. Our factory in Ballabgarh,
            Faridabad lets us deliver quickly and support customers across Delhi
            NCR.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426]">
            Small Pouch Packing Machine Price in India
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The small pouch packing machine from Jawla Advance Technology is
            available at ₹4,00,000 (GST as applicable). As a direct
            manufacturer, we offer factory pricing without dealer margins.
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-900">
                    Machine
                  </th>
                  <th className="py-2.5 px-4 font-bold text-gray-900">Type</th>
                  <th className="py-2.5 px-4 font-bold text-gray-900">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2.5 px-4 text-gray-800 font-medium">
                    Small Pouch Packing Machine
                  </td>
                  <td className="py-2.5 px-4 text-gray-700">
                    Semi-Automatic, Mild Steel, 220 V
                  </td>
                  <td className="py-2.5 px-4 text-gray-900 font-semibold">
                    ₹4,00,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-black pt-2">What You Get</h3>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
            <li>Semi-automatic machine with frequency speed control</li>
            <li>Electric drive, runs on 220 V supply</li>
            <li>Installation and operator training</li>
            <li>1 year warranty</li>
            <li>Genuine spare parts and after-sales service across Delhi NCR</li>
          </ul>

          <h3 className="text-lg font-bold text-black pt-2">
            Why This Machine Is a Good Fit
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-black">Easy to run:</span>{" "}
              Frequency speed control lets operators set the speed simply,
              without computer settings.
            </li>
            <li>
              <span className="font-semibold text-black">
                Lower cost than fully automatic machines:
              </span>{" "}
              A good starting point for startups, MSMEs and growing units.
            </li>
            <li>
              <span className="font-semibold text-black">
                Efficient and dependable:
              </span>{" "}
              Built for daily industrial use with low maintenance.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            For custom requirements such as different pouch sizes, filling
            systems or higher speeds,{" "}
            <Link
              href="/contact"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              contact us
            </Link>{" "}
            for a tailored quotation.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            What Is a Small Pouch Packing Machine?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A small pouch packing machine fills and seals products into small
            pouches and sachets. It is widely used for tea, spices, washing
            powder, sugar, mouth freshener, pan masala, khaini and other powders
            and granules. It gives uniform pouch weight, a clean seal and steady
            output, which helps brands look professional and reduces product
            wastage.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Why Choose Jawla Advance Technology?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you are looking for a small pouch packing machine manufacturer in
            Delhi NCR, here is what you get with us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-black">
                In-house manufacturing:
              </span>{" "}
              Every machine is designed and built at our Faridabad factory, so
              quality is controlled from start to finish.
            </li>
            <li>
              <span className="font-semibold text-black">
                Direct from the manufacturer:
              </span>{" "}
              No middlemen between you and the people who build your machine.
            </li>
            <li>
              <span className="font-semibold text-black">
                Custom solutions:
              </span>{" "}
              Machines tailored to your product, pouch style and output
              requirement.
            </li>
            <li>
              <span className="font-semibold text-black">
                Test before you buy:
              </span>{" "}
              See the machine pack your own product at our factory.
            </li>
            <li>
              <span className="font-semibold text-black">
                Strong heat sealing:
              </span>{" "}
              Keeps products fresh and safe in transit.
            </li>
            <li>
              <span className="font-semibold text-black">
                Local service team:
              </span>{" "}
              Installation, operator training, maintenance and genuine spare
              parts across Delhi NCR.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Small Pouch Packing Machines We Manufacture
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="/horizontal-rotary-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                Horizontal Rotary Machine
              </Link>
              : For tea, sugar, spices, washing powder, mouth freshener and pan
              masala.
            </li>
            <li>
              <Link
                href="/collar-type-cup-filler-packaging-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                Collar Type Cup Filler Machine
              </Link>
              : For free-flowing granules and powders measured by volume.
            </li>
            <li>
              <Link
                href="/collar-auger-filling-packaging-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                Collar Auger Filling Machine
              </Link>
              : For fine and sticky powders where an auger filler gives better
              accuracy.
            </li>
            <li>
              <Link
                href="/normal-ffs-packaging-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                Normal FFS
              </Link>{" "}
              and{" "}
              <Link
                href="/ffs-high-speed-packaging-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                FFS High Speed Machines
              </Link>
              : Vertical form fill seal machines for a wide range of pack sizes.
            </li>
            <li>
              <Link
                href="/ffs-liquid-packaging-machine"
                className="text-red-600 hover:text-[#BB2426] font-semibold"
              >
                FFS Liquid Machine
              </Link>
              : For oil, shampoo, sauce and other liquids.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Pouch Styles We Support
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on the model, our machines produce center seal, 3-side
            seal, 4-side seal, pillow pack, gusset, penta seal, 4-line seal and
            zipper pouches.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Industries We Serve
          </h2>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
            <li>
              <span className="font-semibold text-black">Food:</span> tea,
              sugar, spices, grains, dry fruits and powdered foods
            </li>
            <li>Mouth freshener and sachet products</li>
            <li>
              <span className="font-semibold text-black">Home care:</span>{" "}
              washing powder, detergent and chemical powders
            </li>
            <li>
              <span className="font-semibold text-black">Pharmaceutical:</span>{" "}
              powders, granules and small medicinal packs
            </li>
            <li>
              <span className="font-semibold text-black">Agriculture:</span>{" "}
              seeds and small fertiliser packs
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            How to Choose the Right Small Pouch Packing Machine
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-black">Product type:</span>{" "}
              Free-flowing granules suit cup fillers, fine or sticky powders
              need an auger filler, and liquids need a piston filler.
            </li>
            <li>
              <span className="font-semibold text-black">Pack weight:</span>{" "}
              Check the smallest and largest pouch you need.
            </li>
            <li>
              <span className="font-semibold text-black">Daily output:</span>{" "}
              Output decides whether a semi-automatic or fully automatic machine
              gives better returns.
            </li>
            <li>
              <span className="font-semibold text-black">Pouch style:</span>{" "}
              Center seal, 3-side seal, 4-side seal, pillow, gusset or zipper.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Share these details with us, and our engineers will recommend the
            right model after testing your product.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Installation, Training and Support
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <Link
              href="/contact"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              Jawla Advance Technology
            </Link>{" "}
            installs and commissions your machine, sets it up for your product
            and pouch size, and trains your operators on running, changeovers,
            cleaning and basic troubleshooting. After installation, our team
            provides preventive maintenance, breakdown support and genuine spare
            parts, with remote help for customers outside the region.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Serving Delhi, Noida, Gurugram, Ghaziabad and Faridabad
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our factory is in Ballabgarh, Faridabad, so we can deliver quickly
            and provide fast service across Delhi, Noida, Greater Noida,
            Gurugram, Ghaziabad and Faridabad. We also supply buyers across
            India and in export markets.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Get a Free Quote and Demo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tell us your product, pack weight, pouch style and daily output, and
            our team will suggest the right model and share a detailed
            quotation. You are welcome to visit our factory to see machines
            running.{" "}
            <Link
              href="/contact"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              Request your free quote today
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
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
