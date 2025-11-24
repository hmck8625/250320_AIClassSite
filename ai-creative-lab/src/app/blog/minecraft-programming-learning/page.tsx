import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "マインクラフトでプログラミング学習：子どもが夢中になる教育効果とは【2025年版】 | AIアソビあとりえ",
  description: "マイクラでプログラミングを学ぶメリットと具体的な学習方法を徹底解説。教育版Minecraft、MakeCode、Python連携まで。港区で人気の教室情報も紹介。",
  keywords: ["マインクラフト プログラミング", "マイクラ 教育版", "Minecraft Education", "子ども プログラミング", "MakeCode", "港区 マイクラ教室", "ゲーム プログラミング学習"],
  openGraph: {
    title: "マインクラフトでプログラミング学習：子どもが夢中になる教育効果とは",
    description: "大人気ゲームで楽しくプログラミングを学ぶ方法を専門家が解説。",
    images: ['/images/blog/minecraft-programming-learning.jpg'],
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
          <li className="text-gray-900">マインクラフトでプログラミング学習</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">人気No.1</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          マインクラフトでプログラミング学習：<br className="md:hidden" />
          子どもが夢中になる教育効果とは【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/minecraft-programming-learning.jpg" 
          alt="マインクラフトでプログラミングを学ぶ子どもたちの様子"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-green-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「うちの子、マイクラばっかりやってて…」
          そんな保護者の方に朗報です。実は、その「遊び」を
          最高の「学び」に変える方法があるんです。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          全世界で3億本以上売れ、子どもたちに圧倒的人気を誇るマインクラフト。
          このゲームが、実は優れたプログラミング学習ツールとして
          世界中の教育現場で活用されているのをご存知でしょうか？
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、港区でマインクラフト教育を実践するAI教育専門家が、
          その教育効果と具体的な学習方法、そして家庭での始め方まで
          詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>マインクラフトでプログラミングを学ぶ5つのメリット</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>教育版Minecraftと通常版の違い・選び方</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別の学習ステップと到達目標</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>MakeCodeやPythonとの連携方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>港区で受講できる教室と料金相場</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜマインクラフトがプログラミング学習に最適なのか？
          </h2>
          
          <p className="mb-4">
            Microsoft社が2014年にMojang社を買収して以来、マインクラフトは
            単なるゲームから教育プラットフォームへと進化を遂げています。
            現在、世界115カ国以上の学校で教材として採用されており、
            日本でも文部科学省の「GIGAスクール構想」において活用が推進されています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 マインクラフト教育利用の現状（2024年データ）</p>
            <ul className="text-sm space-y-1">
              <li>• 世界の教育現場での利用：3500万人以上の生徒</li>
              <li>• 日本国内の導入校：約2,000校（前年比150%増）</li>
              <li>• プログラミング教室での採用率：65%（人気No.1教材）</li>
              <li>• 学習継続率：92%（他教材平均：68%）</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：Microsoft「Minecraft: Education Edition Annual Report 2024」
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">子どもが夢中になる5つの理由</h3>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">1. 創造性の無限大</h4>
              <p className="text-sm">
                ブロックを組み合わせて何でも作れる自由度の高さ。
                想像力を形にする楽しさが、学習意欲を自然に高めます。
                プログラミングで自動建築すれば、さらに大規模な作品も可能に。
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">2. 即座に結果が見える</h4>
              <p className="text-sm">
                コードを書いたらすぐにゲーム内で動作を確認できる即時性。
                「動いた！」という成功体験が、次の挑戦への意欲につながります。
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">3. 失敗が怖くない環境</h4>
              <p className="text-sm">
                ゲームの中なら何度でもやり直せる安心感。
                トライ&エラーを繰り返しながら、論理的思考力を自然に身につけます。
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">4. 友達と一緒に学べる</h4>
              <p className="text-sm">
                マルチプレイで協力しながらプログラミング。
                共同作業を通じてコミュニケーション能力も育成されます。
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-yellow-800">5. 段階的な難易度設定</h4>
              <p className="text-sm">
                ビジュアルプログラミングから本格的なコーディングまで、
                レベルに応じて学習方法を選択できる柔軟性があります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 教育版Minecraft vs 通常版：どちらを選ぶべき？
          </h2>

          <p className="mb-6">
            マインクラフトでプログラミングを学ぶ際、最初に迷うのが
            「教育版（Education Edition）」と「通常版（Java/統合版）」の選択です。
            それぞれの特徴を詳しく比較してみましょう。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">比較項目</th>
                  <th className="border border-gray-300 p-3 text-center">教育版</th>
                  <th className="border border-gray-300 p-3 text-center">Java版</th>
                  <th className="border border-gray-300 p-3 text-center">統合版</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">料金</td>
                  <td className="border border-gray-300 p-3 text-center">年額1,320円/人</td>
                  <td className="border border-gray-300 p-3 text-center">3,960円（買い切り）</td>
                  <td className="border border-gray-300 p-3 text-center">3,960円（買い切り）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">プログラミング機能</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">◎ MakeCode内蔵</td>
                  <td className="border border-gray-300 p-3 text-center">○ MOD対応</td>
                  <td className="border border-gray-300 p-3 text-center">△ アドオン</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">教育用機能</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">◎ 豊富</td>
                  <td className="border border-gray-300 p-3 text-center">× なし</td>
                  <td className="border border-gray-300 p-3 text-center">△ 一部</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">クラス管理</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">◎ 完備</td>
                  <td className="border border-gray-300 p-3 text-center">× なし</td>
                  <td className="border border-gray-300 p-3 text-center">× なし</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">対応デバイス</td>
                  <td className="border border-gray-300 p-3 text-center">PC/タブレット</td>
                  <td className="border border-gray-300 p-3 text-center">PCのみ</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">全デバイス</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">初心者向け</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600 font-bold">◎</td>
                  <td className="border border-gray-300 p-3 text-center">△</td>
                  <td className="border border-gray-300 p-3 text-center">○</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
            <h4 className="font-bold mb-2">💡 選び方のポイント</h4>
            <ul className="text-sm space-y-2">
              <li>
                <strong>教育版がおすすめの場合：</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>学校や教室での利用</li>
                  <li>体系的にプログラミングを学びたい</li>
                  <li>保護者が管理機能を重視する</li>
                  <li>初めてのプログラミング学習</li>
                </ul>
              </li>
              <li>
                <strong>通常版がおすすめの場合：</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>すでに通常版を持っている</li>
                  <li>家庭での自由な学習</li>
                  <li>MODやアドオンを活用したい</li>
                  <li>長期的な利用を考えている</li>
                </ul>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-4">教育版Minecraftの特別機能</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-800">📚 カリキュラム機能</h4>
              <ul className="text-sm space-y-1">
                <li>• 600以上の無料レッスンプラン</li>
                <li>• 年齢別・科目別の学習コース</li>
                <li>• 進捗管理とアセスメント機能</li>
                <li>• 日本語完全対応</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🛡️ 安全管理機能</h4>
              <ul className="text-sm space-y-1">
                <li>• チャット制限・監視機能</li>
                <li>• 外部サーバー接続制限</li>
                <li>• 生徒の行動ログ記録</li>
                <li>• 不適切コンテンツのフィルタリング</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🔧 プログラミング統合</h4>
              <ul className="text-sm space-y-1">
                <li>• MakeCode直接統合</li>
                <li>• Python対応（Code Builder）</li>
                <li>• ビジュアル/テキスト切り替え</li>
                <li>• リアルタイムデバッグ</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">👥 協働学習支援</h4>
              <ul className="text-sm space-y-1">
                <li>• 最大30人同時接続</li>
                <li>• 画面共有・発表機能</li>
                <li>• グループワーク管理</li>
                <li>• 作品ポートフォリオ作成</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 年齢別学習ロードマップ：段階的なスキルアップ
          </h2>

          <p className="mb-6">
            マインクラフトでのプログラミング学習は、年齢や経験に応じて
            段階的に進めることが重要です。以下、推奨される学習ステップを紹介します。
          </p>

          {/* 5-7歳 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🌱 5-7歳：プログラミング思考の基礎</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習内容</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>順次処理：</strong>エージェントに単純な命令を出す</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>パターン認識：</strong>ブロックの規則的な配置</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span><strong>問題分解：</strong>大きな建築を小さな部分に分ける</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">到達目標</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>✓ エージェントで10ブロックの道を作る</li>
                    <li>✓ 簡単な模様のある壁を作る</li>
                    <li>✓ 命令の順番の重要性を理解する</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-100 rounded">
              <p className="text-sm">
                <strong>推奨ツール：</strong>MakeCodeのブロックエディタ（アイコン中心）
              </p>
            </div>
          </div>

          {/* 8-10歳 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📘 8-10歳：基本的なプログラミング</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習内容</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>繰り返し（ループ）：</strong>同じ動作を効率的に実行</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>条件分岐：</strong>if文で状況に応じた動作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>変数の概念：</strong>数値や文字を記憶する</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>イベント処理：</strong>チャットコマンドで動作開始</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">プロジェクト例</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>🏠 自動建築プログラム（家・城）</li>
                    <li>🌻 自動農場システム</li>
                    <li>🎮 簡単なミニゲーム作成</li>
                    <li>🏛️ ピラミッド自動生成</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100 rounded">
              <p className="text-sm">
                <strong>推奨ツール：</strong>MakeCodeのブロックエディタ（テキスト表示あり）
              </p>
            </div>
          </div>

          {/* 11-13歳 */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 11-13歳：応用プログラミング</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習内容</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>関数：</strong>処理をまとめて再利用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>配列：</strong>複数のデータを管理</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>座標系：</strong>3次元空間での位置指定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>JavaScript入門：</strong>ブロックからコードへ移行</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">高度なプロジェクト</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>🎯 アドベンチャーマップ作成</li>
                    <li>🤖 AI搭載NPCの開発</li>
                    <li>🎪 自動イベントシステム</li>
                    <li>🌍 地形自動生成アルゴリズム</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-purple-100 rounded">
              <p className="text-sm">
                <strong>推奨ツール：</strong>MakeCode JavaScript/Python、Visual Studio Code
              </p>
            </div>
          </div>

          {/* 14歳以上 */}
          <div className="mb-8 p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-800">💎 14歳以上：本格的な開発</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習内容</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Python完全移行：</strong>本格的なプログラミング</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>MOD開発：</strong>Java言語での拡張機能作成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>API連携：</strong>外部サービスとの連携</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>マルチプレイサーバー構築：</strong>ネットワーク知識</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">実践プロジェクト</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>🔧 オリジナルMOD開発・公開</li>
                    <li>🌐 Webアプリ連携システム</li>
                    <li>🎮 本格的なゲームサーバー運営</li>
                    <li>🤖 機械学習を使った自動建築</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-orange-100 rounded">
              <p className="text-sm">
                <strong>推奨ツール：</strong>IntelliJ IDEA、Python IDE、Git
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📈 スキル習得の目安時間</h4>
            <div className="text-sm">
              <ul className="space-y-1">
                <li>• 基礎（5-7歳レベル）：3-6ヶ月</li>
                <li>• 初級（8-10歳レベル）：6-12ヶ月</li>
                <li>• 中級（11-13歳レベル）：1-2年</li>
                <li>• 上級（14歳以上レベル）：2年以上</li>
              </ul>
              <p className="mt-2 text-xs text-gray-600">
                ※週1-2時間の学習を想定。個人差があります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. MakeCodeとPython：具体的な学習方法
          </h2>

          <p className="mb-6">
            マインクラフトでのプログラミング学習の中核となるのが、
            MakeCodeとPythonです。それぞれの特徴と学習方法を詳しく解説します。
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Microsoft MakeCode：ビジュアルプログラミングの決定版</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">MakeCodeの3つのモード</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold text-blue-800 mb-2">1. ブロックモード</h5>
                  <p className="text-sm">
                    ドラッグ&ドロップで直感的にプログラミング。
                    色分けされたブロックで、初心者でも理解しやすい。
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold text-blue-800 mb-2">2. JavaScriptモード</h5>
                  <p className="text-sm">
                    ブロックから自動変換されたコードを確認・編集。
                    本格的なプログラミングへの橋渡し。
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h5 className="font-bold text-blue-800 mb-2">3. Pythonモード</h5>
                  <p className="text-sm">
                    人気のプログラミング言語で本格開発。
                    AIやデータ分析の学習にもつながる。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <h4 className="font-bold mb-2">🎯 MakeCodeプロジェクト例：自動建築プログラム</h4>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`// 5x5の家を自動建築するプログラム
player.onChat("house", function () {
    // 壁を作る
    for (let i = 0; i < 4; i++) {
        agent.setItem(PLANKS, 64, 1)
        agent.move(FORWARD, 5)
        for (let j = 0; j < 5; j++) {
            agent.place(DOWN)
            agent.move(UP, 1)
        }
        agent.turn(LEFT)
    }
    // 屋根を作る
    agent.move(UP, 1)
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT)
        agent.move(FORWARD, 1)
        agent.turn(LEFT)
    }
})`}</pre>
              </div>
              
              <p className="text-sm mt-3">
                このコードをチャットで「house」と入力すると、エージェントが自動で家を建築します。
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Python：より高度な制御と可能性</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">Pythonを使うメリット</h4>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>実践的なスキル：</strong>AI開発やデータ分析でも使われる言語</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>豊富なライブラリ：</strong>数学計算や画像処理なども可能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>柔軟な制御：</strong>複雑なアルゴリズムの実装が容易</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span><strong>将来性：</strong>プログラミング言語人気ランキング常に上位</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
              <h4 className="font-bold mb-2">🐍 Pythonプロジェクト例：迷路自動生成</h4>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from minecraft import *
import random

def generate_maze(size):
    """ランダムな迷路を生成する関数"""
    mc = Minecraft.create()
    pos = mc.player.getTilePos()
    
    # 迷路の外壁を作る
    for x in range(size):
        for z in range(size):
            if x == 0 or x == size-1 or z == 0 or z == size-1:
                mc.setBlock(pos.x + x, pos.y, pos.z + z, block.STONE)
                mc.setBlock(pos.x + x, pos.y + 1, pos.z + z, block.STONE)
                mc.setBlock(pos.x + x, pos.y + 2, pos.z + z, block.STONE)
    
    # 内部の壁をランダムに配置
    for i in range(size * 2):
        x = random.randint(1, size-2)
        z = random.randint(1, size-2)
        height = random.randint(1, 3)
        
        for h in range(height):
            mc.setBlock(pos.x + x, pos.y + h, pos.z + z, block.STONE)
    
    # 入口と出口を作る
    mc.setBlock(pos.x, pos.y, pos.z + size//2, block.AIR)
    mc.setBlock(pos.x, pos.y + 1, pos.z + size//2, block.AIR)
    mc.setBlock(pos.x + size-1, pos.y, pos.z + size//2, block.GOLD_BLOCK)
    mc.setBlock(pos.x + size-1, pos.y + 1, pos.z + size//2, block.GOLD_BLOCK)

# 20x20の迷路を生成
generate_maze(20)`}</pre>
              </div>
              
              <p className="text-sm mt-3">
                このPythonコードは、プレイヤーの位置から20×20の迷路を自動生成します。
                ランダム要素により、毎回異なる迷路が作られます。
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-bold mb-3">📚 段階的な学習アプローチ</h4>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                <div>
                  <p className="font-semibold">MakeCodeブロックで基礎を固める（1-3ヶ月）</p>
                  <p className="text-sm text-gray-600">視覚的に理解しやすく、即座に結果が見える</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                <div>
                  <p className="font-semibold">JavaScriptモードで変換を確認（1-2ヶ月）</p>
                  <p className="text-sm text-gray-600">ブロックがどんなコードになるか理解する</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                <div>
                  <p className="font-semibold">簡単なJavaScriptを自分で書く（2-3ヶ月）</p>
                  <p className="text-sm text-gray-600">変数や関数の概念を実践的に学ぶ</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                <div>
                  <p className="font-semibold">Pythonに挑戦（3ヶ月以上）</p>
                  <p className="text-sm text-gray-600">本格的なプログラミングへステップアップ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 家庭で始める実践ガイド：環境構築から学習計画まで
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">🏠 STEP 1: 環境構築（所要時間：30分）</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">必要なもの</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ PC（Windows 10/11、macOS、またはChromebook）</li>
                  <li>✓ インターネット環境（安定した接続）</li>
                  <li>✓ Microsoftアカウント（無料作成可能）</li>
                  <li>✓ マインクラフト（教育版または通常版）</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">セットアップ手順</h4>
                <ol className="text-sm space-y-2">
                  <li>
                    <strong>1. マインクラフトのインストール</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>教育版：education.minecraft.net からダウンロード</li>
                      <li>通常版：minecraft.net から購入・ダウンロード</li>
                    </ul>
                  </li>
                  <li>
                    <strong>2. Code Connectionのインストール</strong>（通常版の場合）
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Microsoft Storeから無料ダウンロード</li>
                      <li>マインクラフトとMakeCodeを接続</li>
                    </ul>
                  </li>
                  <li>
                    <strong>3. 初期設定</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>ゲーム設定で「チート」をONに</li>
                      <li>難易度を「ピースフル」に設定</li>
                      <li>ゲームモードを「クリエイティブ」に</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">📅 STEP 2: 学習計画の立案</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">週間スケジュール例（初心者）</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">月曜日</td>
                      <td>基礎操作練習（30分）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">水曜日</td>
                      <td>MakeCodeチュートリアル（45分）</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">土曜日</td>
                      <td>プロジェクト制作（60分）</td>
                    </tr>
                    <tr>
                      <td className="py-2">日曜日</td>
                      <td>作品発表・共有（30分）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">月間目標設定</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>1ヶ月目：</strong>
                    <span className="text-gray-600">基本操作とエージェントの使い方</span>
                  </li>
                  <li>
                    <strong>2ヶ月目：</strong>
                    <span className="text-gray-600">簡単な自動建築プログラム</span>
                  </li>
                  <li>
                    <strong>3ヶ月目：</strong>
                    <span className="text-gray-600">オリジナルプロジェクト完成</span>
                  </li>
                  <li>
                    <strong>4ヶ月目：</strong>
                    <span className="text-gray-600">より複雑なプログラムに挑戦</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4">👨‍👩‍👧‍👦 STEP 3: 保護者のサポート方法</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">効果的なサポートのコツ</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>一緒に楽しむ：</strong>批判せず、興味を持って子どもの作品を見る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>適度な距離感：</strong>困った時だけヘルプ、基本は見守る</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>成果の記録：</strong>スクリーンショットや動画で成長を記録</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span><strong>発表の機会：</strong>家族に作品を見せる時間を作る</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">つまずきポイントと対処法</h4>
                <dl className="text-sm space-y-2">
                  <dt className="font-semibold">Q: プログラムが動かない</dt>
                  <dd className="ml-4 text-gray-600">→ エラーメッセージを一緒に読み、1つずつ確認</dd>
                  
                  <dt className="font-semibold">Q: 何を作ればいいか分からない</dt>
                  <dd className="ml-4 text-gray-600">→ 日常生活の「あったらいいな」から発想</dd>
                  
                  <dt className="font-semibold">Q: 難しくて諦めそう</dt>
                  <dd className="ml-4 text-gray-600">→ もっと簡単な課題に戻って成功体験を積む</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-bold mb-2">💡 学習を継続させる5つの工夫</h4>
            <ol className="text-sm space-y-1">
              <li>1. <strong>小さな目標から始める：</strong>「10ブロックの壁を作る」など達成しやすい目標</li>
              <li>2. <strong>定期的な発表会：</strong>月1回、家族に作品を見せる機会を設ける</li>
              <li>3. <strong>友達と共有：</strong>オンラインで作品を見せ合う</li>
              <li>4. <strong>コンテストに参加：</strong>目標があるとモチベーション維持しやすい</li>
              <li>5. <strong>教える側に回る：</strong>弟妹や友達に教えることで理解が深まる</li>
            </ol>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 港区で学べる教室情報：料金・特徴比較
          </h2>

          <p className="mb-6">
            家庭学習と並行して、専門的な指導を受けたい場合は教室がおすすめです。
            港区内でマインクラフトプログラミングを学べる主要教室を比較しました。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">料金（月額）</th>
                  <th className="border border-gray-300 p-3 text-center">対象年齢</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                  <th className="border border-gray-300 p-3 text-center">場所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">AIアソビあとりえ</td>
                  <td className="border border-gray-300 p-3 text-center">15,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">5-15歳</td>
                  <td className="border border-gray-300 p-3">AI連携特化、少人数制</td>
                  <td className="border border-gray-300 p-3 text-center">六本木</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Tech Kids School</td>
                  <td className="border border-gray-300 p-3 text-center">20,900円</td>
                  <td className="border border-gray-300 p-3 text-center">小1-小6</td>
                  <td className="border border-gray-300 p-3">サイバーエージェント運営</td>
                  <td className="border border-gray-300 p-3 text-center">渋谷</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">プログラボ</td>
                  <td className="border border-gray-300 p-3 text-center">11,770円〜</td>
                  <td className="border border-gray-300 p-3 text-center">年長-中学生</td>
                  <td className="border border-gray-300 p-3">ロボット連携可能</td>
                  <td className="border border-gray-300 p-3 text-center">六本木</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">LITALICOワンダー</td>
                  <td className="border border-gray-300 p-3 text-center">18,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">年長-高校生</td>
                  <td className="border border-gray-300 p-3">個別カスタマイズ</td>
                  <td className="border border-gray-300 p-3 text-center">青山</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Code Camp KIDS</td>
                  <td className="border border-gray-300 p-3 text-center">11,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">小1-中3</td>
                  <td className="border border-gray-300 p-3">オンライン併用可</td>
                  <td className="border border-gray-300 p-3 text-center">品川</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">🏆 教室選びのポイント</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>講師の質：</strong>プログラミング経験と子ども指導経験の両方</li>
                <li>• <strong>カリキュラム：</strong>体系的で段階的な学習プログラム</li>
                <li>• <strong>クラス人数：</strong>8名以下の少人数制が理想</li>
                <li>• <strong>発表機会：</strong>定期的な作品発表会の有無</li>
                <li>• <strong>サポート体制：</strong>振替制度や個別フォロー</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">💰 費用を抑えるコツ</h4>
              <ul className="text-sm space-y-2">
                <li>• <strong>体験割引：</strong>多くの教室で初月割引あり</li>
                <li>• <strong>兄弟割引：</strong>2人目以降20-30%OFF</li>
                <li>• <strong>長期割引：</strong>半年・年間契約で10-15%OFF</li>
                <li>• <strong>オンライン併用：</strong>隔週オンラインで30%程度削減</li>
                <li>• <strong>グループ受講：</strong>友達と一緒に申し込みで割引</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-300 rounded-lg">
            <h4 className="font-bold mb-2">🎓 AIアソビあとりえの特別プログラム</h4>
            <p className="text-sm mb-3">
              当スタジオでは、マインクラフトを使ったAI連携プログラミングコースを開講中。
              ChatGPTやStable Diffusionと組み合わせた、他にはない創造的な学習を提供しています。
            </p>
            <ul className="text-sm space-y-1">
              <li>• AIによる建築設計アシスタント開発</li>
              <li>• 画像認識を使った自動仕分けシステム</li>
              <li>• 自然言語処理でNPCとの対話システム構築</li>
              <li>• 機械学習を使った最適経路探索</li>
            </ul>
          </div>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            7. よくある質問と保護者の不安解消
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Q1: ゲームばかりになりませんか？</h3>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  <strong>A:</strong> プログラミング学習では「作る側」の視点で取り組むため、
                  単なる遊びとは全く異なります。目標設定と時間管理をしっかり行えば、
                  建設的な学習時間になります。また、以下の工夫が効果的です：
                </p>
                <ul className="text-sm list-disc list-inside">
                  <li>学習時間と遊び時間を明確に分ける</li>
                  <li>作品完成後に15分の自由時間を設ける</li>
                  <li>学習成果を必ず記録・発表する</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Q2: プログラミング未経験の親でもサポートできますか？</h3>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  <strong>A:</strong> はい、大丈夫です。MakeCodeは直感的で、
                  保護者の方も一緒に学べます。重要なのは技術的知識より、
                  子どもの創造性を認め、励ます姿勢です。
                </p>
                <ul className="text-sm list-disc list-inside">
                  <li>オンラインの保護者向けガイドを活用</li>
                  <li>子どもに教えてもらうスタンスでOK</li>
                  <li>一緒に調べて解決する過程が大切</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Q3: 視力への影響が心配です</h3>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  <strong>A:</strong> 適切な環境設定と休憩で予防可能です：
                </p>
                <ul className="text-sm list-disc list-inside">
                  <li>30分に1回、5分の休憩（20-20-20ルール）</li>
                  <li>画面との距離を50cm以上保つ</li>
                  <li>部屋を明るくし、画面の明るさを調整</li>
                  <li>ブルーライトカット眼鏡の使用を検討</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Q4: 通常版を持っていますが、教育版も必要ですか？</h3>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  <strong>A:</strong> 通常版でも十分学習可能です。
                  Code Connectionを使えばMakeCodeと連携できます。
                  ただし、教室や学校で使う場合は教育版が必要な場合があります。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3">Q5: どのくらいで効果が見えますか？</h3>
              <div className="bg-white p-3 rounded">
                <p className="text-sm mb-2">
                  <strong>A:</strong> 個人差はありますが、一般的な目安：
                </p>
                <ul className="text-sm list-disc list-inside">
                  <li>1ヶ月：基本的な命令を理解し、簡単なプログラムが書ける</li>
                  <li>3ヶ月：オリジナルの作品を作り始める</li>
                  <li>6ヶ月：複雑なプログラムに挑戦できる</li>
                  <li>1年：他の子に教えられるレベルに</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：遊びを学びに変える最高の選択</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>マインクラフトは子どもが夢中になれる最高のプログラミング教材</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>段階的な学習で、誰でも着実にスキルアップ可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>創造性と論理的思考力を同時に育成</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>将来につながる実践的なプログラミングスキル習得</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>家庭学習と教室学習を組み合わせて効果最大化</span>
          </div>
        </div>

        <p className="text-lg">
          子どもたちが大好きなマインクラフトは、適切に活用すれば
          21世紀に必要なスキルを楽しく身につけられる素晴らしいツールです。
          ぜひ今日から、お子様と一緒にマインクラフトプログラミングの
          冒険を始めてみてください。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">マインクラフト×AI プログラミング体験会</h3>
        <p className="mb-6">
          AIアソビあとりえでは、マインクラフトとAIを組み合わせた
          最先端のプログラミング教育を体験できます。
          初心者でも楽しめる特別プログラムをご用意しています。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            無料体験会に申し込む
          </Link>
          <Link 
            href="/courses/game-creator" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            ゲーム開発コースの詳細を見る
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
                    href="https://education.minecraft.net/en-us/resources/annual-report" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Microsoft「Minecraft: Education Edition Annual Report 2024」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/shotou/zyouhou/detail/mext_01798.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「GIGAスクール構想の実現について」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/programming/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「若年層に対するプログラミング教育の普及推進」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育研究・実践事例</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.jstage.jst.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本教育工学会「ゲーム型学習の教育効果に関する研究」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://makecode.com/blog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Microsoft MakeCode Blog「Educational Impact Studies」（2024年）
                  </a>
              </li>
              <li>
                • AIアソビあとりえ「マインクラフト教育実践レポート2024」（2024年12月）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">技術資料・ガイドライン</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://minecraft.gamepedia.com/Education_Edition" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Minecraft Wiki「Education Edition Documentation」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://education.minecraft.net/ja-jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Minecraft: Education Edition 公式サイト（日本語）（2024年）
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
          <Link href="/blog/game-development-programming-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  ゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド
                </h3>
                <p className="text-sm text-gray-600">
                  ゲーム開発の全体像を理解する
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-programming-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子ども向けAIプログラミング入門：ChatGPTからPythonまで
                </h3>
                <p className="text-sm text-gray-600">
                  AI連携の可能性を探る
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/online-vs-offline-programming-classes" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  オンライン vs 対面プログラミング教室：子どもに最適な学習スタイルの選び方
                </h3>
                <p className="text-sm text-gray-600">
                  学習環境の選び方を詳しく解説
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