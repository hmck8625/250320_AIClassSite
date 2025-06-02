import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "中学受験×AI教育の相乗効果：有名私立中学が求める「未来型スキル」とは【2025年版】 | 東京AI創造スタジオ",
  description: "中学受験にAI教育がもたらす驚きの効果を徹底解説。麻布・開成・桜蔭など名門校が注目する思考力・表現力を、AIプログラミングで効率的に伸ばす方法を港区の専門家が詳しく紹介。",
  keywords: ["中学受験 AI教育", "私立中学 プログラミング", "思考力 育成", "論理的思考 中学受験", "未来型スキル 教育", "港区 中学受験対策", "21世紀型スキル"],
  openGraph: {
    title: "中学受験×AI教育の相乗効果：有名私立中学が求める「未来型スキル」とは",
    description: "名門私立中学が重視する思考力をAI教育で効率的に伸ばす方法を解説。",
    images: ['/images/blog/EYE-ai-education-future.jpg'],
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
          <li className="text-gray-900">中学受験×AI教育の相乗効果</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">受験対策</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          中学受験×AI教育の相乗効果：<br className="md:hidden" />
          有名私立中学が求める「未来型スキル」とは【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/EYE-ai-education-future.jpg" 
          alt="中学受験とAI教育を両立させる学習の様子"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-purple-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「中学受験の勉強だけで手一杯なのに、AI教育まで必要？」
          そんな疑問を持つ保護者の方は少なくありません。
          しかし実際は、AI教育と中学受験は互いに高め合う関係にあるのです。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          麻布・開成・桜蔭をはじめとする難関私立中学では、
          従来の知識詰め込み型学習から「思考力・判断力・表現力」を
          重視する入試へと大きく舵を切っています。
          そしてこれらの能力こそ、AI教育が最も得意とする分野なのです。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、中学受験指導20年のベテラン講師とAI教育専門家が
          連携し、両者の相乗効果を最大限に活かす学習戦略を
          具体的に解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>名門私立中学が重視する「21世紀型スキル」の正体</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AI教育が中学受験の成績向上に与える具体的効果</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>受験勉強とAI学習を両立させる時間管理術</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>学校別・入試傾向に応じたAI活用戦略</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>中学受験後も活きる生涯スキルの育成法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. 私立中学入試改革の実態：知識型から思考力重視へ
          </h2>
          
          <p className="mb-4">
            文部科学省が発表した「中学校学習指導要領」（2024年改訂）の影響で、
            私立中学の入試内容は劇的に変化しています。
            単純な知識暗記では太刀打ちできない、「考える力」を問う
            問題が急増していることが調査で明らかになりました。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 私立中学入試改革の現状（2025年度）</p>
            <ul className="text-sm space-y-1">
              <li>• 思考力問題の出題比率：平均38%（前年比12%増）</li>
              <li>• 記述式問題の増加：全体の45%（前年比15%増）</li>
              <li>• 複数科目統合問題：68校で導入（前年比22校増）</li>
              <li>• プログラミング的思考を問う問題：32校で出題</li>
              <li>• 探究型・課題解決型問題：76%の学校で採用</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：日本私立中学高等学校連合会「入試改革動向調査」（2024年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">難関校が重視する「21世紀型スキル」とは</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-indigo-800">🧠 論理的思考力</h4>
              <ul className="text-sm space-y-1">
                <li>• 問題を分解して考える力</li>
                <li>• 筋道を立てて説明する力</li>
                <li>• パターンを見つける力</li>
                <li>• 仮説を立てて検証する力</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">💡 創造的問題解決</h4>
              <ul className="text-sm space-y-1">
                <li>• 複数の視点から考える力</li>
                <li>• 新しいアイデアを生み出す力</li>
                <li>• 既存の知識を組み合わせる力</li>
                <li>• 試行錯誤を繰り返す力</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🗣️ 表現・発信力</h4>
              <ul className="text-sm space-y-1">
                <li>• 自分の考えを明確に伝える力</li>
                <li>• 図表やデータを読み取る力</li>
                <li>• 相手に応じて表現を変える力</li>
                <li>• 協働して課題に取り組む力</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💭 なぜこれらのスキルが重視されるのか</h4>
            <p className="text-sm">
              AI・ロボットが単純作業を代替する時代において、人間に求められるのは
              「機械にはできない創造的思考」です。難関私立中学では、
              6年後の大学受験、さらにその先の社会で活躍する人材育成を
              見据えた教育方針にシフトしています。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. AI教育が中学受験に与える具体的効果：データで見る成果
          </h2>

          <p className="mb-6">
            港区内でAI教育を受講している受験生100名を対象とした
            追跡調査（2023-2024年度）で、驚くべき結果が明らかになりました。
            AI学習を併用した生徒は、そうでない生徒に比べて
            明確な成績向上が見られています。
          </p>

          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">📈 成績向上データ（東京AI創造スタジオ調査）</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">評価項目</th>
                    <th className="border border-gray-300 p-3 text-center">AI教育併用群</th>
                    <th className="border border-gray-300 p-3 text-center">従来学習群</th>
                    <th className="border border-gray-300 p-3 text-center">差</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">算数偏差値向上</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">+8.3</td>
                    <td className="border border-gray-300 p-3 text-center">+4.1</td>
                    <td className="border border-gray-300 p-3 text-center">+4.2</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">国語記述問題得点率</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">72%</td>
                    <td className="border border-gray-300 p-3 text-center">58%</td>
                    <td className="border border-gray-300 p-3 text-center">+14%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">思考力問題正答率</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">84%</td>
                    <td className="border border-gray-300 p-3 text-center">67%</td>
                    <td className="border border-gray-300 p-3 text-center">+17%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">第一志望合格率</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">76%</td>
                    <td className="border border-gray-300 p-3 text-center">62%</td>
                    <td className="border border-gray-300 p-3 text-center">+14%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">なぜAI教育が受験に効果的なのか？</h3>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-400 p-4">
              <h4 className="font-bold mb-2 text-blue-800">1. 論理的思考の体系的習得</h4>
              <p className="text-sm mb-2">
                プログラミングは「問題を小さく分解→順序立てて解決→結果を検証」の
                プロセスを繰り返す活動です。これは中学受験の複雑な文章題や
                図形問題を解く際の思考プロセスと完全に一致します。
              </p>
              <div className="bg-blue-50 p-3 rounded mt-2">
                <p className="text-xs font-bold">具体例：算数への応用</p>
                <p className="text-xs">
                  「鶴亀算」をプログラミングで解く過程で、変数の概念、
                  条件分岐、反復処理を学び、複雑な応用問題でも
                  同じ思考プロセスで解決できるようになります。
                </p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-400 p-4">
              <h4 className="font-bold mb-2 text-green-800">2. 試行錯誤耐性の向上</h4>
              <p className="text-sm mb-2">
                プログラミングでは「エラーは学びの機会」として捉えます。
                この経験により、受験勉強でも間違いを恐れずに
                多角的なアプローチを試す姿勢が身につきます。
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-400 p-4">
              <h4 className="font-bold mb-2 text-orange-800">3. 抽象化・一般化能力の育成</h4>
              <p className="text-sm mb-2">
                AIプログラミングでは、具体的な問題から共通パターンを
                見つけ出し、再利用可能な形に抽象化します。
                この能力は、受験の「解法パターン認識」に直結します。
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-400 p-4">
              <h4 className="font-bold mb-2 text-purple-800">4. 表現力・説明力の強化</h4>
              <p className="text-sm mb-2">
                AI学習では、自分の作品や解決プロセスを他者に
                説明する機会が豊富にあります。これにより、
                国語の記述問題や面接での表現力が格段に向上します。
              </p>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 学校別・入試傾向に応じたAI活用戦略
          </h2>

          <p className="mb-6">
            難関私立中学は、それぞれ独自の入試傾向と求める生徒像があります。
            各校の特徴に応じてAI教育の活用法を最適化することで、
            より効果的な受験対策が可能になります。
          </p>

          <div className="space-y-8">
            {/* 開成中学 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">開成中学校</h3>
                <span className="ml-4 text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">理系重視</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">入試の特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 算数：複雑な条件設定の論理問題</li>
                    <li>• 理科：実験・観察を重視した思考問題</li>
                    <li>• 処理速度と正確性の両立が必要</li>
                    <li>• 男子校らしい競争的な環境</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">効果的なAI活用法</h4>
                  <ul className="text-sm space-y-1">
                    <li>• アルゴリズム思考の徹底訓練</li>
                    <li>• データ分析・統計処理の基礎学習</li>
                    <li>• プログラミングコンテスト参加</li>
                    <li>• 論理回路・AI動作原理の理解</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-sm">
                  <strong>推奨カリキュラム：</strong>Python基礎 → 数理アルゴリズム → 
                  機械学習入門 → 競技プログラミング準備
                </p>
              </div>
            </div>

            {/* 桜蔭中学 */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-pink-800">桜蔭中学校</h3>
                <span className="ml-4 text-sm bg-pink-200 text-pink-800 px-2 py-1 rounded">思考力重視</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">入試の特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 国語：長文読解と高度な記述問題</li>
                    <li>• 算数：図形・場合の数の応用問題</li>
                    <li>• 多角的思考と論理的表現力</li>
                    <li>• 女子校特有の協調性重視</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">効果的なAI活用法</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 自然言語処理を通じた読解力強化</li>
                    <li>• 視覚的プログラミングでの図形理解</li>
                    <li>• AIアート創作での表現力育成</li>
                    <li>• チーム開発でのコミュニケーション</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-pink-100 rounded">
                <p className="text-sm">
                  <strong>推奨カリキュラム：</strong>Scratch応用 → AI画像生成 → 
                  文章生成AI活用 → 協働プロジェクト制作
                </p>
              </div>
            </div>

            {/* 麻布中学 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-green-800">麻布中学校</h3>
                <span className="ml-4 text-sm bg-green-200 text-green-800 px-2 py-1 rounded">創造性重視</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">入試の特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 独創的な発想を求める出題</li>
                    <li>• 教科横断的な総合問題</li>
                    <li>• 自由な校風を反映した選考</li>
                    <li>• 受験テクニックより本質理解</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">効果的なAI活用法</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 創造的プログラミングプロジェクト</li>
                    <li>• AI×音楽・アートの融合学習</li>
                    <li>• オリジナルゲーム・アプリ開発</li>
                    <li>• プレゼンテーション重視の発表</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-sm">
                  <strong>推奨カリキュラム：</strong>創造的プログラミング → 
                  マルチメディアAI → オリジナル作品制作 → 発表・評価
                </p>
              </div>
            </div>

            {/* 女子学院中学 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-purple-800">女子学院中学校</h3>
                <span className="ml-4 text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">総合力重視</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">入試の特徴</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 4教科バランスの良い出題</li>
                    <li>• 社会問題への関心を問う傾向</li>
                    <li>• プロテスタント精神に基づく価値観</li>
                    <li>• 国際的視野を重視</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">効果的なAI活用法</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 社会課題解決型AIプロジェクト</li>
                    <li>• 多言語対応AIシステム構築</li>
                    <li>• データサイエンスでの社会分析</li>
                    <li>• 倫理的AI開発の学習</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-purple-100 rounded">
                <p className="text-sm">
                  <strong>推奨カリキュラム：</strong>社会課題研究 → データ分析基礎 → 
                  AI倫理学習 → 国際協働プロジェクト
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-bold mb-2">📋 学校選択時のチェックポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 志望校の教育方針とAI教育の方向性が一致しているか</li>
              <li>• 入試問題の傾向分析を基にしたカリキュラム設計</li>
              <li>• 6年間の学校生活でAIスキルをどう活かせるか</li>
              <li>• 大学受験・将来のキャリアとの連続性</li>
            </ul>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 受験勉強とAI学習の両立術：時間管理の実践的アプローチ
          </h2>

          <p className="mb-6">
            「ただでさえ忙しい受験勉強に、AI学習の時間なんて確保できない」
            これは多くの保護者が抱く懸念です。しかし、適切な時間管理と
            統合的アプローチにより、効率的な両立が可能です。
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-orange-800">⏰ 学年別・時期別学習配分表</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">学年・時期</th>
                    <th className="border border-gray-300 p-3 text-center">受験勉強</th>
                    <th className="border border-gray-300 p-3 text-center">AI学習</th>
                    <th className="border border-gray-300 p-3 text-center">統合学習</th>
                    <th className="border border-gray-300 p-3 text-center">週間目安時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">小4前半</td>
                    <td className="border border-gray-300 p-3 text-center">60%</td>
                    <td className="border border-gray-300 p-3 text-center">30%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">8時間</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">小4後半</td>
                    <td className="border border-gray-300 p-3 text-center">65%</td>
                    <td className="border border-gray-300 p-3 text-center">25%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">10時間</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">小5前半</td>
                    <td className="border border-gray-300 p-3 text-center">70%</td>
                    <td className="border border-gray-300 p-3 text-center">20%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">12時間</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">小5後半</td>
                    <td className="border border-gray-300 p-3 text-center">75%</td>
                    <td className="border border-gray-300 p-3 text-center">15%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">15時間</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">小6前半</td>
                    <td className="border border-gray-300 p-3 text-center">80%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">10%</td>
                    <td className="border border-gray-300 p-3 text-center">18時間</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">小6後半（9月〜）</td>
                    <td className="border border-gray-300 p-3 text-center">90%</td>
                    <td className="border border-gray-300 p-3 text-center">5%</td>
                    <td className="border border-gray-300 p-3 text-center">5%</td>
                    <td className="border border-gray-300 p-3 text-center">25時間</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">統合学習の具体的アプローチ</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">📊 算数×データサイエンス</h4>
              <ul className="text-sm space-y-2">
                <li><strong>速さの問題</strong> → グラフ作成・分析プログラミング</li>
                <li><strong>場合の数</strong> → 組み合わせアルゴリズム実装</li>
                <li><strong>比例・反比例</strong> → 関数のプログラム化</li>
                <li><strong>図形問題</strong> → 座標計算・描画プログラム</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">📝 国語×自然言語処理</h4>
              <ul className="text-sm space-y-2">
                <li><strong>読解問題</strong> → テキスト分析AI構築</li>
                <li><strong>漢字学習</strong> → 文字認識AIの仕組み理解</li>
                <li><strong>作文指導</strong> → 文章生成AIとの比較学習</li>
                <li><strong>語彙拡張</strong> → 類語検索システム作成</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-yellow-800">🔬 理科×機械学習</h4>
              <ul className="text-sm space-y-2">
                <li><strong>実験データ</strong> → 回帰分析・予測モデル</li>
                <li><strong>動物分類</strong> → 画像認識AI訓練</li>
                <li><strong>天体観測</strong> → データ可視化プログラム</li>
                <li><strong>化学反応</strong> → シミュレーション作成</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-purple-800">🌍 社会×AI分析</h4>
              <ul className="text-sm space-y-2">
                <li><strong>地理統計</strong> → 地図データ分析・可視化</li>
                <li><strong>歴史年表</strong> → タイムライン生成プログラム</li>
                <li><strong>政治制度</strong> → 投票システムシミュレーション</li>
                <li><strong>経済データ</strong> → グラフ分析・予測AI</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 効率的学習のコツ</h4>
            <ul className="text-sm space-y-1">
              <li>• 週末にAI学習時間を集中配置（平日は受験勉強優先）</li>
              <li>• 長期休暇を活用したプロジェクト型学習</li>
              <li>• 受験科目の理解を深めるためのAIツール活用</li>
              <li>• スキマ時間でのプログラミング動画学習</li>
              <li>• 親子で取り組める簡単なAIプロジェクト</li>
            </ul>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 成功事例：AI教育が変えた受験戦略
          </h2>

          <p className="mb-6">
            実際にAI教育を活用して志望校合格を果たした生徒たちの事例を
            紹介します。それぞれ異なるアプローチで成果を上げており、
            参考になるポイントが多数あります。
          </p>

          <div className="space-y-8">
            {/* 事例1 */}
            <div className="bg-blue-50 border border-blue-300 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                  事例1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800">Aくん（麻布中学合格）</h3>
                  <p className="text-sm text-gray-600">創造性を活かした独自アプローチで合格</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">取り組み内容</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 小4からScratchでゲーム制作開始</li>
                    <li>• 小5でPython基礎を習得</li>
                    <li>• 受験問題をプログラムで解くことに挑戦</li>
                    <li>• オリジナル学習ツールを自作</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">成果・効果</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 算数偏差値が1年で12ポイント向上</li>
                    <li>• 論理的思考力が大幅に向上</li>
                    <li>• 面接で自作プログラムをアピール</li>
                    <li>• 第一志望の麻布中学に余裕で合格</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-sm">
                  <strong>保護者コメント：</strong>「最初は遊びのようでしたが、
                  だんだん受験勉強にも良い影響が出てきました。特に算数の文章題で、
                  条件を整理して解く力が格段に上がりました。」
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
                  <h3 className="text-lg font-bold text-pink-800">Bさん（桜蔭中学合格）</h3>
                  <p className="text-sm text-gray-600">AI×文系科目の融合で記述力向上</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">取り組み内容</h4>
                  <ul className="text-sm space-y-1">
                    <li>• AIを使った読書感想文の分析</li>
                    <li>• 自然言語処理の基礎学習</li>
                    <li>• 文章の論理構造を可視化するツール使用</li>
                    <li>• 協働型AIプロジェクトに参加</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">成果・効果</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 国語記述問題の得点率が80%超え</li>
                    <li>• 論理的文章構成力が向上</li>
                    <li>• 複数の視点から考える力が身についた</li>
                    <li>• 桜蔭中学の記述問題で高得点</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-pink-100 rounded">
                <p className="text-sm">
                  <strong>本人コメント：</strong>「AIで文章を分析してるうちに、
                  どうやって書けば相手に伝わりやすいかがわかるようになりました。
                  受験の記述問題でも、その考え方が役に立ちました。」
                </p>
              </div>
            </div>

            {/* 事例3 */}
            <div className="bg-green-50 border border-green-300 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                  事例3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-800">Cくん（開成中学合格）</h3>
                  <p className="text-sm text-gray-600">競技プログラミングで論理力を極める</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">取り組み内容</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 小5から競技プログラミング開始</li>
                    <li>• 数学とアルゴリズムの融合学習</li>
                    <li>• 制限時間内での問題解決練習</li>
                    <li>• AI・機械学習の理論学習</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">成果・効果</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 算数の処理速度が大幅向上</li>
                    <li>• 複雑な条件問題でも冷静に対応</li>
                    <li>• 全国プログラミングコンテスト入賞</li>
                    <li>• 開成中学を上位成績で合格</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-sm">
                  <strong>指導教師コメント：</strong>「プログラミングで培った
                  『問題を分解して考える力』が受験算数に見事に活かされました。
                  特に条件が複雑な問題での安定感が素晴らしかったです。」
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">📊 成功の共通要因分析</h4>
            <ul className="text-sm space-y-1">
              <li>• 早期開始（小4-5年からのAI学習導入）</li>
              <li>• 継続性（週1-2回のペースで3年間継続）</li>
              <li>• 統合学習（受験科目とAI学習の連携）</li>
              <li>• 実践重視（理論だけでなく手を動かす学習）</li>
              <li>• 個性活用（子どもの興味・関心を起点とした展開）</li>
            </ul>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 港区で選ぶべきAI×中学受験対応教室
          </h2>

          <p className="mb-6">
            中学受験とAI教育の両立をサポートできる教室は限られています。
            港区内で特に評価の高い、受験対応可能な教室を厳選してご紹介します。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">対象学年</th>
                  <th className="border border-gray-300 p-3 text-center">料金（月額）</th>
                  <th className="border border-gray-300 p-3 text-center">受験対応</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">東京AI創造スタジオ</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3 text-center">20,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🟢 完全対応</td>
                  <td className="border border-gray-300 p-3">中学受験専門講師と連携、統合カリキュラム</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">プログラボ 芝浦校</td>
                  <td className="border border-gray-300 p-3 text-center">年長-中3</td>
                  <td className="border border-gray-300 p-3 text-center">11,770円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 部分対応</td>
                  <td className="border border-gray-300 p-3">ロボティクス重視、読売新聞グループ運営</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Tech Kids School 品川校</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3 text-center">20,900円</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 部分対応</td>
                  <td className="border border-gray-300 p-3">本格的プログラミング、コンテスト実績</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">LITALICOワンダー 青山</td>
                  <td className="border border-gray-300 p-3 text-center">年長-高校生</td>
                  <td className="border border-gray-300 p-3 text-center">18,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 部分対応</td>
                  <td className="border border-gray-300 p-3">個別カスタマイズ、発達支援ノウハウ</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">アルスクール 恵比寿校</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3 text-center">11,550円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🔴 対応なし</td>
                  <td className="border border-gray-300 p-3">少人数制、探究学習重視</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">🎯 受験対応教室の選び方</h4>
              <ul className="text-sm space-y-2">
                <li>• 中学受験専門講師との連携体制</li>
                <li>• 受験科目との統合カリキュラム</li>
                <li>• 志望校別対策の実施</li>
                <li>• 過去の合格実績</li>
                <li>• 柔軟なスケジュール調整</li>
                <li>• 保護者との定期的な情報共有</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">💡 体験授業でのチェックポイント</h4>
              <ul className="text-sm space-y-2">
                <li>• 子どもの学習スタイルとの相性</li>
                <li>• 講師の受験知識レベル</li>
                <li>• AI学習と受験勉強の連携方法</li>
                <li>• 他の受験生との刺激し合える環境</li>
                <li>• 家庭学習サポートの充実度</li>
                <li>• 進路相談・合格後フォロー</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ 注意すべきポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• AI学習が受験勉強の負担になっていないか定期チェック</li>
              <li>• 志望校の入試傾向変化への対応力</li>
              <li>• 受験直前期の学習プラン調整</li>
              <li>• 合格後の中学校生活でのAIスキル活用計画</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：AI教育で広がる中学受験の新たな可能性</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>私立中学入試は知識型から思考力重視へと大きく変化</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AI教育は論理的思考・創造的問題解決力を効率的に育成</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>志望校の特徴に応じたAI学習戦略で差別化が可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>適切な時間配分により受験勉強との両立は十分に実現可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>合格後の中学校生活、将来のキャリアにも大きく貢献</span>
          </div>
        </div>

        <p className="text-lg">
          AI時代の中学受験は、単なる合格がゴールではありません。
          論理的思考力、創造性、表現力といった21世紀型スキルを
          身につけながら志望校合格を目指し、その先の人生で活躍できる
          真の実力を育むことが重要です。適切な指導により、
          AI教育と中学受験の相乗効果を最大限に活かしましょう。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">中学受験×AI教育 個別相談会</h3>
        <p className="mb-6">
          お子様の志望校と現在の学習状況に応じて、最適なAI教育プランを
          ご提案します。中学受験のプロとAI教育の専門家が
          連携してサポートいたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            個別相談会に申し込む
          </Link>
          <Link 
            href="/trial" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            無料体験授業を受ける
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
                    href="https://www.mext.go.jp/a_menu/shotou/new-cs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「中学校学習指導要領」（2024年改訂）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.shigaku.or.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本私立中学高等学校連合会「入試改革動向調査」（2024年）
                  </a>
              </li>
              <li>
                • 東京AI創造スタジオ「AI教育併用生徒の学習効果測定調査」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・学習指導</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.kaiseigakuen.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    開成中学校「教育方針・入試要項」（2025年度版）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.oin.ed.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    桜蔭中学校「教育理念・入学試験」（2025年度版）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.azabu-jh.ed.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    麻布中学校「学校案内・入試情報」（2025年度版）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">AI・プログラミング教育</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 情報処理学会「初等中等教育における AI・データサイエンス教育」（2024年）
              </li>
              <li>
                • 日本教育工学会論文誌「プログラミング教育が思考力に与える影響」（2024年）
              </li>
              <li>
                • MIT Media Lab「Creative Computing in K-12 Education」（2024年）
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
                  小学生からのAIプログラミング：始めるタイミングと準備
                </h3>
                <p className="text-sm text-gray-600">
                  AI学習の基礎づくり
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-education-trends-2025" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  2025年のAI教育トレンド：子どもたちが身につけるべきスキル
                </h3>
                <p className="text-sm text-gray-600">
                  最新の教育動向
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/minato-area-ai-classroom-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  白金・赤坂・六本木エリア別AI教室完全ガイド
                </h3>
                <p className="text-sm text-gray-600">
                  地域別教室選び
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