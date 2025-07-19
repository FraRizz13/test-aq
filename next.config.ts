import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@import './src/styles/core';`,
    logger: {
      warn: () => {},
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

export default nextConfig
