import type { NextConfig } from "next";

const sassOptions = {
  additionalData: `
    $var: red;
  `,
}

const experimental = {
    optimizePackageImports: [
        'framer-motion',
        '@gsap/react',
        'gsap'
    ],
    serverActions: {
        allowedOrigins: []
    }
}

const compiler = { }

const onDemandEntries = { }

const nextConfig: NextConfig = {
  cleanDistDir: true,
  sassOptions: {
    ...sassOptions,
    implementation: 'sass-embedded',
  },
  compiler: {
    ...compiler,
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
  onDemandEntries: {
    ...onDemandEntries,
    maxInactiveAge: 30 * 1000, 
    pagesBufferLength: 5, 
  },
  experimental: {
    ...experimental,
    authInterrupts: true,
    inlineCss: true,
    optimizeCss: true,
    optimizeServerReact: true,
    scrollRestoration: true,
    nextScriptWorkers: true,
    parallelServerCompiles: true,
    parallelServerBuildTraces: true,
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true
  },
  i18n: {
      defaultLocale: 'en-US',
      locales: ['en-US', 'vi']
  },
//   output: 'export',
}

export default nextConfig;
