'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Download, 
  X, 
  Plus, 
  Minus, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Wrench,
  Fuel,
  Users,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

// Equipment data
const equipment = [
  {
    id: "exc-22t",
    name: "Excavator 22T",
    category: "Excavators",
    tonnage: "22 tons",
    typical_use: "Medium excavation, site preparation, trenching",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      engine_power: "110 HP",
      bucket_capacity: "1.0 m³",
      max_dig_depth: "6.2 m",
      operating_weight: "22,000 kg"
    },
    available: true,
    daily_rate: 15000,
    rating: 4.8,
    features: ["GPS Tracking", "Fuel Efficient", "Operator Available"]
  },
  {
    id: "exc-30t",
    name: "Excavator 30T",
    category: "Excavators", 
    tonnage: "30 tons",
    typical_use: "Heavy excavation, demolition, large construction",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      engine_power: "150 HP",
      bucket_capacity: "1.4 m³",
      max_dig_depth: "7.5 m",
      operating_weight: "30,000 kg"
    },
    available: true,
    daily_rate: 20000,
    rating: 4.9,
    features: ["GPS Tracking", "Heavy Duty", "Operator Available"]
  },
  {
    id: "dozer-18t",
    name: "Dozer 18T",
    category: "Dozers",
    tonnage: "18 tons",
    typical_use: "Land clearing, road construction, grading",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      engine_power: "130 HP",
      blade_capacity: "3.2 m³",
      operating_weight: "18,000 kg",
      ground_pressure: "0.65 kg/cm²"
    },
    available: true,
    daily_rate: 18000,
    rating: 4.7,
    features: ["Powerful Engine", "Low Ground Pressure", "Maintenance Included"]
  },
  {
    id: "grader",
    name: "Motor Grader",
    category: "Graders",
    tonnage: "14 tons",
    typical_use: "Road grading, fine grading, surface preparation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      engine_power: "140 HP",
      blade_length: "3.7 m",
      operating_weight: "14,000 kg",
      max_speed: "40 km/h"
    },
    available: true,
    daily_rate: 16000,
    rating: 4.6,
    features: ["Precision Grading", "High Speed", "Operator Training"]
  },
  {
    id: "crane-30t",
    name: "Mobile Crane 30T",
    category: "Cranes",
    tonnage: "30 tons",
    typical_use: "Heavy lifting, construction, material handling",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      max_lift_capacity: "30,000 kg",
      boom_length: "31 m",
      max_radius: "26 m",
      engine_power: "200 HP"
    },
    available: false,
    daily_rate: 25000,
    rating: 4.9,
    features: ["Extended Reach", "Certified Operator", "Safety Systems"]
  },
  {
    id: "roller-10t",
    name: "Smooth Roller 10T", 
    category: "Rollers",
    tonnage: "10 tons",
    typical_use: "Asphalt compaction, road finishing",
    image: "https://images.unsplash.com/photo-1581094794239-91e9bf432db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      operating_weight: "10,000 kg",
      drum_width: "1.68 m",
      compaction_force: "250 kN",
      engine_power: "75 HP"
    },
    available: true,
    daily_rate: 12000,
    rating: 4.5,
    features: ["Smooth Finish", "Efficient Compaction", "Easy Operation"]
  },
  {
    id: "tipper-25t",
    name: "Tipper Truck 25T",
    category: "Transport",
    tonnage: "25 tons",
    typical_use: "Material transport, aggregate hauling",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      payload_capacity: "25,000 kg",
      body_capacity: "15 m³",
      engine_power: "300 HP",
      transmission: "Manual 9-speed"
    },
    available: true,
    daily_rate: 10000,
    rating: 4.4,
    features: ["Large Capacity", "Reliable Transport", "Experienced Driver"]
  },
  {
    id: "mixer-6m3",
    name: "Concrete Transit Mixer 6m³",
    category: "Concrete",
    tonnage: "6 m³",
    typical_use: "Concrete delivery, mixing, pouring",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    specs: {
      drum_capacity: "6 m³",
      mixing_capacity: "4.5 m³",
      engine_power: "280 HP",
      discharge_height: "3.8 m"
    },
    available: true,
    daily_rate: 14000,
    rating: 4.6,
    features: ["Fresh Concrete", "Timely Delivery", "Quality Mix"]
  }
]

interface QuoteItem {
  equipment: typeof equipment[0]
  duration: number
  operator: boolean
  fuel: boolean
}

export default function EquipmentHirePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [filteredEquipment, setFilteredEquipment] = useState(equipment)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([])
  const [deliveryDistance, setDeliveryDistance] = useState(0)
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const categories = ['All', ...Array.from(new Set(equipment.map(item => item.category)))]

  // Filter equipment based on search and filters
  useEffect(() => {
    let filtered = equipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.typical_use.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesAvailability = !showAvailableOnly || item.available
      
      return matchesSearch && matchesCategory && matchesAvailability
    })

    // Sort equipment
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price':
          return a.daily_rate - b.daily_rate
        case 'category':
          return a.category.localeCompare(b.category)
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    setFilteredEquipment(filtered)
  }, [searchTerm, selectedCategory, sortBy, showAvailableOnly])

  const addToQuote = (item: typeof equipment[0]) => {
    const existingItem = quoteItems.find(qi => qi.equipment.id === item.id)
    if (existingItem) {
      // Update existing item
      setQuoteItems(quoteItems.map(qi => 
        qi.equipment.id === item.id 
          ? { ...qi, duration: qi.duration + 1 }
          : qi
      ))
    } else {
      // Add new item
      setQuoteItems([...quoteItems, {
        equipment: item,
        duration: 1,
        operator: true,
        fuel: false
      }])
    }
    setIsQuoteOpen(true)
  }

  const removeFromQuote = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.equipment.id !== id))
  }

  const updateQuoteItem = (id: string, updates: Partial<QuoteItem>) => {
    setQuoteItems(quoteItems.map(item => 
      item.equipment.id === id ? { ...item, ...updates } : item
    ))
  }

  const calculateTotal = () => {
    const equipmentTotal = quoteItems.reduce((total, item) => {
      let itemTotal = item.equipment.daily_rate * item.duration
      if (item.operator) itemTotal += 5000 * item.duration // Operator cost
      if (item.fuel) itemTotal += 3000 * item.duration // Fuel cost
      return total + itemTotal
    }, 0)
    
    const deliveryFee = deliveryDistance > 10 ? (deliveryDistance - 10) * 100 : 0
    return equipmentTotal + deliveryFee
  }

  const generatePDFQuote = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF quote generation coming soon! For now, please contact us at +254 722 517923')
  }

  const sendQuoteEmail = () => {
    const quoteDetails = quoteItems.map(item => 
      `${item.equipment.name} - ${item.duration} days - ${formatCurrency(item.equipment.daily_rate * item.duration)}`
    ).join('\n')
    
    const subject = encodeURIComponent('Equipment Hire Quote Request')
    const body = encodeURIComponent(`Hello Loop Energy,\n\nI would like to request a quote for the following equipment:\n\n${quoteDetails}\n\nDelivery Distance: ${deliveryDistance}km\nTotal Estimate: ${formatCurrency(calculateTotal())}\n\nPlease contact me with availability and final pricing.\n\nThank you!`)
    
    window.open(`mailto:loopenergy01@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Hire</h1>
              <p className="text-xl text-gray-200 mb-8">
                Modern fleet of construction equipment with professional operators and comprehensive support. 
                Get instant quotes and book equipment for your next project.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-teal-400" />
                  <span>Modern Fleet</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-teal-400" />
                  <span>Certified Operators</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-teal-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search equipment by name or use case..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
              <option value="rating">Sort by Rating</option>
            </select>

            {/* Available Only Toggle */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm text-gray-600">Available only</span>
            </label>

            {/* Quote Builder Toggle */}
            <Button 
              onClick={() => setIsQuoteOpen(true)}
              className="bg-teal-600 hover:bg-teal-700 relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quote Builder
              {quoteItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {quoteItems.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Equipment Catalog</h2>
            <p className="text-gray-600">
              Showing {filteredEquipment.length} of {equipment.length} equipment items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 ${!item.available ? 'opacity-75' : ''}`}>
                    {/* Equipment Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {!item.available && (
                        <div className="absolute inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center">
                          <span className="text-white font-bold">Currently Unavailable</span>
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-navy-800">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.tonnage}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4">{item.typical_use}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {item.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="mb-4 text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(item.specs).slice(0, 2).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-gray-500">{key.replace('_', ' ')}: </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-2xl font-bold text-teal-600">
                            {formatCurrency(item.daily_rate)}
                          </span>
                          <span className="text-gray-500 text-sm">/day</span>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>+ Operator: {formatCurrency(5000)}/day</div>
                          <div>+ Fuel: {formatCurrency(3000)}/day</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => addToQuote(item)}
                          disabled={!item.available}
                          className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add to Quote
                        </Button>
                        <Button variant="outline" size="icon">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No equipment matches your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setShowAvailableOnly(false)
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quote Builder Sidebar */}
      <AnimatePresence>
        {isQuoteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
            onClick={() => setIsQuoteOpen(false)}
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full max-w-lg bg-white h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-navy-800">Quote Builder</h3>
                  <Button variant="ghost" size="icon" onClick={() => setIsQuoteOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-4">
                {quoteItems.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your quote is empty</p>
                    <p className="text-sm text-gray-400">Add equipment to get started</p>
                  </div>
                ) : (
                  <>
                    {/* Quote Items */}
                    <div className="space-y-4 mb-6">
                      {quoteItems.map((item) => (
                        <Card key={item.equipment.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold">{item.equipment.name}</h4>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeFromQuote(item.equipment.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm text-gray-600">Duration (days):</span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  onClick={() => updateQuoteItem(item.equipment.id, { 
                                    duration: Math.max(1, item.duration - 1) 
                                  })}
                                  className="h-8 w-8"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.duration}</span>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  onClick={() => updateQuoteItem(item.equipment.id, { 
                                    duration: item.duration + 1 
                                  })}
                                  className="h-8 w-8"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>

                            {/* Options */}
                            <div className="space-y-2 mb-3">
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={item.operator}
                                  onChange={(e) => updateQuoteItem(item.equipment.id, { 
                                    operator: e.target.checked 
                                  })}
                                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <span className="text-sm">Include Operator (+{formatCurrency(5000)}/day)</span>
                              </label>
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={item.fuel}
                                  onChange={(e) => updateQuoteItem(item.equipment.id, { 
                                    fuel: e.target.checked 
                                  })}
                                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <span className="text-sm">Include Fuel (+{formatCurrency(3000)}/day)</span>
                              </label>
                            </div>

                            {/* Item Total */}
                            <div className="text-right">
                              <span className="font-semibold text-teal-600">
                                {formatCurrency(
                                  (item.equipment.daily_rate + 
                                   (item.operator ? 5000 : 0) + 
                                   (item.fuel ? 3000 : 0)) * item.duration
                                )}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Delivery */}
                    <Card className="mb-6">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-4 w-4 text-teal-600" />
                          <span className="font-medium">Delivery Distance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            value={deliveryDistance}
                            onChange={(e) => setDeliveryDistance(Number(e.target.value))}
                            placeholder="Distance in km"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          />
                          <span className="text-sm text-gray-500">km</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Free delivery within 10km. {formatCurrency(100)}/km beyond 10km.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Total */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total Estimate:</span>
                        <span className="text-2xl font-bold text-teal-600">
                          {formatCurrency(calculateTotal())}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        *Prices exclude VAT. Final pricing subject to availability and terms.
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button onClick={sendQuoteEmail} className="w-full bg-teal-600 hover:bg-teal-700">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Quote Request
                      </Button>
                      <Button onClick={generatePDFQuote} variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF Quote
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:+254722517923">
                          <Phone className="h-4 w-4 mr-2" />
                          Call for Availability
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Why Choose Loop Energy Equipment Hire?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide more than just equipment - we deliver complete solutions with professional support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wrench className="h-8 w-8" />,
                title: "Modern Fleet",
                description: "Well-maintained, latest model equipment with GPS tracking and safety features"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Certified Operators",
                description: "Experienced, licensed operators available for all equipment types"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Round-the-clock technical support and emergency assistance"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Flexible Terms",
                description: "Daily, weekly, or monthly rates with customizable packages"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">How Equipment Hire Works</h2>
            <p className="text-xl text-gray-600">Simple process to get the equipment you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Select",
                description: "Browse our equipment catalog and add items to your quote"
              },
              {
                step: "2", 
                title: "Customize Quote",
                description: "Set duration, add operators/fuel, and specify delivery location"
              },
              {
                step: "3",
                title: "Request Quote",
                description: "Send your quote request via email or call us directly"
              },
              {
                step: "4",
                title: "Delivery & Support",
                description: "We deliver on-time with full support throughout your rental"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-8 h-0.5 bg-teal-300 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by construction companies across Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Kimani",
                company: "Kimani Construction Ltd",
                testimonial: "Loop Energy's equipment is always in excellent condition. Their operators are skilled and the support is outstanding.",
                rating: 5
              },
              {
                name: "Sarah Wanjiku",
                company: "Wanjiku Infrastructure",
                testimonial: "Reliable equipment and timely delivery. They've been our go-to for heavy machinery for over 2 years.",
                rating: 5
              },
              {
                name: "Peter Otieno",
                company: "Otieno Earthworks",
                testimonial: "Great value for money and flexible terms. The quote system makes it easy to plan our projects.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                    <div>
                      <div className="font-semibold text-navy-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our equipment hire</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the daily rate?",
                answer: "The daily rate includes the equipment, basic maintenance, and insurance. Operator and fuel are optional add-ons available at additional cost."
              },
              {
                question: "How far do you deliver?",
                answer: "We provide free delivery within 10km of Nairobi. Beyond 10km, delivery is charged at KES 100 per kilometer."
              },
              {
                question: "What are your payment terms?",
                answer: "We accept cash, bank transfer, and mobile money. Payment is typically required 50% upfront and 50% on completion."
              },
              {
                question: "Do you provide operators?",
                answer: "Yes, we have certified operators available for all equipment types at KES 5,000 per day. All operators are licensed and experienced."
              },
              {
                question: "What if equipment breaks down?",
                answer: "We provide 24/7 technical support and will replace faulty equipment within 4 hours during business hours."
              },
              {
                question: "Can I modify my rental period?",
                answer: "Yes, you can extend or reduce your rental period with 24 hours notice, subject to availability."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Equipment for Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get instant quotes, check availability, and book equipment online. 
              Our team is standing by to help with your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Building Quote
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy-800" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +254 722 517923
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-400" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-400" />
                <span>Nairobi & Surrounding Areas</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-400" />
                <span>loopenergy01@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
