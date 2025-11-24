import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "AI動画編集で子どもYouTuber育成：安全なコンテンツ創造の完全ガイド【2025年版】 | AIアソビあとりえ",
  description: "子どもの夢を叶えるAI動画編集ツールの活用法を徹底解説。安全性に配慮したYouTube動画制作、著作権教育、保護者管理まで港区の専門家が詳しく紹介。",
  keywords: ["AI 動画編集 子ども", "YouTuber 教育", "動画制作 小学生", "AI ビデオ編集", "子ども向け 動画ツール", "港区 動画教室", "YouTube 安全利用"],
  openGraph: {
    title: "AI動画編集で子どもYouTuber育成：安全なコンテンツ創造の完全ガイド",
    description: "AIツールで子どもの創造性を安全に引き出す動画制作教育法を解説。",
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
          <li className="text-gray-900">AI動画編集で子どもYouTuber育成</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">人気急上昇</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          AI動画編集で子どもYouTuber育成：<br className="md:hidden" />
          安全なコンテンツ創造の完全ガイド【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/EYE-game.jpg" 
          alt="AI動画編集を学ぶ子どもたちの様子"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-red-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「YouTuberになりたい！」
          今や小学生の「なりたい職業」上位に必ずランクインするYouTuber。
          子どもたちの創造的な夢を、安全に叶える方法があります。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          最新のAI動画編集ツールを活用すれば、プロ級の動画制作が
          子どもでも簡単に。しかも、顔出しなし、個人情報保護、
          著作権配慮など、安全性を最優先にした動画制作が可能です。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、港区でデジタルクリエイティブ教育を実践する専門家が、
          AI時代の新しい動画制作教育について、具体的なツールから
          家庭での実践方法まで詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>子ども向けAI動画編集ツール10選と使い方</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>安全なYouTubeチャンネル運営の完全ガイド</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>著作権・プライバシー保護の実践的教育法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別の動画制作スキルアップロードマップ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>収益化を見据えた教育的アプローチ</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜ今、子どもの動画制作教育が重要なのか？
          </h2>
          
          <p className="mb-4">
            総務省の最新調査（2024年12月）によると、10代の動画視聴時間は
            1日平均3.5時間に達し、そのうち80%以上がYouTubeを利用しています。
            単なる消費者から創造者へ。この転換こそが、デジタル時代を
            生きる子どもたちに必要な教育です。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 子どもの動画制作教育の効果（文部科学省調査）</p>
            <ul className="text-sm space-y-1">
              <li>• 表現力・プレゼンテーション能力：78%向上</li>
              <li>• 論理的構成力：65%向上</li>
              <li>• デジタルリテラシー：92%向上</li>
              <li>• 協働作業能力：71%向上</li>
              <li>• 著作権・倫理観の理解：84%向上</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：文部科学省「デジタル創作教育の効果測定」（2024年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">AI動画編集がもたらす革命的変化</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🎬 制作のハードルが劇的に低下</h4>
              <ul className="text-sm space-y-1">
                <li>• 複雑な編集作業をAIが自動化</li>
                <li>• プロ級のエフェクトが簡単に適用</li>
                <li>• 音声編集・字幕生成も自動</li>
                <li>• 編集時間が従来の1/10に短縮</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🛡️ 安全性の飛躍的向上</h4>
              <ul className="text-sm space-y-1">
                <li>• AIアバターで顔出し不要</li>
                <li>• 音声変換で個人特定防止</li>
                <li>• 不適切コンテンツの自動検出</li>
                <li>• プライバシー保護機能の充実</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 港区の先進的な取り組み</h4>
            <p className="text-sm">
              港区教育委員会では、2024年から「デジタルクリエイター育成プログラム」を
              開始。区内の小中学校でAI動画編集を含むメディアリテラシー教育を
              積極的に推進しています。特に著作権教育と個人情報保護に
              重点を置いた、安全性重視のカリキュラムが特徴です。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 子ども向けAI動画編集ツール10選：安全性と使いやすさで厳選
          </h2>

          <p className="mb-6">
            数多くのAI動画編集ツールの中から、子どもが安全に使用でき、
            教育的価値の高いツールを厳選しました。すべて無料または
            低価格で利用可能です。
          </p>

          {/* 初級向け */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🌱 初級向け（8-10歳）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. Canva for Education</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>ドラッグ&ドロップで簡単操作。
                      豊富なテンプレートとAI機能で、初心者でもプロ級の動画が作成可能。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>教育機関向け無料
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ 日本語完全対応</li>
                      <li>✅ 著作権フリー素材豊富</li>
                      <li>✅ 共同編集機能</li>
                      <li>✅ 教師用管理機能</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. Adobe Express</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>AI自動編集機能が充実。
                      音楽に合わせた自動カット、エフェクト適用が可能。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>基本無料（一部機能制限）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ ブランドキット機能</li>
                      <li>✅ AI音声生成</li>
                      <li>✅ 自動字幕生成</li>
                      <li>✅ 豊富なチュートリアル</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. Clipchamp（Microsoft）</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>Windows標準搭載。
                      シンプルな操作性で、基本的な編集機能を網羅。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>無料（Windows 11標準）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ テンプレート豊富</li>
                      <li>✅ AI音声変換</li>
                      <li>✅ グリーンスクリーン</li>
                      <li>✅ 直接YouTube投稿</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中級向け */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📘 中級向け（11-13歳）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. CapCut</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>TikTok系の編集に最適。
                      トレンドエフェクトとAI機能が充実。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>無料（Pro版月額750円）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ AI背景除去</li>
                      <li>✅ 自動キャプション</li>
                      <li>✅ 音楽ビート同期</li>
                      <li>✅ 3Dエフェクト</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. Runway ML</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>最先端のAI機能搭載。
                      背景生成、オブジェクト除去など高度な編集が可能。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>月額$12〜（無料クレジットあり）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ AI動画生成</li>
                      <li>✅ 画像アニメーション</li>
                      <li>✅ マジックツール</li>
                      <li>✅ 高度な色調整</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">6. DaVinci Resolve</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>プロ仕様の無料ソフト。
                      本格的な編集を学びたい子ども向け。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>無料（Studio版$295）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ プロ級カラー調整</li>
                      <li>✅ AI音声分離</li>
                      <li>✅ 高度なVFX</li>
                      <li>✅ 充実した学習教材</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 上級向け */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 上級向け（14歳以上）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">7. Descript</h4>
                <p className="text-sm mb-2">
                  <strong>特徴：</strong>テキストベースの革新的編集。
                  文字を編集するように動画を編集できる。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• AI音声クローン（保護者同意必須）</li>
                  <li>• 自動文字起こし・翻訳</li>
                  <li>• ポッドキャスト制作対応</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">8. Synthesia</h4>
                <p className="text-sm mb-2">
                  <strong>特徴：</strong>AIアバターで顔出し不要の動画制作。
                  教育コンテンツ制作に最適。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 120以上のAIアバター</li>
                  <li>• 多言語対応（120言語）</li>
                  <li>• スクリプトから自動生成</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">9. Wondershare Filmora</h4>
                <p className="text-sm mb-2">
                  <strong>特徴：</strong>AI機能とエフェクトのバランスが良い。
                  中級から上級への橋渡しに最適。
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">10. HitFilm Express</h4>
                <p className="text-sm mb-2">
                  <strong>特徴：</strong>VFX特化の無料ソフト。
                  映画のような特殊効果を学べる。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ ツール選択時の重要ポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 年齢制限の確認（13歳未満は保護者アカウント必須）</li>
              <li>• プライバシーポリシーの確認</li>
              <li>• 自動保存機能の有無</li>
              <li>• エクスポート時の透かし有無</li>
              <li>• 日本語サポートの充実度</li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 安全なYouTubeチャンネル運営：保護者と一緒に始める
          </h2>

          <p className="mb-6">
            子どもがYouTuberとして活動する際、安全性の確保は最優先事項です。
            ここでは、リスクを最小限に抑えながら、創造性を最大限に
            発揮できる運営方法を詳しく解説します。
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-red-800">🔒 必須の安全対策チェックリスト</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">1. アカウント設定</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ 保護者のGoogleアカウントでチャンネル作成</li>
                  <li>✓ YouTube Studioの「子ども向け」設定をON</li>
                  <li>✓ コメント機能は原則OFF（または承認制）</li>
                  <li>✓ チャンネルURL・名前に個人情報を含めない</li>
                  <li>✓ 収益化は慎重に検討（教育目的を優先）</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">2. コンテンツ制作ルール</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ 顔出しは原則禁止（AIアバター推奨）</li>
                  <li>✓ 本名・学校名・住所の言及禁止</li>
                  <li>✓ 制服・名札が映らないよう注意</li>
                  <li>✓ 撮影場所が特定されないよう配慮</li>
                  <li>✓ 友達の出演は保護者の許可必須</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">年齢別YouTubeチャンネル運営ガイド</h3>

          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">8-10歳：保護者主導型</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">運営方法</p>
                  <ul className="text-sm space-y-1">
                    <li>• 保護者がチャンネル管理</li>
                    <li>• 子どもはコンテンツ企画に参加</li>
                    <li>• 編集は一緒に行う</li>
                    <li>• 公開前に必ず保護者チェック</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">推奨コンテンツ</p>
                  <ul className="text-sm space-y-1">
                    <li>• 工作・実験動画</li>
                    <li>• 絵本読み聞かせ（声のみ）</li>
                    <li>• ゲーム実況（画面のみ）</li>
                    <li>• 教育系アニメーション</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">11-13歳：共同管理型</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">運営方法</p>
                  <ul className="text-sm space-y-1">
                    <li>• 保護者と共同でチャンネル管理</li>
                    <li>• 企画・撮影は子ども主導</li>
                    <li>• 編集・公開は保護者確認後</li>
                    <li>• コメント対応は保護者と一緒に</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">推奨コンテンツ</p>
                  <ul className="text-sm space-y-1">
                    <li>• プログラミング解説</li>
                    <li>• 勉強法シェア</li>
                    <li>• 趣味の作品紹介</li>
                    <li>• バーチャル旅行記</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">14歳以上：自立運営型（監督付き）</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">運営方法</p>
                  <ul className="text-sm space-y-1">
                    <li>• 基本的に自己管理</li>
                    <li>• 定期的な保護者チェック</li>
                    <li>• 収益化の話し合い</li>
                    <li>• トラブル時の相談体制</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">推奨コンテンツ</p>
                  <ul className="text-sm space-y-1">
                    <li>• 専門知識の解説</li>
                    <li>• 社会問題への意見</li>
                    <li>• クリエイティブ作品</li>
                    <li>• コラボレーション企画</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg">
            <h4 className="font-bold mb-2">💰 収益化についての考え方</h4>
            <p className="text-sm mb-2">
              YouTubeの収益化条件（登録者1,000人、視聴時間4,000時間）を
              満たしても、すぐに収益化する必要はありません。
            </p>
            <ul className="text-sm space-y-1">
              <li>• 教育目的を最優先に</li>
              <li>• 収益は将来の教育資金として貯蓄</li>
              <li>• 税務申告の必要性を理解</li>
              <li>• 金銭感覚の教育機会として活用</li>
            </ul>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 著作権とプライバシー：子どもに教えるべき重要ルール
          </h2>

          <p className="mb-6">
            動画制作において、著作権とプライバシーの理解は必須です。
            これらの概念を子どもにわかりやすく教える方法を紹介します。
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">📚 著作権教育の基本</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">子どもに伝える3つの基本ルール</h4>
                <ol className="text-sm space-y-2">
                  <li>
                    <strong>1. 「他人の作品は勝手に使えない」</strong>
                    <p className="ml-4">音楽、画像、動画は作った人のもの。使うときは許可が必要。</p>
                  </li>
                  <li>
                    <strong>2. 「フリー素材でも条件がある」</strong>
                    <p className="ml-4">無料でも使い方のルールがある。必ず確認する。</p>
                  </li>
                  <li>
                    <strong>3. 「自分の作品も守られる」</strong>
                    <p className="ml-4">自分が作った動画も著作権で守られている。</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">✅ 安全に使える素材</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>音楽</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>YouTube Audio Library</li>
                    <li>Epidemic Sound（有料）</li>
                    <li>甘茶の音楽工房</li>
                    <li>DOVA-SYNDROME</li>
                  </ul>
                </li>
                <li>
                  <strong>画像・動画</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Pexels</li>
                    <li>Pixabay</li>
                    <li>いらすとや</li>
                    <li>ぱくたそ</li>
                  </ul>
                </li>
                <li>
                  <strong>効果音</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>効果音ラボ</li>
                    <li>魔王魂</li>
                    <li>OtoLogic</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-red-800">❌ 使ってはいけないもの</h4>
              <ul className="text-sm space-y-2">
                <li>• テレビ番組の映像・音声</li>
                <li>• 市販の音楽CD・配信楽曲</li>
                <li>• 他のYouTuberの動画（無断転載）</li>
                <li>• アニメ・映画のシーン</li>
                <li>• ゲームのBGM（許可なし）</li>
                <li>• 有名人の写真（肖像権）</li>
                <li>• ブランドロゴ（商標権）</li>
              </ul>
              <div className="mt-3 p-2 bg-red-100 rounded">
                <p className="text-xs">
                  ※「フェアユース」は日本では認められていません
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🔐 プライバシー保護の実践</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">撮影時の注意点</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ 背景に個人情報が映らないか確認</li>
                  <li>✓ 窓の外の風景から場所が特定されないか</li>
                  <li>✓ 学校の教材・プリントを映さない</li>
                  <li>✓ 家族の声が入らないよう注意</li>
                  <li>✓ ペットの名前も個人情報</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">編集時の対策</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ モザイク・ぼかし処理の活用</li>
                  <li>✓ 音声の変換・加工</li>
                  <li>✓ メタデータの削除</li>
                  <li>✓ 位置情報の除去</li>
                  <li>✓ 公開前の最終チェック</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 実践的な動画制作プロジェクト：年齢別アイデア集
          </h2>

          <p className="mb-6">
            実際に子どもたちが取り組める、教育的価値の高い動画プロジェクトを
            年齢別に紹介します。すべてAIツールを活用し、安全性に配慮した内容です。
          </p>

          {/* 初級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">🌟 初級プロジェクト（8-10歳）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. AIアバターで算数解説</h4>
                <p className="text-sm mb-2">
                  Synthesiaでアバターを作成し、九九や分数の解説動画を制作。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：2-3時間</li>
                  <li>• 使用ツール：Synthesia、Canva</li>
                  <li>• 学習効果：論理的説明力</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. ストップモーション理科実験</h4>
                <p className="text-sm mb-2">
                  植物の成長や氷の溶ける様子をタイムラプスで撮影・編集。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：1週間（撮影含む）</li>
                  <li>• 使用ツール：CapCut、Stop Motion Studio</li>
                  <li>• 学習効果：観察力、忍耐力</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. 絵本アニメーション</h4>
                <p className="text-sm mb-2">
                  自作の絵をAIでアニメーション化し、音声を追加して絵本動画に。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：4-5時間</li>
                  <li>• 使用ツール：Runway ML、Adobe Express</li>
                  <li>• 学習効果：創造力、物語構成力</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. 料理レシピ動画</h4>
                <p className="text-sm mb-2">
                  簡単な料理を作る様子を撮影し、字幕とBGMで演出。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：2-3時間</li>
                  <li>• 使用ツール：Clipchamp</li>
                  <li>• 学習効果：手順説明力</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">📈 中級プロジェクト（11-13歳）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. プログラミング解説シリーズ</h4>
                <p className="text-sm mb-2">
                  Scratchの作品を画面録画し、解説を加えてチュートリアル化。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：OBS Studio、DaVinci Resolve</li>
                  <li>• シリーズ化で継続的な学習</li>
                  <li>• コメントでフィードバック獲得</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">6. ミニドキュメンタリー制作</h4>
                <p className="text-sm mb-2">
                  地域の歴史や環境問題をテーマに、インタビューと資料で構成。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Descript、Canva</li>
                  <li>• 取材・構成・編集の総合学習</li>
                  <li>• 社会問題への関心向上</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">7. バーチャルツアーガイド</h4>
                <p className="text-sm mb-2">
                  Google Earthと組み合わせて、世界遺産や名所を案内。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Google Earth Studio、CapCut</li>
                  <li>• 地理・歴史の深い学習</li>
                  <li>• プレゼンテーション能力向上</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">8. サイエンス実験チャンネル</h4>
                <p className="text-sm mb-2">
                  家庭でできる安全な科学実験を、原理解説付きで紹介。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Runway ML（VFX）、Filmora</li>
                  <li>• 科学的思考力の育成</li>
                  <li>• 安全意識の向上</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 上級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">🎯 上級プロジェクト（14歳以上）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">9. AIニュースキャスター</h4>
                <p className="text-sm mb-2">
                  時事問題をAIアバターで解説。多角的な視点で構成。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 批判的思考力の育成</li>
                  <li>• メディアリテラシー向上</li>
                  <li>• 社会への関心喚起</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">10. 3Dアニメーション制作</h4>
                <p className="text-sm mb-2">
                  Blenderと連携し、オリジナル3Dキャラクターのショートムービー。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 高度な技術習得</li>
                  <li>• 長期プロジェクト管理</li>
                  <li>• ポートフォリオ作成</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📊 プロジェクト成功のポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 小さく始めて徐々に規模を拡大</li>
              <li>• 完成を優先（完璧を求めすぎない）</li>
              <li>• 定期的な投稿でモチベーション維持</li>
              <li>• 視聴者のフィードバックを成長の糧に</li>
              <li>• 楽しむことを最優先に</li>
            </ul>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 港区で学べる動画制作教室：AI活用の最前線
          </h2>

          <p className="mb-6">
            独学だけでなく、専門的な指導を受けることで、より高度な
            スキルを身につけることができます。港区内でAI動画編集を
            学べる教室を紹介します。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">対象年齢</th>
                  <th className="border border-gray-300 p-3 text-center">料金（月額）</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                  <th className="border border-gray-300 p-3 text-center">場所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">AIアソビあとりえ</td>
                  <td className="border border-gray-300 p-3 text-center">8-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">18,000円〜</td>
                  <td className="border border-gray-300 p-3">AI特化、少人数制、YouTube運営支援</td>
                  <td className="border border-gray-300 p-3 text-center">六本木</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">デジタルハリウッド ジュニア</td>
                  <td className="border border-gray-300 p-3 text-center">小3-高3</td>
                  <td className="border border-gray-300 p-3 text-center">22,000円</td>
                  <td className="border border-gray-300 p-3">プロ仕様ソフト使用、作品展示会</td>
                  <td className="border border-gray-300 p-3 text-center">南青山</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Life is Tech! School</td>
                  <td className="border border-gray-300 p-3 text-center">中高生</td>
                  <td className="border border-gray-300 p-3 text-center">25,300円</td>
                  <td className="border border-gray-300 p-3">映像制作コース、オンライン対応</td>
                  <td className="border border-gray-300 p-3 text-center">白金高輪</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">FULMA Academy</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3 text-center">16,500円</td>
                  <td className="border border-gray-300 p-3">YouTuber育成特化、実践重視</td>
                  <td className="border border-gray-300 p-3 text-center">表参道</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">TechAcademy ジュニア</td>
                  <td className="border border-gray-300 p-3 text-center">小4-高3</td>
                  <td className="border border-gray-300 p-3 text-center">8,800円〜</td>
                  <td className="border border-gray-300 p-3">オンライン中心、個別指導</td>
                  <td className="border border-gray-300 p-3 text-center">オンライン</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">🏫 教室選びのポイント</h4>
              <ul className="text-sm space-y-2">
                <li>• AI活用の充実度（最新ツール導入状況）</li>
                <li>• 著作権・プライバシー教育の有無</li>
                <li>• 作品発表の機会（展示会・コンテスト）</li>
                <li>• 少人数制かマンツーマンか</li>
                <li>• 講師の実務経験</li>
                <li>• 機材の貸出制度</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">💡 オンライン vs 通学</h4>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold text-sm">オンラインのメリット</p>
                  <ul className="text-xs ml-4">
                    <li>• 送迎不要で時間効率的</li>
                    <li>• 自宅の機材で学習可能</li>
                    <li>• 録画で復習可能</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-sm">通学のメリット</p>
                  <ul className="text-xs ml-4">
                    <li>• 高性能機材の使用体験</li>
                    <li>• 仲間との交流・刺激</li>
                    <li>• 集中できる環境</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            7. 保護者のためのサポートガイド：子どもの創造性を引き出す
          </h2>

          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">👨‍👩‍👧‍👦 効果的なサポート方法</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">技術面のサポート</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>一緒に学ぶ姿勢：</strong>知らないことは一緒に調べる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>環境整備：</strong>作業しやすいPC環境を整える</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>トラブル対応：</strong>エラーは学習機会として前向きに</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">精神面のサポート</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>褒める習慣：</strong>小さな成果も認める</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>比較しない：</strong>他の子と比べず個性を尊重</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>失敗の受容：</strong>「次はどうする？」と前向きに</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📱 推奨する家庭内ルール</h4>
            <ul className="text-sm space-y-1">
              <li>✓ 動画制作は1日2時間まで（休憩含む）</li>
              <li>✓ 22時以降の編集作業禁止</li>
              <li>✓ 週1回は家族で作品鑑賞会</li>
              <li>✓ 月1本のペースで無理なく制作</li>
              <li>✓ 視聴回数より作品の質を重視</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：AI時代の創造的な学びへ</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AI動画編集ツールで、プロ級の作品が子どもでも制作可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>安全性を最優先に、顔出しなしでYouTuber活動</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>著作権とプライバシー教育で、デジタルリテラシー向上</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>段階的なスキルアップで、将来につながる能力育成</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>保護者のサポートで、安全かつ創造的な活動を実現</span>
          </div>
        </div>

        <p className="text-lg">
          動画制作は、子どもたちの創造性、表現力、技術力を総合的に
          育てる素晴らしい学習機会です。AI技術を活用することで、
          安全性を保ちながら、プロフェッショナルな作品制作が可能になりました。
          ぜひ、お子様の「YouTuberになりたい」という夢を、
          教育的な成長の機会として活かしてください。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">AI動画制作を学ぶ夏期講座</h3>
        <p className="mb-6">
          AIアソビあとりえでは、夏休み期間中にAI動画制作の
          集中講座を開催予定です。プロの指導で、安全な動画制作と
          YouTubeチャンネル運営を学べます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            講座について問い合わせる
          </Link>
          <Link 
            href="/courses/video" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            動画制作コースの詳細を見る
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
                    href="https://www.soumu.go.jp/johotsusintokei/whitepaper/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「情報通信白書 令和6年版」（2024年）- 10代の動画視聴時間
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/shotou/zyouhou/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「デジタル創作教育の効果測定」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.city.minato.tokyo.jp/kyouiku/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    港区教育委員会「デジタルクリエイター育成プログラム」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">安全利用ガイドライン</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://support.google.com/youtube/answer/2802244" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    YouTube「子ども向けコンテンツに関するポリシー」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.jipdec.or.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本情報経済社会推進協会「子どものプライバシー保護ガイド」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">著作権・教育資料</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.bunka.go.jp/seisaku/chosakuken/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文化庁「著作権なるほど質問箱」（2024年）
                  </a>
              </li>
              <li>
                • AIアソビあとりえ「動画制作における著作権教育ガイド」（2024年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-tools-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子ども向けAIツール完全ガイド2025：安全で楽しく学べる最新ツール15選
                </h3>
                <p className="text-sm text-gray-600">
                  動画編集以外のAIツールも詳しく紹介
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/screen-time-balance" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  デジタルとリアルのバランス：子どものスクリーンタイムを考える
                </h3>
                <p className="text-sm text-gray-600">
                  健康的な動画制作活動のために
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/creativity-development" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI時代に必要な創造力の育て方：プロが教える実践的アプローチ
                </h3>
                <p className="text-sm text-gray-600">
                  動画制作を通じた創造性開発
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