import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Loop Energy",
  description: "Terms and conditions for Loop Energy's petroleum supply, equipment hire, and infrastructure services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-200">
            Terms and conditions governing the use of Loop Energy's services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Loop Energy Limited's services, including petroleum supply, equipment hire, and infrastructure development services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">2. Services Overview</h2>
            <p className="text-gray-600 mb-4">
              Loop Energy Limited provides:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Petroleum supply and distribution services</li>
              <li>Construction equipment hire with professional operators</li>
              <li>Infrastructure development and civil engineering services</li>
              <li>Related consulting and project management services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">3. Equipment Hire Terms</h2>
            <p className="text-gray-600 mb-4">
              Equipment rental agreements are subject to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Availability and scheduling confirmation</li>
              <li>Proof of operator certification where applicable</li>
              <li>Insurance coverage requirements</li>
              <li>Site access and safety compliance</li>
              <li>Payment terms as specified in individual contracts</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">4. Petroleum Supply Terms</h2>
            <p className="text-gray-600 mb-4">
              Fuel supply services are provided subject to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Market pricing at time of delivery</li>
              <li>Minimum order quantities</li>
              <li>Delivery schedule coordination</li>
              <li>Quality specifications and standards compliance</li>
              <li>Payment terms and credit approval</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">5. Health, Safety & Environment</h2>
            <p className="text-gray-600 mb-4">
              All services are delivered in accordance with our HSE policy:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Compliance with ISO 45001:2018 safety standards</li>
              <li>Environmental protection per ISO 14001:2015</li>
              <li>Zero-harm workplace culture</li>
              <li>Client site safety requirements adherence</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">6. Liability and Insurance</h2>
            <p className="text-gray-600 mb-4">
              Loop Energy maintains comprehensive insurance coverage for all operations. Liability limitations and insurance requirements are detailed in individual service contracts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">7. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Standard payment terms are net 30 days unless otherwise specified in individual contracts. Late payment charges may apply as per Kenyan commercial law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms are governed by the laws of Kenya. Any disputes shall be resolved through the courts of Kenya.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these terms, please contact us:
            </p>
            <ul className="list-none text-gray-600 space-y-2">
              <li><strong>Email:</strong> info@loopenergy.co.ke</li>
              <li><strong>Phone:</strong> +254 722 517 923</li>
              <li><strong>Address:</strong> Nairobi, Kenya</li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}