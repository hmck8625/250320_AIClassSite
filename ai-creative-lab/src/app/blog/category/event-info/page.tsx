import Link from 'next/link';

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">カテゴリー: イベント情報</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          当教室で開催予定のワークショップや特別講座の情報をお届けします
        </p>
      </div>
      
      {/* 工事中メッセージ */}
      <div className="text-center py-16">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">🚧 コンテンツ準備中 🚧</h2>
          <p className="text-orange-700 mb-4">
            イベント情報カテゴリのコンテンツを準備中です。<br />
            最新のワークショップや特別講座の情報は、近日中に公開予定です。
          </p>
          <p className="text-sm text-orange-600">
            最新情報については、<Link href="/contact" className="text-primary hover:underline">お問い合わせページ</Link>からお気軽にご連絡ください。
          </p>
        </div>
      </div>

      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 hidden">
        {/* 記事1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">記事画像</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">イベント情報</span>
              <span className="text-gray-500 text-xs">2025年1月25日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/spring-music-workshop" className="hover:text-primary">
                春の特別講座「AIと音楽」参加者募集中
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              春休み期間中に開催する特別講座のご案内。
              AIを使った作曲体験ができる人気講座です。初心者でも安心して参加できます。
            </p>
            <Link href="/blog/spring-music-workshop" className="text-primary text-sm hover:underline">
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
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">イベント情報</span>
              <span className="text-gray-500 text-xs">2024年12月5日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/new-year-workshop-announcement" className="hover:text-primary">
                新年特別ワークショップのお知らせ
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              1月に開催する新年特別ワークショップの詳細をお知らせします。
              今回は「AIと未来の職業」をテーマに開催します。
            </p>
            <Link href="/blog/new-year-workshop-announcement" className="text-primary text-sm hover:underline">
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
