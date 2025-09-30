import Link from 'next/link'
import Image from 'next/image'
import {
  Linkedin,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  BookOpen,
  HelpCircle
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
    gradient: 'bg-gradient-to-t from-black/70 via-zinc-900/70 to-black/70',
    mesh: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/70 via-zinc-900/70 to-black/70',
    none: 'bg-black/50'
  }

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Trading', href: '/trading' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' }
  ]

  const resources = [
    { name: 'Product Catalog', href: '/products', icon: <FileText className="h-4 w-4" /> },
    { name: 'Trading Services', href: '/trading', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Partner Network', href: '/partners', icon: <HelpCircle className="h-4 w-4" /> }
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: site.social.linkedin || '#', 
      icon: <Linkedin className="h-5 w-5" />,
      ariaLabel: 'Follow Loop Energy on LinkedIn' 
    },
    { 
      name: 'Twitter', 
      href: site.social.twitter || '#', 
      icon: <Twitter className="h-5 w-5" />,
      ariaLabel: 'Follow Loop Energy on Twitter' 
    },
    { 
      name: 'YouTube', 
      href: '#', 
      icon: <Youtube className="h-5 w-5" />,
      ariaLabel: 'Subscribe to Loop Energy YouTube channel' 
    }
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
                Powering growth with clean energy & automation solutions across East Africa.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-gray-200">
                  <MapPin className="h-4 w-4 mr-3 text-loop-orange-400 flex-shrink-0" />
                  <span className="text-sm">{site.contacts.address}</span>
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
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <nav>
                <ul className="space-y-3 mb-8">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <Link
                        href={resource.href}
                        className="flex items-center text-gray-200 hover:text-white hover:underline hover:glow transition-all text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
                      >
                        <span className="mr-2 text-teal-400">{resource.icon}</span>
                        {resource.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="text-gray-300 hover:text-teal-400 transition-colors p-2 rounded-full hover:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      {social.icon}
                    </a>
                  ))}
                  {/* WhatsApp Link */}
                  <a
                    href={site.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Loop Energy on WhatsApp"
                    className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter/CTA */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
              <p className="text-gray-200 text-sm mb-6">
                Get updates on our latest projects, services, and industry insights.
              </p>
              
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
                  <p className="text-xs text-gray-400">
                    Get project updates, industry insights, and equipment availability alerts.
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
                  Nairobi, Kenya
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