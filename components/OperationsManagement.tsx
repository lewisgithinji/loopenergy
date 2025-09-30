'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Settings,
  BarChart3,
  Zap,
  Shield,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  Cpu,
  Database,
  ArrowRight,
  RefreshCw,
  Activity
} from 'lucide-react'
import Link from 'next/link'

const operationalAreas = [
  {
    id: 'ai-insights',
    title: 'AI-Driven Insights',
    icon: Cpu,
    description: 'Advanced artificial intelligence for market analysis and decision support',
    gradient: 'from-blue-500 to-cyan-600',
    features: [
      'Machine learning price prediction',
      'Pattern recognition algorithms',
      'Automated risk assessment',
      'Predictive analytics dashboard'
    ],
    benefits: [
      'Enhanced decision accuracy',
      'Reduced analysis time',
      'Proactive risk management',
      'Competitive market advantage'
    ],
    kpis: [
      { metric: 'Prediction Accuracy', value: '94.2%', trend: 'up' },
      { metric: 'Analysis Speed', value: '15x', trend: 'up' },
      { metric: 'Risk Reduction', value: '35%', trend: 'up' }
    ]
  },
  {
    id: 'real-time-analytics',
    title: 'Real-Time Data Analytics',
    icon: BarChart3,
    description: 'Continuous monitoring and analysis of market data and operational metrics',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      'Live market data feeds',
      'Real-time performance dashboards',
      'Automated alert systems',
      'Cross-platform data integration'
    ],
    benefits: [
      'Immediate market insights',
      'Rapid response capabilities',
      'Informed decision making',
      'Operational transparency'
    ],
    kpis: [
      { metric: 'Data Processing', value: '10TB/day', trend: 'up' },
      { metric: 'Response Time', value: '<100ms', trend: 'up' },
      { metric: 'Uptime', value: '99.9%', trend: 'stable' }
    ]
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    icon: Settings,
    description: 'Continuous improvement of operational workflows and business processes',
    gradient: 'from-purple-500 to-indigo-600',
    features: [
      'Workflow automation',
      'Process standardization',
      'Efficiency monitoring',
      'Bottleneck identification'
    ],
    benefits: [
      'Increased productivity',
      'Reduced operational costs',
      'Improved quality control',
      'Scalable operations'
    ],
    kpis: [
      { metric: 'Efficiency Gain', value: '+28%', trend: 'up' },
      { metric: 'Cost Reduction', value: '22%', trend: 'up' },
      { metric: 'Error Rate', value: '<0.1%', trend: 'down' }
    ]
  },
  {
    id: 'asset-management',
    title: 'Asset Management',
    icon: Database,
    description: 'Strategic management of physical and digital assets across global operations',
    gradient: 'from-orange-500 to-red-600',
    features: [
      'Digital asset tracking',
      'Lifecycle management',
      'Performance monitoring',
      'Maintenance optimization'
    ],
    benefits: [
      'Maximized asset utilization',
      'Predictive maintenance',
      'Extended asset lifespan',
      'Strategic capital allocation'
    ],
    kpis: [
      { metric: 'Asset Utilization', value: '89%', trend: 'up' },
      { metric: 'Maintenance Cost', value: '-18%', trend: 'down' },
      { metric: 'Asset ROI', value: '+32%', trend: 'up' }
    ]
  }
]

const operationalMetrics = [
  {
    title: 'System Performance',
    metrics: [
      { name: 'Processing Speed', value: '15,000', unit: 'transactions/sec', status: 'excellent' },
      { name: 'System Uptime', value: '99.97', unit: '%', status: 'excellent' },
      { name: 'Data Accuracy', value: '99.8', unit: '%', status: 'excellent' },
      { name: 'Response Time', value: '85', unit: 'ms', status: 'good' }
    ]
  },
  {
    title: 'Operational Efficiency',
    metrics: [
      { name: 'Cost Reduction', value: '24', unit: '%', status: 'excellent' },
      { name: 'Process Automation', value: '78', unit: '%', status: 'good' },
      { name: 'Error Rate', value: '0.08', unit: '%', status: 'excellent' },
      { name: 'Productivity Gain', value: '31', unit: '%', status: 'excellent' }
    ]
  }
]

const managementTools = [
  {
    tool: 'Market Intelligence Platform',
    description: 'Comprehensive market data aggregation and analysis',
    capabilities: ['Real-time price feeds', 'Technical analysis', 'News sentiment analysis'],
    usage: '24/7 monitoring'
  },
  {
    tool: 'Risk Management System',
    description: 'Advanced risk assessment and mitigation tools',
    capabilities: ['Portfolio risk analysis', 'Stress testing', 'Compliance monitoring'],
    usage: 'Continuous assessment'
  },
  {
    tool: 'Operations Dashboard',
    description: 'Centralized operational control and monitoring',
    capabilities: ['KPI tracking', 'Alert management', 'Performance analytics'],
    usage: 'Executive oversight'
  },
  {
    tool: 'Supply Chain Optimizer',
    description: 'End-to-end supply chain management and optimization',
    capabilities: ['Route optimization', 'Inventory management', 'Supplier analytics'],
    usage: 'Daily operations'
  }
]

interface OperationsManagementProps {
  className?: string
  variant?: 'full' | 'compact'
  showMetrics?: boolean
}

export default function OperationsManagement({
  className = '',
  variant = 'full',
  showMetrics = true
}: OperationsManagementProps) {
  const [selectedArea, setSelectedArea] = useState(operationalAreas[0])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

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
            Operations Management Excellence
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Leveraging cutting-edge technology and data-driven insights to optimize
            every aspect of our commodity trading operations for superior performance.
          </p>
        </motion.div>

        {/* Operational Areas Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Area Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {operationalAreas.map((area) => (
              <Button
                key={area.id}
                variant={selectedArea.id === area.id ? 'default' : 'outline'}
                onClick={() => setSelectedArea(area)}
                className={`flex items-center space-x-2 ${
                  selectedArea.id === area.id
                    ? 'bg-loop-orange-600 hover:bg-loop-orange-700'
                    : ''
                }`}
              >
                <area.icon className="h-4 w-4" />
                <span>{area.title}</span>
              </Button>
            ))}
          </div>

          {/* Selected Area Details */}
          <motion.div
            key={selectedArea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="overflow-hidden">
              {/* Header with Gradient */}
              <div className={`h-24 bg-gradient-to-r ${selectedArea.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center h-full px-8">
                  <selectedArea.icon className="h-10 w-10 text-white mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedArea.title}</h3>
                    <p className="text-white/80">{selectedArea.description}</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-loop-orange-600" />
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {selectedArea.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-loop-orange-600" />
                      Business Benefits
                    </h4>
                    <div className="space-y-3">
                      {selectedArea.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <TrendingUp className="h-4 w-4 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KPIs */}
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-loop-orange-600" />
                      Key Performance Indicators
                    </h4>
                    <div className="space-y-4">
                      {selectedArea.kpis.map((kpi, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground/70">{kpi.metric}</span>
                            <div className={`flex items-center text-xs ${
                              kpi.trend === 'up' ? 'text-green-600' :
                              kpi.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              <Activity className="h-3 w-3 mr-1" />
                              {kpi.trend}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-loop-orange-600">{kpi.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Real-Time Metrics Dashboard */}
        {showMetrics && variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-navy-800">Live Operations Dashboard</h3>
              <Button
                size="sm"
                variant="outline"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh Data
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {operationalMetrics.map((category, index) => (
                <Card key={category.title} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-navy-800">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-foreground/80">{metric.name}</div>
                            <div className="text-xs text-foreground/60">{metric.unit}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-navy-800">{metric.value}</div>
                            <div className={`text-xs font-medium ${
                              metric.status === 'excellent' ? 'text-green-600' :
                              metric.status === 'good' ? 'text-blue-600' : 'text-orange-600'
                            }`}>
                              {metric.status.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Management Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Management Technology Stack</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Advanced tools and platforms powering our operational excellence
              and enabling data-driven decision making across all business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {managementTools.map((tool, index) => (
              <motion.div
                key={tool.tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-navy-800 mb-2">{tool.tool}</h4>
                        <p className="text-foreground/70 text-sm mb-4">{tool.description}</p>
                      </div>
                      <div className="text-xs text-loop-orange-600 font-medium bg-loop-orange-50 px-2 py-1 rounded-full whitespace-nowrap ml-4">
                        {tool.usage}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-navy-800 mb-2">Capabilities:</h5>
                      <div className="space-y-1">
                        {tool.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center text-xs text-foreground/60">
                            <Zap className="h-3 w-3 text-loop-orange-600 mr-2" />
                            {capability}
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

        {/* Process Automation Overview */}
        {variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-navy-800 text-white rounded-lg p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Process Automation Excellence</h3>
                <p className="text-gray-300 mb-6">
                  Streamlined operations through intelligent automation, reducing manual
                  processes and enhancing accuracy across all trading activities.
                </p>
                <div className="space-y-4">
                  {[
                    { process: 'Trade Execution', automation: '95%', time_saved: '4 hours/day' },
                    { process: 'Risk Assessment', automation: '88%', time_saved: '2 hours/day' },
                    { process: 'Compliance Reporting', automation: '92%', time_saved: '6 hours/week' },
                    { process: 'Market Analysis', automation: '85%', time_saved: '3 hours/day' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{item.process}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-loop-orange-400 font-medium">{item.automation} automated</span>
                        <span className="text-green-400 text-xs">{item.time_saved} saved</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-loop-orange-400 mb-2">78%</div>
                    <div className="text-sm text-gray-300">Processes Automated</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-loop-orange-400 mb-2">15hrs</div>
                    <div className="text-sm text-gray-300">Daily Time Savings</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-loop-orange-400 mb-2">99.2%</div>
                    <div className="text-sm text-gray-300">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-loop-orange-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Monitoring</div>
                  </div>
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
              Experience Operational Excellence
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Discover how our advanced operations management capabilities can
              optimize your commodity trading performance and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/services">
                  <Settings className="mr-2 h-5 w-5" />
                  Explore Our Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Consultation
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