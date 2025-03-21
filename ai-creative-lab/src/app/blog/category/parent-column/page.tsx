import Link from 'next/link';
import Image from 'next/image';

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">カテゴリー: 保護者向けコラム</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          子どもの創造性を育むヒントや家庭でのサポート方法をお届けします
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
        
        {/* 記事3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">記事画像</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年1月10日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/nurturing-curiosity" className="hover:text-primary">
                子どもの好奇心を育てる質問の仕方
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              子どもの「なぜ？」に対する答え方で、好奇心や探究心は大きく変わります。
              AI時代に必要な思考力を育む会話術を解説します。
            </p>
            <Link href="/blog/nurturing-curiosity" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
      </div>
      
      {/* ページネーション */}
      <div className="flex justify-center mt-10">
        <nav className="inline-flex">
          <a href="#" className="px-3 py-2 border rounded-l-md bg-primary text-white">1</a>
          <a href="#" className="px-3 py-2 border-t border-b border-r text-gray-700 hover:bg-gray-100">2</a>
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
