// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/site/Footer";
// import SupportChat from "@/components/support-chat";
import Script from "next/script";
import { orgJsonLd, site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "International commodity trading company specializing in petroleum products, precious metals, and minerals. Operating from Dubai and Kenya since 2014.",
  keywords: [
    "commodity trading",
    "petroleum products",
    "precious metals",
    "international trading",
    "Dubai",
    "Kenya",
    "minerals",
    "energy trading",
  ],
  metadataBase: new URL(site.url), // e.g. https://loopenergy.netlify.app or your live domain
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description:
      "International commodity trading company specializing in petroleum products, precious metals, and minerals.",
    siteName: "Loop Energy",
    images: [
      {
        url: "/og/og-image.jpg", // ensure 1200x630 exists under /public/og/
        width: 1200,
        height: 630,
        alt: "Loop Energy – Servicing your infrastructure. Powering your future.",
      },
    ],
    locale: "en_KE",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer overlay="gradient" />
        {/* <SupportChat /> */}

        {/* Organization JSON-LD (single source of truth from lib/content) */}
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </Script>
      </body>
    </html>
  );
}
