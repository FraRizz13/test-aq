import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@import './src/styles/core';`,
    logger: {
      warn: () => {},
    },
  },
}

export default nextConfig
