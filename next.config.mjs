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
    console.log("rewrites 함수 입장");
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
