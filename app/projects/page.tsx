'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign,
  Clock,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Building,
  Road,
  Zap,
  Droplets,
  Fuel,
  Award,
  TrendingUp,
  Target,
  Eye,
  Play,
  Image as ImageIcon
} from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils'

// Project data
const projects = [
  {
    id: "nakuru-fuel-hub",
    title: "Nakuru Fuel Distribution Hub",
    category: "Petroleum Infrastructure",
    sector: "Energy",
    status: "completed",
    location: "Nakuru, Kenya",
    client: "Kenya Pipeline Company",
    value: 200000000, // KES 200M
    duration: "8 months",
    completedDate: "2023-12-15",
    featured: true,
    description: "State-of-the-art fuel storage and distribution facility serving Central Kenya region with 5 million liter capacity and advanced safety systems.",
    overview: "This flagship project involved the construction of a modern fuel distribution hub strategically located in Nakuru to serve the Central Kenya region. The facility features advanced storage systems, automated loading bays, and comprehensive safety protocols.",
    images: [
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565883909451-ad88c2bcae13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      storage_capacity: "5M Liters",
      loading_bays: "8 Bays",
      jobs_created: "45 Jobs",
      safety_incidents: "Zero Incidents"
    },
    challenges: [
      "Complex environmental compliance requirements",
      "Integration with existing pipeline infrastructure",
      "Tight construction timeline during rainy season"
    ],
    solutions: [
      "Advanced environmental monitoring systems",
      "Phased construction approach with minimal disruption",
      "Weather-resistant construction techniques and materials"
    ],
    impact: [
      "Reduced fuel transportation costs by 15% in Central Kenya",
      "Created 45 permanent jobs and 200 temporary construction jobs",
      "Improved fuel supply reliability for 500,000+ residents"
    ],
    testimonial: {
      text: "Loop Energy delivered exceptional work on schedule and within budget. Their attention to safety and quality is outstanding.",
      author: "James Mwangi",
      position: "Project Manager, Kenya Pipeline Company"
    }
  },
  {
    id: "trans-african-highway",
    title: "Trans-African Highway Section",
    category: "Civil Engineering",
    sector: "Infrastructure",
    status: "completed",
    location: "Nairobi-Nakuru Corridor",
    client: "Kenya Urban Roads Authority",
    value: 850000000, // KES 850M
    duration: "18 months",
    completedDate: "2024-03-20",
    featured: true,
    description: "25km highway construction with advanced drainage systems and safety features connecting major trade routes between Nairobi and Nakuru.",
    overview: "Major highway infrastructure project involving the construction of 25 kilometers of dual carriageway with modern safety features, advanced drainage systems, and sustainable construction practices.",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      length: "25 KM",
      lanes: "4 Lanes",
      bridges: "3 Bridges",
      drainage: "15km System"
    },
    challenges: [
      "Challenging terrain with steep gradients",
      "Environmental impact mitigation",
      "Traffic management during construction"
    ],
    solutions: [
      "Advanced earthworks and slope stabilization",
      "Comprehensive environmental management plan",
      "Phased construction with temporary diversions"
    ],
    impact: [
      "Reduced travel time between Nairobi and Nakuru by 30%",
      "Improved road safety with modern design standards",
      "Enhanced trade connectivity for East Africa"
    ],
    testimonial: {
      text: "The quality of construction and project management exceeded our expectations. A model for future highway projects.",
      author: "Eng. Sarah Kimani",
      position: "Chief Engineer, KURA"
    }
  },
  {
    id: "solar-power-installation",
    title: "Renewable Energy Solar Farm",
    category: "Energy Solutions",
    sector: "Power",
    status: "completed",
    location: "Kajiado County",
    client: "Kenya Power & Lighting Company",
    value: 1200000000, // KES 1.2B
    duration: "14 months",
    completedDate: "2024-01-10",
    featured: true,
    description: "50MW solar farm providing clean energy to rural communities with grid-tie capabilities and energy storage systems.",
    overview: "Large-scale renewable energy project featuring 50MW solar photovoltaic installation with advanced energy storage and grid integration systems to provide clean power to rural communities.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497436072909-f5e4be562892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      capacity: "50 MW",
      panels: "150,000 Panels",
      households: "50,000 Homes",
      co2_reduction: "75,000 tons/year"
    },
    challenges: [
      "Remote location with limited infrastructure access",
      "Grid integration complexity",
      "Local community engagement and land acquisition"
    ],
    solutions: [
      "Temporary access roads and on-site accommodation",
      "Advanced grid-tie inverters and monitoring systems",
      "Community partnership program with local benefits"
    ],
    impact: [
      "Powers 50,000 rural households with clean energy",
      "Reduces CO2 emissions by 75,000 tons annually",
      "Created 300 construction jobs and 25 permanent positions"
    ],
    testimonial: {
      text: "Loop Energy's expertise in renewable energy infrastructure is impressive. Project delivered on time with excellent quality.",
      author: "Dr. Peter Nduati",
      position: "Renewable Energy Director, KPLC"
    }
  },
  {
    id: "water-treatment-plant",
    title: "Municipal Water Treatment Facility",
    category: "Water & Sanitation",
    sector: "Infrastructure",
    status: "ongoing",
    location: "Eldoret, Kenya",
    client: "Eldoret Water & Sanitation Company",
    value: 450000000, // KES 450M
    duration: "12 months",
    completedDate: "2024-08-15",
    featured: false,
    description: "Advanced water treatment plant serving 100,000+ residents with modern filtration and quality monitoring systems.",
    overview: "Comprehensive water treatment facility featuring advanced filtration, chemical treatment, and automated monitoring systems to provide safe drinking water to Eldoret residents.",
    images: [
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      capacity: "50,000 m³/day",
      population: "100,000 People",
      quality: "WHO Standards",
      efficiency: "95% Treatment"
    },
    challenges: [
      "Variable raw water quality",
      "24/7 operational requirements",
      "Stringent water quality standards"
    ],
    solutions: [
      "Multi-stage filtration and treatment systems",
      "Automated monitoring and control systems",
      "Redundant equipment and backup power systems"
    ],
    impact: [
      "Provides safe drinking water to 100,000+ residents",
      "Reduces waterborne diseases by 80%",
      "Creates 35 permanent employment opportunities"
    ],
    testimonial: {
      text: "The technical expertise and project management skills demonstrated are exceptional. A transformative project for our community.",
      author: "Eng. Mary Cherop",
      position: "General Manager, EWASCO"
    }
  },
  {
    id: "commercial-building",
    title: "Modern Office Complex",
    category: "Building Construction",
    sector: "Commercial",
    status: "completed",
    location: "Westlands, Nairobi",
    client: "Westlands Properties Ltd",
    value: 650000000, // KES 650M
    duration: "16 months",
    completedDate: "2023-09-30",
    featured: false,
    description: "15-story modern office complex with sustainable design features and advanced building management systems.",
    overview: "Contemporary commercial building featuring sustainable design, energy-efficient systems, and modern amenities for corporate tenants in Nairobi's premium business district.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      floors: "15 Floors",
      area: "25,000 m²",
      parking: "200 Spaces",
      tenants: "50 Companies"
    },
    challenges: [
      "Tight urban construction site",
      "High-end finish requirements",
      "Sustainable building certification goals"
    ],
    solutions: [
      "Efficient site management and material logistics",
      "Premium materials and skilled craftsmen",
      "Green building technologies and systems"
    ],
    impact: [
      "Houses 50+ companies and 2,000+ employees",
      "Achieves 40% energy savings through green design",
      "Sets new standard for commercial construction in Nairobi"
    ],
    testimonial: {
      text: "Outstanding construction quality and project delivery. The building exceeds all our expectations for design and functionality.",
      author: "Robert Macharia",
      position: "Managing Director, Westlands Properties"
    }
  },
  {
    id: "bridge-construction",
    title: "Nyando River Bridge",
    category: "Civil Engineering",
    sector: "Infrastructure", 
    status: "planned",
    location: "Kisumu County",
    client: "Ministry of Transport",
    value: 320000000, // KES 320M
    duration: "10 months",
    completedDate: "2024-12-01",
    featured: false,
    description: "Strategic bridge construction to improve connectivity and reduce flooding risks for local communities.",
    overview: "Critical infrastructure project to construct a modern bridge over Nyando River, improving regional connectivity while incorporating flood mitigation measures.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    metrics: {
      length: "180 Meters",
      width: "12 Meters",
      load_capacity: "60 Tonnes",
      communities: "10 Villages"
    },
    challenges: [
      "Seasonal flooding and high water levels",
      "Remote location with limited access",
      "Environmental impact on river ecosystem"
    ],
    solutions: [
      "Elevated bridge design with flood clearance",
      "Temporary access roads and equipment transport",
      "Environmental management and restoration plan"
    ],
    impact: [
      "Connects 10+ villages year-round",
      "Reduces flood risks for 5,000+ residents", 
      "Improves access to markets and healthcare"
    ],
    testimonial: null
  }
]

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
const sectors = ['All', ...Array.from(new Set(projects.map(p => p.sector)))]
const statuses = ['All', 'completed', 'ongoing', 'planned']

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSector, setSelectedSector] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Filter projects
  useEffect(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesSector = selectedSector === 'All' || project.sector === selectedSector
      const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus
      
      return matchesSearch && matchesCategory && matchesSector && matchesStatus
    })

    // Sort by completion date (most recent first)
    filtered.sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())

    setFilteredProjects(filtered)
  }, [searchTerm, selectedCategory, selectedSector, selectedStatus])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'ongoing': return 'bg-blue-100 text-blue-800'  
      case 'planned': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'ongoing': return <Clock className="h-4 w-4" />
      case 'planned': return <Calendar className="h-4 w-4" />
      default: return null
    }
  }

  const getCategoryIcon = (_category: string) => {
    // Use a safe, always-available icon to avoid runtime issues with missing icons
    return <Building className="h-5 w-5" />
  }

  // Calculate total portfolio value
  const totalValue = projects.reduce((sum, project) => sum + project.value, 0)
  const completedProjects = projects.filter(p => p.status === 'completed').length

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-gray-200 mb-8">
                Showcasing our expertise across diverse sectors and challenging environments. 
                From petroleum infrastructure to renewable energy, we deliver excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-teal-600">{projects.length}</div>
              <div className="text-gray-600 font-medium">Total Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-teal-600">{completedProjects}</div>
              <div className="text-gray-600 font-medium">Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-teal-600">{formatCurrency(totalValue / 1000000000, '')}B</div>
              <div className="text-gray-600 font-medium">Portfolio Value</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-teal-600">5</div>
              <div className="text-gray-600 font-medium">Sectors</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search projects by name, location, or description..."
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

            {/* Sector Filter */}
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>Sector: {sector}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent capitalize"
            >
              {statuses.map(status => (
                <option key={status} value={status} className="capitalize">
                  Status: {status === 'All' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No projects match your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedSector('All')
                  setSelectedStatus('All')
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-navy-800 mb-4">Featured Projects</h2>
                <p className="text-gray-600">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group" 
                            onClick={() => setSelectedProject(project)}>
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          
                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                              {getStatusIcon(project.status)}
                              <span className="capitalize">{project.status}</span>
                            </span>
                          </div>

                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                <Award className="h-3 w-3" />
                                <span>Featured</span>
                              </span>
                            </div>
                          )}

                          {/* View Details Overlay */}
                          <div className="absolute inset-0 bg-navy-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>

                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {getCategoryIcon(project.category)}
                              <span className="text-sm text-teal-600 font-medium">{project.category}</span>
                            </div>
                            <span className="text-sm text-gray-500">{project.sector}</span>
                          </div>
                          <CardTitle className="text-xl font-bold text-navy-800 group-hover:text-teal-600 transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent>
                          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                          {/* Project Info */}
                          <div className="space-y-2 mb-4 text-sm">
                            <div className="flex items-center text-gray-500">
                              <MapPin className="h-4 w-4 mr-2" />
                              {project.location}
                            </div>
                            <div className="flex items-center text-gray-500">
                              <Calendar className="h-4 w-4 mr-2" />
                              {project.duration}
                            </div>
                            <div className="flex items-center text-gray-500">
                              <DollarSign className="h-4 w-4 mr-2" />
                              {formatCurrency(project.value)}
                            </div>
                          </div>

                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="text-center bg-gray-50 rounded p-2">
                                <div className="text-lg font-bold text-teal-600">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                              </div>
                            ))}
                          </div>

                          {/* Client */}
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-gray-500">Client</div>
                              <div className="font-medium">{project.client}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(selectedProject.category)}
                      <span className="text-sm text-teal-600 font-medium">{selectedProject.category}</span>
                      <span className="text-sm text-gray-500">{selectedProject.sector}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-800">{selectedProject.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {selectedProject.location}</div>
                      <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {selectedProject.duration}</div>
                      <div className="flex items-center"><DollarSign className="h-4 w-4 mr-1" /> {formatCurrency(selectedProject.value)}</div>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>Close</Button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.images.map((src, idx) => (
                      <img key={idx} src={src} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-40 object-cover rounded" />
                    ))}
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-navy-800 mb-2">Overview</h4>
                  <p className="text-gray-700">{selectedProject.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-navy-800 mb-2">Key Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded p-3 text-center">
                        <div className="text-teal-600 font-bold">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-2">Impact</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {selectedProject.impact.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-2">Challenges</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {selectedProject.challenges.map((c, i) => (<li key={i}>{c}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-2">Solutions</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      {selectedProject.solutions.map((s, i) => (<li key={i}>{s}</li>))}
                    </ul>
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="bg-gray-50 rounded p-4">
                    <p className="italic text-gray-700">"{selectedProject.testimonial.text}"</p>
                    <div className="mt-2 text-sm text-gray-600">- {selectedProject.testimonial.author}, {selectedProject.testimonial.position}</div>
                  </div>
                )}
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-end">
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}