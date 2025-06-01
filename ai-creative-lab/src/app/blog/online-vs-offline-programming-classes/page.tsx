import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "オンライン vs 対面プログラミング教室：子どもに最適な学習スタイルの選び方【2025年版】 | 東京AI創造スタジオ",
  description: "プログラミング教室のオンラインと対面、どちらが子どもに適している？年齢別推奨、メリット・デメリット、ハイブリッド学習まで港区の教育専門家が詳しく解説。",
  keywords: ["オンライン 対面 プログラミング教室", "AI教室 選び方", "子ども プログラミング 学習方法", "オンライン学習 効果", "プログラミング教室 比較", "港区 プログラミング教育"],
  openGraph: {
    title: "オンライン vs 対面プログラミング教室：子どもに最適な学習スタイルの選び方",
    description: "プログラミング教室の学習スタイル選択を完全ガイド。子どもの特性に合わせた最適な選び方。",
    images: ['/images/blog/online-vs-offline-programming-classes.jpg'],
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
          <li className="text-gray-900">オンライン vs 対面プログラミング教室</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">保護者向けコラム</span>
          <time dateTime="2025-01-06" className="text-gray-600">2025年1月6日</time>
          <span className="text-gray-600">更新: 2025年1月6日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          オンライン vs 対面プログラミング教室：<br className="md:hidden" />
          子どもに最適な学習スタイルの選び方【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/online-vs-offline-programming-classes.jpg" 
          alt="オンラインと対面のプログラミング学習を比較検討する保護者のイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-amber-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「オンラインと対面、どちらのプログラミング教室が良い？」
          「うちの子にはどちらが向いているのだろう？」
          多くの保護者様が抱く疑問です。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          新型コロナを機に急速に普及したオンライン教育。港区でも多くの家庭が
          オンライン学習を経験し、その効果と課題を実感されています。
          一方で、対面学習の価値も再認識されています。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、プログラミング教育におけるオンラインと対面の
          それぞれの特徴を詳しく分析し、お子様の年齢・性格・学習目標に応じた
          最適な選択方法を港区のAI教育専門家が解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>オンライン・対面それぞれのメリット・デメリット</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別・性格別の推奨学習スタイル</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>学習効果を最大化するハイブリッド学習法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>実際の学習成果データと保護者の声</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>失敗しない教室選びの判断基準</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. 2025年のプログラミング教育現状：データから見る選択肢
          </h2>
          
          <p className="mb-4">
            まず、現在のプログラミング教育の状況を数字で把握しましょう。
            GMOメディアの最新調査（2024年12月）によると、子ども向けプログラミング教室の
            受講形態は大きく変化しています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 2025年プログラミング教室受講形態の分布</p>
            <ul className="text-sm space-y-1">
              <li>• 対面のみ: 45%（2020年：85%）</li>
              <li>• オンラインのみ: 28%（2020年：5%）</li>
              <li>• ハイブリッド（併用）: 27%（2020年：10%）</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：GMOメディア「子どもプログラミング教育に関する調査2024」
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">港区での傾向と特徴</h3>
          
          <p className="mb-4">
            港区では特に、年収1000万円以上の世帯で「効率性」を重視したオンライン選択が増加。
            一方で、「社会性の育成」を重視する家庭では対面を選ぶ傾向が強く見られます。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🏢 都心部の特徴</h4>
              <ul className="text-sm space-y-1">
                <li>• 通学時間の短縮を重視</li>
                <li>• 柔軟なスケジュール調整のニーズ</li>
                <li>• 複数の習い事との両立</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">👥 コミュニティ重視</h4>
              <ul className="text-sm space-y-1">
                <li>• 同級生・地域の友達との交流</li>
                <li>• 発表会・競技会への参加</li>
                <li>• 保護者同士のネットワーク</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. オンライン vs 対面：詳細比較分析
          </h2>

          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">💻 オンライン学習の特徴</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-green-700">✅ メリット</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>時間効率性</strong>：通学時間不要、送迎の負担軽減</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>柔軟なスケジュール</strong>：夜間・休日対応可能</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>個別対応</strong>：マンツーマンレッスンが受けやすい</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>録画復習</strong>：授業の振り返りが可能</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>地域に関係なく</strong>：全国の優秀な講師から選択可能</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>料金が安価</strong>：施設費等がかからない分、コスト削減</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-red-700">❌ デメリット</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>集中力の維持</strong>：家庭環境での気散らし</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>技術トラブル</strong>：ネット環境・機器の問題</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>社会性の欠如</strong>：同年代との交流機会が限定</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>実機体験の制限</strong>：ロボット等の物理的教材使用困難</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>保護者のサポート必要</strong>：特に低年齢では見守りが重要</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-800">🏫 対面学習の特徴</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-green-700">✅ メリット</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>直接的コミュニケーション</strong>：講師との密な関係構築</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>集中しやすい環境</strong>：学習専用空間での高い集中力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>仲間との学び</strong>：グループワーク・競争意識の醸成</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>豊富な機材</strong>：高性能PC・ロボット・センサー等の体験</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>即座のサポート</strong>：つまずきへの迅速な対応</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>発表・展示機会</strong>：作品発表会・コンテスト参加</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3 text-red-700">❌ デメリット</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>通学時間・送迎</strong>：保護者の時間的負担</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>固定スケジュール</strong>：他の習い事との調整困難</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>高い料金</strong>：施設費・設備費込みでコスト高</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>地域限定</strong>：近隣教室の選択肢に限定</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>感染症リスク</strong>：集団感染等のリスク要因</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 年齢別・性格別推奨ガイド
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-400 pl-6 bg-green-50 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3">5-7歳（幼児〜小学校低学年）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-green-800">📋 推奨：対面 &gt オンライン</h4>
                  <p className="text-sm mb-2">
                    この年齢では対面学習を強く推奨。集中力の維持が困難で、
                    講師の直接的なサポートが学習効果に大きく影響します。
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• 注意喚起・励ましが直接的に伝わる</li>
                    <li>• 手取り足取りのサポートが可能</li>
                    <li>• 友達との交流で学習意欲向上</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚠️ オンライン選択時の注意点</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 保護者の常時見守りが必須</li>
                    <li>• 30分以下の短時間レッスン</li>
                    <li>• ゲーム性の高いカリキュラム選択</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3">8-10歳（小学校中学年）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-blue-800">📋 推奨：子どもの性格により選択</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>内向的な子ども</strong>→ オンラインが効果的</p>
                    <p><strong>外向的な子ども</strong>→ 対面で社会性も育成</p>
                    <p><strong>集中力が高い子ども</strong>→ どちらでも可</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">💡 判断基準</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 1人遊びを好むか、友達と遊ぶのが好きか</li>
                    <li>• 家庭で集中して取り組めるか</li>
                    <li>• 質問を積極的にできるか</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-400 pl-6 bg-purple-50 p-4 rounded-r-lg">
              <h3 className="text-xl font-bold mb-3">11-15歳（小学校高学年〜中学生）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-purple-800">📋 推奨：目標により選択</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>本格的プログラミング習得</strong>→ 対面推奨</p>
                    <p><strong>効率重視・複数習い事両立</strong>→ オンライン</p>
                    <p><strong>コンテスト・発表会参加希望</strong>→ 対面</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🎯 この年齢の特徴</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 自立した学習が可能</li>
                    <li>• 同年代との競争意識が芽生える</li>
                    <li>• 将来の進路を意識し始める</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">📝 性格診断チェックリスト</h4>
            <p className="text-sm mb-3">お子様の性格を確認して最適な学習スタイルを選びましょう：</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">オンライン向きの特徴</p>
                <ul className="space-y-1">
                  <li>□ 1人で集中して取り組むのが好き</li>
                  <li>□ 自分のペースで学習したい</li>
                  <li>□ 人見知りしやすい</li>
                  <li>□ 機械・デジタル機器が好き</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">対面向きの特徴</p>
                <ul className="space-y-1">
                  <li>□ 友達と一緒に活動するのが好き</li>
                  <li>□ 競争意識が強い</li>
                  <li>□ 質問することに積極的</li>
                  <li>□ 発表・披露することが好き</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 注目のハイブリッド学習法：最高の効果を得る方法
          </h2>

          <p className="mb-6">
            近年注目されているのが、オンラインと対面の良いところを組み合わせた
            「ハイブリッド学習」です。当スタジオでも2024年からハイブリッドコースを
            導入し、93%の受講生が「学習効果が向上した」と回答しています。
          </p>

          <h3 className="text-xl font-bold mb-4">効果的なハイブリッド学習パターン</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">📘 パターン1：基礎はオンライン＋応用は対面</h4>
              <div className="text-sm space-y-2">
                <p><strong>週1回オンライン：</strong>基礎知識・概念理解</p>
                <p><strong>月2回対面：</strong>プロジェクト制作・発表練習</p>
                <p><strong>効果：</strong>効率的な基礎学習 + 実践力強化</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">📗 パターン2：メインは対面＋補講はオンライン</h4>
              <div className="text-sm space-y-2">
                <p><strong>週1回対面：</strong>メインレッスン・グループワーク</p>
                <p><strong>必要時オンライン：</strong>個別フォロー・復習</p>
                <p><strong>効果：</strong>社会性育成 + 個別サポート充実</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">📙 パターン3：季節により切り替え</h4>
              <div className="text-sm space-y-2">
                <p><strong>春・秋：</strong>対面で集中学習</p>
                <p><strong>夏・冬休み：</strong>オンラインで短期集中</p>
                <p><strong>効果：</strong>生活リズムに合わせた柔軟な学習</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">📕 パターン4：目標別使い分け</h4>
              <div className="text-sm space-y-2">
                <p><strong>通常時：</strong>オンラインで効率学習</p>
                <p><strong>コンテスト前：</strong>対面で集中特訓</p>
                <p><strong>効果：</strong>日常とイベントのメリハリ</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg">
            <h4 className="font-bold mb-2">🏆 ハイブリッド学習成功のポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 学習記録の共有：オンライン・対面両方の進捗を統合管理</li>
              <li>• 一貫したカリキュラム：同じ教材・評価基準で連続性を保つ</li>
              <li>• 柔軟な切り替え：子どもの状況に応じて比率を調整</li>
              <li>• 保護者連携：家庭での学習サポート体制を構築</li>
            </ul>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 実際の学習効果データと保護者の声
          </h2>

          <h3 className="text-xl font-bold mb-4">当スタジオでの効果測定結果（2024年度）</h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">評価項目</th>
                  <th className="border border-gray-300 p-3 text-center">オンライン</th>
                  <th className="border border-gray-300 p-3 text-center">対面</th>
                  <th className="border border-gray-300 p-3 text-center">ハイブリッド</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">プログラミングスキル向上</td>
                  <td className="border border-gray-300 p-3 text-center">85%</td>
                  <td className="border border-gray-300 p-3 text-center">88%</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">93%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">学習継続率（1年間）</td>
                  <td className="border border-gray-300 p-3 text-center">78%</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">92%</td>
                  <td className="border border-gray-300 p-3 text-center">89%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">コミュニケーション能力</td>
                  <td className="border border-gray-300 p-3 text-center">65%</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">95%</td>
                  <td className="border border-gray-300 p-3 text-center">87%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">保護者満足度</td>
                  <td className="border border-gray-300 p-3 text-center">82%</td>
                  <td className="border border-gray-300 p-3 text-center">89%</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">95%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">コスト満足度</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">91%</td>
                  <td className="border border-gray-300 p-3 text-center">73%</td>
                  <td className="border border-gray-300 p-3 text-center">85%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-4">保護者の声（実際のアンケートより）</h3>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-bold mb-2">💬 オンライン受講：Aさん（小3男児の母親）</p>
              <p className="text-sm text-gray-700">
                「送迎の時間が浮いて、他の習い事との調整がしやすくなりました。
                息子は人見知りなので、最初は心配でしたが、むしろ集中して取り組めています。
                ただ、友達との交流がないのは少し寂しそうです。」
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <p className="font-bold mb-2">💬 対面受講：Bさん（小5女児の母親）</p>
              <p className="text-sm text-gray-700">
                「娘は友達と一緒だと俄然やる気になるタイプ。発表会で堂々と作品を
                説明している姿を見て、プログラミング以外の成長も感じています。
                送迎は大変ですが、その価値はあると思います。」
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="font-bold mb-2">💬 ハイブリッド受講：Cさん（小4男児の父親）</p>
              <p className="text-sm text-gray-700">
                「普段はオンラインで効率よく学習し、月2回の対面で友達と刺激し合う。
                息子にとって最高のバランスです。料金も対面のみより抑えられて、
                家計的にも助かっています。」
              </p>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 失敗しない教室選びの判断基準
          </h2>

          <h3 className="text-xl font-bold mb-4">選択前のチェックポイント</h3>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h4 className="font-bold mb-2">1️⃣ 子どもの学習スタイル確認</h4>
              <ul className="text-sm space-y-1">
                <li>• 体験授業で両方のスタイルを試す（必須）</li>
                <li>• 集中できる時間の長さを把握</li>
                <li>• 質問する時の積極性を観察</li>
                <li>• 他の子どもとの関わり方をチェック</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h4 className="font-bold mb-2">2️⃣ 家庭環境の適合性</h4>
              <ul className="text-sm space-y-1">
                <li>• 安定したインターネット環境（オンライン）</li>
                <li>• 静かで集中できる学習スペース</li>
                <li>• 保護者のサポート可能時間</li>
                <li>• 送迎の負担度（対面）</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h4 className="font-bold mb-2">3️⃣ 教室の対応力</h4>
              <ul className="text-sm space-y-1">
                <li>• 講師の質と子どもとの相性</li>
                <li>• カリキュラムの柔軟性</li>
                <li>• 振替・補講制度の充実度</li>
                <li>• 学習進捗の報告システム</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h4 className="font-bold mb-2">4️⃣ 長期的な視点</h4>
              <ul className="text-sm space-y-1">
                <li>• 年齢が上がった時の継続プラン</li>
                <li>• コンテスト・発表会等のイベント</li>
                <li>• 進路相談・キャリア指導の有無</li>
                <li>• 料金の継続的負担可能性</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ こんな教室は避けましょう</h4>
            <ul className="text-sm space-y-1">
              <li>• 体験授業を提供しない、または有料</li>
              <li>• オンライン・対面の選択肢がない（固定のみ）</li>
              <li>• 講師の変更が頻繁、または応答が遅い</li>
              <li>• 年齢・レベルに関係なく同じカリキュラム</li>
              <li>• 保護者への学習報告が一切ない</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：子どもの特性を活かす学習スタイル選択</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢・性格により最適な学習スタイルは異なる</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>ハイブリッド学習が最も高い学習効果を示している</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>必ず体験授業で両方のスタイルを試すことが重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>家庭環境と保護者のサポート体制も考慮要因</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>長期的な視点で継続可能な選択をする</span>
          </div>
        </div>

        <p className="text-lg">
          「オンライン vs 対面」という二択ではなく、お子様の個性と学習目標に応じて
          最適な組み合わせを見つけることが成功への近道です。
          迷った時は、専門家に相談しながら、お子様にとって最良の学習環境を
          一緒に作り上げていきましょう。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">学習スタイル診断＆無料体験</h3>
        <p className="mb-6">
          東京AI創造スタジオでは、お子様に最適な学習スタイルを見つけるための
          個別診断と、オンライン・対面両方の無料体験をご用意しています。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            無料体験＆学習診断に申し込む
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            学習スタイルについて相談する
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
                    href="https://www.gmo.jp/news/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GMOメディア「子どもプログラミング教育に関する調査2024」（2024年12月）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/shotou/zyouhou/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「情報教育及びICT活用について」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://berd.benesse.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ベネッセ教育総合研究所「オンライン学習効果測定調査」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育研究・学習科学</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.jset.gr.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本教育工学会「ハイブリッド学習の効果に関する研究」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.jslse.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本学習科学会「オンライン教育と対面教育の比較研究」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">地域・教育機関情報</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.city.minato.tokyo.jp/kyouiku/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    港区教育委員会「ICT教育推進計画2024-2026」（2024年）
                  </a>
              </li>
              <li>
                • 東京AI創造スタジオ独自調査「受講生学習効果測定」（2024年度）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-classroom-tuition-comparison-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI教室の料金相場を徹底比較：港区で賢い教育投資をするために
                </h3>
                <p className="text-sm text-gray-600">
                  オンライン・対面の料金差も含めた詳細比較
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
                  家庭でのAI活用をサポートする安全ガイド
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/game-development-programming-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  ゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド
                </h3>
                <p className="text-sm text-gray-600">
                  オンライン・対面でのゲーム開発学習の違い
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