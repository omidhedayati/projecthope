import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/audio/ivress/:path*",
        destination: "https://brand.ivress.co.jp/audio/:path*",
      },
    ];
  },
};

export default nextConfig;
