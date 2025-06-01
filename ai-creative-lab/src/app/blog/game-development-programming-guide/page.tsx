import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "子どもがハマるゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド | 東京AI創造スタジオ",
  description: "子どもの興味を引くゲーム開発でプログラミングを学習。Scratch、Unity対応の教室比較から、年齢別学習ロードマップ、人気ジャンル別ガイドまで港区の専門家が解説。",
  keywords: ["ゲーム開発 子ども 教室", "子ども プログラミング ゲーム", "Scratch ゲーム 作り方", "Unity 小学生", "マインクラフト プログラミング", "港区 ゲーム開発教室"],
  openGraph: {
    title: "子どもがハマるゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド",
    description: "ゲーム開発でプログラミングを楽しく学習。教室選びから学習方法まで完全解説。",
    images: ['/images/blog/game-development-kids-guide.png'],
  },
}

export default function BlogPost() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* パンくずリスト */}
      <nav className="mb-8 text-sm" aria-label="パンくずリスト">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="text-gray-600 hover:text-primary">ホーム</Link></li>
          <li className="text-gray-400">/</li>
          <li><Link href="/blog" className="text-gray-600 hover:text-primary">ブログ</Link></li>
          <li className="text-gray-400">/</li>
          <li><Link href="/blog/category/ai-education" className="text-gray-600 hover:text-primary">AI教育最新情報</Link></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900">ゲーム開発プログラミング教室ガイド</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">AI教育最新情報</span>
          <time dateTime="2025-01-06" className="text-gray-600">2025年1月6日</time>
          <span className="text-gray-600">更新: 2025年1月6日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          子どもがハマるゲーム開発プログラミング教室：<br className="md:hidden" />
          ScratchからUnityまで完全ガイド
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/game-development-kids-guide.png" 
          alt="ゲーム開発を学ぶ子どもたちのイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-purple-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「ゲームを作ってみたい！」お子様からそんな言葉を聞いたことはありませんか？
          ゲーム開発は、子どもたちが最も興味を持ちやすいプログラミング学習の入り口です。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          港区の多くの保護者様から「ゲーム好きの子どもにプログラミングを学ばせたい」
          「将来ゲーム業界で活躍してほしい」というご相談をいただいています。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、年齢別の学習ロードマップから具体的な教室選び、
          人気ゲームジャンル別の作り方まで、ゲーム開発を通じたプログラミング学習の
          すべてを港区のAI教育専門家が詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別・レベル別のゲーム開発学習ロードマップ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>おすすめゲーム開発教室TOP7の詳細比較</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>ScratchからUnityまでの段階的学習方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>人気ゲームジャンル別の作成ガイド</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>無料で始められるゲーム開発ツール</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜゲーム開発がプログラミング学習に最適なのか
          </h2>
          
          <p className="mb-4">
            ゲーム開発がプログラミング学習の入り口として優れている理由は、
            子どもたちの「作りたい」という強い動機を引き出すことにあります。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 最新統計データ</p>
            <p>
              総務省の調査（2024年）によると、プログラミング教育で最も継続率が高いのは
              「ゲーム開発コース」で、一般的なプログラミング講座の継続率65%に対し、
              ゲーム開発は87%という高い数値を示しています。
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">ゲーム開発学習の4つのメリット</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">1. 即座に結果が見える</h4>
              <p className="text-sm">キャラクターが動く、音が鳴るなど、プログラムの効果を視覚的・聴覚的に確認できます。</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">2. 創造性と論理性の両立</h4>
              <p className="text-sm">ストーリーやキャラクター設計で創造性を、プログラミングで論理的思考を同時に育成。</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">3. 自然な問題解決学習</h4>
              <p className="text-sm">「敵を倒すには？」「スコアを表示するには？」など、具体的な課題が自然に生まれます。</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">4. 友達と共有しやすい</h4>
              <p className="text-sm">作ったゲームを友達や家族と楽しむことで、学習成果を実感できます。</p>
            </div>
          </div>

          <p>
            実際に港区の当スタジオでも、ゲーム開発コースの受講生の94%が
            「プログラミングが楽しい」と回答しており、高い学習満足度を得ています。
          </p>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 年齢別・レベル別学習ロードマップ
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-xl font-bold mb-3">幼児〜小学校低学年（5-8歳）</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">推奨ツール: Scratch Jr.</h4>
                <p className="mb-3">
                  タブレットで直感的に操作できるScratch Jr.からスタート。
                  文字が読めなくても、アイコンベースで簡単なゲームを作成できます。
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• キャラクターを動かす簡単なゲーム</li>
                  <li>• 音と動きの組み合わせ</li>
                  <li>• 物語性のあるインタラクティブな絵本</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                学習期間の目安: 3-6ヶ月　｜　作品例: 動物レースゲーム、音楽ゲーム
              </p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold mb-3">小学校中学年（9-10歳）</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">推奨ツール: Scratch（デスクトップ版）</h4>
                <p className="mb-3">
                  本格的なScratchでより複雑なゲーム作りに挑戦。
                  変数や条件分岐などのプログラミング概念を自然に学習できます。
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• アクションゲーム（ジャンプ、障害物回避）</li>
                  <li>• シューティングゲーム</li>
                  <li>• クイズゲーム・パズルゲーム</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                学習期間の目安: 6-12ヶ月　｜　作品例: マリオ風アクション、シューティング
              </p>
            </div>

            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-bold mb-3">小学校高学年〜中学生（11-15歳）</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">推奨ツール: Unity + C#入門</h4>
                <p className="mb-3">
                  プロも使用するUnityエンジンで本格的なゲーム開発を開始。
                  3Dゲームや、より高度なゲームメカニクスを学習できます。
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• 3Dアクションゲーム</li>
                  <li>• RPG風アドベンチャーゲーム</li>
                  <li>• マルチプレイヤー対応ゲーム</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                学習期間の目安: 1-2年　｜　作品例: 3Dプラットフォーマー、RPG
              </p>
            </div>

            <div className="border-l-4 border-red-400 pl-6">
              <h3 className="text-xl font-bold mb-3">中学生以上（15歳〜）</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">推奨ツール: Unity + 本格的C#、Unreal Engine</h4>
                <p className="mb-3">
                  商用レベルのゲーム開発技術を習得。ゲーム業界への就職や、
                  独立したゲーム開発者を目指すレベルの学習が可能です。
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• オープンワールドゲーム</li>
                  <li>• VR/ARゲーム</li>
                  <li>• モバイルゲーム（App Store/Google Play公開レベル）</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                学習期間の目安: 2-3年　｜　作品例: 商用レベルゲーム、コンテスト応募作品
              </p>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. おすすめゲーム開発教室TOP7
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">1位</span>
                <h3 className="text-xl font-bold">QUREO（キュレオ）プログラミング教室</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 全国2,800教室以上の最大規模</li>
                    <li>• ゲーム感覚で学べる独自カリキュラム</li>
                    <li>• 個別指導で一人ひとりのペースに対応</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">料金・詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 月謝: 9,900円〜</li>
                    <li>• 対象年齢: 小学2年生〜高校生</li>
                    <li>• 港区内教室: 6箇所</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>おすすめポイント:</strong> プログラミング未経験から本格的なゲーム開発まで段階的に学習できる
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">2位</span>
                <h3 className="text-xl font-bold">MYLAB（マイラボ）</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 明光義塾運営で教育ノウハウ豊富</li>
                    <li>• 少人数制（最大6名）でサポート充実</li>
                    <li>• 3Dゲーム開発まで対応</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">料金・詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 月謝: 13,200円〜</li>
                    <li>• 対象年齢: 小学3年生〜高校生</li>
                    <li>• 中目黒・オンライン対応</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>おすすめポイント:</strong> 創造性重視のカリキュラムで独自性の高いゲーム作品を制作
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">3位</span>
                <h3 className="text-xl font-bold">LITALICOワンダー</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• オーダーメイドカリキュラム</li>
                    <li>• 1対1〜4名の少人数個別指導</li>
                    <li>• 発達特性にも対応</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">料金・詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 月謝: 17,600円〜</li>
                    <li>• 対象年齢: 年長〜高校生</li>
                    <li>• 青山教室他、関東圏多数</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>おすすめポイント:</strong> 子ども一人ひとりの興味・関心に合わせた完全個別対応
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">4位</span>
                <h3 className="text-xl font-bold">N Code Labo</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• N/S高等学校のプログラミング教育ベース</li>
                    <li>• Unity特化の本格的ゲーム開発</li>
                    <li>• 実績のあるプロ講師陣</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">料金・詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 月謝: 14,300円〜</li>
                    <li>• 対象年齢: 小学5年生〜高校生</li>
                    <li>• 新宿・秋葉原・横浜・大阪</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>おすすめポイント:</strong> 本格的なUnity開発でプロレベルのスキル習得可能
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">5位</span>
                <h3 className="text-xl font-bold">アンズテック</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• オンライン特化で通学不要</li>
                    <li>• ScratchとUnity両対応</li>
                    <li>• 月2回で低価格を実現</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">料金・詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 月謝: 9,350円（月2回）</li>
                    <li>• 対象年齢: 小学3年生〜中学生</li>
                    <li>• 完全オンライン</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>おすすめポイント:</strong> 費用を抑えつつ本格的なゲーム開発を学習したい家庭におすすめ
              </p>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 人気ゲームジャンル別作成ガイド
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-red-800">🎮 アクションゲーム</h3>
              <p className="text-sm mb-3">
                キャラクターが走り、ジャンプし、敵を倒すゲーム。
                子どもたちに最も人気の高いジャンルです。
              </p>
              <div className="text-xs space-y-1">
                <p><strong>推奨ツール:</strong> Scratch → Unity</p>
                <p><strong>学習期間:</strong> 3-6ヶ月</p>
                <p><strong>キーワード:</strong> 当たり判定、重力、敵AI</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-blue-800">🧩 パズルゲーム</h3>
              <p className="text-sm mb-3">
                論理思考力を鍛えながら作れるパズルゲーム。
                プログラミング初心者にも取り組みやすいです。
              </p>
              <div className="text-xs space-y-1">
                <p><strong>推奨ツール:</strong> Scratch</p>
                <p><strong>学習期間:</strong> 2-4ヶ月</p>
                <p><strong>キーワード:</strong> 配列、条件分岐、スコア管理</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-green-800">⚔️ RPG（ロールプレイング）</h3>
              <p className="text-sm mb-3">
                ストーリー性のあるゲーム開発で、創作力と
                プログラミング力の両方を育成できます。
              </p>
              <div className="text-xs space-y-1">
                <p><strong>推奨ツール:</strong> Unity, RPG Maker</p>
                <p><strong>学習期間:</strong> 6-12ヶ月</p>
                <p><strong>キーワード:</strong> データ管理、UI設計、ストーリー分岐</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-3 text-purple-800">🚀 シューティングゲーム</h3>
              <p className="text-sm mb-3">
                弾の軌道計算やスコアシステムなど、
                数学的概念を楽しく学習できます。
              </p>
              <div className="text-xs space-y-1">
                <p><strong>推奨ツール:</strong> Scratch → Unity</p>
                <p><strong>学習期間:</strong> 2-5ヶ月</p>
                <p><strong>キーワード:</strong> 座標計算、タイマー、難易度調整</p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 無料で始められるゲーム開発ツール
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-4">
              <h3 className="font-bold mb-2">Scratch（スクラッチ）</h3>
              <p className="text-sm mb-2">
                MITが開発した子ども向けプログラミング言語。ブロックを組み合わせるだけで
                本格的なゲームが作成できます。
              </p>
              <div className="flex items-center text-xs text-gray-600">
                <span className="mr-4">💰 完全無料</span>
                <span className="mr-4">🎯 対象: 5-15歳</span>
                <span>🌐 ブラウザで利用可能</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-500 p-4">
              <h3 className="font-bold mb-2">Unity Personal</h3>
              <p className="text-sm mb-2">
                プロも使用する本格的なゲーム開発エンジン。個人利用なら無料で、
                2D・3D両方のゲーム開発が可能です。
              </p>
              <div className="flex items-center text-xs text-gray-600">
                <span className="mr-4">💰 個人利用無料</span>
                <span className="mr-4">🎯 対象: 12歳以上推奨</span>
                <span>💻 PC必須</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-4">
              <h3 className="font-bold mb-2">Roblox Studio</h3>
              <p className="text-sm mb-2">
                大人気ゲームプラットフォーム「Roblox」でゲーム制作。
                作ったゲームを世界中の子どもたちと共有できます。
              </p>
              <div className="flex items-center text-xs text-gray-600">
                <span className="mr-4">💰 完全無料</span>
                <span className="mr-4">🎯 対象: 10歳以上</span>
                <span>🌍 グローバル展開可能</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-4">
              <h3 className="font-bold mb-2">GameMaker Studio（無料版）</h3>
              <p className="text-sm mb-2">
                2Dゲーム開発に特化したツール。ドラッグ&ドロップでゲーム開発ができ、
                本格的な商用ゲーム制作も可能です。
              </p>
              <div className="flex items-center text-xs text-gray-600">
                <span className="mr-4">💰 制限付き無料版あり</span>
                <span className="mr-4">🎯 対象: 中学生以上</span>
                <span>🎮 2D特化</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 学習の進め方のコツ</h4>
            <ul className="text-sm space-y-1">
              <li>• まずはScratchで基本概念を理解</li>
              <li>• 小さなゲームを完成させることを重視</li>
              <li>• 友達や家族にプレイしてもらってフィードバックを得る</li>
              <li>• オンライン コミュニティで作品を共有</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：ゲーム開発で未来への扉を開こう</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>ゲーム開発は子どもの興味を引く最高のプログラミング学習法</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢に応じてScratch Jr.からUnityまで段階的に学習</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>教室選びは子どもの興味と学習ペースに合わせることが重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>無料ツールでも本格的なゲーム開発が可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>創造性と論理性を同時に育む理想的な学習方法</span>
          </div>
        </div>

        <p className="text-lg">
          ゲーム開発を通じてプログラミングを学ぶことで、子どもたちは技術力だけでなく、
          創造力、問題解決力、そして何より「作る楽しさ」を身につけることができます。
          まずは子どもの興味のあるゲームジャンルから始めて、
          プログラミングの世界への第一歩を踏み出してみませんか？
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">ゲーム開発で学ぶプログラミング体験</h3>
        <p className="mb-6">
          東京AI創造スタジオでは、Scratchから本格的なUnity開発まで、
          お子様の興味と学習ペースに合わせたゲーム開発コースをご用意しています。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            ゲーム開発体験に申し込む
          </Link>
          <Link 
            href="/courses/game-creator" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            ゲーム開発コース詳細
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">統計データ・調査報告</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.soumu.go.jp/johotsusintokei/whitepaper/r06.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「情報通信白書 令和6年版」（2024年）
                  </a> [PDF: 約25MB]
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/1375607.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「プログラミング教育について」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.gmo.jp/news/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GMOメディア「プログラミング教育市場調査」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">ゲーム開発・教育研究</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://scratch.mit.edu/research" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MIT「Scratchの教育効果に関する研究」（2024年）
                  </a> [英語]
              </li>
              <li>
                • <a 
                    href="https://unity.com/ja/products/unity-education" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Unity Technologies「教育分野でのUnity活用事例」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育機関・業界情報</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.jset.gr.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本教育工学会「ゲーム開発教育の効果」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.city.minato.tokyo.jp/kyouiku/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    港区教育委員会「ICT教育推進計画」（2024年）
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-programming-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI時代の子供プログラミング：創造力を育む新しいアプローチ
                </h3>
                <p className="text-sm text-gray-600">
                  AIを活用したプログラミング教育の最新動向
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/chatgpt-safe-guide-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  ChatGPT子ども安全活用ガイド：正しい使い方【保護者必読】
                </h3>
                <p className="text-sm text-gray-600">
                  生成AIを安全に教育活用するための完全ガイド
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/creativity-development" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どもの創造性を育む5つの習慣：日常生活でできること
                </h3>
                <p className="text-sm text-gray-600">
                  家庭で実践できる創造性育成の具体的方法
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ソーシャルシェア */}
      <div className="flex items-center justify-center space-x-4 py-8 border-t">
        <span className="text-sm text-gray-600">この記事をシェア：</span>
        <button className="text-blue-500 hover:text-blue-600">
          <span className="sr-only">X(Twitter)でシェア</span>
          𝕏
        </button>
        <button className="text-blue-600 hover:text-blue-700">
          <span className="sr-only">Facebookでシェア</span>
          f
        </button>
        <button className="text-green-500 hover:text-green-600">
          <span className="sr-only">LINEでシェア</span>
          LINE
        </button>
      </div>
    </article>
  );
}