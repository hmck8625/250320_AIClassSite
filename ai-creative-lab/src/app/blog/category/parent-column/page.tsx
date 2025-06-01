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
        {/* 記事1 - ChatGPT安全活用ガイド（新着） */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/chatgpt-kids-safety-guide.jpg"
              alt="ChatGPT子ども安全活用ガイド"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年1月6日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/chatgpt-safe-guide-for-kids" className="hover:text-primary">
                ChatGPT子ども安全活用ガイド：小学生の学習を変える正しい使い方【保護者必読】
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              文科省ガイドライン準拠。小学生がChatGPTを安全に学習活用するための保護者必読ガイド。年齢制限、安全設定、具体的活用法を解説。
            </p>
            <Link href="/blog/chatgpt-safe-guide-for-kids" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>

        {/* 記事2 - ロボティクス教室ガイド */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-robotics-education.jpg"
              alt="港区ロボティクス教室完全ガイド"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年1月1日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/minato-robotics-classrooms-guide" className="hover:text-primary">
                港区ロボティクス教室完全ガイド：選び方から料金まで徹底比較【2025年版】
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              港区のロボティクス教室を徹底比較！ヒューマンアカデミー、クレファス、LITALICOワンダーなど人気教室の料金・特徴・口コミを詳しく解説。
            </p>
            <Link href="/blog/minato-robotics-classrooms-guide" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-creativity-development.jpg"
              alt="港区で子どもの創造性を育む"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年6月1日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/minato-creativity-education-areas" className="hover:text-primary">
                港区で子どもの創造性を育む：麻布・青山・六本木エリア別教育ガイド
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              港区の麻布、青山、六本木エリアの教育環境を分析し、AI時代に必要な創造性を育む最適な学習環境の選び方を専門家が解説します。
            </p>
            <Link href="/blog/minato-creativity-education-areas" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-education-trends-2025.jpg"
              alt="年収1000万円世帯の教育投資戦略"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年6月1日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/high-income-education-investment-strategy" className="hover:text-primary">
                年収1000万円世帯の教育投資戦略：AI時代に向けた港区での選択肢
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              年収1000万円以上の港区世帯向けに、AI時代の教育投資戦略と費用対効果の高い教育選択肢を専門家が詳しく解説します。
            </p>
            <Link href="/blog/high-income-education-investment-strategy" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-creativity-development.jpg"
              alt="子どもの創造性を育む方法"
              fill
              className="object-cover"
            />
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
        
        {/* 記事5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-screen-time-balance.jpg"
              alt="デジタルとリアルのバランス"
              fill
              className="object-cover"
            />
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

        {/* 記事6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-family-learning.jpg"
              alt="AI時代の家族学習"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
              <span className="text-gray-500 text-xs">2025年1月20日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/ai-family-learning" className="hover:text-primary">
                家族で学ぶAI時代：親子で取り組む未来スキル習得法
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              AI時代に必要なスキルを家族全員で学ぶ方法を紹介します。
              親子で一緒に取り組める具体的なアクティビティと学習法を専門家が解説します。
            </p>
            <Link href="/blog/ai-family-learning" className="text-primary text-sm hover:underline">
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
