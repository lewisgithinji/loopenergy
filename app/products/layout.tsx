import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Product Portfolio',
  description: 'Comprehensive range of refined petroleum products, precious metals, minerals, and by-products. High-quality commodities with international certification and global delivery.',
  keywords: [
    'petroleum products',
    'refined petroleum',
    'precious metals',
    'gold bars',
    'silver bars',
    'copper cathodes',
    'aluminum ingots',
    'tanzanite',
    'bitumen',
    'jet fuel',
    'commodity products'
  ],
  openGraph: {
    title: 'Premium Product Portfolio - Loop Energy',
    description: 'Global trading of refined petroleum products, precious metals, minerals, and industrial commodities with certified quality and competitive pricing.',
    type: 'website',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}