import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.screwbarrelpro.com"),
  title: {
    default: "Precision Bimetal Screw Barrel Manufacturer | Screw Barrel Group",
    template: "%s | Screw Barrel Group",
  },
  description:
    "Southeast Asia focused manufacturer of bimetallic and hardened screw barrels for injection molding, extrusion, blow molding, and recycling lines.",
  keywords: [
    "bimetallic screw barrel supplier",
    "injection molding screw barrel Southeast Asia",
    "extruder screw barrel manufacturer",
    "haitian injection machine screw barrel",
    "nitride screw barrels",
    "twin screw barrel manufacturer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Screw Barrel Group | Precision Bimetal Screw Barrel Manufacturer",
    description:
      "Durable bimetal and hardened screw barrels with rapid delivery to Singapore, Malaysia, Thailand, Vietnam, Indonesia, the Philippines, and China.",
    url: "https://www.screwbarrelpro.com",
    type: "website",
    locale: "en_US",
    siteName: "Screw Barrel Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Screw Barrel Group | Precision Bimetal Screw Barrel Manufacturer",
    description:
      "Trusted supplier of bimetallic, nitrided, and twin screw barrels engineered for abrasive and corrosive plastic processing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-brand-surface text-brand-steel antialiased`}
      >
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-50 -translate-y-16 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white shadow-lg transition focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex min-h-[calc(100vh-180px)] flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
