import Link from 'next/link'
import Image from 'next/image'
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Globe2
} from 'lucide-react'
import { site } from '@/lib/content'
import dynamic from 'next/dynamic'

// Import floating background as client-only component
const FloatingObjectsBackground = dynamic(() => import('./FloatingObjectsBackground'), {
  ssr: false
})

interface FooterProps {
  overlay?: 'gradient' | 'mesh' | 'none'
}

export default function Footer({ overlay = 'gradient' }: FooterProps) {

  const overlayClasses = {
    gradient: 'bg-gradient-to-t from-black/60 via-zinc-900/40 to-black/60',
    mesh: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/60 via-black/80 to-black',
    none: 'bg-black/30'
  }

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Trading', href: '/trading' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const resources = [
    { name: 'Product Catalog', href: '/products', icon: <FileText className="h-4 w-4" /> },
    { name: 'Trading Services', href: '/trading', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Partner Network', href: '/partners', icon: <HelpCircle className="h-4 w-4" /> }
  ]



  return (
    <footer className="relative min-h-[600px] overflow-hidden bg-black">
      {/* Floating Objects Background */}
      <FloatingObjectsBackground />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Content */}
      <div className="relative z-10 px-4 pt-16 pb-8">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {/* Column 1: Logo & Tagline */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-loop-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm"
                  aria-label="Loop Energy Home"
                >
                  <Image
                    src="/logo-clear.png"
                    alt="Loop Energy"
                    width={160}
                    height={36}
                    className="h-9 w-auto"
                  />
                </Link>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                Global commodity trading hub managing high-quality refined petroleum, precious metals, and minerals.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-gray-200">
                  <MapPin className="h-4 w-4 mr-3 text-loop-orange-400 flex-shrink-0" />
                  <span className="text-sm">Dubai, UAE | Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Phone className="h-4 w-4 mr-3 text-loop-orange-400 flex-shrink-0" />
                  <a
                    href={`tel:${site.contacts.phone}`}
                    className="text-sm hover:text-white hover:underline hover:glow transition-all focus:outline-none focus:ring-2 focus:ring-loop-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    {site.contacts.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-200">
                  <Mail className="h-4 w-4 mr-3 text-teal-400 flex-shrink-0" />
                  <a
                    href={`mailto:${site.contacts.email}`}
                    className="text-sm hover:text-white hover:underline hover:glow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                  >
                    {site.contacts.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <nav>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-white hover:underline hover:glow transition-all text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Globe2 className="h-5 w-5 mr-2 text-loop-orange-400" />
                  Global Reach
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Nairobi, Kenya</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Dubai, UAE</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-loop-orange-400" />
                  Compliance
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-loop-orange-400 rounded-full mr-2" />
                    ISO 9001:2015 (Quality)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-loop-orange-400 rounded-full mr-2" />
                    ISO 14001:2015 (Environment)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 bg-loop-orange-400 rounded-full mr-2" />
                    ISO 45001:2018 (H&S)
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Newsletter/CTA */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
              <p className="text-gray-200 text-sm mb-4">
                Subscribe to receive our latest insights and service updates.
              </p>
              <ul className="text-xs text-gray-400 space-y-2 mb-6 ml-1">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                  Commodity Trading
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                  Logistics Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2" />
                  Professional Advisory
                </li>
              </ul>

              <div className="space-y-4">
                {/* Newsletter Signup */}
                <form className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 italic">
                    Stay updated on our global trading and logistics operations.
                  </p>
                </form>

                <div className="flex space-x-2">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-white/10 border border-white/20 text-gray-200 text-xs font-medium rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/products"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-white/10 border border-white/20 text-gray-200 text-xs font-medium rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-600">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Dubai, UAE | Nairobi, Kenya
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Designed by{' '}
                  <a
                    href="https://www.datacare.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-loop-orange-400 hover:text-loop-orange-300 transition-colors"
                  >
                    DataCare
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/trading"
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-loop-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                >
                  Trading
                </Link>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-loop-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                >
                  Products
                </Link>
                <Link
                  href="/partners"
                  className="text-gray-300 hover:text-white hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-loop-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                >
                  Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}