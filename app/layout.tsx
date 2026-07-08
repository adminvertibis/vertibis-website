import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getCmsData } from "./lib/cms-store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vertibis | MSME Business Health Intelligence Ecosystem",
    template: "%s | Vertibis",
  },
  description:
    "Vertibis is building an explainable MSME Health Intelligence ecosystem for CAs, MSMEs, lenders, insurers and enterprises.",
  keywords: [
    "MSME health score",
    "business health intelligence",
    "CA partner programme",
    "loan readiness",
    "vendor health intelligence",
    "GST API testing",
    "Registered ASP TaxPro GSTP",
  ],
  metadataBase: new URL("https://vertibis.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vertibis.com",
    siteName: "Vertibis",
    title: "Vertibis | MSME Business Health Intelligence Ecosystem",
    description:
      "Explainable MSME Health Intelligence for CAs, MSMEs, lenders, insurers and enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertibis | MSME Business Health Intelligence Ecosystem",
    description:
      "Explainable MSME Health Intelligence for CAs, MSMEs, lenders, insurers and enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cms = await getCmsData();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <Navbar navigation={cms.navigation} settings={cms.settings} />
        <main>{children}</main>
        <Footer navigation={cms.navigation} settings={cms.settings} />
      </body>
    </html>
  );
}
