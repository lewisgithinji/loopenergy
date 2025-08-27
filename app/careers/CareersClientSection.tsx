'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Shield, 
  Award, 
  Clock, 
  Mail, 
  MapPin, 
  Briefcase,
  TrendingUp,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";
import { careers } from "@/lib/content";

export default function CareersClientSection() {
  return (
    <>
      {/* Intro */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-3"
        >
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Why Join Loop Energy?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{careers.intro}</p>
          </div>
          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-navy-800 mb-4">At a Glance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-teal-600" /> 
                  <span className="font-medium">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3 h-5 w-5 text-teal-600" /> 
                  <span className="font-medium">200+ team members</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-3 h-5 w-5 text-teal-600" /> 
                  <span className="font-medium">Safety-first culture</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-3 h-5 w-5 text-teal-600" /> 
                  <span className="font-medium">Equal opportunity employer</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-teal-600" /> 
                  <span className="font-medium">Growing company</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">What Makes Us Different</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just building infrastructure - we're building careers and communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Target className="h-8 w-8" />,
              title: "Meaningful Work",
              description: "Work on critical infrastructure projects that power Kenya's growth and development"
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Career Growth",
              description: "Clear advancement paths with mentorship, training, and professional development opportunities"
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: "Work-Life Balance",
              description: "Project-aware flexibility with balanced schedules and time for what matters most"
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Safety First",
              description: "World-class safety standards with comprehensive PPE and zero-harm culture"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      {careers.benefits?.length ? (
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits that support your career and well-being</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {careers.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      ) : null}

      {/* Hiring Process & Culture */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-teal-600" />
                  Hiring Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  "Apply with your CV and brief cover note",
                  "Initial screening call",
                  "Technical/functional interview", 
                  "Culture fit + leadership chat",
                  "Offer and onboarding"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-800 flex items-center gap-3">
                  <Heart className="h-6 w-6 text-teal-600" />
                  Our Culture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-5 w-5 text-teal-600 flex-shrink-0" /> 
                  <p className="text-gray-700">Zero-harm mindset and continuous HSE improvement</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-teal-600 flex-shrink-0" /> 
                  <p className="text-gray-700">Collaboration and mentorship across disciplines</p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-teal-600 flex-shrink-0" /> 
                  <p className="text-gray-700">Pride in quality and accountability</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-teal-600 flex-shrink-0" /> 
                  <p className="text-gray-700">Flexible by project needs; balanced schedules</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-800 mb-4">Current Openings</h2>
          <p className="text-xl text-gray-600">Join our team and make an impact from day one</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {careers.roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-navy-800 mb-2">
                    {role.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="inline-flex items-center gap-1 text-gray-600">
                      <MapPin className="h-4 w-4 text-teal-600" /> 
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-gray-600">
                      <Briefcase className="h-4 w-4 text-teal-600" /> 
                      {role.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">{role.summary}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-teal-600 hover:bg-teal-700 flex-1" asChild>
                      <a href={`mailto:${role.applyTo}?subject=Application: ${encodeURIComponent(role.title)}`}>
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={`mailto:${role.applyTo}?subject=Question about: ${encodeURIComponent(role.title)}`}>
                        <Mail className="mr-2 h-4 w-4" /> 
                        Ask Questions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}