import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import TopCard from "@/components/TopCard";
import MainProductDetails from "@/components/MainProductDetails";

export const metadata = {
  alternates: { canonical: "/best-automatic-family-pack-rusk-packaging-machine" },
  title: "Automatic Family Pack Rusk Packaging Machine Manufacurer In Delhi Ncr",
  description:
    "Buy Automatic Family Pack Rusk Packaging Machine from Jawla Advance Technology. High speed family packs (50g–400g) for rusk, toast & biscuits.",
  keywords: [
    "Automatic Family Pack Rusk Packaging Machine",
    "Automatic Family Pack Rusk Packaging Machine manufacturer in delhi ncr",
    "Automatic Family Pack Rusk Packaging Machine price",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://www.jawlaadvancetechnology.com/best-automatic-family-pack-rusk-packaging-machine#product",
      name: "Automatic Family Pack Rusk Packaging Machine",
      category: "Rusk Packaging Machine",
      image: "https://www.jawlaadvancetechnology.com/PRODUCTS/best-automatic-family-pack-rusk-packaging-machine/p1.webp",
      description: "Automatic family pack rusk packaging machine manufactured by Jawla Advance Technology. Automatic Family Pack Rusk Packaging Machine packs 50 g to 400 g rusk, biscuit and cake family packs.",
      brand: { "@type": "Brand", name: "Jawla Advance Technology" },
      manufacturer: { "@id": "https://www.jawlaadvancetechnology.com/#organization" },
      weight: { "@type": "QuantitativeValue", value: 1300, unitCode: "KGM" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Pack size", value: "50 g to 400 g family packs" },
        { "@type": "PropertyValue", name: "Output", value: "Up to 60 packs per minute" },
        { "@type": "Feeding", value: "Automatic, with pushing chain and feeder belt" },
        { "@type": "PropertyValue", name: "Sealing", value: "Centre seal with front and back sealing" },
      ],
      offers: {
        "@type": "Offer",
        url: "https://www.jawlaadvancetechnology.com/best-automatic-family-pack-rusk-packaging-machine",
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
        reviewCount: "27",
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
          name: "Automatic Family Pack Rusk Packaging Machine",
          item: "https://www.jawlaadvancetechnology.com/best-automatic-family-pack-rusk-packaging-machine",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an automatic family pack rusk packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An automatic family pack rusk packaging machine feeds, groups and wraps rusk, biscuits or cakes into larger household packs without manual sealing. Jawla Advance Technology's Automatic Family Pack Rusk Packaging Machine packs 50 g to 400 g family packs at up to 60 packs per minute with a centre seal and front and back seals.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a family pack rusk packaging machine cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Jawla Advance Technology Automatic Family Pack Rusk Packaging Machine is priced based on pack range, feeding setup and customisation. Contact the Faridabad team with your rusk size and pack weights for the latest quote.",
          },
        },
        {
          "@type": "Question",
          name: "How many packs per minute does the Automatic Family Pack Rusk Packaging Machine produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Automatic Family Pack Rusk Packaging Machine produces up to 60 family packs per minute, which is about 3,600 packs an hour. Automatic feeding keeps output steady and reduces breakage compared with manual packing.",
          },
        },
        {
          "@type": "Question",
          name: "What pack sizes can the Automatic Family Pack Rusk Packaging Machine handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Automatic Family Pack Rusk Packaging Machine handles family packs from 50 g to 400 g. This covers small trial packs as well as the popular 200 g, 300 g and 400 g rusk and biscuit packs sold in kirana stores and supermarkets.",
          },
        },
        {
          "@type": "Question",
          name: "Can the Automatic Family Pack Rusk Packaging Machine pack biscuits and cakes as well as rusk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Automatic Family Pack Rusk Packaging Machine packs rusk, toast, biscuits, cookies, cakes and similar bakery items in family packs within the 50 g to 400 g range, which lets one machine serve several product lines.",
          },
        },
        {
          "@type": "Question",
          name: "How does the feeding system on the Automatic Family Pack Rusk Packaging Machine work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A pushing chain transfers products onto a feeder belt, and an 8-foot conveyor carries grouped products into the wrapping section. Front and back sealing then wraps them in laminated film, keeping rusk stable and reducing crumbs.",
          },
        },
        {
          "@type": "Question",
          name: "What are the power and weight of the Automatic Family Pack Rusk Packaging Machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Automatic Family Pack Rusk Packaging Machine runs at about 3 kW, controlled from an electrical panel with start, stop, reset and speed functions. It weighs about 1,300 kg, which keeps it stable and reduces vibration during long shifts.",
          },
        },
        {
          "@type": "Question",
          name: "How much maintenance does a rusk packing machine need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very little. The Automatic Family Pack Rusk Packaging Machine has a rust-proof powder coating and sturdy build, so daily crumb cleaning, regular jaw wiping and a periodic chain check are usually enough to keep it running smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the best automatic family pack rusk packaging machine manufacturer in Faridabad and Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP in Ballabgarh, Faridabad is one of the best automatic family pack rusk packaging machine manufacturers in Faridabad and Delhi NCR. It builds the Automatic Family Pack Rusk Packaging Machine in-house, lets bakeries test their own rusk before ordering, and provides installation, operator training, genuine spares and fast local service.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla Advance Technology install the Automatic Family Pack Rusk Packaging Machine and train operators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology installs and commissions the Automatic Family Pack Rusk Packaging Machine, sets it up for your pack sizes and trains your operators on running, cleaning and changeovers. Preventive maintenance, breakdown support and spares are available locally.",
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

const priceTradeInfo = [
  { feature: "Machine Name", value: "Automatic Family Pack Rusk Packaging Machine" },
  { feature: "Price", value: "₹7,50,000 / Unit" },
  { feature: "Minimum Order Quantity", value: "1 Unit" },
  { feature: "Payment Terms", value: "Cash in Advance (CID)" },
  { feature: "Supply Ability", value: "50 Units Per Month" },
  { feature: "Delivery Time", value: "10 Days" },
  { feature: "Main Domestic Market", value: "All India" },
];

const howItWorks = [
  "Feeding: a pushing chain transfers rusk or biscuits smoothly onto the feeder belt.",
  "Loading: the 8-foot conveyor carries grouped products into the packing section.",
  "Wrapping: laminated film forms around the product with a centre seal.",
  "End sealing: front and back seals close the pack securely.",
  "Discharge: finished family packs leave the machine ready for cartons.",
];

const packableProducts = [
  "Rusk and toast",
  "Biscuits and cookies in family packs",
  "Cakes and bakery slices",
  "Similar bakery items in the 50 g to 400 g range",
];

const featuresBenefits = [
  "Automatic feeding: less manual handling and steady output.",
  "Up to 60 packs per minute: strong productivity for medium and large bakeries.",
  "Moisture locking: the centre seal extends shelf life and keeps rusk crisp.",
  "Zero crumble packing: gentle transfer and precise wrapping reduce breakage.",
  "Durable build: rust-proof powder coating resists moisture and chemicals.",
  "Stable at speed: a 1,300 kg frame keeps vibration low.",
  "Simple controls: start, stop, reset and speed on one panel.",
  "Low maintenance: regular cleaning and basic checks are enough.",
];

const whyChooseReasons = [
  "They can test their rusk or biscuits on the machine at our factory.",
  "We set up the machine for their pack sizes and line layout.",
  "Our engineers install, commission and train operators.",
  "Service and spare parts are available quickly across Faridabad, Delhi, Gurugram, Noida and Ghaziabad.",
  "We also supply bakeries across India and in export markets.",
];

const buyersChecklist = [
  "Pack range: confirm your family packs fall within 50 g to 400 g.",
  "Product size: share rusk length, width and thickness for correct grouping.",
  "Breakage check: test your most fragile rusk to measure crumbs and broken pieces.",
  "Floor space: plan room for the 8-foot conveyor and a 1,300 kg machine.",
  "Power: arrange a stable supply for about 3 kW.",
  "Film: use heat-sealable laminate suited to your shelf-life needs.",
];

const maintenanceTips = [
  "Clean crumbs from the conveyor and feeder belt after every shift.",
  "Wipe sealing jaws to keep seals clean and strong.",
  "Check the pushing chain for smooth movement.",
  "Book preventive service before the festive season rush.",
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
          title={"Automatic Family Pack Rusk Packaging Machine"}
          image={
            "/PRODUCTS/best-automatic-family-pack-rusk-packaging-machine/top.webp"
          }
        />

        {/* Main Details Section */}
        <MainProductDetails
          MachineImage={
            "/PRODUCTS/best-automatic-family-pack-rusk-packaging-machine/p1.webp"
          }
          showRating={false}
        >
          <div className="pt-1">
            <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg mb-3">
              Technical Specifications of Automatic Family Pack Rusk Packaging Machine
            </h3>
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
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
           Automatic Family Pack Rusk Packaging Machine Manufacturer 
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <h3 className="text-black font-bold text-sm sm:text-base md:text-base lg:text-lg pt-1 sm:pt-2">
            Packing Products
          </h3>
          <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed max-w-2xl">
            Rusk, Cake, Biscuit
          </p>
          <p className="text-gray-500 font-bold text-sm sm:text-base md:text-sm lg:text-base leading-relaxed pt-1">
            Quickly Packing Cake, Rusk, and Biscuits in Larger Packets
          </p>
        </div>

        {/* Sample Packaging Products */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 pb-8 sm:pb-10 md:pb-12">
          <div className="relative w-full max-w-2xl h-64 sm:h-72 md:h-68 lg:h-80">
            <Image
              src="/PRODUCTS/best-automatic-family-pack-rusk-packaging-machine/p2.webp"
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
            Jawla Advance Technology LLP is an{" "}
           <a href="/contact"><span className="font-bold text-red-500 underline">
              Automatic Family Pack Rusk Packaging Machine
            </span></a>{" "}
            manufacturer in Faridabad, Delhi NCR. Its
            Automatic Family Pack Rusk Packaging Machine packs rusk, biscuits and cakes into 50 g to 400 g family
            packs at up to 60 packs per minute, with automatic feeding,
            centre sealing and a rust-proof, 1,300 kg frame.
          </p>
          <p className="leading-relaxed">
            <Link
              href="/"
              className="text-[#E13538] font-bold hover:underline"
            >
              Jawla Advance Technology
            </Link>{" "}
            LLP is an automatic family pack rusk packaging machine
            manufacturer in Faridabad and Delhi NCR. Our Automatic Family Pack Rusk Packaging Machine packs
            rusk, biscuits and cakes into family-size packs
            from 50 g to 400 g at up to 60 packs per minute. Automatic
            feeding and precise sealing give bakeries neat, attractive packs
            with minimal crumbling, ready for retail shelves.
          </p>
        </div>

        {/* Automatic Family Pack Rusk Packaging Machine Price */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Automatic Family Pack Rusk Packaging Machine Price
          </h2>
          <p className="leading-relaxed">
            The price of the Automatic Family Pack Rusk Packaging Machine
            is ₹7,50,000 per unit. This machine is designed for packaging
            rusk, biscuits, cakes, and other bakery products in
            family-size packets ranging from 50g to 400g. It offers
            efficient product feeding, smooth wrapping, and secure sealing
            to help manufacturers maintain consistent packaging quality.
          </p>
          <p className="leading-relaxed">
            Jawla Advance Technology is a trusted Automatic Family Pack
            Rusk Packaging Machine Manufacturer in Delhi NCR, providing
            packaging solutions for bakeries, food processing companies,
            and biscuit manufacturers. The machine is suitable for
            businesses looking to improve their packaging operations and
            handle larger product packs efficiently.
          </p>
          <p className="leading-relaxed">
            The pricing and trade details of the machine are provided
            below:
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
                {priceTradeInfo.map((spec, index) => (
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
          <p className="leading-relaxed">
            For product enquiries, bulk orders, and purchasing details,
            contact{" "}
            <Link
              href="/contact"
              className="text-[#E13538] font-bold hover:underline"
            >
              Jawla Advance Technology
            </Link>
            . The company also provides machine installation, operator
            training, and after-sales support.
          </p>
        </div>

        {/* How the Automatic Family Pack Rusk Packaging Machine Works */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            How the Automatic Family Pack Rusk Packaging Machine Works
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {howItWorks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed">
            This continuous flow keeps products stable and protects fragile
            rusk from breaking.
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

        {/* Why Family Packs Matter */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Why Family Packs Matter
          </h2>
          <p className="leading-relaxed">
            Family packs are among the fastest-moving bakery formats in
            India. Households buy larger packs of rusk and biscuits for
            daily tea, and retailers prefer neat, uniform packs that stack
            well. Packing these by hand is slow, uneven and causes breakage.
            An automatic family pack machine lets bakeries meet this demand
            with consistent quality.
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
            Why Choose Jawla Advance Technology as Your Automatic Family
            Pack Rusk Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            As an{" "}
            <span className="font-bold text-black">
              Automatic Family Pack Rusk Packaging Machine
            </span>{" "}
            manufacturer based in Ballabgarh, Faridabad, we build machines
            that match the
            realities of Indian bakeries. Bakery owners choose us because:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {whyChooseReasons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Choosing the Right Bakery Machine */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Choosing the Right Bakery Machine
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-black">
                This machine:
              </span>{" "}
              family packs from 50 g to 400 g, up to 60 packs per minute.
            </li>
            <li>
              <Link
                href="/one-edge-biscuit-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                One-Edge Biscuit Packaging Machine:
              </Link>{" "}
              one-edge 50 g, 75 g and 100 g biscuit packs, up to 200 packs
              per minute.
            </li>
            <li>
              <Link
                href="/horizontal-flow-wrape-pillow-pack-high-speed-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                High Speed Pillow Pack Machine:
              </Link>{" "}
              small 2 or 4 biscuit packs, up to 300 packs per minute.
            </li>
            <li>
              <Link
                href="/hotel-pack-packaging-machine"
                className="font-bold text-[#E13538] hover:underline"
              >
                Hotel Pack Packaging Machine:
              </Link>{" "}
              pillow and tray packs of cakes and bakery items, up to 80
              packs per minute.
            </li>
          </ul>
        </div>

        {/* Who Uses the Automatic Family Pack Rusk Packaging Machine */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Who Uses the Automatic Family Pack Rusk Packaging Machine in Faridabad and Delhi NCR
          </h2>
          <p className="leading-relaxed">
            The Automatic Family Pack Rusk Packaging Machine is chosen by bakeries that sell rusk and biscuits in
            larger household packs. Typical buyers include rusk makers in
            Faridabad, Palwal and Old Delhi, regional bakery brands
            supplying kirana stores across Delhi NCR, and cake and toast
            producers packing 200 g to 400 g family packs for supermarkets.
            Many are moving from manual pouch sealing, where breakage and
            uneven packs were common.
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
          <p className="leading-relaxed">
            A trusted{" "}
            <span className="font-bold text-black">
              Automatic Family Pack Rusk Packaging Machine
            </span>{" "}
            manufacturer will run your rusk on the machine before you buy.
          </p>
        </div>

        {/* Get the Best Price */}
        <div className="space-y-3">
          <h2 className="text-[#BB2426] text-xl font-bold mb-3">
            Get the Best Price From a Trusted Automatic Family Pack Rusk
            Packaging Machine Manufacturer
          </h2>
          <p className="leading-relaxed">
            Share your product, pack weights and daily target. Contact our
            team through the{" "}
            <Link
              href="/contact"
              className="text-[#E13538] font-bold hover:underline"
            >
              website enquiry form
            </Link>{" "}
            for a detailed quote. Choose Jawla Advance Technology, the
            automatic family pack rusk packaging machine manufacturer that
            bakeries across Faridabad and Delhi NCR trust.
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
