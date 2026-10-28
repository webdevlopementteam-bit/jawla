import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const homeSeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jawlaadvancetechnology.com/#webpage",
      url: "https://www.jawlaadvancetechnology.com/",
      name: "Best Packaging Machine Manufacturer in Delhi NCR | Jawla",
      description:
        "Jawla Advance Technology LLP is a best packaging machine manufacturer in Delhi NCR. FFS, flow wrap, auger & multi-head machines. Get a quote.",
      isPartOf: { "@id": "https://www.jawlaadvancetechnology.com/#website" },
      about: { "@id": "https://www.jawlaadvancetechnology.com/#localbusiness" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jawlaadvancetechnology.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best packaging machine manufacturer in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP is one of the leading packaging machine manufacturers in Delhi NCR. It builds 15 models in-house at Sarurpur Industrial Area, Ballabgarh, serves 500+ clients in India and 25+ countries, and has its own installation and service team covering Delhi NCR.",
          },
        },
        {
          "@type": "Question",
          name: "What types of packaging machines does Jawla manufacture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla manufactures vertical FFS pouch machines, liquid packaging machines, collar auger fillers, collar cup fillers, multi-head weighing machines, horizontal rotary machines, horizontal flow wrap pillow pack machines and dedicated biscuit, rusk and cream biscuit packaging machines.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of a packaging machine in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The price of a packaging machine from Jawla Advance Technology depends on the model, speed, automation level and custom features you need. Entry-level FFS machines are the most affordable, while high-speed and biscuit packaging lines cost more. Share your product, pack size and daily output to get an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla provide installation and training in Delhi NCR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla's engineers install and commission every machine at the customer's site and train operators on running, changeovers, cleaning and basic troubleshooting. On-site and remote training are both available, and the Faridabad-based service team covers all of Delhi NCR.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right packaging machine for my product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose based on four things: product type, pack weight, daily output and pouch style. Free-flowing products suit cup fillers, sticky powders need auger fillers, liquids need piston fillers and biscuits need flow wrap machines. Jawla recommends a model after testing your product.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between automatic and semi-automatic packaging machines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fully automatic machines form, fill, seal and cut pouches without manual work and suit high, steady output. Semi-automatic machines need some manual steps, cost less and suit startups and small units. Jawla makes both, so buyers can start small and upgrade later.",
          },
        },
        {
          "@type": "Question",
          name: "Can I see a live demo before buying a packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can visit Jawla's factory in Ballabgarh, Faridabad to see machines running and test your own product, or request a video demo. Seeing your product packed before buying is the best way to judge speed, accuracy and seal quality.",
          },
        },
        {
          "@type": "Question",
          name: "Does Jawla export packaging machines outside India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Jawla Advance Technology has supplied packaging machines to clients in 25+ countries and handles export packing and documentation. Remote support and training help overseas customers run their machines smoothly after delivery.",
          },
        },
        {
          "@type": "Question",
          name: "What warranty does Jawla Advance Technology offer on packaging machines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every packaging machine from Jawla Advance Technology comes with a warranty against manufacturing defects, covering the machine and its auxiliary parts. This is backed by ongoing service, preventive maintenance options and genuine, tested spare parts supplied from the Faridabad factory.",
          },
        },
        {
          "@type": "Question",
          name: "How long does delivery take after ordering a packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology dispatches standard packaging machines quickly after order confirmation, and the exact delivery timeline is shared in your quotation. Custom machines built for special products, pack sizes or line layouts may take a little longer, depending on the specifications agreed with you.",
          },
        },
      ],
    },
  ],
};

const faqs = homeSeoSchema["@graph"][1].mainEntity.map((item) => ({
  question: item.name,
  answer: item.acceptedAnswer.text,
}));

export default function HomeSeoContent() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Get a Quote CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#BB2426] to-[#7a1618] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 sm:h-72 sm:w-72"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-black/10"
          />

          <div className="relative">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
              Request a Quotation
            </p>
            <h2 className="mb-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Get a Quote From the Best Packaging Machine Manufacturer
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Tell us your product, pack weight, pouch style and required
              speed. Our team will suggest the right model and share a
              detailed quotation. Choose Jawla Advance Technology, the best
              packaging machine manufacturer for businesses that want
              reliable machines and dependable service.
            </p>

            {/* Contact chips */}
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <a
                href="tel:+919990033381"
                className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
              >
                <FaPhoneAlt className="text-white/80" />
                +91 99900 33381
              </a>
              <a
                href="mailto:sales@jawlatechnology.in"
                className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-base"
              >
                <FaEnvelope className="text-white/80" />
                sales@jawlatechnology.in
              </a>
              <span className="flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm sm:text-base">
                <FaMapMarkerAlt className="text-white/80" />
                Ballabgarh, Faridabad
              </span>
            </div>

            {/* CTA button */}
            <div className="mt-8 sm:mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#BB2426] shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
              >
                Visit Our Contact Page
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 mt-10 text-xl font-bold leading-tight tracking-tight text-black sm:mt-12 sm:text-2xl md:text-3xl">
            FAQs
          </h2>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-4 sm:py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-black marker:content-none [&::-webkit-details-marker]:hidden sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#BB2426] text-base font-bold leading-none text-[#BB2426] transition-transform duration-200 group-open:rotate-45 sm:h-7 sm:w-7">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }}
      />
    </section>
  );
}
