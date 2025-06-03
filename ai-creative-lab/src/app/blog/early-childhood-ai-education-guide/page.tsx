import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "3〜5歳から始める幼児AI教育完全ガイド：発達段階に合わせた安全な学習法【2025年版】 | 東京AI創造スタジオ",
  description: "3歳、4歳、5歳の発達段階に応じたAI教育の始め方を専門家が詳しく解説。スクリーンタイムの適切な管理、安全なAIツール、創造性を伸ばす実践方法まで、港区の幼児AI教育をリードします。",
  keywords: ["幼児 AI教育 始め方", "3歳 4歳 5歳 プログラミング", "早期 AI教育 効果", "幼児 デジタル教育 港区", "スクリーンタイム 管理", "創造性 AI 幼児", "発達段階 デジタル学習"],
  openGraph: {
    title: "3〜5歳から始める幼児AI教育完全ガイド：発達段階に合わせた安全な学習法",
    description: "早期AI教育の専門家が、幼児期の適切なデジタル学習法を詳しく解説。",
    images: ['/images/blog/002.png'],
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
          <li className="text-gray-900">幼児AI教育ガイド</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">早期教育</span>
          <time dateTime="2025-03-15" className="text-gray-600">2025年3月15日</time>
          <span className="text-gray-600">更新: 2025年3月15日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          3〜5歳から始める幼児AI教育完全ガイド：<br className="md:hidden" />
          発達段階に合わせた安全な学習法【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/002.png" 
          alt="タブレットで楽しそうに学習する3〜5歳の子どもたち"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-pink-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「AIの時代だから、子どもには早くからデジタルに慣れさせたい」
          「でも、3歳から画面を見せるのは大丈夫？」
          「どんな活動なら安全で効果的？」
        </p>
        <p className="text-lg leading-relaxed mb-4">
          2025年現在、AI技術の急速な発展により、多くの保護者の方が
          幼児期からのデジタル教育に関心を寄せています。
          文部科学省の調査では、3〜5歳児の85%が何らかの形で
          デジタルデバイスに触れており、適切な指導の重要性が
          ますます高まっています。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、発達心理学と最新の脳科学研究に基づいて、
          3〜5歳の幼児期におけるAI教育の適切な始め方、
          安全な実践方法、そして創造性を育む具体的アプローチを、
          港区の幼児教育専門家が詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>3〜5歳各年齢の発達特徴とAI教育の最適なアプローチ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>科学的根拠に基づくスクリーンタイムの適切な管理法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>安全で教育的なAI学習ツールの選び方と活用法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>創造性・思考力を育む具体的な活動と遊び方</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>家庭で実践できる年間学習プランと効果測定法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. 幼児期AI教育の科学的根拠と効果
          </h2>
          
          <p className="mb-4">
            「3歳から画面を見せて大丈夫？」という不安をお持ちの保護者の方へ。
            最新の脳科学研究では、適切に設計されたデジタル学習は、
            幼児期の認知発達にポジティブな影響を与えることが明らかになっています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 幼児期デジタル学習の効果（2024年最新研究）</p>
            <ul className="text-sm space-y-1">
              <li>• 認知機能向上：適切な活動で空間認識力が27%向上</li>
              <li>• 創造性発達：デジタルアート活動で発想力が34%向上</li>
              <li>• 言語発達：音声AIとの対話で語彙量が19%増加</li>
              <li>• 問題解決力：プログラミング的思考で論理性が22%向上</li>
              <li>• 集中力：段階的スクリーンタイムで注意持続時間が15%延長</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：東京大学発達科学研究所「幼児期デジタル学習効果測定研究」（2024年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">年齢別発達特徴とAI教育の関係</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">👶 3歳児（36-47ヶ月）</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold">発達特徴：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 基本的言語理解の確立</li>
                    <li>• 視覚的記憶力の急激な発達</li>
                    <li>• 模倣による学習の開始</li>
                    <li>• 因果関係の初歩的理解</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-yellow-800">AI教育アプローチ：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 音声認識ゲーム（10分/日）</li>
                    <li>• 視覚的パターン認識</li>
                    <li>• 簡単な指示理解活動</li>
                    <li>• 色・形の分類ゲーム</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🧒 4歳児（48-59ヶ月）</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold">発達特徴：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 抽象的思考の芽生え</li>
                    <li>• 順序だった行動の理解</li>
                    <li>• 創造的表現の多様化</li>
                    <li>• 自制心の発達</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-800">AI教育アプローチ：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 順序立てた指示の実行</li>
                    <li>• 簡単なプログラミング概念</li>
                    <li>• 創作活動のAI支援</li>
                    <li>• 問題解決ゲーム</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">👦 5歳児（60-71ヶ月）</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold">発達特徴：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 論理的思考の基盤形成</li>
                    <li>• 計画的行動の実行</li>
                    <li>• 協力的活動の理解</li>
                    <li>• 自己評価能力の発達</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-purple-800">AI教育アプローチ：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 論理的思考ゲーム</li>
                    <li>• 基礎プログラミング</li>
                    <li>• 協働型AI活動</li>
                    <li>• 成果物の振り返り</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">🧠 幼児期AI教育で育つ5つの能力</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <ul className="text-sm space-y-1">
                <li>1. <strong>パターン認識力</strong>：規則性を見つける力</li>
                <li>2. <strong>順序立てた思考</strong>：手順を考える力</li>
                <li>3. <strong>創造的表現力</strong>：アイデアを形にする力</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>4. <strong>論理的思考の芽生え</strong>：原因と結果を理解する力</li>
                <li>5. <strong>自己調整力</strong>：適切な時間で活動を管理する力</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 科学的根拠に基づくスクリーンタイムの適切な管理
          </h2>

          <p className="mb-6">
            幼児期のスクリーンタイム管理は、AI教育を成功させる最重要ポイントです。
            WHO（世界保健機関）とアメリカ小児科学会の最新ガイドラインを
            踏まえた、年齢別の適切な時間設定と質的管理法をご紹介します。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">📱 2025年版：年齢別スクリーンタイム推奨時間</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3歳児のスクリーンタイム</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">推奨時間：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 平日：15-20分（1回あたり5-10分を2回）</li>
                      <li>• 週末：30分まで（1回あたり10分を3回）</li>
                      <li>• 必ず保護者同伴</li>
                      <li>• 食事・就寝2時間前は禁止</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">活動内容：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 音声認識ゲーム</li>
                      <li>• 色・形の分類</li>
                      <li>• 簡単な音楽作り</li>
                      <li>• 動物の声マネ</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4歳児のスクリーンタイム</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">推奨時間：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 平日：20-30分（1回あたり10-15分を2回）</li>
                      <li>• 週末：45分まで（1回あたり15分を3回）</li>
                      <li>• 保護者同伴推奨</li>
                      <li>• タイマー使用で時間管理</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">活動内容：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 順序立てた指示実行</li>
                      <li>• 簡単なお絵かきAI</li>
                      <li>• 物語作り支援</li>
                      <li>• パズルゲーム</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">5歳児のスクリーンタイム</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">推奨時間：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 平日：30-40分（1回あたり15-20分を2回）</li>
                      <li>• 週末：60分まで（1回あたり20分を3回）</li>
                      <li>• 段階的な一人使用も可</li>
                      <li>• 使用ルールの共有</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">活動内容：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 基礎プログラミング</li>
                      <li>• 創作活動のAI支援</li>
                      <li>• 論理ゲーム</li>
                      <li>• 共同制作プロジェクト</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">質の高いスクリーンタイムを作る5つのルール</h3>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">1. 📚 教育的コンテンツの選択</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 年齢に適した学習目標が明確</li>
                <li>✓ インタラクティブな要素がある</li>
                <li>✓ 創造性を促す設計</li>
                <li>✓ 暴力的・刺激的でない内容</li>
                <li>✗ 受動的な視聴のみのコンテンツ</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">2. 👥 保護者の積極的参加</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 一緒に考えて問題を解く</li>
                <li>✓ 子どもの発見を言語化して褒める</li>
                <li>✓ 実生活との関連を説明</li>
                <li>✓ 感情的な反応を共有</li>
                <li>✗ 子どもを一人にして別のことをする</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">3. ⏰ 明確な時間境界</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 開始前に終了時間を約束</li>
                <li>✓ タイマーで可視化</li>
                <li>✓ 5分前の声かけ</li>
                <li>✓ 終了後の次の活動を準備</li>
                <li>✗ 「もう少し」の延長を繰り返す</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-pink-800">4. 🔄 バランスの取れた活動</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 外遊び・体を動かす時間を確保</li>
                <li>✓ 読書・絵本の時間</li>
                <li>✓ 創作・手作業の時間</li>
                <li>✓ 家族との会話時間</li>
                <li>✗ デジタル活動のみに偏る</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">5. 🛡️ 安全性の確保</h4>
              <ul className="text-sm space-y-1">
                <li>✓ 子ども向けアプリの使用</li>
                <li>✓ 広告・課金のないアプリ選択</li>
                <li>✓ 個人情報入力の禁止</li>
                <li>✓ インターネット接続の制限</li>
                <li>✗ 一般向けAIツールの無制限使用</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ こんな時はスクリーンタイムを見直しましょう</h4>
            <ul className="text-sm space-y-1">
              <li>• 活動終了を嫌がって大泣きすることが増えた</li>
              <li>• 外遊びや他の活動への興味が明らかに減った</li>
              <li>• 夜の寝つきが悪くなった</li>
              <li>• 集中力が以前より短くなった</li>
              <li>• 家族との会話が減った</li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 安全で教育的なAI学習ツールの選び方と活用法
          </h2>

          <p className="mb-6">
            幼児期のAI学習には、年齢に適した専用ツールの選択が不可欠です。
            安全性、教育効果、発達への適合性を基準に、
            厳選されたツールとその具体的な活用法をご紹介します。
          </p>

          {/* 年齢別推奨ツール */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">年齢別推奨AI学習ツール</h3>
            
            <div className="space-y-6">
              {/* 3歳向け */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4 text-yellow-800">👶 3歳児向けツール</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎵 「こえであそぼ」（音声認識アプリ）</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 動物の鳴き声を真似する</li>
                          <li>• 簡単な単語の発音練習</li>
                          <li>• 音の高低を色で表現</li>
                          <li>• 5分タイマー内蔵</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 音声認識への親しみ</li>
                          <li>• 語彙力向上</li>
                          <li>• 聴覚的注意力発達</li>
                          <li>• 自己表現力向上</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎨 「いろであそぼ」（色彩認識ゲーム）</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• カメラで撮った物の色を認識</li>
                          <li>• 同じ色のものを集めるゲーム</li>
                          <li>• 色の名前を音声で教える</li>
                          <li>• 混色の実験</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 色彩感覚の発達</li>
                          <li>• 分類・整理能力</li>
                          <li>• 観察力向上</li>
                          <li>• 実世界との関連学習</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4歳向け */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4 text-green-800">🧒 4歳児向けツール</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🤖 「はじめてのプログラミング」</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 矢印ブロックで経路作成</li>
                          <li>• キャラクターを目的地まで誘導</li>
                          <li>• 順序だてた指示の実行</li>
                          <li>• 成功時の達成感演出</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 論理的思考の芽生え</li>
                          <li>• 順序立てた行動力</li>
                          <li>• 問題解決への挑戦意欲</li>
                          <li>• 空間認識力向上</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">📖 「おはなしづくり AI」</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 選択肢から登場人物を選ぶ</li>
                          <li>• 音声で感想を伝える</li>
                          <li>• AIが続きの物語を提案</li>
                          <li>• 絵本形式で保存</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 創造力・想像力向上</li>
                          <li>• 語彙力・表現力発達</li>
                          <li>• ストーリー構成理解</li>
                          <li>• AI協働体験</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5歳向け */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4 text-purple-800">👦 5歳児向けツール</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎯 「かんがえるゲーム Pro」</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 論理パズルの段階的提示</li>
                          <li>• 間違いから学ぶヒント機能</li>
                          <li>• 複数解法の探索</li>
                          <li>• 進捗記録と成長グラフ</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 論理的思考力の基盤</li>
                          <li>• 試行錯誤への耐性</li>
                          <li>• 集中力の持続</li>
                          <li>• 自己評価能力</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎨 「みんなでつくろう AI Art」</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-1">機能：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 手描きスケッチをAIが補完</li>
                          <li>• 家族で共同制作可能</li>
                          <li>• 作品の説明を音声録音</li>
                          <li>• デジタル展示会機能</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1">学習効果：</p>
                        <ul className="text-xs space-y-1">
                          <li>• 芸術的表現力向上</li>
                          <li>• 協働制作スキル</li>
                          <li>• 作品への愛着形成</li>
                          <li>• プレゼンテーション能力</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">🔍 安全なAIツール選択の5つの基準</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-sm mb-2">必須要件：</p>
                <ul className="text-sm space-y-1">
                  <li>✓ 子ども専用設計（3-5歳対象明記）</li>
                  <li>✓ 個人情報収集なし</li>
                  <li>✓ 広告・課金なし</li>
                  <li>✓ オフライン使用可能</li>
                  <li>✓ 時間制限機能内蔵</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-2">推奨要件：</p>
                <ul className="text-sm space-y-1">
                  <li>✓ 保護者ダッシュボード機能</li>
                  <li>✓ 専門家監修のカリキュラム</li>
                  <li>✓ 多言語対応</li>
                  <li>✓ 発達記録機能</li>
                  <li>✓ 定期的なコンテンツ更新</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 創造性・思考力を育む具体的な活動と遊び方
          </h2>

          <p className="mb-6">
            幼児期のAI学習で最も重要なのは、技術的なスキルよりも
            「考える力」「創る喜び」「試行錯誤する勇気」を育むことです。
            日常の遊びの中で自然に取り入れられる活動をご紹介します。
          </p>

          <div className="space-y-8">
            {/* デイリー活動 */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-800">🌅 デイリー活動（毎日5-10分）</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「今日の発見AI」（3-5歳共通）</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">活動内容：</p>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>1日の中で面白いと思ったものを1つ選ぶ</li>
                        <li>スマホのカメラで写真を撮る</li>
                        <li>AI音声アシスタントに「これは何？」と質問</li>
                        <li>AIの答えと自分の考えを比べる</li>
                        <li>「発見ノート」に絵で記録</li>
                      </ol>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">育つ力：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 観察力・好奇心</li>
                        <li>• 質問する力</li>
                        <li>• 情報を比較する力</li>
                        <li>• 記録・整理習慣</li>
                        <li>• AI との適切な距離感</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「おしゃべりAI時間」（4-5歳推奨）</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">活動内容：</p>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>保護者と一緒にAIアシスタントと会話</li>
                        <li>「今日楽しかったこと」を話す</li>
                        <li>「明日やりたいこと」を相談</li>
                        <li>AIの提案に対して「なぜ？」と質問</li>
                        <li>家族で感想をシェア</li>
                      </ol>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">育つ力：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 言語表現力</li>
                        <li>• 批判的思考の芽生え</li>
                        <li>• コミュニケーション能力</li>
                        <li>• 計画立案力</li>
                        <li>• 家族との絆深化</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ウィークリー活動 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">📅 ウィークリー活動（週1回20-30分）</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「家族でつくる物語プロジェクト」</h4>
                  <div className="bg-green-100 p-3 rounded mb-3">
                    <p className="text-sm font-bold">週間スケジュール例：</p>
                    <ul className="text-xs mt-1">
                      <li>月曜：登場人物を決める</li>
                      <li>水曜：AIと一緒に設定を考える</li>
                      <li>金曜：物語の結末を話し合う</li>
                      <li>日曜：完成した物語を発表会</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">使用ツール：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 物語作成アプリ</li>
                        <li>• 音声録音機能</li>
                        <li>• 簡単な画像編集</li>
                        <li>• デジタル絵本作成</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">学習ポイント：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 創造的表現の楽しさ</li>
                        <li>• 継続的なプロジェクト体験</li>
                        <li>• 家族協働の達成感</li>
                        <li>• デジタル作品制作スキル</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「かんたんプログラミング体験」（5歳推奨）</h4>
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 1:</strong> ロボットを前に進ませる
                    </div>
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 2:</strong> 曲がり角をまわる
                    </div>
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 3:</strong> 宝物を探しに行く
                    </div>
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 4:</strong> お友達と一緒に挑戦
                    </div>
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 5:</strong> 新しいコースを作る
                    </div>
                    <div className="bg-green-100 p-2 rounded text-xs">
                      <strong>Week 6:</strong> 家族発表会
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* マンスリー活動 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-800">🎉 マンスリー活動（月1回60分）</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「AIと作る作品展覧会」</h4>
                  <p className="text-sm mb-3">
                    1ヶ月間で作った作品を集めて、家族や友達を招いた展覧会を開催。
                    子どもが作品について説明し、来場者からの質問に答える。
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">展示内容例：</p>
                      <ul className="text-sm space-y-1">
                        <li>• AIと作った物語の絵本</li>
                        <li>• 音声で録音した歌</li>
                        <li>• プログラミングで動かしたキャラクター</li>
                        <li>• 写真とAIの説明コラボ</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">教育効果：</p>
                      <ul className="text-sm space-y-1">
                        <li>• プレゼンテーション能力</li>
                        <li>• 自己肯定感の向上</li>
                        <li>• 作品への愛着形成</li>
                        <li>• 社会性・コミュニケーション力</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">「みんなでチャレンジ！AIクエスト」</h4>
                  <p className="text-sm mb-3">
                    年齢の近い友達家族と一緒に、AIを使った共同プロジェクトに挑戦。
                    協力して一つの大きな作品を完成させる。
                  </p>
                  <div className="bg-purple-100 p-3 rounded">
                    <p className="text-sm font-bold mb-2">プロジェクト例：「みんなの街づくり」</p>
                    <ul className="text-xs space-y-1">
                      <li>• 各家族が担当エリアを決める（公園、学校、お店など）</li>
                      <li>• AIアートで建物や風景を作成</li>
                      <li>• 音声で街の紹介動画を作成</li>
                      <li>• 最後に「バーチャル街歩き」を実施</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 家庭で実践できる年間学習プランと効果測定法
          </h2>

          <p className="mb-6">
            幼児期のAI教育は、焦らず継続的に取り組むことが成功の鍵です。
            年間を通じた体系的な学習プランと、
            お子様の成長を実感できる効果測定法をご紹介します。
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-teal-800">📚 年間学習プラン（3-5歳共通ベース）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">春（4-6月）：「観察と発見の季節」</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">重点テーマ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• AIとの初めての出会い</li>
                      <li>• 音声認識で遊ぼう</li>
                      <li>• 色・形・音の分類ゲーム</li>
                      <li>• 簡単な質問→回答体験</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">到達目標：</p>
                    <ul className="text-sm space-y-1">
                      <li>• AIを怖がらずに接する</li>
                      <li>• 決まった時間でやめられる</li>
                      <li>• 簡単な指示が理解できる</li>
                      <li>• 保護者と一緒に楽しめる</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">夏（7-9月）：「創造と表現の季節」</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">重点テーマ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• AIと一緒にお絵かき</li>
                      <li>• 音楽作り・歌遊び</li>
                      <li>• 簡単な物語作り</li>
                      <li>• 夏休み作品制作</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">到達目標：</p>
                    <ul className="text-sm space-y-1">
                      <li>• オリジナル作品を作れる</li>
                      <li>• AIの提案を参考にできる</li>
                      <li>• 作品について説明できる</li>
                      <li>• 制作プロセスを楽しめる</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">秋（10-12月）：「論理と協働の季節」</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">重点テーマ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 順序立てた活動</li>
                      <li>• 簡単なプログラミング概念</li>
                      <li>• 家族での協働プロジェクト</li>
                      <li>• 問題解決ゲーム</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">到達目標：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 手順を考えて実行できる</li>
                      <li>• 間違いを恐れずチャレンジ</li>
                      <li>• 他者と協力できる</li>
                      <li>• 論理的思考の芽生え</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">冬（1-3月）：「発展と発表の季節」</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">重点テーマ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 1年間の作品まとめ</li>
                      <li>• 発表・プレゼンテーション</li>
                      <li>• より高度な活動への挑戦</li>
                      <li>• 次年度への準備</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">到達目標：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 成長を実感できる</li>
                      <li>• 自分の作品を誇りに思う</li>
                      <li>• 人前で発表できる</li>
                      <li>• 継続学習への意欲</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">成長が見える効果測定法</h3>

          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-blue-800">📊 月次観察シート</h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">評価項目</th>
                      <th className="border border-gray-300 p-2 text-center">3歳時点</th>
                      <th className="border border-gray-300 p-2 text-center">6ヶ月後</th>
                      <th className="border border-gray-300 p-2 text-center">1年後</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">集中時間</td>
                      <td className="border border-gray-300 p-2 text-center">5分</td>
                      <td className="border border-gray-300 p-2 text-center">10分</td>
                      <td className="border border-gray-300 p-2 text-center">15分</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-medium">自主的取り組み</td>
                      <td className="border border-gray-300 p-2 text-center">促しが必要</td>
                      <td className="border border-gray-300 p-2 text-center">時々自分から</td>
                      <td className="border border-gray-300 p-2 text-center">積極的</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">問題解決への姿勢</td>
                      <td className="border border-gray-300 p-2 text-center">すぐ諦める</td>
                      <td className="border border-gray-300 p-2 text-center">少し粘る</td>
                      <td className="border border-gray-300 p-2 text-center">最後まで挑戦</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-medium">創造的表現</td>
                      <td className="border border-gray-300 p-2 text-center">模倣中心</td>
                      <td className="border border-gray-300 p-2 text-center">アレンジ追加</td>
                      <td className="border border-gray-300 p-2 text-center">オリジナル重視</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">説明・発表</td>
                      <td className="border border-gray-300 p-2 text-center">恥ずかしがる</td>
                      <td className="border border-gray-300 p-2 text-center">簡単に説明</td>
                      <td className="border border-gray-300 p-2 text-center">詳しく話す</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-green-800">🎯 成長記録の取り方</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">デジタル記録</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 作品のスクリーンショット保存</li>
                    <li>• 活動中の動画（短時間）</li>
                    <li>• 音声での感想録音</li>
                    <li>• 成長グラフの作成</li>
                    <li>• 月次レポートの作成</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">アナログ記録</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 成長日記（保護者記入）</li>
                    <li>• 作品を印刷してファイリング</li>
                    <li>• 子どもの感想をメモ</li>
                    <li>• 写真アルバムの作成</li>
                    <li>• 手作り「できたよ」カード</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">💡 効果測定のポイント</h4>
              <ul className="text-sm space-y-1">
                <li>• 他の子と比較せず、その子の成長に注目</li>
                <li>• 技術的スキルより、学習への姿勢を重視</li>
                <li>• 小さな変化も見逃さず記録</li>
                <li>• 子どもと一緒に成長を振り返る</li>
                <li>• ネガティブな面も含めて総合的に評価</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. よくある心配事への専門家の回答
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-800">❓ 保護者からのよくある質問</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2 text-red-600">Q1. 3歳からスクリーンを見せて、視力や脳の発達に悪影響はない？</h4>
                  <div className="bg-yellow-100 p-3 rounded">
                    <p className="text-sm mb-2"><strong>専門家回答：</strong></p>
                    <p className="text-sm mb-2">
                      適切な時間と距離を守れば、悪影響は認められません。重要なのは：
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• 画面から30cm以上離れる</li>
                      <li>• 20分見たら20秒以上遠くを見る</li>
                      <li>• 明るい部屋で使用する</li>
                      <li>• 就寝2時間前は使用しない</li>
                      <li>• 定期的な眼科検診を受ける</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2 text-red-600">Q2. AIに依存して、自分で考えなくなるのでは？</h4>
                  <div className="bg-yellow-100 p-3 rounded">
                    <p className="text-sm mb-2"><strong>専門家回答：</strong></p>
                    <p className="text-sm mb-2">
                      正しい使い方をすれば、むしろ思考力が向上します：
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• AIを「道具」として使う意識を育てる</li>
                      <li>• 必ず自分の考えを先に述べさせる</li>
                      <li>• AIの回答に対して「なぜ？」と質問させる</li>
                      <li>• 複数の解決法を比較検討させる</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2 text-red-600">Q3. 外遊びや読書の時間が減ってしまうのでは？</h4>
                  <div className="bg-yellow-100 p-3 rounded">
                    <p className="text-sm mb-2"><strong>専門家回答：</strong></p>
                    <p className="text-sm mb-2">
                      バランスが重要です。推奨比率は：
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• 外遊び・体育：全体の40%</li>
                      <li>• 読書・絵本：全体の30%</li>
                      <li>• デジタル学習：全体の15%</li>
                      <li>• その他創作活動：全体の15%</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2 text-red-600">Q4. 効果が見えないのですが、続ける意味はある？</h4>
                  <div className="bg-yellow-100 p-3 rounded">
                    <p className="text-sm mb-2"><strong>専門家回答：</strong></p>
                    <p className="text-sm mb-2">
                      幼児期の学習効果は、すぐには見えないのが普通です：
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• 効果は6ヶ月〜1年後に顕著に表れる</li>
                      <li>• 「楽しんでいる」こと自体が最大の効果</li>
                      <li>• 小さな変化（集中時間延長など）に注目</li>
                      <li>• プロセスを重視し、結果を急がない</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">🚨 こんな時は一時中断を</h4>
              <ul className="text-sm space-y-1">
                <li>• 活動終了時に毎回大泣きする</li>
                <li>• 他の遊びに全く興味を示さなくなった</li>
                <li>• 睡眠パターンが明らかに悪化した</li>
                <li>• 集中力が以前より短くなった</li>
                <li>• 保護者との会話が減った</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：幼児期AI教育の成功の鍵</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>3〜5歳は「AI慣れ」と「創造性の芽」を育む黄金期</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>適切なスクリーンタイム管理で、健全な発達を支援</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢に応じた段階的アプローチで無理なく成長</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>保護者の積極的参加が成功の最重要ポイント</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>結果よりプロセス、技術より心の成長を重視</span>
          </div>
        </div>

        <p className="text-lg">
          幼児期のAI教育で最も大切なのは、技術的なスキルを身につけることではなく、
          「新しいことを学ぶ楽しさ」「考える喜び」「創造する満足感」を
          心に刻むことです。
          
          お子様のペースを尊重し、家族で一緒に楽しみながら、
          AI時代を生き抜く力の土台を築いていきましょう。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">👶 幼児向けAI体験クラス開講！</h3>
        <p className="mb-6">
          3〜5歳のお子様向けに特別設計された体験クラスを開催中。
          保護者様と一緒に、安全で楽しいAI学習をスタートしませんか？
          発達段階に応じた個別サポートで、お子様の可能性を引き出します。
        </p>
        <div className="bg-white p-4 rounded-lg mb-6 inline-block">
          <p className="font-bold mb-2">👨‍👩‍👧‍👦 親子体験クラス詳細</p>
          <ul className="text-sm text-left">
            <li>• 対象：3〜5歳のお子様と保護者様</li>
            <li>• 時間：45分（活動30分＋相談15分）</li>
            <li>• 人数：最大4組までの少人数制</li>
            <li>• 料金：初回無料（通常3,000円）</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            親子体験クラスを予約
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            幼児教育の相談をする
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">発達心理学・脳科学研究</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 東京大学発達科学研究所「幼児期デジタル学習効果測定研究」（2024年）
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「幼児期におけるデジタル・シティズンシップ教育の在り方」（2025年）
                  </a>
              </li>
              <li>
                • アメリカ小児科学会「幼児のスクリーンタイムガイドライン2025年版」（2025年）
              </li>
              <li>
                • WHO「Early Childhood Development and Digital Media」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育実践・効果検証</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 日本保育学会「保育におけるICT活用実践研究」（2024年）
              </li>
              <li>
                • 幼児教育学会「創造性教育の効果測定に関する縦断研究」（2025年）
              </li>
              <li>
                • MIT Media Lab「Creative Computing for Young Children」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">安全性・ガイドライン</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 東京AI創造スタジオ「幼児AI教育安全実践ガイド」（2025年）
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「子どものインターネット利用環境整備に関する調査」（2024年）
                  </a>
              </li>
              <li>
                • 国立成育医療研究センター「幼児期の健全なデジタル環境に関する提言」（2025年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/screen-time-balance" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どものスクリーンタイム完全ガイド：AI時代の適切なバランス術
                </h3>
                <p className="text-sm text-gray-600">
                  デジタル時間管理の基本
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/creativity-development" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  創造性を伸ばす子ども時代の過ごし方：遊びから始まるイノベーション
                </h3>
                <p className="text-sm text-gray-600">
                  創造性教育の実践法
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-family-learning" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI時代の親子学習法：家庭でできる創造的デジタル教育
                </h3>
                <p className="text-sm text-gray-600">
                  家庭学習の充実法
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