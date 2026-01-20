'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Fuel,
  Award,
  Mountain,
  Zap,
  ChevronRight,
  CheckCircle,
  Globe,
  Star,
  Filter,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const productCategories = [
  {
    id: 'petroleum',
    title: 'Refined Petroleum Products',
    icon: Fuel,
    description: 'High-quality refined petroleum products meeting international standards',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-cyan-600',
    products: [
      'Gasoline (RON 92 & 95)',
      'Gas Oil (10-2500 PPM)',
      'Fuel Oil (RMG 180/380)',
      'Jet A-1 Fuel',
      'Bitumen (Various Grades)'
    ],
    keyFeatures: [
      'International quality standards',
      'Flexible delivery terms',
      'Competitive pricing',
      'Quality certification'
    ],
    marketFocus: 'Global energy markets',
    availability: 'In Stock'
  },
  {
    id: 'precious-metals',
    title: 'Precious Metals',
    icon: Award,
    description: 'High-purity gold and silver bars with certified quality and authentication',
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    products: [
      'High-Purity Gold Bars (99.9%)',
      'Silver Bars (99.9%)',
      'Certified Authentication',
      'Secure Storage Solutions',
      'Investment Grade Quality'
    ],
    keyFeatures: [
      '99.9% purity guaranteed',
      'International certification',
      'Secure delivery',
      'Investment grade'
    ],
    marketFocus: 'Investment & industrial',
    availability: 'Available on Order'
  },
  {
    id: 'minerals',
    title: 'Minerals & Commodities',
    icon: Mountain,
    description: 'Diverse mineral portfolio sourced through strategic African partnerships',
    color: 'bg-stone-600',
    gradient: 'from-stone-600 to-amber-700',
    products: [
      'Copper Cathodes (99.99%)',
      'Copper Concentrate',
      'Aluminum Ingots',
      'Copper Cobalt',
      'Tanzanite (Gemstone Grade)',
      'Tantalite'
    ],
    keyFeatures: [
      'African sourced',
      'LME Grade A quality',
      'Sustainable sourcing',
      'Direct mine relationships'
    ],
    marketFocus: 'Industrial & manufacturing',
    availability: 'In Stock'
  },
  {
    id: 'by-products',
    title: 'Petroleum By-products',
    icon: Zap,
    description: 'Essential by-products supporting various industrial applications',
    color: 'bg-purple-600',
    gradient: 'from-purple-600 to-pink-600',
    products: [
      'Sulphur Granules',
      'Sulphuric Acid',
      'Urea (46% Nitrogen)',
      'Industrial Grade Chemicals',
      'Specialty By-products'
    ],
    keyFeatures: [
      'Industrial grade quality',
      'Bulk quantities available',
      'Consistent supply',
      'Multi-application use'
    ],
    marketFocus: 'Chemical & agricultural',
    availability: 'In Stock'
  }
]

interface ProductCategoriesProps {
  className?: string
  variant?: 'grid' | 'carousel' | 'list'
  showFilter?: boolean
  maxItems?: number
}

export default function ProductCategories({
  className = '',
  variant = 'grid',
  showFilter = false,
  maxItems
}: ProductCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const displayCategories = maxItems
    ? productCategories.slice(0, maxItems)
    : productCategories

  const filteredCategories = filter === 'all'
    ? displayCategories
    : displayCategories.filter(cat => cat.availability.toLowerCase().includes(filter))

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
            Product Portfolio
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive range of commodities traded through our global network,
            ensuring reliable supply and competitive pricing across all categories.
          </p>
        </motion.div>

        {/* Filter Options */}
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center space-x-4 bg-white rounded-lg p-2 shadow-sm border">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border-none bg-transparent focus:outline-none text-sm font-medium"
              >
                <option value="all">All Products</option>
                <option value="stock">In Stock</option>
                <option value="order">Available on Order</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* Product Categories Grid */}
        {variant === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                >
                  {/* Category Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-br ${category.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                      <category.icon className="h-12 w-12 mb-2" />
                      <span className={`text-xs px-2 py-1 rounded-full bg-white/20 ${category.availability === 'In Stock' ? 'text-green-100' : 'text-yellow-100'
                        }`}>
                        {category.availability}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-loop-orange-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {category.description}
                    </p>

                    {/* Key Products */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-navy-800">Key Products:</h4>
                      <div className="space-y-1">
                        {category.products.slice(0, 3).map((product, idx) => (
                          <div key={idx} className="flex items-center text-xs text-foreground/60">
                            <div className="w-1.5 h-1.5 bg-loop-orange-600 rounded-full mr-2" />
                            {product}
                          </div>
                        ))}
                        {category.products.length > 3 && (
                          <div className="text-xs text-loop-orange-600 font-medium">
                            +{category.products.length - 3} more products
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Focus */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">Focus:</span>
                      <span className="font-medium text-navy-800">{category.marketFocus}</span>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center justify-center mt-4">
                      <ChevronRight
                        className={`h-5 w-5 text-loop-orange-600 transition-transform ${selectedCategory === category.id ? 'rotate-90' : ''
                          }`}
                      />
                    </div>

                    {/* Expanded Details */}
                    {selectedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <h5 className="text-sm font-semibold text-navy-800 mb-2">Key Features:</h5>
                        <div className="space-y-1 mb-4">
                          {category.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-foreground/60">
                              <CheckCircle className="h-3 w-3 text-loop-orange-600 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button size="sm" className="w-full bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                          <Link href="/products">
                            View Details
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Product Categories List View */}
        {variant === 'list' && (
          <div className="space-y-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-800">{category.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${category.availability === 'In Stock'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                            }`}>
                            {category.availability}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-foreground/70 text-sm mb-3">{category.description}</p>
                        <div className="flex items-center text-sm">
                          <Globe className="h-4 w-4 text-loop-orange-600 mr-2" />
                          <span className="text-foreground/60">{category.marketFocus}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <Button className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                          <Link href="/products">
                            View Products
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">
              Need Specific Product Information?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Our trading team is ready to provide detailed specifications, pricing,
              and delivery terms for any of our product categories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/products">
                  <Star className="mr-2 h-5 w-5" />
                  Complete Product Catalog
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Request Custom Quote
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