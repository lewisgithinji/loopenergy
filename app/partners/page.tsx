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
  Target,
  Factory,
  Landmark,
  Ship,
  Warehouse,
  HardHat,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Global Partnership Network | Loop Energy Limited',
  description: 'Strategic partnerships with refineries, international banks, shipping lines, terminal operators, and logistics providers across Africa, UAE, and Europe for comprehensive trading solutions.',
  keywords: ['strategic partnerships', 'refinery partnerships', 'trade finance', 'shipping lines', 'terminal operators', 'logistics partners', 'mineral suppliers', 'global network', 'commodity trading partnerships'],
  openGraph: {
    title: 'Global Partnership Network | Loop Energy Limited',
    description: 'Building strong alliances with industry leaders for exceptional commodity trading value.',
    type: 'website',
  },
}


const partnerTypes = [
  { name: 'Refineries', icon: Factory, description: 'Direct sourcing of refined petroleum products' },
  { name: 'International Banks', icon: Landmark, description: 'Flexible trade finance and letters of credit' },
  { name: 'International Suppliers', icon: Briefcase, description: 'Reliable supply lines for minerals and metals' },
  { name: 'Shipping Lines', icon: Ship, description: 'Global maritime logistics and vessel management' },
  { name: 'Logistics & Storage', icon: Warehouse, description: 'Terminal access and secure storage facilities' },
  { name: 'Terminal Operators', icon: HardHat, description: 'Expert handling and distribution services' }
]

const partnerBenefits = [
  'Access to full supply chain infrastructure',
  'Strategic trade finance solutions',
  'Diverse and reliable product sourcing',
  'Global maritime and inland logistics support',
  'Access to essential storage and terminal facilities',
  'Expertise in terminal handling and customs'
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
      <section className="relative py-24 bg-navy-950 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/partners-hero.png"
            alt="Global Partner Network"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
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

      {/* Partner Network Section - Balanced Layout */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-800 mb-6 font-display">
              Our Partner Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic alliances with industry leaders enabling comprehensive commodity trading
              solutions across the global energy and precious metals markets.
            </p>
          </motion.div>

          {/* Strategic Stakeholders Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            {/* Left: Partner Types Grid */}
            <div className="xl:col-span-8">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Strategic Stakeholders</h3>
                <p className="text-gray-600">We collaborate with specialized global entities to ensure a seamless trading environment.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partnerTypes.map((type, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50/50 hover:bg-white group cursor-default">
                      <CardContent className="p-6">
                        <div className="h-12 w-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-loop-orange-600 transition-colors duration-300">
                          <type.icon className="h-6 w-6 text-loop-orange-600 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-navy-800 mb-2 group-hover:text-loop-orange-600 transition-colors">{type.name}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{type.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Benefits Card */}
            <div className="xl:col-span-4 sticky top-24">
              <Card className="bg-navy-900 border-none text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-loop-orange-500/10 rounded-bl-full translate-x-8 -translate-y-8" />
                <CardContent className="p-8 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-loop-orange-600 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <div className="space-y-5">
                    {partnerBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 bg-loop-orange-500/20 rounded-full p-1">
                          <CheckCircle className="h-4 w-4 text-loop-orange-400" />
                        </div>
                        <span className="text-base text-gray-300 leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-10 bg-loop-orange-600 hover:bg-loop-orange-700 text-white" asChild>
                    <Link href="/contact" className="gap-2">
                      Partner With Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
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
                <span>+254 711 409 228</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>info@loopenergyltd.com</span>
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