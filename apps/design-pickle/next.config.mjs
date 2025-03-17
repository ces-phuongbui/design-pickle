/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "motivated-health-e41c7505c5.media.strapiapp.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@ui-assets"] = path.resolve(
      "../../packages/ui/src/assets",
    );
    return config;
  },
};

export default nextConfig;
