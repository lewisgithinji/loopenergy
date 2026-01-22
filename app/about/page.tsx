import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Globe, Target, CheckCircle, Users, Award, Shield, Building } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Loop Energy Limited - International commodity trading company founded in 2014. Specializing in petroleum products, precious metals, and minerals across Africa, UAE, and Europe.',
  keywords: [
    'Loop Energy Limited',
    'about us',
    'commodity trading company',
    'international trading',
    'Dubai operations',
    'Kenya operations',
    'petroleum trading',
    'precious metals',
    'company history'
  ],
  openGraph: {
    title: 'About Loop Energy Limited',
    description: 'Founded in 2014, Loop Energy Limited is a dynamic trading company operating from Dubai and Kenya, serving global markets across Africa, UAE, and Europe.',
    type: 'website',
  },
}

const stats = [
  { number: '2014', label: 'Founded' },
  { number: '3', label: 'Global Markets' },
  { number: '10+', label: 'Years Experience' },
  { number: '100+', label: 'Strategic Partners' },
]

const coreValues = [
  'Integrity and Transparency',
  'Expertise and Innovation',
  'Reliability and Results-Driven Service',
  'Strategic Collaboration',
  'Excellence and Accountability'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.png"
            alt="About Loop Energy"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-loop-orange-400">Loop Energy Limited</span>
            </h1>
            <p className="text-xl text-gray-200">
              A dynamic trading company founded in 2014 and incorporated in 2018,
              operating from Dubai and Kenya to serve global markets across Africa, UAE, and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Established in 2014 and incorporated in 2018, Loop Energy Limited is a trading company
                  with operations in Dubai and Kenya. We are renowned for our proficiency in managing
                  a wide-ranging portfolio of high-quality refined petroleum products, by-products,
                  precious metals, and minerals.
                </p>
                <p>
                  Founded and led by seasoned industry professionals with extensive market knowledge,
                  we are dedicated to offering efficient, reliable, and value-driven solutions to our
                  global clientele.
                </p>
                <p>
                  Our team combines the wisdom of veteran experts with the innovative perspectives of
                  skilled professionals to deliver dependable, effective, transparent, and forward-thinking services.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-loop-orange-50 to-navy-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Company Timeline</h3>
              <div className="space-y-4">
                {[
                  { year: '2014', note: 'Company founded in Dubai and Kenya' },
                  { year: '2018', note: 'Official incorporation as Loop Energy Limited' },
                  { year: '2020-2022', note: 'Expansion across Africa, UAE, and Europe' },
                  { year: '2023-Present', note: 'Strategic partnerships and market leadership' },
                ].map((i) => (
                  <div key={i.year} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-loop-orange-600 rounded-full" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">{i.year}</div>
                      <div className="text-foreground/70">{i.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Strategy */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-loop-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-navy-800">Our Vision</h3>
                </div>
                <p className="text-lg text-foreground/80">
                  To be the premier partner in energy and precious metals, using innovation to elevate
                  industry standards for quality, reliability, and transparency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-loop-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-navy-800">Our Strategy</h3>
                </div>
                <p className="text-lg text-foreground/80">
                  Built on four core pillars: operational excellence, market differentiation,
                  client relationship management, and comprehensive risk management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategy Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Strategic Pillars</h2>
            <p className="text-xl text-foreground/70">The foundation of our business approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Operational Excellence',
                description: 'Leveraging technology and strategic partnerships for efficient, cost-effective supply chains'
              },
              {
                icon: Users,
                title: 'Market Differentiation',
                description: 'Combining diverse portfolio with blended expertise to deliver customized solutions'
              },
              {
                icon: Building,
                title: 'Client Relationships',
                description: 'Transparent communication and tailored services for long-term partnerships'
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Stringent credit vetting and regulatory compliance for market stability'
              }
            ].map((pillar) => (
              <Card key={pillar.title} className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <pillar.icon className="h-12 w-12 text-loop-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-800 mb-4">{pillar.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Core Values</h2>
            <p className="text-xl text-foreground/70">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={value} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-loop-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{value}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
            <p className="text-xl text-gray-300">Strategic operations across key international markets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                region: 'Africa',
                description: 'Strategic partnerships with mines and producers',
                focus: 'Minerals and precious metals sourcing'
              },
              {
                region: 'UAE',
                description: 'Dubai headquarters and Gulf operations',
                focus: 'International trading and logistics'
              },
              {
                region: 'Europe',
                description: 'Market access and distribution networks',
                focus: 'Refined petroleum products'
              }
            ].map((region) => (
              <Card key={region.region} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">{region.region}</h3>
                  <p className="text-gray-300 text-sm mb-2">{region.description}</p>
                  <p className="text-loop-orange-400 text-sm font-medium">{region.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-loop-orange-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}