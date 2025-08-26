import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Fuel, Building, Wrench, Droplets, Zap, ShoppingCart, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Fuel,
    title: 'Petroleum & Logistics',
    description: 'Comprehensive bulk fuel supply and distribution services across Kenya and East Africa.',
    features: ['Diesel (AGO)', 'Petrol (PMS)', 'Heavy Fuel Oil (HFO)', 'LPG & Jet Fuel', 'Bitumen'],
    href: '/services/petroleum'
  },
  {
    icon: Building,
    title: 'Infrastructure Development',
    description: 'Complete infrastructure solutions from planning to execution and maintenance.',
    features: ['Civil Engineering', 'Building Construction', 'Power Infrastructure', 'Water & Sanitation', 'Project Management'],
    href: '/services/infrastructure'
  },
  {
    icon: Wrench,
    title: 'Equipment Hire',
    description: 'Modern fleet of construction equipment with professional operators and support.',
    features: ['Excavators & Dozers', 'Cranes & Graders', 'Transport Vehicles', 'Specialized Equipment', 'Maintenance Support'],
    href: '/equipment-hire'
  },
  {
    icon: Droplets,
    title: 'Lubricants',
    description: 'High-quality automotive and industrial lubricants for all applications.',
    features: ['Automotive Oils', 'Industrial Lubricants', 'Specialty Products', 'Quality Assurance', 'Technical Support'],
    href: '/services/lubricants'
  },
  {
    icon: Zap,
    title: 'Chemicals',
    description: 'Commodity chemicals including polymers, solvents, and fertilizers.',
    features: ['Polymers', 'Solvents', 'Fertilizers', 'Safety Compliance', 'Reliable Supply'],
    href: '/services/chemicals'
  },
  {
    icon: ShoppingCart,
    title: 'Retail Solutions',
    description: 'Modern fuel station design, development, and rollout solutions.',
    features: ['Station Design', 'Development Services', 'Turnkey Solutions', 'Branding Support', 'Ongoing Support'],
    href: '/services/retail'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive solutions across petroleum, infrastructure, and equipment services 
              tailored to meet your business needs across Kenya and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 group-hover:bg-teal-200 transition-colors">
                      <service.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl text-navy-800">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 bg-teal-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-teal-50" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your specific requirements and learn how we can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+254722517923">
                Call +254 722 517923
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
