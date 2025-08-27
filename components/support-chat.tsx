// components/support-chat.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Trash2, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { site, equipmentHire, hse, projects, careers, about } from "@/lib/content";

type QA = { q: string; a: string };
type KB = {
  about: string;
  services: string;
  equipment: string;
  projects: string;
  hse: string;
  careers: string;
  contact: string;
  news: string;
  pricing: string;
  locations: string;
};

const knowledgeBase: KB = {
  about: about.summary,
  services: "We provide comprehensive energy solutions across Kenya and East Africa including: Petroleum Supply & Distribution (bulk fuel supply, diesel, petrol, aviation fuel), Infrastructure Development (civil engineering, road construction, pipeline projects), and Equipment Hire (excavators, bulldozers, cranes, generators with professional operators). We serve major organizations like Kenya Pipeline Company, Total Energies, Shell Kenya, and government agencies.",
  equipment: `${equipmentHire.overview} Our fleet includes: Heavy Machinery (excavators 20-30T, bulldozers D6/D8, wheel loaders), Lifting Equipment (25T mobile cranes, forklifts 3-5T), Power Generation (diesel generators 250kVA with auto transfer switches). All equipment comes with certified operators, 24/7 support, and flexible rental terms. Perfect for construction, infrastructure, and industrial projects.`,
  projects: "Our flagship projects include the Kenya Pipeline Infrastructure Development spanning Nairobi to Mombasa corridor, and major Urban Road Construction Programs across Nairobi, Kisumu, and Nakuru. We've delivered petroleum infrastructure, civil works, and equipment services ensuring reliable energy supply and improved transportation connectivity. Our project portfolio demonstrates expertise in large-scale infrastructure delivery.",
  hse: `${hse.overview} We maintain ISO 9001:2015 Quality Management, ISO 14001:2015 Environmental Management, and ISO 45001:2018 Occupational Health & Safety certifications. Our zero-harm culture includes comprehensive safety training, permit-to-work systems, environmental protection, spill prevention, waste management, and community engagement through local hiring and skills development programs.`,
  careers: `${careers.intro} We offer competitive salaries, medical cover, training certifications, world-class safety standards, clear career progression, inclusive culture, and transport allowances. Current openings include HSE Officer and Project Engineer positions in Nairobi. We value ownership, craftsmanship, teamwork, and hire based on talent and attitude with equal opportunity for all.`,
  contact: `📞 Phone: ${site.contacts.phone} | 📧 Email: ${site.contacts.email} | 📍 Location: ${site.contacts.address} | 💬 WhatsApp: Available for instant support | 🌐 Website: Professional contact form available | ⏰ Business Hours: Monday-Friday 8AM-6PM, Saturday 9AM-1PM`,
  news: "Recent achievements: Loop Energy secured KES 2.5 billion infrastructure contract creating 500+ jobs, expanded fleet with 25 new heavy equipment units (40% capacity increase), achieved ISO 45001:2018 Health & Safety certification, and trained 1000+ youth in construction skills with 80% job placement success. These milestones demonstrate our growth and community commitment.",
  pricing: "Equipment hire rates vary by machine type, duration, and project requirements. We offer competitive pricing with flexible rental terms (daily, weekly, monthly rates). Fuel supply pricing follows market rates with volume discounts available. Infrastructure projects are quoted based on scope and specifications. Contact us for detailed quotations tailored to your specific needs.",
  locations: "Headquartered in Nairobi, Kenya, we serve clients across East Africa including major cities like Nairobi, Mombasa, Kisumu, Nakuru, and extending to regional markets. Our equipment and fuel supply services cover urban and remote locations. We have experience in cross-border operations and can mobilize resources to various project sites efficiently."
};

function searchKB(query: string): string {
  const q = query.toLowerCase();
  
  // Direct key matches for quick questions
  const directMatches: Record<string, string> = {
    "services": `Services: ${knowledgeBase.services}`,
    "pricing": `Pricing Info: ${knowledgeBase.pricing}`,
    "hse": `HSE & Safety: ${knowledgeBase.hse}`,
    "careers": `Careers: ${knowledgeBase.careers}`,
    "news": `Latest News: ${knowledgeBase.news}`,
    "locations": `Service Locations: ${knowledgeBase.locations}`,
    "equipment": `Equipment Hire: ${knowledgeBase.equipment}`,
    "projects": `Projects: ${knowledgeBase.projects}`,
    "about": `About: ${knowledgeBase.about}`,
    "contact": `Contact Info: ${knowledgeBase.contact}`
  };

  // Check for direct matches first
  for (const [key, response] of Object.entries(directMatches)) {
    if (q === key || q.includes(key)) {
      return response;
    }
  }

  // Fallback to content search
  const hits: string[] = [];
  const pushIf = (label: string, text: string) => {
    if (!text) return;
    const t = text.toLowerCase();
    if (t.includes(q)) hits.push(`${label}: ${text}`);
  };

  pushIf("About", knowledgeBase.about);
  pushIf("Services", knowledgeBase.services);
  pushIf("Equipment Hire", knowledgeBase.equipment);
  pushIf("Projects", knowledgeBase.projects);
  pushIf("HSE & Safety", knowledgeBase.hse);
  pushIf("Careers", knowledgeBase.careers);
  pushIf("Contact Info", knowledgeBase.contact);
  pushIf("Latest News", knowledgeBase.news);
  pushIf("Pricing Info", knowledgeBase.pricing);
  pushIf("Service Locations", knowledgeBase.locations);

  if (!hits.length) {
    return "I couldn't find that specific information. Try asking about our services, equipment hire, projects, HSE policy, careers, pricing, contact details, locations, or recent news. You can also use the WhatsApp link above or visit our contact page for direct assistance.";
  }
  return hits.slice(0, 3).join("\n\n");
}

export default function SupportChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const quickFaq = useMemo<QA[]>(() => [
    { q: "What services do you provide?", a: "Services" },
    { q: "Equipment hire rates?", a: "Pricing" },
    { q: "HSE policy details?", a: "HSE" },
    { q: "Career opportunities?", a: "Careers" },
    { q: "Recent company news?", a: "News" },
    { q: "Service locations?", a: "Locations" }
  ], []);
  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setLoading(true);
    // Local search (no remote calls) for fast UX and dark-mode friendly rendering.
    const a = searchKB(q);
    setLoading(false);
    setMessages((m) => [...m, { role: "assistant", text: a }]);
  };

  const clear = () => setMessages([]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg transition hover:scale-105"
            aria-label="Open chat"
            title="Open chat"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex w-full max-w-md flex-col bg-background p-0">
          <SheetHeader className="border-b border-border p-4">
            <SheetTitle className="flex items-center justify-between">
              <span className="text-foreground">Loop Energy Assistant</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={clear} title="Clear messages" aria-label="Clear messages">
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button asChild variant="outline" size="icon" title="WhatsApp">
                  <a href={site.contacts.whatsappUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-4">
            <Card className="mb-4 border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quick links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="secondary" asChild className="text-xs">
                    <Link href="/contact">📧 Contact</Link>
                  </Button>
                  <Button variant="secondary" asChild className="text-xs">
                    <a href={site.contacts.whatsappUrl} target="_blank" rel="noreferrer">💬 WhatsApp</a>
                  </Button>
                  <Button variant="secondary" asChild className="text-xs">
                    <Link href="/equipment-hire">🚜 Equipment</Link>
                  </Button>
                  <Button variant="secondary" asChild className="text-xs">
                    <Link href="/careers">👔 Careers</Link>
                  </Button>
                </div>
                <div className="border-t border-border pt-2">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Quick Questions</div>
                  <div className="grid grid-cols-1 gap-1">
                    {quickFaq.map((f, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        onClick={() => setInput(f.q)}
                        className="justify-start text-xs h-8 px-2"
                      >
                        {f.q}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`rounded-md border p-3 text-sm ${m.role === "user" ? "bg-background" : "bg-card"}`}>
                  <div className="mb-1 text-xs uppercase text-muted-foreground">{m.role}</div>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" /> thinking…
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>

          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask about services, equipment, projects, pricing, careers, news..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
              />
              <Button onClick={send}>Send</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
