'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, Building, Users, Award, Heart } from 'lucide-react'
import type { NewsItem } from '@/lib/content'

interface NewsClientSectionProps {
  items: NewsItem[]
}

export default function NewsClientSection({ items }: NewsClientSectionProps) {
  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('contract') || title.toLowerCase().includes('infrastructure')) {
      return <Building className="h-5 w-5" />
    }
    if (title.toLowerCase().includes('fleet') || title.toLowerCase().includes('equipment')) {
      return <Building className="h-5 w-5" />
    }
    if (title.toLowerCase().includes('iso') || title.toLowerCase().includes('certification')) {
      return <Award className="h-5 w-5" />
    }
    if (title.toLowerCase().includes('community') || title.toLowerCase().includes('youth')) {
      return <Heart className="h-5 w-5" />
    }
    return <Building className="h-5 w-5" />
  }

  const getCategoryColor = (title: string) => {
    if (title.toLowerCase().includes('contract') || title.toLowerCase().includes('infrastructure')) {
      return 'bg-blue-100 text-blue-800'
    }
    if (title.toLowerCase().includes('fleet') || title.toLowerCase().includes('equipment')) {
      return 'bg-teal-100 text-teal-800'
    }
    if (title.toLowerCase().includes('iso') || title.toLowerCase().includes('certification')) {
      return 'bg-green-100 text-green-800'
    }
    if (title.toLowerCase().includes('community') || title.toLowerCase().includes('youth')) {
      return 'bg-purple-100 text-purple-800'
    }
    return 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      readable: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      relative: getRelativeTime(date)
    }
  }

  const getRelativeTime = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
    return `${Math.floor(diffInSeconds / 31536000)} years ago`
  }

  // Feature the first article as hero
  const [featuredArticle, ...remainingArticles] = items

  return (
    <>
      {/* Featured Article */}
      {featuredArticle && (
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Featured News</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest developments and achievements</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                        {getCategoryIcon(featuredArticle.title)}
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticle.title)}`}>
                        Featured Story
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{formatDate(featuredArticle.date).readable}</span>
                    <Clock className="h-4 w-4 text-gray-500 ml-4" />
                    <span className="text-sm text-gray-600">{formatDate(featuredArticle.date).relative}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {featuredArticle.summary}
                  </p>
                  
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Recent Articles Grid */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Recent News</h2>
          <p className="text-xl text-gray-600">Latest updates from our operations and community impact</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="text-center z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-teal-600 mb-2">
                      {getCategoryIcon(article.title)}
                    </div>
                  </div>
                  <div className={`absolute top-4 left-4 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.title)}`}>
                    News
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-3 w-3 text-gray-500" />
                    <span className="text-xs text-gray-600">{formatDate(article.date).readable}</span>
                  </div>
                  <CardTitle className="text-lg text-navy-800 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-navy-800 mb-4">
              Stay Updated with Loop Energy
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest news, project updates, and industry insights delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Users className="mr-2 h-5 w-5" />
                Follow Our Projects
              </Button>
              <Button size="lg" variant="outline">
                Contact Media Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}