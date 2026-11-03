import { Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.jawlaadvancetechnology.com"),
  title: {
    default:
      "Jawla Advance Technology - Best Packaging Machine Manufacturer",
    template: "%s | Jawla Advance Technology",
  },
  description:
    "Jawla Advance Technology is the best packaging machine manufacturer in Delhi NCR & India. Explore fully & semi-automatic, FFS, powder, liquid, flow wrap & biscuit packing machines.",
  keywords: [
    "Best Packaging Machine Manufacturer",
    "Jawla Advance Technology",
    "Packaging Machine",
    "Liquid Packaging Machine",
    "Powder Packaging Machine",
    "Fully Automatic Packaging Machine",
    "Semi Automatic Packaging Machine",
    "Normal FFS Packaging Machine",
    "FFS High Speed Packaging Machine",
    "D-Motion Type Packaging Machine",
    "Half Pneumatic Packaging Machine",
    "Horizontal Rotary Machine",
    "Fully Automatic Multi-Head Weighing, Packaging Machine",
    "Collar Auger Filling Packaging Machine",
    "Horizontal Flow Wrap Pillow Pack Machine",
    "Hotel Pack Packaging Machine",
    "Horizontal Flow Wrape Pillow Pack High Speed Packaging Machine",
    "One-Edge Biscuit Packaging Machine",
    "Automatic Family Pack Rusk Packaging Machine",
    "One-Edge Packaging Machine With Cream Biscuit Feeder",
    "Collar Type Cup Filler Packaging Machine",
  ],
  icons: {
    icon: "/logo/logo.webp",
    shortcut: "/logo/logo2.webp",
    apple: "/logo/logo2.webp",
  },
  verification: {
    google: "jN1haUl-peCS2as4Ec0NKTEJWKQjzRzQMgD2YHOuwJs",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jawlaadvancetechnology.com",
    siteName: "Jawla Advance Technology",
    title: "Jawla Advance Technology - Best Packaging Machine Manufacturer",
    description:
      "Leading manufacturer of high-performance packaging machines, FFS machines, pouch packing, liquid & powder packaging solutions in Delhi NCR, India.",
    images: [
      {
        url: "/logo/logo.webp",
        width: 800,
        height: 600,
        alt: "Jawla Advance Technology - Packaging Machine Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawla Advance Technology - Best Packaging Machine Manufacturer",
    description:
      "Leading manufacturer of automatic packaging machines, pouch packaging lines, and industrial packaging solutions in India.",
    images: ["/logo/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const SITE_URL = "https://www.jawlaadvancetechnology.com";

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Jawla Advance Technology LLP",
      alternateName: ["Jawla Advance Technology", "Jawla Packaging Machines"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo/logo.webp`,
      image: `${SITE_URL}/logo/logo.webp`,
      email: "sales@jawlatechnology.in",
      telephone: "+91-9990033381",
      sameAs: [
        "https://www.indiamart.com/jawlaadvancetechnology/",
        "https://www.facebook.com/jawlaadvancetechnology/",
        "https://www.instagram.com/jawlaadvancetechnology/",
        "https://in.linkedin.com/company/jawla-advance-technology-llp",
        "https://www.youtube.com/@jawlaadvancetechnology",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9990033381",
          contactType: "sales",
          areaServed: ["IN", "Worldwide"],
          availableLanguage: ["English", "Hindi"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No. 51/A, Gali No. 1, Sarurpur Industrial Area, Sohna Road, Ballabgarh",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Jawla Advance Technology LLP",
      url: SITE_URL,
      image: `${SITE_URL}/logo/logo.webp`,
      email: "sales@jawlatechnology.in",
      telephone: "+91-9990033381",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No. 51/A, Gali No. 1, Sarurpur Industrial Area, Sohna Road, Ballabgarh",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.3505239,
        longitude: 77.2773036,
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Delhi NCR",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Jawla Advance Technology LLP",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oxanium.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col m-0 p-0">
        <Navbar />
        <Breadcrumb />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
