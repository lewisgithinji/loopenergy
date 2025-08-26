import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Petroleum & Logistics', href: '/services/petroleum' },
      { name: 'Infrastructure Development', href: '/services/infrastructure' },
      { name: 'Equipment Hire', href: '/equipment-hire' },
      { name: 'Lubricants', href: '/services/lubricants' },
      { name: 'Chemicals', href: '/services/chemicals' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'HSE & Sustainability', href: '/hse-sustainability' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Insights', href: '/news' },
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Request Quote', href: '/contact#quote' },
      { name: 'Download Brochures', href: '/downloads' },
      { name: 'FAQ', href: '/faq' },
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Loop<span className="text-teal-400">Energy</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading petroleum supplier, infrastructure developer, and equipment hire company 
              serving Kenya and East Africa since 2013.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <div>Kindaruma Courts, Kindaruma Road</div>
                  <div>Nairobi, Kenya</div>
                  <div>P.O. Box 2596-20100, Nakuru</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <div className="text-sm text-gray-300">
                  +254 722 517923 / +254 731 624225
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <div className="text-sm text-gray-300">
                  loopenergy01@gmail.com
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <ExternalLink className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Loop Energy Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}