// lib/content.ts
// Central place to paste authoritative text from "Loop Energy Company Profile Priceless.pdf".
// Replace every FROM_PROFILE string with exact copy from the PDF.

export const site = {
  name: "Loop Energy Limited",
  url: "https://loopenergy.netlify.app",
  logo: "/logo.png",
  brand: {
    primary: "#0b2545",
    accent: "#1ea7a1",
  },
  contacts: {
    phone: "+254 722 517 923",
    email: "info@loopenergy.co.ke",
    address: "Nairobi, Kenya",
    whatsappUrl: "https://wa.me/254722517923",
  },
  social: {
    linkedin: "#",
    twitter: "#",
  },
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: site.logo,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.contacts.phone,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en"],
    },
  ],
};

export const about = {
  summary:
    "Loop Energy Limited is a leading petroleum supplier, infrastructure developer, and equipment hire company serving Kenya and East Africa. We deliver comprehensive energy solutions, civil engineering projects, and construction equipment rental services to support critical infrastructure development across the region.",
};

export const equipmentHire = {
  heroTitle: "Equipment Hire",
  heroSubtitle:
    "Modern fleet of construction equipment with professional operators and comprehensive support for your next project.",
  overview:
    "Our equipment hire division provides a comprehensive range of modern, well-maintained construction equipment with experienced operators. We maintain the highest safety standards, offer flexible rental terms, and provide 24/7 technical support to ensure your project success.",
  categories: [
    {
      title: "Heavy Machinery",
      description:
        "Excavators, bulldozers, graders, wheel loaders and heavy earthmoving equipment for construction and infrastructure projects.",
      items: [
        { name: "Excavator 20–30T", specs: "1.0-1.4m³ bucket, 6-7.5m dig depth" },
        { name: "Bulldozer D6/D8", specs: "3.2m³ blade, ripper attachments" },
      ],
    },
    {
      title: "Lifting & Cranes",
      description: "Mobile cranes, truck-mounted cranes, and material handling equipment for lifting and positioning operations.",
      items: [
        { name: "25T Mobile Crane", specs: "31m boom length, 26m max radius" },
        { name: "Forklift 3–5T", specs: "Variable mast height, diesel/electric" },
      ],
    },
    {
      title: "Power & Generation",
      description: "Generators, transformers, and power distribution equipment for temporary and backup power solutions.",
      items: [{ name: "Diesel Generator 250 kVA", specs: "Auto transfer switch, sound-attenuated" }],
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  sector: string;
  summary: string;
  location?: string;
  image?: string;
  isFlagship?: boolean;
};
export const projects: Project[] = [
  {
    id: "p1",
    title: "Kenya Pipeline Infrastructure Development",
    sector: "Energy",
    summary:
      "Major petroleum pipeline infrastructure project supporting fuel distribution across Kenya. Delivered comprehensive civil works, equipment supply, and ongoing maintenance services ensuring reliable energy supply to key regions.",
    location: "Nairobi to Mombasa Corridor",
    image: "/images/projects/placeholder-1.jpg",
    isFlagship: true,
  },
  {
    id: "p2",
    title: "Urban Road Construction Program",
    sector: "Infrastructure",
    summary: "Multi-phase urban road construction and rehabilitation program across major Kenyan cities. Provided heavy equipment, skilled operators, and project management expertise delivering improved transportation infrastructure.",
    location: "Nairobi, Kisumu, Nakuru",
    image: "/images/projects/placeholder-2.jpg",
  },
];

export const hse = {
  heroTitle: "HSE & Sustainability",
  heroSubtitle:
    "Our unwavering commitment to Health, Safety, Environment, and sustainable operations across all projects and communities we serve.",
  overview:
    "At Loop Energy, we maintain a zero-harm culture with leadership commitment at every level. Our HSE policy framework ensures the safety of our people, protection of the environment, and positive impact on communities through continuous improvement and rigorous safety standards.",
  pillars: [
    {
      title: "Safety First",
      description:
        "Comprehensive safety culture with continuous training, permit-to-work systems, thorough risk assessments, and toolbox talks. We maintain zero-tolerance for unsafe practices and invest in world-class safety equipment and protocols.",
    },
    {
      title: "Environmental Care",
      description:
        "Proactive environmental protection through emissions monitoring, spill prevention systems, comprehensive waste management programs, and biodiversity conservation initiatives. We implement sustainable practices across all operations.",
    },
    {
      title: "Community Impact",
      description:
        "Strong community engagement through local hiring programs, skills development initiatives, corporate social responsibility projects, and local supplier development. We believe in creating shared value for all stakeholders.",
    },
    {
      title: "Quality Excellence",
      description:
        "ISO-certified quality management systems with regular audits, continuous improvement processes (Kaizen), and strict adherence to international standards ensuring delivery excellence in all our operations.",
    },
  ],
  certifications: [
    "ISO 9001:2015 Quality Management Systems",
    "ISO 14001:2015 Environmental Management Systems",
    "ISO 45001:2018 Occupational Health & Safety Management",
  ],
  policyLink: "/pdfs/hse-policy.pdf",
};

export const careers = {
  heroTitle: "Careers at Loop Energy",
  heroSubtitle:
    "Join a safety‑first team delivering energy and infrastructure across Kenya. Grow with responsibility, mentorship and impact.",
  intro:
    "At Loop Energy, you’ll work on meaningful petroleum, power and infrastructure projects that keep communities and businesses moving. We value ownership, craftsmanship and teamwork. We invest in people through training, safe work practices and clear growth paths, and we hire based on talent and attitude—equal opportunity for all.",
  benefits: [
    "Competitive pay aligned to role and experience",
    "Medical cover and wellness support",
    "Training, certifications and paid learning time",
    "PPE and world‑class safety standards",
    "Clear career progression and mentorship",
    "Inclusive, respectful culture",
    "Project‑aware flexibility and time off",
    "Transport and field allowances where applicable",
  ],
  roles: [
    {
      id: "r1",
      title: "HSE Officer",
      location: "Nairobi, Kenya",
      type: "Full-time",
      summary:
        "Lead site HSE compliance: toolbox talks, PTW, audits, incident reporting and corrective actions. Coach teams to a zero‑harm culture.",
      applyTo: "careers@loopenergy.co.ke",
    },
    {
      id: "r2",
      title: "Project Engineer",
      location: "Nairobi, Kenya",
      type: "Full-time",
      summary:
        "Plan and deliver scope across civil/MEP works: scheduling, vendor coordination, quality checks and progress reporting.",
      applyTo: "careers@loopenergy.co.ke",
    },
  ],
};

export type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO
  summary: string;
  image?: string;
};
export const news: NewsItem[] = [
  {
    id: "n1",
    title: "Loop Energy Secures Major Infrastructure Contract Worth KES 2.5 Billion",
    date: "2024-12-15",
    summary:
      "Loop Energy has been awarded a significant infrastructure development contract worth KES 2.5 billion for road construction and petroleum supply services. The multi-phase project spans three counties and will create over 500 local jobs while improving transportation connectivity across the region. The contract includes civil engineering works, fuel supply logistics, and equipment hire services over a 24-month period.",
    image: "/images/news/contract-award.jpg",
  },
  {
    id: "n2", 
    title: "Fleet Expansion: 25 New Heavy Equipment Units Added to Meet Growing Demand",
    date: "2024-11-22",
    summary:
      "Our equipment hire division has completed a major fleet expansion with 25 new heavy machinery units including CAT excavators, Komatsu bulldozers, and mobile cranes. This 40% capacity increase enables us to serve more clients simultaneously, reduce project delivery times, and maintain our commitment to providing modern, well-maintained equipment with certified operators.",
    image: "/images/news/fleet-expansion.jpg",
  },
  {
    id: "n3",
    title: "Loop Energy Achieves ISO 45001:2018 Health & Safety Certification",
    date: "2024-10-08", 
    summary:
      "We are proud to announce our achievement of ISO 45001:2018 Occupational Health and Safety Management Systems certification. This milestone reinforces our zero-harm commitment and demonstrates our systematic approach to protecting workers, contractors, and communities. The certification covers all our operations including equipment hire, petroleum supply, and infrastructure development services.",
    image: "/images/news/iso-certification.jpg",
  },
  {
    id: "n4",
    title: "Community Impact: 1,000+ Youth Trained in Construction Skills Program",
    date: "2024-09-14",
    summary:
      "Our Corporate Social Responsibility initiative has successfully trained over 1,000 young Kenyans in construction and heavy equipment operation skills. The six-month program includes hands-on training, safety certification, and job placement support. Over 80% of graduates have secured employment in the construction and infrastructure sector, contributing to Kenya's economic development and youth empowerment goals.",
    image: "/images/news/youth-training.jpg",
  },
];

