'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  TrendingUp,
  BarChart3,
  Globe,
  Shield,
  Truck,
  Award,
  CheckCircle,
  ArrowUpDown,
  Target,
  Clock,
  DollarSign,
  Zap,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react'
import Link from 'next/link'

const tradingProcess = [
  {
    step: 1,
    title: 'Market Analysis',
    description: 'Real-time market intelligence and price discovery across global commodity markets',
    icon: BarChart3,
    details: [
      'Global price monitoring',
      'Supply-demand analysis',
      'Market trend forecasting',
      'Risk assessment'
    ],
    duration: '24/7'
  },
  {
    step: 2,
    title: 'Sourcing & Procurement',
    description: 'Strategic sourcing through verified partners and quality-certified suppliers',
    icon: Target,
    details: [
      'Supplier verification',
      'Quality certification',
      'Competitive bidding',
      'Contract negotiation'
    ],
    duration: '2-5 days'
  },
  {
    step: 3,
    title: 'Transaction Execution',
    description: 'Secure transaction processing with comprehensive risk management protocols',
    icon: Shield,
    details: [
      'Letter of credit arrangements',
      'Documentation processing',
      'Quality inspection',
      'Payment facilitation'
    ],
    duration: '3-7 days'
  },
  {
    step: 4,
    title: 'Logistics & Delivery',
    description: 'End-to-end logistics coordination ensuring timely and secure delivery',
    icon: Truck,
    details: [
      'Shipping arrangements',
      'Real-time tracking',
      'Port handling coordination',
      'Delivery confirmation'
    ],
    duration: '10-30 days'
  }
]

const tradingMetrics = [
  {
    metric: 'Transaction Volume',
    value: '$500M+',
    change: '+15%',
    trend: 'up',
    icon: DollarSign,
    description: 'Annual trading volume across all commodities'
  },
  {
    metric: 'Market Coverage',
    value: '50+',
    change: '+8',
    trend: 'up',
    icon: Globe,
    description: 'Countries with active trading operations'
  },
  {
    metric: 'Success Rate',
    value: '99.2%',
    change: '+0.3%',
    trend: 'up',
    icon: Award,
    description: 'Successful transaction completion rate'
  },
  {
    metric: 'Response Time',
    value: '<2hrs',
    change: '-15min',
    trend: 'up',
    icon: Clock,
    description: 'Average response time to trading inquiries'
  }
]

const commodityMarkets = [
  {
    category: 'Energy',
    commodities: ['Crude Oil', 'Refined Products', 'Natural Gas', 'Petrochemicals'],
    marketSize: '$2.3T',
    volatility: 'High',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    category: 'Metals',
    commodities: ['Gold', 'Silver', 'Copper', 'Aluminum'],
    marketSize: '$800B',
    volatility: 'Medium',
    icon: Award,
    color: 'from-gray-400 to-yellow-500'
  },
  {
    category: 'Agriculture',
    commodities: ['Grains', 'Soft Commodities', 'Livestock'],
    marketSize: '$600B',
    volatility: 'Medium',
    icon: Target,
    color: 'from-green-500 to-emerald-600'
  }
]

interface CommodityTradingProps {
  className?: string
  variant?: 'full' | 'compact'
  showLiveData?: boolean
}

export default function CommodityTrading({
  className = '',
  variant = 'full',
  showLiveData = true
}: CommodityTradingProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

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
            Commodity Trading Excellence
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Leveraging advanced market intelligence, strategic partnerships, and proven
            processes to deliver superior commodity trading outcomes across global markets.
          </p>
        </motion.div>

        {/* Trading Metrics Dashboard */}
        {showLiveData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {tradingMetrics.map((metric, index) => (
              <Card key={metric.metric} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className="h-8 w-8 text-loop-orange-600" />
                    <div className={`flex items-center text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <ArrowUpDown className="h-4 w-4 mr-1" />
                      {metric.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-navy-800 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/70 mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-xs text-foreground/60">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Trading Process Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Trading Process Flow</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our systematic approach ensures efficient execution from market analysis
              to final delivery, maintaining transparency and quality at every step.
            </p>
          </div>

          {/* Process Controls */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white rounded-lg p-2 shadow-sm border">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center"
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'} Demo
              </Button>
              <div className="text-sm text-foreground/60">
                Step {activeStep + 1} of {tradingProcess.length}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                <Card className={`h-full cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'shadow-xl border-loop-orange-300 bg-loop-orange-50'
                    : 'hover:shadow-lg'
                }`}>
                  <CardContent className="p-6">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        activeStep === index ? 'bg-loop-orange-600' : 'bg-gray-400'
                      }`}>
                        {step.step}
                      </div>
                      <step.icon className={`h-6 w-6 ${
                        activeStep === index ? 'text-loop-orange-600' : 'text-gray-400'
                      }`} />
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-navy-800 mb-2">{step.title}</h4>
                    <p className="text-foreground/70 text-sm mb-4">{step.description}</p>

                    {/* Duration */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-foreground/60">Duration:</span>
                      <span className="font-medium text-loop-orange-600">{step.duration}</span>
                    </div>

                    {/* Details */}
                    {variant === 'full' && activeStep === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 pt-4"
                      >
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-xs text-foreground/60">
                              <CheckCircle className="h-3 w-3 text-loop-orange-600 mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {/* Connection Arrow */}
                {index < tradingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-loop-orange-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commodity Markets Overview */}
        {variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Commodity Markets</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Active trading across major commodity categories with deep market knowledge
                and strategic positioning in key global trading hubs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commodityMarkets.map((market, index) => (
                <motion.div
                  key={market.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    {/* Market Header */}
                    <div className={`h-16 bg-gradient-to-r ${market.color} relative`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative z-10 flex items-center justify-between h-full px-6">
                        <div className="flex items-center space-x-3">
                          <market.icon className="h-6 w-6 text-white" />
                          <h4 className="font-bold text-white">{market.category}</h4>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          market.volatility === 'High'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {market.volatility} Volatility
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Market Size */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-foreground/60 text-sm">Market Size:</span>
                        <span className="font-bold text-loop-orange-600 text-lg">{market.marketSize}</span>
                      </div>

                      {/* Commodities */}
                      <div>
                        <h5 className="font-semibold text-navy-800 mb-3">Key Commodities:</h5>
                        <div className="space-y-2">
                          {market.commodities.map((commodity, idx) => (
                            <div key={idx} className="flex items-center text-sm text-foreground/70">
                              <TrendingUp className="h-3 w-3 text-loop-orange-600 mr-2" />
                              {commodity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Live Market Data Widget */}
        {showLiveData && variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-navy-800 text-white rounded-lg p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Market Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Access live commodity prices, market trends, and trading opportunities
                  through our advanced market intelligence platform.
                </p>
                <div className="space-y-3">
                  {[
                    'Live price feeds from 50+ global exchanges',
                    'AI-powered market trend analysis',
                    'Real-time supply-demand indicators',
                    'Risk assessment and volatility tracking'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-loop-orange-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Trading Dashboard */}
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Market Dashboard</h4>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-3">
                  {[
                    { commodity: 'Brent Crude', price: '$84.25', change: '+1.2%', trend: 'up' },
                    { commodity: 'Gold', price: '$1,985.50', change: '+0.8%', trend: 'up' },
                    { commodity: 'Copper', price: '$8,420.00', change: '-0.3%', trend: 'down' },
                    { commodity: 'Silver', price: '$24.85', change: '+2.1%', trend: 'up' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{item.commodity}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{item.price}</span>
                        <span className={`text-xs ${
                          item.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Access our global commodity trading platform and expert market intelligence
              to capitalize on trading opportunities across international markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/trading">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Start Trading
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Globe className="mr-2 h-5 w-5" />
                  Request Market Analysis
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