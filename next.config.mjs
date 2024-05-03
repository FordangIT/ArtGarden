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
        pathname: "**"
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/backend",
          destination: "https://artgarden.site"
        },
        {
          source: "/backend/:path*",
          destination: "https://artgarden.site/:path*"
        },
        {
          source: "/frontend",
          destination: "http://localhost:3060"
        },
        {
          source: "/frontend/:path*",
          destination: "http://localhost:3060/:path*"
        }
      ]
    };
  }
};

export default nextConfig;
