import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // SSRモードを有効化
  images: {
    domains: ['localhost', 'tokyo-ai-classschool.com'], // 必要に応じてドメインを追加
    // 画像最適化を有効化し、WebP形式を優先
    formats: ['image/webp'],
    // ブラウザのサポート状況に応じてフォールバック
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
