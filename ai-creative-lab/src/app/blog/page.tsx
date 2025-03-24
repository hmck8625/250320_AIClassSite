import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// ページごとの記事データの型定義
type ArticleData = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  image: string | null;
  slug: string;
};

// ページごとの記事データ
const pageData: { [key: number]: ArticleData[] } = {
  1: [
    {
      id: 1,
      title: "子ども向けAIツール5選：安全に使える創作支援ツール",
      excerpt: "子どもでも安全に使えるAIツールを厳選して紹介します。アート制作、作文サポート、音楽作曲など、創造力を育むツールばかりです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月10日",
      image: "/images/blog/EYE-ai-tools-for-kids.jpg",
      slug: "ai-tools-for-kids"
    },
    {
      id: 2,
      title: "子どもの創造性を育む5つの習慣：日常生活でできること",
      excerpt: "創造性は、これからの時代を生きる子どもたちにとって重要なスキルです。家庭で簡単に取り入れられる、創造性を育む習慣について解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年3月5日",
      image: "/images/blog/EYE-creativity-development.jpg",
      slug: "creativity-development"
    },
    {
      id: 4,
      title: "子ども向けプログラミング入門：AIを活用した学習法",
      excerpt: "プログラミング初心者の子どもでも楽しく学べるAI活用法を紹介。コードを書く前に概念を理解する新しいアプローチです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月5日",
      image: "/images/sample/top/image_engneer_icon.jpg",
      slug: "ai-programming-for-kids"
    },
    {
      id: 5,
      title: "2025年のAI教育トレンド：世界の最新事例から学ぶ",
      excerpt: "世界各国で進むAI教育の最新トレンドを紹介します。日本の教育現場にも取り入れられそうな先進的な事例を解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月15日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "ai-education-trends-2025"
    },
    {
      id: 6,
      title: "デジタルとリアルのバランス：子どものスクリーンタイムを考える",
      excerpt: "デジタルツールの活用とリアル体験のバランスをどう取るべきか。子どもの発達段階に合わせたスクリーンタイムの考え方を専門家が解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年2月10日",
      image: "/images/blog/EYE-screen-time-balance.jpg",
      slug: "screen-time-balance"
    },
    {
      id: 7,
      title: "AIアートで子どもの創造性を育む：デジタル時代の芸術教育",
      excerpt: "AIツールを使った芸術教育の可能性を探ります。子どもたちの創造性と技術的スキルを同時に伸ばす新しい学習アプローチを紹介します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月20日",
      image: "/images/blog/EYE-art.jpg",
      slug: "ai-art-education"
    },
    {
      id: 8,
      title: "家族で学ぶAI：親子で楽しむテクノロジー体験",
      excerpt: "AIを家族で学ぶことの意義と、楽しみながら学べる具体的な方法を紹介。テクノロジーを通じて家族の絆を深める新しい学習スタイルです。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年3月18日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "ai-family-learning"
    },
    {
      id: 9,
      title: "AIと音楽創作：子どもの音楽的想像力を解き放つ",
      excerpt: "AIツールを使った音楽創作の可能性を探ります。子どもたちが自由に音楽を生み出す新しい学習方法を紹介します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月16日",
      image: "/images/blog/EYE-music.jpg",
      slug: "ai-music-creation"
    },
    {
      id: 10,
      title: "港区の創造性教育：地域で育むAI時代の学び",
      excerpt: "港区における先進的な創造性教育の取り組みを紹介。地域全体で子どもたちの未来を支える教育モデルを解説します。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2025年3月17日",
      image: "/images/blog/EYE-programing.jpg",
      slug: "minatoku-creativity-education"
    },
    {
      id: 11,
      title: "港区のAI教育最前線：未来を見据えた学びの革新",
      excerpt: "港区における最新のAI教育の取り組みと、子どもたちの学びを変革する革新的なアプローチを詳しく解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月19日",
      image: "/images/blog/EYE-game.jpg",
      slug: "minatoku-education"
    },
    {
      id: 12,
      title: "子どもの絵画教室選びガイド",
      excerpt: "港区周辺の子ども向け絵画教室の比較や選び方、年齢別の才能開発法、家庭でできる創造性育成のポイントまで。子どもの芸術的才能を見つけ、伸ばすための総合ガイド",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-art.jpg",
      slug: "how-to-choice-minatokuArtClass"
    },
    {
      id: 13,
      title: "子どものための音楽教育入門",
      excerpt: "港区周辺の子ども向け音楽教室の比較や選び方、家庭でできる音感育成法、AIを活用した音楽創作まで。子どもの音楽的才能を見つけ、伸ばすための総合ガイド",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-music.jpg",
      slug: "intro-musicClass"
    },
    {
      id: 14,
      title: "AI時代の子育てと教育",
      excerpt: "AIが急速に発展する現代社会で、子どもたちに必要な力とは？港区の先進的な教育・子育て支援の取り組み事例と、家庭でできるAIリテラシー教育のポイントを解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-ai-tools-for-kids.jpg",
      slug: "ai-era-education"
    },
    {
      id: 15,
      title: "港区のプログラミング教室選び完全ガイド",
      excerpt: "港区周辺の子ども向けプログラミング教室の比較や選び方、年齢別の学習法、家庭でできるプログラミング教育まで。子どものIT才能を見つけ、伸ばすための総合ガイド。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-programing.jpg",
      slug: "how-to-choice-minatokuProgramingClass"
    },
    {
      id: 16,
      title: "港区の子供向け習い事完全ガイド",
      excerpt: "港区周辺の子ども向け習い事の比較や選び方、年齢別のおすすめ習い事、子どもの才能を伸ばすポイントまで。子どもの可能性を広げる習い事選びの総合ガイド。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-ai-tools-for-kids.jpg",
      slug: "how-to-choice-minatokuHobbies"
    }
  ],
  2: [],
  3: []
};

// 特集記事データの型定義
type FeaturedArticle = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
};

// 特集記事データ
const featuredArticle: FeaturedArticle = {
  title: "AI時代の教育とは？子どもたちに必要な力と親ができるサポート",
  excerpt: "AIの急速な発展により、子どもたちが将来必要とするスキルも変化しています。本記事では、AI時代に子どもたちが身につけるべき能力と、それを育むために家庭でできるサポート方法について解説します。",
  date: "2025年3月15日",
  image: "/images/blog/EYE-ai-education-future.jpg",
  slug: "ai-education-future"
};

export default function BlogPage(props: any) {
 
  const searchParams = props.searchParams || {};
  const pageParam = searchParams.page;
  const currentPage = pageParam ? parseInt(pageParam as string) : 1;

  // 現在のページの記事データを取得
  const currentArticles = pageData[currentPage] || pageData[1];

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
        <Link href="/blog" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">すべて</Link>
        <Link href="/blog/category/ai-education" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">AI教育最新情報</Link>
        <Link href="/blog/category/parent-column" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">保護者向けコラム</Link>
        <Link href="/blog/category/classroom-report" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">教室活動レポート</Link>
        <Link href="/blog/category/student-interview" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">生徒インタビュー</Link>
        <Link href="/blog/category/event-info" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium">イベント情報</Link>
      </div>
      
      {/* メイン記事とサイドバー */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* メイン記事エリア */}
        <div className="lg:col-span-2">
          {/* 特集記事（ページ1のみ表示） */}
          {currentPage === 1 && (
            <div className="mb-12">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-80 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-2">特集</span>
                    <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    <Link href={`/blog/${featuredArticle.slug}`} className="hover:text-primary">
                      {featuredArticle.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <Button variant="outline">
                    <Link href={`/blog/${featuredArticle.slug}`}>続きを読む</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* 記事一覧 */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 relative">
                  {article.image ? (
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">記事画像</p>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className={`bg-${article.categoryColor}-100 text-${article.categoryColor}-800 text-xs px-2 py-1 rounded mr-2`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    <Link href={`/blog/${article.slug}`} className="hover:text-primary">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.slug}`} className="text-primary text-sm hover:underline">
                    続きを読む →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* ページネーション */}
          <div className="flex justify-center mt-10">
            <nav className="inline-flex">
              <Link 
                href="/blog?page=1" 
                className={`px-3 py-2 border rounded-l-md ${currentPage === 1 ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                1
              </Link>
              <Link 
                href="/blog?page=2" 
                className={`px-3 py-2 border-t border-b border-r ${currentPage === 2 ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                2
              </Link>
              <Link 
                href="/blog?page=3" 
                className={`px-3 py-2 border-t border-b border-r ${currentPage === 3 ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                3
              </Link>
              <Link 
                href={`/blog?page=${Math.min(currentPage + 1, 3)}`} 
                className="px-3 py-2 border-t border-b border-r rounded-r-md text-gray-700 hover:bg-gray-100"
              >
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
                <Link href="/blog/category/parent-column" className="flex justify-between hover:text-primary">
                  <span>保護者向けコラム</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">8</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/classroom-report" className="flex justify-between hover:text-primary">
                  <span>教室活動レポート</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">15</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/student-interview" className="flex justify-between hover:text-primary">
                  <span>生徒インタビュー</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">6</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/category/event-info" className="flex justify-between hover:text-primary">
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
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image 
                    src="/images/blog/EYE-ai-education-future.jpg"
                    alt="AI時代の教育"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <Link href="/blog/ai-education-future" className="text-sm font-medium hover:text-primary">
                    AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月15日</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image 
                    src="/images/blog/EYE-creativity-development.jpg"
                    alt="子どもの創造性を育む"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <Link href="/blog/creativity-development" className="text-sm font-medium hover:text-primary">
                    子どもの創造性を育む5つの習慣：日常生活でできること
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月5日</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image 
                    src="/images/blog/EYE-ai-tools-for-kids.jpg"
                    alt="子ども向けAIツール"
                    fill
                    className="object-cover rounded"
                  />
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
