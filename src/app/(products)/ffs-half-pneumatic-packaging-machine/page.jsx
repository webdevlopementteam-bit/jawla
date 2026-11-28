import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/ffs-half-pneumatic-packaging-machine" },
  title: "Best Half Pneumatic Packaging Machine Manufacturer in Delhi NCR",
  description:
    "Buy Half Pneumatic Packaging Machine from Jawla Advance Technology. Packs 2g to 300g at up to 60 pouches/min with airtight pneumatic sealing.",
  keywords: [
    "Half Pneumatic Packaging Machine",
    "Half Pneumatic Packaging Machine Manufacturer",
    "Half Pneumatic Packaging Machine Price",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.jawlaadvancetechnology.com/ffs-half-pneumatic-packaging-machine#product",
      name: "Half Pneumatic Packaging Machine",
      category: "Half Pneumatic Packaging Machine",
      image: "https://www.jawlaadvancetechnology.com/PRODUCTS/ffs-half-pneumatic-packaging-machine/p1.webp",
      description: "Half pneumatic packaging machine manufactured in Delhi NCR by Jawla Advance Technology. FFS Half Pneumatic Packaging Machine packs 2 g to 300 g at up to 60 pouches per minute.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: { "@id": "https://www.jawlaadvancetechnology.com/#organization" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Pack size", value: "2 g to 300 g" },
        { "@type": "PropertyValue", name: "Output", value: "Up to 60 pouches per minute" },
        { "@type": "PropertyValue", name: "Filling system", value: "Volumetric cup filler" },
        { "@type": "PropertyValue", name: "Sealing", value: "Centre seal, airtight and leak-proof" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.jawlaadvancetechnology.com/ffs-half-pneumatic-packaging-machine",
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
        reviewCount: "24",
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
            text: "A half pneumatic packaging machine uses compressed air for part of its movement, usually sealing, while the rest runs mechanically. This gives firm, even sealing pressure at a lower cost than a fully automatic line. Jawla Advance Technology's FFS Half Pneumatic Packaging Machine uses this design for spice, tea and namkeen pouches.",
          },
        },
        {
          "@type": "Question",
          name: "What is a half pneumatic packaging machine used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is used to pack granular and powder products such as masala, spices, tea, coffee, namkeen, pulses and detergent into airtight pouches. Jawla Advance Technology's FFS Half Pneumatic Packaging Machine is mainly bought by small and medium food units moving from hand packing to machine packing.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a half pneumatic packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology FFS Half Pneumatic Packaging Machine half pneumatic packaging machine is priced based on pack range and accessories. It is one of the most affordable ways to start automatic pouch packing. Contact the Faridabad team for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "What pouch sizes can the FFS Half Pneumatic Packaging Machine fill?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The FFS Half Pneumatic Packaging Machine fills pouches from 2 g to 300 g using a volumetric cup system. You adjust or change the cups to change pack weight, so one machine can handle small sachets and larger retail pouches of spices, tea or namkeen.",
          },
        },
        {
          "@type": "Question",
          name: "How many pouches per minute does the FFS Half Pneumatic Packaging Machine produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The FFS Half Pneumatic Packaging Machine produces up to 60 pouches per minute. That is roughly 3,600 pouches an hour, many times faster than manual weighing and sealing, while giving every pouch the same weight and seal quality.",
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
          name: "Is the FFS Half Pneumatic Packaging Machine easy for first-time buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The FFS Half Pneumatic Packaging Machine is simple to run, and Jawla Advance Technology provides complete in-house training on operation, cleaning, maintenance and troubleshooting. Most operators become comfortable within a few days, even if they have never used a packaging machine before.",
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
          name: "Can I upgrade from the FFS Half Pneumatic Packaging Machine to a fully automatic machine later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many Jawla Advance Technology customers start with the FFS Half Pneumatic Packaging Machine and add a fully automatic machine such as the Normal FFS Packaging Machine or FFS High Speed FFS High Speed Packaging Machine when orders grow. The controls are familiar, so operators adapt quickly.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best half pneumatic packaging machine manufacturer in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best half pneumatic packaging machine manufacturers in Delhi NCR. It builds the FFS Half Pneumatic Packaging Machine in-house, lets buyers test their own product before ordering, and provides installation, full operator training, genuine spares and fast local service.",
          },
        },
      ],
    },
  ],
};

const machineTechnicalSpecs = [
  { feature: "Usage", spec: "Industrial" },
  { feature: "Material", spec: "Mild Steel" },
  { feature: "Feature", spec: "Highly Efficient" },
  { feature: "Computerized", spec: "No" },
  { feature: "Automatic Grade", spec: "Semi-Automatic" },
  { feature: "Control System", spec: "Frequency Speed Control" },
  { feature: "Drive Type", spec: "Electric" },
  { feature: "Voltage", spec: "220 Volt (V)" },
  { feature: "Warranty", spec: "1 Year" },
];

const priceDetails = [
  { feature: "Machine Name", value: "FFS Half Pneumatic Packaging Machine" },
  { feature: "Price", value: "₹2,50,000 / Unit" },
  { feature: "Minimum Order Quantity", value: "1 Unit" },
  { feature: "Warranty", value: "1 Year" },
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

const faqs = (
  jsonLd["@graph"].find((item) => item["@type"] === "FAQPage")?.mainEntity || []
).map((item, index) => ({
  question: `${index + 1}. ${item.name}`,
  answer: item.acceptedAnswer.text,
}));

export default function ProductDetailSection() {
  return (
    <>
      <section className="w-full bg-white font-sans">
        {/* Top Red Header Container */}
        <TopCard
          as="h1"
          title={"Half Pneumatic Packaging Machine"}
          image={"/PRODUCTS/ffs-half-pneumatic-packaging-machine/top.webp"}
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={"/PRODUCTS/ffs-half-pneumatic-packaging-machine/p1.webp"}
          showRating={false}
        >
          <div className="pt-1">
            <h2 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg mb-3">
              Technical Specifications of half pneumatic packaging machine
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Technical Parameter
                    </th>
                    <th className="py-2.5 px-4 font-bold text-gray-900">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {machineTechnicalSpecs.map((spec, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <td className="py-2.5 px-4 font-medium text-gray-800">
                        {spec.feature}
                      </td>
                      <td className="py-2.5 px-4 text-gray-700">
                        {spec.spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </MainProductDetails>

        {/* Title, Rating, Packing Products */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 space-y-3 sm:space-y-4">
         <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
           Half Pneumatic Packaging Machine Supplier In Delhi Ncr
          </h2>
          <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg pt-1 sm:pt-2">
            Packing Products
          </h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed max-w-2xl">
            Spices, Namkeen, Tea, Coffee, Heena, Powder, All granular &amp;
            Detergent
          </p>
          <p className="text-gray-500 font-bold text-sm sm:text-base md:text-sm lg:text-base leading-relaxed pt-1">
            Granule Packing Machine- Locks the Freshness and maintains Zero
            Leakage
          </p>
        </div>

        {/* Sample Packaging Products */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 pb-8 sm:pb-10 md:pb-12">
          <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-68 lg:h-80">
            <Image
              src="/PRODUCTS/ffs-half-pneumatic-packaging-machine/p2.webp"
              alt="Sample Packaging Products"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 60vw, 650px"
              className="object-contain object-left"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FBFBFB] py-12 px-4 md:px-8 lg:px-20 text-gray-700 border-t border-gray-200 font-sans space-y-10">
        {/* H1 + Quick Answer */}
        <div className="space-y-3">
          
          <p className="leading-relaxed">
            <span className="font-bold text-black">Quick answer: </span>
            Jawla Advance Technology LLP is a half pneumatic packaging
            machine manufacturer in Delhi NCR. Its FFS Half Pneumatic Packaging Machine packs
            masala, spices, tea, coffee, namkeen and detergent in 2 g to 300
            g pouches at up to 60 pouches per minute, with an airtight centre
            seal and full operator training included.
          </p>
          <p className="leading-relaxed">
            Cup filling plus a pneumatic seal cycle is what the FFS{" "}
            <a href="/contact"><span className="font-bold text-red-500 underline">
              Half Pneumatic Packaging Machine
            </span></a>{" "}
 runs on, packing masala, spices, tea, coffee, namkeen,
            detergent and other granular products in pouches from 2 g to 300
            g at up to 60 pouches per minute with a strong centre seal. Jawla
            Advance Technology LLP builds it in Delhi NCR, giving small and
            medium units airtight, leak-free packs at a budget-friendly
            price.
          </p>
        </div>

        {/* FFS Half Pneumatic Packaging Machine Price */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            FFS Half Pneumatic Packaging Machine Price
          </h2>
          <p className="leading-relaxed">
            The FFS Half Pneumatic Packaging Machine is an efficient
            packaging solution for industrial applications involving
            spices, namkeen, tea, coffee, henna powder, detergent, and other
            granular products. It is designed to provide consistent
            filling, secure sealing, and reliable packaging performance for
            small and medium-scale manufacturing businesses.
          </p>
          <p className="leading-relaxed">
            If you are looking for an FFS Half Pneumatic Packaging Machine
            Supplier in Delhi NCR, Jawla Advance Technology offers a
            reliable machine with semi-automatic operation, frequency speed
            control, and durable mild steel construction.
          </p>
          <p className="leading-relaxed">
            The machine is available at the following price:
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse text-base text-gray-700">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 font-bold text-black border-r border-gray-200 w-1/2">
                    Product Details
                  </th>
                  <th className="p-3 font-bold text-black w-1/2">Information</th>
                </tr>
              </thead>
              <tbody>
                {priceDetails.map((spec, index) => (
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
          <p className="leading-relaxed">
            Contact{" "}
            <Link
              href="/contact"
              className="text-[#E13538] font-bold hover:underline"
            >
              Jawla Advance Technology
            </Link>{" "}
            to enquire about machine availability and place your order.
          </p>
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

        {/* Who Should Buy the FFS Half Pneumatic Packaging Machine */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Should Buy the FFS Half Pneumatic Packaging Machine?
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
            Our team of skilled machinists builds each FFS Half Pneumatic Packaging Machine at our
            factory in Sarurpur Industrial Area, Ballabgarh, Faridabad. As a{" "}
            <span className="font-bold text-black">
              half pneumatic packaging machine
            </span>{" "}
            manufacturer focused on food packaging, we aim for three
            results: airtight sealing, maximum
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
            The FFS Half Pneumatic Packaging Machine is perfect for small to medium output. If your
            orders grow beyond 60 pouches per minute, our fully automatic
            range, including the{" "}
            <Link
              href="/normal-ffs-packaging-machine"
              className="text-[#E13538] font-bold hover:underline"
            >
              Normal FFS
            </Link>{" "}
            and{" "}
            <Link
              href="/ffs-high-speed-packaging-machine"
              className="text-[#E13538] font-bold hover:underline"
            >
              FFS High Speed
            </Link>
            , offers higher speeds. Many customers start with the FFS Half Pneumatic Packaging Machine and
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

        {/* Who Uses the FFS Half Pneumatic Packaging Machine */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Uses the FFS Half Pneumatic Packaging Machine in Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The FFS Half Pneumatic Packaging Machine is popular with first-time machine buyers. Typical
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
            An experienced{" "}
            <span className="font-bold text-black">
              half pneumatic packaging machine
            </span>{" "}
            manufacturer will help you plan all of this before delivery.
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
              href="/contact"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>
            . Jawla Advance Technology is the{" "}
            <span className="font-bold text-black">
              half pneumatic packaging machine
            </span>{" "}
            manufacturer that spice, tea and namkeen units across Delhi NCR
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
