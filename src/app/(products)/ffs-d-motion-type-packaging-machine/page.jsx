import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/ffs-d-motion-type-packaging-machine" },
  title: {
    absolute: "Best D-Motion Type Packaging Machine Supplier in Delhi NCR",
  },
  description:
    "Buy from a trusted D-Motion Type Packaging Machine supplier in Delhi NCR. Semi-automatic, 220V, 10-day delivery. Get a quote from Jawla Advance Technology.",
  keywords: [
    "D-Motion Type Packaging Machine",
    "D-Motion Type Packaging Machine Supplier In Delhi NCR",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.jawlaadvancetechnology.com/ffs-d-motion-type-packaging-machine#product",
      name: "D-Motion Type Packaging Machine",
      category: "FFS Packaging Machine",
      image: "https://www.jawlaadvancetechnology.com/PRODUCTS/ffs-d-motion-type-packaging-machine/p1.webp",
      description: "D-Motion type packaging machine from Jawla Advance Technology. Packs pan masala, jeera, mouth freshener powder, fruit balls and small pouches with continuous motion sealing.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: { "@id": "https://www.jawlaadvancetechnology.com/#organization" },
      offers: {
        "@type": "Offer",
        url: "https://www.jawlaadvancetechnology.com/ffs-d-motion-type-packaging-machine",
        priceCurrency: "INR",
        price: "0",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
          description: "Price upon request / Custom quotation based on machine configuration",
        },
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": "https://www.jawlaadvancetechnology.com/#organization" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "26",
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
          name: "FFS D-Motion Type Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/ffs-d-motion-type-packaging-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a D-Motion Type Packaging Machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A D-Motion Type Packaging Machine is a form-fill-seal machine that forms a pouch from film, fills it and seals it in one continuous cycle. Its D-Motion film-pulling system keeps pouch length and sealing uniform, which makes it ideal for small pouches of pan masala, spices and mouth fresheners.",
          },
        },
        {
          "@type": "Question",
          name: "Who is a reliable D-Motion Type Packaging Machine supplier in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology is a trusted manufacturer and supplier of the D-Motion Type Packaging Machine in Delhi NCR. Its factory is in Ballabgarh, Faridabad, and it supplies businesses across Delhi NCR, including Noida, Gurugram, Faridabad and Ghaziabad, and all over India.",
          },
        },
        {
          "@type": "Question",
          name: "Is the D-Motion Type Packaging Machine fully automatic or semi-automatic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a semi-automatic machine with frequency speed control. It is not computerized, which keeps operation simple and maintenance low.",
          },
        },
        {
          "@type": "Question",
          name: "What products can the D-Motion Packaging Machine pack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It packs pan masala, jeera, mouth freshener powder, fruit balls, gems and other small-pouch, free-flowing products.",
          },
        },
        {
          "@type": "Question",
          name: "What voltage does the machine run on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The machine runs on a standard 220 V electric supply.",
          },
        },
        {
          "@type": "Question",
          name: "What is the delivery time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Delivery takes about 10 days.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum order quantity and payment term?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The minimum order quantity is 1 unit, the payment term is cash in advance, and Jawla Advance Technology can supply up to 50 units per month.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology supply the machine outside Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The company supplies the machine across India, with Delhi NCR as a key service area.",
          },
        },
        {
          "@type": "Question",
          name: "How much maintenance does the machine need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very little. Its mild steel build and quality components mean regular cleaning and routine servicing are usually enough.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of a D-Motion Type Packaging Machine in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The D-Motion Type Packaging Machine is priced at approximately ₹3,50,000 to ₹4,00,000 per unit, depending on pouch size, filling setup and customisation. Call 9990033381 or send an enquiry through the website to get an exact quote.",
          },
        },
      ],
    },
  ],
};

const technicalSpecifications = [
  { specification: "Usage", details: "Industrial" },
  { specification: "Material", details: "Mild Steel" },
  { specification: "Feature", details: "Highly Efficient" },
  { specification: "Computerized", details: "No" },
  { specification: "Automatic Grade", details: "Semi-Automatic" },
  { specification: "Control System", details: "Frequency Speed Control" },
  { specification: "Drive Type", details: "Electric" },
  { specification: "Voltage", details: "220 V" },
];

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          title={"D-Motion Type Packaging Machine"}
          image={"/PRODUCTS/ffs-d-motion-type-packaging-machine/top.webp"}
          as="h1"
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-d-motion-type-packaging-machine/p1.webp"}
          showRating={false}
        >
          <div className="pt-2">
            <h3 className="text-base sm:text-lg font-bold text-black mb-3">
              Technical Specifications of the D-Motion Type Packaging Machine
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="w-full text-left border-collapse text-sm sm:text-base text-gray-700">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-bold text-black border-r border-gray-200 w-1/2">
                      Specification
                    </th>
                    <th className="p-3 font-bold text-black w-1/2">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {technicalSpecifications.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50"
                    >
                      <td className="p-3 font-semibold text-black border-r border-gray-200">
                        {item.specification}
                      </td>
                      <td className="p-3 text-gray-600">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </MainProductDetails>
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 leading-relaxed font-sans">
        {/* Packing Products & Samples */}
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            D-Motion Type Packaging Machine Supplier in Delhi NCR
          </h2>
          <h3 className="text-[#BB2426] text-xl font-bold">
            Packing Products
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Pan Masala, Jeera, Mouth Freshner Powder, Fruit Balls, Gems any Small Pouch etc.
          </p>
          <p className="text-[#BB2426] font-semibold text-base md:text-lg">
            Quickly Sealing the Novelty of Products
          </p>
          <div className="pt-2">
            <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-80">
              <Image
                src="/PRODUCTS/ffs-d-motion-type-packaging-machine/p2.webp"
                alt="Sample Packaging Products - Gems, Crushed Red Pepper, Biryani Masala"
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 60vw, 650px"
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>

        {/* New SEO & Product Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Looking for a trusted{" "}
            <Link
              href="https://www.jawlaadvancetechnology.com/contact"
              className="text-[#BB2426] font-bold hover:underline"
            >
              D-Motion Type Packaging Machine supplier in Delhi NCR
            </Link>
            ? Jawla Advance Technology manufactures and supplies the FFS
            D-Motion Type Packaging Machine, a reliable pouch packing solution
            for businesses across Delhi NCR, including Noida, Gurugram,
            Faridabad and Ghaziabad, and all over India.
          </p>

          <p>
            The machine forms the pouch from film, fills the product and seals
            it in one continuous operation. It is built for small pouches of
            pan masala, jeera, mouth freshener powder, fruit balls, gems and
            other free-flowing products.
          </p>

          {/* Trade Information */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              FFS D-Motion Type Packaging Machine: Trade Information
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-md">
              <table className="w-full text-left border-collapse text-sm sm:text-base text-gray-700">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-3 font-bold text-black border-r border-gray-200 w-1/2">
                      Trade Detail
                    </th>
                    <th className="p-3 font-bold text-black w-1/2">
                      Information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      Minimum Order Quantity
                    </td>
                    <td className="p-3 text-gray-600">1 Unit</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      Payment Terms
                    </td>
                    <td className="p-3 text-gray-600">Cash in Advance (CID)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      Supply Ability
                    </td>
                    <td className="p-3 text-gray-600">50 Units per Month</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50/50">
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      Delivery Time
                    </td>
                    <td className="p-3 text-gray-600">10 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-3 font-semibold text-black border-r border-gray-200">
                      Main Domestic Market
                    </td>
                    <td className="p-3 text-gray-600">All India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Price Section */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              D-Motion Type Packaging Machine Price in Delhi NCR
            </h2>
            <p>
              The price of the D-Motion Type Packaging Machine starts at
              approximately ₹3,50,000 and goes up to ₹4,00,000 per unit,
              depending on your pouch size, the product you pack, the filling
              setup and any customisation you need. Because Jawla Advance
              Technology is a direct manufacturer, you get factory-direct
              pricing without dealer margins.
            </p>
            <p className="font-semibold text-black">
              What affects the final price:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pouch size and pouch style required</li>
              <li>Type of product (powder, granules or small solids)</li>
              <li>Filling system and any extra attachments</li>
              <li>Customisation as per your packing line</li>
            </ul>
            <p className="font-semibold text-black pt-2">
              Order and payment details:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Minimum order: 1 unit</li>
              <li>Payment terms: Cash in Advance</li>
              <li>Delivery: about 10 days</li>
              <li>Supply: all over India, including Delhi NCR</li>
            </ul>
            <p>
              Prices are approximate. For the exact price, call 9990033381 or
              send your requirement through the enquiry form.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              Key Features of the D-Motion Type Packaging Machine
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Smooth D-Motion film movement for uniform pouch size and neat
                sealing
              </li>
              <li>
                Semi-automatic operation that is easy to learn and handle
              </li>
              <li>
                Frequency speed control to adjust packing speed as per product
                and pouch size
              </li>
              <li>Accurate filling for consistent quantity in every pouch</li>
              <li>
                Strong, leak-proof sealing that helps keep the product fresh
              </li>
              <li>Rugged mild steel body for daily industrial use</li>
              <li>
                Low maintenance, cost-effective investment for growing
                businesses
              </li>
            </ul>
          </div>

          {/* Products You Can Pack */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              Products You Can Pack on the D-Motion Packaging Machine
            </h2>
            <p>
              This machine is designed for small pouches of dry, free-flowing
              products. Here is where it works best:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-bold text-black">Pan masala:</span> neat,
                uniform small pouches with strong seals that keep the product
                dry and fresh on the retail shelf.
              </li>
              <li>
                <span className="font-bold text-black">
                  Mouth freshener powder:
                </span>{" "}
                sealed pouches that protect aroma and flavour and stop the
                powder from leaking or clumping.
              </li>
              <li>
                <span className="font-bold text-black">
                  Jeera and other spices:
                </span>{" "}
                small retail packs and sachets that keep moisture and air out.
              </li>
              <li>
                <span className="font-bold text-black">
                  Fruit balls and gems:
                </span>{" "}
                small solid items fill easily into compact pouches with a clean,
                attractive finish.
              </li>
              <li>
                <span className="font-bold text-black">
                  Other small-pouch products:
                </span>{" "}
                seeds, granules and similar free-flowing items in single-serve or
                small retail packs.
              </li>
            </ul>
            <p>
              <span className="font-bold text-black">Who uses this machine:</span>{" "}
              pan masala and mouth freshener manufacturers, spice packers,
              confectionery units, FMCG small-pack businesses and start-ups
              moving from hand packing to machine packing.
            </p>
            <p>
              Not sure if your product suits the machine? Share your product
              and pouch size with our team, and we will confirm the right setup
              before you order.
            </p>
          </div>

          {/* What Is a D-Motion Type Packaging Machine? */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              What Is a D-Motion Type Packaging Machine?
            </h2>
            <p>
              A D-Motion Type Packaging Machine is a form-fill-seal (FFS) machine
              that uses a D-Motion film-pulling system. This system moves the
              film smoothly, so every pouch comes out with uniform length and a
              clean, secure seal.
            </p>
            <p>
              Our D-Motion machine is semi-automatic with frequency speed
              control. It is simple to operate, easy to maintain and suitable
              for small and mid-size packaging units that want consistent
              quality at a practical price.
            </p>
          </div>

          {/* Why Choose Jawla Advance Technology? */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              Why Choose Jawla Advance Technology?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Direct manufacturer: factory-direct pricing with no middleman
              </li>
              <li>
                Serving Delhi NCR and all India: factory at Ballabgarh, Faridabad
              </li>
              <li>Quick delivery: about 10 days</li>
              <li>
                Flexible orders: minimum order of 1 unit, with supply capacity
                of 50 units per month
              </li>
              <li>
                Service and spare parts support for long-term, trouble-free
                running
              </li>
              <li>
                Customisation available as per your product and pouch requirement
              </li>
            </ul>
          </div>

          {/* Setup Your D-Motion Packaging Machine */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[#BB2426] text-xl font-bold">
              Setup Your D-Motion Packaging Machine From Jawla Advance Technology
            </h2>
            <p>
              Share your product and pouch requirement, and our team will help
              you choose the right machine and send a detailed quotation.
            </p>
            <p>
              Call: 9990033381 | 9212526784 | 9212526785
              <br />
              Email: sales@jawlatechnology.in
              <br />
              Factory: Plot No. 51/A, Gali No. 1, Sarurpur Industrial Area,
              Sohna Road, Ballabgarh, Faridabad (Haryana) – 121004
            </p>
          </div>

          {/* FAQs */}
          <div className="space-y-4 pt-4">
            <h2 className="text-[#BB2426] text-xl font-bold">FAQs</h2>
            <div className="space-y-3">
              <div>
                <p className="font-bold">
                  Q1. What is a D-Motion Type Packaging Machine?
                </p>
                <p>
                  A D-Motion Type Packaging Machine is a form-fill-seal machine
                  that forms a pouch from film, fills it and seals it in one
                  continuous cycle. Its D-Motion film-pulling system keeps pouch
                  length and sealing uniform, which makes it ideal for small
                  pouches of pan masala, spices and mouth fresheners.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q2. Who is a reliable D-Motion Type Packaging Machine supplier
                  in Delhi NCR?
                </p>
                <p>
                  Jawla Advance Technology is a trusted manufacturer and supplier
                  of the D-Motion Type Packaging Machine in Delhi NCR. Its
                  factory is in Ballabgarh, Faridabad, and it supplies
                  businesses across Delhi NCR, including Noida, Gurugram,
                  Faridabad and Ghaziabad, and all over India.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q3. Is the D-Motion Type Packaging Machine fully automatic or
                  semi-automatic?
                </p>
                <p>
                  It is a semi-automatic machine with frequency speed control. It
                  is not computerized, which keeps operation simple and
                  maintenance low.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q4. What products can the D-Motion Packaging Machine pack?
                </p>
                <p>
                  It packs pan masala, jeera, mouth freshener powder, fruit
                  balls, gems and other small-pouch, free-flowing products.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q5. What voltage does the machine run on?
                </p>
                <p>The machine runs on a standard 220 V electric supply.</p>
              </div>

              <div>
                <p className="font-bold">Q6. What is the delivery time?</p>
                <p>Delivery takes about 10 days.</p>
              </div>

              <div>
                <p className="font-bold">
                  Q7. What is the minimum order quantity and payment term?
                </p>
                <p>
                  The minimum order quantity is 1 unit, the payment term is cash
                  in advance, and Jawla Advance Technology can supply up to 50
                  units per month.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q8. Does Jawla Advance Technology supply the machine outside
                  Delhi NCR?
                </p>
                <p>
                  Yes. The company supplies the machine across India, with Delhi
                  NCR as a key service area.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q9. How much maintenance does the machine need?
                </p>
                <p>
                  Very little. Its mild steel build and quality components mean
                  regular cleaning and routine servicing are usually enough.
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Q10. What is the price of a D-Motion Type Packaging Machine in
                  Delhi NCR?
                </p>
                <p>
                  The D-Motion Type Packaging Machine is priced at approximately
                  ₹3,50,000 to ₹4,00,000 per unit, depending on pouch size,
                  filling setup and customisation. Call 9990033381 or send an
                  enquiry through the website to get an exact quote.
                </p>
              </div>
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
