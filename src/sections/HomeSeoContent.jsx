const homeSeoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jawlaadvancetechnology.com/#webpage",
      url: "https://www.jawlaadvancetechnology.com/",
      name: "Best Packaging Machine Manufacturer in Faridabad | Jawla",
      description:
        "Jawla Advance Technology LLP is a best packaging machine manufacturer in Faridabad & Delhi NCR. FFS, flow wrap, auger & multi-head machines. Get a quote.",
      isPartOf: { "@id": "https://www.jawlaadvancetechnology.com/#website" },
      about: { "@id": "https://www.jawlaadvancetechnology.com/#localbusiness" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jawlaadvancetechnology.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best packaging machine manufacturer in Faridabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla Advance Technology LLP is one of the leading packaging machine manufacturers in Faridabad. It builds 15 models in-house at Sarurpur Industrial Area, Ballabgarh, serves 500+ clients in India and 25+ countries, and has its own installation and service team covering Delhi NCR.",
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
            text: "Jawla's packaging machines range from approximately ₹[PRICE MIN] to ₹[PRICE MAX], depending on the model, speed, automation level and custom features. Entry-level FFS machines cost the least, while high-speed and biscuit lines cost more. Share your requirement for an exact quote.",
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
          name: "What warranty does Jawla offer on packaging machines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jawla's packaging machines come with a [WARRANTY]-month warranty on manufacturing defects, along with ongoing service, preventive maintenance options and genuine spare parts support from the Faridabad factory.",
          },
        },
        {
          "@type": "Question",
          name: "How long does delivery take after ordering a packaging machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard Jawla models are usually dispatched within [WEEKS] weeks of order confirmation. Custom machines built for special products, pack sizes or line layouts may take longer, depending on the specifications agreed with the customer.",
          },
        },
      ],
    },
  ],
};

const howToChoose = [
  {
    question: "What is the product type? ",
    answer:
      "Free-flowing granules suit cup fillers, fine or sticky powders need an auger filler, liquids need a piston filler, and solid items like biscuits need a flow wrap machine.",
  },
  {
    question: "What pack weight do you need?",
    answer: " Our machines cover everything from 2 g sachets to 10 kg bags.",
  },
  {
    question: "How many packs per day?",
    answer:
      " Daily output decides whether a semi-automatic or a fully automatic machine gives you a better return.",
  },
  {
    question: "Which pouch style?",
    answer:
      " Center seal, 3-side seal, 4-side seal, pillow pack, gusset or zipper pouch.",
  },
];

const faqs = homeSeoSchema["@graph"][1].mainEntity.map((item) => ({
  question: item.name,
  answer: item.acceptedAnswer.text,
}));

export default function HomeSeoContent() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-black sm:mb-6 sm:text-3xl md:text-4xl">
          Best Packaging Machine Manufacturer
        </h1>

        <div className="space-y-5 text-sm leading-relaxed text-gray-700 sm:text-base">
          <p>
            Jawla Advance Technology LLP is a trusted Packaging Machines
            Manufacturer in Delhi NCR, offering reliable, efficient, and
            easy-to-operate packaging machines for different industries. As
            an experienced Packaging Machines Manufacturer in Faridabad, we
            understand the changing requirements of modern packaging
            businesses and develop machines that deliver consistent
            performance and productivity.
          </p>
          <p>
            With a focus on quality, innovation, and practical machine
            design, our skilled team provides custom packaging machine
            solutions tailored to specific production requirements. We
            continuously adopt new technologies and industry advancements to
            improve machine efficiency and ease of operation. From standard
            packaging equipment to customized solutions, Jawla Advance
            Technology LLP serves businesses across India and international
            markets, helping them achieve smoother and more efficient
            packaging operations.
          </p>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-bold leading-tight tracking-tight text-black sm:mt-10 sm:text-2xl md:text-3xl">
          Packaging Machinery That Drives Business Growth
        </h2>

        <div className="space-y-5 text-sm leading-relaxed text-gray-700 sm:text-base">
          <p>
            Jawla Advance Technology LLP is a trusted Packaging Machine
            Manufacturer in India, offering high-performance and
            easy-to-operate packaging solutions for a wide range of
            industries. With years of industry experience, we focus on
            delivering reliable, efficient, and durable machines designed to
            meet specific packaging requirements.
          </p>
          <p>
            Our advanced packaging machines are developed with a strong focus
            on quality, productivity, and product safety. From standard
            equipment to customized packaging solutions, our experienced team
            works closely with clients to provide machines that support
            smooth and efficient production processes.
          </p>
        </div>

        <h3 className="mb-4 mt-8 text-lg font-bold leading-tight tracking-tight text-black sm:mt-10 sm:text-xl md:text-2xl">
          How to Choose the Right Packaging Machine
        </h3>

        <ul className="space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
          {howToChoose.map((item, index) => (
            <li key={index}>
              <span className="font-semibold text-black">
                {item.question}
              </span>
              {item.answer}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 sm:text-base">
          Share these details with us, and our engineers will recommend the
          right model.
        </p>

        <h3 className="mb-4 mt-8 text-lg font-bold leading-tight tracking-tight text-black sm:mt-10 sm:text-xl md:text-2xl">
          Meet Us at Trade Shows
        </h3>
        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
          We regularly exhibit at leading food and packaging events,
          including AAHAR at Bharat Mandapam, ANUGA FoodTec India in Mumbai,
          IndusFood Hospitality and the World Mithai Namkeen Convention &amp;
          Expo in New Delhi. These shows let buyers see our latest machines
          working live.
        </p>

        <h3 className="mb-4 mt-8 text-lg font-bold leading-tight tracking-tight text-black sm:mt-10 sm:text-xl md:text-2xl">
          What Our Customers Value Most
        </h3>
        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
          Business owners who buy from us usually mention three things.
          First, they could see the machine packing their own product before
          paying. Second, our engineers reached their factory quickly when
          they needed help. Third, spare parts were available without long
          waits. These are the practical reasons a local, experienced
          manufacturer saves money over the life of a machine.
        </p>

        <h3 className="mb-4 mt-8 text-lg font-bold leading-tight tracking-tight text-black sm:mt-10 sm:text-xl md:text-2xl">
          Get a Quote From the Best Packaging Machine Manufacturer
        </h3>
        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
          Tell us your product, pack weight, pouch style and required speed.
          Our team will suggest the right model and share a detailed
          quotation. Call{" "}
          <a href="tel:+919990033381" className="font-semibold text-[#BB2426]">
            +91 99900 33381
          </a>
          , email{" "}
          <a
            href="mailto:sales@jawlatechnology.in"
            className="font-semibold text-[#BB2426]"
          >
            sales@jawlatechnology.in
          </a>{" "}
          or visit our factory in Ballabgarh, Faridabad. Choose Jawla Advance
          Technology, the best packaging machine manufacturer for businesses
          that want reliable machines and dependable service.
        </p>

        <h2 className="mb-6 mt-10 text-xl font-bold leading-tight tracking-tight text-black sm:mt-12 sm:text-2xl md:text-3xl">
          FAQs
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base font-bold text-black sm:text-lg">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }}
      />
    </section>
  );
}
