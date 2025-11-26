'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Fuel, Building, Wrench, Phone, Mail, MapPin, ArrowRight, Globe, Shield, Users, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const services = [
  {
    icon: Fuel,
    title: 'Petroleum Products',
    description: 'Refined petroleum products and by-products',
    href: '/products'
  },
  {
    icon: Award,
    title: 'Precious Metals',
    description: 'High-purity gold and silver trading',
    href: '/products'
  },
  {
    icon: Globe,
    title: 'Global Trading',
    description: 'International commodity trading services',
    href: '/trading'
  }
]

const clients = [
  { name: 'International Refineries', icon: Fuel, color: 'from-orange-500 to-red-500' },
  { name: 'Global Energy Partners', icon: Globe, color: 'from-blue-500 to-cyan-500' },
  { name: 'Mining Consortiums', icon: Award, color: 'from-yellow-500 to-amber-600' },
  { name: 'Logistics Partners', icon: Building, color: 'from-purple-500 to-pink-500' },
  { name: 'Terminal Operators', icon: Wrench, color: 'from-green-500 to-emerald-500' },
  { name: 'Financial Institutions', icon: Shield, color: 'from-indigo-500 to-blue-600' },
  { name: 'Storage Facilities', icon: Building, color: 'from-slate-500 to-gray-600' },
  { name: 'Regional Distributors', icon: Users, color: 'from-teal-500 to-cyan-600' }
]

const heroImages = [
  {
    src: '/hero-tanker.jpg',
    alt: 'Global oil tanker operations'
  },
  {
    src: '/hero-refinery.jpg',
    alt: 'Modern refinery complex'
  },
  {
    src: '/hero-trading.jpg',
    alt: 'Commodity trading operations'
  }
]

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900">
        {/* Background Images with Transition */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
        ))}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-navy-900/70 via-navy-800/60 to-black/50"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Global Energy Trading.
              <br />
              <span className="text-loop-orange-400">Reliable Supply Solutions.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              International trading company specializing in refined petroleum products, precious metals,
              and minerals across Africa, UAE, and Europe since 2014.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700 text-white shadow-lg border-2 border-transparent" asChild>
                <Link href="/products">
                  <Fuel className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800 shadow-lg transition-all" asChild>
                <Link href="/trading">
                  <Globe className="mr-2 h-5 w-5" />
                  Trading Services
                </Link>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-800 shadow-lg transition-all" asChild>
                <Link href="/contact">
                  <Building className="mr-2 h-5 w-5" />
                  Get Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-loop-orange-400 scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Call CTA */}
        <div className="fixed bottom-4 right-4 z-50 lg:hidden">
          <Button size="icon" className="rounded-full h-14 w-14 bg-loop-orange-600 hover:bg-loop-orange-700 shadow-lg" asChild>
            <a href="tel:+254722517923" aria-label="Call us">
              <Phone className="h-6 w-6 text-white" />
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Our Core Business Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive trading solutions across petroleum products, precious metals, and global commodity markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-loop-orange-100 mb-6 group-hover:bg-loop-orange-200 transition-colors">
                        <service.icon className="h-8 w-8 text-loop-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-loop-orange-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Trusted Global Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building strategic relationships with leading industry players across Africa, UAE, and Europe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-loop-orange-200 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} p-0.5 transform group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <client.icon className="h-7 w-7 text-gray-700 group-hover:text-loop-orange-600 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Partner name */}
                    <h3 className="text-base font-bold text-navy-800 group-hover:text-loop-orange-600 transition-colors duration-300">
                      {client.name}
                    </h3>

                    {/* Decorative line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-loop-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-loop-orange-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
              <Globe className="h-5 w-5 text-loop-orange-600" />
              <span className="text-sm font-semibold text-navy-800">
                Operating across 3 continents with 8+ partner categories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Strategic Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on four core pillars: operational excellence, market differentiation,
              client relationship management, and comprehensive risk management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Shield, title: 'Operational Excellence', description: 'Efficient supply chain management' },
              { icon: Users, title: 'Client Relationships', description: 'Long-term partnership focus' },
              { icon: Globe, title: 'Market Differentiation', description: 'Innovative trading solutions' },
              { icon: Award, title: 'Risk Management', description: 'Comprehensive risk mitigation' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 border-white/20 text-white h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-loop-orange-500/20 mb-4">
                      <item.icon className="h-6 w-6 text-loop-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
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
            className="text-center"
          >
            <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
              <Link href="/about">
                Learn More About Our Approach
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
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
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your petroleum, precious metals, or commodity trading needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>+254 722 517923</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>info@loopenergyltd.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-loop-orange-600" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}