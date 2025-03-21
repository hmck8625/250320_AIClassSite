import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


// ページごとの記事データ
const pageData = {
  1: [
    {
      id: 1,
      title: "子ども向けAIツール5選：安全に使える創作支援ツール",
      excerpt: "子どもでも安全に使えるAIツールを厳選して紹介します。アート制作、作文サポート、音楽作曲など、創造力を育むツールばかりです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月10日",
      image: "/images/sample/parakeets-9190236_1280.jpg",
      slug: "ai-tools-for-kids"
    },
    {
      id: 2,
      title: "子どもの創造性を育む5つの習慣：日常生活でできること",
      excerpt: "創造性は、これからの時代を生きる子どもたちにとって重要なスキルです。家庭で簡単に取り入れられる、創造性を育む習慣について解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年3月5日",
      image: null,
      slug: "creativity-development"
    },
    {
      id: 3,
      title: "冬休み特別ワークショップレポート：AIで作る未来の街",
      excerpt: "冬休みに開催した特別ワークショップの様子をレポートします。子どもたちがAIを使って描いた「未来の街」の作品をご紹介します。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2025年2月28日",
      image: null,
      slug: "winter-workshop-report"
    },
    {
      id: 4,
      title: "生徒インタビュー：中学2年生ユウキくんの成長ストーリー",
      excerpt: "AIゲームクリエイターコースに通うユウキくんにインタビュー。プログラミングが苦手だった彼が、AIを活用してゲーム開発に目覚めるまでの道のり。",
      category: "生徒インタビュー",
      categoryColor: "purple",
      date: "2025年2月20日",
      image: null,
      slug: "student-interview-yuki"
    },
    {
      id: 5,
      title: "2025年のAI教育トレンド：世界の最新事例から学ぶ",
      excerpt: "世界各国で進むAI教育の最新トレンドを紹介します。日本の教育現場にも取り入れられそうな先進的な事例を解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月15日",
      image: null,
      slug: "ai-education-trends-2025"
    },
    {
      id: 6,
      title: "デジタルとリアルのバランス：子どものスクリーンタイムを考える",
      excerpt: "デジタルツールの活用とリアル体験のバランスをどう取るべきか。子どもの発達段階に合わせたスクリーンタイムの考え方を専門家が解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年2月10日",
      image: null,
      slug: "screen-time-balance"
    }
  ],
  2: [
    {
      id: 7,
      title: "子ども向けプログラミング入門：AIを活用した学習法",
      excerpt: "プログラミング初心者の子どもでも楽しく学べるAI活用法を紹介。コードを書く前に概念を理解する新しいアプローチです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月5日",
      image: null,
      slug: "ai-programming-for-kids"
    },
    {
      id: 8,
      title: "親子で楽しむAIアート：週末の創作活動アイデア",
      excerpt: "AIアートツールを使って親子で楽しめる創作活動のアイデアを紹介。想像力を育みながら、テクノロジーへの理解も深まります。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年1月30日",
      image: null,
      slug: "ai-art-family-activities"
    },
    {
      id: 9,
      title: "春の特別講座「AIと音楽」参加者募集中",
      excerpt: "春休み期間中に開催する特別講座のご案内。AIを使った作曲体験ができる人気講座です。初心者でも安心して参加できます。",
      category: "イベント情報",
      categoryColor: "orange",
      date: "2025年1月25日",
      image: null,
      slug: "spring-music-workshop"
    },
    {
      id: 10,
      title: "教育現場でのAI活用事例：先生たちの声",
      excerpt: "学校教育の現場でAIをどう活用しているか、現役の先生たちにインタビュー。成功事例と課題点を率直に語っていただきました。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年1月20日",
      image: null,
      slug: "ai-in-schools-teacher-interviews"
    },
    {
      id: 11,
      title: "生徒作品展示会レポート：AIと人間の共創",
      excerpt: "先月開催した生徒作品展示会の様子をお届けします。AIツールを活用した作品の数々に、来場者からも驚きの声が上がりました。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2025年1月15日",
      image: null,
      slug: "student-exhibition-report"
    },
    {
      id: 12,
      title: "子どもの好奇心を育てる質問の仕方",
      excerpt: "子どもの「なぜ？」に対する答え方で、好奇心や探究心は大きく変わります。AI時代に必要な思考力を育む会話術を解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年1月10日",
      image: null,
      slug: "nurturing-curiosity"
    }
  ],
  3: [
    {
      id: 13,
      title: "2025年注目のAI教育ツール10選",
      excerpt: "今年注目すべきAI教育ツールを厳選して紹介。子どもの年齢や興味に合わせた選び方のポイントも解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年1月5日",
      image: null,
      slug: "top-ai-education-tools-2025"
    },
    {
      id: 14,
      title: "生徒インタビュー：高校生ミカさんのAIアート作品集",
      excerpt: "AIアートコースに通う高校生ミカさんの作品と創作プロセスを紹介。彼女がAIをどう活用して独自の表現を見つけたかを語ります。",
      category: "生徒インタビュー",
      categoryColor: "purple",
      date: "2024年12月25日",
      image: null,
      slug: "student-interview-mika"
    },
    {
      id: 15,
      title: "冬休みの自宅学習におすすめのAIプロジェクト",
      excerpt: "冬休み期間中に自宅で取り組める、楽しいAIプロジェクトのアイデアを紹介。家にあるもので簡単に始められます。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2024年12月20日",
      image: null,
      slug: "winter-break-ai-projects"
    },
    {
      id: 16,
      title: "クリスマスイベントレポート：AIサンタと未来のおもちゃ工房",
      excerpt: "先週開催したクリスマス特別イベントの様子をレポート。子どもたちがAIと一緒に未来のおもちゃをデザインしました。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2024年12月15日",
      image: null,
      slug: "christmas-event-report"
    },
    {
      id: 17,
      title: "AIと著作権：子どもに教えたい創作とルール",
      excerpt: "AIを使った創作活動における著作権の基本と、子どもに教えておきたい倫理観について解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2024年12月10日",
      image: null,
      slug: "ai-copyright-ethics"
    },
    {
      id: 18,
      title: "新年特別ワークショップのお知らせ",
      excerpt: "1月に開催する新年特別ワークショップの詳細をお知らせします。今回は「AIと未来の職業」をテーマに開催します。",
      category: "イベント情報",
      categoryColor: "orange",
      date: "2024年12月5日",
      image: null,
      slug: "new-year-workshop-announcement"
    }
  ]
};

// 特集記事データ
const featuredArticle = {
  title: "AI時代の教育とは？子どもたちに必要な力と親ができるサポート",
  excerpt: "AIの急速な発展により、子どもたちが将来必要とするスキルも変化しています。本記事では、AI時代に子どもたちが身につけるべき能力と、それを育むために家庭でできるサポート方法について解説します。",
  date: "2025年3月15日",
  image: "/images/sample/parakeets-9190236_1280.jpg",
  slug: "ai-education-future"
};

// Next.jsのApp Routerでのページコンポーネントの型定義
export default function BlogPage(props: any) {
  // searchParamsにアクセス
  const searchParams = props.searchParams || {};
  const pageParam = searchParams.page;
  const currentPage = pageParam ? parseInt(pageParam as string) : 1;
  
  // 現在のページの記事データを取得
  const currentArticles = pageData[currentPage as keyof typeof pageData] || pageData[1];

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
