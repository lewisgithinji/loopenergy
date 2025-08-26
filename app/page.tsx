'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Fuel, Building, Wrench, Phone, Mail, MapPin, ArrowRight, Globe, Shield, Users, Award } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Fuel,
    title: 'Petroleum & Energy',
    description: 'Bulk fuel supply and distribution',
    href: '/services/petroleum'
  },
  {
    icon: Building,
    title: 'Infrastructure',
    description: 'Civil engineering and construction',
    href: '/services/infrastructure'
  },
  {
    icon: Wrench,
    title: 'Equipment Hire',
    description: 'Construction equipment rental',
    href: '/equipment-hire'
  }
]

const clients = [
  'Kenya Pipeline Company', 'Total Energies', 'Shell Kenya', 'Kenya Power',
  'Kenya Urban Roads Authority', 'Ministry of Transport', 'Nakuru County', 'KPLC'
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Servicing Your Infrastructure.
              <br />
              <span className="text-teal-400">Powering Your Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Leading petroleum supplier, infrastructure developer, and equipment hire company 
              serving Kenya and East Africa since 2013.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white" asChild>
                <Link href="/services/petroleum">
                  <Fuel className="mr-2 h-5 w-5" />
                  Buy Fuel
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy-800" asChild>
                <Link href="/equipment-hire">
                  <Wrench className="mr-2 h-5 w-5" />
                  Hire Equipment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy-800" asChild>
                <Link href="/services/infrastructure">
                  <Building className="mr-2 h-5 w-5" />
                  Talk to Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Call CTA */}
        <div className="fixed bottom-4 right-4 z-50 lg:hidden">
          <Button size="icon" className="rounded-full h-14 w-14 bg-teal-600 hover:bg-teal-700 shadow-lg" asChild>
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
              Quick Access to Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant access to our core service areas. From petroleum supply to infrastructure development.
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
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-6 group-hover:bg-teal-200 transition-colors">
                        <service.icon className="h-8 w-8 text-teal-600" />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600">
              We're proud to serve some of Kenya's most respected companies and institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border"
              >
                <span className="text-gray-600 font-medium text-sm text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Pledge */}
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
              Our HSE & Sustainability Pledge
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Committed to the highest standards of health, safety, environmental protection, 
              and community development in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Shield, title: 'Safety First', description: 'Zero-accident workplace culture' },
              { icon: Users, title: 'Community Impact', description: 'Local job creation and skills development' },
              { icon: Globe, title: 'Environmental Care', description: 'Sustainable practices and renewable energy' },
              { icon: Award, title: 'Quality Excellence', description: 'ISO-certified processes' }
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 mb-4">
                      <item.icon className="h-6 w-6 text-teal-400" />
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/hse-sustainability">
                Learn More About Our Commitments
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your petroleum, infrastructure, or equipment needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <Link href="/contact">
                  Get Quote
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
                <Phone className="h-5 w-5 mr-2 text-teal-600" />
                <span>+254 722 517923</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-600" />
                <span>loopenergy01@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}