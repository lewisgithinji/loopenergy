import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, Users, FileText, Mail, Phone, MapPin } from 'lucide-react'
import { site } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Loop Energy Limited. Learn how we collect, use, and protect your personal information in compliance with Kenya Data Protection Act 2019 and GDPR.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'Kenya Data Protection Act', 'personal information'],
    openGraph: {
        title: 'Privacy Policy | Loop Energy Limited',
        description: 'Our commitment to protecting your personal information and data privacy.',
        type: 'website',
    },
}

export default function PrivacyPage() {
    const lastUpdated = 'January 28, 2026'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="py-16 bg-navy-950 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-6">
                        <Shield className="h-16 w-16 text-loop-orange-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-300 text-center">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <p className="text-lg text-gray-700 mb-4">
                                Loop Energy Limited ("we," "us," or "our") is committed to protecting your privacy and personal data.
                                This Privacy Policy explains how we collect, use, store, and protect your information when you use our
                                website <a href={site.url} className="text-loop-orange-600 hover:underline">{site.url}</a> or engage
                                with our commodity trading services.
                            </p>
                            <p className="text-gray-700">
                                We comply with the <strong>Kenya Data Protection Act 2019</strong> and the
                                <strong> General Data Protection Regulation (GDPR)</strong> for our European clients.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 1. Information We Collect */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <FileText className="h-6 w-6 text-loop-orange-600 mr-3" />
                                1. Information We Collect
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">1.1 Personal Information</h3>
                            <p className="text-gray-700 mb-4">
                                When you contact us or request services, we may collect:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li><strong>Contact Details:</strong> Name, email address, phone number, company name</li>
                                <li><strong>Business Information:</strong> Job title, company details, industry sector</li>
                                <li><strong>Inquiry Details:</strong> Service interests, project requirements, trade specifications</li>
                                <li><strong>Communication Records:</strong> Email correspondence, form submissions, phone call records</li>
                            </ul>

                            <h3 className="font-semibold text-navy-800 mb-3">1.2 Technical Information</h3>
                            <p className="text-gray-700 mb-4">
                                We automatically collect certain technical information when you visit our website:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                <li><strong>Usage Data:</strong> Pages visited, time spent on site, referring URLs</li>
                                <li><strong>Cookies:</strong> Small text files stored on your device to improve user experience</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 2. How We Use Your Information */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <Users className="h-6 w-6 text-loop-orange-600 mr-3" />
                                2. How We Use Your Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">We use your personal information for the following purposes:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Service Delivery:</strong> Respond to inquiries, provide quotes, facilitate commodity trading</li>
                                <li><strong>Communication:</strong> Send service updates, trading alerts, and business correspondence</li>
                                <li><strong>Contract Management:</strong> Execute trade agreements, manage logistics, process payments</li>
                                <li><strong>Compliance:</strong> Meet regulatory requirements (EPRA, AML/KYC, international trade laws)</li>
                                <li><strong>Website Improvement:</strong> Analyze usage patterns to enhance user experience</li>
                                <li><strong>Legal Obligations:</strong> Comply with applicable laws and protect our legal rights</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 3. Legal Basis for Processing */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <Lock className="h-6 w-6 text-loop-orange-600 mr-3" />
                                3. Legal Basis for Processing (GDPR)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">We process your personal data based on:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Consent:</strong> You have provided explicit consent for contact forms and communications</li>
                                <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill trading contracts</li>
                                <li><strong>Legitimate Interests:</strong> Improving services, fraud prevention, business development</li>
                                <li><strong>Legal Obligation:</strong> Compliance with Kenya Data Protection Act, AML/KYC regulations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 4. Data Sharing */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <Eye className="h-6 w-6 text-loop-orange-600 mr-3" />
                                4. How We Share Your Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">We may share your information with:</p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li><strong>Service Providers:</strong> Logistics partners, shipping companies, terminal operators (for order fulfillment)</li>
                                <li><strong>Financial Institutions:</strong> Banks and payment processors (for secure transactions)</li>
                                <li><strong>Regulatory Authorities:</strong> EPRA, Kenya Revenue Authority, customs agencies (when legally required)</li>
                                <li><strong>Legal Advisors:</strong> Lawyers and compliance consultants (for legal matters)</li>
                                <li><strong>Business Partners:</strong> Refineries, producers, mine owners (with your consent for specific transactions)</li>
                            </ul>
                            <p className="text-gray-700">
                                <strong>We do NOT sell or rent your personal information to third parties for marketing purposes.</strong>
                            </p>
                        </CardContent>
                    </Card>

                    {/* 5. International Data Transfers */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">5. International Data Transfers</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                As an international trading company with operations in <strong>Kenya</strong>, <strong>UAE</strong>, and <strong>Europe</strong>,
                                your information may be transferred to and stored in different countries.
                            </p>
                            <p className="text-gray-700 mb-4">
                                We ensure appropriate safeguards are in place, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                                <li>Secure data transfer protocols and encryption</li>
                                <li>Compliance with local data protection laws in each jurisdiction</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 6. Data Security */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">6. Data Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                We implement industry-standard security measures to protect your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
                                <li><strong>Access Controls:</strong> Restricted access to personal data on a need-to-know basis</li>
                                <li><strong>Secure Storage:</strong> Protected servers and regular security audits</li>
                                <li><strong>Staff Training:</strong> Employee training on data protection best practices</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                However, no method of transmission over the internet is 100% secure. While we strive to protect your data,
                                we cannot guarantee absolute security.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 7. Data Retention */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">7. Data Retention</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                We retain your personal information only as long as necessary:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Inquiry Data:</strong> 2 years from last contact (unless you request deletion)</li>
                                <li><strong>Contract Data:</strong> 7 years after contract completion (for legal/tax compliance)</li>
                                <li><strong>Financial Records:</strong> As required by Kenya Revenue Authority and applicable tax laws</li>
                                <li><strong>Website Analytics:</strong> 26 months maximum (anonymized after 14 months)</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 8. Your Rights */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">8. Your Data Protection Rights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Under the Kenya Data Protection Act 2019 and GDPR, you have the following rights:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
                                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete information</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (where applicable)</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                To exercise these rights, contact us at <a href={`mailto:${site.contacts.email}`} className="text-loop-orange-600 hover:underline">{site.contacts.email}</a>
                            </p>
                        </CardContent>
                    </Card>

                    {/* 9. Cookies */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">9. Cookies Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Our website uses essential cookies to ensure functionality. We currently do <strong>NOT</strong> use:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Advertising or tracking cookies</li>
                                <li>Third-party analytics (e.g., Google Analytics)</li>
                                <li>Social media cookies</li>
                            </ul>
                            <p className="text-gray-700">
                                If we implement analytics in the future, we will update this policy and seek your consent where required.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 10. Third-Party Services */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">10. Third-Party Services</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                Our website uses the following third-party services:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    <strong>Web3Forms:</strong> Contact form submission processing.
                                    <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-loop-orange-600 hover:underline ml-1">
                                        View their privacy policy
                                    </a>
                                </li>
                                <li>
                                    <strong>Netlify:</strong> Website hosting and form handling.
                                    <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-loop-orange-600 hover:underline ml-1">
                                        View their privacy policy
                                    </a>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 11. Children's Privacy */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">11. Children's Privacy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                Our services are intended for business-to-business (B2B) transactions. We do not knowingly collect
                                personal information from individuals under 18 years of age. If we discover that we have inadvertently
                                collected such information, we will delete it promptly.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 12. Changes to Privacy Policy */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">12. Changes to This Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                                requirements. The "Last Updated" date at the top of this page indicates when the policy was last revised.
                                We encourage you to review this page periodically for any updates.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="bg-gradient-to-br from-navy-50 to-loop-orange-50">
                        <CardHeader>
                            <CardTitle className="text-navy-800">Contact Us About Privacy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-6">
                                If you have questions about this Privacy Policy or how we handle your personal information, please contact us:
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-loop-orange-600 mt-1" />
                                    <div>
                                        <div className="font-semibold text-navy-800">Email</div>
                                        <a href={`mailto:${site.contacts.email}`} className="text-loop-orange-600 hover:underline">
                                            {site.contacts.email}
                                        </a>
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

                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-loop-orange-600 mt-1" />
                                    <div>
                                        <div className="font-semibold text-navy-800">Dubai Office</div>
                                        <p className="text-gray-700">{site.contacts.locations.dubai.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-300">
                                <p className="text-sm text-gray-600">
                                    <strong>Data Protection Officer:</strong> For specific data protection inquiries under the Kenya Data Protection Act 2019 or GDPR,
                                    please email <a href={`mailto:${site.contacts.email}`} className="text-loop-orange-600 hover:underline">{site.contacts.email}</a> with the subject line "Data Protection Inquiry."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
