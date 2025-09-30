'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  TrendingUp,
  Fuel,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Building,
  Truck
} from 'lucide-react'
import Link from 'next/link'

const tradingCapabilities = [
  {
    icon: Globe,
    title: 'Global Market Reach',
    description: 'Strategic presence across Africa, UAE, and Europe',
    features: ['Multi-regional operations', 'Local market expertise', 'Cross-border facilitation']
  },
  {
    icon: Fuel,
    title: 'Commodity Expertise',
    description: 'Specialized knowledge in petroleum products and precious metals',
    features: ['Quality assurance', 'Market intelligence', 'Price optimization']
  },
  {
    icon: Truck,
    title: 'Logistics Excellence',
    description: 'End-to-end supply chain and logistics management',
    features: ['F.O.B & C.I.F terms', 'Shipping coordination', 'Storage solutions']
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies',
    features: ['Credit assessment', 'Market risk analysis', 'Insurance coordination']
  }
]

const tradingStats = [
  { number: '100+', label: 'Global Partners' },
  { number: '50+', label: 'Countries Served' },
  { number: '10+', label: 'Years Experience' },
  { number: '24/7', label: 'Trading Support' }
]

interface TradingSectionProps {
  className?: string
  showStats?: boolean
  variant?: 'full' | 'compact'
}

export default function TradingSection({
  className = '',
  showStats = true,
  variant = 'full'
}: TradingSectionProps) {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Global Commodity Trading
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Leveraging strategic partnerships and market expertise to deliver efficient,
            transparent, and reliable commodity trading solutions worldwide.
          </p>
        </motion.div>

        {/* Trading Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tradingCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-100 mb-4">
                    <capability.icon className="h-8 w-8 text-loop-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {capability.description}
                  </p>
                  {variant === 'full' && (
                    <ul className="space-y-1">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center text-xs text-foreground/60">
                          <CheckCircle className="h-3 w-3 text-loop-orange-600 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trading Process Overview */}
        {variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Streamlined Trading Process
                </h3>
                <p className="text-foreground/70 mb-6">
                  Our systematic approach ensures efficient execution from initial inquiry
                  to final delivery, maintaining transparency and quality at every step.
                </p>
                <div className="space-y-3">
                  {[
                    'Market analysis & price discovery',
                    'Quality verification & documentation',
                    'Logistics coordination & scheduling',
                    'Financial structuring & risk management',
                    'Delivery confirmation & settlement'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-loop-orange-600 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Building className="h-8 w-8 text-navy-600" />
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-navy-800 mb-2">Trading Dashboard</h4>
                  <p className="text-sm text-foreground/60 mb-4">
                    Real-time market data, price tracking, and order management
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">Crude Oil</span>
                      <span className="text-green-600 font-medium">+2.1%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">Gold</span>
                      <span className="text-green-600 font-medium">+0.8%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">Copper</span>
                      <span className="text-red-600 font-medium">-0.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trading Statistics */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {tradingStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-loop-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
              <Link href="/trading">
                <Globe className="mr-2 h-5 w-5" />
                Explore Trading Services
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <Award className="mr-2 h-5 w-5" />
                Get Trading Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}