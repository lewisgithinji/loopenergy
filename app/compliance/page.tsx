'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Award, FileCheck, Scale, Lock, Users, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react'
import { site, hse } from '@/lib/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Compliance & Certifications',
    description: 'Loop Energy Limited\'s commitment to regulatory compliance, industry standards, and ethical business practices. Learn about our certifications, policies, and regulatory adherence.',
    keywords: ['compliance', 'certifications', 'regulatory compliance', 'ISO standards', 'AML policy', 'KYC procedures', 'business ethics'],
    openGraph: {
        title: 'Compliance & Certifications | Loop Energy Limited',
        description: 'Our commitment to regulatory compliance, industry standards, and ethical business practices.',
        type: 'website',
    },
}

export default function CompliancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="py-16 bg-navy-950 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Shield className="h-16 w-16 text-loop-orange-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance & Certifications</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Committed to the highest standards of regulatory compliance, ethical business practices,
                        and industry excellence since 2014
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <p className="text-lg text-gray-700">
                                At Loop Energy Limited, we maintain the highest standards of compliance, transparency, and ethical conduct.
                                As an international commodity trading company operating across Kenya, UAE, and Europe, we adhere to multiple
                                regulatory frameworks and industry best practices to ensure trust, security, and excellence in all our operations.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Company Registration */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Company Registration & Legal Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center text-navy-800">
                                    <FileCheck className="h-6 w-6 text-loop-orange-600 mr-3" />
                                    Kenya Registration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Registered Company:</strong> Loop Energy Limited</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Incorporation Year:</strong> 2018</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Jurisdiction:</strong> Republic of Kenya</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Status:</strong> Registered taxpayer with Kenya Revenue Authority</span>
                                    </li>
                                </ul>
                                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600">
                                    <p className="text-sm text-gray-700">
                                        <Lock className="inline h-4 w-4 mr-1" />
                                        <strong>Registration verification:</strong> Available upon request for due diligence purposes
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center text-navy-800">
                                    <FileCheck className="h-6 w-6 text-loop-orange-600 mr-3" />
                                    UAE Registration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Location:</strong> Business Center, Al Shmookh Bldg., UAQ Free Trade Zone</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Jurisdiction:</strong> Umm Al Quwain, United Arab Emirates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Status:</strong> Licensed to operate in UAE Free Trade Zone</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span><strong>Operations:</strong> International trading and logistics coordination</span>
                                    </li>
                                </ul>
                                <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600">
                                    <p className="text-sm text-gray-700">
                                        <Lock className="inline h-4 w-4 mr-1" />
                                        <strong>License details:</strong> Available for verification during contract negotiations
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Industry Standards & Certifications */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Industry Standards & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {hse.certifications.map((cert) => (
                            <Card key={cert} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <Award className="h-16 w-16 text-loop-orange-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-navy-800 mb-2">{cert}</h3>
                                    <p className="text-sm text-gray-600">
                                        {cert.includes('9001') && 'Quality Management System'}
                                        {cert.includes('14001') && 'Environmental Management System'}
                                        {cert.includes('45001') && 'Occupational Health & Safety'}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* HSE Commitments */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Health, Safety & Environmental Commitments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {hse.pillars.map((pillar, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-navy-800 flex items-center">
                                        <Shield className="h-6 w-6 text-loop-orange-600 mr-3" />
                                        {pillar.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">{pillar.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Regulatory Compliance */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Regulatory Compliance</h2>
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-navy-800 mb-3 flex items-center">
                                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                                        Energy & Petroleum Regulatory Authority (EPRA) - Kenya
                                    </h3>
                                    <p className="text-gray-700">
                                        Loop Energy Limited operates in compliance with the Energy and Petroleum Regulatory Authority (EPRA)
                                        regulations governing petroleum product trading in Kenya. Our operations adhere to EPRA standards for
                                        quality, safety, and environmental protection.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-navy-800 mb-3 flex items-center">
                                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                                        International Trade Regulations
                                    </h3>
                                    <p className="text-gray-700 mb-3">
                                        We comply with international trade regulations including:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>INCOTERMS 2020 standards for international commercial terms</li>
                                        <li>International Chamber of Commerce (ICC) guidelines</li>
                                        <li>Customs and import/export regulations across Africa, UAE, and Europe</li>
                                        <li>International sanctions and trade embargo compliance (OFAC, UN, EU)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-navy-800 mb-3 flex items-center">
                                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                                        Data Protection & Privacy
                                    </h3>
                                    <p className="text-gray-700">
                                        We comply with the <strong>Kenya Data Protection Act 2019</strong> and <strong>General Data Protection Regulation (GDPR)</strong> for
                                        European clients. Learn more in our{' '}
                                        <Link href="/privacy" className="text-loop-orange-600 hover:underline font-semibold">
                                            Privacy Policy
                                        </Link>.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AML/KYC Policies */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Anti-Money Laundering (AML) & Know Your Customer (KYC)</h2>
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <p className="text-gray-700 mb-6">
                                Loop Energy Limited maintains strict AML/KYC procedures in compliance with international financial regulations
                                and Kenya's Proceeds of Crime and Anti-Money Laundering Act (POCAMLA).
                            </p>

                            <h3 className="font-semibold text-navy-800 mb-4">Our KYC Requirements for New Clients:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {[
                                    'Company registration documents',
                                    'Business licenses and permits',
                                    'Financial statements (for credit assessment)',
                                    'Proof of identity for authorized signatories',
                                    'Bank reference letters',
                                    'Trade references from existing suppliers/clients',
                                    'Ultimate Beneficial Ownership (UBO) disclosure',
                                    'Sanctions screening confirmation',
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                                <p className="text-gray-800">
                                    <AlertCircle className="inline h-5 w-5 text-yellow-600 mr-2" />
                                    <strong>Client Due Diligence:</strong> We reserve the right to conduct enhanced due diligence for high-value
                                    transactions or clients in high-risk jurisdictions.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Responsible Sourcing */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Responsible Sourcing & Ethics</h2>
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <p className="text-gray-700 mb-6">
                                We are committed to ethical and responsible sourcing practices across our commodity portfolio.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-navy-800 mb-3 flex items-center">
                                        <Users className="h-5 w-5 text-loop-orange-600 mr-2" />
                                        Conflict-Free Minerals
                                    </h3>
                                    <p className="text-gray-700">
                                        We ensure that precious metals and minerals sourced from African regions comply with the OECD Due Diligence
                                        Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-navy-800 mb-3 flex items-center">
                                        <Shield className="h-5 w-5 text-loop-orange-600 mr-2" />
                                        Human Rights & Labor Standards
                                    </h3>
                                    <p className="text-gray-700">
                                        We conduct business in accordance with the UN Guiding Principles on Business and Human Rights and do not
                                        engage with suppliers involved in forced labor, child labor, or human trafficking.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-navy-800 mb-3 flex items-center">
                                        <Scale className="h-5 w-5 text-loop-orange-600 mr-2" />
                                        Anti-Corruption & Bribery
                                    </h3>
                                    <p className="text-gray-700">
                                        We maintain a zero-tolerance policy toward bribery and corruption in line with the UK Bribery Act 2010
                                        and Kenya's Anti-Corruption and Economic Crimes Act.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Professional Memberships */}
                    <h2 className="text-3xl font-bold text-navy-800 mb-8">Professional Memberships & Associations</h2>
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <p className="text-gray-700 mb-6">
                                Loop Energy Limited actively participates in industry associations and professional networks to stay informed
                                of best practices and regulatory developments.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Kenya Association of Manufacturers (KAM)</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Federation of Kenyan Employers (FKE)</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">International Chamber of Commerce (ICC)</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-5 w-5 text-loop-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">Dubai Chamber of Commerce</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact for Compliance */}
                    <Card className="bg-gradient-to-br from-navy-50 to-loop-orange-50">
                        <CardHeader>
                            <CardTitle className="text-navy-800">Compliance Inquiries</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-6">
                                For questions about our compliance policies, certifications, or to request verification documentation
                                for due diligence purposes, please contact us:
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-loop-orange-600 mt-1" />
                                    <div>
                                        <div className="font-semibold text-navy-800">Email</div>
                                        <a href={`mailto:${site.contacts.email}`} className="text-loop-orange-600 hover:underline">
                                            {site.contacts.email}
                                        </a>
                                        <p className="text-sm text-gray-600 mt-1">Subject: "Compliance Inquiry"</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-loop-orange-600 mt-1" />
                                    <div>
                                        <div className="font-semibold text-navy-800">Phone</div>
                                        <a href={`tel:${site.contacts.phone}`} className="text-loop-orange-600 hover:underline">
                                            {site.contacts.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-loop-orange-600 mt-1" />
                                    <div>
                                        <div className="font-semibold text-navy-800">Nairobi Office</div>
                                        <p className="text-gray-700">{site.contacts.locations.kenya.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600">
                                    <strong>Verification documents:</strong> Company registration, licenses, and certifications are available
                                    to verified business partners and clients during contractual negotiations. Please allow 2-3 business days
                                    for document preparation.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
