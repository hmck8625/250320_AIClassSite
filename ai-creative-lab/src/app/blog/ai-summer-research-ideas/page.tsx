import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "AI自由研究アイデア集：夏休みの宿題を創造的に解決する方法【2025年版】 | 東京AI創造スタジオ",
  description: "ChatGPT・Claude・Geminiを使った斬新な自由研究テーマ50選。小学生が楽しみながら学べるAI活用方法を学年別・分野別に紹介。保護者のサポート方法も解説。",
  keywords: ["AI 自由研究", "夏休み 宿題 AI", "小学生 自由研究 2025", "ChatGPT 自由研究", "AI 工作", "プログラミング 自由研究", "港区 AI教育"],
  openGraph: {
    title: "AI自由研究アイデア集：夏休みの宿題を創造的に解決する方法【2025年版】",
    description: "AIを使った斬新な自由研究テーマ50選。楽しみながら最先端技術を学ぼう！",
    images: ['/images/blog/ai-summer-research-ideas.jpg'],
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
          <li><Link href="/blog/category/parent-column" className="text-gray-600 hover:text-primary">保護者向けコラム</Link></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900">AI自由研究アイデア集</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">夏休み特集</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          AI自由研究アイデア集：<br className="md:hidden" />
          夏休みの宿題を創造的に解決する方法【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/ai-summer-research-ideas.jpg" 
          alt="AIを使った自由研究に取り組む子どもたちのイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-yellow-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「今年の自由研究、何にしよう？」
          「AIって難しそうだけど、子どもでも使えるの？」
          毎年悩む夏休みの自由研究に、今年は最新のAI技術を活用してみませんか？
        </p>
        <p className="text-lg leading-relaxed mb-4">
          ChatGPT、Claude、Geminiなどの生成AIツールは、適切に使えば
          子どもたちの創造力を大きく広げる強力な学習パートナーになります。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、港区のAI教育専門家が厳選した50個の自由研究アイデアを
          学年別・分野別に紹介。保護者の方々も一緒に楽しめる内容となっています。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>学年別おすすめAI自由研究テーマ50選</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>各テーマの具体的な進め方と必要な準備</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AIツールの安全な使い方と保護者のサポート方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>作品のまとめ方と発表のコツ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>優秀作品事例と審査員に評価されるポイント</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜ今、AI×自由研究なのか？最新教育トレンドを解説
          </h2>
          
          <p className="mb-4">
            文部科学省の最新調査（2024年12月）によると、生成AIを教育活動に
            活用している学校は全国で約40%に達しています。特に創造的な
            課題解決学習での活用が注目されており、自由研究はその最適な実践の場です。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 AI活用自由研究のメリット（文部科学省調査より）</p>
            <ul className="text-sm space-y-1">
              <li>• 情報収集・整理の効率化：従来の3倍速</li>
              <li>• 創造的アイデアの拡張：発想の幅が平均2.5倍</li>
              <li>• プレゼンテーション能力向上：視覚化スキル習得</li>
              <li>• 問題解決能力の育成：論理的思考力の向上</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：文部科学省「生成AIの利用について」（2024年12月）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">港区の先進的な取り組み</h3>
          
          <p className="mb-4">
            港区教育委員会では「ICT教育推進計画2024-2026」において、
            AI活用教育を重点項目に掲げています。区内の小学校では
            すでに約60%がタブレット端末でのAI体験を実施しており、
            夏休みの自由研究でも積極的な活用が推奨されています。
          </p>
        </section>

        {/* セクション2：学年別アイデア */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 学年別AI自由研究アイデア集
          </h2>

          {/* 1-2年生向け */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🌱 小学1-2年生向け（初級編）</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold mb-2">1. AIと一緒に絵本を作ろう</h4>
                <p className="text-sm mb-2">
                  ChatGPTに物語のアイデアを聞いて、自分で絵を描いてオリジナル絵本を制作。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">準備するもの：</p>
                  <ul className="list-disc list-inside">
                    <li>タブレットまたはPC（保護者と一緒に使用）</li>
                    <li>画用紙、色鉛筆</li>
                    <li>製本用ホッチキス</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold mb-2">2. AIロボットの友だちを想像しよう</h4>
                <p className="text-sm mb-2">
                  未来のロボット友だちをデザインし、どんな機能があるかAIと一緒に考える。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">学習ポイント：</p>
                  <ul className="list-disc list-inside">
                    <li>想像力と創造力の育成</li>
                    <li>テクノロジーへの興味喚起</li>
                    <li>言語化能力の向上</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold mb-2">3. 動物図鑑をAIで作ろう</h4>
                <p className="text-sm mb-2">
                  好きな動物についてAIに質問し、オリジナル図鑑を作成。写真や絵も追加。
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold mb-2">4. AIと俳句を作ろう</h4>
                <p className="text-sm mb-2">
                  季節の言葉をAIに聞いて、一緒に俳句を作り、絵も添える。
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold mb-2">5. 未来の乗り物コンテスト</h4>
                <p className="text-sm mb-2">
                  AIのアイデアを参考に、環境に優しい未来の乗り物をデザイン。
                </p>
              </div>
            </div>
          </div>

          {/* 3-4年生向け */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📚 小学3-4年生向け（中級編）</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">6. AIチャットボットで地域ガイドを作ろう</h4>
                <p className="text-sm mb-2">
                  港区の観光スポットを調べ、AIと一緒に観光ガイドチャットボットを設計。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">使用ツール：</p>
                  <ul className="list-disc list-inside">
                    <li>ChatGPT（基本的な対話設計）</li>
                    <li>Scratch（簡単なプログラミング）</li>
                    <li>Google マップ（位置情報確認）</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">7. AI天気予報士になろう</h4>
                <p className="text-sm mb-2">
                  1週間の天気を記録し、AIと一緒に天気のパターンを分析。オリジナル予報を作成。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">データ収集方法：</p>
                  <ul className="list-disc list-inside">
                    <li>毎日同じ時間に観察記録</li>
                    <li>温度、湿度、雲の様子を記録</li>
                    <li>AIでパターン分析</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">8. エコ活動AIアドバイザー</h4>
                <p className="text-sm mb-2">
                  家庭でできるエコ活動をAIと考え、実践記録をまとめる。CO2削減量も計算。
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">9. AIで昔話をリメイク</h4>
                <p className="text-sm mb-2">
                  日本の昔話を現代風にアレンジ。AIと一緒に新しいストーリーを創作。
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">10. プログラミングで音楽を作ろう</h4>
                <p className="text-sm mb-2">
                  Scratchとを使って、メロディーを自動生成するプログラムを作成。
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">11. AIレシピクリエイター</h4>
                <p className="text-sm mb-2">
                  家にある食材でAIに新しいレシピを考えてもらい、実際に料理して評価。
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold mb-2">12. 植物成長AIモニター</h4>
                <p className="text-sm mb-2">
                  植物の成長を記録し、AIで最適な育て方を分析。グラフ化して発表。
                </p>
              </div>
            </div>
          </div>

          {/* 5-6年生向け */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 小学5-6年生向け（上級編）</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">13. AI防災マップ制作プロジェクト</h4>
                <p className="text-sm mb-2">
                  地域の防災情報をAIで分析し、避難経路や危険箇所を示すデジタルマップを作成。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">プロジェクト手順：</p>
                  <ol className="list-decimal list-inside">
                    <li>地域の防災情報収集（区役所データ）</li>
                    <li>AIで危険度分析</li>
                    <li>Googleマイマップで可視化</li>
                    <li>改善提案をまとめる</li>
                  </ol>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">14. AIプログラミングゲーム開発</h4>
                <p className="text-sm mb-2">
                  Scratchで簡単なゲームを作り、AIに難易度調整のアイデアをもらって実装。
                </p>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-semibold">開発ステップ：</p>
                  <ol className="list-decimal list-inside">
                    <li>基本ゲームの設計</li>
                    <li>AIでバランス調整案を検討</li>
                    <li>プログラミング実装</li>
                    <li>テストプレイと改善</li>
                  </ol>
                </div>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">15. SDGs解決アイデアコンペ</h4>
                <p className="text-sm mb-2">
                  17のSDGs目標から1つ選び、AIと一緒に革新的な解決策を考案してプレゼン。
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">16. AIニュースキャスター体験</h4>
                <p className="text-sm mb-2">
                  AIで原稿を作成し、動画編集アプリでニュース番組を制作。
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">17. データサイエンティスト入門</h4>
                <p className="text-sm mb-2">
                  クラスのアンケートデータをAIで分析し、グラフ化して傾向を発表。
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">18. AI歴史探検隊</h4>
                <p className="text-sm mb-2">
                  歴史上の人物にインタビューする形式で、AIと対話しながら歴史を学習。
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">19. 未来都市デザイナー</h4>
                <p className="text-sm mb-2">
                  2050年の港区をAIと一緒に設計。3Dモデルや図面も作成。
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-bold mb-2">20. AIアート展覧会</h4>
                <p className="text-sm mb-2">
                  画像生成AIを使ってテーマに沿った作品を制作し、オンライン展覧会を開催。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション3：分野別アイデア */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 分野別AI自由研究アイデア（全学年対応）
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 理科系 */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-green-800">🔬 理科・サイエンス系</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">21.</span>
                  <span>AI植物図鑑：写真判定アプリで身近な植物を調査</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">22.</span>
                  <span>天体観測AI日記：星座の動きをAIで予測</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">23.</span>
                  <span>昆虫の行動パターンAI分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">24.</span>
                  <span>気象データから台風進路を予測</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">25.</span>
                  <span>水質調査とAI環境診断</span>
                </li>
              </ul>
            </div>

            {/* 社会系 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-blue-800">🌍 社会・地理系</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">26.</span>
                  <span>AIで作る港区歴史マップ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">27.</span>
                  <span>世界の料理AIレポーター</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">28.</span>
                  <span>交通量調査とAI渋滞予測</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">29.</span>
                  <span>多言語翻訳で国際交流</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">30.</span>
                  <span>AIで学ぶ世界の環境問題</span>
                </li>
              </ul>
            </div>

            {/* 芸術系 */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-purple-800">🎨 芸術・創作系</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">31.</span>
                  <span>AI作曲で校歌をリミックス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">32.</span>
                  <span>デジタルアートと伝統工芸の融合</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">33.</span>
                  <span>AIダンス振付師になろう</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">34.</span>
                  <span>物語自動生成装置を作る</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">35.</span>
                  <span>AI詩人と俳句バトル</span>
                </li>
              </ul>
            </div>

            {/* 技術系 */}
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-orange-800">⚙️ 技術・工学系</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">36.</span>
                  <span>簡単AIロボット制作（micro:bit使用）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">37.</span>
                  <span>スマートホームのアイデア設計</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">38.</span>
                  <span>3DプリンターでAIデザイン実現</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">39.</span>
                  <span>ドローンプログラミング入門</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">40.</span>
                  <span>ARアプリで教科書を拡張</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 追加アイデア */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 その他の創造的アイデア（41-50）</h4>
            <ul className="text-sm space-y-1 columns-2">
              <li>41. AI料理評論家</li>
              <li>42. 仮想ペット育成ゲーム</li>
              <li>43. AI英会話パートナー</li>
              <li>44. 未来の職業研究</li>
              <li>45. エシカル消費ガイド</li>
              <li>46. AI健康アドバイザー</li>
              <li>47. バーチャル博物館制作</li>
              <li>48. 感情認識AIの研究</li>
              <li>49. 自動翻訳で絵本を多言語化</li>
              <li>50. AIスポーツコーチ</li>
            </ul>
          </div>
        </section>

        {/* セクション4：実践ガイド */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. AI自由研究の進め方：ステップバイステップガイド
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">📝 STEP 1: テーマ選びとゴール設定（1週目）</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">やること</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 興味のある分野を3つリストアップ</li>
                    <li>• AIでできることを調べる</li>
                    <li>• 具体的な研究質問を決める</li>
                    <li>• 期待される成果を明確化</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">保護者のサポート</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 子どもの興味を引き出す質問</li>
                    <li>• 実現可能性のアドバイス</li>
                    <li>• 必要なツールの準備</li>
                    <li>• スケジュール作成の手伝い</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">🔍 STEP 2: 情報収集とAI活用（2-3週目）</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">AIツールの使い方</h4>
                  <div className="text-sm">
                    <p className="mb-2"><strong>ChatGPT/Claude/Gemini共通の質問例：</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>「○○について小学生にもわかるように説明して」</li>
                      <li>「○○の実験方法を5つ提案して」</li>
                      <li>「○○のデータをグラフにする方法を教えて」</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">⚠️ 注意事項</h4>
                  <ul className="text-sm list-disc list-inside">
                    <li>AIの回答は必ず事実確認する</li>
                    <li>複数の情報源と照らし合わせる</li>
                    <li>個人情報は入力しない</li>
                    <li>保護者と一緒に使用する</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">🛠️ STEP 3: 実験・制作（4-5週目）</h3>
              
              <div className="space-y-3">
                <p className="text-sm">
                  計画に基づいて実際に実験や制作を行います。AIは以下のような場面で活用できます：
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>データ分析：</strong>集めたデータの傾向をAIに分析してもらう</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>問題解決：</strong>うまくいかない時の改善案をAIに相談</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>創作支援：</strong>デザインやアイデアの発展をAIと一緒に</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">📊 STEP 4: まとめと発表準備（6週目）</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold mb-2 text-sm">レポート作成</h5>
                  <ul className="text-xs space-y-1">
                    <li>• 研究の目的</li>
                    <li>• 方法と手順</li>
                    <li>• 結果とデータ</li>
                    <li>• 考察と結論</li>
                    <li>• 参考文献</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold mb-2 text-sm">ポスター制作</h5>
                  <ul className="text-xs space-y-1">
                    <li>• タイトルを大きく</li>
                    <li>• 写真や図を効果的に</li>
                    <li>• 要点を簡潔に</li>
                    <li>• カラフルに仕上げる</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold mb-2 text-sm">発表練習</h5>
                  <ul className="text-xs space-y-1">
                    <li>• 3分で説明できるように</li>
                    <li>• 声の大きさと速さ</li>
                    <li>• アイコンタクト</li>
                    <li>• 質問への準備</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg">
            <h4 className="font-bold mb-2">🏆 審査員に評価されるポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>独創性：</strong>AIを使った新しい視点や発想があるか</li>
              <li>• <strong>探究心：</strong>深く調べ、考察しているか</li>
              <li>• <strong>実用性：</strong>研究結果が実生活に活かせるか</li>
              <li>• <strong>プレゼン力：</strong>わかりやすく、魅力的に伝えられるか</li>
              <li>• <strong>努力の跡：</strong>試行錯誤の過程が見えるか</li>
            </ul>
          </div>
        </section>

        {/* セクション5：安全な使い方 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. AIツールの安全な使い方：保護者必読ガイド
          </h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-red-800">⚠️ 重要な安全ルール</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">1. 個人情報の保護</h4>
                <ul className="text-sm space-y-1">
                  <li>• 本名、住所、学校名は絶対に入力しない</li>
                  <li>• 写真のアップロードは保護者確認後のみ</li>
                  <li>• パスワードや電話番号も入力禁止</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">2. 年齢制限の確認</h4>
                <ul className="text-sm space-y-1">
                  <li>• ChatGPT: 13歳以上（保護者同意で使用可）</li>
                  <li>• Claude: 18歳以上（保護者アカウントで使用）</li>
                  <li>• Gemini: 13歳以上（保護者管理下で使用）</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">3. 内容の適切性確認</h4>
                <ul className="text-sm space-y-1">
                  <li>• AIの回答は必ず保護者がチェック</li>
                  <li>• 不適切な内容が出たら即座に使用中止</li>
                  <li>• 教育的な使用目的を明確に</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">✅ 推奨される使い方</h4>
              <ul className="text-sm space-y-2">
                <li>• 保護者と一緒に画面を見ながら使用</li>
                <li>• 使用時間を決めて（1日30分程度）</li>
                <li>• 学習目的を明確にしてから開始</li>
                <li>• 結果は必ず他の資料でも確認</li>
                <li>• 使用履歴を保護者が定期チェック</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-800">📱 推奨ツール設定</h4>
              <ul className="text-sm space-y-2">
                <li>• ファミリーセーフティ機能をON</li>
                <li>• 使用時間制限の設定</li>
                <li>• 不適切コンテンツのフィルタリング</li>
                <li>• 履歴の定期確認設定</li>
                <li>• 子ども専用アカウントの作成</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション6：成功事例 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 実際の優秀作品事例と受賞のコツ
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-bold mb-2">🥇 2024年度最優秀賞：「AIで予測する渋谷スクランブル交差点の未来」</h3>
              <p className="text-sm mb-2">小学6年生 Kさん（港区在住）</p>
              <div className="bg-white p-3 rounded text-sm">
                <p className="mb-2">
                  <strong>研究内容：</strong>交通量データをAIで分析し、10年後の交差点の姿を予測。
                  3Dモデルで未来の交差点をデザインし、歩行者の安全性向上案を提案。
                </p>
                <p className="mb-2">
                  <strong>評価ポイント：</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>実際のオープンデータを活用した説得力</li>
                  <li>AIと3Dモデリングを組み合わせた表現力</li>
                  <li>社会課題への具体的な解決提案</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold mb-2">🥈 2024年度優秀賞：「おばあちゃんのためのAI料理アシスタント」</h3>
              <p className="text-sm mb-2">小学4年生 Mさん（港区在住）</p>
              <div className="bg-white p-3 rounded text-sm">
                <p className="mb-2">
                  <strong>研究内容：</strong>高齢者でも使いやすい音声対話型レシピアプリを設計。
                  実際に祖母に使ってもらい、改善を重ねたプロトタイプを発表。
                </p>
                <p className="mb-2">
                  <strong>評価ポイント：</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>身近な人の課題から出発した着眼点</li>
                  <li>ユーザーテストによる改善プロセス</li>
                  <li>思いやりのあるデザイン設計</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h3 className="font-bold mb-2">🥉 2024年度アイデア賞：「AI俳句マスターとの対決！」</h3>
              <p className="text-sm mb-2">小学2年生 Tさん（港区在住）</p>
              <div className="bg-white p-3 rounded text-sm">
                <p className="mb-2">
                  <strong>研究内容：</strong>季節の俳句をAIと一緒に100句作成。
                  人間とAIの作品を比較し、それぞれの特徴を分析。絵も添えて俳句集を制作。
                </p>
                <p className="mb-2">
                  <strong>評価ポイント：</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>年齢に応じた無理のないテーマ設定</li>
                  <li>AIと人間の違いを楽しく比較</li>
                  <li>芸術性と分析を両立させた構成</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 受賞作品に共通する特徴</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>身近な問題から出発：</strong>日常生活の中で感じた疑問や課題がスタート地点</li>
              <li>• <strong>AIの特性を活かす：</strong>単なる検索ではなく、AIならではの機能を活用</li>
              <li>• <strong>試行錯誤の記録：</strong>失敗も含めた研究プロセスが詳細に記録されている</li>
              <li>• <strong>オリジナリティ：</strong>他の人が思いつかない視点や組み合わせ</li>
              <li>• <strong>社会への貢献：</strong>研究結果が誰かの役に立つ可能性を示している</li>
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
            <span>AIは子どもたちの創造力を広げる強力なツール</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>適切な保護者のサポートで安全に活用可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>失敗を恐れず、試行錯誤することが大切</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AIと人間の協働で新しい価値を創造</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>楽しみながら最先端技術に触れる絶好の機会</span>
          </div>
        </div>

        <p className="text-lg">
          夏休みの自由研究は、子どもたちがAIという最先端技術に触れ、
          創造的な問題解決能力を育む絶好の機会です。
          ぜひ親子で一緒に、楽しみながらAIの可能性を探求してみてください。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">夏休みAI自由研究サポートプログラム</h3>
        <p className="mb-6">
          東京AI創造スタジオでは、夏休み限定で自由研究をサポートする
          特別プログラムを開催します。専門講師が研究の進め方から
          発表準備まで丁寧にサポートいたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            夏休みプログラムに申し込む
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            自由研究の相談をする
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
                    href="https://www.mext.go.jp/a_menu/other/mext_02412.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「生成AIの利用について」（2024年12月）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/main_sosiki/joho_tsusin/kyouiku_joho-ka/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「教育の情報化の推進」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.city.minato.tokyo.jp/kyouiku/kodomo/gakko/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    港区教育委員会「ICT教育推進計画2024-2026」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育研究・実践事例</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.japet.or.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本教育工学振興会「AI活用教育実践事例集」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.jsps.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本学術振興会「科学研究費助成事業 研究成果」（2024年）
                  </a>
              </li>
              <li>
                • 東京AI創造スタジオ「2024年度夏休み自由研究作品集」（2024年9月）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">AI安全利用ガイドライン</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www8.cao.go.jp/cstp/ai/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    内閣府「人間中心のAI社会原則」（2024年）
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
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/chatgpt-safe-guide-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  ChatGPT子ども安全活用ガイド：正しい使い方【保護者必読】
                </h3>
                <p className="text-sm text-gray-600">
                  AIツールを安全に使うための詳細ガイド
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-tools-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子ども向けAIツール完全ガイド2025：安全で楽しく学べる最新ツール15選
                </h3>
                <p className="text-sm text-gray-600">
                  自由研究に使えるAIツールの紹介
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
                  創造的な思考力を育む方法
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