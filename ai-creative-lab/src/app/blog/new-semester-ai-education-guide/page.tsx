import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "【2025年4月新学期】AI時代の習い事選び完全ガイド：今から間に合う教室探しのコツ | 東京AI創造スタジオ",
  description: "新学期に向けたAI教育・プログラミング教室の選び方を徹底解説。港区で人気の教室情報、体験スケジュール、準備すべきことをまとめました。今からでも4月入会に間に合います！",
  keywords: ["新学期 習い事 AI", "4月 プログラミング教室", "新学年 AI教育", "春 習い事 選び方", "港区 新学期 教室", "AI教室 入会時期", "プログラミング 始め時"],
  openGraph: {
    title: "【2025年4月新学期】AI時代の習い事選び完全ガイド",
    description: "新学期に向けた最適な教室選びと準備方法を専門家が解説。",
    images: ['/images/blog/001.png'],
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
          <li className="text-gray-900">新学期AI教育ガイド</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">季節特集</span>
          <time dateTime="2025-02-20" className="text-gray-600">2025年2月20日</time>
          <span className="text-gray-600">更新: 2025年2月20日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          【2025年4月新学期】<br className="md:hidden" />
          AI時代の習い事選び完全ガイド：今から間に合う教室探しのコツ
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/001.png" 
          alt="新学期に向けてAI教室を検討する親子の様子"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-green-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「4月から何か新しい習い事を始めさせたいけど、今から探して間に合うかしら...」
          「AIやプログラミングが大切なのは分かるけど、どう選べばいいの？」
        </p>
        <p className="text-lg leading-relaxed mb-4">
          新学期を迎える2月〜3月は、多くの保護者の方が
          お子様の習い事選びに悩む時期です。
          特に2025年は、AI教育への関心が急速に高まり、
          「出遅れたくない」という焦りを感じる方も多いでしょう。
        </p>
        <p className="text-lg leading-relaxed">
          でも、ご安心ください。今からでも十分間に合います！
          本記事では、新学期に向けたAI教育・プログラミング教室の
          選び方から、3月中に済ませるべき準備まで、
          港区の教育専門家が実践的にガイドします。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>新学期スタートに最適な習い事の選び方</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>2025年注目のAI教育トレンドと教室タイプ</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>今から間に合う！3月中の教室探しスケジュール</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>体験授業で確認すべき10のポイント</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>学年別・目的別おすすめ教室マップ</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜ新学期がAI教育を始める絶好のタイミングなのか
          </h2>
          
          <p className="mb-4">
            新学期は子どもたちにとって「新しいことを始める」
            心理的な準備ができている時期です。
            クラス替えや進級による環境の変化が、
            新たな挑戦への意欲を高めます。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 新学期スタートの習い事成功率データ（2024年調査）</p>
            <ul className="text-sm space-y-1">
              <li>• 4月開始の習い事継続率：87%（1年後）</li>
              <li>• 年度途中開始の継続率：62%（1年後）</li>
              <li>• 友達と一緒に始められる確率：4月が最も高い（43%）</li>
              <li>• 保護者の満足度：新学期開始が15%高い</li>
              <li>• 学習効果：年間カリキュラムを完走できる確率が2.3倍</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：日本習い事協会「子どもの習い事実態調査2024」（2024年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">2025年4月に始めるメリット</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">📚 学習面のメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• 年間カリキュラムの最初から参加</li>
                <li>• 基礎からしっかり学べる</li>
                <li>• 進度に遅れる心配がない</li>
                <li>• 発表会・コンテストに向けた準備期間確保</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">👥 社会面のメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• 同じスタートラインの仲間と出会える</li>
                <li>• クラスの一体感が生まれやすい</li>
                <li>• 学校とは違う友達ができる</li>
                <li>• 新学年の自信につながる</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">💰 経済面のメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• 入会金無料キャンペーンが多い</li>
                <li>• 初月無料・割引特典</li>
                <li>• 教材の無料提供</li>
                <li>• 兄弟割引の適用</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">📅 スケジュール面のメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• 学校行事と調整しやすい</li>
                <li>• 年間予定が立てやすい</li>
                <li>• 長期休暇の特別講座参加</li>
                <li>• 受験準備との両立計画</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ 注意：人気教室は2月中に満席になることも</h4>
            <p className="text-sm">
              港区の人気AI教室では、2月中旬から体験予約が殺到し、
              3月上旬には定員に達することがあります。
              特に土曜日の午前中クラスは競争率が高く、
              早めの行動が必要です。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 2025年注目のAI教育トレンドと教室タイプ
          </h2>

          <p className="mb-6">
            AI教育と一口に言っても、様々なアプローチがあります。
            お子様の興味や将来の目標に合わせて、
            最適な教室タイプを選ぶことが重要です。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">🎯 2025年のAI教育5大トレンド</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. 生成AI活用教育の本格化</h4>
                <p className="text-sm mb-2">
                  ChatGPT、Claude、Geminiなどを教育ツールとして活用。
                  プロンプトエンジニアリングが新たな必須スキルに。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>注目ポイント：</strong>AIとの対話力、批判的思考力の育成
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. メタバース×創造教育</h4>
                <p className="text-sm mb-2">
                  Roblox、Minecraftでの世界構築を通じて、
                  3D空間での創造力を育成。NFTアートも注目。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>注目ポイント：</strong>空間認識力、デジタル経済の理解
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. AI×教科学習の融合</h4>
                <p className="text-sm mb-2">
                  算数・理科・英語などの教科学習にAIを活用。
                  個別最適化学習で効率的な知識習得。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>注目ポイント：</strong>学校成績向上との両立
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. ロボティクス×AI制御</h4>
                <p className="text-sm mb-2">
                  単なるロボット制作から、AI搭載ロボットの
                  プログラミングへ進化。実社会での応用も視野に。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>注目ポイント：</strong>ハードウェアとソフトウェアの統合理解
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. データサイエンス入門</h4>
                <p className="text-sm mb-2">
                  小学生でもできるデータ分析。
                  身近なテーマでグラフ作成や予測モデル構築。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>注目ポイント：</strong>論理的思考力、数学的センス
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">教室タイプ別特徴と選び方</h3>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室タイプ</th>
                  <th className="border border-gray-300 p-3 text-center">対象年齢</th>
                  <th className="border border-gray-300 p-3 text-center">月謝相場</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                  <th className="border border-gray-300 p-3 text-center">こんな子におすすめ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">総合AI創造スタジオ</td>
                  <td className="border border-gray-300 p-3 text-center">6-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">25,000-35,000円</td>
                  <td className="border border-gray-300 p-3">プログラミング、アート、音楽を統合</td>
                  <td className="border border-gray-300 p-3">創造性重視、幅広い興味</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">プログラミング特化型</td>
                  <td className="border border-gray-300 p-3 text-center">8-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">15,000-25,000円</td>
                  <td className="border border-gray-300 p-3">コーディングスキル重視</td>
                  <td className="border border-gray-300 p-3">論理的思考が得意</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">ロボティクス教室</td>
                  <td className="border border-gray-300 p-3 text-center">5-15歳</td>
                  <td className="border border-gray-300 p-3 text-center">12,000-20,000円</td>
                  <td className="border border-gray-300 p-3">ハンズオン学習、チーム活動</td>
                  <td className="border border-gray-300 p-3">手を動かすのが好き</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">ゲーム開発教室</td>
                  <td className="border border-gray-300 p-3 text-center">10-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">18,000-28,000円</td>
                  <td className="border border-gray-300 p-3">Unity、Unreal Engine使用</td>
                  <td className="border border-gray-300 p-3">ゲーム好き、将来クリエイター志望</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">AI×アート教室</td>
                  <td className="border border-gray-300 p-3 text-center">6-16歳</td>
                  <td className="border border-gray-300 p-3 text-center">20,000-30,000円</td>
                  <td className="border border-gray-300 p-3">デジタルアート、生成AI活用</td>
                  <td className="border border-gray-300 p-3">芸術的センス、表現好き</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">💡 教室選びのポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• お子様の興味・関心を最優先に</li>
              <li>• 通いやすさ（立地・時間帯）を確認</li>
              <li>• カリキュラムの体系性をチェック</li>
              <li>• 講師の質と生徒数のバランス</li>
              <li>• 発表会やコンテストの機会</li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 今から間に合う！3月中の教室探しスケジュール
          </h2>

          <p className="mb-6">
            「もう2月下旬だけど間に合うかな...」
            大丈夫です！効率的なスケジュールで動けば、
            4月の新学期スタートに十分間に合います。
          </p>

          <div className="bg-pink-50 border-l-4 border-pink-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-pink-800">📅 教室探し〜入会までの理想的スケジュール</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">【2月第3-4週】情報収集フェーズ（5-7日間）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">やること：</p>
                    <ul className="text-sm space-y-1">
                      <li>✓ 通える範囲の教室をリストアップ</li>
                      <li>✓ 各教室のウェブサイトチェック</li>
                      <li>✓ 口コミ・評判を調査</li>
                      <li>✓ 料金・時間割の比較表作成</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">ポイント：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 最低5教室はピックアップ</li>
                      <li>• 子どもの意見も聞く</li>
                      <li>• 通学ルートも確認</li>
                      <li>• 予算上限を明確に</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">【3月第1週】体験予約フェーズ（2-3日間）</h4>
                <div className="bg-pink-100 p-3 rounded mb-3">
                  <p className="text-sm font-bold">重要：この週が勝負！人気教室は予約が埋まり始めます</p>
                </div>
                <ul className="text-sm space-y-1">
                  <li>✓ 候補3-4教室の体験授業を予約</li>
                  <li>✓ 同じ週末に2教室ずつ体験できるよう調整</li>
                  <li>✓ キャンセル待ちも積極的に登録</li>
                  <li>✓ 質問事項をまとめておく</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">【3月第2-3週】体験授業フェーズ（7-10日間）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">体験スケジュール例：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 3/7(土) AM：A教室体験</li>
                      <li>• 3/7(土) PM：B教室体験</li>
                      <li>• 3/8(日) AM：C教室体験</li>
                      <li>• 3/14(土) AM：D教室体験</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">持ち物・準備：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 筆記用具</li>
                      <li>• 質問リスト</li>
                      <li>• 子どもの感想メモ</li>
                      <li>• スケジュール帳</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">【3月第3-4週】決定・手続きフェーズ（3-5日間）</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ 家族会議で最終決定</li>
                  <li>✓ 入会手続き（3/20頃までに）</li>
                  <li>✓ 教材購入・準備物の確認</li>
                  <li>✓ 4月のスケジュール確認</li>
                  <li>✓ 初回授業の持ち物準備</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h4 className="font-bold mb-2">⏰ 時間がない場合の最速プラン</h4>
            <p className="text-sm mb-2">
              3月上旬にスタートする場合は、以下の短縮版で：
            </p>
            <ul className="text-sm space-y-1">
              <li>1. 情報収集を2-3日に圧縮（オンライン中心）</li>
              <li>2. 体験は2教室に絞る（最有力候補のみ）</li>
              <li>3. 1週末で両方体験</li>
              <li>4. 翌週には決定・入会手続き</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📱 効率的な情報収集ツール</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">オンライン</p>
                <ul className="text-xs space-y-1">
                  <li>• Google Maps（通学時間）</li>
                  <li>• 教室公式サイト</li>
                  <li>• SNS（保護者の声）</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">オフライン</p>
                <ul className="text-xs space-y-1">
                  <li>• ママ友ネットワーク</li>
                  <li>• 学校の掲示板</li>
                  <li>• 地域情報誌</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">直接確認</p>
                <ul className="text-xs space-y-1">
                  <li>• 教室見学</li>
                  <li>• 電話問い合わせ</li>
                  <li>• 体験授業</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 体験授業で確認すべき10のポイント
          </h2>

          <p className="mb-6">
            体験授業は教室選びの最重要ポイント。
            限られた時間で効率的に情報を得るため、
            事前にチェックポイントを整理しておきましょう。
          </p>

          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-800">🔍 必須チェック項目（授業中）</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">1. 講師の指導スタイル</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 子どもへの接し方は適切か</li>
                    <li>□ 個別対応の頻度と質</li>
                    <li>□ 褒め方・叱り方のバランス</li>
                    <li>□ 専門知識の深さ</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">2. 授業の構成と進行</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 導入は子どもの興味を引くか</li>
                    <li>□ 難易度は適切か</li>
                    <li>□ 実践時間は十分か</li>
                    <li>□ まとめ・振り返りはあるか</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">3. 子どもの反応</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 楽しそうに参加しているか</li>
                    <li>□ 集中力が続いているか</li>
                    <li>□ 質問や発言をしているか</li>
                    <li>□ 達成感を感じているか</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">4. 他の生徒の様子</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 全体の雰囲気は良好か</li>
                    <li>□ 生徒同士の協力関係</li>
                    <li>□ レベルのばらつき具合</li>
                    <li>□ 規律は保たれているか</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">5. 使用教材・機材</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 最新の機材を使っているか</li>
                    <li>□ 一人一台確保されているか</li>
                    <li>□ 教材の質と分かりやすさ</li>
                    <li>□ 家庭学習教材の有無</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">💬 保護者説明で確認すること</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">6. カリキュラムの詳細</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 年間学習計画の明確さ</li>
                    <li>□ 到達目標の具体性</li>
                    <li>□ 進度調整の柔軟性</li>
                    <li>□ 資格取得サポート</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">7. 費用の透明性</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 月謝以外の費用</li>
                    <li>□ 教材費の詳細</li>
                    <li>□ イベント参加費</li>
                    <li>□ 退会時の規定</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">8. サポート体制</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 振替授業の対応</li>
                    <li>□ 個別相談の頻度</li>
                    <li>□ 保護者への報告方法</li>
                    <li>□ 質問対応の仕組み</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold mb-2">9. 成果の見える化</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ 作品発表の機会</li>
                    <li>□ コンテスト参加</li>
                    <li>□ 成長記録の管理</li>
                    <li>□ 進路相談対応</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">10. 教室の環境・立地</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">安全面</p>
                  <ul className="text-xs space-y-1">
                    <li>• 入退室管理</li>
                    <li>• 防犯カメラ</li>
                    <li>• 緊急時対応</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">快適性</p>
                  <ul className="text-xs space-y-1">
                    <li>• 清潔感</li>
                    <li>• 空調設備</li>
                    <li>• 待合スペース</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">利便性</p>
                  <ul className="text-xs space-y-1">
                    <li>• 駅からの距離</li>
                    <li>• 駐輪場・駐車場</li>
                    <li>• 周辺環境</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📝 体験後すぐにすること</h4>
            <ul className="text-sm space-y-1">
              <li>• 子どもの感想を詳しく聞く（その日のうちに）</li>
              <li>• チェックリストを見返して評価</li>
              <li>• 不明点があればすぐに質問</li>
              <li>• 他の体験教室と比較表を作成</li>
              <li>• 家族で話し合う時間を設定</li>
            </ul>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 学年別・目的別おすすめ教室マップ【港区版】
          </h2>

          <p className="mb-6">
            お子様の学年や目的に応じて、最適な教室選びの
            参考にしてください。港区内の実際の教室情報を基に、
            タイプ別にマッピングしました。
          </p>

          {/* 学年別おすすめ */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">📚 学年別おすすめ教室</h3>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-yellow-800">幼児〜小学校低学年（5-8歳）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">重視ポイント：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 遊び感覚で学べる環境</li>
                      <li>• 少人数制（6名以下）</li>
                      <li>• 視覚的な教材</li>
                      <li>• 短時間集中型（45-60分）</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">おすすめタイプ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• ロボティクス入門教室</li>
                      <li>• ビジュアルプログラミング</li>
                      <li>• STEAM総合教室</li>
                      <li>• 創作系AI教室</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-green-800">小学校中学年（9-10歳）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">重視ポイント：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 基礎から応用への橋渡し</li>
                      <li>• 論理的思考の育成</li>
                      <li>• 達成感を感じる課題設定</li>
                      <li>• 友達との協働学習</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">おすすめタイプ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• Scratchプログラミング</li>
                      <li>• ゲーム開発入門</li>
                      <li>• AI×教科学習</li>
                      <li>• マインクラフト教育版</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-800">小学校高学年〜中学生（11-15歳）</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">重視ポイント：</p>
                    <ul className="text-sm space-y-1">
                      <li>• 本格的なスキル習得</li>
                      <li>• 将来を見据えた学習</li>
                      <li>• 資格・検定対策</li>
                      <li>• プロジェクト型学習</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">おすすめタイプ：</p>
                    <ul className="text-sm space-y-1">
                      <li>• テキストプログラミング</li>
                      <li>• Unity/Unreal Engine</li>
                      <li>• データサイエンス入門</li>
                      <li>• AI開発実践</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 目的別おすすめ */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">🎯 目的別おすすめ教室</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">目的</th>
                    <th className="border border-gray-300 p-3 text-center">推奨教室タイプ</th>
                    <th className="border border-gray-300 p-3 text-center">期待効果</th>
                    <th className="border border-gray-300 p-3 text-center">参考価格帯</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">中学受験との両立</td>
                    <td className="border border-gray-300 p-3">AI×教科学習型、週1回コース</td>
                    <td className="border border-gray-300 p-3">論理的思考力向上、ストレス解消</td>
                    <td className="border border-gray-300 p-3 text-center">15,000-20,000円</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">クリエイター志向</td>
                    <td className="border border-gray-300 p-3">ゲーム開発、3Dモデリング</td>
                    <td className="border border-gray-300 p-3">作品制作スキル、ポートフォリオ</td>
                    <td className="border border-gray-300 p-3 text-center">25,000-35,000円</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">理系進学準備</td>
                    <td className="border border-gray-300 p-3">データサイエンス、本格プログラミング</td>
                    <td className="border border-gray-300 p-3">大学入試優位性、研究スキル</td>
                    <td className="border border-gray-300 p-3 text-center">20,000-30,000円</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">国際感覚育成</td>
                    <td className="border border-gray-300 p-3">英語×プログラミング</td>
                    <td className="border border-gray-300 p-3">グローバルスキル、海外進学準備</td>
                    <td className="border border-gray-300 p-3 text-center">30,000-40,000円</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">創造性重視</td>
                    <td className="border border-gray-300 p-3">AI×アート、メタバース創作</td>
                    <td className="border border-gray-300 p-3">表現力、独創性、将来性</td>
                    <td className="border border-gray-300 p-3 text-center">25,000-35,000円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* エリア別教室マップ */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">🗺️ 港区エリア別教室分布</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">白金・白金台エリア</h4>
                <ul className="text-sm space-y-1">
                  <li>• 総合AI創造スタジオ（白金高輪駅徒歩3分）</li>
                  <li>• ロボティクス専門教室（白金台駅徒歩5分）</li>
                  <li>• 少人数制プログラミング（白金高輪駅徒歩7分）</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">特徴：高級住宅街、教育熱心な家庭多数</p>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">赤坂・六本木エリア</h4>
                <ul className="text-sm space-y-1">
                  <li>• 国際系プログラミング教室（赤坂駅徒歩2分）</li>
                  <li>• ゲーム開発専門校（六本木駅徒歩4分）</li>
                  <li>• AI×英語教室（赤坂見附駅徒歩3分）</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">特徴：国際色豊か、最新技術導入が早い</p>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">青山・表参道エリア</h4>
                <ul className="text-sm space-y-1">
                  <li>• クリエイティブ系AI教室（表参道駅徒歩5分）</li>
                  <li>• デザイン×プログラミング（青山一丁目駅徒歩3分）</li>
                  <li>• アート系STEAM教室（外苑前駅徒歩6分）</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">特徴：クリエイティブ系に強み、感性重視</p>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">品川・高輪エリア</h4>
                <ul className="text-sm space-y-1">
                  <li>• 大手プログラミングスクール（品川駅徒歩8分）</li>
                  <li>• 実践的AI開発教室（高輪ゲートウェイ駅徒歩3分）</li>
                  <li>• データサイエンス教室（泉岳寺駅徒歩5分）</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">特徴：ビジネス街隣接、実践的カリキュラム</p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 新学期スタートを成功させるための準備リスト
          </h2>

          <div className="bg-teal-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-teal-800">✅ 入会決定後の準備チェックリスト</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">学習環境の準備</h4>
                <ul className="text-sm space-y-1">
                  <li>□ 自宅学習スペースの確保</li>
                  <li>□ 必要なデバイスの準備（PC/タブレット）</li>
                  <li>□ インターネット環境の確認</li>
                  <li>□ 学習用アプリのインストール</li>
                  <li>□ セキュリティ設定の確認</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">スケジュール調整</h4>
                <ul className="text-sm space-y-1">
                  <li>□ 学校行事との重複確認</li>
                  <li>□ 他の習い事との調整</li>
                  <li>□ 送迎スケジュールの確定</li>
                  <li>□ 家庭学習時間の設定</li>
                  <li>□ 長期休暇中の対応確認</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">モチベーション準備</h4>
                <ul className="text-sm space-y-1">
                  <li>□ 目標設定（短期・長期）</li>
                  <li>□ ご褒美システムの設定</li>
                  <li>□ 作品を飾るスペース確保</li>
                  <li>□ 家族の協力体制構築</li>
                  <li>□ 初回授業への期待を高める</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">🎒 持ち物準備</h4>
              <ul className="text-sm space-y-1">
                <li>• 指定の教材・テキスト</li>
                <li>• 筆記用具一式</li>
                <li>• USBメモリ（作品保存用）</li>
                <li>• ノートPC（必要な場合）</li>
                <li>• 水筒・軽食（長時間の場合）</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-pink-800">💝 心の準備</h4>
              <ul className="text-sm space-y-1">
                <li>• 失敗を恐れない心構え</li>
                <li>• 継続の大切さを伝える</li>
                <li>• 他の子と比較しない約束</li>
                <li>• 楽しむことが第一の確認</li>
                <li>• 困ったら相談する習慣づけ</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📅 4月第1週までのカウントダウン</h4>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded text-center">
                <p className="text-xs font-bold">3週間前</p>
                <p className="text-xs">教室決定・入会手続き</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-xs font-bold">2週間前</p>
                <p className="text-xs">教材購入・環境準備</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-xs font-bold">1週間前</p>
                <p className="text-xs">最終確認・心の準備</p>
              </div>
              <div className="bg-white p-3 rounded text-center">
                <p className="text-xs font-bold">当日</p>
                <p className="text-xs">楽しくスタート！</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：新学期は子どもの可能性を広げる最高のタイミング</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>新学期は心機一転、新しい挑戦を始める絶好の機会</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>2025年のAI教育トレンドを押さえた教室選びが重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>今からでも計画的に動けば4月スタートに十分間に合う</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>体験授業での確認ポイントを押さえて効率的に選択</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>準備をしっかりすることで、スムーズなスタートが切れる</span>
          </div>
        </div>

        <p className="text-lg">
          AI時代を生きる子どもたちにとって、
          プログラミングやAI活用スキルは「特別な才能」ではなく
          「基礎教養」となりつつあります。
          
          新学期という節目を活かして、
          お子様の未来への第一歩を踏み出してみませんか？
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">🌸 春の新規入会キャンペーン実施中！</h3>
        <p className="mb-6">
          3月31日までのご入会で、入会金無料＋初月授業料50%OFF！
          まずは無料体験授業で、お子様の反応をご確認ください。
        </p>
        <div className="bg-white p-4 rounded-lg mb-6 inline-block">
          <p className="font-bold mb-2">残り枠わずか！人気の時間帯</p>
          <ul className="text-sm text-left">
            <li>• 土曜日 10:00-11:30（残り2名）</li>
            <li>• 土曜日 14:00-15:30（残り3名）</li>
            <li>• 日曜日 10:00-11:30（残り1名）</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            無料体験を予約する
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            資料請求・お問い合わせ
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">調査・統計データ</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 日本習い事協会「子どもの習い事実態調査2024」（2024年）
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「プログラミング教育の実施状況」（2025年）
                  </a>
              </li>
              <li>
                • 港区教育委員会「区内習い事動向調査」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育関連資料</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.soumu.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「若年層に対するプログラミング教育の普及推進」（2025年）
                  </a>
              </li>
              <li>
                • 日本STEM教育学会「AI時代の教育方法論」（2024年）
              </li>
              <li>
                • 東京都私立小学校協会「習い事と学業の両立に関する調査」（2024年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/how-to-choice-minatokuProgramingClass" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  【完全版】港区のプログラミング教室の選び方：失敗しない5つのポイント
                </h3>
                <p className="text-sm text-gray-600">
                  教室選びの基本
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-classroom-tuition-comparison-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  【2025年版】AI教室の料金相場を徹底比較！
                </h3>
                <p className="text-sm text-gray-600">
                  費用対効果を検証
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/chatgpt-safe-guide-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どものChatGPT活用完全ガイド【2025年最新版】
                </h3>
                <p className="text-sm text-gray-600">
                  AI活用の第一歩
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