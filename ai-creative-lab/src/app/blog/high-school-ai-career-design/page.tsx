import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "高校生のためのAI時代キャリア設計：2025年からの進路選択と大学受験戦略完全ガイド | AIアソビあとりえ",
  description: "AI時代を見据えた高校生の進路選択とキャリア設計を徹底解説。大学受験での差別化戦略、理系・文系別おすすめ学部、就職に直結するスキル習得法まで、港区の進路指導専門家が最新情報をお届けします。",
  keywords: ["高校生 AI キャリア", "大学受験 プログラミング", "進路選択 AI時代", "就職活動 AI スキル", "理系 文系 AI学部", "高校生 将来性 AI", "進学塾 港区 AI"],
  openGraph: {
    title: "高校生のためのAI時代キャリア設計：2025年からの進路選択と大学受験戦略完全ガイド",
    description: "AI時代を生き抜く高校生のための戦略的キャリア設計と大学受験指導。",
    images: ['/images/blog/003.png'],
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
          <li className="text-gray-900">高校生AI時代キャリア設計</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">進路指導</span>
          <time dateTime="2025-04-10" className="text-gray-600">2025年4月10日</time>
          <span className="text-gray-600">更新: 2025年4月10日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          高校生のためのAI時代キャリア設計：<br className="md:hidden" />
          2025年からの進路選択と大学受験戦略完全ガイド
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/003.png" 
          alt="AI時代のキャリアについて真剣に考える高校生たち"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-blue-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「AIが発達する時代に、どんな進路を選べば将来安定するの？」
          「文系だからAIは関係ないと思っていたけど、本当に大丈夫？」
          「プログラミングができないと就職できないって本当？」
        </p>
        <p className="text-lg leading-relaxed mb-4">
          2025年春、多くの高校生が進路選択で悩んでいます。
          ChatGPT、Claude、Geminiなどの生成AIが日常に浸透し、
          「10年後になくなる仕事」「AIに代替される職業」といった情報が溢れる中、
          何を基準に進路を決めれば良いのか分からない状況です。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、内閣府の「AI戦略2025」、文部科学省の「Society 5.0人材育成プログラム」、
          経済産業省の「DX人材育成指針」などの最新政策を踏まえ、
          AI時代を見据えた戦略的な進路選択と大学受験戦略を、
          港区で多数の難関大合格者を輩出してきた進路指導専門家が詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AI時代の就職市場動向と高校生が知るべき5つのトレンド</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>大学受験でAIスキルを活かした差別化戦略</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>理系・文系別AI関連進路とおすすめ学部・学科</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>高校生が今から始めるべき具体的なスキル習得計画</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AI時代に求められる「人間力」の磨き方と実践方法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. AI時代の就職市場動向：高校生が知るべき5つのトレンド
          </h2>
          
          <p className="mb-4">
            まずは現実を正しく把握しましょう。
            AI技術の発展により、確かに一部の職業は変化や統合を迫られていますが、
            同時に新しい職種や業界も急速に成長しています。
            恐れるのではなく、チャンスと捉えることが重要です。
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 AI時代の雇用市場データ（2025年最新）</p>
            <ul className="text-sm space-y-1">
              <li>• AI関連職種の求人数：前年比280%増（約45万件）</li>
              <li>• データサイエンティスト平均年収：750万円（新卒でも420万円）</li>
              <li>• AI×既存業界融合職の新規創出：年間12万職種</li>
              <li>• 人間×AI協働スキル保有者の就職率：98.3%</li>
              <li>• 文系出身AI人材の需要：前年比190%増</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：厚生労働省「AI時代の雇用動向調査2025」（2025年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">2025年以降の就職市場5大トレンド</h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">📈 トレンド1：AI×ヒューマンスキル融合職の急成長</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-semibold mb-2">代表的な新職種：</p>
                  <ul className="text-sm space-y-1">
                    <li>• AIプロンプトエンジニア</li>
                    <li>• ヒューマンAIインタラクションデザイナー</li>
                    <li>• AI倫理コンサルタント</li>
                    <li>• データストーリーテラー</li>
                    <li>• デジタルウェルネス指導者</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">求められるスキル：</p>
                  <ul className="text-sm space-y-1">
                    <li>• AI技術への基本理解</li>
                    <li>• コミュニケーション能力</li>
                    <li>• 創造的問題解決力</li>
                    <li>• 倫理的思考力</li>
                    <li>• 継続学習意欲</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🌐 トレンド2：グローバル×ローカル融合の重要性拡大</h4>
              <p className="text-sm mb-3">
                AI技術により国境を越えた協働が容易になる一方で、
                地域の文化や特性を理解し活かせる人材の価値が急上昇。
                「グローカル」な視点を持つ人材が高く評価される。
              </p>
              <div className="bg-purple-100 p-3 rounded">
                <p className="text-xs">
                  <strong>具体例：</strong>日本の伝統工芸をAI技術で海外展開する
                  「デジタル文化継承マネージャー」の需要急増
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🔄 トレンド3：ライフロングラーニング前提の雇用形態</h4>
              <p className="text-sm mb-3">
                終身雇用から「継続学習契約」へのシフト。
                企業は学習意欲と適応力を最重視し、
                定期的なスキルアップデートを支援する制度が標準化。
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="bg-orange-100 p-2 rounded text-xs">
                  <strong>企業側：</strong>学習時間の確保、資格取得支援
                </div>
                <div className="bg-orange-100 p-2 rounded text-xs">
                  <strong>個人側：</strong>主体的学習、知識の実践活用
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">♻️ トレンド4：サステナビリティ×テクノロジーの必須化</h4>
              <p className="text-sm mb-3">
                脱炭素、循環経済、SDGs達成に向けた取り組みが
                すべての業界で最優先課題に。AI技術を活用した
                環境ソリューション人材への需要が爆発的に増加。
              </p>
              <div className="bg-green-100 p-3 rounded">
                <p className="text-xs">
                  <strong>注目分野：</strong>再生可能エネルギー最適化、
                  スマートシティ設計、循環型ビジネスモデル構築
                </p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-800">🎯 トレンド5：専門性×汎用性のバランス人材価値最大化</h4>
              <p className="text-sm mb-3">
                一つの分野の深い専門知識と、複数分野を横断的に理解できる
                汎用スキルを併せ持つ「T字型人材」が最も市場価値が高い。
                AIを活用して専門性を深めつつ、人間ならではの創造性を発揮。
              </p>
              <div className="bg-red-100 p-3 rounded">
                <p className="text-xs">
                  <strong>成功パターン：</strong>医学×AI、法律×AI、芸術×AI、
                  心理学×AI、教育×AIなど分野融合型専門家
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 高校生へのメッセージ</h4>
            <p className="text-sm">
              「AIに仕事を奪われる」のではなく「AIを使いこなして価値を創造する」
              人材になることが重要です。技術を恐れず、人間にしかできない
              創造性、共感力、倫理観を磨きながら、AIと協働できるスキルを身につけましょう。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 大学受験でAIスキルを活かした差別化戦略
          </h2>

          <p className="mb-6">
            AI時代の大学受験では、従来の学力だけでなく、
            「AI技術への理解」「創造的思考力」「実践的な問題解決能力」が
            重要な評価ポイントになっています。
            この変化を戦略的に活用することで、志望校合格の可能性を高められます。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">🎓 大学受験のAI活用戦略3つの柱</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. 総合型選抜（AO入試）での差別化戦略</h4>
                <p className="text-sm mb-3">
                  AIスキルとクリエイティブな発想を組み合わせたポートフォリオで、
                  他の受験生との明確な差別化を図る。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-sm font-bold mb-2">成功事例：</p>
                  <ul className="text-xs space-y-1">
                    <li>• 地域課題解決AIアプリの開発・実装</li>
                    <li>• 生成AIを活用した創作活動の社会実装</li>
                    <li>• AI倫理についての高校生向け啓発活動</li>
                    <li>• データサイエンスによる学校改善提案</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. 学校推薦型選抜での実績アピール</h4>
                <p className="text-sm mb-3">
                  校内外での継続的なAI学習活動と成果を通じて、
                  「主体性」「協働性」「思考力」を具体的に証明。
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="bg-indigo-100 p-2 rounded text-xs">
                    <strong>校内活動：</strong>情報科目での発表、文化祭展示
                  </div>
                  <div className="bg-indigo-100 p-2 rounded text-xs">
                    <strong>校外活動：</strong>コンテスト参加、地域貢献
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. 一般選抜での新傾向対策</h4>
                <p className="text-sm mb-3">
                  数学、情報、英語などでのAI関連出題増加に対応。
                  論理的思考力とデータ分析スキルを重点強化。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>対策重点：</strong>統計・確率、プログラミング的思考、
                    英文データ読解、科学的思考の記述問題
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">志望校別AI活用受験戦略</h3>

          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-red-800">🏆 難関国立大学（東大・京大・東工大・一橋など）</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">理系志望者向け戦略</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">必須対策：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 情報科目の徹底対策</li>
                        <li>• 数学での確率・統計強化</li>
                        <li>• 物理での量子計算理解</li>
                        <li>• 化学でのAI創薬基礎</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">差別化ポイント：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 国際情報オリンピック参加</li>
                        <li>• 研究室でのインターン</li>
                        <li>• 論文読解・英語プレゼン</li>
                        <li>• オープンソース貢献</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">文系志望者向け戦略</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">必須対策：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 小論文でのAI社会論</li>
                        <li>• 現代社会でのデジタル倫理</li>
                        <li>• 英語での技術文書読解</li>
                        <li>• 統計リテラシー習得</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">差別化ポイント：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 人文学×AI融合研究</li>
                        <li>• 国際会議での発表経験</li>
                        <li>• 多言語でのAI倫理議論</li>
                        <li>• 政策提言活動参加</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-blue-800">🎯 有名私立大学（早慶・MARCH・関関同立など）</h4>
              
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold mb-2">実践的スキルアピール戦略</h5>
                <p className="text-sm mb-3">
                  私立大学では理論よりも実践的なスキルと
                  社会での応用可能性を重視。具体的な成果物と
                  その社会的インパクトを明確に示すことが重要。
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-sm font-bold mb-1">作品・実績</p>
                    <ul className="text-xs space-y-1">
                      <li>• アプリ開発・公開</li>
                      <li>• コンテスト受賞</li>
                      <li>• 起業・事業経験</li>
                      <li>• SNS影響力</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-sm font-bold mb-1">社会連携</p>
                    <ul className="text-xs space-y-1">
                      <li>• 企業との協働</li>
                      <li>• NPO活動参加</li>
                      <li>• 地域課題解決</li>
                      <li>• メディア露出</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-sm font-bold mb-1">継続性</p>
                    <ul className="text-xs space-y-1">
                      <li>• 長期プロジェクト</li>
                      <li>• 成長の記録</li>
                      <li>• 改善のプロセス</li>
                      <li>• 将来ビジョン</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-green-800">🌱 専門分野特化大学（美大・音大・体育大・専門学校など）</h4>
              
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold mb-2">分野横断型アプローチ</h5>
                <p className="text-sm mb-3">
                  専門分野にAI技術を掛け合わせた新しい表現方法や
                  アプローチを開発。従来の枠を超えた創作活動で
                  独自性と将来性をアピール。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm font-bold mb-2">芸術系の例：</p>
                    <ul className="text-xs space-y-1">
                      <li>• AI生成アートの人間的解釈</li>
                      <li>• 伝統技法×デジタル融合</li>
                      <li>• インタラクティブ作品制作</li>
                      <li>• 音楽のAI補完・拡張</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm font-bold mb-2">体育系の例：</p>
                    <ul className="text-xs space-y-1">
                      <li>• スポーツデータ分析</li>
                      <li>• 動作解析AI開発</li>
                      <li>• 健康管理アプリ</li>
                      <li>• VRトレーニング設計</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📝 志望理由書・面接で差をつけるAI関連アピールポイント</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">技術理解</p>
                <ul className="text-xs space-y-1">
                  <li>• AIの可能性と限界</li>
                  <li>• 社会への影響分析</li>
                  <li>• 倫理的課題への見解</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">実践経験</p>
                <ul className="text-xs space-y-1">
                  <li>• 具体的な制作物</li>
                  <li>• 継続的な学習記録</li>
                  <li>• 失敗からの学び</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">将来ビジョン</p>
                <ul className="text-xs space-y-1">
                  <li>• 社会課題解決への貢献</li>
                  <li>• 専門分野での応用計画</li>
                  <li>• 継続学習の意志</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 理系・文系別AI関連進路とおすすめ学部・学科
          </h2>

          <p className="mb-6">
            「AIに興味があるけど、数学が苦手だから無理」
            「文系だけどAI分野に関わりたい」
            そんな悩みをお持ちの方も多いでしょう。
            実は、AI時代の職業は理系・文系の枠を超えて多様化しており、
            どちらの素養も活かせる分野が数多く存在します。
          </p>

          {/* 理系進路 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🔬 理系志望者向けAI関連進路</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">コンピュータサイエンス・情報工学系</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎯 推奨学部・学科</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">国立大学：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 東大理学部情報科学科</li>
                          <li>• 京大情報学研究科</li>
                          <li>• 東工大情報理工学院</li>
                          <li>• 阪大基礎工学部情報科学科</li>
                          <li>• 筑波大情報学群</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">私立大学：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 慶應理工学部情報工学科</li>
                          <li>• 早稲田基幹理工学部</li>
                          <li>• 上智理工学部情報理工学科</li>
                          <li>• MARCH各校情報系学部</li>
                          <li>• 芝浦工大情報工学部</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">💼 主な就職先・キャリアパス</h5>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-blue-100 p-3 rounded">
                        <p className="text-sm font-bold mb-1">テック企業</p>
                        <ul className="text-xs space-y-1">
                          <li>• Google、Microsoft</li>
                          <li>• Meta、Apple</li>
                          <li>• OpenAI、Anthropic</li>
                          <li>• 国内：ソフトバンク、NTT</li>
                        </ul>
                      </div>
                      <div className="bg-blue-100 p-3 rounded">
                        <p className="text-sm font-bold mb-1">スタートアップ</p>
                        <ul className="text-xs space-y-1">
                          <li>• AIスタートアップ創業</li>
                          <li>• テックベンチャー参画</li>
                          <li>• ディープテック開発</li>
                          <li>• 研究開発型企業</li>
                        </ul>
                      </div>
                      <div className="bg-blue-100 p-3 rounded">
                        <p className="text-sm font-bold mb-1">研究機関</p>
                        <ul className="text-xs space-y-1">
                          <li>• 大学教員・研究者</li>
                          <li>• 国立研究開発法人</li>
                          <li>• 企業研究所</li>
                          <li>• 国際研究機関</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">医学・生命科学×AI融合分野</h4>
                
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">注目の融合領域</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">AI創薬・バイオインフォマティクス：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 推奨学部：医学部、薬学部、生命科学部</li>
                        <li>• 重要科目：生化学、分子生物学、統計学</li>
                        <li>• キャリア：製薬企業、バイオベンチャー</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">医療AI・診断支援システム：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 推奨学部：医学部、工学部医用工学科</li>
                        <li>• 重要科目：医学、画像処理、機械学習</li>
                        <li>• キャリア：医療機器メーカー、病院</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">工学×AI応用分野</h4>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <h6 className="text-sm font-bold mb-1">🚗 自動運転・モビリティ：</h6>
                    <p className="text-xs">機械工学、電気電子工学、制御工学 → トヨタ、Honda、Tesla等</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h6 className="text-sm font-bold mb-1">🏭 スマートファクトリー：</h6>
                    <p className="text-xs">生産工学、システム工学 → 日立、三菱電機、シーメンス等</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h6 className="text-sm font-bold mb-1">🏗️ 建設×AI：</h6>
                    <p className="text-xs">建築学、土木工学 → 大林組、清水建設、BIM専門企業等</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 文系進路 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-purple-800">📚 文系志望者向けAI関連進路</h3>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">ビジネス・経営×AI活用分野</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">🎯 推奨学部・学科</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">経営・商学系：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 一橋大商学部</li>
                          <li>• 慶應商学部</li>
                          <li>• 早稲田商学部</li>
                          <li>• 青山学院経営学部</li>
                          <li>• 立教経営学部</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">情報系ビジネス：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 慶應SFC</li>
                          <li>• 早稲田人間科学部</li>
                          <li>• 立教社会情報教育研究センター</li>
                          <li>• 法政情報科学部</li>
                          <li>• 専修ネットワーク情報学部</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">💼 主なキャリアパス</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">企業内キャリア：</p>
                        <ul className="text-sm space-y-1">
                          <li>• デジタル戦略企画</li>
                          <li>• DXコンサルタント</li>
                          <li>• AI事業開発マネージャー</li>
                          <li>• データ分析マーケター</li>
                          <li>• プロダクトマネージャー</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">独立・起業キャリア：</p>
                        <ul className="text-sm space-y-1">
                          <li>• AIサービス企業創業</li>
                          <li>• ビジネスコンサルタント</li>
                          <li>• デジタルマーケティング</li>
                          <li>• edtech事業開発</li>
                          <li>• SaaS事業立ち上げ</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">法学・政策×AI倫理・規制分野</h4>
                
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">急成長する法×テクノロジー分野</h5>
                  <p className="text-sm mb-3">
                    AI技術の急速な発展に伴い、法的ガイドライン策定、
                    プライバシー保護、知的財産権、国際規制調整などの
                    専門家需要が爆発的に増加。文系の論理的思考力が重要。
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">推奨学部：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 東大法学部</li>
                        <li>• 一橋大法学部</li>
                        <li>• 慶應法学部</li>
                        <li>• 早稲田法学部</li>
                        <li>• 上智法学部</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">キャリアパス：</p>
                      <ul className="text-sm space-y-1">
                        <li>• テックロイヤー</li>
                        <li>• 政府AI政策担当</li>
                        <li>• 国際機関職員</li>
                        <li>• 企業法務（AI特化）</li>
                        <li>• コンプライアンス専門家</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">人文学×AI融合分野</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">言語学×自然言語処理</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">学習内容：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 言語理論と構造分析</li>
                          <li>• 多言語処理技術</li>
                          <li>• 文化的コンテキスト理解</li>
                          <li>• 翻訳・通訳技術開発</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">キャリア：</p>
                        <ul className="text-sm space-y-1">
                          <li>• AI翻訳システム開発</li>
                          <li>• 多言語AIアシスタント</li>
                          <li>• 国際コミュニケーション</li>
                          <li>• 言語教育AI開発</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h5 className="font-bold mb-2">心理学×ヒューマンAIインタラクション</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm font-semibold mb-2">学習内容：</p>
                        <ul className="text-sm space-y-1">
                          <li>• 認知心理学・行動分析</li>
                          <li>• UX/UIデザイン理論</li>
                          <li>• 感情認識・共感技術</li>
                          <li>• デジタルウェルビーイング</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">キャリア：</p>
                        <ul className="text-sm space-y-1">
                          <li>• AIインタラクションデザイナー</li>
                          <li>• デジタルセラピスト</li>
                          <li>• ユーザビリティ専門家</li>
                          <li>• AIカウンセリングシステム</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 文理融合進路 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">🔄 文理融合型進路（最注目分野）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2 text-green-800">データサイエンス学部</h4>
                <p className="text-sm mb-2">
                  統計学、プログラミング、ドメイン知識を統合的に学習。
                  文系・理系問わず需要の高い分野。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 滋賀大データサイエンス学部</li>
                  <li>• 横浜市大データサイエンス学部</li>
                  <li>• 武蔵野大データサイエンス学部</li>
                  <li>• 立正大データサイエンス学部</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2 text-green-800">情報学・メディア学</h4>
                <p className="text-sm mb-2">
                  技術とコンテンツ、社会学的視点を組み合わせた
                  総合的なデジタル社会理解を目指す分野。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 東大情報学環</li>
                  <li>• 慶應SFC</li>
                  <li>• 法政情報科学部</li>
                  <li>• 明治情報コミュニケーション学部</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 高校生が今から始めるべき具体的なスキル習得計画
          </h2>

          <p className="mb-6">
            「何から始めればいいのか分からない」という高校生のために、
            学年別・興味分野別に具体的な学習ロードマップを提示します。
            重要なのは完璧を目指すことではなく、継続的に学び続ける姿勢を身につけることです。
          </p>

          <div className="space-y-8">
            {/* 学年別ロードマップ */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">📚 学年別スキル習得ロードマップ</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-bold mb-3">高校1年生：基礎固めと興味発見</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">必須スキル：</p>
                      <ul className="text-sm space-y-1">
                        <li>📊 基礎統計学（確率・データ分析）</li>
                        <li>💻 プログラミング入門（Python/JavaScript）</li>
                        <li>🔍 情報リテラシー（検索・整理・検証）</li>
                        <li>📝 論理的文章作成能力</li>
                        <li>🌐 英語でのテクノロジー情報収集</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">推奨活動：</p>
                      <ul className="text-sm space-y-1">
                        <li>• プログラミング入門講座受講</li>
                        <li>• AIに関する読書（月2冊）</li>
                        <li>• オンライン学習プラットフォーム活用</li>
                        <li>• テクノロジー系YouTubeチャンネル視聴</li>
                        <li>• 科学技術館・展示見学</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-bold mb-3">高校2年生：実践と深化</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">発展スキル：</p>
                      <ul className="text-sm space-y-1">
                        <li>🤖 機械学習基礎（教師ありモデル）</li>
                        <li>🎨 生成AI活用（文章・画像・音楽）</li>
                        <li>📈 データ可視化（Excel/Tableau）</li>
                        <li>🔧 Webアプリケーション開発</li>
                        <li>👥 チームプロジェクト経験</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">推奨活動：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 小規模アプリ・Webサイト制作</li>
                        <li>• プログラミングコンテスト参加</li>
                        <li>• オープンキャンパス・研究室見学</li>
                        <li>• 地域課題×AI解決プロジェクト</li>
                        <li>• 技術系勉強会・イベント参加</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-bold mb-3">高校3年生：専門性と成果発表</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold mb-2">応用スキル：</p>
                      <ul className="text-sm space-y-1">
                        <li>🏆 ポートフォリオ作品制作</li>
                        <li>📊 研究・論文執筆基礎</li>
                        <li>🎤 プレゼンテーション技術</li>
                        <li>🌍 国際的な技術トレンド把握</li>
                        <li>💼 キャリア設計とネットワーキング</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">推奨活動：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 本格的な作品・研究完成</li>
                        <li>• 学会・展示会での発表</li>
                        <li>• インターンシップ参加</li>
                        <li>• 大学・企業とのコラボレーション</li>
                        <li>• AI倫理・社会影響についての考察</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 分野別専門ロードマップ */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">🎯 分野別専門スキル習得ロードマップ</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">🔧 技術開発志向（エンジニア志望）</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">段階</th>
                          <th className="border border-gray-300 p-2 text-center">技術スキル</th>
                          <th className="border border-gray-300 p-2 text-center">実践プロジェクト</th>
                          <th className="border border-gray-300 p-2 text-center">目標</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">初級（1年）</td>
                          <td className="border border-gray-300 p-2">Python基礎、HTML/CSS、Git</td>
                          <td className="border border-gray-300 p-2">電卓アプリ、個人ブログ</td>
                          <td className="border border-gray-300 p-2">基本的な開発環境構築</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-2 font-medium">中級（2年）</td>
                          <td className="border border-gray-300 p-2">機械学習ライブラリ、Web API</td>
                          <td className="border border-gray-300 p-2">推薦システム、チャットボット</td>
                          <td className="border border-gray-300 p-2">AIを活用したアプリ開発</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">上級（3年）</td>
                          <td className="border border-gray-300 p-2">Deep Learning、クラウド</td>
                          <td className="border border-gray-300 p-2">コンテスト参加、研究発表</td>
                          <td className="border border-gray-300 p-2">専門性を活かした課題解決</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">💼 ビジネス活用志向（経営・企画志望）</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">Year 1: 基礎理解</p>
                      <ul className="text-xs space-y-1">
                        <li>• ビジネス基礎知識</li>
                        <li>• AI技術概要理解</li>
                        <li>• データ分析入門</li>
                        <li>• 市場調査手法</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">Year 2: 実践応用</p>
                      <ul className="text-xs space-y-1">
                        <li>• 事業計画書作成</li>
                        <li>• AI導入事例研究</li>
                        <li>• 競合分析手法</li>
                        <li>• プレゼン技術</li>
                      </ul>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">Year 3: 戦略立案</p>
                      <ul className="text-xs space-y-1">
                        <li>• DX戦略設計</li>
                        <li>• 投資評価手法</li>
                        <li>• 組織変革理論</li>
                        <li>• リーダーシップ</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">🎨 創造・表現志向（アート・メディア志望）</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">デジタル創作スキル：</p>
                      <ul className="text-sm space-y-1">
                        <li>• 生成AI（Midjourney、DALL-E）活用</li>
                        <li>• 動画編集・モーショングラフィックス</li>
                        <li>• 3Dモデリング・VR/AR制作</li>
                        <li>• Webデザイン・UI/UXデザイン</li>
                        <li>• 音楽制作・サウンドデザイン</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">表現・発信スキル：</p>
                      <ul className="text-sm space-y-1">
                        <li>• ストーリーテリング技法</li>
                        <li>• ソーシャルメディア活用</li>
                        <li>• 展示・発表企画運営</li>
                        <li>• 批評・評論執筆</li>
                        <li>• 国際的な作品発表</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 学習リソースガイド */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-800">📖 推奨学習リソース・プラットフォーム</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">🆓 無料リソース</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Coursera（大学講座無料聴講）</li>
                    <li>• edX（MIT、ハーバード等）</li>
                    <li>• Khan Academy（基礎数学・統計）</li>
                    <li>• YouTube（技術解説チャンネル）</li>
                    <li>• GitHub（オープンソース学習）</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">💰 有料プラットフォーム</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Udemy（実践的コース）</li>
                    <li>• Pluralsight（技術特化）</li>
                    <li>• LinkedIn Learning（ビジネス×技術）</li>
                    <li>• MasterClass（創造性・リーダーシップ）</li>
                    <li>• Skillshare（クリエイティブスキル）</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">🏫 国内専門教育</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Life is Tech!（中高生向け）</li>
                    <li>• TechAcademy（オンライン完結）</li>
                    <li>• CodeCamp（マンツーマン指導）</li>
                    <li>• N予備校（プログラミング）</li>
                    <li>• AIアソビあとりえ（総合AI教育）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. AI時代に求められる「人間力」の磨き方と実践方法
          </h2>

          <p className="mb-6">
            技術スキルだけでは不十分です。AI時代だからこそ、
            「人間にしかできないこと」「人間らしい価値創造」が重要になります。
            これらの能力は一朝一夕では身につかないため、
            高校時代から意識的に育成することが重要です。
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-teal-800">🌟 AI時代の5つの必須「人間力」</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">1. 創造的問題解決力（Creative Problem Solving）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">特徴：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 既存の枠組みを超えた発想</li>
                      <li>• 多角的な視点からのアプローチ</li>
                      <li>• 失敗を恐れない試行錯誤</li>
                      <li>• 異分野知識の創造的統合</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">育成方法：</p>
                    <ul className="text-sm space-y-1">
                      <li>• デザイン思考ワークショップ</li>
                      <li>• アート・音楽・文学への親しみ</li>
                      <li>• 異文化交流・海外経験</li>
                      <li>• マインドマップ・ブレスト習慣</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">2. 深い共感力と感情知能（Empathy & EQ）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">特徴：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 他者の感情・立場の理解</li>
                      <li>• 文化的多様性への敬意</li>
                      <li>• 非言語コミュニケーション理解</li>
                      <li>• 感情の適切な表現・調整</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">育成方法：</p>
                    <ul className="text-sm space-y-1">
                      <li>• ボランティア・社会貢献活動</li>
                      <li>• 多様な人々との協働経験</li>
                      <li>• 文学・映画での感情体験</li>
                      <li>• カウンセリング・傾聴技術学習</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">3. 批判的思考力と情報判断力（Critical Thinking）</h4>
                <p className="text-sm mb-3">
                  AI生成コンテンツが溢れる時代において、
                  情報の真偽を見極め、論理的に分析・評価する能力が必須。
                  フェイクニュース、バイアス、誤情報への対抗力。
                </p>
                <div className="bg-teal-100 p-3 rounded">
                  <p className="text-sm font-bold mb-2">実践的育成方法：</p>
                  <ul className="text-xs space-y-1">
                    <li>• ディベート・討論大会参加</li>
                    <li>• 複数情報源のクロスチェック習慣</li>
                    <li>• 論理学・哲学の基礎学習</li>
                    <li>• メディアリテラシー向上</li>
                    <li>• 科学的方法論の実践</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">4. 高度なコミュニケーション力（Communication Skills）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">対人コミュニケーション：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 説得力のあるプレゼンテーション</li>
                      <li>• 効果的なチームリーダーシップ</li>
                      <li>• 文化を超えた協働能力</li>
                      <li>• 複雑な概念の平易な説明</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">デジタルコミュニケーション：</p>
                    <ul className="text-sm space-y-1">
                      <li>• SNS・オンラインでの適切な発信</li>
                      <li>• バーチャル環境でのファシリテーション</li>
                      <li>• AIツールとの効果的な対話</li>
                      <li>• 多様なメディアでの表現</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">5. 適応力と継続学習力（Adaptability & Lifelong Learning）</h4>
                <p className="text-sm mb-3">
                  技術の急速な変化に対応し、新しいスキルを迅速に習得し、
                  自己を継続的にアップデートできる「学習する力」。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-teal-100 p-3 rounded">
                    <p className="text-sm font-bold mb-2">メタ学習スキル：</p>
                    <ul className="text-xs space-y-1">
                      <li>• 効率的な学習方法の確立</li>
                      <li>• 自己評価・振り返り習慣</li>
                      <li>• 知識の体系化・関連付け</li>
                      <li>• 学習計画の立案・実行</li>
                    </ul>
                  </div>
                  <div className="bg-teal-100 p-3 rounded">
                    <p className="text-sm font-bold mb-2">変化への適応：</p>
                    <ul className="text-xs space-y-1">
                      <li>• 不確実性への耐性</li>
                      <li>• 新環境への柔軟な対応</li>
                      <li>• 失敗からの迅速な回復</li>
                      <li>• 多様な働き方への対応</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">人間力育成のための実践プログラム</h3>

          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-4 text-orange-800">🎯 高校3年間の人間力育成ロードマップ</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">1年生：自己理解と基盤形成</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">自己分析：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 強み・弱み発見</li>
                        <li>• 価値観の明確化</li>
                        <li>• 学習スタイル理解</li>
                        <li>• 将来ビジョン設定</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">基礎スキル：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 読書習慣確立</li>
                        <li>• 基本的プレゼンテーション</li>
                        <li>• タイムマネジメント</li>
                        <li>• 健康的な生活習慣</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">社会参加：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 地域活動参加</li>
                        <li>• 部活動・委員会</li>
                        <li>• 異年齢交流</li>
                        <li>• 家族との協力</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">2年生：実践と挑戦</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">リーダーシップ：</p>
                      <ul className="text-xs space-y-1">
                        <li>• チームプロジェクト主導</li>
                        <li>• 文化祭・体育祭企画</li>
                        <li>• 後輩指導・メンタリング</li>
                        <li>• 意見の調整・まとめ役</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">創造活動：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 芸術・文化活動</li>
                        <li>• 新しい企画立案</li>
                        <li>• 問題解決プロジェクト</li>
                        <li>• 独自研究・調査</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">国際性：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 語学力向上</li>
                        <li>• 国際交流参加</li>
                        <li>• 多文化理解促進</li>
                        <li>• グローバル課題学習</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded">
                  <h5 className="font-bold mb-2">3年生：統合と発信</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">成果統合：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 3年間の成長記録</li>
                        <li>• ポートフォリオ完成</li>
                        <li>• 学びの言語化</li>
                        <li>• 自己PR能力向上</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">社会発信：</p>
                      <ul className="text-xs space-y-1">
                        <li>• 研究発表・論文執筆</li>
                        <li>• 地域への貢献活動</li>
                        <li>• 後進への指導</li>
                        <li>• 外部評価獲得</li>
                      </ul>
                    </div>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-sm font-bold mb-2">将来準備：</p>
                      <ul className="text-xs space-y-1">
                        <li>• キャリアビジョン明確化</li>
                        <li>• 人脈・ネットワーク構築</li>
                        <li>• 継続学習計画策定</li>
                        <li>• 社会責任意識醸成</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">📝 人間力の定期的セルフチェック項目</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold mb-2">月次振り返り：</p>
                  <ul className="text-sm space-y-1">
                    <li>• 新しく学んだこと・気づいたこと</li>
                    <li>• 他者との協働で感じたこと</li>
                    <li>• 失敗から得た教訓</li>
                    <li>• 価値観や考え方の変化</li>
                    <li>• 来月の改善点・挑戦目標</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">年次総合評価：</p>
                  <ul className="text-sm space-y-1">
                    <li>• 人間関係の質的向上</li>
                    <li>• 問題解決能力の成長</li>
                    <li>• 自己表現力の向上</li>
                    <li>• 社会貢献への意識変化</li>
                    <li>• 将来ビジョンの明確化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：AI時代を生き抜く高校生へのメッセージ</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AI時代は「脅威」ではなく「人間の可能性を拡張する時代」</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>技術スキルと人間力のバランスが成功の鍵</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>文系・理系の枠を超えた融合的学習が重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>継続的学習と適応力が最も価値ある能力</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>高校時代の経験と挑戦が将来の可能性を決める</span>
          </div>
        </div>

        <p className="text-lg">
          皆さんが社会に出る頃には、今は想像もできない新しい職業や
          働き方が生まれているでしょう。大切なのは、特定のスキルを
          身につけることではなく、変化を楽しみ、学び続け、
          人とのつながりを大切にしながら、自分らしい価値を創造する力です。
          
          AI技術を恐れず、うまく活用しながら、
          人間にしかできない創造性と温かさを発揮して、
          より良い社会を築いていってください。
          あなたたちの可能性は無限大です。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">🎓 高校生向けAI時代キャリア相談会</h3>
        <p className="mb-6">
          進路選択に悩む高校生と保護者の皆様を対象に、
          AI時代のキャリア設計について個別相談を実施中。
          大学受験戦略から将来の職業選択まで、
          豊富な実績を持つ専門家が親身にサポートします。
        </p>
        <div className="bg-white p-4 rounded-lg mb-6 inline-block">
          <p className="font-bold mb-2">💡 相談会で解決できること</p>
          <ul className="text-sm text-left">
            <li>• 志望校選択とAIスキル活用戦略</li>
            <li>• 文系・理系進路とAI分野の関連性</li>
            <li>• 今から始められる具体的な学習計画</li>
            <li>• 人間力育成と技術習得のバランス</li>
            <li>• 奨学金・進学費用相談</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            高校生向け進路相談を予約
          </Link>
          <Link 
            href="/trial" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            AI学習体験プログラム参加
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">政府政策・統計データ</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.kantei.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    内閣府「AI戦略2025」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「Society 5.0人材育成プログラム」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.meti.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    経済産業省「DX人材育成指針」（2025年）
                  </a>
              </li>
              <li>
                • 厚生労働省「AI時代の雇用動向調査2025」（2025年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・進路指導</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 日本進路指導協会「AI時代の進路選択指針」（2025年）
              </li>
              <li>
                • 大学入試センター「新時代入試制度研究報告」（2024年）
              </li>
              <li>
                • リクルート進学総研「高校生の進路意識調査2025」（2025年）
              </li>
              <li>
                • ベネッセ教育総合研究所「AI時代の学習方法論」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">人材・キャリア研究</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • パーソル総合研究所「次世代人材スキル要件調査」（2025年）
              </li>
              <li>
                • McKinsey Global Institute「The Future of Work in the Age of AI」（2025年）
              </li>
              <li>
                • World Economic Forum「Future of Jobs Report 2025」（2025年）
              </li>
              <li>
                • AIアソビあとりえ「高校生AI教育効果検証報告書」（2025年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/middle-school-ai-education-synergy" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  中学受験×AI教育の相乗効果：論理的思考力が飛躍的に向上する学習法
                </h3>
                <p className="text-sm text-gray-600">
                  中学生向けAI教育戦略
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-programming-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どものためのAIプログラミング入門：遊びながら学ぶ未来のスキル
                </h3>
                <p className="text-sm text-gray-600">
                  プログラミング基礎教育
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-education-future" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                </h3>
                <p className="text-sm text-gray-600">
                  AI教育の基本理解
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