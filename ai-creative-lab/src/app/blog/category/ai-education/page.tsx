import Link from 'next/link';
import Image from 'next/image';

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">カテゴリー: AI教育最新情報</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI教育に関する最新トレンドや情報をお届けします
        </p>
      </div>
      
      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* 記事1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-education-future.jpg"
              alt="港区インターナショナルスクール生の保護者が注目するAI教育トレンド"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
              <span className="text-gray-500 text-xs">2025年6月1日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/international-school-ai-education" className="hover:text-primary">
                港区インターナショナルスクール生の保護者が注目するAI教育トレンド
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              港区のインターナショナルスクール環境でのAI教育の最新動向と、グローバル人材育成のための創造的AI学習アプローチを専門家が解説します。
            </p>
            <Link href="/blog/international-school-ai-education" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-education-future.jpg"
              alt="AI時代の教育とは？"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
              <span className="text-gray-500 text-xs">2025年3月15日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/ai-education-future" className="hover:text-primary">
                AI時代の教育とは？子どもたちに必要な力と親ができるサポート
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              AIの急速な発展により、子どもたちが将来必要とするスキルも変化しています。
              本記事では、AI時代に子どもたちが身につけるべき能力と、
              それを育むために家庭でできるサポート方法について解説します。
            </p>
            <Link href="/blog/ai-education-future" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-tools-for-kids.jpg"
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
        
        {/* 記事4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-education-trends-2025.jpg"
              alt="2025年のAI教育トレンド"
              fill
              className="object-cover"
            />
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

        {/* 記事5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-programing.jpg"
              alt="AI時代のプログラミング教育"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
              <span className="text-gray-500 text-xs">2025年1月25日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/ai-programming-for-kids" className="hover:text-primary">
                AI時代のプログラミング教育：子どもに本当に必要なスキルとは？
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              AI時代に子どもたちが身につけるべきプログラミングスキルについて詳しく解説します。
              従来のプログラミング教育とどこが違うのか、専門家の視点から解説します。
            </p>
            <Link href="/blog/ai-programming-for-kids" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>

        {/* 記事6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-education-current-state.jpg"
              alt="AI教育の現状分析"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
              <span className="text-gray-500 text-xs">2025年1月10日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/ai-education-current-state" className="hover:text-primary">
                AI教育の現状分析：日本と世界の取り組み比較
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              日本国内のAI教育の現状を世界各国の取り組みと比較分析します。
              今後の展望と課題について専門家の視点から詳しく解説します。
            </p>
            <Link href="/blog/ai-education-current-state" className="text-primary text-sm hover:underline">
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
