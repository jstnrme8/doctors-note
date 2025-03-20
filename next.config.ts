import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com'
      },
      {
        protocol: 'https',
        hostname: 'mydoctorsnote.co'
      }
    ],
  },
}

export default nextConfig
