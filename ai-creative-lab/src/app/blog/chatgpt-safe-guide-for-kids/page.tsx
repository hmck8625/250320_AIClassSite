import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "ChatGPT子ども安全活用ガイド：小学生の学習を変える正しい使い方【保護者必読】 | AIアソビあとりえ",
  description: "文科省ガイドライン準拠。小学生がChatGPTを安全に学習活用するための保護者必読ガイド。年齢制限、安全設定、具体的活用法を港区の教育専門家が解説。",
  keywords: ["ChatGPT 子ども 安全", "ChatGPT 小学生 教育", "AI 子ども 学習", "生成AI 教育 ガイドライン", "ChatGPT 年齢制限", "港区 AI教育", "保護者 AI活用"],
  openGraph: {
    title: "ChatGPT子ども安全活用ガイド：小学生の学習を変える正しい使い方",
    description: "文科省ガイドライン準拠。ChatGPTを安全に教育活用するための完全ガイド。",
    images: ['/images/blog/chatgpt-kids-safety-guide.png'],
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
          <li className="text-gray-900">ChatGPT子ども安全活用ガイド</li>
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
          ChatGPT子ども安全活用ガイド：<br className="md:hidden" />
          小学生の学習を変える正しい使い方【保護者必読】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/chatgpt-kids-safety-guide.png" 
          alt="ChatGPTを安全に使う子どもと保護者のイメージ"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-blue-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          お子様が「ChatGPTって何？」「友達が使ってるって言ってた」と話し始めていませんか？
          生成AIの急速な普及により、子どもたちの身近にもAIツールが存在する時代になりました。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          港区の多くの保護者様から「ChatGPTを子どもに使わせても大丈夫？」「どう活用すればいい？」
          というご相談をいただいています。期待と不安、両方のお気持ちがあるのは当然です。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、文部科学省の最新ガイドラインに基づき、ChatGPTを安全に教育活用するための
          具体的な方法を、港区のAI教育専門家がわかりやすく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>文部科学省の生成AI教育ガイドラインの要点</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>ChatGPTの年齢制限と安全設定の具体的手順</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別の適切な活用方法と実例</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>家庭で実践できる10の活用アイデア</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>避けるべきリスクと対処法</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. 生成AI教育の現状と文部科学省ガイドライン
          </h2>
          
          <p className="mb-4">
            2024年12月、文部科学省は生成AIの学校教育での利用に関する最新ガイドラインを発表しました。
            その中で、生成AIを「適切に活用する力」の育成が重要であると明記されています。
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 最新統計データ</p>
            <p>
              ベネッセ教育総合研究所の調査（2024年）によると、小学3-6年生の約20%がChatGPTを
              「知っている」と回答し、全体の14%が実際に使用経験があることがわかりました。
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">文科省ガイドラインの重要ポイント</h3>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">1.</span>
              <div>
                <strong>年齢制限の遵守</strong><br />
                小学生は単独での使用不可。保護者の同意と同伴が必須
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">2.</span>
              <div>
                <strong>批判的思考力の重要性</strong><br />
                生成された内容の正確性を判断する力の育成が不可欠
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">3.</span>
              <div>
                <strong>個人情報保護</strong><br />
                機械学習への個人情報提供リスクへの対策が必要
              </div>
            </li>
          </ul>

          <p>
            港区教育委員会も2025年度の教育方針で「AIリテラシー教育の推進」を掲げており、
            適切な活用方法の普及が急務となっています。
          </p>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 年齢制限と安全設定の完全ガイド
          </h2>

          <h3 className="text-xl font-bold mb-4">ChatGPTの年齢制限</h3>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="font-bold mb-2">⚠️ 重要な制限事項</p>
            <ul className="space-y-2">
              <li>• 13歳未満：利用不可（OpenAI利用規約）</li>
              <li>• 13-18歳：保護者の同意が必要</li>
              <li>• 小学生：保護者が代理で使用し、結果を説明</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-4">必須の安全設定手順</h3>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">ステップ1：プライバシー設定</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>ChatGPT設定画面を開く</li>
                <li>「Data controls」を選択</li>
                <li>「Chat history & training」をOFFに設定</li>
                <li>これにより入力内容が学習に使用されません</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">ステップ2：使用履歴の管理</h4>
              <ol className="list-decimal list-inside space-y-2">
                <li>定期的に会話履歴を確認</li>
                <li>不適切な内容があれば即座に削除</li>
                <li>月1回は履歴をエクスポートして保存</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3">ステップ3：アカウント共有の禁止</h4>
              <p>
                保護者のアカウントで使用し、子ども専用アカウントは作成しない。
                使用時は必ず保護者が同席する。
              </p>
            </div>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. 年齢別・段階別活用法
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="text-xl font-bold mb-3">幼児〜小学校低学年（5-8歳）</h3>
              <p className="mb-3">
                <strong>活用方針：</strong>保護者が完全に代理使用し、結果を子どもに説明
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 創作童話の生成「〇〇が主人公のお話を作って」</li>
                <li>• なぜなぜ質問への回答「なぜ空は青いの？」</li>
                <li>• 簡単な学習クイズの作成</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="text-xl font-bold mb-3">小学校中学年（9-10歳）</h3>
              <p className="mb-3">
                <strong>活用方針：</strong>保護者と一緒に質問を考え、結果を一緒に検証
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 自由研究のアイデア出し</li>
                <li>• 調べ学習の補助（必ず他の資料と照合）</li>
                <li>• プログラミングの基礎概念理解</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="text-xl font-bold mb-3">小学校高学年（11-12歳）</h3>
              <p className="mb-3">
                <strong>活用方針：</strong>保護者監督下で、批判的思考を育む使い方
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 英語学習の会話練習相手</li>
                <li>• 作文の構成アドバイス（丸写し禁止）</li>
                <li>• 間違い探しゲーム（AIの誤答を見つける）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 家庭で実践できる10の活用アイデア
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">1. 創造力を育む活動</h4>
              <p>物語の続きを考える、キャラクター設定を作る</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">2. 語彙力アップ</h4>
              <p>難しい言葉を簡単に説明してもらう</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">3. 算数の文章題作成</h4>
              <p>子どもの興味に合わせた問題を生成</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">4. 英語の発音練習</h4>
              <p>簡単な英会話フレーズの練習相手</p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">5. 料理レシピ考案</h4>
              <p>家にある材料で作れる簡単料理</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">6. 工作アイデア</h4>
              <p>身近な材料でできる工作の提案</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">7. なぞなぞ作成</h4>
              <p>年齢に合わせたなぞなぞで論理力育成</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">8. 歴史人物インタビュー</h4>
              <p>歴史上の人物になりきって対話</p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">9. 科学実験の説明</h4>
              <p>身近な現象の仕組みを分かりやすく</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">10. プレゼン練習</h4>
              <p>発表内容への質問を考えてもらう</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm">
              <strong>💡 活用のコツ：</strong>
              どの活動も「AIが言ったことは本当かな？」と確認する習慣をつけることが大切です。
            </p>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. 注意すべきリスクと対処法
          </h2>

          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">⚠️ 個人情報の入力</h4>
              <p className="text-yellow-700">
                名前、住所、学校名などの個人情報は絶対に入力しない。
                「港区の小学生」程度の一般的な情報に留める。
              </p>
            </div>

            <div className="bg-red-50 border border-red-300 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">⚠️ 宿題の丸投げ</h4>
              <p className="text-red-700">
                宿題をそのまま入力して答えをもらうのは学習効果を損なう。
                ヒントをもらう程度に留め、自分で考える習慣を維持。
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-300 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">⚠️ 依存の防止</h4>
              <p className="text-purple-700">
                1日の使用時間を決める（推奨：30分以内）。
                AIなしでも考える力を育てるバランスが重要。
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：安全で効果的な活用のために</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>ChatGPTは13歳未満は利用不可、小学生は保護者同伴必須</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>プライバシー設定を必ず行い、個人情報は入力しない</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢に応じた段階的な活用で、批判的思考力を育成</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>創造的な活動に活用し、依存せずバランスを保つ</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AIの回答を鵜呑みにせず、必ず確認する習慣をつける</span>
          </div>
        </div>

        <p className="text-lg">
          生成AIは適切に使えば、子どもの学習を豊かにする強力なツールになります。
          保護者の方が正しい知識を持ち、一緒に活用することで、
          AI時代を生きる子どもたちに必要な力を育むことができるでしょう。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">AI教育についてもっと知りたい方へ</h3>
        <p className="mb-6">
          AIアソビあとりえでは、保護者の方向けにAIリテラシー講座を開催しています。
          ChatGPTをはじめとする生成AIの安全な活用方法を、実践的に学べます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/trial" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            無料体験に申し込む
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            詳しく問い合わせる
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
                    href="https://berd.benesse.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ベネッセ教育総合研究所「小学生のChatGPT利用実態調査」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/johotsusintokei/whitepaper/r06.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「情報通信白書 令和6年版」（2024年）
                  </a> [PDF: 約25MB]
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・創造性研究</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.jset.gr.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本教育工学会「AI時代の教育実践研究」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.u-tokyo.ac.jp/ja/academics/graduate_schools/education.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    東京大学教育学部「生成AIと批判的思考力に関する研究」（2024年）
                  </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育機関・地域情報</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.city.minato.tokyo.jp/kyouiku/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    港区教育委員会「令和7年度教育方針」（2025年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://openai.com/policies/usage-policies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    OpenAI「Usage Policies」（2024年版）
                  </a> [英語]
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
                  子ども向けAIツール5選：安全に使える創作支援ツール
                </h3>
                <p className="text-sm text-gray-600">
                  小学生でも安全に使えるAIツールを厳選してご紹介
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-family-learning" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  親子で学ぶAI - 家庭での継続学習のポイント
                </h3>
                <p className="text-sm text-gray-600">
                  家族でAIを学ぶ効果的な方法と実践例
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-education-pros-cons" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI教育のメリットとデメリット：バランスの取れた導入のために
                </h3>
                <p className="text-sm text-gray-600">
                  AI教育の光と影を理解し、適切に活用する方法
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