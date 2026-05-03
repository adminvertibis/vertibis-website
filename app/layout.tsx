import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    default: "Vertibis – MSME Business Health Scoring Platform",
    template: "%s | Vertibis",
  },
  description:
    "Vertibis provides instant MSME business health scores and advisory insights for Chartered Accountants. Save time, strengthen client relationships, and unlock new revenue streams.",
  keywords: [
    "MSME health score",
    "business health scoring",
    "CA advisory platform",
    "GSTN integration",
    "MSME analytics India",
    "chartered accountant tools",
  ],
  metadataBase: new URL("https://vertibis.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vertibis.com",
    siteName: "Vertibis",
    title: "Vertibis – MSME Business Health Scoring Platform",
    description:
      "Instant health scores and advisory insights for Indian MSMEs and their Chartered Accountants.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertibis – MSME Business Health Scoring Platform",
    description:
      "Instant health scores and advisory insights for Indian MSMEs and their Chartered Accountants.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
