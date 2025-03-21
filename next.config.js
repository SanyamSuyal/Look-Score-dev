/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-backend-domain.com', 'randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
  // Define the directory where your application code is located
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 