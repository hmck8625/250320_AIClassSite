import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12">
      {/* 記事ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">保護者向けコラム</span>
          <span className="text-gray-500 text-sm">2025年2月10日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          デジタルとリアルのバランス：子どものスクリーンタイムを考える
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">著者: 田中 由美（子どもとメディア研究者）</span>
          <span>カテゴリー: 保護者向けコラム</span>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="デジタルとリアルのバランス"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          デジタルツールが子どもたちの生活に深く浸透している現代、保護者の多くが
          「スクリーンタイムをどう管理すべきか」という悩みを抱えています。
          特にAIの発展により、子どもたちが利用できるデジタルコンテンツの質と量が
          飛躍的に向上する中、単純な「制限」だけでは不十分な時代になっています。
          本記事では、デジタルとリアルのバランスを取るための考え方と、
          子どもの発達段階に合わせたアプローチを紹介します。
        </p>
        
        <h2>デジタルネイティブ世代の現実</h2>
        
        <p>
          現在の子どもたちは、生まれた時からデジタル環境に囲まれて育つ
          「デジタルネイティブ」世代です。彼らにとって、スマートフォンやタブレット、
          AIアシスタントは、私たち大人が鉛筆や本に親しんだように、
          自然な存在となっています。
        </p>
        
        <p>
          このような時代において、デジタルツールの使用を過度に制限することは、
          子どもたちが将来必要とするデジタルリテラシーの発達を妨げる可能性があります。
          一方で、無制限に使用させることは、身体的・精神的な健康や、
          リアルな人間関係の構築に悪影響を及ぼす恐れもあります。
        </p>
        
        <p>
          重要なのは「禁止するか、自由にさせるか」という二項対立ではなく、
          「どのように賢く使うか」という視点でデジタルツールと向き合うことです。
        </p>
        
        <h2>年齢別のスクリーンタイムの考え方</h2>
        
        <h3>幼児期（0〜6歳）</h3>
        <p>
          脳の発達が著しい幼児期は、五感を使った体験や人との関わりが特に重要です。
          この時期のスクリーンタイムについては、以下のポイントを意識しましょう。
        </p>
        
        <ul>
          <li><strong>2歳未満</strong>：基本的にスクリーン視聴は推奨されません。ビデオ通話で離れた家族と交流する場合は例外として、短時間にとどめましょう。</li>
          <li><strong>2〜4歳</strong>：1日30分程度を目安に、質の高い教育コンテンツに限定し、必ず保護者と一緒に視聴しましょう。視聴後は、内容について会話することで、受動的な視聴にならないよう工夫します。</li>
          <li><strong>5〜6歳</strong>：1日1時間程度を目安に、創造性を刺激するアプリや教育コンテンツを選びましょう。この年齢でも、保護者が内容を把握し、一緒に楽しむ時間を持つことが大切です。</li>
        </ul>
        
        <h3>小学生（7〜12歳）</h3>
        <p>
          学校生活が始まり、学習や友人関係の中でデジタルツールの必要性が高まる時期です。
          この時期は、以下のポイントを意識しましょう。
        </p>
        
        <ul>
          <li><strong>低学年（7〜9歳）</strong>：1日1〜1.5時間程度を目安に、学習とエンターテイメントのバランスを考えましょう。デジタルツールの使用ルールを子どもと一緒に決め、守ることの大切さを教えます。</li>
          <li><strong>高学年（10〜12歳）</strong>：1日2時間程度を目安に、創造的な活動（プログラミング、デジタルアート制作など）の時間を増やしていきましょう。この年齢では、インターネットの安全な使い方やデジタルシチズンシップについても学ぶ良い機会です。</li>
        </ul>
        
        <h3>中高生（13〜18歳）</h3>
        <p>
          自律性が高まり、学習や社会活動でのデジタルツール活用が不可欠になる時期です。
          この時期は、以下のポイントを意識しましょう。
        </p>
        
        <ul>
          <li><strong>中学生（13〜15歳）</strong>：時間よりも用途に注目し、学習、創作、コミュニケーション、娯楽のバランスを考えましょう。自己管理能力を育てるため、徐々に子ども自身がスクリーンタイムを管理できるよう促します。</li>
          <li><strong>高校生（16〜18歳）</strong>：大人と同様、目的に応じた利用が基本となります。ただし、睡眠や運動、対面での交流時間が確保できているか、定期的に振り返る機会を持ちましょう。</li>
        </ul>
        
        <h2>質を重視したスクリーンタイム</h2>
        
        <p>
          スクリーンタイムを考える際、「時間」だけでなく「質」も重要な要素です。
          同じ2時間のスクリーンタイムでも、その内容によって子どもへの影響は大きく異なります。
        </p>
        
        <h3>消費型 vs. 創造型</h3>
        <p>
          デジタル活動は大きく「消費型」と「創造型」に分けられます。
          動画視聴やゲームプレイなどの「消費型」活動は、適度に楽しむ分には問題ありませんが、
          長時間になると受動的な姿勢を助長する可能性があります。
        </p>
        
        <p>
          一方、プログラミング、デジタルアート制作、ストーリー作成などの「創造型」活動は、
          創造性や問題解決能力を育みます。特にAIツールを活用した創作活動は、
          子どもの発想力を刺激し、新しいアイデアを形にする経験を提供します。
        </p>
        
        <p>
          理想的なスクリーンタイムは、消費型と創造型のバランスが取れていることです。
          特に創造型活動の割合を徐々に増やしていくことで、デジタルツールを
          「使いこなす」力を育てることができます。
        </p>
        
        <h3>社会性を育むデジタル活動</h3>
        <p>
          デジタル活動が孤立した体験になるか、社会性を育む機会になるかも重要な視点です。
          例えば、家族でデジタルコンテンツを一緒に楽しんだり、オンラインで協力して
          プロジェクトに取り組んだりする活動は、コミュニケーション能力や協調性を
          育む機会となります。
        </p>
        
        <p>
          AI創造ラボでは、子どもたちがAIツールを使って創作活動を行う際も、
          グループでのディスカッションや作品の発表会を取り入れることで、
          デジタルとリアルのコミュニケーションを融合させた学びを提供しています。
        </p>
        
        <h2>家庭でできるバランスの取り方</h2>
        
        <h3>1. 「テクノロジーフリーゾーン」を設ける</h3>
        <p>
          家庭内の特定の場所（食卓など）や時間帯（食事時、就寝前1時間など）を
          「テクノロジーフリーゾーン」として設定しましょう。これにより、家族の会話や
          直接的なコミュニケーションの時間を確保できます。
        </p>
        
        <h3>2. 「デジタルデトックスデー」を取り入れる</h3>
        <p>
          週末の1日や月に1回など、家族全員でデジタル機器から離れる日を設けましょう。
          自然の中での活動、ボードゲーム、読書など、スクリーンを使わない活動を
          家族で楽しむことで、リアルな体験の豊かさを再認識できます。
        </p>
        
        <h3>3. 子どもと一緒にルールを作る</h3>
        <p>
          スクリーンタイムのルールは、子どもと一緒に話し合って決めることが効果的です。
          「なぜルールが必要なのか」を理解し、自分で考えたルールであれば、
          子どもも主体的に守ろうとする意識が高まります。
        </p>
        
        <h3>4. 大人も模範を示す</h3>
        <p>
          子どもの行動に最も影響を与えるのは、大人の姿勢です。
          保護者自身もデジタル機器の使い方に気を配り、食事中や会話中にスマホを
          見ないなど、バランスの取れた使用を心がけましょう。
        </p>
        
        <h3>5. デジタルの「なぜ」と「どのように」を教える</h3>
        <p>
          単に時間を制限するだけでなく、「このアプリはどのような目的で使うのか」
          「どのように使えば効果的か」といった点を子どもと話し合いましょう。
          目的意識を持ってデジタルツールを使う習慣が身につくと、
          無目的な「時間つぶし」が減少します。
        </p>
        
        <h2>まとめ：バランスの取れたデジタルライフを目指して</h2>
        
        <p>
          デジタルツールは、使い方次第で子どもの可能性を広げる強力な味方にも、
          発達を妨げる障壁にもなり得ます。重要なのは、デジタルとリアルの体験を
          対立するものとしてではなく、相互に補完し合うものとして捉えることです。
        </p>
        
        <p>
          AI創造ラボでは、子どもたちがAIなどの最新テクノロジーを創造的に活用する経験と、
          リアルな対話や協働を通じた学びを組み合わせたプログラムを提供しています。
          デジタルネイティブ世代の子どもたちが、テクノロジーを「使いこなす」力と、
          人間らしい感性や創造性のバランスを育むお手伝いをしています。
        </p>
        
        <p>
          詳しくは、<Link href="/courses" className="text-primary hover:underline">コース紹介ページ</Link>をご覧ください。
          また、<Link href="/trial" className="text-primary hover:underline">無料体験会</Link>も定期的に開催していますので、
          ぜひお気軽にご参加ください。
        </p>
      </div>
      
      {/* 関連記事 */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-40 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">記事画像</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">
                <Link href="/blog/ai-education-future" className="hover:text-primary">
                  AI時代の教育とは？子どもたちに必要な力と親ができるサポート
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年3月15日</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-40 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">記事画像</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">
                <Link href="/blog/creativity-development" className="hover:text-primary">
                  子どもの創造性を育む5つの習慣：日常生活でできること
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年3月5日</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-40 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">記事画像</p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold mb-2">
                <Link href="/blog/ai-tools-for-kids" className="hover:text-primary">
                  子ども向けAIツール5選：安全に使える創作支援ツール
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年3月10日</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex justify-between">
        <Button variant="outline">
          <Link href="/blog/ai-education-trends-2025">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/ai-education-future">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
