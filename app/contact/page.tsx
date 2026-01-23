'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Globe, Building2, ArrowRight, Loader2, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'

export default function ContactPage() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState('submitting')
    setErrorMessage('')

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('access_key', 'b5335568-9214-4ee4-8587-0e5544ebf933')
      formData.append('from_name', 'Loop Energy Contact Form')
      formData.append('subject', 'New Contact Form Submission - Loop Energy')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Failed to send message')
      }

      setSubmissionState('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmissionState('idle'), 5000)
    } catch (error) {
      setSubmissionState('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-navy-950 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.png"
            alt="Contact Our Trading Team"
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
                          Business Center, Al Shmookh Bldg.<br />
                          UAQ Free Trade Zone, Umm Al Quwain<br />
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Phone</h4>
                        <p className="text-gray-600">+254 722 517923</p>
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
                          First Floor, NHC Building<br />
                          Aghakhan Walk<br />
                          P.O Box 51100-00100, Nairobi Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-loop-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-navy-800 mb-1">Phone</h4>
                        <p className="text-gray-600">
                          +254 711 409 228<br />
                          +254 722 517923
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
                      <a href="tel:+254711409228">Call Nairobi</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-navy-800 mb-2">WhatsApp Chat</h4>
                    <p className="text-sm text-gray-600 mb-3">Instant messaging for quick responses</p>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                      <a href="https://wa.me/254711409228" target="_blank" rel="noopener noreferrer">Message Us</a>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Success Message */}
                    {submissionState === 'success' && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>Thank you! We will get back to you soon.</span>
                      </div>
                    )}

                    {/* Error Message */}
                    {submissionState === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                      </div>
                    )}

                    {/* Honeypot Field */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register('firstName')}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.firstName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-loop-orange-500'
                            }`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register('lastName')}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.lastName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-loop-orange-500'
                            }`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
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
                          {...register('email')}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-loop-orange-500'
                            }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-loop-orange-500'
                            }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register('company')}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.company
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-loop-orange-500'
                          }`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.service
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-loop-orange-500'
                          }`}
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
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        placeholder="Please provide details about your requirements..."
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-loop-orange-500'
                          }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-loop-orange-600 hover:bg-loop-orange-700"
                      disabled={isSubmitting || submissionState === 'submitting'}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
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
                <a href="tel:+254711409228">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Nairobi Office
                </a>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/254711409228" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white hover:text-navy-900 transition-all" asChild>
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
                <p className="text-gray-400 text-sm">+254 722 517923</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-loop-orange-400">Nairobi Operations</h3>
                <p className="text-gray-300 text-sm">African markets specialist</p>
                <p className="text-gray-400 text-sm">+254 711 409 228</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}