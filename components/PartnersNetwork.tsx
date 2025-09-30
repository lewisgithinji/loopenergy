'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Building,
  CreditCard,
  Truck,
  Anchor,
  Users,
  Globe,
  Shield,
  Award,
  CheckCircle,
  TrendingUp,
  Phone,
  Mail,
  ArrowRight,
  Network,
  Target
} from 'lucide-react'
import Link from 'next/link'

const partnerCategories = [
  {
    id: 'refineries',
    title: 'Refineries & Producers',
    icon: Building,
    description: 'Strategic partnerships with leading refineries and petroleum product producers',
    gradient: 'from-blue-500 to-cyan-600',
    count: '25+',
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
    ],
    keyRegions: ['Middle East', 'Africa', 'Europe']
  },
  {
    id: 'banks',
    title: 'Financial Institutions',
    icon: CreditCard,
    description: 'Banking partnerships enabling seamless global transactions and trade finance',
    gradient: 'from-green-500 to-emerald-600',
    count: '15+',
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
    ],
    keyRegions: ['Global', 'UAE', 'Kenya']
  },
  {
    id: 'logistics',
    title: 'Shipping & Logistics',
    icon: Truck,
    description: 'Comprehensive shipping and logistics partnerships for global reach',
    gradient: 'from-purple-500 to-indigo-600',
    count: '20+',
    partners: [
      'Major shipping lines',
      'Specialized tanker operators',
      'Logistics service providers',
      'Freight forwarders'
    ],
    benefits: [
      'Global shipping capacity',
      'Specialized vessel access',
      'Optimized routing solutions',
      'Real-time cargo tracking'
    ],
    keyRegions: ['Global', 'Rotterdam', 'Fujairah']
  },
  {
    id: 'terminals',
    title: 'Terminal & Storage',
    icon: Anchor,
    description: 'Strategic storage and terminal partnerships across key trading hubs',
    gradient: 'from-orange-500 to-red-600',
    count: '12+',
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
    ],
    keyRegions: ['Rotterdam', 'Fujairah', 'Jurong']
  }
]

const partnershipValues = [
  {
    title: 'Mutual Growth',
    description: 'Building relationships focused on shared success and long-term value creation',
    icon: TrendingUp,
    color: 'text-blue-600'
  },
  {
    title: 'Quality Standards',
    description: 'Maintaining excellence through certified and vetted partner networks',
    icon: Award,
    color: 'text-green-600'
  },
  {
    title: 'Risk Mitigation',
    description: 'Comprehensive assessment and management of partnership risks',
    icon: Shield,
    color: 'text-purple-600'
  },
  {
    title: 'Global Reach',
    description: 'Extensive network enabling worldwide market access and delivery',
    icon: Globe,
    color: 'text-orange-600'
  }
]

const networkStats = [
  { number: '80+', label: 'Strategic Partners', icon: Users },
  { number: '50+', label: 'Countries Covered', icon: Globe },
  { number: '3', label: 'Continents', icon: Target },
  { number: '24/7', label: 'Support Network', icon: Network }
]

interface PartnersNetworkProps {
  className?: string
  variant?: 'full' | 'compact'
  showStats?: boolean
  maxCategories?: number
}

export default function PartnersNetwork({
  className = '',
  variant = 'full',
  showStats = true,
  maxCategories
}: PartnersNetworkProps) {
  const displayCategories = maxCategories
    ? partnerCategories.slice(0, maxCategories)
    : partnerCategories

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
            Strategic Partner Network
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Building strong alliances with industry leaders to deliver comprehensive
            trading solutions and exceptional value to our global clientele.
          </p>
        </motion.div>

        {/* Network Statistics */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {networkStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-100 mb-4">
                  <stat.icon className="h-8 w-8 text-loop-orange-600" />
                </div>
                <div className="text-3xl font-bold text-navy-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Partner Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Category Header */}
                <div className={`h-20 bg-gradient-to-r ${category.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 flex items-center justify-between h-full px-6">
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-8 w-8 text-white" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                        <span className="text-white/80 text-sm">{category.count} Partners</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-foreground/70 text-sm mb-6">{category.description}</p>

                  {/* Partner Types & Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Partner Types */}
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-3 flex items-center">
                        <Building className="h-4 w-4 mr-2 text-loop-orange-600" />
                        Partner Types
                      </h4>
                      <div className="space-y-2">
                        {category.partners.map((partner, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-loop-orange-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{partner}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-loop-orange-600" />
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {category.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Regions */}
                  {variant === 'full' && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <h5 className="text-sm font-semibold text-navy-800 mb-2">Key Regions</h5>
                      <div className="flex flex-wrap gap-2">
                        {category.keyRegions.map((region, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Partnership Values</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The core principles that guide our approach to building and maintaining
              strategic partnerships across the global commodity trading network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <value.icon className={`h-12 w-12 ${value.color} mx-auto mb-4`} />
                <h4 className="font-bold text-navy-800 mb-2">{value.title}</h4>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Process */}
        {variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Partnership Development Process</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Our systematic approach to identifying, evaluating, and developing
                strategic partnerships that create mutual value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Identification',
                  description: 'Market research and strategic partner identification',
                  icon: Target
                },
                {
                  step: '2',
                  title: 'Evaluation',
                  description: 'Due diligence and compatibility assessment',
                  icon: Shield
                },
                {
                  step: '3',
                  title: 'Integration',
                  description: 'Partnership agreement and system integration',
                  icon: Network
                },
                {
                  step: '4',
                  title: 'Optimization',
                  description: 'Ongoing management and relationship enhancement',
                  icon: TrendingUp
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-600 text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <step.icon className="h-6 w-6 text-loop-orange-600 mx-auto mb-3" />
                  <h4 className="font-bold text-navy-800 mb-2">{step.title}</h4>
                  <p className="text-foreground/70 text-sm">{step.description}</p>

                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <div className="w-8 h-0.5 bg-loop-orange-300 mx-auto"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
          <div className="bg-navy-800 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Become a Strategic Partner
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our network of global partners and unlock new opportunities in
              commodity trading, energy markets, and international commerce.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Partnership Inquiry
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-800" asChild>
                <Link href="/services">
                  <Shield className="mr-2 h-5 w-5" />
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-loop-orange-400" />
                <span>+254 722 517923</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-loop-orange-400" />
                <span>partnerships@loopenergyltd.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}