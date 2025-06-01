import Link from 'next/link';
import Image from 'next/image';

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">カテゴリー: 教室活動レポート</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          当教室で行われたワークショップや特別イベントの様子をお届けします
        </p>
      </div>
      
      {/* 記事一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* 記事1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-creativity-development.jpg"
              alt="冬休み特別ワークショップレポート"
              fill
              className="object-cover"
            />
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
        
        {/* 記事2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-art.jpg"
              alt="生徒作品展示会レポート"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
              <span className="text-gray-500 text-xs">2025年1月15日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/student-exhibition-report" className="hover:text-primary">
                生徒作品展示会レポート：AIと人間の共創
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              先月開催した生徒作品展示会の様子をお届けします。
              AIツールを活用した作品の数々に、来場者からも驚きの声が上がりました。
            </p>
            <Link href="/blog/student-exhibition-report" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>
        
        {/* 記事3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-game.jpg"
              alt="クリスマスイベントレポート"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
              <span className="text-gray-500 text-xs">2024年12月15日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/christmas-event-report" className="hover:text-primary">
                クリスマスイベントレポート：AIサンタと未来のおもちゃ工房
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              先週開催したクリスマス特別イベントの様子をレポート。
              子どもたちがAIと一緒に未来のおもちゃをデザインしました。
            </p>
            <Link href="/blog/christmas-event-report" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>

        {/* 記事4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-music.jpg"
              alt="AI音楽創作ワークショップ"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
              <span className="text-gray-500 text-xs">2024年11月20日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/ai-music-workshop-report" className="hover:text-primary">
                AI音楽創作ワークショップレポート：子どもたちが作った未来の楽曲
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              AI音楽創作ワークショップで子どもたちが作り上げた素晴らしい楽曲の数々をご紹介します。
              創作過程での発見や学びについて詳しくレポートします。
            </p>
            <Link href="/blog/ai-music-workshop-report" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>

        {/* 記事5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-programing.jpg"
              alt="プログラミング発表会"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
              <span className="text-gray-500 text-xs">2024年10月15日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/programming-presentation-report" className="hover:text-primary">
                プログラミング発表会レポート：生徒たちの創造力が生み出したアプリ作品
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              四半期ごとに開催されるプログラミング発表会の様子をお届けします。
              生徒たちの創造力とプログラミングスキルが融合した素晴らしい作品の数々をご紹介します。
            </p>
            <Link href="/blog/programming-presentation-report" className="text-primary text-sm hover:underline">
              続きを読む →
            </Link>
          </div>
        </div>

        {/* 記事6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 relative overflow-hidden">
            <Image 
              src="/images/blog/EYE-ai-art-education.jpg"
              alt="夏休みAIアート教室"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
              <span className="text-gray-500 text-xs">2024年9月1日</span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              <Link href="/blog/summer-ai-art-workshop" className="hover:text-primary">
                夏休みAIアート教室レポート：デジタル×アナログで生まれた新しい表現
              </Link>
            </h3>
            <p className="text-gray-700 text-sm mb-3 line-clamp-3">
              夏休み期間中に開催したAIアート教室の様子を詳しくレポートします。
              デジタルとアナログを組み合わせた新しい芸術表現に挑戦する子どもたちの姿をお届けします。
            </p>
            <Link href="/blog/summer-ai-art-workshop" className="text-primary text-sm hover:underline">
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
