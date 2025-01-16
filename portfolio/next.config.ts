import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/common/i18n/request.ts');

const sassOptions = {
    additionalData: `
    $var: red;
  `,
}

const experimental = {
    optimizePackageImports: [
        'framer-motion',
        '@gsap/react',
        'gsap',
        '@radix-ui/themes'
    ],
    serverActions: {
        allowedOrigins: []
    }
}

const compiler = {}

const onDemandEntries = {}

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
    output: 'export'
    // i18n: {
    //     locales: ['en', 'vi'],
    //     defaultLocale: 'en',
    // },
}

export default withNextIntl(nextConfig);
