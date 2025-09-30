import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Commodity Trading',
  description: 'Professional commodity trading services with global reach. F.O.B & C.I.F trading, sourcing & procurement, and strategic market presence in Rotterdam, Jurong, and Fujairah.',
  keywords: [
    'commodity trading',
    'global trading',
    'F.O.B trading',
    'C.I.F trading',
    'petroleum trading',
    'sourcing procurement',
    'Rotterdam trading',
    'Jurong trading',
    'Fujairah trading',
    'energy markets'
  ],
  openGraph: {
    title: 'Global Commodity Trading Services - Loop Energy',
    description: 'Comprehensive trading solutions with strategic presence in key global energy markets. Expert sourcing, procurement, and transaction management.',
    type: 'website',
  },
}

export default function TradingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}