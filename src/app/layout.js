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
  title: "Jawla Advance Technology LLP - Best Packaging Machine Manufacturer",
  description:
    "Jawla Advance Technology LLP is leading best packaging machine manufacturer in Delhi NCR, specializing in high-performance, easy-to-operate packaging solutions.",
  icons: {
    icon: "/logo/logo.webp",
    shortcut: "/logo/logo2.webp",
    apple: "/logo/logo2.webp",
  },
  verification: {
    google: "jN1haUl-peCS2as4Ec0NKTEJWKQjzRzQMgD2YHOuwJs",
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
      url: SITE_URL,
      logo: `${SITE_URL}/logo/logo.webp`,
      image: `${SITE_URL}/logo/logo.webp`,
      email: "sales@jawlatechnology.in",
      telephone: "+91-9990033381",
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
      priceRange: "₹₹",
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
      areaServed: {
        "@type": "Place",
        name: "Delhi NCR",
      },
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
