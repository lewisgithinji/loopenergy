/** @type {import('next').NextConfig} */
const nextConfig = {
  // You’re generating a fully static site (good for Netlify)
  output: 'export',

  // Because you link to routes with/without trailing slash, keep this on
  trailingSlash: true,

  // In `export` mode, Next/Image can’t optimize at build time.
  // `unoptimized: true` tells it to emit a plain <img>, so remote images still work.
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com', // remove if you switch to a local /public/hero.jpg
      'loopenergy.co.ke',
    ],
  },

  // Keep build smooth while you iterate (consider turning these off later)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  reactStrictMode: true,

  // Optional: smaller bundles when importing from these libs
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
