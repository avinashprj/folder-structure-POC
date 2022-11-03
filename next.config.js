/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['www.ag-grid.com'],
  },
};

module.exports = nextConfig;
