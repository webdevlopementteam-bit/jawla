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
    icon: "/logo/logo.png",
    shortcut: "/logo/logo2.png",
    apple: "/logo/logo2.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oxanium.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col m-0 p-0">
        <Navbar />
        <Breadcrumb />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
