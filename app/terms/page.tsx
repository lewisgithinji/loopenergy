import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, FileText, AlertTriangle, CheckCircle, Mail, MapPin } from 'lucide-react'
import { site } from '@/lib/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Loop Energy Limited. Understand the legal terms governing the use of our website and commodity trading services.',
    keywords: ['terms of service', 'legal terms', 'user agreement', 'commodity trading terms', 'conditions of use'],
    openGraph: {
        title: 'Terms of Service | Loop Energy Limited',
        description: 'Legal terms governing the use of Loop Energy Limited website and services.',
        type: 'website',
    },
}

export default function TermsPage() {
    const lastUpdated = 'January 28, 2026'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="py-16 bg-navy-950 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center mb-6">
                        <Scale className="h-16 w-16 text-loop-orange-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms of Service</h1>
                    <p className="text-xl text-gray-300 text-center">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introduction */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <p className="text-lg text-gray-700 mb-4">
                                Welcome to Loop Energy Limited. These Terms of Service ("Terms") govern your access to and use of our
                                website <a href={site.url} className="text-loop-orange-600 hover:underline">{site.url}</a> and any
                                commodity trading services we provide.
                            </p>
                            <p className="text-gray-700 mb-4">
                                By accessing our website or engaging with our services, you agree to be bound by these Terms. If you do
                                not agree to these Terms, please do not use our website or services.
                            </p>
                            <div className="bg-loop-orange-50 border-l-4 border-loop-orange-600 p-4 mt-4">
                                <p className="text-gray-800 font-medium">
                                    <AlertTriangle className="inline h-5 w-5 text-loop-orange-600 mr-2" />
                                    <strong>Business to Business (B2B) Services:</strong> Our services are intended exclusively for business
                                    and commercial use. Individual consumers should not use our services for personal purposes.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 1. Definitions */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <FileText className="h-6 w-6 text-loop-orange-600 mr-3" />
                                1. Definitions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>"Company," "we," "us," or "our"</strong> refers to Loop Energy Limited, a trading company
                                    incorporated in Kenya in 2018, with operations in Dubai, UAE.</li>
                                <li><strong>"Services"</strong> refers to all commodity trading, sourcing, logistics, and advisory services
                                    provided by Loop Energy Limited.</li>
                                <li><strong>"Website"</strong> refers to {site.url} and all associated pages and content.</li>
                                <li><strong>"Client," "you," or "your"</strong> refers to any business, entity, or authorized representative
                                    accessing our website or services.</li>
                                <li><strong>"Products"</strong> refers to refined petroleum products, precious metals, minerals, and related
                                    commodities we trade.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 2. Use of Website */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">2. Use of Website</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">2.1 Permitted Use</h3>
                            <p className="text-gray-700 mb-4">
                                You may use our website for legitimate business purposes, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Researching commodity trading services</li>
                                <li>Submitting inquiries for products or services</li>
                                <li>Accessing information about our company and operations</li>
                                <li>Contacting our offices for business inquiries</li>
                            </ul>

                            <h3 className="font-semibold text-navy-800 mb-3">2.2 Prohibited Use</h3>
                            <p className="text-gray-700 mb-4">
                                You agree NOT to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Use the website for any unlawful purpose or in violation of these Terms</li>
                                <li>Attempt to gain unauthorized access to our systems or networks</li>
                                <li>Scrape, copy, or reproduce website content without written permission</li>
                                <li>Transmit viruses, malware, or any malicious code</li>
                                <li>Impersonate Loop Energy Limited or falsely claim affiliation with our company</li>
                                <li>Use automated systems (bots, scrapers) to access the website without consent</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 3. Commodity Trading Terms */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">3. Commodity Trading Terms</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">3.1 Quotations and Offers</h3>
                            <p className="text-gray-700 mb-4">
                                All product information, prices, and specifications displayed on our website are for informational purposes
                                only and do not constitute a binding offer. Formal quotations and contracts are subject to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Verification of client credentials and creditworthiness</li>
                                <li>Availability of products from our suppliers</li>
                                <li>Market conditions and pricing at the time of contract execution</li>
                                <li>Compliance with applicable regulations (EPRA, international trade laws)</li>
                            </ul>

                            <h3 className="font-semibold text-navy-800 mb-3">3.2 Contract Formation</h3>
                            <p className="text-gray-700 mb-4">
                                A legally binding contract is formed only when:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>We issue a formal written quotation or Proforma Invoice</li>
                                <li>You provide written acceptance of the quotation</li>
                                <li>Both parties execute a written Sales Purchase Agreement (SPA)</li>
                                <li>Payment terms and delivery conditions are mutually agreed upon</li>
                            </ul>

                            <h3 className="font-semibold text-navy-800 mb-3">3.3 Product Quality and Specifications</h3>
                            <p className="text-gray-700 mb-4">
                                We commit to supplying products that meet the specifications outlined in our contracts. However:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Product specifications are subject to industry-standard tolerances</li>
                                <li>Independent laboratory testing may be required at buyer's expense</li>
                                <li>Claims for quality disputes must be made within timeframes specified in the contract</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 4. Payments and Pricing */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">4. Payments and Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">4.1 Pricing</h3>
                            <p className="text-gray-700 mb-4">
                                Commodity prices are subject to market fluctuations. Prices displayed on our website are estimates and may
                                change without notice. Final pricing is confirmed in written contracts only.
                            </p>

                            <h3 className="font-semibold text-navy-800 mb-3">4.2 Payment Terms</h3>
                            <p className="text-gray-700 mb-4">
                                Payment terms are negotiated on a case-by-case basis and may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Letter of Credit (LC) - SBLC, DLC, or Transferable LC</li>
                                <li>Bank Guarantee (BG)</li>
                                <li>Advance payment or deposit (for established clients)</li>
                                <li>Escrow arrangements (for certain transactions)</li>
                            </ul>

                            <h3 className="font-semibold text-navy-800 mb-3">4.3 Late Payments</h3>
                            <p className="text-gray-700">
                                Late payments may incur interest charges and suspension of services as outlined in individual contracts.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 5. Delivery and Logistics */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">5. Delivery and Logistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                We offer both <strong>FOB (Free on Board)</strong> and <strong>CIF (Cost, Insurance, and Freight)</strong> delivery terms.
                                Specific terms will be outlined in individual contracts.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>FOB:</strong> Risk transfers to buyer upon loading at the origin port</li>
                                <li><strong>CIF:</strong> Loop Energy arranges shipping and insurance to the destination port</li>
                                <li>Delivery timelines are estimates and subject to force majeure events</li>
                                <li>Logistics delays due to customs, weather, or geopolitical issues are not our responsibility</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* 6. Intellectual Property */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">6. Intellectual Property</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                All content on this website, including text, logos, images, graphics, and design, is the intellectual
                                property of Loop Energy Limited and is protected by copyright and trademark laws.
                            </p>
                            <p className="text-gray-700">
                                You may not reproduce, distribute, or create derivative works from our content without written permission.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 7. Limitation of Liability */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">7. Limitation of Liability</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">7.1 Website Use</h3>
                            <p className="text-gray-700 mb-4">
                                Our website is provided "as is" without warranties of any kind, either express or implied. We do not
                                guarantee that the website will be error-free, uninterrupted, or free from viruses.
                            </p>

                            <h3 className="font-semibold text-navy-800 mb-3">7.2 Trading Services</h3>
                            <p className="text-gray-700 mb-4">
                                To the maximum extent permitted by law, Loop Energy Limited shall not be liable for:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Indirect, consequential, or incidental damages arising from commodity trades</li>
                                <li>Market fluctuations or price changes beyond our control</li>
                                <li>Delays or failures caused by third parties (suppliers, carriers, customs)</li>
                                <li>Force majeure events (wars, natural disasters, pandemics, government actions)</li>
                            </ul>

                            <div className="bg-gray-100 border-l-4 border-navy-800 p-4 mt-4">
                                <p className="text-gray-800">
                                    <strong>Maximum Liability:</strong> Our total liability under any contract shall not exceed the total
                                    contract value for the specific transaction in question.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 8. Governing Law */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">8. Governing Law and Dispute Resolution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-navy-800 mb-3">8.1 Governing Law</h3>
                            <p className="text-gray-700 mb-4">
                                These Terms and any disputes arising from them shall be governed by the laws of <strong>Kenya</strong> for
                                Kenya-based transactions and the laws of the <strong>United Arab Emirates</strong> for Dubai-based transactions,
                                unless otherwise specified in individual contracts.
                            </p>

                            <h3 className="font-semibold text-navy-800 mb-3">8.2 Dispute Resolution</h3>
                            <p className="text-gray-700 mb-4">
                                In the event of a dispute, the parties agree to:
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                <li><strong>Negotiation:</strong> Attempt to resolve the dispute through good-faith negotiations</li>
                                <li><strong>Mediation:</strong> If negotiation fails, submit to mediation by a mutually agreed mediator</li>
                                <li><strong>Arbitration:</strong> If mediation fails, the dispute shall be referred to binding arbitration under
                                    the <strong>Nairobi Centre for International Arbitration (NCIA)</strong> or <strong>Dubai International Arbitration Centre (DIAC)</strong>,
                                    as specified in the contract</li>
                            </ol>

                            <p className="text-gray-700 mt-4">
                                The arbitration shall be conducted in English, and the decision of the arbitrator(s) shall be final and
                                binding on both parties.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 9. Termination */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">9. Termination</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-4">
                                We reserve the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Suspend or terminate your access to our website for violation of these Terms</li>
                                <li>Refuse service to any client for any reason, subject to applicable laws</li>
                                <li>Modify or discontinue any part of our website or services without notice</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                Existing contracts will be honored unless terminated for material breach by either party.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 10. Privacy */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">10. Privacy and Data Protection</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                Your use of our website and services is subject to our{' '}
                                <Link href="/privacy" className="text-loop-orange-600 hover:underline font-semibold">
                                    Privacy Policy
                                </Link>. We collect and process personal information in compliance with the Kenya Data Protection Act 2019
                                and GDPR for European clients.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 11. Changes to Terms */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">11. Changes to These Terms</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                We may update these Terms from time to time. The "Last Updated" date at the top of this page indicates
                                when the Terms were last revised. Continued use of our website or services after changes constitutes
                                acceptance of the revised Terms.
                            </p>
                        </CardContent>
                    </Card>

                    {/* 12. Severability */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="text-navy-800">12. Severability</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">
                                If any provision of these Terms is found to be invalid or unenforceable by a court, the remaining
                                provisions shall continue in full force and effect.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="bg-gradient-to-br from-navy-50 to-loop-orange-50">
                        <CardHeader>
                            <CardTitle className="flex items-center text-navy-800">
                                <CheckCircle className="h-6 w-6 text-loop-orange-600 mr-3" />
                                Contact Us About These Terms
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 mb-6">
                                If you have questions about these Terms of Service, please contact us:
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
                                    <strong>Legal Department:</strong> For legal or contractual matters, please email{' '}
                                    <a href={`mailto:${site.contacts.email}`} className="text-loop-orange-600 hover:underline">
                                        {site.contacts.email}
                                    </a> with the subject line "Legal Inquiry."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
