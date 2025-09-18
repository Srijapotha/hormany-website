import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //  ensures Next.js treats your harmony-website folder as the root
  outputFileTracingRoot: __dirname,

  // optional but good practice
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all external images
      },
    ],
  },

  theme: {
  extend: {
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
      unbounded: ["var(--font-unbounded)", "sans-serif"],
    },
  },
},


  //  enables some experimental optimizations (optional)
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@radix-ui", "lucide-react"],
  },
};

export default nextConfig;
