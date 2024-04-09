/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.kopis.or.kr",
        pathname: "**",
      },
    ],
  },
  env: {
    KOPIS_URL: process.env.KOPIS_URL,
    KOPIS_KEY: process.env.KOPIS_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

export default nextConfig;
