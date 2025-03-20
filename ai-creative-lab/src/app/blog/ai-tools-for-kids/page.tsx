import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12">
      {/* 記事ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">AI教育最新情報</span>
          <span className="text-gray-500 text-sm">2025年3月10日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          子ども向けAIツール5選：安全に使える創作支援ツール
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">著者: AI創造ラボ編集部</span>
          <span>カテゴリー: AI教育最新情報</span>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="子ども向けAIツール5選"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          子どもたちの創造性を育むためのAIツールが次々と登場しています。
          しかし、すべてのAIツールが子どもに適しているわけではありません。
          本記事では、安全性と教育的価値を考慮した、子ども向けのAIツールを5つ紹介します。
        </p>
        
        <h2>1. KidArt AI</h2>
        <p>
          子どもの描いた絵をもとに、AIがそれを発展させたり、アニメーション化したりできるツールです。
          シンプルなインターフェースで操作が簡単なため、小学校低学年の子どもでも使いこなせます。
          有害なコンテンツを生成しないよう、厳格なフィルタリングが施されています。
        </p>
        
        <h2>2. StoryBuddy</h2>
        <p>
          子どもが考えたストーリーの設定やキャラクターをもとに、AIが物語を展開するお手伝いをします。
          「次はどうなると思う？」といった質問を投げかけることで、子どもの想像力を刺激しながら
          物語創作を楽しむことができます。
        </p>
        
        <h2>3. MusicMaker Jr.</h2>
        <p>
          簡単な操作で音楽を作れるAIツールです。子どもが選んだ楽器や雰囲気をもとに、
          AIが曲の構成を提案。子どもはそれを編集したり、自分の声を録音して追加したりできます。
          音楽の基礎知識がなくても、創作の喜びを体験できるツールです。
        </p>
        
        <h2>4. CodePal</h2>
        <p>
          プログラミング学習をサポートするAIツールです。子どもが自然言語で「猫が動くゲームを作りたい」
          などと入力すると、それに合わせたコードの例を示し、解説してくれます。
          つまずいたときには質問することもでき、対話形式で学習を進められます。
        </p>
        
        <h2>5. ScienceExplorer</h2>
        <p>
          科学的な疑問に答えてくれるAIツールです。「なぜ空は青いの？」「恐竜はなぜ絶滅したの？」
          といった質問に、子どもの年齢に合わせた説明をしてくれます。
          また、家庭でできる簡単な科学実験も提案してくれるため、好奇心を実際の体験につなげられます。
        </p>
        
        <h2>AIツールを子どもと一緒に使う際のポイント</h2>
        <p>
          これらのツールは教育的価値が高いですが、使い方によってはAIへの依存や創造性の阻害につながる
          可能性もあります。以下のポイントを意識して、子どもと一緒に活用しましょう。
        </p>
        
        <ul>
          <li><strong>一緒に使う時間を設ける</strong>：特に初めは保護者と一緒に使い、適切な使い方を教えましょう</li>
          <li><strong>使用時間を決める</strong>：長時間の使用は避け、他の活動とのバランスを取りましょう</li>
          <li><strong>AIの限界を教える</strong>：AIは便利なツールであり、すべてを知っているわけではないことを伝えましょう</li>
          <li><strong>創作の主体は子ども自身</strong>：AIはあくまでサポート役であり、アイデアの源泉は子ども自身であることを意識させましょう</li>
        </ul>
        
        <p>
          AI創造ラボでは、これらのツールを活用した創作活動を各コースに取り入れています。
          子どもたちがAIを「使いこなす」経験を通じて、未来を生きる力を育んでいます。
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
                <Link href="/blog/screen-time-balance" className="hover:text-primary">
                  デジタルとリアルのバランス：子どものスクリーンタイムを考える
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年2月10日</p>
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
                <Link href="/blog/ai-education-trends-2025" className="hover:text-primary">
                  2025年のAI教育トレンド：世界の最新事例から学ぶ
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年2月15日</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex justify-between">
        <Button variant="outline">
          <Link href="/blog/creativity-development">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/ai-education-future">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
