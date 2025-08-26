import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SupportChat } from '@/components/support-chat'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Loop Energy Limited - Petroleum, Infrastructure & Energy Solutions',
  description:
    'Leading petroleum supplier, infrastructure developer and equipment hire company in Kenya. Servicing your infrastructure, powering your future.',
  keywords: ['petroleum', 'infrastructure', 'equipment hire', 'Kenya', 'energy solutions'],
  metadataBase: new URL('https://www.loopenergy.co.ke'), // ← change to your live domain
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://www.loopenergy.co.ke',
    title: 'Loop Energy Limited',
    description:
      'Leading petroleum supplier, infrastructure developer and equipment hire company in Kenya.',
    siteName: 'Loop Energy',
    images: [
      {
        url: '/og/og-image.jpg', // put a 1200x630 image in /public/og/
        width: 1200,
        height: 630,
        alt: 'Loop Energy – Servicing your infrastructure. Powering your future.',
      },
    ],
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loop Energy Limited',
    description:
      'Leading petroleum supplier, infrastructure developer and equipment hire company in Kenya.',
    images: ['/og/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SupportChat />

        {/* JSON-LD structured data for SEO */}
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Loop Energy Limited',
            url: 'https://www.loopenergy.co.ke',
            logo: 'https://www.loopenergy.co.ke/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nairobi',
              addressCountry: 'KE',
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+254722517923',
                contactType: 'customer service',
                areaServed: 'KE',
                availableLanguage: ['English', 'Swahili'],
              },
            ],
          })}
        </Script>
      </body>
    </html>
  )
}
