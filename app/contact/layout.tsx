import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Our Trading Team',
  description: 'Connect with our expert commodity trading teams in Dubai and Nairobi. Professional trading services for petroleum products, precious metals, and commodity requirements.',
  keywords: [
    'contact Loop Energy',
    'trading team contact',
    'Dubai office',
    'Nairobi office',
    'commodity trading contact',
    'petroleum trading inquiry',
    'precious metals contact',
    'partnership inquiry'
  ],
  openGraph: {
    title: 'Contact Our Trading Team - Loop Energy',
    description: 'Ready to discuss your commodity trading needs? Connect with our expert teams in Dubai and Nairobi for petroleum products, precious metals, and trading services.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}