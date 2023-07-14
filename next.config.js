/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: false,
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
