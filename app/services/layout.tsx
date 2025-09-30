import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Trading Services',
  description: 'Comprehensive trading solutions including operations management, logistics management, financial structuring, strategic advisory, and commodity sourcing services.',
  keywords: [
    'trading services',
    'operations management',
    'logistics management',
    'financial structuring',
    'strategic advisory',
    'commodity sourcing',
    'AI-driven insights',
    'supply chain management',
    'risk management'
  ],
  openGraph: {
    title: 'Professional Trading Services - Loop Energy',
    description: 'Expert trading solutions and advisory services designed to optimize commodity trading operations and maximize market opportunities.',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}