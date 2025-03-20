import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">作品ギャラリー</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI創造ラボの生徒たちが制作した作品を紹介します
        </p>
      </div>
      
      {/* ギャラリーフィルター */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">すべて</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">AIアート</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">ゲーム</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">音楽</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">アプリ</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">ロボティクス</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">映像</button>
      </div>
      
      {/* 作品ギャラリー */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* 作品1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/sample/parakeets-9190236_1280.jpg"
              alt="AIが描く未来の街"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">AIが描く未来の街</h3>
                <p className="text-gray-600 text-sm">小学5年生 / AIアート</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AIアート</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを使って、自分が想像する未来の街並みを描きました。
              環境に優しい建物や空飛ぶ車など、自分のアイデアを形にしています。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
        
        {/* 作品2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">作品画像</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">宇宙探検ゲーム</h3>
                <p className="text-gray-600 text-sm">中学2年生 / ゲーム</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ゲーム</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを活用してキャラクターや背景を作成し、宇宙を探検するゲームを開発しました。
              惑星ごとに異なるミッションがあり、クリアしていく冒険ゲームです。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
        
        {/* 作品3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">作品画像</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">AIと作った交響曲</h3>
                <p className="text-gray-600 text-sm">小学6年生 / 音楽</p>
              </div>
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">音楽</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを使って自分のメロディーを発展させ、短い交響曲を作曲しました。
              四季をテーマにした4つの楽章からなる作品です。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
        
        {/* 作品4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">作品画像</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">植物観察アプリ</h3>
                <p className="text-gray-600 text-sm">高校1年生 / アプリ</p>
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">アプリ</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを活用した植物識別機能を持つ観察記録アプリを開発しました。
              写真を撮るだけで植物の名前や特徴を教えてくれる便利なツールです。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
        
        {/* 作品5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">作品画像</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">お手伝いロボット</h3>
                <p className="text-gray-600 text-sm">中学3年生 / ロボティクス</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">ロボティクス</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを搭載した小型ロボットを開発しました。
              簡単な音声指示に反応して、物を運んだり、メッセージを伝えたりする機能を実装しています。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
        
        {/* 作品6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-64 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">作品画像</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">AIアニメーション</h3>
                <p className="text-gray-600 text-sm">高校2年生 / 映像</p>
              </div>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">映像</span>
            </div>
            <p className="text-gray-700 mb-4">
              AIを活用して短編アニメーションを制作しました。
              自分で書いたストーリーをもとに、キャラクターデザインから動きまでAIと協力して作り上げています。
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              準備中
            </Button>
          </div>
        </div>
      </div>
      
      
      {/* CTA */}
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">あなたのお子様も創作の喜びを体験してみませんか？</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          AI創造ラボでは、お子様の興味や適性に合わせたコースをご用意しています。
          まずは無料体験会にお越しください。
        </p>
        <Button size="lg" className="bg-primary">
          <Link href="/contact">お問い合わせ</Link>
        </Button>
      </div>
    </div>
  );
}
