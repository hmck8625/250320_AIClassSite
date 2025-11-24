import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "プロンプトエンジニアリング入門：子どもが身につけるべき「AI対話スキル」とは【2025年版】 | AIアソビあとりえ",
  description: "ChatGPT、Claude、Geminiと上手に対話する方法を小学生でも分かりやすく解説。将来必須スキル「プロンプトエンジニアリング」を楽しく学ぶ実践ガイド。",
  keywords: ["プロンプトエンジニアリング 子ども", "AI対話 教育", "生成AI 指示 テクニック", "ChatGPT 使い方 小学生", "プロンプト 書き方", "港区 AI教育", "将来スキル"],
  openGraph: {
    title: "プロンプトエンジニアリング入門：子どもが身につけるべき「AI対話スキル」とは",
    description: "AIと上手に話す方法を楽しく学ぼう！将来必須スキルを今から身につける。",
    images: ['/images/blog/prompt-engineering-for-kids.jpg'],
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
          <li className="text-gray-900">プロンプトエンジニアリング入門</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">将来スキル</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          プロンプトエンジニアリング入門：<br className="md:hidden" />
          子どもが身につけるべき「AI対話スキル」とは【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/prompt-engineering-for-kids.jpg" 
          alt="AIと対話する子どもたちのイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-purple-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「AIに質問したけど、思った答えが返ってこない…」
          「もっと良い回答をもらうには、どう聞けばいいの？」
          そんな経験はありませんか？
        </p>
        <p className="text-lg leading-relaxed mb-4">
          実は、AIと上手に対話する「プロンプトエンジニアリング」は、
          これからの時代を生きる子どもたちにとって、
          読み書きそろばんに匹敵する基礎スキルになりつつあります。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、小学生でも楽しく学べるプロンプトエンジニアリングの
          基本から応用まで、港区のAI教育専門家が分かりやすく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>プロンプトエンジニアリングが注目される理由</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>子どもでも使える5つの基本テクニック</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別の学習ステップと実践例</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>家庭で楽しく練習する方法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>将来につながるスキルの活用例</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜ今、子どもにプロンプトエンジニアリングが必要なのか？
          </h2>
          
          <p className="mb-4">
            2025年現在、生成AIは私たちの生活のあらゆる場面に浸透しています。
            経済産業省の調査によると、2030年までに日本の労働者の約80%が
            何らかの形でAIを活用する見込みです。つまり、AIと効果的に
            コミュニケーションする能力は、将来の必須スキルなのです。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 プロンプトエンジニアリングの重要性（2024年調査）</p>
            <ul className="text-sm space-y-1">
              <li>• AI活用企業の94%が「プロンプトスキル」を重視</li>
              <li>• 米国では小学校の35%でプロンプト教育を導入</li>
              <li>• プロンプトエンジニアの平均年収：1,200万円（日本）</li>
              <li>• 2030年の必須スキルランキング：第3位</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：経済産業省「AI時代の人材育成に関する調査」（2024年12月）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">プロンプトエンジニアリングとは？</h3>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <p className="mb-4">
              <strong>プロンプトエンジニアリング</strong>とは、AIに対して
              効果的な指示（プロンプト）を出し、望む結果を得るための技術です。
              簡単に言えば、「AIと上手に話す方法」のことです。
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded">
                <h4 className="font-bold mb-2 text-purple-800">❌ 悪いプロンプトの例</h4>
                <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                  「作文書いて」
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  → 曖昧すぎて、AIは何について書けばいいか分からない
                </p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h4 className="font-bold mb-2 text-green-800">✅ 良いプロンプトの例</h4>
                <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                  「夏休みの思い出について、小学3年生向けに200字程度の作文を書いて。
                  海に行った楽しい体験を含めて」
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  → 具体的で、AIが理解しやすい
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">子どもが身につけるメリット</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🎓 学習面でのメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• 宿題や調べ物が効率的に</li>
                <li>• 分からないことを的確に質問できる</li>
                <li>• 創造的なアイデアを引き出せる</li>
                <li>• 論理的思考力が身につく</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">🚀 将来のメリット</h4>
              <ul className="text-sm space-y-1">
                <li>• どんな職業でも活用できるスキル</li>
                <li>• AI時代の競争力</li>
                <li>• 問題解決能力の向上</li>
                <li>• コミュニケーション能力の発達</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 子どもでもマスターできる！5つの基本テクニック
          </h2>

          <p className="mb-6">
            プロンプトエンジニアリングと聞くと難しそうですが、
            実は基本的なテクニックを覚えるだけで、AIとの対話が
            格段に上手になります。ここでは、小学生でも使える
            5つの基本テクニックを紹介します。
          </p>

          {/* テクニック1 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">🎯 テクニック1：具体的に伝える</h3>
            
            <div className="mb-4">
              <p className="mb-3">
                AIは読心術ができません。何をしてほしいか、はっきりと伝えましょう。
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-red-700 mb-2">❌ ダメな例</p>
                  <div className="bg-white p-2 rounded text-sm">
                    <p className="font-mono">「算数教えて」</p>
                  </div>
                  <p className="text-xs mt-2">問題：範囲が広すぎる</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-green-700 mb-2">✅ 良い例</p>
                  <div className="bg-white p-2 rounded text-sm">
                    <p className="font-mono">「2桁×2桁のかけ算の筆算のやり方を、ステップごとに教えて」</p>
                  </div>
                  <p className="text-xs mt-2">ポイント：何を知りたいか明確</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded">
              <p className="font-bold mb-2">💡 練習問題</p>
              <p className="text-sm">次の曖昧な質問を、具体的に書き直してみよう：</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• 「お話作って」→「　　　　　」</li>
                <li>• 「ゲーム教えて」→「　　　　　」</li>
                <li>• 「何か面白いこと」→「　　　　　」</li>
              </ul>
            </div>
          </div>

          {/* テクニック2 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🎭 テクニック2：役割を与える</h3>
            
            <div className="mb-4">
              <p className="mb-3">
                AIに「なりきってもらう」ことで、より適切な回答が得られます。
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-bold mb-2">例1：優しい先生になってもらう</p>
                  <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                    「あなたは優しい小学校の先生です。分数の足し算について、
                    小学3年生にも分かるように説明してください」
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <p className="font-bold mb-2">例2：物語の登場人物になってもらう</p>
                  <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                    「あなたは宇宙飛行士です。月面での1日の生活について、
                    子どもたちに楽しく話してください」
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <p className="font-bold mb-2">例3：ゲームマスターになってもらう</p>
                  <p className="text-sm bg-gray-100 p-2 rounded font-mono">
                    「あなたはクイズ番組の司会者です。日本の都道府県について
                    3択クイズを5問出してください」
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 p-3 rounded">
              <p className="text-sm">
                <strong>💡 ヒント：</strong>役割を与えるときは、その人がどんな話し方をするか
                想像してみよう。優しい先生なら簡単な言葉で、科学者なら専門的に話すよね。
              </p>
            </div>
          </div>

          {/* テクニック3 */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">📝 テクニック3：形式を指定する</h3>
            
            <div className="mb-4">
              <p className="mb-3">
                どんな形で答えてほしいか伝えると、使いやすい回答がもらえます。
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">よく使う形式</h4>
                  <ul className="text-sm space-y-2">
                    <li className="bg-white p-2 rounded">
                      <strong>箇条書き：</strong>「〜を5つ、箇条書きで教えて」
                    </li>
                    <li className="bg-white p-2 rounded">
                      <strong>表：</strong>「〜を表にまとめて」
                    </li>
                    <li className="bg-white p-2 rounded">
                      <strong>ステップ：</strong>「〜の手順を番号付きで」
                    </li>
                    <li className="bg-white p-2 rounded">
                      <strong>物語：</strong>「〜を短い物語にして」
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">実際の例</h4>
                  <div className="bg-white p-3 rounded text-sm">
                    <p className="font-mono mb-2">
                      「太陽系の惑星について、以下の形式で教えて：
                      <br />- 惑星名
                      <br />- 大きさ（地球と比べて）
                      <br />- 特徴を1つ」
                    </p>
                    <p className="text-xs text-gray-600">
                      → きれいに整理された情報が返ってくる
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* テクニック4 */}
          <div className="mb-8 p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-800">🔍 テクニック4：例を示す</h3>
            
            <div className="mb-4">
              <p className="mb-3">
                「こんな感じで」と例を見せると、AIは期待に応えやすくなります。
              </p>
              
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">効果的な例の示し方</p>
                <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                  <p>「動物の特徴を紹介する文を作って。例はこんな感じ：</p>
                  <p className="mt-2">例）パンダ：白と黒の模様が特徴的で、竹を食べるのが大好きな動物です。
                  中国に住んでいて、のんびりした性格をしています。</p>
                  <p className="mt-2">同じような形式で、キリンについて書いてください」</p>
                </div>
              </div>
              
              <div className="mt-4 grid md:grid-cols-3 gap-3">
                <div className="bg-orange-100 p-3 rounded text-sm">
                  <p className="font-bold mb-1">算数の例</p>
                  <p>「12+8=20のように、繰り上がりのある足し算を5問作って」</p>
                </div>
                <div className="bg-orange-100 p-3 rounded text-sm">
                  <p className="font-bold mb-1">作文の例</p>
                  <p>「『昨日、〜しました。』で始まる日記を書いて」</p>
                </div>
                <div className="bg-orange-100 p-3 rounded text-sm">
                  <p className="font-bold mb-1">クイズの例</p>
                  <p>「Q:日本一高い山は？ A:富士山 のような地理クイズを作って」</p>
                </div>
              </div>
            </div>
          </div>

          {/* テクニック5 */}
          <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">🔄 テクニック5：段階的に質問する</h3>
            
            <div className="mb-4">
              <p className="mb-3">
                複雑なことは、小さく分けて質問しましょう。会話のキャッチボールが大切です。
              </p>
              
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-3">例：自由研究のテーマを決める場合</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    <div className="flex-1">
                      <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                        「小学4年生の自由研究で人気のテーマを5つ教えて」
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    <div className="flex-1">
                      <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                        「その中の『植物の成長』について、具体的な実験方法を教えて」
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-yellow-300 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    <div className="flex-1">
                      <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                        「その実験に必要な道具と、1週間のスケジュールを作って」
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-yellow-100 p-3 rounded">
                <p className="text-sm">
                  <strong>💡 ポイント：</strong>一度に全部聞こうとせず、
                  AIの答えを見てから次の質問を考えよう。対話しながら深めていくイメージ！
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">🎮 5つのテクニックまとめ</h4>
            <ol className="text-sm space-y-1">
              <li>1. <strong>具体的に</strong> - 何が欲しいかはっきり伝える</li>
              <li>2. <strong>役割を与える</strong> - AIになりきってもらう</li>
              <li>3. <strong>形式を指定</strong> - どんな形で答えてほしいか</li>
              <li>4. <strong>例を示す</strong> - 「こんな感じで」と見本を見せる</li>
              <li>5. <strong>段階的に</strong> - 会話のキャッチボールで深める</li>
            </ol>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 年齢別学習ガイド：段階的にスキルアップ
          </h2>

          <p className="mb-6">
            プロンプトエンジニアリングは、年齢に応じて段階的に学ぶことで
            無理なく身につけられます。ここでは、年齢別の学習目標と実践例を紹介します。
          </p>

          {/* 5-7歳 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🌱 5-7歳：AIと友だちになろう</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習目標</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>AIに簡単な質問ができる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>「お願い」の言葉を使える</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>AIの答えを理解できる</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">実践例</h4>
                <div className="bg-white p-3 rounded text-sm space-y-2">
                  <p className="font-mono bg-gray-100 p-2 rounded">
                    「どうぶつのなまえを5つおしえて」
                  </p>
                  <p className="font-mono bg-gray-100 p-2 rounded">
                    「あかいものを10こおしえて」
                  </p>
                  <p className="font-mono bg-gray-100 p-2 rounded">
                    「かんたんななぞなぞをだして」
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-green-100 p-3 rounded">
              <p className="text-sm">
                <strong>🎯 この年齢のポイント：</strong>
                保護者と一緒に、楽しみながらAIとお話しする体験を積み重ねましょう。
                正解・不正解よりも、コミュニケーションを楽しむことが大切です。
              </p>
            </div>
          </div>

          {/* 8-10歳 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📚 8-10歳：上手な質問マスター</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習目標</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>5W1H（いつ・どこで・誰が・何を・なぜ・どのように）を使える</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>具体的な条件を付けられる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>役割設定ができる</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">実践プロジェクト</h4>
                <div className="bg-white p-3 rounded">
                  <p className="font-bold text-sm mb-2">📝 オリジナル物語を作ろう</p>
                  <ol className="text-xs space-y-1">
                    <li>1. 主人公を決める質問をする</li>
                    <li>2. 舞台となる場所を聞く</li>
                    <li>3. 起きる事件を考えてもらう</li>
                    <li>4. 結末を一緒に作る</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-bold mb-2">良いプロンプト例</p>
                <p className="text-sm font-mono bg-gray-100 p-2 rounded">
                  「あなたは物語作家です。魔法が使える猫が主人公の、小学生向けの
                  短い冒険物語を作ってください。200字くらいで、最後はハッピーエンドにしてください」
                </p>
              </div>
            </div>
          </div>

          {/* 11-13歳 */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 11-13歳：プロンプトデザイナー</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-3">学習目標</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>複雑な条件設定ができる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>制約条件を明確に伝えられる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>出力形式を詳細に指定できる</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>反復改善ができる</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">高度な実践例</h4>
                <div className="bg-white p-3 rounded text-sm">
                  <p className="font-bold mb-2">🎮 ゲーム企画書の作成</p>
                  <div className="font-mono bg-gray-100 p-2 rounded text-xs">
                    <p>「新しいスマホゲームの企画書を作成してください。</p>
                    <p>条件：</p>
                    <p>- ジャンル：パズルRPG</p>
                    <p>- ターゲット：10-15歳</p>
                    <p>- 特徴：AIキャラクターが登場</p>
                    <p>- 含める項目：タイトル、概要、ゲームシステム、キャラクター設定」</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-purple-100 p-3 rounded">
              <p className="text-sm">
                <strong>🎯 この年齢のポイント：</strong>
                学校の課題や趣味のプロジェクトでAIを活用。プロンプトの改善を
                繰り返すことで、より良い結果を得る方法を体験的に学びます。
              </p>
            </div>
          </div>

          {/* 14歳以上 */}
          <div className="mb-8 p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-800">💎 14歳以上：プロンプトエンジニア</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-3">上級スキル</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>コンテキスト設定：</strong>背景情報を詳細に提供</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>チェーン思考：</strong>段階的な推論を促す</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Few-shot学習：</strong>複数の例示で精度向上</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>メタプロンプト：</strong>プロンプト自体を生成</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <p className="font-bold mb-2">上級プロンプト例：研究レポート作成支援</p>
                <div className="font-mono bg-gray-100 p-3 rounded text-xs">
                  <p>「環境問題に関する研究レポートの構成を提案してください。</p>
                  <p className="mt-2">コンテキスト：</p>
                  <p>- 高校1年生の課題</p>
                  <p>- 文字数：3000字程度</p>
                  <p>- 焦点：プラスチック汚染</p>
                  <p className="mt-2">要求事項：</p>
                  <p>1. 導入で読者の関心を引く統計データを提示</p>
                  <p>2. 問題の原因を3つの観点から分析</p>
                  <p>3. 実現可能な解決策を5つ提案</p>
                  <p>4. 高校生ができる具体的アクションを含める</p>
                  <p className="mt-2">形式：</p>
                  <p>- 各セクションの文字数目安を明記</p>
                  <p>- 参考文献リストの形式を含める</p>
                  <p>- 図表を入れる箇所を指定」</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📈 スキル習得の目安</h4>
            <div className="text-sm">
              <ul className="space-y-1">
                <li>• 基礎レベル（5-7歳）：1-3ヶ月</li>
                <li>• 初級レベル（8-10歳）：3-6ヶ月</li>
                <li>• 中級レベル（11-13歳）：6-12ヶ月</li>
                <li>• 上級レベル（14歳以上）：1年以上</li>
              </ul>
              <p className="mt-2 text-xs text-gray-600">
                ※毎日10-15分の練習を想定。個人差があります。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 家庭で楽しく練習！実践的な学習アイデア集
          </h2>

          <p className="mb-6">
            プロンプトエンジニアリングは、日常生活の中で楽しく練習できます。
            ここでは、家族で取り組める実践的な学習アイデアを紹介します。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 学習ゲーム */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">🎮 プロンプトゲーム集</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">1. AIしりとり</h4>
                  <p className="text-sm mb-2">
                    AIと交互にしりとりをします。ただし、毎回テーマを変えて挑戦！
                  </p>
                  <p className="text-xs bg-gray-100 p-2 rounded font-mono">
                    「動物の名前だけでしりとりをしよう。『ぞう』から始めて」
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">2. 20の質問</h4>
                  <p className="text-sm mb-2">
                    AIに何かを思い浮かべてもらい、20回以内の質問で当てるゲーム。
                  </p>
                  <p className="text-xs bg-gray-100 p-2 rounded font-mono">
                    「動物を1つ思い浮かべて。私が質問するので、はい/いいえで答えて」
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">3. ストーリーリレー</h4>
                  <p className="text-sm mb-2">
                    家族とAIで交互に物語を作っていく創造的なゲーム。
                  </p>
                  <p className="text-xs bg-gray-100 p-2 rounded font-mono">
                    「『昔々あるところに』で始まる物語を一緒に作ろう。1文ずつ交代で」
                  </p>
                </div>
              </div>
            </div>

            {/* 日常活用 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">📅 日常生活での活用例</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">宿題サポート</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 作文のアイデア出し</li>
                    <li>• 自由研究のテーマ探し</li>
                    <li>• 読書感想文の構成</li>
                    <li>• 算数の文章題の理解</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">創作活動</h4>
                  <ul className="text-sm space-y-1">
                    <li>• オリジナルキャラクター設定</li>
                    <li>• 漫画のストーリー作り</li>
                    <li>• 歌の歌詞を考える</li>
                    <li>• ゲームのルール作成</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold mb-2">学習支援</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 暗記カードの作成</li>
                    <li>• テスト問題の生成</li>
                    <li>• 要約の練習</li>
                    <li>• 発表原稿の作成</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 週間チャレンジ */}
          <div className="mt-6 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">📋 週間チャレンジプログラム</h3>
            
            <div className="bg-white p-4 rounded">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">曜日</th>
                    <th className="text-left py-2">チャレンジ内容</th>
                    <th className="text-left py-2">プロンプト例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">月</td>
                    <td>レシピ作成</td>
                    <td className="text-xs">「冷蔵庫にある○○で作れる料理を教えて」</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">火</td>
                    <td>クイズ大会</td>
                    <td className="text-xs">「○○についての3択クイズを5問作って」</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">水</td>
                    <td>詩を作ろう</td>
                    <td className="text-xs">「○○をテーマにした俳句を作って」</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">木</td>
                    <td>未来予想</td>
                    <td className="text-xs">「10年後の○○はどうなっている？」</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">金</td>
                    <td>問題解決</td>
                    <td className="text-xs">「○○で困っています。解決方法を3つ提案して」</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">土</td>
                    <td>創作タイム</td>
                    <td className="text-xs">「○○が主人公の短い物語を作って」</td>
                  </tr>
                  <tr>
                    <td className="py-2">日</td>
                    <td>家族会議</td>
                    <td className="text-xs">「家族旅行の計画を立てるのを手伝って」</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 評価とフィードバック */}
          <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-800">📊 上達度チェックリスト</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-3">初級レベル</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>簡単な質問ができる</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>「〜について教えて」が使える</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>数を指定できる（3つ、5個など）</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>簡単な条件を付けられる</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-3">中級レベル</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>役割設定ができる</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>形式を指定できる</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>例を示せる</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>段階的に質問できる</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 bg-yellow-100 p-3 rounded">
              <p className="text-sm">
                <strong>💡 上達のコツ：</strong>
                毎日少しずつ練習し、うまくいったプロンプトは記録しておきましょう。
                失敗も大切な学習材料です！
              </p>
            </div>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. AIツール別の特徴と使い分け方
          </h2>

          <p className="mb-6">
            現在利用できる主要なAIツールには、それぞれ特徴があります。
            目的に応じて使い分けることで、より良い結果が得られます。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">AIツール</th>
                  <th className="border border-gray-300 p-3 text-center">得意分野</th>
                  <th className="border border-gray-300 p-3 text-center">子ども向け度</th>
                  <th className="border border-gray-300 p-3 text-center">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">ChatGPT</td>
                  <td className="border border-gray-300 p-3">会話・説明・創作</td>
                  <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 p-3">最も汎用的、日本語対応良好</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Claude</td>
                  <td className="border border-gray-300 p-3">長文作成・分析</td>
                  <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 p-3">安全性重視、教育的配慮</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Gemini</td>
                  <td className="border border-gray-300 p-3">検索連携・最新情報</td>
                  <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 p-3">Google検索と連携、画像理解</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Copilot</td>
                  <td className="border border-gray-300 p-3">プログラミング支援</td>
                  <td className="border border-gray-300 p-3 text-center">⭐⭐⭐</td>
                  <td className="border border-gray-300 p-3">コード生成特化、中級者向け</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Perplexity</td>
                  <td className="border border-gray-300 p-3">調べ学習・リサーチ</td>
                  <td className="border border-gray-300 p-3 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-300 p-3">出典明記、信頼性高い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-blue-800">📝 用途別おすすめツール</h3>
              <dl className="text-sm space-y-2">
                <dt className="font-bold">宿題の相談：</dt>
                <dd className="ml-4">ChatGPT、Claude</dd>
                
                <dt className="font-bold">調べ学習：</dt>
                <dd className="ml-4">Perplexity、Gemini</dd>
                
                <dt className="font-bold">創作活動：</dt>
                <dd className="ml-4">ChatGPT、Claude</dd>
                
                <dt className="font-bold">プログラミング：</dt>
                <dd className="ml-4">Copilot、ChatGPT</dd>
                
                <dt className="font-bold">画像の説明：</dt>
                <dd className="ml-4">Gemini、ChatGPT-4V</dd>
              </dl>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-3 text-green-800">⚠️ 注意点とマナー</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>AIの回答を鵜呑みにせず、必ず確認する</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>個人情報は絶対に入力しない</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>学校の課題は自分で考えることが大切</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>AIはあくまで「助手」として活用</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>使用時間を決めて、依存しないように</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 将来につながる！プロンプトスキルの活用例
          </h2>

          <p className="mb-6">
            プロンプトエンジニアリングのスキルは、将来さまざまな場面で
            活用できます。ここでは、具体的な活用例と可能性を紹介します。
          </p>

          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">🎓 学習・教育での活用</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">個別学習支援</h4>
                <ul className="text-sm space-y-1">
                  <li>• 苦手科目の克服プログラム作成</li>
                  <li>• 理解度に応じた問題生成</li>
                  <li>• 学習計画の最適化</li>
                  <li>• モチベーション維持の工夫</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">創造的学習</h4>
                <ul className="text-sm space-y-1">
                  <li>• プロジェクト型学習の設計</li>
                  <li>• 探究学習のテーマ深掘り</li>
                  <li>• プレゼンテーション資料作成</li>
                  <li>• ディベートの論点整理</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">💼 将来の職業での活用</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">クリエイティブ系職業</h4>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="font-semibold">デザイナー</p>
                    <p className="text-xs">アイデア出し、コンセプト開発</p>
                  </div>
                  <div>
                    <p className="font-semibold">作家・ライター</p>
                    <p className="text-xs">プロット作成、文章推敲</p>
                  </div>
                  <div>
                    <p className="font-semibold">ゲームクリエイター</p>
                    <p className="text-xs">世界観構築、シナリオ作成</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">技術系職業</h4>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="font-semibold">プログラマー</p>
                    <p className="text-xs">コード生成、デバッグ支援</p>
                  </div>
                  <div>
                    <p className="font-semibold">データサイエンティスト</p>
                    <p className="text-xs">分析手法選択、結果解釈</p>
                  </div>
                  <div>
                    <p className="font-semibold">研究者</p>
                    <p className="text-xs">文献調査、仮説生成</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">ビジネス系職業</h4>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="font-semibold">マーケター</p>
                    <p className="text-xs">市場分析、戦略立案</p>
                  </div>
                  <div>
                    <p className="font-semibold">コンサルタント</p>
                    <p className="text-xs">問題分析、提案書作成</p>
                  </div>
                  <div>
                    <p className="font-semibold">起業家</p>
                    <p className="text-xs">ビジネスプラン、資金調達</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🌟 新しい職業の可能性</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">プロンプトエンジニア</h4>
                <p className="text-sm mb-2">
                  企業のAI活用を最適化する専門家。効果的なプロンプト設計で
                  業務効率を大幅に向上させる。
                </p>
                <p className="text-xs text-gray-600">
                  推定年収：800-1,500万円（2030年予測）
                </p>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">AI教育コーディネーター</h4>
                <p className="text-sm mb-2">
                  学校や企業でAI活用教育を設計・実施。プロンプトスキルを
                  次世代に伝える教育者。
                </p>
                <p className="text-xs text-gray-600">
                  推定年収：600-1,000万円（2030年予測）
                </p>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">AIコミュニケーター</h4>
                <p className="text-sm mb-2">
                  人とAIの橋渡し役。複雑な要求を適切なプロンプトに
                  変換し、結果を分かりやすく伝える。
                </p>
                <p className="text-xs text-gray-600">
                  推定年収：500-800万円（2030年予測）
                </p>
              </div>
              
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold mb-2">クリエイティブディレクター</h4>
                <p className="text-sm mb-2">
                  AIを活用した創造的プロジェクトを統括。
                  人間の感性とAIの能力を融合させる。
                </p>
                <p className="text-xs text-gray-600">
                  推定年収：700-1,200万円（2030年予測）
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-300 rounded-lg">
            <h4 className="font-bold mb-2">🔮 2030年の未来予測</h4>
            <p className="text-sm mb-3">
              総務省の予測によると、2030年には以下のような社会になると言われています：
            </p>
            <ul className="text-sm space-y-1">
              <li>• 全職業の80%でAI活用が必須に</li>
              <li>• プロンプトスキルが「新しい読み書きそろばん」に</li>
              <li>• 人間とAIの協働が当たり前の社会</li>
              <li>• 創造性と感性がより重要視される時代</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：総務省「Beyond 5G時代の未来像」（2024年）
            </p>
          </div>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            7. 保護者の方へ：安全で効果的なサポート方法
          </h2>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-red-800">⚠️ 安全利用のための重要ルール</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">絶対に入力してはいけない情報</h4>
                <ul className="text-sm space-y-1">
                  <li>• 本名、住所、電話番号</li>
                  <li>• 学校名、クラス、担任の名前</li>
                  <li>• パスワード、IDなどのアカウント情報</li>
                  <li>• 家族の個人情報</li>
                  <li>• 写真（顔が写っているもの）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4 text-blue-800">👪 効果的なサポート方法</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold text-sm mb-2">1. 一緒に楽しむ</h4>
                  <p className="text-xs">
                    批判や評価ではなく、「面白いね！」「すごいアイデア！」と
                    共感することで、子どもの創造性が伸びます。
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold text-sm mb-2">2. 失敗を恐れない環境</h4>
                  <p className="text-xs">
                    うまくいかないプロンプトも学習の一部。
                    「どうしたらもっと良くなるかな？」と一緒に考えましょう。
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold text-sm mb-2">3. 実践の機会を作る</h4>
                  <p className="text-xs">
                    日常生活でAIを活用する機会を積極的に作り、
                    実用的なスキルとして定着させましょう。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4 text-green-800">📱 環境設定のポイント</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold text-sm mb-2">推奨設定</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 使用時間の制限（1日30-60分）</li>
                    <li>• 保護者アカウントでの利用</li>
                    <li>• 履歴の定期確認</li>
                    <li>• セーフサーチON</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h4 className="font-bold text-sm mb-2">学習環境</h4>
                  <ul className="text-xs space-y-1">
                    <li>• リビングなど見守れる場所で</li>
                    <li>• 画面の明るさ調整</li>
                    <li>• 適切な椅子と机の高さ</li>
                    <li>• 定期的な休憩（20-20-20ルール）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
            <h3 className="font-bold mb-4 text-yellow-800">💬 よくある保護者の質問</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">Q: AIに頼りすぎて、自分で考えなくなりませんか？</p>
                <p className="text-sm">
                  A: プロンプトエンジニアリングは「どう質問するか」を考える訓練です。
                  適切な質問をするには、深い思考が必要なため、むしろ思考力が鍛えられます。
                  AIは「答えを教えてくれる機械」ではなく「一緒に考えるパートナー」として
                  活用することが大切です。
                </p>
              </div>
              
              <div>
                <p className="font-bold mb-2">Q: 学校の宿題でAIを使ってもいいのでしょうか？</p>
                <p className="text-sm">
                  A: 学校や先生の方針を確認することが重要です。一般的には、
                  アイデア出しや参考資料として使うのは問題ありませんが、
                  AIが書いた文章をそのまま提出するのは不適切です。
                  必ず自分の言葉で書き直し、AIは「ヒント」として活用しましょう。
                </p>
              </div>
              
              <div>
                <p className="font-bold mb-2">Q: どのAIツールから始めるのがいいですか？</p>
                <p className="text-sm">
                  A: 初心者にはChatGPTがおすすめです。日本語対応が優れており、
                  子ども向けの配慮もされています。慣れてきたら、目的に応じて
                  他のツールも試してみましょう。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：AI時代を生きる力を育てよう</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>プロンプトエンジニアリングは将来の必須スキル</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>5つの基本テクニックで、誰でも上達できる</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>日常生活の中で楽しく練習できる</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>安全に配慮しながら、創造性を伸ばす</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>人間とAIが協働する未来への準備</span>
          </div>
        </div>

        <p className="text-lg">
          プロンプトエンジニアリングは、単なる技術スキルではありません。
          「相手（AI）を理解し、適切にコミュニケーションを取る」という、
          人間社会でも重要な能力を育てます。
          子どもたちが楽しみながらこのスキルを身につけることで、
          AI時代を主体的に生きる力が育まれるのです。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">プロンプトエンジニアリング体験会</h3>
        <p className="mb-6">
          AIアソビあとりえでは、子ども向けプロンプトエンジニアリング
          講座を開催しています。ChatGPT、Claude、Geminiを使った
          実践的なワークショップで、楽しくスキルを身につけましょう！
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            無料体験会に申し込む
          </Link>
          <Link 
            href="/courses/ai-art" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            AI創造コースの詳細を見る
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
                    href="https://www.meti.go.jp/policy/it_policy/jinzai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    経済産業省「AI時代の人材育成に関する調査」（2024年12月）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/main_sosiki/joho_tsusin/b5g/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「Beyond 5G時代の未来像」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.mext.go.jp/a_menu/other/mext_02412.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    文部科学省「生成AIの学校での取り扱いについて」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育研究・技術資料</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://arxiv.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    arXiv「Prompt Engineering for Large Language Models」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://openai.com/blog/prompt-engineering" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    OpenAI「Prompt Engineering Guide」（2024年）
                  </a>
              </li>
              <li>
                • AIアソビあとりえ「子ども向けプロンプト教育実践報告」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">安全利用ガイドライン</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.jipdec.or.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本情報経済社会推進協会「AI利用における個人情報保護」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.caa.go.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    消費者庁「子どものデジタル機器利用ガイド」（2024年）
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
                  年齢別おすすめAIツールを紹介
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
                  プログラミングとAIの融合学習
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