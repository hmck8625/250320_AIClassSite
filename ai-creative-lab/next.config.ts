import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // SSRモードを有効化
  images: {
    domains: ['localhost', 'tokyo-ai-classschool.netlify.app'], // 必要に応じてドメインを追加
    unoptimized: false, // 画像最適化を有効化
  },
};

export default nextConfig;
