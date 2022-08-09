/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
