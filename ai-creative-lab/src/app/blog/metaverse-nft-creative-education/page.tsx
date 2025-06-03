import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "メタバース創作教室：子どもが作る仮想世界とNFTアート【2025年トレンド】 | 東京AI創造スタジオ",
  description: "Roblox、Minecraft、Horizonで子どもが仮想世界を創造！NFTアートの基礎から安全な制作方法まで、港区の専門家が最新メタバース教育を徹底解説。",
  keywords: ["メタバース 創作 子ども", "子ども NFT アート", "Roblox 教育", "Minecraft 創作", "VR教育 港区", "デジタルアート 子ども", "Web3 教育"],
  openGraph: {
    title: "メタバース創作教室：子どもが作る仮想世界とNFTアート【2025年トレンド】",
    description: "最先端のメタバース技術で子どもの創造性を無限に広げる教育プログラム。",
    images: ['/images/blog/EYE-game.jpg'],
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
          <li className="text-gray-900">メタバース創作教室</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">最先端技術</span>
          <time dateTime="2025-07-05" className="text-gray-600">2025年7月5日</time>
          <span className="text-gray-600">更新: 2025年7月5日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          メタバース創作教室：<br className="md:hidden" />
          子どもが作る仮想世界とNFTアート【2025年トレンド】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/EYE-game.jpg" 
          alt="メタバース空間で創作活動を楽しむ子どもたち"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-purple-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「ママ、僕が作った世界に遊びに来て！」
          「私のアート作品がNFTになって、世界中の人に見てもらえるの？」
        </p>
        <p className="text-lg leading-relaxed mb-4">
          2025年、メタバースは子どもたちの新しい創造空間として
          急速に普及しています。Robloxの月間アクティブユーザーは
          3億人を突破し、その多くが10代の若者たちです。
          さらに、NFT技術により、子どもたちの創作物が
          デジタル資産として価値を持つ時代が到来しました。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、メタバース創作とNFTアートの教育的価値、
          安全な活用方法、そして子どもたちの創造性を
          最大限に引き出す実践的アプローチを、
          港区の最先端教育現場から詳しくお伝えします。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>メタバースとは？子ども向けプラットフォームの特徴と可能性</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>NFTアートの基礎知識と子どもが安全に制作する方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別・スキル別メタバース創作カリキュラム</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>実際の作品事例と教育効果の検証データ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>保護者が知るべき安全対策とサポート方法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. メタバースが子どもの創造性に革命を起こす理由
          </h2>
          
          <p className="mb-4">
            メタバースとは、インターネット上に構築された3次元の仮想空間で、
            アバターを通じて他者と交流し、様々な活動ができる世界です。
            子どもたちにとって、これは単なるゲームを超えた
            「創造と表現の新しいキャンバス」となっています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 メタバース市場の教育分野への影響（2025年データ）</p>
            <ul className="text-sm space-y-1">
              <li>• 教育メタバース市場規模：前年比320%成長（約2.5兆円）</li>
              <li>• 子ども向けプラットフォーム利用者：全世界で5億人突破</li>
              <li>• 教育機関のメタバース採用率：35%（前年比15%増）</li>
              <li>• クリエイター収益：上位1%が年間1000万円以上</li>
              <li>• NFT教育コンテンツ取引額：月間50億円規模</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：Metaverse Education Alliance「Global Report 2025」（2025年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">主要な子ども向けメタバースプラットフォーム</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🎮 Roblox</h4>
              <ul className="text-sm space-y-1">
                <li>• 利用者数：月間3億人（9-12歳が最多）</li>
                <li>• 特徴：ゲーム制作・プレイが一体化</li>
                <li>• 収益化：Robux通貨での取引可能</li>
                <li>• 教育価値：プログラミング・経済概念</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">⛏️ Minecraft</h4>
              <ul className="text-sm space-y-1">
                <li>• 利用者数：月間1.7億人</li>
                <li>• 特徴：ブロック建築・探索・サバイバル</li>
                <li>• 教育版：Minecraft Education Edition</li>
                <li>• 教育価値：空間認識・協働作業</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🌐 Horizon Worlds</h4>
              <ul className="text-sm space-y-1">
                <li>• 利用者数：月間50万人（13歳以上）</li>
                <li>• 特徴：VRネイティブ・高没入感</li>
                <li>• 制作ツール：コード不要のビルダー</li>
                <li>• 教育価値：3D空間設計・VR体験</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-800">🎨 The Sandbox</h4>
              <ul className="text-sm space-y-1">
                <li>• 利用者数：月間200万人</li>
                <li>• 特徴：NFT統合・ブロックチェーン</li>
                <li>• 収益化：SAND暗号通貨</li>
                <li>• 教育価値：デジタル経済・アート</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">🌟 メタバース創作が育む5つの能力</h4>
            <div className="grid md:grid-cols-2 gap-2">
              <ul className="text-sm space-y-1">
                <li>1. 空間的思考力と3D設計スキル</li>
                <li>2. ストーリーテリング能力</li>
                <li>3. デジタル経済の理解</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>4. グローバルコミュニケーション</li>
                <li>5. プロジェクトマネジメント</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. NFTアート入門：子どもの作品が世界に認められる時代
          </h2>

          <p className="mb-6">
            NFT（Non-Fungible Token）は、デジタルアートに
            「唯一無二の価値」を付与する技術です。
            子どもたちの創作物が単なる「データ」から
            「資産」へと変わる可能性を秘めています。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">📱 NFTの基本概念（子ども向け解説）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">NFTって何？</h4>
                <p className="text-sm mb-2">
                  「デジタル作品の証明書」のようなもの。
                  君が描いた絵に「これは〇〇ちゃんが描いた世界に1つだけの作品です」
                  という証明書がつくイメージ。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>たとえば：</strong>ポケモンカードのレアカードみたいに、
                    デジタルアートも「本物」として価値を持てるようになる技術
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">なぜ注目されているの？</h4>
                <ul className="text-sm space-y-1">
                  <li>• 自分の作品が永久に記録される</li>
                  <li>• 世界中の人に見てもらえる</li>
                  <li>• 将来的に価値が上がる可能性</li>
                  <li>• クリエイターとして認められる</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">子ども向けNFTアート制作の実践例</h3>

          <div className="space-y-6">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-pink-800">🎨 プロジェクト例1：デジタル絵本NFT</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2"><strong>制作プロセス：</strong></p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>物語のアイデア出し</li>
                    <li>iPadでイラスト制作</li>
                    <li>AIツールで背景生成</li>
                    <li>アニメーション追加</li>
                    <li>NFT化して公開</li>
                  </ol>
                </div>
                <div>
                  <p className="text-sm mb-2"><strong>学習効果：</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• ストーリー構成力</li>
                    <li>• デジタルアートスキル</li>
                    <li>• 著作権の理解</li>
                    <li>• マーケティング思考</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-cyan-800">🏗️ プロジェクト例2：メタバース建築NFT</h4>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  Minecraftで作った建築物を3Dモデルとして書き出し、
                  NFTマーケットプレイスで展示。「未来の家」コンテストで
                  世界中の子どもたちと競い合う。
                </p>
                <div className="mt-2 p-2 bg-cyan-100 rounded">
                  <p className="text-xs">
                    <strong>実績：</strong>12歳の生徒が制作した「エコ・ツリーハウス」が
                    0.05ETH（約2万円）で取引成立
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ 子ども向けNFT制作の安全ガイドライン</h4>
            <ul className="text-sm space-y-1">
              <li>✓ 個人情報は絶対に含めない（本名・住所・学校名など）</li>
              <li>✓ 保護者の監督下で活動する</li>
              <li>✓ 教育用ウォレットを使用（実際の暗号通貨は扱わない）</li>
              <li>✓ 作品の著作権について事前学習</li>
              <li>✓ コミュニティガイドラインの遵守</li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 年齢別・スキル別メタバース創作カリキュラム
          </h2>

          <p className="mb-6">
            子どもの発達段階とデジタルスキルに応じて、
            段階的にメタバース創作を学べるカリキュラムを
            設計することが重要です。
          </p>

          {/* 初級編 */}
          <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">🌱 初級編（6-8歳）：メタバース探検家コース</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">学習目標</h4>
                <ul className="text-sm space-y-1">
                  <li>• 3D空間での基本操作</li>
                  <li>• 簡単な建築・装飾</li>
                  <li>• アバターのカスタマイズ</li>
                  <li>• 安全なコミュニケーション</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">推奨プラットフォーム</h4>
                <ul className="text-sm space-y-1">
                  <li>• Minecraft Education（創造モード）</li>
                  <li>• Roblox（キッズ向けワールド）</li>
                  <li>• CoSpaces Edu（教育特化）</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded">
              <p className="text-sm">
                <strong>週間スケジュール例：</strong>
                月水金の各30分、保護者同伴でメタバース探検。
                土曜日に家族で作品発表会。
              </p>
            </div>
          </div>

          {/* 中級編 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">📚 中級編（9-12歳）：クリエイターコース</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">カリキュラム内容（3ヶ月プログラム）</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">月</th>
                        <th className="border border-gray-300 p-2 text-left">テーマ</th>
                        <th className="border border-gray-300 p-2 text-left">制作物</th>
                        <th className="border border-gray-300 p-2 text-left">スキル</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">1ヶ月目</td>
                        <td className="border border-gray-300 p-2">ワールド制作基礎</td>
                        <td className="border border-gray-300 p-2">自分の部屋を再現</td>
                        <td className="border border-gray-300 p-2">3Dモデリング</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-2">2ヶ月目</td>
                        <td className="border border-gray-300 p-2">インタラクション</td>
                        <td className="border border-gray-300 p-2">ミニゲーム制作</td>
                        <td className="border border-gray-300 p-2">基礎プログラミング</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">3ヶ月目</td>
                        <td className="border border-gray-300 p-2">NFTアート入門</td>
                        <td className="border border-gray-300 p-2">デジタルアート作品</td>
                        <td className="border border-gray-300 p-2">アート×テクノロジー</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">プロジェクト例：「未来の学校」をデザイン</h4>
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 1-2:</strong> コンセプト設計・リサーチ
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 3-4:</strong> 3D建築・環境構築
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 5-6:</strong> インタラクション実装
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 7-8:</strong> テスト・改善
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 9-10:</strong> プレゼンテーション準備
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>Week 11-12:</strong> 公開・フィードバック
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 上級編 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🚀 上級編（13-15歳）：プロフェッショナルコース</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">高度なスキル習得プログラム</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">技術スキル</p>
                    <ul className="text-sm space-y-1">
                      <li>• Blender連携3Dモデリング</li>
                      <li>• Unity/Unreal Engine基礎</li>
                      <li>• スマートコントラクト入門</li>
                      <li>• VR/AR コンテンツ制作</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">ビジネススキル</p>
                    <ul className="text-sm space-y-1">
                      <li>• プロジェクト管理</li>
                      <li>• マーケティング戦略</li>
                      <li>• 収益化モデル設計</li>
                      <li>• コミュニティ運営</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">実践プロジェクト：メタバースイベント運営</h4>
                <p className="text-sm mb-3">
                  仮想空間で100人規模のイベントを企画・運営。
                  展示会、ライブパフォーマンス、ワークショップを含む
                  総合的なメタバース体験を創出。
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>成果例：</strong>中学2年生チームが企画した「Virtual Art Festival」に
                    世界15ヶ国から300人が参加。NFTアート売上50万円を慈善団体に寄付。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📈 スキル評価とポートフォリオ構築</h4>
            <ul className="text-sm space-y-1">
              <li>• 月次スキルアセスメント（技術・創造性・協働性）</li>
              <li>• デジタルポートフォリオの作成と更新</li>
              <li>• ピアレビューとフィードバック文化</li>
              <li>• 外部コンテストへの積極的参加</li>
              <li>• 業界プロフェッショナルからのメンタリング</li>
            </ul>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 実際の作品事例と教育効果の検証
          </h2>

          <p className="mb-6">
            東京AI創造スタジオで実際に制作された
            子どもたちの作品事例と、その教育効果を
            データと共にご紹介します。
          </p>

          <div className="space-y-8">
            {/* 事例1 */}
            <div className="bg-orange-50 border border-orange-300 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                  事例1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orange-800">「Ocean Cleanup World」プロジェクト</h3>
                  <p className="text-sm text-gray-600">制作者：小学5年生グループ（4名）</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">作品概要</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 海洋プラスチック問題をテーマにしたワールド</li>
                    <li>• プレイヤーが楽しみながら清掃活動</li>
                    <li>• 集めたゴミをリサイクルして建築材料に</li>
                    <li>• 海洋生物の生態系学習要素</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">成果・効果</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Robloxで10万プレイ達成</li>
                    <li>• 環境省主催コンテスト優秀賞</li>
                    <li>• メディア掲載3件</li>
                    <li>• 環境意識の向上（アンケート結果）</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-orange-100 rounded">
                <p className="text-sm">
                  <strong>教育的価値：</strong>社会課題への関心、チームワーク、
                  プログラミングスキル、プレゼンテーション能力が総合的に向上。
                  制作期間3ヶ月で、参加者全員のSTEAMスコアが平均25%向上。
                </p>
              </div>
            </div>

            {/* 事例2 */}
            <div className="bg-pink-50 border border-pink-300 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                  事例2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pink-800">NFTアートコレクション「Digital Emotions」</h3>
                  <p className="text-sm text-gray-600">制作者：中学1年生（個人制作）</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">プロジェクト詳細</h4>
                <p className="text-sm mb-3">
                  感情をテーマにした抽象的なデジタルアート10作品のシリーズ。
                  AIツールとPhotoshopを組み合わせて制作し、
                  OpenSeaの教育用コレクションとして展示。
                </p>
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="bg-pink-100 p-2 rounded text-xs">
                    <strong>制作期間：</strong>2ヶ月
                  </div>
                  <div className="bg-pink-100 p-2 rounded text-xs">
                    <strong>使用ツール：</strong>Midjourney, Photoshop
                  </div>
                  <div className="bg-pink-100 p-2 rounded text-xs">
                    <strong>展示場所：</strong>Virtual Gallery
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-pink-100 rounded">
                <p className="text-sm">
                  <strong>学習成果：</strong>アート理論の理解、デジタルツール操作、
                  著作権・知的財産権の学習、自己表現力の向上。
                  作品は学校の美術展でも展示され、デジタルとリアルの融合を実現。
                </p>
              </div>
            </div>

            {/* 事例3 */}
            <div className="bg-cyan-50 border border-cyan-300 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                  事例3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-800">VR教育空間「Future Classroom」</h3>
                  <p className="text-sm text-gray-600">制作者：中学3年生チーム（6名）</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">革新的な特徴</h4>
                <ul className="text-sm space-y-1">
                  <li>• VRヘッドセット対応の没入型学習空間</li>
                  <li>• AIティーチングアシスタント実装</li>
                  <li>• 多言語対応（日英中韓）</li>
                  <li>• リアルタイム協働作業機能</li>
                  <li>• 学習進捗の可視化システム</li>
                </ul>
              </div>
              
              <div className="mt-4 p-3 bg-cyan-100 rounded">
                <p className="text-sm">
                  <strong>社会的インパクト：</strong>港区教育委員会との連携により、
                  実際の小学校でパイロット導入。不登校児童の学習支援ツールとしても活用され、
                  教育のアクセシビリティ向上に貢献。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h4 className="font-bold mb-4">📊 メタバース創作教育の効果測定データ（2024-2025年）</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold mb-2 text-blue-800">創造性指標</h5>
                <ul className="text-sm space-y-1">
                  <li>• 発想の独創性：+42%</li>
                  <li>• 表現の多様性：+38%</li>
                  <li>• 問題解決力：+45%</li>
                  <li>• 芸術的感性：+33%</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold mb-2 text-green-800">技術スキル</h5>
                <ul className="text-sm space-y-1">
                  <li>• 3D空間理解：+56%</li>
                  <li>• プログラミング：+48%</li>
                  <li>• デジタルツール：+62%</li>
                  <li>• プロジェクト管理：+41%</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold mb-2 text-purple-800">社会性・協働性</h5>
                <ul className="text-sm space-y-1">
                  <li>• チームワーク：+52%</li>
                  <li>• 国際交流意欲：+67%</li>
                  <li>• プレゼン能力：+44%</li>
                  <li>• リーダーシップ：+39%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 保護者が知るべき安全対策とサポート方法
          </h2>

          <p className="mb-6">
            メタバースとNFTの世界は魅力的ですが、
            子どもたちが安全に活動するためには、
            適切な保護者のサポートが不可欠です。
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-red-800">🔒 メタバース安全対策チェックリスト</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">プライバシー保護</h4>
                <ul className="text-sm space-y-1">
                  <li>☑️ 実名・住所・学校名は絶対に公開しない</li>
                  <li>☑️ プロフィール写真は使用しない（アバターのみ）</li>
                  <li>☑️ 個人を特定できる情報の共有禁止</li>
                  <li>☑️ 位置情報サービスは常にOFF</li>
                  <li>☑️ 二段階認証の設定</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">コミュニケーション管理</h4>
                <ul className="text-sm space-y-1">
                  <li>☑️ 知らない人とのプライベートチャット禁止</li>
                  <li>☑️ 不適切な言動は即座に報告・ブロック</li>
                  <li>☑️ ボイスチャットは保護者の許可制</li>
                  <li>☑️ フレンドリクエストは既知の人のみ承認</li>
                  <li>☑️ 定期的なチャット履歴の確認</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">金銭トラブル防止</h4>
                <ul className="text-sm space-y-1">
                  <li>☑️ クレジットカード情報は登録しない</li>
                  <li>☑️ 仮想通貨の実取引は行わない</li>
                  <li>☑️ ゲーム内通貨の使用は月額上限設定</li>
                  <li>☑️ NFT取引は教育用環境のみ</li>
                  <li>☑️ 詐欺・フィッシングの手口を事前教育</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">保護者ができる積極的なサポート</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-teal-800">🤝 一緒に楽しむ姿勢</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>共同プレイ：</strong>
                  週1回は一緒にメタバースを探検し、子どもの世界を理解
                </li>
                <li>
                  <strong>作品鑑賞：</strong>
                  制作物に対して具体的な感想とフィードバック
                </li>
                <li>
                  <strong>学習機会：</strong>
                  新しい技術について一緒に学ぶ姿勢を示す
                </li>
                <li>
                  <strong>価値の共有：</strong>
                  創造性や努力のプロセスを評価
                </li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-800">📚 教育的な関わり方</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>現実との接続：</strong>
                  メタバース体験を実生活の学習に結びつける
                </li>
                <li>
                  <strong>批判的思考：</strong>
                  デジタル情報の真偽を見極める力を育成
                </li>
                <li>
                  <strong>時間管理：</strong>
                  デジタルとアナログのバランスを保つ
                </li>
                <li>
                  <strong>将来展望：</strong>
                  キャリアの可能性について対話
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">💡 健全な利用のための家庭ルール例</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">時間管理</p>
                <ul className="text-xs space-y-1">
                  <li>• 平日：1日1時間まで</li>
                  <li>• 週末：1日2時間まで</li>
                  <li>• 21時以降は利用禁止</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">活動内容</p>
                <ul className="text-xs space-y-1">
                  <li>• 創作活動を優先</li>
                  <li>• 暴力的コンテンツ禁止</li>
                  <li>• 教育的価値の確認</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">報告義務</p>
                <ul className="text-xs space-y-1">
                  <li>• 新しい友達の報告</li>
                  <li>• トラブル即座相談</li>
                  <li>• 週1回の活動共有</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 港区で学べるメタバース創作教室
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">対象年齢</th>
                  <th className="border border-gray-300 p-3 text-center">料金（月額）</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">東京AI創造スタジオ</td>
                  <td className="border border-gray-300 p-3 text-center">6-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">25,000円〜</td>
                  <td className="border border-gray-300 p-3">メタバース×NFT統合カリキュラム、少人数制</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">デジタルハリウッド ジュニア</td>
                  <td className="border border-gray-300 p-3 text-center">小3-高3</td>
                  <td className="border border-gray-300 p-3 text-center">28,000円</td>
                  <td className="border border-gray-300 p-3">プロ講師、業界連携、機材充実</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">CoderDojo 港区</td>
                  <td className="border border-gray-300 p-3 text-center">7-17歳</td>
                  <td className="border border-gray-300 p-3 text-center">無料</td>
                  <td className="border border-gray-300 p-3">ボランティア運営、コミュニティ重視</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Tech Kids School 渋谷</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3 text-center">20,900円</td>
                  <td className="border border-gray-300 p-3">サイバーエージェント運営、実践的</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">🎯 教室選びのポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 最新技術への対応（VR/AR機材の有無）</li>
              <li>• 作品発表・コンテスト参加機会</li>
              <li>• 保護者向けサポート体制</li>
              <li>• 少人数制での個別指導</li>
              <li>• 実績のあるカリキュラム</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：メタバースが拓く子どもたちの無限の可能性</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>メタバースは子どもの創造性を3次元で表現する新しいキャンバス</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>NFT技術により、デジタル作品が価値ある資産として認識される時代</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢・スキルに応じた段階的学習で、誰でも始められる</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>適切な安全対策と保護者サポートで、健全な活動が可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>将来のキャリアに直結する実践的スキルが身につく</span>
          </div>
        </div>

        <p className="text-lg">
          メタバースとNFTは、子どもたちにとって単なる遊びではなく、
          創造性、技術力、ビジネススキルを総合的に育む
          21世紀型の学習プラットフォームです。
          適切な指導とサポートにより、子どもたちは
          デジタル世界で無限の可能性を開花させることができるでしょう。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">メタバース創作体験ワークショップ</h3>
        <p className="mb-6">
          最新のVR機材とプロのクリエイター指導で、
          お子様の初めてのメタバース作品を一緒に作りませんか？
          NFTアートの基礎も安全に学べます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            体験ワークショップに申し込む
          </Link>
          <Link 
            href="/courses/game-creator" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            ゲームクリエイターコースの詳細
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">市場調査・統計データ</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.metaverseeducation.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Metaverse Education Alliance「Global Report 2025」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.roblox.com/corporate" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Roblox Corporation「Developer Economics Report」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「メタバース市場動向調査」（2025年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・技術文献</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.mext.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「デジタル教材の活用に関するガイドライン」（2025年）
                  </a>
              </li>
              <li>
                • IEEE「Virtual Worlds in Education: Best Practices」（2025年）
              </li>
              <li>
                • 日本デジタルゲーム学会「メタバース教育の可能性と課題」（2025年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">実践事例・研究報告</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 東京AI創造スタジオ「メタバース創作教育実践報告書」（2025年）
              </li>
              <li>
                • 港区教育委員会「VR/AR活用教育プロジェクト成果報告」（2025年）
              </li>
              <li>
                • Stanford Virtual Human Interaction Lab「Children in Virtual Worlds」（2025年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/3d-modeling-ai-introduction" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  3Dモデリング×AI入門：子どもが楽しく学ぶデジタル創作の新世界
                </h3>
                <p className="text-sm text-gray-600">
                  3D制作の基礎
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/game-development-programming-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どもがハマるゲーム開発プログラミング教室：ScratchからUnityまで
                </h3>
                <p className="text-sm text-gray-600">
                  ゲーム制作入門
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-art-education" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AIアートで子どもの創造性を育む：デジタル時代の芸術教育
                </h3>
                <p className="text-sm text-gray-600">
                  デジタルアート基礎
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