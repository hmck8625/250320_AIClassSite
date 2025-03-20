import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ブログ/教育コラム</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI教育に関する最新情報や子どもの創造性を育むヒントをお届けします
        </p>
      </div>
      
      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">すべて</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">AI教育最新情報</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">保護者向けコラム</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">教室活動レポート</button>
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">生徒インタビュー</button>
      </div>
      
      {/* メイン記事とサイドバー */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* メイン記事エリア */}
        <div className="lg:col-span-2">
          {/* 特集記事 */}
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-80 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/images/sample/parakeets-9190236_1280.jpg"
                  alt="AI時代の教育とは？"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-2">特集</span>
                  <span className="text-gray-500 text-sm">2025年3月15日</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  <Link href="/blog/ai-education-future" className="hover:text-primary">
                    AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                  </Link>
                </h2>
                <p className="text-gray-700 mb-4">
                  AIの急速な発展により、子どもたちが将来必要とするスキルも変化しています。
                  本記事では、AI時代に子どもたちが身につけるべき能力と、
                  それを育むために家庭でできるサポート方法について解説します。
                </p>
                <Button variant="outline">
                  <Link href="/blog/ai-education-future">続きを読む</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* 記事一覧 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 記事1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/images/sample/parakeets-9190236_1280.jpg"
                  alt="子ども向けAIツール5選"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
                  <span className="text-gray-500 text-xs">2025年3月10日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/ai-tools-for-kids" className="hover:text-primary">
                    子ども向けAIツール5選：安全に使える創作支援ツール
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  子どもでも安全に使えるAIツールを厳選して紹介します。
                  アート制作、作文サポート、音楽作曲など、創造力を育むツールばかりです。
                </p>
                <Link href="/blog/ai-tools-for-kids" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* 記事2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">記事画像</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
                  <span className="text-gray-500 text-xs">2025年3月5日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/creativity-development" className="hover:text-primary">
                    子どもの創造性を育む5つの習慣：日常生活でできること
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  創造性は、これからの時代を生きる子どもたちにとって重要なスキルです。
                  家庭で簡単に取り入れられる、創造性を育む習慣について解説します。
                </p>
                <Link href="/blog/creativity-development" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* 記事3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">記事画像</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
                  <span className="text-gray-500 text-xs">2025年2月28日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/winter-workshop-report" className="hover:text-primary">
                    冬休み特別ワークショップレポート：AIで作る未来の街
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  冬休みに開催した特別ワークショップの様子をレポートします。
                  子どもたちがAIを使って描いた「未来の街」の作品をご紹介します。
                </p>
                <Link href="/blog/winter-workshop-report" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* 記事4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">記事画像</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">生徒インタビュー</span>
                  <span className="text-gray-500 text-xs">2025年2月20日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/student-interview-yuki" className="hover:text-primary">
                    生徒インタビュー：中学2年生ユウキくんの成長ストーリー
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  AIゲームクリエイターコースに通うユウキくんにインタビュー。
                  プログラミングが苦手だった彼が、AIを活用してゲーム開発に目覚めるまでの道のり。
                </p>
                <Link href="/blog/student-interview-yuki" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* 記事5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">記事画像</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
                  <span className="text-gray-500 text-xs">2025年2月15日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/ai-education-trends-2025" className="hover:text-primary">
                    2025年のAI教育トレンド：世界の最新事例から学ぶ
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  世界各国で進むAI教育の最新トレンドを紹介します。
                  日本の教育現場にも取り入れられそうな先進的な事例を解説します。
                </p>
                <Link href="/blog/ai-education-trends-2025" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
            
            {/* 記事6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">記事画像</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
                  <span className="text-gray-500 text-xs">2025年2月10日</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blog/screen-time-balance" className="hover:text-primary">
                    デジタルとリアルのバランス：子どものスクリーンタイムを考える
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  デジタルツールの活用とリアル体験のバランスをどう取るべきか。
                  子どもの発達段階に合わせたスクリーンタイムの考え方を専門家が解説します。
                </p>
                <Link href="/blog/screen-time-balance" className="text-primary text-sm hover:underline">
                  続きを読む →
                </Link>
              </div>
            </div>
          </div>
          
          {/* ページネーション */}
          <div className="flex justify-center mt-10">
            <nav className="inline-flex">
              <Link href="/blog?page=1" className="px-3 py-2 border rounded-l-md bg-primary text-white">1</Link>
              <Link href="/blog?page=2" className="px-3 py-2 border-t border-b border-r text-gray-700 hover:bg-gray-100">2</Link>
              <Link href="/blog?page=3" className="px-3 py-2 border-t border-b border-r text-gray-700 hover:bg-gray-100">3</Link>
              <Link href="/blog?page=2" className="px-3 py-2 border-t border-b border-r rounded-r-md text-gray-700 hover:bg-gray-100">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
        
        {/* サイドバー */}
        <div>
          
          {/* カテゴリー一覧 */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-bold mb-3">カテゴリー</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/category/ai-education" className="flex justify-between hover:text-primary">
                  <span>AI教育最新情報</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">12</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/ai-education" className="flex justify-between hover:text-primary">
                  <span>保護者向けコラム</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">8</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/ai-education" className="flex justify-between hover:text-primary">
                  <span>教室活動レポート</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">15</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/ai-education" className="flex justify-between hover:text-primary">
                  <span>生徒インタビュー</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">6</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/ai-education" className="flex justify-between hover:text-primary">
                  <span>イベント情報</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">4</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 人気記事 */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="text-lg font-bold mb-3">人気記事</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <p className="text-gray-500 text-xs">画像</p>
                </div>
                <div>
                  <Link href="/blog/ai-education-future" className="text-sm font-medium hover:text-primary">
                    AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月15日</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <p className="text-gray-500 text-xs">画像</p>
                </div>
                <div>
                  <Link href="/blog/creativity-development" className="text-sm font-medium hover:text-primary">
                    子どもの創造性を育む5つの習慣：日常生活でできること
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月5日</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <p className="text-gray-500 text-xs">画像</p>
                </div>
                <div>
                  <Link href="/blog/ai-tools-for-kids" className="text-sm font-medium hover:text-primary">
                    子ども向けAIツール5選：安全に使える創作支援ツール
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月10日</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* LINE登録CTA */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="text-lg font-bold mb-2">最新情報をLINEでお届け</h3>
            <p className="text-sm mb-4">
              AI教育に関する情報や体験会の案内をLINEでお届けします。
            </p>
            <Button className="bg-green-500 hover:bg-green-600 w-full">
              <Link href="https://lin.ee/yourlineurl" target="_blank">LINE登録はこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
