import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "AIエージェント時代の子ども教育：自動化されない創造的スキルの育て方【2025年版】 | AIアソビあとりえ",
  description: "AIエージェントが日常化する未来で、子どもたちに必要な「人間にしかできない」創造的スキルとは？港区の教育専門家が、AI時代を生き抜く力の育成法を徹底解説。",
  keywords: ["AI エージェント 教育", "AI 自動化 教育", "未来型スキル 子ども", "創造性 AI時代", "人間性 教育", "港区 AI教育", "21世紀型スキル"],
  openGraph: {
    title: "AIエージェント時代の子ども教育：自動化されない創造的スキルの育て方",
    description: "AI時代に人間にしかできない創造的スキルを育む教育戦略を解説。",
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
          <li><Link href="/blog/category/ai-education" className="text-gray-600 hover:text-primary">AI教育最新情報</Link></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900">AIエージェント時代の子ども教育</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">未来教育</span>
          <time dateTime="2025-07-01" className="text-gray-600">2025年7月1日</time>
          <span className="text-gray-600">更新: 2025年7月1日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          AIエージェント時代の子ども教育：<br className="md:hidden" />
          自動化されない創造的スキルの育て方【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/EYE-ai-education-future.jpg" 
          alt="AIエージェントと共に学ぶ子どもたちの未来的な教育風景"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-red-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「AIが何でもやってくれる時代に、子どもに何を学ばせればいいの？」
          「プログラミングを学んでも、AIがコードを書く時代では意味がないのでは？」
        </p>
        <p className="text-lg leading-relaxed mb-4">
          2025年、ChatGPT、Claude、Geminiに続く次世代AIエージェントが
          日常生活に浸透し始めました。料理レシピの提案から宿題の手伝い、
          さらには簡単な仕事まで自動化される今、
          子どもたちの教育はどう変わるべきでしょうか。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、オックスフォード大学の「雇用の未来」研究や
          MIT「人間とAIの協働」プロジェクトの最新知見を基に、
          AIエージェント時代に必要な「人間にしかできない」
          創造的スキルの育成法を、港区の教育専門家が詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AIエージェントとは何か？教育にもたらす影響の全体像</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>自動化されない「人間性スキル」の具体的内容</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>創造性・共感力・批判的思考を育む実践的方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AIと共創する新しい学習スタイルの設計法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別・発達段階別の具体的教育アプローチ</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. AIエージェントとは？2025年の最新動向と教育への影響
          </h2>
          
          <p className="mb-4">
            AIエージェントとは、単なる質問応答を超えて、
            複雑なタスクを自律的に遂行できるAIシステムです。
            2025年現在、以下のような高度な能力を持つAIエージェントが
            実用化されています。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 AIエージェントの現在の能力（2025年6月時点）</p>
            <ul className="text-sm space-y-1">
              <li>• 複数のタスクを連続して自動実行（タスクチェーン）</li>
              <li>• 文脈を理解した長期的な計画立案</li>
              <li>• インターネット検索・購入・予約の代行</li>
              <li>• プログラミング・デザイン・文書作成の自動化</li>
              <li>• 個人の好みを学習したパーソナライズ対応</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：Gartner「AI Technology Trends 2025」（2025年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">教育分野でのAIエージェント活用例</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">📚 学習支援エージェント</h4>
              <ul className="text-sm space-y-1">
                <li>• 個別最適化された学習計画の自動作成</li>
                <li>• 宿題の添削と詳細なフィードバック</li>
                <li>• 苦手分野の自動検出と補強教材提供</li>
                <li>• 24時間対応の質問回答システム</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🎯 進路指導エージェント</h4>
              <ul className="text-sm space-y-1">
                <li>• 適性診断と進路マッチング</li>
                <li>• 志望校別の学習戦略立案</li>
                <li>• キャリアパスのシミュレーション</li>
                <li>• 面接・小論文の個別指導</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🎨 創作支援エージェント</h4>
              <ul className="text-sm space-y-1">
                <li>• アイデアの具現化サポート</li>
                <li>• 作品制作の技術的アドバイス</li>
                <li>• 多様な表現方法の提案</li>
                <li>• ポートフォリオの自動作成</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-800">🌍 言語学習エージェント</h4>
              <ul className="text-sm space-y-1">
                <li>• ネイティブレベルの会話練習</li>
                <li>• 文化的背景を含む言語指導</li>
                <li>• リアルタイム翻訳・通訳</li>
                <li>• 多言語コンテンツの推薦</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ AIエージェントがもたらす教育の根本的変化</h4>
            <p className="text-sm">
              知識の暗記や単純な計算、定型的な作業は完全にAIが代替します。
              教育の焦点は「何を知っているか」から「何ができるか」、
              さらに「どのような価値を生み出せるか」へとシフトしています。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 自動化されない「人間性スキル」とは何か
          </h2>

          <p className="mb-6">
            世界経済フォーラムの「Future of Jobs Report 2025」によると、
            AIによる自動化が進む中でも、以下の「人間性スキル」は
            むしろ重要性が増すと予測されています。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">🌟 AI時代に価値が高まる5つの人間性スキル</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. 創造的問題解決力（Creative Problem Solving）</h4>
                <p className="text-sm mb-2">
                  既存の枠組みを超えて、全く新しい解決策を生み出す力。
                  AIは既存データから学習するため、真の創造性は人間の領域。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>具体例：</strong>環境問題に対して、技術と芸術を融合した
                    新しいアプローチを考案し、社会実装する能力
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. 共感力と感情知能（Empathy & Emotional Intelligence）</h4>
                <p className="text-sm mb-2">
                  他者の感情を理解し、適切に対応する力。
                  人間関係の構築や協働において不可欠。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>具体例：</strong>チームメンバーの感情を読み取り、
                    モチベーションを高めながらプロジェクトを成功に導く
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. 批判的思考力（Critical Thinking）</h4>
                <p className="text-sm mb-2">
                  情報の真偽を見極め、論理的に分析・評価する力。
                  AI生成コンテンツが溢れる時代に必須。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>具体例：</strong>複数のAIが提示する情報を比較検証し、
                    バイアスを見抜いて最適な判断を下す
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. 倫理的判断力（Ethical Judgment）</h4>
                <p className="text-sm mb-2">
                  技術の進歩に伴う倫理的課題を理解し、
                  人間的価値観に基づいた判断を下す力。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>具体例：</strong>AIの活用方法について、
                    社会的影響を考慮した倫理的ガイドラインを策定
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. 適応力と学習敏捷性（Adaptability & Learning Agility）</h4>
                <p className="text-sm mb-2">
                  急速に変化する環境に柔軟に対応し、
                  新しいスキルを素早く習得する力。
                </p>
                <div className="bg-indigo-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>具体例：</strong>新しいAIツールが登場した際、
                    その特性を理解し、創造的に活用方法を開発
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📊 スキルの自動化可能性分析（MIT研究 2025年）</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2 text-left">スキル分類</th>
                    <th className="border border-gray-300 p-2 text-center">自動化可能性</th>
                    <th className="border border-gray-300 p-2 text-center">人間の優位性</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">データ処理・分析</td>
                    <td className="border border-gray-300 p-2 text-center text-red-600">95%</td>
                    <td className="border border-gray-300 p-2 text-center">低</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-2">定型的な文書作成</td>
                    <td className="border border-gray-300 p-2 text-center text-red-600">90%</td>
                    <td className="border border-gray-300 p-2 text-center">低</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">創造的デザイン</td>
                    <td className="border border-gray-300 p-2 text-center text-yellow-600">40%</td>
                    <td className="border border-gray-300 p-2 text-center">中</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-2">対人交渉・説得</td>
                    <td className="border border-gray-300 p-2 text-center text-green-600">20%</td>
                    <td className="border border-gray-300 p-2 text-center">高</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">倫理的意思決定</td>
                    <td className="border border-gray-300 p-2 text-center text-green-600">15%</td>
                    <td className="border border-gray-300 p-2 text-center">高</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 創造性・共感力・批判的思考を育む実践的方法
          </h2>

          <p className="mb-6">
            人間性スキルは、従来の教育方法では十分に育成できません。
            以下、港区のAI教育現場で実践されている
            効果的な育成方法を紹介します。
          </p>

          {/* 創造性の育成 */}
          <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">🎨 創造性の育成プログラム</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. AIとの共創プロジェクト</h4>
                <p className="text-sm mb-3">
                  AIを「道具」として活用しながら、人間にしかできない
                  創造的な価値を生み出す体験を積み重ねます。
                </p>
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm font-bold mb-2">実践例：「未来の街づくり」プロジェクト</p>
                  <ul className="text-xs space-y-1">
                    <li>• AIで都市データを分析・可視化</li>
                    <li>• 子どもたちが理想の街のコンセプトを創造</li>
                    <li>• 3Dモデリング＋AIで街を具現化</li>
                    <li>• VRで仮想体験・改善を繰り返す</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. 制約条件下での創造活動</h4>
                <p className="text-sm mb-3">
                  あえて制限を設けることで、創造的な解決策を
                  生み出す力を養います。
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="bg-yellow-100 p-2 rounded text-xs">
                    <strong>例1：</strong>5つの単語だけで物語を作る
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-xs">
                    <strong>例2：</strong>廃材だけでロボットを制作
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-xs">
                    <strong>例3：</strong>1分間で社会問題の解決策提案
                  </div>
                  <div className="bg-yellow-100 p-2 rounded text-xs">
                    <strong>例4：</strong>無音で感情を表現する演劇
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 共感力の育成 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">💝 共感力・感情知能の育成プログラム</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. デジタルストーリーテリング</h4>
                <p className="text-sm mb-3">
                  多様な立場の人々の物語を聞き、理解し、
                  自分の言葉で再構築する活動。
                </p>
                <ul className="text-sm space-y-2">
                  <li>📱 世界中の子どもとビデオレターを交換</li>
                  <li>🎭 異なる立場のキャラクターになりきるロールプレイ</li>
                  <li>📚 多文化の民話をAIで翻訳し、感想を共有</li>
                  <li>🎬 社会的弱者の視点でドキュメンタリー制作</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. 感情認識AIを使った自己理解</h4>
                <p className="text-sm mb-3">
                  AIツールを使って自分の感情を客観的に理解し、
                  感情調整能力を高めます。
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-bold mb-2">活動例：感情日記プロジェクト</p>
                  <ul className="text-xs space-y-1">
                    <li>• 毎日の感情をAIで記録・分析</li>
                    <li>• 感情のパターンを可視化</li>
                    <li>• トリガーとなる状況の特定</li>
                    <li>• 適切な感情表現方法の学習</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 批判的思考力の育成 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🧠 批判的思考力の育成プログラム</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. AI生成コンテンツの検証活動</h4>
                <p className="text-sm mb-3">
                  複数のAIが生成した情報を比較・検証し、
                  真偽を見極める力を養います。
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm font-bold mb-2">実践ワークショップ例</p>
                  <ol className="text-xs space-y-1 list-decimal list-inside">
                    <li>同じトピックで3つのAIに記事を書かせる</li>
                    <li>情報の相違点をマーキング</li>
                    <li>一次情報源を調査・確認</li>
                    <li>バイアスや誤情報を分析</li>
                    <li>正確な情報をまとめて発表</li>
                  </ol>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. ディベート×AI審判システム</h4>
                <p className="text-sm mb-3">
                  AIを審判役として活用しながら、
                  論理的思考力と説得力を鍛えます。
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-xs font-bold">テーマ例</p>
                    <ul className="text-xs mt-1">
                      <li>• AI教師 vs 人間教師</li>
                      <li>• 宿題の是非</li>
                      <li>• SNS年齢制限</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-3 rounded">
                    <p className="text-xs font-bold">評価ポイント</p>
                    <ul className="text-xs mt-1">
                      <li>• 論理の一貫性</li>
                      <li>• 根拠の信頼性</li>
                      <li>• 反論への対応</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. AIと共創する新しい学習スタイルの設計
          </h2>

          <p className="mb-6">
            AIエージェントを敵視するのではなく、最高のパートナーとして
            活用することで、人間の能力を最大限に引き出すことができます。
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🤝 AI共創学習の4つの原則</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. 補完的協働（Complementary Collaboration）</h4>
                <p className="text-sm mb-2">
                  AIの得意分野と人間の得意分野を明確に区別し、
                  それぞれの強みを活かした協働を行う。
                </p>
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <strong>例：</strong>AIがデータ分析、人間が意味づけと価値判断
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. 創造的拡張（Creative Augmentation）</h4>
                <p className="text-sm mb-2">
                  AIを使って人間の創造性を拡張し、
                  単独では到達できない領域へ挑戦する。
                </p>
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <strong>例：</strong>AIで1000のアイデアを生成し、人間が統合・昇華
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. 批判的活用（Critical Utilization）</h4>
                <p className="text-sm mb-2">
                  AIの出力を鵜呑みにせず、常に批判的に検証し、
                  改善する姿勢を持つ。
                </p>
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <strong>例：</strong>AI提案を検証し、人間的価値を加えて再構築
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. 倫理的統合（Ethical Integration）</h4>
                <p className="text-sm mb-2">
                  AIの活用において、常に倫理的観点を持ち、
                  人間性を中心に据えた判断を行う。
                </p>
                <div className="bg-purple-100 p-2 rounded text-xs">
                  <strong>例：</strong>AI活用の社会的影響を考慮した意思決定
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">実践的なAI共創プロジェクト例</h3>

          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🚀 プロジェクト1：AI支援型社会課題解決</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">Phase 1: 課題発見</p>
                  <ul className="text-xs space-y-1">
                    <li>• 地域の課題を調査</li>
                    <li>• AIでデータ分析</li>
                    <li>• 優先順位を決定</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">Phase 2: 解決策創造</p>
                  <ul className="text-xs space-y-1">
                    <li>• AIでアイデア生成</li>
                    <li>• 人間が統合・改良</li>
                    <li>• プロトタイプ作成</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="text-sm font-bold mb-1">Phase 3: 実装・評価</p>
                  <ul className="text-xs space-y-1">
                    <li>• 実地テスト</li>
                    <li>• AI効果測定</li>
                    <li>• 人間的価値評価</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-pink-800">🎭 プロジェクト2：多感覚アート創作</h4>
              <p className="text-sm mb-3">
                AIが生成する音楽・映像・テキストを素材として、
                人間が統合的な芸術作品を創作。
              </p>
              <div className="bg-white p-3 rounded">
                <p className="text-xs">
                  <strong>制作フロー：</strong>
                  テーマ設定（人間）→ 素材生成（AI）→ 選別・編集（人間）→ 
                  効果追加（AI）→ 最終調整（人間）→ 発表・フィードバック
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 年齢別・発達段階別の具体的教育アプローチ
          </h2>

          <p className="mb-6">
            AIエージェント時代の教育は、子どもの発達段階に応じて
            適切にデザインする必要があります。
          </p>

          {/* 幼児期 */}
          <div className="mb-6 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">👶 幼児期（3-6歳）：感性と好奇心の基盤づくり</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">重点育成スキル</h4>
                <ul className="text-sm space-y-1">
                  <li>• 感覚を通じた豊かな体験</li>
                  <li>• 「なぜ？」を大切にする探究心</li>
                  <li>• 他者への基本的な共感</li>
                  <li>• 自由な想像力の発揮</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">AI活用方法</h4>
                <ul className="text-sm space-y-1">
                  <li>• 音声AIとの簡単な対話遊び</li>
                  <li>• AI生成音楽でリズム遊び</li>
                  <li>• 動物や自然のAI映像観察</li>
                  <li>• 創作話の共同制作</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-100 rounded">
              <p className="text-sm">
                <strong>注意点：</strong>この時期はスクリーンタイムを制限し、
                実体験を重視。AIは補助的ツールとして最小限の活用に留める。
              </p>
            </div>
          </div>

          {/* 小学校低学年 */}
          <div className="mb-6 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🎒 小学校低学年（7-9歳）：基礎力と協働性の育成</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">カリキュラム例：「AIと友だちプロジェクト」</h4>
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>月曜：</strong>AIと一緒に物語創作
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>火曜：</strong>プログラミング基礎
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>水曜：</strong>グループで問題解決
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>木曜：</strong>アート×テクノロジー
                  </div>
                  <div className="bg-green-100 p-2 rounded text-xs">
                    <strong>金曜：</strong>発表とフィードバック
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小学校高学年 */}
          <div className="mb-6 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📚 小学校高学年（10-12歳）：論理的思考と創造性の統合</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">プロジェクト型学習の例</h4>
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>🌍 グローバル課題研究：</strong>
                    AIで世界の課題を調査し、子ども視点の解決策を提案
                  </li>
                  <li>
                    <strong>🎮 ゲーム開発：</strong>
                    AIツールを使いながら、教育的価値のあるゲームを制作
                  </li>
                  <li>
                    <strong>📰 ニュースメディア制作：</strong>
                    AI情報を批判的に検証し、正確な報道を作成
                  </li>
                  <li>
                    <strong>🔬 科学実験×AI分析：</strong>
                    実験データをAIで分析し、新たな仮説を立てる
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中学生 */}
          <div className="mb-6 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🎓 中学生（13-15歳）：専門性と社会性の深化</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">AI倫理プロジェクト</h4>
                <ul className="text-sm space-y-1">
                  <li>• AIの社会的影響を研究</li>
                  <li>• 倫理ガイドライン作成</li>
                  <li>• 模擬企業でAI活用戦略立案</li>
                  <li>• 地域社会への提言活動</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">キャリア探索プログラム</h4>
                <ul className="text-sm space-y-1">
                  <li>• AI時代の職業研究</li>
                  <li>• 専門家インタビュー</li>
                  <li>• インターンシップ体験</li>
                  <li>• 自己の強み×AI活用法発見</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 保護者ができる家庭でのサポート方法
          </h2>

          <div className="bg-teal-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-teal-800">🏠 家庭で実践できる5つのアプローチ</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">1. AIとの健全な関係性を示す</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ 保護者自身がAIを建設的に活用する姿を見せる</li>
                  <li>✓ AIの限界や失敗例も共有する</li>
                  <li>✓ 「AIに頼りすぎない」バランス感覚を伝える</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">2. 日常会話で批判的思考を育む</h4>
                <div className="bg-teal-100 p-3 rounded">
                  <p className="text-xs">
                    <strong>会話例：</strong>
                    「今日AIが教えてくれたことで、本当かな？と思ったことはある？」
                    「どうしてそう思ったの？」「他の見方はないかな？」
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">3. 創造的な家族プロジェクト</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="bg-teal-100 p-2 rounded text-xs">
                    • 週末の料理をAIレシピ＋独自アレンジ
                  </div>
                  <div className="bg-teal-100 p-2 rounded text-xs">
                    • 家族旅行をAI提案＋人間の希望で計画
                  </div>
                  <div className="bg-teal-100 p-2 rounded text-xs">
                    • AIと一緒に家族新聞を作成
                  </div>
                  <div className="bg-teal-100 p-2 rounded text-xs">
                    • 家族の歴史をAIで可視化＋思い出追加
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">4. 感情的なつながりを重視</h4>
                <ul className="text-sm space-y-1">
                  <li>• デジタルデトックスタイムの設定</li>
                  <li>• face to faceの対話時間確保</li>
                  <li>• 感情を言語化する練習</li>
                  <li>• 共感的な聴き方の実践</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">5. 失敗を恐れない環境づくり</h4>
                <p className="text-sm">
                  AIは「正解」を素早く出しますが、人間の価値は
                  「失敗から学ぶ」プロセスにあります。
                  試行錯誤を褒め、過程を重視する声かけを心がけましょう。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📱 推奨する家庭でのAIツール活用</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">学習支援</p>
                <ul className="text-xs space-y-1">
                  <li>• Khan Academy（AI個別指導）</li>
                  <li>• Duolingo（言語学習）</li>
                  <li>• Photomath（数学理解）</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">創造活動</p>
                <ul className="text-xs space-y-1">
                  <li>• Canva（デザイン）</li>
                  <li>• Chrome Music Lab（音楽）</li>
                  <li>• Scratch（プログラミング）</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-bold mb-1">探究学習</p>
                <ul className="text-xs space-y-1">
                  <li>• Google Arts & Culture</li>
                  <li>• NASA Kids' Club</li>
                  <li>• National Geographic Kids</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：人間らしさを極めることが最大の強み</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AIエージェントは道具であり、人間の創造性を拡張するパートナー</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>創造性・共感力・批判的思考・倫理観は人間の独自領域</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AIとの共創により、単独では不可能な価値創造が可能に</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>発達段階に応じた適切な教育デザインが重要</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>家庭での実践が子どもの未来を大きく左右する</span>
          </div>
        </div>

        <p className="text-lg">
          AIエージェント時代において、最も重要なのは
          「人間にしかできないこと」を極めることです。
          それは単にAIができないことをするのではなく、
          AIと協働しながら、より高次元の創造性と人間性を
          発揮することを意味します。
          
          子どもたちが自信を持って未来を歩めるよう、
          今こそ教育の在り方を根本から見直す時です。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">AIエージェント時代の教育相談会</h3>
        <p className="mb-6">
          お子様の創造性と人間性を最大限に引き出す
          AI時代の教育プログラムをご体験ください。
          一人ひとりの個性に合わせた学習プランをご提案します。
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
            無料体験授業を予約
          </Link>
        </div>
      </div>

      {/* 参考文献 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">参考文献</h2>
        
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">研究報告・統計データ</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.gartner.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Gartner「AI Technology Trends 2025」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.weforum.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    World Economic Forum「Future of Jobs Report 2025」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mit.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MIT「Human-AI Collaboration Research」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.ox.ac.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Oxford University「The Future of Employment」（2025年更新版）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・AI技術</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.mext.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「AI時代の教育の在り方について」（2025年）
                  </a>
              </li>
              <li>
                • UNESCO「AI and Education: Guidance for Policy-makers」（2025年）
              </li>
              <li>
                • Stanford HAI「AI Index Report 2025」（2025年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">実践事例・教育現場</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • AIアソビあとりえ「AIエージェント時代の教育実践報告」（2025年）
              </li>
              <li>
                • 日本STEM教育学会「創造性教育の効果測定研究」（2025年）
              </li>
              <li>
                • 港区教育委員会「未来型教育推進プロジェクト報告書」（2025年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
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
          
          <Link href="/blog/prompt-engineering-for-kids" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  プロンプトエンジニアリング入門：子どもが身につけるべき「AI対話スキル」
                </h3>
                <p className="text-sm text-gray-600">
                  AI活用の実践スキル
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-native-multilingual-learning" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AIネイティブ世代の多言語学習法：ChatGPT・Claude・Geminiで広がる国際教育
                </h3>
                <p className="text-sm text-gray-600">
                  AI活用の応用例
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