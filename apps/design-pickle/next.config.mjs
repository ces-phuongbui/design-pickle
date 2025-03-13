/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  transpilePackages: ["@repo/ui"],
  webpack: (config) => {
    config.resolve.alias["@ui-assets"] = path.resolve(
      "../../packages/ui/src/assets",
    );
    return config;
  },
};

export default nextConfig;
