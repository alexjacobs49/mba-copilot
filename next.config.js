/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow larger file uploads (2GB limit)
  experimental: {
    serverActions: {
      bodySizeLimit: '2gb',
    },
  },
};

module.exports = nextConfig;
