import type { Metadata } from "next";
import Script from "next/script";
import { news } from "@/lib/content";
import NewsClientSection from "./NewsClientSection";
import { Calendar, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates | Loop Energy",
  description:
    "Latest news, project updates, and achievements from Loop Energy's operations across Kenya and East Africa.",
};

export default function NewsPage() {
  // Sort on the server; pass to client component for interactivity
  const items = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed with the latest developments, achievements, and insights from Loop Energy
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-400" />
                <span>Latest Updates</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-teal-400" />
                <span>Industry Insights</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-teal-400" />
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <NewsClientSection items={items} />
      </main>

      {/* JSON-LD for the listing */}
      <Script id="ld-news" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Loop Energy News",
          url: "https://loopenergy.netlify.app/news",
          description: metadata.description,
        })}
      </Script>
    </div>
  );
}
