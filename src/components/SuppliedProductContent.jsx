export default function SuppliedProductContent({ page }) {
  const schema = {
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
            name: page.breadcrumb,
            item: `https://www.jawlaadvancetechnology.com${page.url}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <section className="w-full bg-white px-4 py-10 text-gray-700 sm:px-6 md:px-10 lg:px-16">
      <article className="mx-auto max-w-6xl space-y-8">
        <p className="leading-relaxed">
          <span className="font-bold text-black">Quick answer: </span>
          {page.quickAnswer}
        </p>
        {page.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-xl font-bold text-[#BB2426] sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.specs && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {section.specs.map(([feature, value]) => (
                      <tr key={feature} className="border-b border-gray-200">
                        <th className="px-3 py-2 font-semibold text-gray-900">
                          {feature}
                        </th>
                        <td className="px-3 py-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.items && (
              <ul className="list-disc space-y-2 pl-6">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="space-y-5">
          <h2 className="text-xl font-bold text-[#BB2426] sm:text-2xl">
            Frequently Asked Questions
          </h2>
          {page.faqs.map(({ question, answer }) => (
            <div key={question} className="space-y-1">
              <h3 className="font-bold text-gray-900">{question}</h3>
              <p className="leading-relaxed">{answer}</p>
            </div>
          ))}
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
