import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ship the private ebook files with the download route when deploying.
  outputFileTracingIncludes: {
    "/api/download/[id]": ["./storage/ebooks/**/*"],
  },
};

export default nextConfig;
