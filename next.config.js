/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kmust.edu.cn',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'img0.baidu.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}


module.exports = nextConfig
