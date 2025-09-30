'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Globe, Building2, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Contact Our
                <br />
                <span className="text-loop-orange-400">Trading Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Ready to discuss your commodity trading, petroleum products, or precious metals needs?
                Connect with our expert teams in Dubai and Nairobi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Offices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Dubai Office */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Building2 className="h-8 w-8 text-loop-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-navy-800">Dubai Office</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Address</h4>
                        <p className="text-gray-600">
                          DMCC Business Centre<br />
                          Level 1, Jewellery & Gemplex 3<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Phone</h4>
                        <p className="text-gray-600">+971 4 123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Email</h4>
                        <p className="text-gray-600">dubai@loopenergyltd.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Sunday - Thursday: 9:00 AM - 6:00 PM GST<br />
                          Friday - Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-2">Regional Focus</p>
                    <p className="text-sm text-gray-500">Middle East operations, international trading, refinery partnerships</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nairobi Office */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="h-8 w-8 text-loop-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-navy-800">Nairobi Office</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Address</h4>
                        <p className="text-gray-600">
                          Kindaruma Courts, Kindaruma Road<br />
                          Nairobi, Kenya<br />
                          P.O. Box 2596-20100, Nakuru, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Phone</h4>
                        <p className="text-gray-600">
                          +254 722 517923<br />
                          +254 731 624225
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@loopenergyltd.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
                          Saturday: 8:00 AM - 1:00 PM EAT<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-2">Regional Focus</p>
                    <p className="text-sm text-gray-500">African markets, mining partnerships, precious metals sourcing</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Contact Options */}
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-8">Quick Contact</h2>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-loop-orange-50 border-loop-orange-200">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-10 w-10 text-loop-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-navy-800 mb-2">Trading Desk</h4>
                    <p className="text-sm text-gray-600 mb-3">Direct line to our trading team</p>
                    <Button size="sm" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                      <a href="tel:+254722517923">Call Nairobi</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-navy-50 border-navy-200">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-10 w-10 text-navy-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-navy-800 mb-2">Partnership Inquiry</h4>
                    <p className="text-sm text-gray-600 mb-3">Strategic partnerships and collaboration</p>
                    <Button size="sm" variant="outline" className="border-navy-300" asChild>
                      <a href="mailto:partnerships@loopenergyltd.com">Send Email</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Contact Methods */}
              <div className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-navy-800 mb-4">Specialized Departments</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Trading Operations</span>
                    <a href="mailto:trading@loopenergyltd.com" className="text-sm text-loop-orange-600 hover:underline">
                      trading@loopenergyltd.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Logistics & Shipping</span>
                    <a href="mailto:logistics@loopenergyltd.com" className="text-sm text-loop-orange-600 hover:underline">
                      logistics@loopenergyltd.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Financial Services</span>
                    <a href="mailto:finance@loopenergyltd.com" className="text-sm text-loop-orange-600 hover:underline">
                      finance@loopenergyltd.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-800">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Get in touch with our commodity trading experts</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loop-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loop-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loop-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loop-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-loop-orange-500"
                    >
                      <option value="">Select a service</option>
                      <option value="petroleum">Petroleum Products Trading</option>
                      <option value="precious-metals">Precious Metals Trading</option>
                      <option value="minerals">Minerals & Commodities</option>
                      <option value="logistics">Logistics & Shipping</option>
                      <option value="partnerships">Strategic Partnerships</option>
                      <option value="financial">Financial Structuring</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your requirements..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-loop-orange-600 hover:bg-loop-orange-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our global trading team to explore opportunities in commodity markets,
              petroleum products, and precious metals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Trading Desk
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy-800" asChild>
                <a href="mailto:trading@loopenergyltd.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Trading Team
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-loop-orange-400">Dubai Operations</h3>
                <p className="text-gray-300 text-sm">Middle East trading hub</p>
                <p className="text-gray-400 text-sm">+971 4 123 4567</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-loop-orange-400">Nairobi Operations</h3>
                <p className="text-gray-300 text-sm">African markets specialist</p>
                <p className="text-gray-400 text-sm">+254 722 517923</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}