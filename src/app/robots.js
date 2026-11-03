const BASE_URL = "https://www.jawlaadvancetechnology.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
