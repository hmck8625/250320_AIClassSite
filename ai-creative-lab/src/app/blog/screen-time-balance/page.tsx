import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'デジタルとリアルのバランス：子どものスクリーンタイムを考える | AI創造ラボ',
  description: 'AI時代における子どものスクリーンタイム管理の考え方。年齢別のアプローチと質を重視したデジタル活動、家庭でできるバランスの取り方を解説します。単なる時間制限ではなく、デジタルとリアルを融合させた健全な発達の支援方法をご紹介。',
  keywords: 'スクリーンタイム, デジタルバランス, 子育て, AI時代の教育, デジタルリテラシー, メディアリテラシー, 親子コミュニケーション',
  openGraph: {
    title: 'デジタルとリアルのバランス：子どものスクリーンタイムを考える',
    description: 'AI時代における子どものスクリーンタイム管理の考え方と、デジタルとリアルを融合させた健全な子育てのヒント。',
    images: [{ url: '/images/blog/EYE-screen-time-balance.jpg' }],
  }
};

export default function ScreenTimeBalancePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">保護者向けコラム</span>
          <span className="text-gray-600 text-sm">2025年2月10日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          デジタルとリアルのバランス：子どものスクリーンタイムを考える
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: 田中 由美（子どもとメディア研究者）</span>
          <Link href="/blog/category/parents-column" className="text-primary hover:underline">
            カテゴリー: 保護者向けコラム
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/blog/EYE-screen-time-balance.jpg"
          alt="デジタルとリアルのバランス：子どものスクリーンタイムを考える"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg md:prose-xl max-w-none mb-16">
        <p className="text-xl leading-relaxed mb-8">
          デジタルツールが子どもたちの生活に深く浸透している現代、保護者の多くが「スクリーンタイムをどう管理すべきか」という悩みを抱えています。特にAIの発展により、子どもたちが利用できるデジタルコンテンツの質と量が飛躍的に向上する中、単純な「制限」だけでは不十分な時代になっています。
        </p>
        
        <p className="text-xl leading-relaxed mb-8">
          本記事では、デジタルとリアルのバランスを取るための考え方と、子どもの発達段階に合わせたアプローチを紹介します。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">デジタルネイティブ世代の現実</h2>
        
        <div className="bg-cyan-50 p-6 rounded-lg my-6 shadow-sm">
          <p className="mb-4">
            現在の子どもたちは、生まれた時からデジタル環境に囲まれて育つ「デジタルネイティブ」世代です。彼らにとって、スマートフォンやタブレット、AIアシスタントは、私たち大人が鉛筆や本に親しんだように、自然な存在となっています。
          </p>
          
          <p className="mb-4">
            このような時代において、デジタルツールの使用を過度に制限することは、子どもたちが将来必要とするデジタルリテラシーの発達を妨げる可能性があります。一方で、無制限に使用させることは、身体的・精神的な健康や、リアルな人間関係の構築に悪影響を及ぼす恐れもあります。
          </p>
          
          <p className="font-medium text-cyan-800">
            重要なのは「禁止するか、自由にさせるか」という二項対立ではなく、「どのように賢く使うか」という視点でデジタルツールと向き合うことです。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">年齢別のスクリーンタイムの考え方</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">幼児期（0〜6歳）</h3>
          <p className="mb-4">
            脳の発達が著しい幼児期は、五感を使った体験や人との関わりが特に重要です。この時期のスクリーンタイムについては、以下のポイントを意識しましょう。
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong className="text-blue-700">2歳未満</strong>：基本的にスクリーン視聴は推奨されません。ビデオ通話で離れた家族と交流する場合は例外として、短時間にとどめましょう。</li>
            <li><strong className="text-blue-700">2〜4歳</strong>：1日30分程度を目安に、質の高い教育コンテンツに限定し、必ず保護者と一緒に視聴しましょう。視聴後は、内容について会話することで、受動的な視聴にならないよう工夫します。</li>
            <li><strong className="text-blue-700">5〜6歳</strong>：1日1時間程度を目安に、創造性を刺激するアプリや教育コンテンツを選びましょう。この年齢でも、保護者が内容を把握し、一緒に楽しむ時間を持つことが大切です。</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4 text-blue-800">小学生（7〜12歳）</h3>
          <p className="mb-4">
            学校生活が始まり、学習や友人関係の中でデジタルツールの必要性が高まる時期です。この時期は、以下のポイントを意識しましょう。
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong className="text-blue-700">低学年（7〜9歳）</strong>：1日1〜1.5時間程度を目安に、学習とエンターテイメントのバランスを考えましょう。デジタルツールの使用ルールを子どもと一緒に決め、守ることの大切さを教えます。</li>
            <li><strong className="text-blue-700">高学年（10〜12歳）</strong>：1日2時間程度を目安に、創造的な活動（プログラミング、デジタルアート制作など）の時間を増やしていきましょう。この年齢では、インターネットの安全な使い方やデジタルシチズンシップについても学ぶ良い機会です。</li>
          </ul>
          
          <h3 className="text-2xl font-bold mb-4 text-blue-800">中高生（13〜18歳）</h3>
          <p className="mb-4">
            自律性が高まり、学習や社会活動でのデジタルツール活用が不可欠になる時期です。この時期は、以下のポイントを意識しましょう。
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-blue-700">中学生（13〜15歳）</strong>：時間よりも用途に注目し、学習、創作、コミュニケーション、娯楽のバランスを考えましょう。自己管理能力を育てるため、徐々に子ども自身がスクリーンタイムを管理できるよう促します。</li>
            <li><strong className="text-blue-700">高校生（16〜18歳）</strong>：大人と同様、目的に応じた利用が基本となります。ただし、睡眠や運動、対面での交流時間が確保できているか、定期的に振り返る機会を持ちましょう。</li>
          </ul>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">質を重視したスクリーンタイム</h2>
        
        <div className="bg-purple-50 p-6 rounded-lg my-6 shadow-sm">
          <p className="mb-6">
            スクリーンタイムを考える際、「時間」だけでなく「質」も重要な要素です。同じ2時間のスクリーンタイムでも、その内容によって子どもへの影響は大きく異なります。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-purple-800">消費型 vs. 創造型</h3>
          <p className="mb-4">
            デジタル活動は大きく「消費型」と「創造型」に分けられます。動画視聴やゲームプレイなどの「消費型」活動は、適度に楽しむ分には問題ありませんが、長時間になると受動的な姿勢を助長する可能性があります。
          </p>
          
          <p className="mb-4">
            一方、プログラミング、デジタルアート制作、ストーリー作成などの「創造型」活動は、創造性や問題解決能力を育みます。特にAIツールを活用した創作活動は、子どもの発想力を刺激し、新しいアイデアを形にする経験を提供します。
          </p>
          
          <p className="mb-6 font-medium text-purple-800">
            理想的なスクリーンタイムは、消費型と創造型のバランスが取れていることです。特に創造型活動の割合を徐々に増やしていくことで、デジタルツールを「使いこなす」力を育てることができます。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-purple-800">社会性を育むデジタル活動</h3>
          <p className="mb-4">
            デジタル活動が孤立した体験になるか、社会性を育む機会になるかも重要な視点です。例えば、家族でデジタルコンテンツを一緒に楽しんだり、オンラインで協力してプロジェクトに取り組んだりする活動は、コミュニケーション能力や協調性を育む機会となります。
          </p>
          
          <p>
            AI創造ラボでは、子どもたちがAIツールを使って創作活動を行う際も、グループでのディスカッションや作品の発表会を取り入れることで、デジタルとリアルのコミュニケーションを融合させた学びを提供しています。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">家庭でできるバランスの取り方</h2>
        
        <div className="bg-green-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-green-800">1. 「テクノロジーフリーゾーン」を設ける</h3>
          <p className="mb-6">
            家庭内の特定の場所（食卓など）や時間帯（食事時、就寝前1時間など）を「テクノロジーフリーゾーン」として設定しましょう。これにより、家族の会話や直接的なコミュニケーションの時間を確保できます。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-green-800">2. 「デジタルデトックスデー」を取り入れる</h3>
          <p className="mb-6">
            週末の1日や月に1回など、家族全員でデジタル機器から離れる日を設けましょう。自然の中での活動、ボードゲーム、読書など、スクリーンを使わない活動を家族で楽しむことで、リアルな体験の豊かさを再認識できます。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-green-800">3. 子どもと一緒にルールを作る</h3>
          <p className="mb-6">
            スクリーンタイムのルールは、子どもと一緒に話し合って決めることが効果的です。「なぜルールが必要なのか」を理解し、自分で考えたルールであれば、子どもも主体的に守ろうとする意識が高まります。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-green-800">4. 大人も模範を示す</h3>
          <p className="mb-6">
            子どもの行動に最も影響を与えるのは、大人の姿勢です。保護者自身もデジタル機器の使い方に気を配り、食事中や会話中にスマホを見ないなど、バランスの取れた使用を心がけましょう。
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-green-800">5. デジタルの「なぜ」と「どのように」を教える</h3>
          <p>
            単に時間を制限するだけでなく、「このアプリはどのような目的で使うのか」「どのように使えば効果的か」といった点を子どもと話し合いましょう。目的意識を持ってデジタルツールを使う習慣が身につくと、無目的な「時間つぶし」が減少します。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">まとめ：バランスの取れたデジタルライフを目指して</h2>
        
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
          <p className="mb-4">
            デジタルツールは、使い方次第で子どもの可能性を広げる強力な味方にも、発達を妨げる障壁にもなり得ます。重要なのは、デジタルとリアルの体験を対立するものとしてではなく、相互に補完し合うものとして捉えることです。
          </p>
          
          <p className="mb-4">
            AI創造ラボでは、子どもたちがAIなどの最新テクノロジーを創造的に活用する経験と、リアルな対話や協働を通じた学びを組み合わせたプログラムを提供しています。デジタルネイティブ世代の子どもたちが、テクノロジーを「使いこなす」力と、人間らしい感性や創造性のバランスを育むお手伝いをしています。
          </p>
        </div>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-education-future.jpg"
                alt="AI時代の教育"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-education-future" className="hover:text-primary transition-colors">
                  AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月15日</p>
              <p className="text-gray-700 line-clamp-3">
                AI時代に子どもたちが身につけるべき能力と、それを育むために親ができるサポートについて解説します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-creativity-development.jpg"
                alt="子どもの創造性"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/creativity-development" className="hover:text-primary transition-colors">
                  子どもの創造性を育む5つの習慣：日常生活でできること
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月5日</p>
              <p className="text-gray-700 line-clamp-3">
                AI時代を生きる子どもたちの創造性を育むための、日常生活で実践できる5つの簡単な習慣を紹介します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/blog/EYE-ai-tools-for-kids.jpg"
                alt="子ども向けAIツール"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/ai-tools-for-kids" className="hover:text-primary transition-colors">
                  子ども向けAIツール5選：安全に使える創作支援ツール
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年3月10日</p>
              <p className="text-gray-700 line-clamp-3">
                子どもが安全に使えるAI創作支援ツールを厳選して紹介。創造性を育みながらテクノロジーに親しめます。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-teal-100 to-cyan-100 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">デジタルとリアルを融合させた子どもの学びを体験しませんか？</h3>
        <p className="mb-6 text-lg">
          AI創造ラボでは、最新テクノロジーの創造的な活用と、対面でのコミュニケーションを大切にした学びの場を提供しています。
          子どもたちがバランスの取れたデジタルスキルを身につけ、創造性を発揮できるよう支援します。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg">
            <Link href="/courses">コースを見る</Link>
          </Button>
          <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
        </div>
      </section>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-education-trends-2025" className="flex items-center">
            <span className="mr-2">←</span> 前の記事：2025年のAI教育トレンド
          </Link>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-education-future" className="flex items-center">
            次の記事：AI時代の教育とは <span className="ml-2">→</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
