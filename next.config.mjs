/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["www.kopis.or.kr"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.kopis.or.kr",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "www.culture.go.kr",
        pathname: "**"
      }
    ]
  }
};

export default nextConfig;
