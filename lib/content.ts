// lib/content.ts
// Central source for Loop Energy Limited content, aligned with the latest corporate document.

export const site = {
  name: "Loop Energy Limited",
  url: "https://loopenergy.netlify.app",
  logo: "/logo-clear.png",
  brand: {
    primary: "#0b2545", // Deep Navy
    accent: "#00a8e1",  // Vibrant Cyan/Blue (Updated for premium feel)
  },
  contacts: {
    phone: "+254711409228",
    email: "info@loopenergyltd.com",
    address: "First Floor, NHC Building, Aghakhan Walk, P.O Box 51100-00100, Nairobi Kenya.",
    whatsappUrl: "https://wa.me/254711409228",
    locations: {
      kenya: {
        address: "First Floor, NHC Building, Aghakhan Walk, P.O Box 51100-00100, Nairobi Kenya.",
        phone: "+254 722517923",
      },
      dubai: {
        address: "Business Center, Al Shmookh Bldg., UAQ Free Trade Zone, Umm Al Quwain, Dubai, UAE.",
        phone: "+254 722517923", // Using central number as per doc contact section
      }
    }
  },
};

export const home = {
  points: [
    "Loop Energy Limited is a trading company based in Dubai and Kenya, founded in 2014 and incorporated in 2018.",
    "We specialize in managing and sourcing a diverse portfolio of high-quality refined petroleum products, by-products, precious metals, and minerals.",
    "Founded by seasoned industry professionals with extensive market knowledge. The team blends veteran expertise with innovative perspectives.",
    "Our company delivers efficient, reliable, transparent, and value-driven solutions to its global clients.",
    "Strategic collaborations with producers, refineries, logistics & storage partners, terminal operators, and mine owners ensure access to the full supply chain.",
    "Our extensive network allows us to provide tailored solutions from sourcing to timely delivery.",
    "Loop Energy operates in Africa, the UAE, and Europe.",
    "Our priority is to build strong, long-term client relationships by offering clear, transparent, and results-driven services."
  ]
};

export const about = {
  established: "Established in 2014 and incorporated in 2018.",
  summary: "Loop Energy Limited is a trading company with operations in Dubai and Kenya. The firm is renowned for its proficiency in managing a wide-ranging portfolio of high-quality refined petroleum products, by-products, precious metals, and minerals.",
  team: "Founded and led by seasoned industry professionals with extensive market knowledge, the company is dedicated to offering efficient, reliable, and value-driven solutions to its global clientele. The Loop Energy team combines the wisdom of veteran experts with the innovative perspectives of skilled professionals.",
  network: "The company ensures its clients can access a full spectrum of resources by collaborating strategically with producers, refineries, logistics & storage partners, terminal operators, and mine owners. With a market presence across Africa, UAE, and Europe, Loop Energy prioritizes building strong, long-term relationships.",
  vision: "To be the premier partner in energy and precious metals, using innovation to elevate industry standards for quality, reliability, and transparency.",
  strategy: "Loop Energy's robust strategy is built on four core pillars: operational excellence, market differentiation, client relationship management, and risk management.",
  pillars: [
    {
      title: "Operational Excellence",
      description: "Leveraging technology and strategic partnerships to ensure efficient, cost-effective, and visible supply chains."
    },
    {
      title: "Market Differentiation",
      description: "Combining a diverse portfolio with the blended expertise of veterans and new professionals to deliver customized solutions."
    },
    {
      title: "Client Relationship Management",
      description: "Transparent communication and tailored services to build long-term partnerships across Africa, UAE, and Europe."
    },
    {
      title: "Risk Management",
      description: "Stringent credit vetting and regulatory compliance to ensure stability in volatile commodity markets."
    }
  ],
  values: [
    "Integrity and Transparency",
    "Expertise and Innovation",
    "Reliability and Results-Driven Service",
    "Strategic Collaboration",
    "Excellence and Accountability"
  ]
};

export const trading = {
  sourcingAndProcurement: "Loop Energy specializes in sourcing and procurement, leveraging a wide network of strategic partnerships with producers, refineries, and mine owners to ensure a steady, high-quality supply... all while adhering to stringent client specifications and industry standards.",
  commodityTrading: {
    description: "Loop Energy Limited leverages its global market reach and deep industry expertise to provide efficient, innovative, and transparent commodity trading services. We enable the effective buying and selling of a diverse portfolio on F.O.B & C.I.F basis.",
    categories: [
      {
        name: "Refined Petroleum Products",
        items: ["EN590 10 & 50 PPM", "Diesel D6", "Gasoline", "Jet A1 Fuel"]
      },
      {
        name: "Precious Metals",
        items: ["High-purity Gold Bars", "Silver Bars"]
      },
      {
        name: "Minerals",
        items: ["Copper Cathodes", "Copper Concentrate", "Copper Cobalt", "Aluminum Ingots", "Tanzanite"]
      },
      {
        name: "Petroleum By-products",
        items: ["Sulphur Granules", "Sulphuric Acid", "Urea", "Bitumen"]
      }
    ]
  },
  energyMarkets: {
    description: "Operational hubs strategically positioned in key international energy centers:",
    hubs: [
      {
        name: "Rotterdam",
        description: "A vital gateway to European markets and a major refining hub."
      },
      {
        name: "Jurong",
        description: "A critical trading and refining center serving the robust Asian markets."
      },
      {
        name: "Fujairah",
        description: "A pivotal global bunkering and oil storage hub at the crossroads of East and West."
      }
    ]
  }
};

export const products = [
  {
    name: "Gasoline",
    description: "Gasoline is the driving force that powers development and commerce throughout the world. Loop Energy Ultimate supplies gasoline from RON 92, to RON 95. We provide competitive prices, coupled with steady supply and expert delivery.",
    specs: "RON 92, RON 95",
    regions: "Africa, Europe, UAE"
  },
  {
    name: "Gasoil",
    description: "Loop Energy is a known trader, supplier, and distributor of gas oil throughout our network. We carry gas oil from 2500PPM to 10PPM. Gas oil has numerous applications, including powering trucks, trains, and boats.",
    specs: "2500PPM to 10PPM"
  },
  {
    name: "Fuel Oil",
    description: "Fuel oil is the primary propellant in marine vessels. We trade in large quantities including RMG 180, RME 180, RMG 380, and various other qualities.",
    specs: "RMG 180, RME 180, RMG 380"
  },
  {
    name: "Jet Fuel",
    description: "Used primarily to power jet engines. We primarily deal in Jet A-1 fuel sourced directly from refineries throughout the MENA region.",
    specs: "Jet A-1"
  },
  {
    name: "Bitumen",
    description: "We trade different grades and different packaging of bitumen. Our product range includes 30/40, 50/70, 60/70, 80/100 amongst others. We deal in bulk, flexi bags, bitutainers etc.",
    grades: ["30/40", "50/70", "60/70", "80/100"]
  },
  {
    name: "Precious Metals",
    description: "Including high-purity Gold and Silver Bars."
  },
  {
    name: "Minerals",
    description: "A varied portfolio sourced through strategic partnerships in Africa i.e Copper Cathodes, Copper Concentrate, Copper cobalt, Aluminum ingots and Tanzanite."
  },
  {
    name: "Petroleum By-products",
    description: "A range of products including Sulphur granules, Sulphuric acid, Urea, and Bitumen."
  }
];

export const services = [
  {
    title: "Operations Management",
    description: "Delivering operational excellence by leveraging AI-driven insights and real-time data analytics to directly address clients specific internal challenges."
  },
  {
    title: "Logistics Management",
    description: "Comprehensive and tailored logistics and supply chain management, ensuring seamless resource access and efficient, on-schedule product delivery."
  },
  {
    title: "Financial Structuring & Advisory",
    description: "Guiding clients to optimize their capital structure for sustainable growth. Expert advice on balancing debt and equity, and securing favorable financing terms."
  },
  {
    title: "Strategic Transaction Advisory",
    description: "Expert guidance for navigating the complexities of volatile commodity and precious metals markets. Comprehensive due diligence and deal structuring."
  },
  {
    title: "Commodity Sourcing & Trading Management",
    description: "End-to-end services connecting clients with a global network of producers and consumers of crude oil, refined petroleum, and precious metals."
  }
];

export const partnerships = {
  description: "Our commitment to building strong relationships with producers, suppliers, and end-users allows us to create a seamless trading environment.",
  stakeholders: [
    "Refineries",
    "International Banks",
    "International Suppliers",
    "Shipping lines",
    "Logistics & Storage firms",
    "Terminal Operators"
  ]
};

export const hse = {
  pillars: [
    {
      title: "Health & Safety",
      description: "We implement rigorous health and safety protocols to ensure a zero-harm environment for all stakeholders."
    },
    {
      title: "Environmental Stewardship",
      description: "Our operations are designed to minimize environmental impact and promote sustainability."
    },
    {
      title: "Social Responsibility",
      description: "We actively engage with and support the communities where we operate."
    },
    {
      title: "Excellence in Quality",
      description: "Highest quality standards are maintained across all our trading and operational activities."
    }
  ],
  certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"]
};

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": site.name,
  "url": site.url,
  "logo": `${site.url}${site.logo}`,
  "description": "International commodity trading company specializing in refined petroleum products, precious metals, and minerals. Operating from Dubai and Kenya since 2014.",
  "foundingDate": "2014",
  "email": site.contacts.email,
  "telephone": site.contacts.phone,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": site.contacts.locations.kenya.phone,
      "contactType": "customer service",
      "areaServed": ["KE", "TZ", "UG", "RW", "ET"],
      "availableLanguage": ["English", "Swahili"],
      "description": "Africa Regional Office"
    },
    {
      "@type": "ContactPoint",
      "telephone": site.contacts.locations.dubai.phone,
      "contactType": "customer service",
      "areaServed": ["AE", "SA", "OM", "QA", "KW"],
      "availableLanguage": ["English", "Arabic"],
      "description": "Middle East Regional Office"
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, NHC Building, Aghakhan Walk",
      "addressLocality": "Nairobi",
      "postalCode": "00100",
      "postOfficeBoxNumber": "51100-00100",
      "addressCountry": "KE"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Business Center, Al Shmookh Bldg., UAQ Free Trade Zone",
      "addressLocality": "Umm Al Quwain",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commodity Trading Products",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Refined Petroleum Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gasoline (RON 92-95)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gas Oil (2500PPM-10PPM)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Fuel Oil (RMG 180/380)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Jet A-1 Fuel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bitumen (30/40-80/100)" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Precious Metals",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "High-Purity Gold Bars" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "High-Purity Silver Bars" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Minerals",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Cathodes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Copper Concentrate" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Aluminum Ingots" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Tanzanite" } }
        ]
      }
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Tanzania" },
    { "@type": "Country", "name": "Uganda" },
    { "@type": "Country", "name": "Rwanda" },
    { "@type": "Country", "name": "Ethiopia" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "Oman" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "Singapore" }
  ]
};

// LocalBusiness schema for Nairobi office
export const nairobiOfficeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Loop Energy Limited - Nairobi Office",
  "image": `${site.url}${site.logo}`,
  "url": site.url,
  "telephone": site.contacts.locations.kenya.phone,
  "email": site.contacts.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, NHC Building, Aghakhan Walk",
    "addressLocality": "Nairobi",
    "postalCode": "00100",
    "postOfficeBoxNumber": "51100-00100",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2864,
    "longitude": 36.8172
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$$$",
  "areaServed": ["Kenya", "East Africa"]
};

// LocalBusiness schema for Dubai office
export const dubaiOfficeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Loop Energy Limited - Dubai Office",
  "image": `${site.url}${site.logo}`,
  "url": site.url,
  "telephone": site.contacts.locations.dubai.phone,
  "email": site.contacts.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Business Center, Al Shmookh Bldg., UAQ Free Trade Zone",
    "addressLocality": "Umm Al Quwain",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "priceRange": "$$$$",
  "areaServed": ["United Arab Emirates", "Middle East"]
};

// WebSite schema for search functionality
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": site.name,
  "url": site.url,
  "description": "International commodity trading company specializing in refined petroleum products, precious metals, and minerals.",
  "publisher": {
    "@type": "Organization",
    "name": site.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${site.url}${site.logo}`
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${site.url}/products?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};



