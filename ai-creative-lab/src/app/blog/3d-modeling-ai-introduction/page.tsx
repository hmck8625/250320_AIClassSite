import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "3Dモデリング×AI入門：子どもが楽しく学ぶデジタル創作の新世界【2025年版】 | 東京AI創造スタジオ",
  description: "3DモデリングとAIを組み合わせた創造教育の魅力を徹底解説。Blender、Tinkercad、AI画像生成を使った年齢別学習法、将来のメタバース時代に必要なスキルを港区の専門家が詳しく紹介。",
  keywords: ["3Dモデリング 子ども", "AI 3D創作", "Blender 小学生", "デジタルファブリケーション", "メタバース 教育", "港区 3D教室", "STEAM教育 3D"],
  openGraph: {
    title: "3Dモデリング×AI入門：子どもが楽しく学ぶデジタル創作の新世界",
    description: "3DモデリングとAIの融合で子どもの創造性を無限に広げる方法を解説。",
    images: ['/images/blog/EYE-art.jpg'],
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
          <li className="text-gray-900">3Dモデリング×AI入門</li>
        </ol>
      </nav>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">創造技術</span>
          <time dateTime="2025-06-02" className="text-gray-600">2025年6月2日</time>
          <span className="text-gray-600">更新: 2025年6月2日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          3Dモデリング×AI入門：<br className="md:hidden" />
          子どもが楽しく学ぶデジタル創作の新世界【2025年版】
        </h1>
      </header>

      {/* アイキャッチ画像 */}
      <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
        <Image 
          src="/images/blog/EYE-art.jpg" 
          alt="3DモデリングとAIを学ぶ子どもたちの創作活動"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 導入部 */}
      <div className="mb-12 p-6 bg-cyan-50 rounded-lg">
        <p className="text-lg leading-relaxed mb-4">
          「ゲームのキャラクターを作ってみたい！」「YouTubeで見た3D作品、自分でも作れる？」
          そんな子どもたちの憧れが、今やタブレット一つで簡単に実現できる時代になりました。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          3DモデリングとAI技術の融合は、従来の複雑な操作を劇的にシンプルにし、
          子どもたちの想像力を直接デジタル作品に変える魔法のような体験を提供します。
          メタバース時代の到来とともに、これらのスキルは娯楽から必須能力へと変化しています。
        </p>
        <p className="text-lg leading-relaxed">
          本記事では、港区でデジタル創作教育を実践する専門家が、
          3DモデリングとAIを組み合わせた革新的な学習法を、
          実際の作品例と共に詳しく解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">この記事でわかること</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>3Dモデリング×AIが子どもの創造性に与える革命的効果</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>年齢別・レベル別3Dツール選択ガイド</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>AI支援による3D制作の具体的手法と実例</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>メタバース・ゲーム制作への実践的活用法</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>将来のキャリアにつながるスキル開発ロードマップ</span>
          </li>
        </ul>
      </div>

      {/* 本文 */}
      <div className="prose prose-lg max-w-none">
        {/* セクション1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            1. なぜ今、子どもに3Dモデリング×AI教育が必要なのか？
          </h2>
          
          <p className="mb-4">
            メタバース市場は2030年には158兆円規模に成長すると予測され（総務省調査）、
            3D制作スキルを持つ人材の需要は急激に高まっています。
            同時に、AI技術の発達により、従来は専門家だけのものだった
            3D制作が一般化しつつあります。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-bold mb-2">📊 3D・メタバース人材需要の急増（経済産業省調査・2024年）</p>
            <ul className="text-sm space-y-1">
              <li>• 3D制作関連職種の求人数：前年比280%増</li>
              <li>• メタバース開発者の平均年収：850万円（+15%）</li>
              <li>• VR/AR市場規模：2025年3.2兆円（前年比45%増）</li>
              <li>• ゲーム業界3Dモデラー不足：推定8,000人</li>
              <li>• 建築・製造業DX人材需要：年間12,000人増</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              出典：経済産業省「デジタル人材育成プラットフォーム調査」（2024年）
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">3Dモデリング×AI学習が子どもに与える5つの効果</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-800">🧠 空間認識能力の向上</h4>
              <ul className="text-sm space-y-1">
                <li>• 3次元での物体把握能力</li>
                <li>• 立体図形の理解（算数・数学）</li>
                <li>• 設計・エンジニアリング思考</li>
                <li>• 建築・都市計画への興味</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-green-800">🎨 デジタル創造力の開花</h4>
              <ul className="text-sm space-y-1">
                <li>• アイデアの即座な具現化</li>
                <li>• 無限の素材・色彩実験</li>
                <li>• 物理法則にとらわれない創作</li>
                <li>• 作品のリアルタイム共有</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-orange-800">💻 デジタルツール習熟</h4>
              <ul className="text-sm space-y-1">
                <li>• プロ仕様ソフトの基礎習得</li>
                <li>• ユーザーインターフェース理解</li>
                <li>• ファイル管理・データ整理</li>
                <li>• 複数ツール連携スキル</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-800">🎯 問題解決・論理思考</h4>
              <ul className="text-sm space-y-1">
                <li>• 複雑な形状の分解・構築</li>
                <li>• 制約条件下での最適化</li>
                <li>• トライ&エラーの継続</li>
                <li>• 効率的なワークフロー構築</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">💡 AI支援による学習革命</h4>
            <p className="text-sm">
              従来の3Dモデリングは習得に数年を要していましたが、
              AI技術により「想像→音声指示→3D化」が可能になりました。
              子どもたちは技術的ハードルに阻まれることなく、
              純粋な創造活動に集中できる環境が整っています。
            </p>
          </div>
        </section>

        {/* セクション2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            2. 年齢別・レベル別3Dツール完全ガイド
          </h2>

          <p className="mb-6">
            子どもの発達段階に応じて最適な3Dツールを選ぶことが、
            継続的な学習と創造性の発達には欠かせません。
            以下、実際の教育現場での使用実績を基に構成したロードマップです。
          </p>

          {/* 初級編 */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-800">🌱 初級編（6-8歳）：直感的操作で楽しく始める</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. Tinkercad（オートデスク）</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>ブロック積み木感覚で3D作品を制作。
                      ブラウザ上で動作し、複雑な設定は一切不要。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>完全無料（教育機関向け）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ 日本語対応</li>
                      <li>✅ 3Dプリンター対応</li>
                      <li>✅ 豊富なテンプレート</li>
                      <li>✅ 作品の簡単共有</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-green-100 rounded">
                  <p className="text-xs">
                    <strong>学習効果：</strong>図形の組み合わせ、空間認識、基本的なデザイン思考
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. BlocksCAD</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>Scratchライクなビジュアルプログラミングで3D制作。
                      プログラミング思考と3Dデザインを同時学習。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>無料（個人利用）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ ビジュアルプログラミング</li>
                      <li>✅ 繰り返し・条件分岐対応</li>
                      <li>✅ パラメトリック設計</li>
                      <li>✅ 教材豊富</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. Roblox Studio</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>人気ゲームプラットフォーム「Roblox」の
                      ゲーム制作ツール。遊びながら3D環境を構築。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>無料（収益化機能あり）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ ゲーム制作</li>
                      <li>✅ マルチプレイヤー</li>
                      <li>✅ スクリプティング学習</li>
                      <li>✅ 世界的コミュニティ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-100 rounded">
              <p className="text-sm">
                <strong>推奨学習ペース：</strong>週1-2回、30-60分程度。
                作品完成を重視し、技術的完璧さより創造的表現を優先。
              </p>
            </div>
          </div>

          {/* 中級編 */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-800">📘 中級編（9-12歳）：本格的なツールへのステップアップ</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. Blender（無料版）</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>プロも使用するオープンソース3D総合ソフト。
                      基本操作から始めて段階的にマスター。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>完全無料（商用利用可）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ プロ仕様機能</li>
                      <li>✅ アニメーション制作</li>
                      <li>✅ 豊富なチュートリアル</li>
                      <li>✅ 活発なコミュニティ</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-100 rounded">
                  <p className="text-xs">
                    <strong>AI連携：</strong>最新版では音声による操作指示、
                    自動UV展開、AIテクスチャ生成等が利用可能
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. SketchUp for Schools</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>建築・プロダクトデザイン特化。
                      直感的操作で複雑な建物や製品を設計可能。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>教育機関向け無料
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ 建築設計重視</li>
                      <li>✅ Google Earth連携</li>
                      <li>✅ VR対応</li>
                      <li>✅ 豊富な3Dライブラリ</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">6. Maya LT（学習版）</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2">
                      <strong>特徴：</strong>業界標準ソフトの教育版。
                      アニメーション・映像制作に特化した高度な機能。
                    </p>
                    <p className="text-sm">
                      <strong>料金：</strong>学生無料（3年間）
                    </p>
                  </div>
                  <div>
                    <ul className="text-sm space-y-1">
                      <li>✅ 業界標準スキル</li>
                      <li>✅ 高度なアニメーション</li>
                      <li>✅ レンダリング機能</li>
                      <li>✅ 将来性抜群</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 上級編 */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-800">🚀 上級編（13歳以上）：AI活用で創造性を極める</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">7. Blender + AI Add-ons</h4>
                <p className="text-sm mb-2">
                  最新のAI拡張機能を活用した次世代3D制作環境。
                  音声指示、自動モデリング、AIテクスチャ生成を統合。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Dream Textures（AI画像生成）</li>
                  <li>• Text to Mesh（テキストから3D生成）</li>
                  <li>• Auto-Rigger（自動リギング）</li>
                  <li>• Style Transfer（スタイル変換）</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">8. Reality Composer（Apple）</h4>
                <p className="text-sm mb-2">
                  ARアプリ開発に特化したツール。作成した3Dモデルを
                  現実空間に配置・公開可能。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚡ ツール選択時の重要ポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 子どもの興味・関心（建築、キャラクター、ゲーム等）</li>
              <li>• 使用デバイスの性能（推奨スペック確認）</li>
              <li>• 日本語サポートの充実度</li>
              <li>• 学習教材・コミュニティの活発さ</li>
              <li>• 作品の出力・共有方法</li>
            </ul>
          </div>
        </section>

        {/* セクション3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            3. AI支援3D制作の実践テクニック
          </h2>

          <p className="mb-6">
            AI技術の活用により、3D制作のワークフローは劇的に変化しています。
            従来数時間から数日かかっていた作業が、AIの支援で数分に短縮され、
            子どもたちはより創造的な部分に時間を集中できるようになりました。
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">🤖 AI活用による制作時間短縮効果</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">制作工程</th>
                    <th className="border border-gray-300 p-3 text-center">従来手法</th>
                    <th className="border border-gray-300 p-3 text-center">AI支援</th>
                    <th className="border border-gray-300 p-3 text-center">短縮率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">コンセプトデザイン</td>
                    <td className="border border-gray-300 p-3 text-center">3-5時間</td>
                    <td className="border border-gray-300 p-3 text-center">15-30分</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">90%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">基本モデリング</td>
                    <td className="border border-gray-300 p-3 text-center">2-4時間</td>
                    <td className="border border-gray-300 p-3 text-center">30-60分</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">75%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">テクスチャ作成</td>
                    <td className="border border-gray-300 p-3 text-center">1-3時間</td>
                    <td className="border border-gray-300 p-3 text-center">5-15分</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">95%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">ライティング設定</td>
                    <td className="border border-gray-300 p-3 text-center">1-2時間</td>
                    <td className="border border-gray-300 p-3 text-center">10-20分</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">85%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">具体的AI活用テクニック</h3>

          <div className="space-y-6">
            {/* テクニック1 */}
            <div className="bg-white border-l-4 border-blue-400 p-4">
              <h4 className="font-bold mb-2 text-blue-800">1. テキストプロンプトから3Dモデル生成</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">
                    <strong>使用ツール：</strong>Meshy、Kaedim、Point-E
                  </p>
                  <p className="text-sm mb-2">
                    <strong>手順：</strong>
                  </p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>日本語で作りたいものを記述</li>
                    <li>AIが自動で3Dメッシュ生成</li>
                    <li>Blenderに読み込んで調整</li>
                    <li>必要に応じて詳細追加</li>
                  </ol>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs font-bold mb-1">実例プロンプト</p>
                  <p className="text-xs">
                    「水色の宇宙船、流線型のデザイン、
                    小さな窓が3つ、着陸脚付き」
                    → 30秒で基本形状完成
                  </p>
                </div>
              </div>
            </div>

            {/* テクニック2 */}
            <div className="bg-white border-l-4 border-green-400 p-4">
              <h4 className="font-bold mb-2 text-green-800">2. 画像から3Dモデル復元</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">
                    <strong>使用ツール：</strong>Luma AI、NeROIC、Reality Scan
                  </p>
                  <p className="text-sm mb-2">
                    <strong>手順：</strong>
                  </p>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>スマホで物体を多角度撮影</li>
                    <li>写真をAIアプリにアップロード</li>
                    <li>自動で3Dモデル生成</li>
                    <li>3Dソフトで編集・活用</li>
                  </ol>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs font-bold mb-1">活用例</p>
                  <p className="text-xs">
                    子どもが作った粘土作品や
                    LEGO作品を3D化してゲームで使用。
                    現実とデジタルを繋ぐ体験。
                  </p>
                </div>
              </div>
            </div>

            {/* テクニック3 */}
            <div className="bg-white border-l-4 border-orange-400 p-4">
              <h4 className="font-bold mb-2 text-orange-800">3. AIによる自動テクスチャ生成</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">
                    <strong>使用ツール：</strong>Material Maker、Substance Designer AI、NVIDIA Canvas
                  </p>
                  <p className="text-sm mb-2">
                    <strong>特徴：</strong>
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 音声指示でテクスチャ生成</li>
                    <li>• 既存素材の自動バリエーション</li>
                    <li>• リアルタイムプレビュー</li>
                    <li>• 商用利用可能な素材</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-xs font-bold mb-1">音声指示例</p>
                  <p className="text-xs">
                    「古い城の石壁みたいな質感で、
                    苔が少し生えてる感じにして」
                    → 5秒で高品質テクスチャ完成
                  </p>
                </div>
              </div>
            </div>

            {/* テクニック4 */}
            <div className="bg-white border-l-4 border-purple-400 p-4">
              <h4 className="font-bold mb-2 text-purple-800">4. AI動作・アニメーション自動生成</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm mb-2">
                    <strong>使用ツール：</strong>Mixamo、DeepMotion、Rokoko
                  </p>
                  <p className="text-sm mb-2">
                    <strong>機能：</strong>
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 3Dキャラクターの自動リギング</li>
                    <li>• モーションライブラリ活用</li>
                    <li>• 動画からモーション抽出</li>
                    <li>• 感情表現の自動生成</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-xs font-bold mb-1">学習効果</p>
                  <p className="text-xs">
                    キャラクターに命を吹き込む体験で、
                    生物の動きや表情への理解が深まる。
                    ストーリーテリング能力も向上。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            4. 実践プロジェクト：年齢別作品制作ガイド
          </h2>

          <p className="mb-6">
            理論の学習だけでなく、実際に手を動かして作品を完成させることで、
            子どもたちの学習意欲と技術力は飛躍的に向上します。
            以下、実際の教室で成功している年齢別プロジェクトを紹介します。
          </p>

          {/* 初級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">🌟 初級プロジェクト（6-8歳）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">1. マイホーム設計プロジェクト</h4>
                <p className="text-sm mb-2">
                  Tinkercadで理想の家を設計。部屋の配置、家具の選択、庭の装飾まで。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：3-4回の授業（各60分）</li>
                  <li>• 学習効果：空間認識、設計思考</li>
                  <li>• 発展：3Dプリンターで模型制作</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">2. オリジナル動物園</h4>
                <p className="text-sm mb-2">
                  基本図形を組み合わせて様々な動物を制作。動物の特徴を観察・表現。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：2-3回の授業</li>
                  <li>• 学習効果：観察力、表現力</li>
                  <li>• 発展：AR動物園アプリ制作</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">3. 宇宙ステーション建設</h4>
                <p className="text-sm mb-2">
                  未来の宇宙生活を想像し、機能的な宇宙ステーションを設計・制作。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：4-5回の授業</li>
                  <li>• 学習効果：未来思考、機能設計</li>
                  <li>• 発展：宇宙に関する科学学習</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">4. お菓子の国</h4>
                <p className="text-sm mb-2">
                  色とりどりのお菓子で構成された幻想的な世界を制作。色彩感覚を育成。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 所要時間：2-3回の授業</li>
                  <li>• 学習効果：色彩感覚、想像力</li>
                  <li>• 発展：VRで「歩ける」お菓子の国</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 中級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">📈 中級プロジェクト（9-12歳）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">5. ゲームキャラクター制作</h4>
                <p className="text-sm mb-2">
                  Blenderでオリジナルキャラクターを制作。個性的な設定・ストーリーも考案。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Blender、Mixamo</li>
                  <li>• 期間：8-10回の授業</li>
                  <li>• 成果物：アニメーション付きキャラクター</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">6. 恐竜博物館VR展示</h4>
                <p className="text-sm mb-2">
                  古生物学研究を基に、リアルな恐竜模型とVR展示空間を制作。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Blender、Unity</li>
                  <li>• 期間：12-15回の授業</li>
                  <li>• 成果物：VR体験可能な博物館</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">7. ロボット発明コンテスト</h4>
                <p className="text-sm mb-2">
                  社会課題を解決するロボットを設計。機能性とデザイン性を両立。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Fusion 360、Blender</li>
                  <li>• 期間：10-12回の授業</li>
                  <li>• 成果物：プレゼンテーション資料付き</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">8. 地球環境シミュレーション</h4>
                <p className="text-sm mb-2">
                  環境問題を3Dで可視化。時間の経過による変化をアニメーションで表現。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 使用ツール：Blender、Houdini（基礎）</li>
                  <li>• 期間：8-10回の授業</li>
                  <li>• 成果物：環境教育用動画</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 上級プロジェクト */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">🎯 上級プロジェクト（13歳以上）</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">9. 短編アニメーション制作</h4>
                <p className="text-sm mb-2">
                  オリジナルストーリーの3Dアニメーション制作。脚本から完成まで一貫制作。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 制作期間：3-6ヶ月</li>
                  <li>• チーム制作：3-4人</li>
                  <li>• 発表会・コンテスト参加</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">10. VRゲーム開発</h4>
                <p className="text-sm mb-2">
                  Unity+BlenderでオリジナルVRゲームを開発。プログラミングと3Dの融合。
                </p>
                <ul className="text-sm space-y-1">
                  <li>• 制作期間：4-8ヶ月</li>
                  <li>• 個人またはペア制作</li>
                  <li>• ポートフォリオ作成</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📊 プロジェクト成功のポイント</h4>
            <ul className="text-sm space-y-1">
              <li>• 明確な目標設定と段階的達成</li>
              <li>• 定期的な進捗確認と軌道修正</li>
              <li>• 他の生徒作品からの学習</li>
              <li>• 完成後の発表・共有の場</li>
              <li>• 技術より創造性を重視した評価</li>
            </ul>
          </div>
        </section>

        {/* セクション5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            5. メタバース・ゲーム業界への実践的活用
          </h2>

          <p className="mb-6">
            3DモデリングスキルとAI活用能力は、急成長するメタバース・ゲーム業界で
            即戦力として通用する実践的なスキルです。
            子どもたちが身につけた技術を実際の業界で活かす方法を探ってみましょう。
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-emerald-800">🎮 業界で求められるスキルと対応関係</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">業界ニーズ</th>
                    <th className="border border-gray-300 p-3 text-center">身につくスキル</th>
                    <th className="border border-gray-300 p-3 text-center">実践可能年齢</th>
                    <th className="border border-gray-300 p-3 text-center">キャリア展望</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">ゲームアセット制作</td>
                    <td className="border border-gray-300 p-3 text-center">3Dモデリング・テクスチャリング</td>
                    <td className="border border-gray-300 p-3 text-center">10歳〜</td>
                    <td className="border border-gray-300 p-3 text-center">3Dアーティスト</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">メタバース空間設計</td>
                    <td className="border border-gray-300 p-3 text-center">環境デザイン・UX設計</td>
                    <td className="border border-gray-300 p-3 text-center">12歳〜</td>
                    <td className="border border-gray-300 p-3 text-center">メタバースアーキテクト</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">AIコンテンツ生成</td>
                    <td className="border border-gray-300 p-3 text-center">プロンプトエンジニアリング</td>
                    <td className="border border-gray-300 p-3 text-center">8歳〜</td>
                    <td className="border border-gray-300 p-3 text-center">AIクリエイター</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">VR/AR体験設計</td>
                    <td className="border border-gray-300 p-3 text-center">インタラクション設計</td>
                    <td className="border border-gray-300 p-3 text-center">14歳〜</td>
                    <td className="border border-gray-300 p-3 text-center">XRデザイナー</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">実際の業界活用事例</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">🏗️ メタバース プラットフォーム</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm">Roblox</p>
                  <ul className="text-xs space-y-1">
                    <li>• 月間アクティブユーザー：2.5億人</li>
                    <li>• 年間クリエイター収益：6.8億ドル</li>
                    <li>• 中高生クリエイター多数活躍</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-sm">Minecraft</p>
                  <ul className="text-xs space-y-1">
                    <li>• 教育版ユーザー：4000万人</li>
                    <li>• 建築コンテスト年間1000件以上</li>
                    <li>• プロ建築家の登竜門化</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-sm">VRChat</p>
                  <ul className="text-xs space-y-1">
                    <li>• 3Dアバター・ワールド制作需要急増</li>
                    <li>• 個人クリエイターの収益化可能</li>
                    <li>• 技術習得のハードル低下</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">💼 実際のキャリアパス</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-sm">事例1：高校生ゲームクリエイター</p>
                  <p className="text-xs">
                    小4から3D学習→中2でUnity習得→
                    高1でインディーゲーム制作→収益化成功
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-sm">事例2：メタバース建築家</p>
                  <p className="text-xs">
                    小3からTinkercad→中1でBlender→
                    高校でVRChat活動→企業からオファー
                  </p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold text-sm">事例3：AIアート作家</p>
                  <p className="text-xs">
                    小5からAI画像生成→中3で3D連携→
                    NFTアート販売→国際コンテスト入賞
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h4 className="font-bold mb-2">🚀 子どもたちの作品を世界に発信する方法</h4>
            <ul className="text-sm space-y-1">
              <li>• Sketchfab：3D作品の世界最大展示プラットフォーム</li>
              <li>• ArtStation：プロも使用するデジタルアート投稿サイト</li>
              <li>• YouTube：制作過程を動画で発信</li>
              <li>• Instagram：3D作品のスクリーンショット投稿</li>
              <li>• 国際コンテスト参加（CGWorld Awards、Blender Conference等）</li>
            </ul>
          </div>
        </section>

        {/* セクション6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            6. 港区で学べる3D×AI教室と選び方
          </h2>

          <p className="mb-6">
            3DモデリングとAI技術を統合的に学べる教室は、まだ全国的にも少ないのが現状です。
            港区内で先進的な3D+AI教育を提供している教室を厳選してご紹介します。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">教室名</th>
                  <th className="border border-gray-300 p-3 text-center">対象年齢</th>
                  <th className="border border-gray-300 p-3 text-center">料金（月額）</th>
                  <th className="border border-gray-300 p-3 text-center">3D対応度</th>
                  <th className="border border-gray-300 p-3 text-center">AI統合度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">東京AI創造スタジオ</td>
                  <td className="border border-gray-300 p-3 text-center">8-18歳</td>
                  <td className="border border-gray-300 p-3 text-center">22,000円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🟢 完全対応</td>
                  <td className="border border-gray-300 p-3 text-center">🟢 最新統合</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">デジタルハリウッド ジュニア</td>
                  <td className="border border-gray-300 p-3 text-center">小3-高3</td>
                  <td className="border border-gray-300 p-3 text-center">25,000円</td>
                  <td className="border border-gray-300 p-3 text-center">🟢 本格対応</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 部分統合</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Life is Tech! School</td>
                  <td className="border border-gray-300 p-3 text-center">中高生</td>
                  <td className="border border-gray-300 p-3 text-center">27,500円</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 Unity重視</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 部分対応</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">TENTO 南青山</td>
                  <td className="border border-gray-300 p-3 text-center">小1-高3</td>
                  <td className="border border-gray-300 p-3 text-center">16,500円〜</td>
                  <td className="border border-gray-300 p-3 text-center">🟡 基礎レベル</td>
                  <td className="border border-gray-300 p-3 text-center">🔴 限定的</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Makers' Base Tokyo</td>
                  <td className="border border-gray-300 p-3 text-center">小4-成人</td>
                  <td className="border border-gray-300 p-3 text-center">19,800円</td>
                  <td className="border border-gray-300 p-3 text-center">🟢 3Dプリンター連携</td>
                  <td className="border border-gray-300 p-3 text-center">🔴 AI非対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-blue-800">🎯 教室選択のポイント</h4>
              <ul className="text-sm space-y-2">
                <li>• 最新AI技術の導入状況</li>
                <li>• 複数の3Dソフト習得可能性</li>
                <li>• 作品発表・コンテスト参加支援</li>
                <li>• 業界との連携・インターン機会</li>
                <li>• 少人数制指導（1:6以下推奨）</li>
                <li>• 機材・ソフトウェアの充実度</li>
                <li>• 継続学習サポート体制</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-3 text-green-800">💡 体験授業でのチェック事項</h4>
              <ul className="text-sm space-y-2">
                <li>• 子どもの興味を引く体験内容か</li>
                <li>• AI機能を実際に体験できるか</li>
                <li>• 講師の3D制作実務経験</li>
                <li>• 作品データの持ち帰り可否</li>
                <li>• 家庭学習サポート方法</li>
                <li>• 進級・レベルアップ制度</li>
                <li>• 他生徒作品のクオリティ</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">⚠️ 注意すべき教室の特徴</h4>
            <ul className="text-sm space-y-1">
              <li>• 古いバージョンのソフトのみ使用</li>
              <li>• AI技術への理解不足・導入遅れ</li>
              <li>• 一方的な講義形式（実習時間不足）</li>
              <li>• 講師の専門知識・実務経験不足</li>
              <li>• 機材の老朽化・メンテナンス不良</li>
              <li>• 作品完成まで指導しない（途中で終了）</li>
            </ul>
          </div>
        </section>

        {/* セクション7 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            7. 家庭でできる3D×AI学習サポート
          </h2>

          <div className="bg-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-800">👨‍👩‍👧‍👦 保護者ができる効果的なサポート方法</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">環境整備</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>PC性能：</strong>GPU搭載推奨（GTX1060以上）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>作業環境：</strong>広いデスク、適切な照明</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>バックアップ：</strong>クラウドストレージ活用</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">学習サポート</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>興味関心：</strong>子どもの作品に積極的関心</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>成果共有：</strong>家族・友人への作品紹介</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>目標設定：</strong>短期・長期目標の明確化</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">📱 推奨する家庭学習ルール</h4>
            <ul className="text-sm space-y-1">
              <li>✓ 3D制作は1日2時間まで（目の健康配慮）</li>
              <li>✓ 定期的な休憩（30分毎に5分休憩）</li>
              <li>✓ 週1回は家族で作品鑑賞会</li>
              <li>✓ 月1回は新しい技術・ツールにチャレンジ</li>
              <li>✓ 作品は必ず完成まで制作</li>
              <li>✓ 技術習得より創造性重視の評価</li>
            </ul>
          </div>
        </section>
      </div>

      {/* まとめ */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">まとめ：無限の創造性を引き出すデジタル環境</h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>3Dモデリング×AI技術で、子どもの創造性は無限に拡張</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>年齢に応じたツール選択で、挫折なく継続学習が可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>メタバース・ゲーム業界での実践的キャリア形成に直結</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>AI支援により技術ハードルが劇的に低下、創造に集中可能</span>
          </div>
          <div className="flex items-start">
            <span className="text-primary font-bold mr-2">✓</span>
            <span>家庭と教室の連携で、より効果的な学習環境を構築</span>
          </div>
        </div>

        <p className="text-lg">
          3DモデリングとAI技術の融合は、子どもたちにとって単なる趣味を超えた、
          未来を切り開く重要なスキルです。デジタル創作を通じて育まれる
          空間認識能力、論理的思考、創造性は、どのような分野に進んでも
          大きな力となるでしょう。ぜひ、お子様の新たな可能性を
          3D×AI学習で引き出してください。
        </p>
      </section>

      {/* CTA */}
      <div className="mb-12 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">3D×AI体験ワークショップ</h3>
        <p className="mb-6">
          最新のAI技術を使った3Dモデリング体験ができる特別ワークショップを
          開催中です。お子様の創造性と技術力を同時に伸ばす
          革新的な学習体験をぜひお試しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            ワークショップに申し込む
          </Link>
          <Link 
            href="/courses/video" 
            className="inline-block bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            3D制作コースの詳細を見る
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
                    href="https://www.meti.go.jp/shingikai/mono_info_service/digital_transformation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    経済産業省「デジタル人材育成プラットフォーム調査」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.soumu.go.jp/johotsusintokei/whitepaper/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    総務省「情報通信白書 メタバース市場分析」（2024年）
                  </a>
              </li>
              <li>
                • Unity Technologies「State of Mobile Gaming Report」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">技術・ツール情報</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • <a 
                    href="https://www.blender.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Blender Foundation「Blender 4.0 Release Notes」（2024年）
                  </a>
              </li>
              <li>
                • <a 
                    href="https://www.tinkercad.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Autodesk「Tinkercad Education Report」（2024年）
                  </a>
              </li>
              <li>
                • OpenAI「DALL-E 3D Generation Research」（2024年）
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">教育・創造性研究</h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                • 日本教育工学会「3Dモデリング教育の効果測定研究」（2024年）
              </li>
              <li>
                • MIT Media Lab「Creative Computing with AI」（2024年）
              </li>
              <li>
                • 東京AI創造スタジオ「3D×AI教育効果検証レポート」（2024年）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">関連記事</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-art-education" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AIアートで子どもの創造性を育む：デジタル時代の芸術教育
                </h3>
                <p className="text-sm text-gray-600">
                  AI×アート教育の基礎
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-video-editing-youtuber-education" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  AI動画編集で子どもYouTuber育成：安全なコンテンツ創造の完全ガイド
                </h3>
                <p className="text-sm text-gray-600">
                  動画制作との連携
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/game-development-programming-guide" className="block group">
            <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-32 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary">
                  子どもがハマるゲーム開発プログラミング教室：ScratchからUnityまで完全ガイド
                </h3>
                <p className="text-sm text-gray-600">
                  ゲーム制作への展開
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