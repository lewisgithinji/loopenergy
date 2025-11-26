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
  Globe,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Filter,
  Search,
  Star
} from 'lucide-react'
import Link from 'next/link'

const productCategories = [
  {
    id: 'petroleum',
    title: 'Refined Petroleum Products',
    icon: Fuel,
    description: 'High-quality refined petroleum products meeting international standards',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Gasoline (RON 92 to RON 95)',
        specifications: ['RON 92 to RON 95', 'Consistent quality', 'Regional specifications', 'Competitive pricing', 'Steady supply'],
        description: 'Gasoline is the driving force that powers development and commerce throughout the world. Loop Energy supplies gasoline from RON 92 to RON 95 with competitive prices, steady supply, and expert delivery. We work with a range of refiners, oil companies, and distributors across Africa, Europe, and UAE.',
        applications: ['Automotive fuel', 'Transportation', 'Commercial vehicles'],
        availability: 'In Stock'
      },
      {
        name: 'Gas Oil (2500PPM to 10PPM)',
        specifications: ['2500PPM to 10PPM', 'Marine grade available', 'Consistent quality', 'Competitive pricing'],
        description: 'Loop Energy is a known trader, supplier, and distributor of gas oil throughout our network of African, European, and UAE partners. We carry gas oil from 2500PPM to 10PPM. Gas oil has numerous applications, including powering the trucks, trains, and boats that transport nearly all the products people consume around the globe. As an active trader in global gas oil markets, we source products of consistent quality at competitive prices, provide shipping solutions, and make punctual deliveries.',
        applications: ['Marine vessels', 'Transportation', 'Industrial equipment', 'Trucks', 'Trains'],
        availability: 'In Stock'
      },
      {
        name: 'Fuel Oil (RMG 180/380, RME 180)',
        specifications: ['RMG 180', 'RMG 380', 'RME 180', 'Various qualities available', 'Bunker fuel solutions'],
        description: 'Fuel oil is the primary propellant in the marine vessels that pump goods into all the world\'s markets. Aside from providing bunker fuel and solutions to ships, we trade in large quantities of fuel oil. We carry RMG 180, RME 180, RMG 380, and various qualities of fuel oil to fill our client\'s needs. Distilled from crude oil, but often left as residue during the oil refining process, nearly 10% of fuel oil produced is used to power large ships, a further 15% is used for heating, and the remainder is used by refineries as a feedstock for production of other fuels.',
        applications: ['Marine bunker fuel', 'Industrial heating', 'Power generation', 'Refinery feedstock'],
        availability: 'In Stock'
      },
      {
        name: 'Jet A-1 Fuel',
        specifications: ['Aviation grade', 'MENA region sourced', 'Quality certified', 'Timely delivery', 'Middle distillate'],
        description: 'Jet fuel is a middle distillate, or a byproduct of refined crude oil, situated between the lighter and heavier crude oil factions. As its name suggests, it is used primarily to power jet engines. With more people flying than ever before, jet fuel demand growth is expected to rise in the coming decade. At Loop Energy we offer our expert knowledge and flexibility to respond promptly to supply and demand imbalances. We primarily deal in Jet A-1 fuel that we source directly from refineries throughout the MENA region. Our quality product is delivered on time.',
        applications: ['Commercial aviation', 'Private aviation', 'Aircraft operations'],
        availability: 'Available'
      },
      {
        name: 'Bitumen (30/40 - 80/100)',
        specifications: ['Grade 30/40', 'Grade 50/70', 'Grade 60/70', 'Grade 80/100', 'Bulk, Flexi bags, Bitutainers'],
        description: 'We trade different grades and different packaging of bitumen. Our product range includes 30/40, 50/70, 60/70, 80/100 amongst others. We deal in bulk, flexi bags, bitutainers etc.',
        applications: ['Road construction', 'Waterproofing', 'Industrial applications'],
        availability: 'In Stock'
      }
    ]
  },
  {
    id: 'precious-metals',
    title: 'Precious Metals',
    icon: Award,
    description: 'High-purity Gold and Silver Bars with certified quality and authentication',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'High-Purity Gold Bars',
        specifications: ['99.9% purity', 'Certified quality', 'International standards', 'Secure delivery', 'Verified authentication'],
        description: 'Premium high-purity gold bars meeting international purity and certification standards. Sourced through reliable channels with complete documentation and secure delivery.',
        applications: ['Investment', 'Industrial use', 'Jewelry manufacturing', 'Reserve holdings'],
        availability: 'Available on Order'
      },
      {
        name: 'High-Purity Silver Bars',
        specifications: ['99.9% purity', 'Various sizes', 'Certified authentication', 'Secure delivery', 'International standards'],
        description: 'High-quality silver bars with certified purity and authentication. Available in various sizes to meet diverse client requirements.',
        applications: ['Investment', 'Industrial applications', 'Electronics', 'Manufacturing'],
        availability: 'Available on Order'
      }
    ]
  },
  {
    id: 'minerals',
    title: 'Minerals',
    icon: Mountain,
    description: 'A varied portfolio sourced through strategic partnerships in Africa including Copper Cathodes, Copper Concentrate, Copper Cobalt, Aluminum Ingots and Tanzanite',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Copper Cathodes',
        specifications: ['99.99% purity', 'LME Grade A', 'African sourced', 'Quality certified'],
        description: 'High-grade copper cathodes sourced through strategic African partnerships.',
        applications: ['Electronics', 'Construction', 'Manufacturing'],
        availability: 'In Stock'
      },
      {
        name: 'Copper Concentrate',
        specifications: ['High copper content', 'Low impurities', 'Consistent supply', 'Mine direct'],
        description: 'Premium copper concentrate from established African mining operations.',
        applications: ['Smelting', 'Refining', 'Manufacturing'],
        availability: 'In Stock'
      },
      {
        name: 'Copper Cobalt',
        specifications: ['Mixed copper-cobalt ore', 'African sourced', 'Verified grades', 'Sustainable sourcing'],
        description: 'Mixed copper-cobalt ore from sustainable African mining operations.',
        applications: ['Battery manufacturing', 'Aerospace', 'Electronics'],
        availability: 'Available on Order'
      },
      {
        name: 'Aluminum Ingots',
        specifications: ['99.7% purity', 'Various sizes', 'Quality assured', 'Timely delivery'],
        description: 'High-purity aluminum ingots for industrial and manufacturing applications.',
        applications: ['Manufacturing', 'Construction', 'Automotive'],
        availability: 'In Stock'
      },
      {
        name: 'Tanzanite',
        specifications: ['Gemstone grade', 'Certified quality', 'African sourced', 'Various sizes'],
        description: 'Premium Tanzanite gemstones sourced directly from African operations.',
        applications: ['Jewelry', 'Investment', 'Collectibles'],
        availability: 'Limited Stock'
      }
    ]
  },
  {
    id: 'by-products',
    title: 'Petroleum By-products',
    icon: Zap,
    description: 'A range of products including those essential for various industries including Sulphur Granules, Sulphuric Acid, and Urea',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: [
      {
        name: 'Sulphur Granules',
        specifications: ['Industrial grade', 'High purity', 'Consistent supply', 'Bulk quantities'],
        description: 'Industrial-grade sulphur granules for various chemical applications.',
        applications: ['Chemical industry', 'Fertilizer production', 'Vulcanization'],
        availability: 'In Stock'
      },
      {
        name: 'Sulphuric Acid',
        specifications: ['Various concentrations', 'Industrial grade', 'Safe handling', 'Certified quality'],
        description: 'High-quality sulphuric acid for industrial and chemical applications.',
        applications: ['Chemical processing', 'Metal processing', 'Battery production'],
        availability: 'Available on Order'
      },
      {
        name: 'Urea',
        specifications: ['46% Nitrogen', 'Prilled & granular', 'Agricultural grade', 'Industrial grade'],
        description: 'High-quality urea for agricultural and industrial applications.',
        applications: ['Fertilizer', 'Chemical synthesis', 'Animal feed'],
        availability: 'In Stock'
      }
    ]
  }
]

const tradingCapabilities = [
  {
    title: 'F.O.B Trading',
    description: 'Free on Board terms with quality assurance',
    features: ['Quality control', 'Documentation', 'Loading supervision']
  },
  {
    title: 'C.I.F Trading',
    description: 'Cost, Insurance, and Freight complete solutions',
    features: ['Insurance coverage', 'Freight arrangements', 'Port handling']
  },
  {
    title: 'Global Sourcing',
    description: 'Strategic partnerships worldwide',
    features: ['Direct relationships', 'Quality verification', 'Timely delivery']
  }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = selectedCategory === 'all'
    ? productCategories
    : productCategories.filter(cat => cat.id === selectedCategory)

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
                Premium Product
                <br />
                <span className="text-loop-orange-400">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Comprehensive range of refined petroleum products, precious metals, minerals,
                and by-products traded through our global network.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                  <Link href="/trading">
                    <Globe className="mr-2 h-5 w-5" />
                    Trading Services
                  </Link>
                </Button>
                <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Request Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-loop-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-loop-orange-600 hover:bg-loop-orange-700' : ''}
              >
                All Products
              </Button>
              {productCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-loop-orange-600 hover:bg-loop-orange-700' : ''}
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
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
              Product Categories
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of trading products across multiple commodity categories.
            </p>
          </motion.div>

          <div className="space-y-20">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-100 text-loop-orange-600 mb-4">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Category Image */}
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                    <p className="text-gray-200">{category.products.length} Products Available</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products
                    .filter(product =>
                      searchTerm === '' ||
                      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-bold text-navy-800">{product.name}</h4>
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                product.availability === 'In Stock'
                                  ? 'bg-green-100 text-green-800'
                                  : product.availability === 'Available on Order'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {product.availability}
                              </span>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/70 text-sm mb-4">{product.description}</p>

                          {/* Specifications */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-navy-800 mb-2">Specifications:</h5>
                            <ul className="space-y-1">
                              {product.specifications.map((spec, idx) => (
                                <li key={idx} className="flex items-center text-xs text-foreground/60">
                                  <CheckCircle className="h-3 w-3 text-loop-orange-600 mr-2 flex-shrink-0" />
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Applications */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-navy-800 mb-2">Applications:</h5>
                            <div className="flex flex-wrap gap-1">
                              {product.applications.map((app, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                  {app}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Button size="sm" className="w-full bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                            <Link href="/contact">
                              Request Information
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Flexible trading terms and comprehensive services to meet your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tradingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <Globe className="h-12 w-12 text-loop-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-800 mb-4">{capability.title}</h3>
                    <p className="text-foreground/70 mb-6">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-foreground/60">
                          <CheckCircle className="h-4 w-4 text-loop-orange-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
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
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rigorous quality control processes ensure all commodities meet or exceed
              international standards and client specifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Certified Testing',
                description: 'Third-party laboratory verification',
                icon: CheckCircle
              },
              {
                title: 'International Standards',
                description: 'Compliance with global quality benchmarks',
                icon: Globe
              },
              {
                title: 'Documentation',
                description: 'Complete certification and compliance records',
                icon: Star
              },
              {
                title: 'Continuous Monitoring',
                description: 'Ongoing quality surveillance and control',
                icon: Award
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
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss product specifications, pricing, and delivery terms
              for your commodity trading requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Product Information
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/trading">
                  <Globe className="mr-2 h-5 w-5" />
                  View Trading Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}