import Link from 'next/link';

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">カテゴリー: 生徒インタビュー</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          当教室に通う生徒たちの成長ストーリーや作品をご紹介します
        </p>
      </div>
      
      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* 記事1 */}
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
        
        {/* 記事2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">記事画像</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">生徒インタビュー</span>
              <span className="text-gray-500 text-xs">2024年12月25日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/student-interview-mika" className="hover:text-primary">
                生徒インタビュー：高校生ミカさんのAIアート作品集
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              AIアートコースに通う高校生ミカさんの作品と創作プロセスを紹介。
              彼女がAIをどう活用して独自の表現を見つけたかを語ります。
            </p>
            <Link href="/blog/student-interview-mika" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
      </div>
      
      {/* ページネーション */}
      <div className="flex justify-center mt-10">
        <nav className="inline-flex">
          <a href="#" className="px-3 py-2 border rounded-l-md bg-primary text-white">1</a>
          <a href="#" className="px-3 py-2 border-t border-b border-r rounded-r-md text-gray-700 hover:bg-gray-100">
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
