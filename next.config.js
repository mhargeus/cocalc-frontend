/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = nextConfig
