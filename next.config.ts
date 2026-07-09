import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/certificates/youth-work/Q7747",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
