import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlifyでのデプロイに最適化
  output: "export", // 静的エクスポートを有効化
  images: {
    unoptimized: true, // Netlifyでの画像最適化を無効化（Netlifyの独自最適化を使用）
  },
  // 必要に応じて他の設定を追加
};

export default nextConfig;
