import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "AI教室の料金相場を徹底比較：港区で賢い教育投資をするために【2025年版】 | AIアソビあとりえ",
  description: "港区のAI・プログラミング教室の料金相場を詳細比較。月謝、入会金、教材費まで隠れたコストを含めた年間総額と、コスパの良い教室選びを解説。",
  keywords: ["AI教室 料金 相場", "プログラミング教室 月謝 港区", "AI教育 費用", "習い事 料金 比較", "港区 教育投資", "プログラミング 月謝"],
  openGraph: {
    title: "AI教室の料金相場を徹底比較：港区で賢い教育投資をするために【2025年版】",
    description: "港区のAI教室料金相場を詳細比較。隠れたコストまで含めた賢い教室選び。",
    images: ['/images/blog/ai-classroom-tuition-comparison.png'],
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
          <li className="text-gray-900">AI教室料金相場比較ガイド</li>
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
          AI教室の料金相場を徹底比較：<br className="md:hidden" />
          港区で賢い教育投資をするために【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/ai-classroom-tuition-comparison.png" 
          alt="AI教室の料金比較を検討する保護者のイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-orange-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「AI教室の料金って実際いくらかかるの？」「他の習い事と比べて高い？安い？」
          港区でAI教育を検討される保護者様から、よくこのようなご質問をいただきます。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          月謝だけでなく、入会金、教材費、発表会費など、実際にかかる費用は想像以上に多岐にわたります。
          年収1000万円以上の港区世帯でも、教育投資は慎重に検討したいものです。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、港区エリアのAI・プログラミング教室の料金相場を徹底調査し、
          隠れたコストまで含めた年間総額と、コストパフォーマンスの良い教室選びのポイントを
          詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>港区AI・プログラミング教室の詳細料金比較</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>月謝以外の隠れたコスト（入会金・教材費・諸費用）</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年間総額シミュレーションと予算計画</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>コストパフォーマンス分析と賢い選び方</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>料金を抑える方法と割引制度活用法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. 港区の教育費相場とAI教室の位置づけ
          </h2>
          
          <p className="mb-4">
            まず、港区での習い事費用の相場を把握しておきましょう。
            総務省の家計調査（2024年）によると、港区を含む都心3区の世帯では、
            月平均の教育娯楽費が約15万円となっています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 港区の習い事費用相場（月額）</p>
            <ul className="text-sm space-y-1">
              <li>• ピアノ教室: 8,000円〜25,000円</li>
              <li>• 英会話教室: 12,000円〜35,000円</li>
              <li>• 学習塾: 15,000円〜50,000円</li>
              <li>• スポーツクラブ: 6,000円〜20,000円</li>
              <li>• <strong>AI・プログラミング教室: 9,000円〜30,000円</strong></li>
            </ul>
          </div>

          <p className="mb-4">
            AI・プログラミング教室の料金は、他の習い事と比較して「中程度〜やや高め」の位置づけです。
            ただし、将来のキャリアに直結するスキルであることを考慮すると、
            投資価値は非常に高いと言えるでしょう。
          </p>

          <h3 className="text-xl font-bold mb-4">なぜAI教室の料金は高めなのか？</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">🏗️ 設備投資コスト</h4>
              <p className="text-sm">高性能PC、プログラミングソフト、ロボット教材など、専門機器への投資が必要</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">👨‍💻 専門講師の確保</h4>
              <p className="text-sm">IT業界経験者や高度な技術スキルを持つ講師の人件費</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">📚 カリキュラム開発</h4>
              <p className="text-sm">急速に発展するAI技術に対応した最新教材の継続的開発</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">👥 少人数制指導</h4>
              <p className="text-sm">個別指導に近い形での丁寧なサポート体制</p>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 港区AI・プログラミング教室 料金相場一覧表
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">月謝</th>
                  <th className="border border-gray-300 p-3 text-center">入会金</th>
                  <th className="border border-gray-300 p-3 text-center">教材費</th>
                  <th className="border border-gray-300 p-3 text-center">年間総額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">LITALICOワンダー青山</td>
                  <td className="border border-gray-300 p-3 text-center">17,600円</td>
                  <td className="border border-gray-300 p-3 text-center">16,500円</td>
                  <td className="border border-gray-300 p-3 text-center">月1,100円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-red-600">240,700円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Tech Kids School渋谷</td>
                  <td className="border border-gray-300 p-3 text-center">20,900円</td>
                  <td className="border border-gray-300 p-3 text-center">0円</td>
                  <td className="border border-gray-300 p-3 text-center">月2,200円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-red-600">277,200円</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">QUREO 港区内教室</td>
                  <td className="border border-gray-300 p-3 text-center">9,900円</td>
                  <td className="border border-gray-300 p-3 text-center">11,000円</td>
                  <td className="border border-gray-300 p-3 text-center">0円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">129,800円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">ヒューマンアカデミー</td>
                  <td className="border border-gray-300 p-3 text-center">10,890円</td>
                  <td className="border border-gray-300 p-3 text-center">11,000円</td>
                  <td className="border border-gray-300 p-3 text-center">年33,000円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">174,680円</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">プログラボ芝浦</td>
                  <td className="border border-gray-300 p-3 text-center">11,550円</td>
                  <td className="border border-gray-300 p-3 text-center">0円</td>
                  <td className="border border-gray-300 p-3 text-center">年27,500円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">166,100円</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">CotoMirai南青山</td>
                  <td className="border border-gray-300 p-3 text-center">15,400円</td>
                  <td className="border border-gray-300 p-3 text-center">16,500円</td>
                  <td className="border border-gray-300 p-3 text-center">月1,650円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-orange-600">221,100円</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">AIアソビあとりえ</td>
                  <td className="border border-gray-300 p-3 text-center">13,200円</td>
                  <td className="border border-gray-300 p-3 text-center">11,000円</td>
                  <td className="border border-gray-300 p-3 text-center">月550円</td>
                  <td className="border border-gray-300 p-3 text-center font-bold text-green-600">176,600円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">💚 リーズナブル価格帯</h4>
              <p className="text-sm">年間12万円〜17万円</p>
              <p className="text-xs text-gray-600">QUREO、ヒューマンアカデミー、プログラボ</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">💙 標準価格帯</h4>
              <p className="text-sm">年間17万円〜22万円</p>
              <p className="text-xs text-gray-600">AIアソビあとりえ、CotoMirai</p>
            </div>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">❤️ プレミアム価格帯</h4>
              <p className="text-sm">年間22万円〜28万円</p>
              <p className="text-xs text-gray-600">LITALICOワンダー、Tech Kids School</p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            ※上記は2025年1月時点の情報です。詳細は各教室にお問い合わせください。
          </p>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 見落としがちな隠れたコスト詳細
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-bold mb-3">📝 入会金・登録料</h3>
              <p className="mb-3">
                多くの教室で初回のみ発生する費用。0円〜16,500円と教室によって大きく異なります。
              </p>
              <ul className="text-sm space-y-1">
                <li>• 無料: Tech Kids School、プログラボ</li>
                <li>• 11,000円: QUREO、ヒューマンアカデミー、AIアソビあとりえ</li>
                <li>• 16,500円: LITALICOワンダー、CotoMirai</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-bold mb-3">💻 教材費・システム利用料</h3>
              <p className="mb-3">
                プログラミングソフトのライセンス料、テキスト代、オンラインシステム利用料など。
              </p>
              <ul className="text-sm space-y-1">
                <li>• 月額制: LITALICOワンダー（1,100円/月）、CotoMirai（1,650円/月）</li>
                <li>• 年額制: ヒューマンアカデミー（33,000円/年）、プログラボ（27,500円/年）</li>
                <li>• 無料: QUREO（独自教材使用）</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-bold mb-3">🎪 発表会・イベント費用</h3>
              <p className="mb-3">
                年1〜2回開催される発表会の参加費、作品展示費、表彰式費用など。
              </p>
              <ul className="text-sm space-y-1">
                <li>• 発表会参加費: 3,000円〜8,000円/回</li>
                <li>• コンテスト応募料: 1,000円〜5,000円/回</li>
                <li>• 修了証書発行費: 1,000円〜3,000円</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold mb-3">🖥️ 機器レンタル・購入費</h3>
              <p className="mb-3">
                自宅学習用のPC・タブレットレンタル、専用ソフトウェア購入費など。
              </p>
              <ul className="text-sm space-y-1">
                <li>• PCレンタル: 3,000円〜5,000円/月（希望者のみ）</li>
                <li>• ソフトウェア: Unity Pro（月額制）、Adobe Creative Suite等</li>
                <li>• ロボット教材: 15,000円〜30,000円（ロボット系コースの場合）</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
              <h3 className="font-bold mb-3">🚗 交通費・その他</h3>
              <p className="mb-3">
                港区内での移動費、振替レッスン料、延長料金など。
              </p>
              <ul className="text-sm space-y-1">
                <li>• 交通費: 月2,000円〜5,000円（立地によって大きく変動）</li>
                <li>• 振替手数料: 500円〜1,000円/回</li>
                <li>• 延長料金: 1,000円〜2,000円/30分</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 年間総額シミュレーション：家計への影響は？
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">💰 年収1000万円世帯での教育費配分例</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">一般的な年間教育費</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>学習塾</span>
                    <span className="font-medium">360,000円</span>
                  </li>
                  <li className="flex justify-between">
                    <span>英会話教室</span>
                    <span className="font-medium">180,000円</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ピアノ・音楽</span>
                    <span className="font-medium">120,000円</span>
                  </li>
                  <li className="flex justify-between">
                    <span>スポーツ</span>
                    <span className="font-medium">100,000円</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span className="font-bold">合計</span>
                    <span className="font-bold">760,000円</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">AI教室追加時の予算配分</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>既存習い事（調整後）</span>
                    <span className="font-medium">580,000円</span>
                  </li>
                  <li className="flex justify-between text-blue-600">
                    <span>AI・プログラミング教室</span>
                    <span className="font-medium">180,000円</span>
                  </li>
                  <li className="flex justify-between border-t pt-2">
                    <span className="font-bold">合計</span>
                    <span className="font-bold">760,000円</span>
                  </li>
                  <li className="text-xs text-gray-600 mt-2">
                    ※他の習い事を一部調整してAI教室を追加する例
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">価格帯別の特徴比較</h3>
          
          <div className="space-y-4">
            <div className="border border-green-300 bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">💚 リーズナブル価格帯（12-17万円）の特徴</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">✅ メリット</p>
                  <ul className="space-y-1">
                    <li>• 家計への負担が少ない</li>
                    <li>• 複数の習い事と両立しやすい</li>
                    <li>• 継続しやすい料金設定</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">⚠️ 注意点</p>
                  <ul className="space-y-1">
                    <li>• グループレッスン中心</li>
                    <li>• 個別サポートが限定的</li>
                    <li>• 高度な内容は別料金の場合も</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-blue-300 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">💙 標準価格帯（17-22万円）の特徴</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">✅ メリット</p>
                  <ul className="space-y-1">
                    <li>• バランスの取れたカリキュラム</li>
                    <li>• 適度な個別サポート</li>
                    <li>• 発表会・コンテスト参加機会</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">⚠️ 注意点</p>
                  <li>• 月謝以外の費用も考慮が必要</li>
                  <li>• 教室によってサービス差がある</li>
                  <li>• 立地による交通費の考慮</li>
                </div>
              </div>
            </div>

            <div className="border border-red-300 bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">❤️ プレミアム価格帯（22-28万円）の特徴</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">✅ メリット</p>
                  <ul className="space-y-1">
                    <li>• 少人数制・個別指導中心</li>
                    <li>• 最新技術・高度な内容</li>
                    <li>• 充実したサポート体制</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-1">⚠️ 注意点</p>
                  <ul className="space-y-1">
                    <li>• 高額な年間費用</li>
                    <li>• 子どものモチベーション維持が重要</li>
                    <li>• 効果測定・成果の見極めが必要</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. コストパフォーマンス分析：賢い教室選びのポイント
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">💡 料金だけでは判断できない価値要素</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🎯 学習効果の指標</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 1年間での作品制作数</li>
                    <li>• コンテスト入賞実績</li>
                    <li>• 資格取得サポート</li>
                    <li>• 卒業生の進路実績</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">👨‍🏫 指導品質の評価</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 講師の専門性・経験</li>
                    <li>• 生徒対講師の比率</li>
                    <li>• カリキュラムの更新頻度</li>
                    <li>• 個別フィードバックの充実度</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🏢 環境・設備の充実度</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 最新のPC・ソフトウェア</li>
                    <li>• 学習に集中できる環境</li>
                    <li>• 作品展示・発表の機会</li>
                    <li>• 振替・補講制度</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🤝 サポート体制</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 保護者への学習報告</li>
                    <li>• 家庭学習のサポート</li>
                    <li>• 進路相談・キャリア指導</li>
                    <li>• 卒業後のフォロー</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">🏆 コスパ重視の教室選び 5つのポイント</h3>
          
          <div className="space-y-3">
            <div className="flex items-start bg-white border-l-4 border-primary p-4">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
              <div>
                <h4 className="font-bold mb-1">無料体験で実際の指導を確認</h4>
                <p className="text-sm text-gray-600">料金表だけでは分からない指導の質や相性を実際に体験</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white border-l-4 border-primary p-4">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
              <div>
                <h4 className="font-bold mb-1">年間総額で比較検討</h4>
                <p className="text-sm text-gray-600">月謝だけでなく、入会金・教材費・イベント費まで含めた年間コストで判断</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white border-l-4 border-primary p-4">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
              <div>
                <h4 className="font-bold mb-1">子どもの学習ペースに合わせる</h4>
                <p className="text-sm text-gray-600">高額でも子どもが楽しく継続できれば結果的にコスパが良い</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white border-l-4 border-primary p-4">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
              <div>
                <h4 className="font-bold mb-1">他の習い事との兼ね合いを考慮</h4>
                <p className="text-sm text-gray-600">既存の習い事を調整してでも始める価値があるかを検討</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white border-l-4 border-primary p-4">
              <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
              <div>
                <h4 className="font-bold mb-1">将来の投資価値を重視</h4>
                <p className="text-sm text-gray-600">AI・プログラミングスキルの将来性を考慮した長期的な判断</p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 料金を抑える方法と割引制度活用法
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">💰 入会金・初期費用の節約</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>春のキャンペーン</strong>: 多くの教室で3-4月に入会金無料</li>
                  <li>• <strong>兄弟割引</strong>: 2人目以降の入会金50%OFF等</li>
                  <li>• <strong>友達紹介割引</strong>: 紹介者・被紹介者双方に特典</li>
                  <li>• <strong>体験当日入会</strong>: 体験レッスン当日の入会で割引</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">📅 月謝・授業料の節約</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>年間一括払い</strong>: 5-10%の割引適用</li>
                  <li>• <strong>平日昼間コース</strong>: 土日コースより安価</li>
                  <li>• <strong>オンライン併用</strong>: 通学回数を減らして料金削減</li>
                  <li>• <strong>長期継続割引</strong>: 1年以上継続で月謝割引</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-3">🎁 特別割引制度</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>ひとり親世帯支援</strong>: 月謝20-30%割引</li>
                  <li>• <strong>港区民割引</strong>: 地域住民向け特別料金</li>
                  <li>• <strong>早期申込割引</strong>: 新年度2ヶ月前申込で特典</li>
                  <li>• <strong>成績優秀者特典</strong>: コンテスト入賞で月謝減免</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h3 className="font-bold text-purple-800 mb-3">💻 費用を抑える学習方法</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>無料ツール活用</strong>: Scratchなど無料ソフトでの家庭学習</li>
                  <li>• <strong>図書館利用</strong>: プログラミング関連書籍の活用</li>
                  <li>• <strong>オンライン教材</strong>: YouTube等の無料動画で予習・復習</li>
                  <li>• <strong>コミュニティ参加</strong>: 無料のプログラミングイベント参加</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 料金交渉のコツ</h4>
            <ul className="text-sm space-y-1">
              <li>• 複数教室の料金を比較検討していることを伝える</li>
              <li>• 長期継続の意思があることをアピール</li>
              <li>• 兄弟での入会や友達紹介の可能性を相談</li>
              <li>• 体験レッスンで子どもの反応が良好だったことを強調</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：賢い教育投資で子どもの未来を切り開く</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>港区のAI教室の年間費用は12万円〜28万円が相場</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>月謝以外の隠れたコストを含めた年間総額で比較検討</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>料金よりも子どもの適性と学習効果を重視した選択が重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>各種割引制度を活用して費用を最適化</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>将来のキャリアにつながる投資価値を長期的視点で判断</span>
          </div>
        </div>

        <p className="text-lg">
          AI・プログラミング教育は、お子様の将来に大きな価値をもたらす投資です。
          料金だけでなく、教育内容、指導体制、お子様との相性を総合的に判断し、
          最適な教室を選択しましょう。まずは複数の教室で無料体験を受けて、
          実際の雰囲気を確認することをおすすめします。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">料金について詳しく相談したい方へ</h3>
        <p className="mb-6">
          AIアソビあとりえでは、ご家庭の予算に合わせた最適なコース提案を行っています。
          料金体系の詳細説明から、割引制度のご案内まで、お気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            料金について相談する
          </Link>
          <Link 
            href="/trial" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            無料体験で教室を確認
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
                    href="https://www.stat.go.jp/data/kakei/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「家計調査年報（家計収支編）」（2024年）
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
              <li>
                • <a 
                    href="https://berd.benesse.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ベネッセ教育総合研究所「学校外教育費調査」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育産業・市場分析</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/shotou/zyouhou/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「教育の情報化に関する手引」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://coeteco.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    コエテコ「プログラミング教室料金比較調査」（2024年）
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
                    港区教育委員会「教育に関する調査」（2024年）
                  </a>
              </li>
              <li>
                • 各プログラミング教室公式サイト料金表（2025年1月現在）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/minato-robotics-classrooms-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  港区ロボティクス教室完全ガイド：選び方から料金まで徹底比較
                </h3>
                <p className="text-sm text-gray-600">
                  ロボット教育に特化した教室の料金・特徴比較
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
                  ゲーム開発に特化した教室の料金・学習内容
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/high-income-education-investment-strategy" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  年収1000万円世帯の教育投資戦略：AI時代に向けた港区での選択肢
                </h3>
                <p className="text-sm text-gray-600">
                  高所得世帯向けの教育投資戦略と選択肢
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