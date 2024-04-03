/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.kopis.or.kr"],
  },
  env: {
    KOPIS_URL: process.env.KOPIS_URL,
    KOPIS_KEY: process.env.KOPIS_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

export default nextConfig;
