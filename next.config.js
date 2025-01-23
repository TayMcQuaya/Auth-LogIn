/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Auth-LogIn',
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig 