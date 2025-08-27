import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  MapPin, 
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { careers } from "@/lib/content";
import Script from "next/script";
import CareersClientSection from "./CareersClientSection";

export const metadata: Metadata = {
  title: "Careers | Loop Energy",
  description:
    "Build your career at Loop Energy—learn, grow, and make an impact on critical energy projects.",
};

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{careers.heroTitle}</h1>
            <p className="text-xl text-gray-200 mb-8">{careers.heroSubtitle}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-teal-400" />
                <span>200+ team members</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-teal-400" />
                <span>Equal opportunity employer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Client-side animated sections */}
        <CareersClientSection />
      </main>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Don't See a Perfect Match?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                <a href="mailto:careers@loopenergy.co.ke?subject=General Application">
                  Send Your CV
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+254722517923">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
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
                <span>careers@loopenergy.co.ke</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-teal-600" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-careers" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Careers",
          description: "Build your career at Loop Energy—learn, grow, and make an impact on critical energy projects.",
        })}
      </Script>
    </div>
  );
}