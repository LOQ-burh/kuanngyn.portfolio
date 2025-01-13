import type { NextConfig } from "next";

const sassOptions = {
  additionalData: `
    $var: red;
  `,
}

const nextConfig: NextConfig = {
  sassOptions: {
    ...sassOptions,
    implementation: 'sass-embedded',
  },
  compiler: {
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  onDemandEntries: {
    maxInactiveAge: 30 * 1000, 
    pagesBufferLength: 5, 
  },
  experimental: {
    // reactCompiler: true,
    optimizeCss: true,
    optimizePackageImports: [
        'framer-motion',
        '@gsap/react',
        'gsap'
    ],
    scrollRestoration: true,
  },
  output: 'export',
}

export default nextConfig;
