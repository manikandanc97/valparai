import type { NextConfig } from "next";
import createWithVercelToolbar from '@vercel/toolbar/plugins/next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

const withVercelToolbar = createWithVercelToolbar();

export default withVercelToolbar(nextConfig);
