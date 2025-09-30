import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategic Global Partnerships',
  description: 'Building strong alliances with industry leaders across refineries, financial institutions, shipping lines, and terminal operators for exceptional value delivery.',
  keywords: [
    'strategic partnerships',
    'global partners',
    'refineries partnerships',
    'financial institutions',
    'shipping lines',
    'terminal operators',
    'partner network',
    'strategic alliances',
    'commodity partnerships'
  ],
  openGraph: {
    title: 'Strategic Global Partnerships - Loop Energy',
    description: 'Strong alliances with industry leaders enabling comprehensive trading solutions and exceptional value across global energy and precious metals markets.',
    type: 'website',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}