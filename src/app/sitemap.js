const BASE_URL = "https://www.jawlaadvancetechnology.com";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/applications", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.6, changeFrequency: "monthly" },
  { path: "/news-exhibition", priority: 0.6, changeFrequency: "monthly" },
  { path: "/our-clients", priority: 0.5, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services-spares", priority: 0.6, changeFrequency: "monthly" },
];

const categoryRoutes = ["uncategorized", "blog"].map((slug) => `/category/${slug}`);

const productRoutes = [
  "/best-automatic-family-pack-rusk-packaging-machine",
  "/collar-auger-filling-packaging-machine",
  "/collar-type-cup-filler-packaging-machine",
  "/ffs-d-motion-type-packaging-machine",
  "/ffs-half-pneumatic-packaging-machine",
  "/ffs-high-speed-packaging-machine",
  "/ffs-liquid-packaging-machine",
  "/fully-automatic-multi-head-weighing-packaging-machine-jat-306",
  "/horizontal-flow-wrap-pillow-pack-high-speed-packaging-machine",
  "/horizontal-flow-wrap-pillow-pack-machine",
  "/horizontal-rotary-machine",
  "/hotel-pack-packaging-machine",
  "/normal-ffs-packaging-machine-jat-301",
  "/one-edge-biscuit-packaging-machine",
  "/one-edge-packaging-machine-with-cream-biscuit-feeder",
];

const blogRoutes = [
  "/best-packaging-machine-manufacturer-in-india",
  "/d-motion-type-packaging-machine",
  "/find-the-best-packaging-machine-manufacturer-in-india",
  "/high-speed-packaging-machine",
  "/hotel-pack-packaging-machines",
  "/normal-ffs-packaging-machine",
];

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const productEntries = productRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries = blogRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const categoryEntries = categoryRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticEntries, ...productEntries, ...blogEntries, ...categoryEntries];
}
