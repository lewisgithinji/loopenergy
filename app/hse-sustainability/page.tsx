import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { hse } from "@/lib/content";
import Script from "next/script";
import HSEClientSection from "./HSEClientSection";
import { ArrowRight, Download, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "HSE & Sustainability | Loop Energy",
  description:
    "Our commitment to Health, Safety, Environment and sustainable operations across all projects.",
};

export default function HSEPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{hse.heroTitle}</h1>
            <p className="text-xl text-gray-200 mb-8">{hse.heroSubtitle}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-400" />
                <span>Kenya & East Africa</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-400" />
                <span>Zero Harm Culture</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-400" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Overview */}
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-6">Our HSE Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{hse.overview}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <a href={hse.policyLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download HSE Policy
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact HSE Team
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Client-side animated sections */}
        <HSEClientSection />
      </main>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Questions About Our HSE Practices?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our HSE team is available to discuss safety protocols, environmental initiatives, 
              and sustainability programs with potential partners and clients.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <a href="mailto:hse@loopenergy.co.ke?subject=HSE Inquiry">
                  Contact HSE Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={hse.policyLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  HSE Policy
                </a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-600" />
                <span>+254 722 517923</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-600" />
                <span>hse@loopenergy.co.ke</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-hse" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "HSE & Sustainability",
          description: "Our commitment to Health, Safety, Environment and sustainable operations across all projects.",
        })}
      </Script>
    </div>
  );
}
