'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  MapPin,
  Building,
  Plane,
  Ship,
  Truck,
  Users,
  Award,
  TrendingUp,
  Target,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const globalOperations = [
  {
    region: 'Africa',
    headquarters: 'Nairobi, Kenya',
    description: 'Strategic hub for African markets and mining operations',
    focus: 'Minerals, precious metals, and regional commodity sourcing',
    icon: Target,
    color: 'from-green-500 to-emerald-600',
    coordinates: { x: 52, y: 58 }, // Approximate position on world map
    keyMarkets: ['Kenya', 'Tanzania', 'Uganda', 'DRC', 'Zambia'],
    specialties: [
      'Copper cathodes & concentrate',
      'Precious metals sourcing',
      'Tanzanite & gemstones',
      'Mining partnerships'
    ],
    stats: {
      partners: '25+',
      countries: '8',
      years: '10+'
    },
    contact: {
      phone: '+254 722 517923',
      email: 'africa@loopenergyltd.com'
    }
  },
  {
    region: 'Middle East',
    headquarters: 'Dubai, UAE',
    description: 'International trading hub and Gulf operations center',
    focus: 'Petroleum products, international trading, and financial services',
    icon: Building,
    color: 'from-blue-500 to-cyan-600',
    coordinates: { x: 58, y: 42 },
    keyMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
    specialties: [
      'Refined petroleum products',
      'International trading',
      'Financial structuring',
      'Logistics coordination'
    ],
    stats: {
      partners: '40+',
      countries: '12',
      years: '8+'
    },
    contact: {
      phone: '+971 4 123 4567',
      email: 'dubai@loopenergyltd.com'
    }
  },
  {
    region: 'Europe',
    headquarters: 'Strategic Partnerships',
    description: 'Market access and distribution networks across Europe',
    focus: 'Market penetration, end-user relationships, and regulatory compliance',
    icon: Globe,
    color: 'from-purple-500 to-indigo-600',
    coordinates: { x: 48, y: 32 },
    keyMarkets: ['Netherlands', 'Germany', 'UK', 'France', 'Italy'],
    specialties: [
      'Rotterdam operations',
      'Distribution networks',
      'Regulatory compliance',
      'End-user relationships'
    ],
    stats: {
      partners: '15+',
      countries: '6',
      years: '5+'
    },
    contact: {
      phone: '+31 20 123 4567',
      email: 'europe@loopenergyltd.com'
    }
  }
]

const tradingRoutes = [
  { from: 'Africa', to: 'Middle East', commodity: 'Minerals & Metals' },
  { from: 'Middle East', to: 'Europe', commodity: 'Petroleum Products' },
  { from: 'Africa', to: 'Europe', commodity: 'Precious Metals' }
]

const globalStats = [
  { icon: Globe, number: '50+', label: 'Countries Reached', color: 'text-blue-600' },
  { icon: Users, number: '80+', label: 'Global Partners', color: 'text-green-600' },
  { icon: Ship, number: '500+', label: 'Shipments Annually', color: 'text-purple-600' },
  { icon: Award, number: '99%', label: 'On-Time Delivery', color: 'text-orange-600' }
]

interface GlobalPresenceProps {
  className?: string
  showMap?: boolean
  variant?: 'full' | 'compact'
}

export default function GlobalPresence({
  className = '',
  showMap = true,
  variant = 'full'
}: GlobalPresenceProps) {
  return (
    <section className={`py-20 bg-navy-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Market Presence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic operations across three continents, enabling comprehensive
            commodity trading solutions and market access worldwide.
          </p>
        </motion.div>

        {/* World Map Visualization */}
        {showMap && variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-navy-900/50 rounded-lg overflow-hidden">
                {/* Simplified World Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {/* Simplified continent shapes */}
                    <path d="M15,25 Q20,20 25,25 L30,30 Q25,35 20,30 Z" fill="currentColor" opacity="0.3" />
                    <path d="M45,20 Q55,15 65,20 L70,25 Q65,35 55,30 L50,25 Z" fill="currentColor" opacity="0.3" />
                    <path d="M75,30 Q85,25 90,35 L85,45 Q80,40 75,35 Z" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>

                {/* Operation Markers */}
                {globalOperations.map((operation, index) => (
                  <motion.div
                    key={operation.region}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `${operation.coordinates.x}%`,
                      top: `${operation.coordinates.y}%`
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${operation.color} border-2 border-white shadow-lg group-hover:scale-125 transition-transform flex items-center justify-center`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-navy-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                        {operation.region} Operations
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Trading Routes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgba(249, 115, 22, 0.6)" />
                    </marker>
                  </defs>
                  {/* Animated trade routes */}
                  <path
                    d="M30,35 Q45,25 60,32"
                    stroke="rgba(249, 115, 22, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                  />
                  <path
                    d="M65,32 Q75,28 85,35"
                    stroke="rgba(249, 115, 22, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    markerEnd="url(#arrowhead)"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regional Operations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {globalOperations.map((operation, index) => (
            <motion.div
              key={operation.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border-white/20 text-white h-full hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${operation.color} mr-4`}>
                      <operation.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{operation.region}</h3>
                      <p className="text-gray-300 text-sm">{operation.headquarters}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{operation.description}</p>

                  {/* Focus Area */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-loop-orange-400 mb-2">Focus Area</h4>
                    <p className="text-gray-300 text-sm">{operation.focus}</p>
                  </div>

                  {/* Key Markets */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-loop-orange-400 mb-2">Key Markets</h4>
                    <div className="flex flex-wrap gap-1">
                      {operation.keyMarkets.map((market, idx) => (
                        <span key={idx} className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  {variant === 'full' && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-loop-orange-400 mb-2">Specialties</h4>
                      <div className="space-y-1">
                        {operation.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-loop-orange-400 rounded-full mr-2" />
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-loop-orange-400">{operation.stats.partners}</div>
                      <div className="text-xs text-gray-400">Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-loop-orange-400">{operation.stats.countries}</div>
                      <div className="text-xs text-gray-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-loop-orange-400">{operation.stats.years}</div>
                      <div className="text-xs text-gray-400">Experience</div>
                    </div>
                  </div>

                  {/* Contact */}
                  {variant === 'full' && (
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center text-gray-300">
                        <Phone className="h-3 w-3 mr-2" />
                        {operation.contact.phone}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="h-3 w-3 mr-2" />
                        {operation.contact.email}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {globalStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl md:text-4xl font-bold text-loop-orange-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Access Global Markets?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with our regional teams to explore trading opportunities
              and market access across Africa, Middle East, and Europe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <MapPin className="mr-2 h-5 w-5" />
                  Contact Regional Office
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-800" asChild>
                <Link href="/trading">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Explore Trading Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}