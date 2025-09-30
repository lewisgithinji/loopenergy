'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  Target,
  Heart,
  TrendingUp,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Factory,
  HardHat
} from 'lucide-react'
import { hse } from '@/lib/content'

export default function HSEClientSection() {
  return (
    <>
      {/* Our Commitment Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Our HSE Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zero harm to people, environment, and communities is at the core of everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Safety First",
              description: "Zero-accident workplace culture with comprehensive safety protocols",
              color: "bg-red-100 text-red-600"
            },
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Environmental Care",
              description: "Sustainable practices protecting Kenya's natural resources",
              color: "bg-green-100 text-green-600"
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Community Impact",
              description: "Local job creation and community development programs",
              color: "bg-blue-100 text-blue-600"
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Quality Excellence",
              description: "ISO-certified processes ensuring highest standards",
              color: "bg-teal-100 text-teal-600"
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full mb-4 ${pillar.color}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">HSE Framework</h2>
          <p className="text-xl text-gray-600">Comprehensive approach to health, safety, and environmental management</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hse.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-800 flex items-center gap-3">
                    {index === 0 && <HardHat className="h-6 w-6 text-red-600" />}
                    {index === 1 && <Leaf className="h-6 w-6 text-green-600" />}
                    {index === 2 && <Users className="h-6 w-6 text-blue-600" />}
                    {index === 3 && <Award className="h-6 w-6 text-teal-600" />}
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">HSE Performance</h2>
          <p className="text-xl text-gray-600">Our commitment measured in results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { metric: "0", label: "Lost Time Injuries", sublabel: "2024 YTD", icon: <Shield className="h-6 w-6" /> },
            { metric: "1000+", label: "Safety Training Hours", sublabel: "Per Quarter", icon: <Users className="h-6 w-6" /> },
            { metric: "98%", label: "Waste Recycling Rate", sublabel: "2024 Average", icon: <Globe className="h-6 w-6" /> },
            { metric: "5+", label: "ISO Certifications", sublabel: "Maintained", icon: <Award className="h-6 w-6" /> }
          ].map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    {kpi.icon}
                  </div>
                  <div className="text-3xl font-bold text-navy-800 mb-2">{kpi.metric}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{kpi.label}</div>
                  <div className="text-sm text-gray-600">{kpi.sublabel}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {hse.certifications?.length ? (
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">Internationally recognized quality and safety management systems</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {hse.certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-800">{cert}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ) : null}

      {/* Sustainability Initiatives */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Sustainability Initiatives</h2>
          <p className="text-xl text-gray-600">Driving positive environmental and social impact</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="h-8 w-8" />,
              title: "Carbon Footprint Reduction",
              items: [
                "Fuel-efficient equipment fleet",
                "Route optimization systems", 
                "Renewable energy adoption",
                "Emissions monitoring & reporting"
              ]
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Community Development",
              items: [
                "Local employment programs",
                "Skills training initiatives",
                "Educational partnerships",
                "Healthcare support programs"
              ]
            },
            {
              icon: <Factory className="h-8 w-8" />,
              title: "Waste Management",
              items: [
                "Zero waste to landfill target",
                "Circular economy practices",
                "Material recovery programs",
                "Hazardous waste protocols"
              ]
            }
          ].map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-navy-800 flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      {initiative.icon}
                    </div>
                    {initiative.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {initiative.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}