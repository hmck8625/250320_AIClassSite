import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 静的サイト生成に変更
  images: {
    domains: ['localhost', 'tokyo-ai-classschool.netlify.app'],
    unoptimized: true, // Netlifyでの静的サイトのため無効化を維持
    formats: ['image/webp', 'image/avif'], // 次世代フォーマット対応
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // スマホサイズ追加
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // アイコンサイズ
  },
  // レスポンシブ最適化は一旦無効化
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
