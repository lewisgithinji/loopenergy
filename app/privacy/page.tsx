import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Loop Energy",
  description: "Privacy policy detailing how Loop Energy collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              Loop Energy Limited collects information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Request quotes for our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our website or phone</li>
              <li>Apply for employment opportunities</li>
              <li>Enter into service contracts with us</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">2. Types of Personal Information</h2>
            <p className="text-gray-600 mb-4">
              The information we may collect includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Company name and business information</li>
              <li>Project requirements and specifications</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Provide and improve our petroleum, equipment, and infrastructure services</li>
              <li>Process service requests and manage contracts</li>
              <li>Send you relevant updates about our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized activity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Trusted service providers who assist in our operations</li>
              <li>Government authorities when required by law</li>
              <li>Professional advisors (lawyers, accountants) under confidentiality agreements</li>
              <li>In connection with business transfers (mergers, acquisitions)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Secure data transmission and storage</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Compliance with industry security standards</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>File complaints with relevant authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">8. Cookies and Website Analytics</h2>
            <p className="text-gray-600 mb-4">
              Our website may use cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this privacy policy periodically. We will notify you of significant changes by posting the updated policy on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this privacy policy or how we handle your information, please contact us:
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