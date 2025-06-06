'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
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
      id: 101,
      title: "高校生のためのAI時代キャリア設計：2025年からの進路選択と大学受験戦略完全ガイド",
      excerpt: "AI時代を見据えた高校生の進路選択とキャリア設計を徹底解説。大学受験での差別化戦略、理系・文系別おすすめ学部、就職に直結するスキル習得法まで、港区の進路指導専門家が最新情報をお届けします。",
      category: "進路指導",
      categoryColor: "blue",
      date: "2025年4月10日",
      image: "/images/blog/003.png",
      slug: "high-school-ai-career-design"
    },
    {
      id: 102,
      title: "3〜5歳から始める幼児AI教育完全ガイド：発達段階に合わせた安全な学習法【2025年版】",
      excerpt: "3歳、4歳、5歳の発達段階に応じたAI教育の始め方を専門家が詳しく解説。スクリーンタイムの適切な管理、安全なAIツール、創造性を伸ばす実践方法まで、港区の幼児AI教育をリードします。",
      category: "早期教育",
      categoryColor: "pink",
      date: "2025年3月15日",
      image: "/images/blog/002.png",
      slug: "early-childhood-ai-education-guide"
    },
    {
      id: 103,
      title: "【2025年4月新学期】AI時代の習い事選び完全ガイド：今から間に合う教室探しのコツ",
      excerpt: "新学期に向けたAI教育・プログラミング教室の選び方を徹底解説。港区で人気の教室情報、体験スケジュール、準備すべきことをまとめました。今からでも4月入会に間に合います！",
      category: "季節特集",
      categoryColor: "green",
      date: "2025年2月20日",
      image: "/images/blog/001.png",
      slug: "new-semester-ai-education-guide"
    },
    {
      id: 104,
      title: "メタバース×NFT創造教育：子どもが学ぶデジタル経済と未来スキル【2025年版】",
      excerpt: "メタバース時代の創造教育とNFTを活用した学習法を徹底解説。Roblox、Minecraft、VRChat等での世界構築から、デジタルアート、ブロックチェーン基礎まで、港区の専門家が詳しく紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年5月15日",
      image: "/images/blog/004.png",
      slug: "metaverse-nft-creative-education"
    },
    {
      id: 105,
      title: "AI agent時代の教育革命：子どもが身につけるべき「AI協働スキル」とは【2025年版】",
      excerpt: "ChatGPT、Claude、Gemini等のAIエージェントとの協働が当たり前になる時代に、子どもたちが身につけるべきスキルを徹底解説。プロンプトエンジニアリングから批判的思考まで、港区の教育専門家が詳しく紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年5月20日",
      image: "/images/blog/005.png",
      slug: "ai-agent-education-future"
    },
    {
      id: 1,
      title: "中学受験×AI教育の相乗効果：有名私立中学が求める「未来型スキル」とは【2025年版】",
      excerpt: "中学受験にAI教育がもたらす驚きの効果を徹底解説。麻布・開成・桜蔭など名門校が注目する思考力・表現力を、AIプログラミングで効率的に伸ばす方法を港区の専門家が詳しく紹介。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年6月2日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "middle-school-ai-education-synergy"
    },
    {
      id: 2,
      title: "AI動画編集で子どもYouTuber育成：安全なコンテンツ創造の完全ガイド【2025年版】",
      excerpt: "子どもの夢を叶えるAI動画編集ツールの活用法を徹底解説。安全性に配慮したYouTube動画制作、著作権教育、保護者管理まで港区の専門家が詳しく紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月2日",
      image: "/images/blog/EYE-game.jpg",
      slug: "ai-video-editing-youtuber-education"
    },
    {
      id: 3,
      title: "白金・赤坂・六本木エリア別AI教室完全ガイド：通いやすさで選ぶ最適な学習環境【2025年版】",
      excerpt: "港区の白金高輪、赤坂、六本木エリア別にAI教室を徹底比較。アクセス、料金、特徴を詳しく解説。高所得世帯の保護者が重視する立地条件も考慮した選び方ガイド。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年6月2日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "minato-area-ai-classroom-guide"
    },
    {
      id: 4,
      title: "ChatGPT子ども安全活用ガイド：小学生の学習を変える正しい使い方【保護者必読】",
      excerpt: "文科省ガイドライン準拠。小学生がChatGPTを安全に学習活用するための保護者必読ガイド。年齢制限、安全設定、具体的活用法を港区の教育専門家が解説。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年1月6日",
      image: "/images/blog/chatgpt-kids-safety-guide.jpg",
      slug: "chatgpt-safe-guide-for-kids"
    },
    {
      id: 5,
      title: "子どもがハマるゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド",
      excerpt: "子どもの興味を引くゲーム開発でプログラミングを学習。Scratch、Unity対応の教室比較から、年齢別学習ロードマップ、人気ジャンル別ガイドまで解説。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年1月6日",
      image: "/images/blog/game-development-kids-guide.jpg",
      slug: "game-development-programming-guide"
    },
    {
      id: 6,
      title: "3Dモデリング×AI入門：子どもが楽しく学ぶデジタル創作の新世界【2025年版】",
      excerpt: "3DモデリングとAIを組み合わせた創造教育の魅力を徹底解説。Blender、Tinkercad、AI画像生成を使った年齢別学習法、将来のメタバース時代に必要なスキルを港区の専門家が詳しく紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月2日",
      image: "/images/blog/EYE-art.jpg",
      slug: "3d-modeling-ai-introduction"
    },
    {
      id: 7,
      title: "AIネイティブ世代の多言語学習法：ChatGPT・Claude・Geminiで広がる国際教育の新境地【2025年版】",
      excerpt: "生成AIを活用した革新的な多言語学習法を徹底解説。ChatGPT、Claude、Geminiを使った効果的な語学習得、文化理解、国際感覚の育成方法を港区のインターナショナル教育専門家が詳しく紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月2日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "ai-native-multilingual-learning"
    },
    {
      id: 8,
      title: "オンライン vs 対面プログラミング教室：子どもに最適な学習スタイルの選び方【2025年版】",
      excerpt: "プログラミング教室のオンラインと対面、どちらが子どもに適している？年齢別推奨、メリット・デメリット、ハイブリッド学習まで港区の教育専門家が詳しく解説。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年1月6日",
      image: "/images/blog/online-vs-offline-programming-classes.jpg",
      slug: "online-vs-offline-programming-classes"
    },
    {
      id: 21,
      title: "AI自由研究アイデア集：夏休みの宿題を創造的に解決する方法【2025年版】",
      excerpt: "ChatGPT・Claude・Geminiを使った斬新な自由研究テーマ50選。小学生が楽しみながら学べるAI活用方法を学年別・分野別に紹介。保護者のサポート方法も解説。",
      category: "夏休み特集",
      categoryColor: "yellow",
      date: "2025年6月2日",
      image: "/images/blog/ai-summer-research-ideas.jpg",
      slug: "ai-summer-research-ideas"
    },
    {
      id: 22,
      title: "マインクラフトでプログラミング学習：子どもが夢中になる教育効果とは【2025年版】",
      excerpt: "マイクラでプログラミングを学ぶメリットと具体的な学習方法を徹底解説。教育版Minecraft、MakeCode、Python連携まで。港区で人気の教室情報も紹介。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月2日",
      image: "/images/blog/minecraft-programming-learning.jpg",
      slug: "minecraft-programming-learning"
    },
    {
      id: 23,
      title: "プロンプトエンジニアリング入門：子どもが身につけるべき「AI対話スキル」とは【2025年版】",
      excerpt: "ChatGPT、Claude、Geminiと上手に対話する方法を小学生でも分かりやすく解説。将来必須スキル「プロンプトエンジニアリング」を楽しく学ぶ実践ガイド。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月2日",
      image: "/images/blog/prompt-engineering-for-kids.jpg",
      slug: "prompt-engineering-for-kids"
    },
    {
      id: 4,
      title: "港区ロボティクス教室完全ガイド：選び方から料金まで徹底比較【2025年版】",
      excerpt: "港区のロボティクス教室を徹底比較！ヒューマンアカデミー、クレファス、LITALICOワンダーなど人気教室の料金・特徴・口コミを詳しく解説。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年1月1日",
      image: "/images/blog/EYE-robotics-education.jpg",
      slug: "minato-robotics-classrooms-guide"
    },
    {
      id: 2,
      title: "港区で子どもの創造性を育む：麻布・青山・六本木エリア別教育ガイド",
      excerpt: "港区の麻布、青山、六本木エリアの教育環境を分析し、AI時代に必要な創造性を育む最適な学習環境の選び方を専門家が解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年6月1日",
      image: "/images/blog/EYE-creativity-development.jpg",
      slug: "minato-creativity-education-areas"
    },
    {
      id: 3,
      title: "港区インターナショナルスクール生の保護者が注目するAI教育トレンド",
      excerpt: "港区のインターナショナルスクール環境でのAI教育の最新動向と、グローバル人材育成のための創造的AI学習アプローチを専門家が解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年6月1日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "international-school-ai-education"
    },
    {
      id: 3,
      title: "年収1000万円世帯の教育投資戦略：AI時代に向けた港区での選択肢",
      excerpt: "年収1000万円以上の港区世帯向けに、AI時代の教育投資戦略と費用対効果の高い教育選択肢を専門家が詳しく解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年6月1日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "high-income-education-investment-strategy"
    },
    {
      id: 4,
      title: "AI教育クラスルーム活動ガイド：創造性を育む実践的アプローチ",
      excerpt: "小中学生向けAI教育の実践的な授業活動アイデアを紹介。創造性と批判的思考を育むグループワークやプロジェクトベースの学習方法を解説します。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2025年4月8日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "ai-classroom-activities"
    },
    {
      id: 5,
      title: "子ども向けAIツール5選：安全に使える創作支援ツール",
      excerpt: "子どもでも安全に使えるAIツールを厳選して紹介します。アート制作、作文サポート、音楽作曲など、創造力を育むツールばかりです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月10日",
      image: "/images/blog/EYE-ai-tools-for-kids.jpg",
      slug: "ai-tools-for-kids"
    },
    {
      id: 6,
      title: "子どもの創造性を育む5つの習慣：日常生活でできること",
      excerpt: "創造性は、これからの時代を生きる子どもたちにとって重要なスキルです。家庭で簡単に取り入れられる、創造性を育む習慣について解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年3月5日",
      image: "/images/blog/EYE-creativity-development.jpg",
      slug: "creativity-development"
    },
    {
      id: 7,
      title: "子ども向けプログラミング入門：AIを活用した学習法",
      excerpt: "プログラミング初心者の子どもでも楽しく学べるAI活用法を紹介。コードを書く前に概念を理解する新しいアプローチです。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月5日",
      image: "/images/sample/top/image_engneer_icon.jpg",
      slug: "ai-programming-for-kids"
    },
    {
      id: 8,
      title: "2025年のAI教育トレンド：世界の最新事例から学ぶ",
      excerpt: "世界各国で進むAI教育の最新トレンドを紹介します。日本の教育現場にも取り入れられそうな先進的な事例を解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年2月15日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "ai-education-trends-2025"
    },
    {
      id: 9,
      title: "デジタルとリアルのバランス：子どものスクリーンタイムを考える",
      excerpt: "デジタルツールの活用とリアル体験のバランスをどう取るべきか。子どもの発達段階に合わせたスクリーンタイムの考え方を専門家が解説します。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年2月10日",
      image: "/images/blog/EYE-screen-time-balance.jpg",
      slug: "screen-time-balance"
    },
    {
      id: 10,
      title: "AIアートで子どもの創造性を育む：デジタル時代の芸術教育",
      excerpt: "AIツールを使った芸術教育の可能性を探ります。子どもたちの創造性と技術的スキルを同時に伸ばす新しい学習アプローチを紹介します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月20日",
      image: "/images/blog/EYE-art.jpg",
      slug: "ai-art-education"
    },
    {
      id: 11,
      title: "家族で学ぶAI：親子で楽しむテクノロジー体験",
      excerpt: "AIを家族で学ぶことの意義と、楽しみながら学べる具体的な方法を紹介。テクノロジーを通じて家族の絆を深める新しい学習スタイルです。",
      category: "保護者向けコラム",
      categoryColor: "green",
      date: "2025年3月18日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "ai-family-learning"
    },
    {
      id: 12,
      title: "AIと音楽創作：子どもの音楽的想像力を解き放つ",
      excerpt: "AIツールを使った音楽創作の可能性を探ります。子どもたちが自由に音楽を生み出す新しい学習方法を紹介します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月16日",
      image: "/images/blog/EYE-music.jpg",
      slug: "ai-music-creation"
    },
    {
      id: 13,
      title: "港区の創造性教育：地域で育むAI時代の学び",
      excerpt: "港区における先進的な創造性教育の取り組みを紹介。地域全体で子どもたちの未来を支える教育モデルを解説します。",
      category: "教室活動レポート",
      categoryColor: "yellow",
      date: "2025年3月17日",
      image: "/images/blog/EYE-programing.jpg",
      slug: "minatoku-creativity-education"
    },
    {
      id: 14,
      title: "港区のAI教育最前線：未来を見据えた学びの革新",
      excerpt: "港区における最新のAI教育の取り組みと、子どもたちの学びを変革する革新的なアプローチを詳しく解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月19日",
      image: "/images/blog/EYE-game.jpg",
      slug: "minatoku-education"
    },
    {
      id: 15,
      title: "子どもの絵画教室選びガイド",
      excerpt: "港区周辺の子ども向け絵画教室の比較や選び方、年齢別の才能開発法、家庭でできる創造性育成のポイントまで。子どもの芸術的才能を見つけ、伸ばすための総合ガイド",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月22日",
      image: "/images/blog/EYE-art.jpg",
      slug: "how-to-choice-minatokuArtClass"
    },
    {
      id: 16,
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
    },{
      id: 17,
      title: "steam-education",
      excerpt: "steam-education",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年3月25日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "steam-education"
    },
    {
      id: 18,
      title: "AI教育のメリットとデメリット：バランスの取れた視点からの考察",
      excerpt: "教育現場でのAI活用の長所と短所を詳しく解説。子どもの発達に与える影響や適切な導入方法について、エビデンスに基づいた考察を提供します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年4月12日",
      image: "/images/blog/EYE-ai-education-trends-2025.jpg",
      slug: "ai-education-pros-cons"
    },
    {
      id: 19,
      title: "AI教育の活用事例：国内外の成功例から学ぶ実践ポイント",
      excerpt: "世界各国の教育機関におけるAI活用の成功事例を紹介。具体的な導入方法や成果、課題解決のヒントまで、実践に役立つ情報を詳しく解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年4月15日",
      image: "/images/blog/EYE-ai-education-future.jpg",
      slug: "ai-education-use-cases"
    },
    {
      id: 20,
      title: "2025年AI教育の現状：最新動向と今後の展望",
      excerpt: "教育分野におけるAI技術の導入状況と最新動向を分析。専門家による洞察と共に、これからの教育現場における変化と準備すべきポイントを解説します。",
      category: "AI教育最新情報",
      categoryColor: "blue",
      date: "2025年4月19日",
      image: "/images/blog/EYE-ai-tools-for-kids.jpg",
      slug: "ai-education-current-state"
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

function BlogContent() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam) : 1;

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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                    priority
                    quality={85}
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={80}
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
                    alt="AI教育クラスルーム活動ガイド"
                    fill
                    className="object-cover rounded"
                    sizes="64px"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div>
                  <Link href="/blog/ai-classroom-activities" className="text-sm font-medium hover:text-primary">
                    AI教育クラスルーム活動ガイド：創造性を育む実践的アプローチ
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年4月8日</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image 
                    src="/images/blog/EYE-ai-education-future.jpg"
                    alt="AI時代の教育"
                    fill
                    className="object-cover rounded"
                    sizes="64px"
                    loading="lazy"
                    quality={75}
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
                    sizes="64px"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div>
                  <Link href="/blog/creativity-development" className="text-sm font-medium hover:text-primary">
                    子どもの創造性を育む5つの習慣：日常生活でできること
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">2025年3月5日</p>
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

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 text-center">Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
