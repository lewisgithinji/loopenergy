import { Card, CardContent } from '@/components/ui/card'
import { Globe, Target, CheckCircle } from 'lucide-react'

const stats = [
  { number: '70+', label: 'Permanent Staff' },
  { number: '400+', label: 'Community Workers' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Major Projects' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
              About Loop Energy
            </h1>
            <p className="text-xl text-gray-200">
              Founded in 2013 and incorporated in 2018, Loop Energy Limited has grown to become
              a trusted partner in petroleum, infrastructure, and energy solutions across Kenya and East Africa.
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
                  Loop Energy Limited began its journey in 2013 as an independent reseller
                  for bulk petroleum products, recognizing the growing demand for reliable
                  energy solutions across Kenya.
                </p>
                <p>
                  Officially incorporated in 2018, we have expanded our operations to include
                  infrastructure development, construction services, and equipment hire,
                  establishing ourselves as a comprehensive solution provider.
                </p>
                <p>
                  Today, we operate primarily in Kenya with exciting prospects for expansion
                  across Eastern and Central Africa, driven by our commitment to excellence
                  and sustainable development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Timeline</h3>
              <div className="space-y-4">
                {[
                  { year: '2013', note: 'Company founded' },
                  { year: '2018', note: 'Official incorporation' },
                  { year: '2020-2023', note: 'Expansion into infrastructure' },
                  { year: '2024-Present', note: 'Regional expansion plans' },
                ].map((i) => (
                  <div key={i.year} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-teal-600 rounded-full" aria-hidden="true" />
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

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-navy-800">Our Vision</h3>
                </div>
                <p className="text-lg text-foreground/80">
                  To be the pre-eminent bulk fuel supplier and infrastructure developer in Kenya and beyond.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-2xl font-bold text-navy-800">Our Mission</h3>
                </div>
                <p className="text-lg text-foreground/80">
                  To create unprecedented value for our clients, employees, and shareholders
                  through innovative solutions and exceptional service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Core Values</h2>
            <p className="text-xl text-foreground/70">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Performance', 'Accountability', 'Integrity', 'Dependability'].map((value) => (
              <Card key={value} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{value}</h3>
                  <p className="text-foreground/70 text-sm">
                    Committed to excellence in {value.toLowerCase()} across all our operations and relationships.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
