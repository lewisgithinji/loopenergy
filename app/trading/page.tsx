'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  TrendingUp,
  Fuel,
  Shield,
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  Building,
  Truck
} from 'lucide-react'
import Link from 'next/link'

const tradingCapabilities = [
  {
    title: 'F.O.B Trading',
    description: 'Free on Board trading services with comprehensive logistics support',
    features: ['Quality assurance', 'Documentation handling', 'Loading supervision']
  },
  {
    title: 'C.I.F Trading',
    description: 'Cost, Insurance, and Freight services for complete delivery solutions',
    features: ['Insurance coverage', 'Freight arrangements', 'Port handling']
  }
]

const energyMarkets = [
  {
    location: 'Rotterdam',
    region: 'Europe',
    description: 'Vital gateway to European markets and major refining hub',
    focus: 'Refined petroleum products distribution',
    icon: Building
  },
  {
    location: 'Jurong',
    region: 'Asia',
    description: 'Critical trading and refining center serving robust Asian markets',
    focus: 'Regional trading operations',
    icon: TrendingUp
  },
  {
    location: 'Fujairah',
    region: 'Middle East',
    description: 'Pivotal global bunkering and oil storage hub',
    focus: 'International trading crossroads',
    icon: Fuel
  }
]

const productCategories = [
  {
    category: 'Refined Petroleum Products',
    items: ['EN590 10 & 50 PPM', 'Diesel D6', 'Gasoline', 'Jet A1 Fuel'],
    description: 'High-quality refined petroleum products meeting international standards'
  },
  {
    category: 'Precious Metals',
    items: ['High-purity Gold', 'Silver Bars'],
    description: 'Premium precious metals with certified quality and authentication'
  },
  {
    category: 'Minerals',
    items: ['Copper Cathodes', 'Copper Concentrate', 'Aluminum Ingots', 'Tanzanite'],
    description: 'Diverse mineral portfolio sourced through strategic African partnerships'
  },
  {
    category: 'Petroleum By-products',
    items: ['Sulphur Granules', 'Sulphuric Acid', 'Urea', 'Bitumen'],
    description: 'Essential by-products supporting various industrial applications'
  }
]

export default function TradingPage() {
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
                Global Commodity
                <br />
                <span className="text-loop-orange-400">Trading Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Leveraging global market reach and deep industry expertise to provide efficient,
                innovative, and transparent commodity trading services across diverse portfolios.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                  <Link href="/products">
                    <Fuel className="mr-2 h-5 w-5" />
                    View Our Products
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800" asChild>
                  <Link href="/contact">
                    <Globe className="mr-2 h-5 w-5" />
                    Start Trading
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sourcing & Procurement */}
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
              Sourcing & Procurement Excellence
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Leveraging strategic partnerships with producers, refineries, and mine owners to ensure
              steady, high-quality supply of commodities meeting international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Strategic Network</h3>
              <div className="space-y-4">
                {[
                  'Wide network of strategic partnerships',
                  'Direct relationships with producers and refineries',
                  'Quality assurance and compliance management',
                  'Adherent to international specifications',
                  'Sustainable sourcing practices'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-loop-orange-600 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8"
            >
              <Award className="h-12 w-12 text-loop-orange-600 mb-4" />
              <h4 className="text-xl font-bold text-navy-800 mb-4">Quality Assurance</h4>
              <p className="text-foreground/70 mb-4">
                Our rigorous quality control processes ensure all commodities meet or exceed
                international industry standards and client specifications.
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>• Certified testing procedures</li>
                <li>• Third-party verification</li>
                <li>• Documentation compliance</li>
                <li>• Continuous monitoring</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trading Capabilities */}
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
              Trading Capabilities
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive trading services with flexible terms to meet diverse client requirements
              and market conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Truck className="h-12 w-12 text-loop-orange-600 mb-4" />
                    <h3 className="text-xl font-bold text-navy-800 mb-4">{capability.title}</h3>
                    <p className="text-foreground/70 mb-6">{capability.description}</p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-loop-orange-600" />
                          <span className="text-sm text-foreground/60">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Markets */}
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
              Strategic Energy Markets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Demonstrating strategic presence within global energy markets through key international
              trading operations positioned at critical energy centers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {energyMarkets.map((market, index) => (
              <motion.div
                key={market.location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 border-white/20 text-white h-full">
                  <CardContent className="p-8 text-center">
                    <market.icon className="h-12 w-12 text-loop-orange-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{market.location}</h3>
                    <p className="text-loop-orange-400 text-sm font-medium mb-4">{market.region}</p>
                    <p className="text-gray-300 text-sm mb-4">{market.description}</p>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Focus Area</p>
                      <p className="text-sm font-medium">{market.focus}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
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
              Diverse Trading Portfolio
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive range of commodities traded through our global network,
              ensuring reliable supply and competitive pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-navy-800 mb-4">{category.category}</h3>
                    <p className="text-foreground/70 text-sm mb-6">{category.description}</p>
                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-loop-orange-600 rounded-full" />
                          <span className="text-sm text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
              <Link href="/products">
                View Detailed Product Specifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Ready to Trade?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Connect with our trading team to discuss your commodity requirements
              and explore trading opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <Globe className="mr-2 h-5 w-5" />
                  Contact Trading Team
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  <Shield className="mr-2 h-5 w-5" />
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}