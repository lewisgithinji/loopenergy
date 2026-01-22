'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Truck,
  Shield,
  TrendingUp,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Settings,
  Users,
  Building,
  Target
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Settings,
    title: 'Operations Management',
    description: 'Strategic operational excellence through AI-driven insights and real-time data analytics.',
    features: [
      'AI-driven supply chain optimization',
      'Real-time data analytics and monitoring',
      'Process efficiency enhancement',
      'Asset management solutions',
      'Value-maximizing decision support'
    ],
    benefits: [
      'Reduced operational costs',
      'Enhanced productivity',
      'Better-informed decision making',
      'Competitive market advantage'
    ],
    href: '/contact'
  },
  {
    icon: Truck,
    title: 'Logistics Management',
    description: 'Comprehensive supply chain solutions ensuring seamless resource access and timely delivery.',
    features: [
      'End-to-end supply chain management',
      'Strategic logistics partnerships',
      'Storage facility coordination',
      'Terminal operations management',
      'Customized delivery solutions'
    ],
    benefits: [
      'Optimized supply chains',
      'Reduced delivery times',
      'Enhanced reliability',
      'Cost-effective logistics'
    ],
    href: '/contact'
  },
  {
    icon: Shield,
    title: 'Financial Structuring & Advisory',
    description: 'Expert financial guidance for optimal capital structure and sustainable growth.',
    features: [
      'Capital structure optimization',
      'Financing solutions and arrangements',
      'Letters of Credit facilitation',
      'Bank guarantees and performance bonds',
      'Risk management strategies'
    ],
    benefits: [
      'Optimized financing terms',
      'Reduced financial risk',
      'Enhanced creditworthiness',
      'Sustainable growth support'
    ],
    href: '/contact'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Transaction Advisory',
    description: 'Expert guidance for navigating complex commodity and precious metals markets.',
    features: [
      'Comprehensive due diligence',
      'Deal structuring and negotiation',
      'Market analysis and intelligence',
      'Risk assessment and mitigation',
      'Transaction integrity assurance'
    ],
    benefits: [
      'Minimized transaction risks',
      'Maximized deal value',
      'Enhanced market intelligence',
      'Operational excellence'
    ],
    href: '/contact'
  },
  {
    icon: Globe,
    title: 'Commodity Sourcing & Trading Management',
    description: 'End-to-end commodity trading services with global network access and market intelligence.',
    features: [
      'Global network of producers and consumers',
      'Comprehensive supply chain management',
      'Market intelligence and analysis',
      'Price volatility management',
      'Quality assurance and verification'
    ],
    benefits: [
      'Access to global markets',
      'Optimized pricing strategies',
      'Reliable supply chains',
      'Reduced market volatility impact'
    ],
    href: '/contact'
  }
]

const marketPresence = [
  {
    region: 'Africa',
    description: 'Strategic partnerships with producers and mining operations',
    focus: 'Minerals and precious metals sourcing',
    capabilities: ['Direct mine relationships', 'Quality verification', 'Sustainable sourcing']
  },
  {
    region: 'UAE',
    description: 'Dubai headquarters serving Gulf and international markets',
    focus: 'International trading and logistics coordination',
    capabilities: ['Trading operations', 'Logistics management', 'Financial services']
  },
  {
    region: 'Europe',
    description: 'Market access and distribution networks',
    focus: 'Refined petroleum products and market access',
    capabilities: ['Market penetration', 'Distribution networks', 'Regulatory compliance']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-navy-950 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-hero.png"
            alt="Professional Trading Services"
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
                Professional Trading
                <br />
                <span className="text-loop-orange-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Comprehensive trading solutions and advisory services designed to optimize
                your commodity trading operations and maximize market opportunities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Discuss Your Needs
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800" asChild>
                  <Link href="/trading">
                    <Globe className="mr-2 h-5 w-5" />
                    View Trading Capabilities
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our Service Portfolio
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive suite of professional services designed to support your
              commodity trading operations and business growth objectives.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      {/* Service Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-loop-orange-100">
                            <service.icon className="h-8 w-8 text-loop-orange-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-navy-800">{service.title}</h3>
                          </div>
                        </div>
                        <p className="text-foreground/70 mb-6">{service.description}</p>
                        <Button className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                          <Link href={service.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-navy-800 mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-loop-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold text-navy-800 mb-4">Client Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <Target className="h-5 w-5 text-loop-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-foreground/70 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Market Presence */}
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
              Global Market Presence
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Strategic operations across key international markets enable us to provide
              comprehensive services and market access to our global clientele.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketPresence.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy-800">{market.region}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm mb-4">{market.description}</p>
                    <div className="mb-4">
                      <p className="text-loop-orange-600 font-medium text-sm mb-2">{market.focus}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-navy-800 mb-2">Capabilities:</h5>
                      <ul className="space-y-1">
                        {market.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-center text-xs text-foreground/60">
                            <div className="w-1.5 h-1.5 bg-loop-orange-600 rounded-full mr-2" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence */}
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
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and comprehensive approach ensures superior
              results for all your commodity trading and advisory needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                description: 'Seasoned professionals with extensive market knowledge and experience'
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Strategic partnerships across Africa, UAE, and Europe'
              },
              {
                icon: BarChart3,
                title: 'Data-Driven Approach',
                description: 'AI-powered insights and real-time analytics for optimal decisions'
              },
              {
                icon: Users,
                title: 'Client-Centric Focus',
                description: 'Tailored solutions and long-term partnership approach'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <item.icon className="h-12 w-12 text-loop-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
              Our Service Process
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Structured approach ensuring comprehensive understanding and optimal solutions
              for your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Initial assessment of your requirements and objectives'
              },
              {
                step: '2',
                title: 'Analysis',
                description: 'Comprehensive market analysis and solution design'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'Execution of tailored solutions with ongoing monitoring'
              },
              {
                step: '4',
                title: 'Optimization',
                description: 'Continuous improvement and performance enhancement'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-600 text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-8 h-0.5 bg-loop-orange-300 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your specific requirements and learn how our
              professional services can enhance your trading operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +254 722 517923
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}