/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
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
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        pathname: "**"
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/clientside/:path*",
          destination: "https://artgarden.site/:path*"
        },
        {
          source: "/client",
          destination: "https://artgarden.site"
        }
      ]
    };
  }
};

export default nextConfig;
