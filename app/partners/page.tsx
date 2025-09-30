'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Building,
  Truck,
  Anchor,
  CreditCard,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Award,
  Shield,
  Target
} from 'lucide-react'
import Link from 'next/link'

const partnerCategories = [
  {
    title: 'Refineries & Producers',
    description: 'Strategic partnerships with leading refineries and petroleum product producers',
    icon: Building,
    partners: [
      'Major international refineries',
      'Regional petroleum producers',
      'Specialty product manufacturers',
      'Quality certified suppliers'
    ],
    benefits: [
      'Direct supply chain access',
      'Competitive pricing structures',
      'Quality assurance programs',
      'Flexible delivery terms'
    ]
  },
  {
    title: 'International Banks',
    description: 'Financial partnerships enabling seamless global transactions',
    icon: CreditCard,
    partners: [
      'Tier 1 international banks',
      'Trade finance specialists',
      'Documentary credit providers',
      'Foreign exchange partners'
    ],
    benefits: [
      'Letters of credit facilitation',
      'Trade finance solutions',
      'Multi-currency transactions',
      'Risk mitigation instruments'
    ]
  },
  {
    title: 'Shipping & Logistics',
    description: 'Comprehensive shipping and logistics partnerships for global reach',
    icon: Truck,
    partners: [
      'Major shipping lines',
      'Specialized tanker operators',
      'Logistics service providers',
      'Port and terminal operators'
    ],
    benefits: [
      'Global shipping capacity',
      'Specialized vessel access',
      'Optimized routing solutions',
      'Real-time cargo tracking'
    ]
  },
  {
    title: 'Terminal & Storage',
    description: 'Strategic storage and terminal partnerships across key markets',
    icon: Anchor,
    partners: [
      'International terminal operators',
      'Storage facility providers',
      'Blending and processing facilities',
      'Port service providers'
    ],
    benefits: [
      'Strategic storage locations',
      'Flexible storage terms',
      'Value-added services',
      'Enhanced supply chain efficiency'
    ]
  }
]

const globalNetwork = [
  {
    region: 'Africa',
    description: 'Strategic partnerships across mineral-rich African markets',
    focus: 'Mining operations, precious metals, mineral extraction',
    keyPartners: ['Mining consortiums', 'Mineral producers', 'Local suppliers'],
    icon: Globe
  },
  {
    region: 'Middle East',
    description: 'UAE-based operations and Gulf region partnerships',
    focus: 'Petroleum products, refinery partnerships, trading hubs',
    keyPartners: ['Regional refineries', 'Trading companies', 'Financial institutions'],
    icon: Building
  },
  {
    region: 'Europe',
    description: 'European market access and distribution networks',
    focus: 'Market distribution, end-user relationships, regulatory compliance',
    keyPartners: ['Distribution networks', 'End-user clients', 'Regulatory bodies'],
    icon: Target
  }
]

const partnershipValues = [
  {
    title: 'Strategic Collaboration',
    description: 'Building long-term partnerships based on mutual growth and success',
    icon: Users
  },
  {
    title: 'Quality Assurance',
    description: 'Maintaining highest standards through certified partner networks',
    icon: Award
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation across all partnerships',
    icon: Shield
  },
  {
    title: 'Global Reach',
    description: 'Extensive network enabling worldwide market access and delivery',
    icon: Globe
  }
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Strategic Global
                <br />
                <span className="text-loop-orange-400">Partnerships</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Building strong alliances with industry leaders across refineries, financial institutions,
                shipping lines, and terminal operators to deliver exceptional value to our clients.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                  <Link href="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Partner With Us
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800" asChild>
                  <Link href="/trading">
                    <Globe className="mr-2 h-5 w-5" />
                    Trading Services
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Strategic alliances with industry leaders enabling comprehensive commodity trading
              solutions across the global energy and precious metals markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <category.icon className="h-8 w-8 text-loop-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-navy-800">{category.title}</h3>
                    </div>
                    <p className="text-foreground/70 mb-6">{category.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-3">Partner Types</h4>
                        <div className="space-y-2">
                          {category.partners.map((partner, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-loop-orange-600 rounded-full" />
                              <span className="text-sm text-foreground/70">{partner}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {category.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-loop-orange-600" />
                              <span className="text-sm text-foreground/70">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Partnership Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic presence across three key regions, leveraging local partnerships
              for global reach and market expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalNetwork.map((network, index) => (
              <motion.div
                key={network.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 border-white/20 text-white h-full">
                  <CardContent className="p-8">
                    <network.icon className="h-12 w-12 text-loop-orange-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{network.region}</h3>
                    <p className="text-gray-300 text-sm mb-4">{network.description}</p>

                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Focus Area</p>
                      <p className="text-sm font-medium">{network.focus}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Key Partners</p>
                      <div className="space-y-1">
                        {network.keyPartners.map((partner, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-loop-orange-400 rounded-full" />
                            <span className="text-xs text-gray-300">{partner}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Partnership Values
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              The principles that guide our approach to building and maintaining
              strategic partnerships across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-loop-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-navy-800 mb-3">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Become a Strategic Partner
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join our network of global partners and unlock new opportunities in
              commodity trading and energy markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Partnership Inquiry
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  <Shield className="mr-2 h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/70">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>+254 722 517923</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>partnerships@loopenergyltd.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>Dubai, UAE | Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}