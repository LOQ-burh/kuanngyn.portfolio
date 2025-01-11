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
  reactStrictMode: true,
}

export default nextConfig;
