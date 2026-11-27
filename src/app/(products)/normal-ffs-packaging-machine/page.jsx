import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/normal-ffs-packaging-machine" },
  title: "Best Normal FFS Packaging Machine Manufacturer & Supplier in Delhi NCR",
  description:
    "Buy Normal FFS Packaging Machine from Jawla Advance Technology, a trusted manufacturer and supplier in Delhi NCR. Explore efficient packaging solutions.",
  keywords: [
    "Normal FFS Packaging Machine",
    "Normal FFS Packaging Machine Manufacturer In Delh Ncr",
    "Normal FFS Packaging Machine Supplier IN delhi Ncr",
  ],
};

const technicalSpecs = [
  { specification: "Machine Type", details: "Normal FFS Packaging Machine" },
  { specification: "Usage", details: "Industrial" },
  { specification: "Material", details: "Mild Steel" },
  { specification: "Automatic Grade", details: "Semi-Automatic" },
  { specification: "Computerized", details: "No" },
  { specification: "Control System", details: "Frequency Speed Control" },
  { specification: "Drive Type", details: "Electric" },
  { specification: "Voltage", details: "220 Volt" },
  { specification: "Feature", details: "Highly Efficient" },
  { specification: "Warranty", details: "1 Year" },
  { specification: "Packaging Range", details: "2 g to 200 g" },
  { specification: "Production Capacity", details: "30–80 pouches per minute" },
  { specification: "Filling System", details: "Volumetric Cup Filler" },
  {
    specification: "Sealing Type",
    details: "Centre Seal, 3-Side Seal, 4-Side Seal",
  },
  { specification: "Approx. Machine Weight", details: "500 kg" },
];

const tradeInfo = [
  { label: "Minimum Order Quantity", value: "1 Unit" },
  { label: "Payment Terms", value: "Cash in Advance (CID)" },
  { label: "Supply Ability", value: "50 Units per Month" },
  { label: "Delivery Time", value: "10 Days" },
  { label: "Main Domestic Market", value: "All India" },
];

const faqs = [
  {
    question: "1. What is a Normal FFS Packaging Machine used for?",
    answer:
      "It is used to form pouches, fill them with products and seal them for packaging.",
  },
  {
    question: "2. What is the price of this packaging machine?",
    answer:
      "The listed price is ₹1,50,000 per unit. Taxes and transportation charges should be confirmed separately.",
  },
  {
    question: "3. Is this machine fully automatic?",
    answer: "No. The machine has a semi-automatic operating system.",
  },
  {
    question: "4. What is the packaging range of the machine?",
    answer:
      "The stated packaging range is 2 g to 200 g, subject to configuration and product requirements.",
  },
  {
    question: "5. What is the production capacity?",
    answer:
      "The stated production capacity is 30–80 pouches per minute. Actual output may vary depending on the product and operating conditions.",
  },
  {
    question: "6. Which sealing options are available?",
    answer:
      "The stated options include centre seal, 3-side seal and 4-side seal.",
  },
  {
    question: "7. What type of filling system does it use?",
    answer:
      "The machine is specified with a volumetric cup filling system.",
  },
  {
    question: "8. What is the warranty period?",
    answer: "The machine comes with a one-year warranty.",
  },
  {
    question: "9. Where can I buy this packaging machine in Delhi NCR?",
    answer:
      "You can contact Jawla Advance Technology LLP in Ballabgarh, Faridabad, Haryana, to discuss specifications, pricing and availability.",
  },
  {
    question:
      "10. What should I check before purchasing a Normal FFS Packaging Machine?",
    answer:
      "Check the product type, pouch size, filling range, sealing style, production capacity, machine material, warranty and overall price before making a purchase.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id":
        "https://www.jawlaadvancetechnology.com/normal-ffs-packaging-machine#product",
      name: "Normal FFS Packaging Machine",
      category: "FFS Packaging Machine",
      image:
        "https://www.jawlaadvancetechnology.com/PRODUCTS/normal-ffs-packaging-machine-jat-301/p1.webp",
      description:
        "Normal FFS packaging machine manufactured and supplied in Delhi NCR by Jawla Advance Technology. Semi-automatic mild steel machine with volumetric cup filler for 2 g to 200 g pouches at 30–80 pouches per minute.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: {
        "@id": "https://www.jawlaadvancetechnology.com/#organization",
      },
      weight: { "@type": "QuantitativeValue", value: 500, unitCode: "KGM" },
      additionalProperty: technicalSpecs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.specification,
        value: spec.details,
      })),
      offers: {
        "@type": "Offer",
        url: "https://www.jawlaadvancetechnology.com/normal-ffs-packaging-machine",
        priceCurrency: "INR",
        price: "150000",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@id": "https://www.jawlaadvancetechnology.com/#organization",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "32",
      },
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
          item: "https://www.jawlaadvancetechnology.com/normal-ffs-packaging-machine",
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

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"Normal FFS Packaging Machine"}
          image={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/top.webp"}
          as="h1"
        />

        {/* Main Details Section: Left Machine Image + Right Technical Specifications */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/normal-ffs-packaging-machine-jat-301/p1.webp"}
          productTitle={""}
          showRating={false}
        >
          <div className="space-y-3">
            <h2 className="text-black font-bold text-lg sm:text-xl">
              Technical Specifications of Normal FFS Packaging Machine
            </h2>
            <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-2 px-4 font-bold text-gray-900">
                      Specification
                    </th>
                    <th className="py-2 px-4 font-bold text-gray-900">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecs.map((spec) => (
                    <tr
                      key={spec.specification}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-2 px-4 font-medium text-gray-800">
                        {spec.specification}
                      </td>
                      <td className="py-2 px-4 text-gray-700">
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
                Price: ₹1,50,000 per unit
              </span>
            </div>
          </div>
        </MainProductDetails>

        {/* Sample Product Image Below */}
        <div className="w-full max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Normal FFS Packaging Machine Manufacturer &amp; Supplier in Delhi NCR
          </h2>
          <h3 className="text-black font-bold text-base sm:text-lg mb-3">
            Packing Products
          </h3>
          <div className="relative w-full max-w-3xl h-64 sm:h-72 md:h-80">
            <Image
              src="/PRODUCTS/normal-ffs-packaging-machine-jat-301/chutki.webp"
              alt="Sample Packaging Products - Normal FFS Packaging Machine"
              fill
              sizes="(max-width: 767px) 100vw, 768px"
              className="object-contain object-left"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 space-y-10 border-t border-gray-200">
        <div>
          <p className="text-gray-700 leading-relaxed">
            Jawla Advance Technology LLP offers a reliable{" "}
            <Link
              href="/"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              Normal FFS Packaging Machine
            </Link>{" "}
            for businesses that need an efficient solution for pouch packaging.
            Designed for industrial applications, this machine helps fill and
            seal products in flexible packaging material. It is suitable for
            manufacturers looking for consistent packaging performance, easy
            operation and controlled production.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            As a Normal FFS Packaging Machine Manufacturer &amp; Supplier in
            Delhi NCR, Jawla Advance Technology provides packaging solutions for
            different industrial requirements. The machine comes with a
            semi-automatic operating system, electric drive and frequency speed
            control to support smooth packaging operations.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426]">
            Normal FFS Packaging Machine Price
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The price of the Normal FFS Packaging Machine offered by Jawla
            Advance Technology is:
          </p>
          <p className="text-lg font-bold text-black">
            Price: ₹1,50,000 per unit
          </p>
          <p className="text-gray-700 leading-relaxed">
            The final purchase cost may depend on the machine configuration,
            packaging requirements, applicable taxes, transportation and any
            additional specifications. Buyers should confirm the complete
            quotation, including GST and delivery charges, before placing an
            order.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            What Is a Normal FFS Packaging Machine?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Normal FFS Packaging Machine is used to form pouches from
            packaging film, fill them with a product and seal them. FFS stands
            for Form, Fill and Seal. The machine performs these packaging steps
            in a connected process, reducing the need for separate manual
            pouch-making and sealing operations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            It can be used for packing products in small quantities, depending
            on the product type and machine configuration. The packaging range
            and output requirements can be discussed before placing an order to
            ensure the machine is suitable for your production needs.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Key Features of the Machine
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The machine is designed to support practical industrial packaging
            requirements. Its key features include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold text-black">
                Semi-Automatic Operation:
              </span>{" "}
              Offers controlled operation for packaging tasks.
            </li>
            <li>
              <span className="font-semibold text-black">
                Frequency Speed Control:
              </span>{" "}
              Helps adjust machine speed according to production requirements.
            </li>
            <li>
              <span className="font-semibold text-black">Electric Drive:</span>{" "}
              Uses an electric drive system for machine operation.
            </li>
            <li>
              <span className="font-semibold text-black">
                Mild Steel Construction:
              </span>{" "}
              Built with mild steel material.
            </li>
            <li>
              <span className="font-semibold text-black">Industrial Use:</span>{" "}
              Suitable for businesses involved in product manufacturing and
              packaging.
            </li>
            <li>
              <span className="font-semibold text-black">
                Efficient Performance:
              </span>{" "}
              Designed to support consistent packaging operations.
            </li>
            <li>
              <span className="font-semibold text-black">
                One-Year Warranty:
              </span>{" "}
              Comes with a one-year warranty.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Applications of the Machine
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            This packaging equipment can be considered for businesses that need
            to pack products in small pouches. Depending on the product and
            packaging material, applications may include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
            <li>Food and snack products</li>
            <li>Granules and powder-based products</li>
            <li>Seeds and similar small items</li>
            <li>Industrial materials suitable for pouch packaging</li>
            <li>Other products that require measured filling and sealed pouches</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            The right machine configuration depends on the product&apos;s size,
            weight, flow properties and packaging requirements.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            How Does the Packaging Process Work?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The machine follows a Form, Fill and Seal process. First, packaging
            film is placed in the machine and shaped into a pouch. The product
            is then measured and filled into the pouch through the filling
            system. Finally, the pouch is sealed according to the selected
            sealing arrangement.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            This process helps businesses manage pouch formation, filling and
            sealing through one packaging setup. Operators should follow the
            recommended operating instructions and safety guidelines for proper
            machine use.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Why Choose Jawla Advance Technology?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link
              href="/contact"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              Jawla Advance Technology
            </Link>{" "}
            LLP provides industrial packaging machinery for businesses with
            different production requirements. Buyers can discuss their product
            type, pouch size and packaging needs before selecting a suitable
            machine.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            As a Normal FFS Packaging Machine Manufacturer &amp; Supplier in
            Delhi NCR, the company offers:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
            <li>Industrial packaging machine solutions</li>
            <li>Mild steel machine construction</li>
            <li>Semi-automatic operation</li>
            <li>Frequency speed control</li>
            <li>One-year warranty</li>
            <li>Support for discussing machine specifications and requirements</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            The company is based in Ballabgarh, Faridabad, Haryana, and serves
            customers across India.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426]">
            Trade Information
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-lg max-w-2xl">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-2.5 px-4 font-bold text-gray-900">
                    Trade Details
                  </th>
                  <th className="py-2.5 px-4 font-bold text-gray-900">
                    Information
                  </th>
                </tr>
              </thead>
              <tbody>
                {tradeInfo.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-2.5 px-4 font-medium text-gray-800">
                      {row.label}
                    </td>
                    <td className="py-2.5 px-4 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-4">
            Frequently Asked Questions
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

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#BB2426] mb-3">
            Set Up Your Normal ffs Packaging machine Form Jawla Advance
            Technology
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you are looking for a Normal FFS Packaging Machine Manufacturer
            &amp; Supplier in Delhi NCR,{" "}
            <Link
              href="/contact"
              className="text-red-600 hover:text-[#BB2426] font-semibold"
            >
              contact Jawla Advance Technology LLP
            </Link>{" "}
            to discuss your packaging requirements and request a quotation.
            Share your product details, required pouch size and expected
            production capacity to help identify a suitable machine
            configuration.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
