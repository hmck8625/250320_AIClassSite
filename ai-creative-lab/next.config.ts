import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // SSRモードを有効化
  images: {
    domains: ['localhost', 'tokyo-ai-classschool.netlify.app'], // 必要に応じてドメインを追加
    unoptimized: true, // 画像最適化を無効化
  },
};

export default nextConfig;
