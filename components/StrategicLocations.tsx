'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Building,
  Ship,
  TrendingUp,
  Globe,
  Fuel,
  Award,
  Users,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle,
  Target,
  Anchor,
  Phone,
  Mail
} from 'lucide-react'
import Link from 'next/link'

const strategicLocations = [
  {
    id: 'rotterdam',
    name: 'Rotterdam',
    country: 'Netherlands',
    region: 'Europe',
    description: 'Vital gateway to European markets and major global refining hub',
    focus: 'Refined petroleum products distribution and European market access',
    icon: Building,
    coordinates: { x: 48, y: 32 },
    gradient: 'from-blue-500 to-cyan-600',
    keyAdvantages: [
      'Largest port in Europe',
      'Advanced refining facilities',
      'Strategic European distribution',
      'Excellent rail and road connectivity'
    ],
    commodities: [
      'Refined petroleum products',
      'Petrochemicals',
      'Crude oil',
      'Natural gas'
    ],
    infrastructure: [
      'Deep-water port facilities',
      'Pipeline networks',
      'Storage terminals',
      'Refinery complexes'
    ],
    stats: {
      throughput: '470M tons/year',
      storage: '45M m³',
      partners: '25+',
      connections: '500+ destinations'
    },
    marketPenetration: {
      europe: '85%',
      africa: '15%',
      americas: '25%'
    }
  },
  {
    id: 'jurong',
    name: 'Jurong',
    country: 'Singapore',
    region: 'Asia',
    description: 'Critical trading and refining center serving robust Asian markets',
    focus: 'Regional trading operations and Asian market distribution',
    icon: TrendingUp,
    coordinates: { x: 75, y: 55 },
    gradient: 'from-green-500 to-emerald-600',
    keyAdvantages: [
      'Strategic Asian location',
      'Advanced petrochemical complex',
      'Major trading hub',
      'Strong financial services'
    ],
    commodities: [
      'Petrochemicals',
      'Refined products',
      'Chemical intermediates',
      'Specialty chemicals'
    ],
    infrastructure: [
      'Integrated refinery complex',
      'Chemical production facilities',
      'Trading platforms',
      'Financial centers'
    ],
    stats: {
      throughput: '280M tons/year',
      storage: '25M m³',
      partners: '40+',
      connections: '300+ destinations'
    },
    marketPenetration: {
      asia: '70%',
      oceania: '45%',
      americas: '20%'
    }
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    country: 'UAE',
    region: 'Middle East',
    description: 'Pivotal global bunkering and oil storage hub in the Arabian Gulf',
    focus: 'International trading crossroads and bunkering services',
    icon: Fuel,
    coordinates: { x: 58, y: 45 },
    gradient: 'from-orange-500 to-red-600',
    keyAdvantages: [
      'Strategic Gulf location',
      'Major bunkering hub',
      'Free trade zone benefits',
      'Direct access to crude sources'
    ],
    commodities: [
      'Bunker fuel',
      'Crude oil',
      'Refined products',
      'Marine gasoil'
    ],
    infrastructure: [
      'Oil storage terminals',
      'Bunkering facilities',
      'Pipeline connections',
      'Port services'
    ],
    stats: {
      throughput: '180M tons/year',
      storage: '15M m³',
      partners: '30+',
      connections: '200+ destinations'
    },
    marketPenetration: {
      middleEast: '60%',
      asia: '40%',
      africa: '35%'
    }
  }
]

const locationBenefits = [
  {
    title: 'Strategic Market Access',
    description: 'Prime positions in key global trading routes and market centers',
    icon: Globe,
    color: 'text-blue-600'
  },
  {
    title: 'Infrastructure Excellence',
    description: 'World-class port facilities, storage, and logistics infrastructure',
    icon: Building,
    color: 'text-green-600'
  },
  {
    title: 'Trading Efficiency',
    description: 'Optimized operations reducing costs and delivery times',
    icon: TrendingUp,
    color: 'text-purple-600'
  },
  {
    title: 'Risk Mitigation',
    description: 'Diversified geographic presence reducing operational risks',
    icon: Target,
    color: 'text-orange-600'
  }
]

const tradingRoutes = [
  { from: 'rotterdam', to: 'fujairah', commodity: 'Refined Products', volume: '2.5M tons/year' },
  { from: 'fujairah', to: 'jurong', commodity: 'Crude Oil', volume: '4.2M tons/year' },
  { from: 'jurong', to: 'rotterdam', commodity: 'Petrochemicals', volume: '1.8M tons/year' }
]

interface StrategicLocationsProps {
  className?: string
  variant?: 'full' | 'compact'
  showMap?: boolean
  showRoutes?: boolean
}

export default function StrategicLocations({
  className = '',
  variant = 'full',
  showMap = true,
  showRoutes = true
}: StrategicLocationsProps) {
  const [selectedLocation, setSelectedLocation] = useState(strategicLocations[0])
  const [activeTab, setActiveTab] = useState('overview')

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
            Strategic Global Locations
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Demonstrating strategic presence within global energy markets through key
            international trading operations positioned at critical energy centers.
          </p>
        </motion.div>

        {/* World Map with Location Markers */}
        {showMap && variant === 'full' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="bg-navy-800 rounded-lg p-8 text-white">
              <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-navy-900/50 rounded-lg overflow-hidden">
                {/* World Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {/* Simplified continent shapes */}
                    <path d="M10,20 Q15,15 25,20 L35,25 Q30,35 20,30 Z" fill="currentColor" opacity="0.3" />
                    <path d="M40,15 Q55,10 70,18 L75,25 Q70,35 55,30 L45,25 Z" fill="currentColor" opacity="0.3" />
                    <path d="M75,25 Q85,20 95,30 L90,45 Q85,40 75,35 Z" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>

                {/* Location Markers */}
                {strategicLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${location.gradient} border-2 border-white shadow-lg group-hover:scale-125 transition-transform flex items-center justify-center ${
                      selectedLocation.id === location.id ? 'scale-125 ring-4 ring-loop-orange-400' : ''
                    }`}>
                      <location.icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Location Label */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-navy-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                        {location.name}, {location.country}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Trading Routes */}
                {showRoutes && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <marker id="arrowhead-locations" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(249, 115, 22, 0.6)" />
                      </marker>
                    </defs>
                    {/* Trading route lines */}
                    <path
                      d={`M${strategicLocations[0].coordinates.x},${strategicLocations[0].coordinates.y} Q65,35 ${strategicLocations[2].coordinates.x},${strategicLocations[2].coordinates.y}`}
                      stroke="rgba(249, 115, 22, 0.6)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead-locations)"
                      className="animate-pulse"
                    />
                    <path
                      d={`M${strategicLocations[2].coordinates.x},${strategicLocations[2].coordinates.y} Q70,50 ${strategicLocations[1].coordinates.x},${strategicLocations[1].coordinates.y}`}
                      stroke="rgba(249, 115, 22, 0.6)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      markerEnd="url(#arrowhead-locations)"
                      className="animate-pulse"
                    />
                  </svg>
                )}
              </div>

              {/* Map Legend */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {strategicLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                      selectedLocation.id === location.id
                        ? 'bg-white/20 border border-white/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${location.gradient} border border-white/50 flex items-center justify-center`}>
                      <location.icon className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-300">{location.region}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Location Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {strategicLocations.map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation.id === location.id ? 'default' : 'outline'}
                onClick={() => setSelectedLocation(location)}
                className={`flex items-center space-x-2 ${
                  selectedLocation.id === location.id
                    ? 'bg-loop-orange-600 hover:bg-loop-orange-700'
                    : ''
                }`}
              >
                <location.icon className="h-4 w-4" />
                <span>{location.name}</span>
              </Button>
            ))}
          </div>

          {/* Location Detail Card */}
          <motion.div
            key={selectedLocation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="overflow-hidden">
              {/* Location Header */}
              <div className={`h-32 bg-gradient-to-r ${selectedLocation.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center justify-between h-full px-8">
                  <div className="flex items-center space-x-4">
                    <selectedLocation.icon className="h-12 w-12 text-white" />
                    <div>
                      <h3 className="text-3xl font-bold text-white">{selectedLocation.name}</h3>
                      <p className="text-white/80 text-lg">{selectedLocation.country} • {selectedLocation.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-sm mb-1">Throughput</div>
                    <div className="text-white font-bold text-2xl">{selectedLocation.stats.throughput}</div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <div className="flex space-x-8 px-8">
                  {[
                    { id: 'overview', label: 'Overview', icon: Globe },
                    { id: 'infrastructure', label: 'Infrastructure', icon: Building },
                    { id: 'commodities', label: 'Commodities', icon: Fuel },
                    { id: 'statistics', label: 'Statistics', icon: BarChart3 }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-loop-orange-600 text-loop-orange-600'
                          : 'border-transparent text-foreground/60 hover:text-foreground'
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <CardContent className="p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-navy-800 mb-4">Location Description</h4>
                      <p className="text-foreground/70 mb-6">{selectedLocation.description}</p>

                      <h5 className="font-semibold text-navy-800 mb-3">Strategic Focus</h5>
                      <p className="text-foreground/70 mb-6">{selectedLocation.focus}</p>

                      <h5 className="font-semibold text-navy-800 mb-3">Key Advantages</h5>
                      <div className="space-y-2">
                        {selectedLocation.keyAdvantages.map((advantage, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-loop-orange-600" />
                            <span className="text-sm text-foreground/70">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-navy-800 mb-3">Market Penetration</h5>
                      <div className="space-y-4">
                        {Object.entries(selectedLocation.marketPenetration).map(([region, percentage]) => (
                          <div key={region}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-foreground/70 capitalize">{region}</span>
                              <span className="text-sm text-loop-orange-600 font-medium">{percentage}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-loop-orange-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: percentage }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Infrastructure Tab */}
                {activeTab === 'infrastructure' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-navy-800 mb-4 flex items-center">
                        <Building className="h-5 w-5 mr-2 text-loop-orange-600" />
                        Infrastructure Assets
                      </h4>
                      <div className="space-y-3">
                        {selectedLocation.infrastructure.map((asset, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <Anchor className="h-5 w-5 text-loop-orange-600" />
                            <span className="text-foreground/70">{asset}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800 mb-4">Operational Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-loop-orange-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-loop-orange-600">{selectedLocation.stats.storage}</div>
                          <div className="text-sm text-foreground/60">Storage Capacity</div>
                        </div>
                        <div className="bg-navy-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-navy-600">{selectedLocation.stats.partners}</div>
                          <div className="text-sm text-foreground/60">Active Partners</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg col-span-2">
                          <div className="text-2xl font-bold text-green-600">{selectedLocation.stats.connections}</div>
                          <div className="text-sm text-foreground/60">Global Connections</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Commodities Tab */}
                {activeTab === 'commodities' && (
                  <div>
                    <h4 className="font-bold text-navy-800 mb-6 flex items-center">
                      <Fuel className="h-5 w-5 mr-2 text-loop-orange-600" />
                      Primary Commodities Traded
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedLocation.commodities.map((commodity, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <Award className="h-6 w-6 text-loop-orange-600" />
                            <h5 className="font-semibold text-navy-800">{commodity}</h5>
                          </div>
                          <div className="text-sm text-foreground/60">
                            Active trading with established supply chains and quality verification processes
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Statistics Tab */}
                {activeTab === 'statistics' && (
                  <div>
                    <h4 className="font-bold text-navy-800 mb-6 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-loop-orange-600" />
                      Location Performance Statistics
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(selectedLocation.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-6 bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg">
                          <div className="text-3xl font-bold text-loop-orange-600 mb-2">{value}</div>
                          <div className="text-sm font-medium text-foreground/70 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Strategic Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Strategic Location Benefits</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our strategic positioning in key global trading hubs provides unparalleled
              advantages for efficient commodity trading and market access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <benefit.icon className={`h-12 w-12 ${benefit.color} mx-auto mb-4`} />
                <h4 className="font-bold text-navy-800 mb-2">{benefit.title}</h4>
                <p className="text-foreground/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Access Global Trading Networks
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Leverage our strategic presence in Rotterdam, Jurong, and Fujairah to access
              key commodity markets and optimize your trading operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/trading">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Trading Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-800" asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Regional Office
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
                <span>trading@loopenergyltd.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}