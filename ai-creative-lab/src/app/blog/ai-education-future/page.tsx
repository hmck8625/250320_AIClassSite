import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12">
      {/* 記事ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-2">特集</span>
          <span className="text-gray-500 text-sm">2025年3月15日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AI時代の教育とは？子どもたちに必要な力と親ができるサポート
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
          alt="AI時代の教育とは？"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          AIの急速な発展により、子どもたちが将来必要とするスキルも変化しています。
          本記事では、AI時代に子どもたちが身につけるべき能力と、
          それを育むために家庭でできるサポート方法について解説します。
        </p>
        
        <h2>AI時代に求められる能力とは</h2>
        <p>
          テクノロジーの進化により、単純作業や定型業務はAIに代替される可能性が高まっています。
          そのような時代において、子どもたちには以下のような能力が重要になると考えられます。
        </p>
        
        <ul>
          <li><strong>創造性</strong>：既存の枠組みにとらわれない発想力</li>
          <li><strong>批判的思考力</strong>：情報を分析し、評価する能力</li>
          <li><strong>問題解決能力</strong>：課題を特定し、解決策を見つける力</li>
          <li><strong>コミュニケーション能力</strong>：自分の考えを効果的に伝える力</li>
          <li><strong>協働する力</strong>：多様な人々と協力して目標を達成する能力</li>
          <li><strong>テクノロジーリテラシー</strong>：AIなどの技術を理解し活用する能力</li>
        </ul>
        
        <p>
          これらの能力は、AIが発達しても代替されにくく、むしろAIと共存する社会で
          より価値を発揮するものです。
        </p>
        
        <h2>家庭でできるサポート</h2>
        <p>
          子どもたちの未来に必要な能力を育むために、家庭でできるサポートをいくつか紹介します。
        </p>
        
        <h3>1. 好奇心を大切にする環境づくり</h3>
        <p>
          子どもの「なぜ？」という疑問を大切にし、一緒に考えたり調べたりする姿勢を持ちましょう。
          答えを教えるのではなく、子ども自身が考え、発見する喜びを味わえるようサポートすることが重要です。
        </p>
        
        <h3>2. 創造的な遊びの時間を確保する</h3>
        <p>
          ブロック遊びや描画、工作など、自由に創造できる遊びの時間を確保しましょう。
          決まった答えのない活動を通じて、創造性や問題解決能力が育まれます。
        </p>
        
        <h3>3. 失敗を恐れない姿勢を育む</h3>
        <p>
          チャレンジすることの大切さを伝え、失敗しても大丈夫という安心感を与えましょう。
          失敗から学び、改善していくプロセスこそが重要であることを伝えることが大切です。
        </p>
        
        <h3>4. テクノロジーとの適切な関わり方を教える</h3>
        <p>
          子どもの年齢に応じて、AIを含むテクノロジーを「使いこなす」経験を提供しましょう。
          ただし、使用時間や内容については適切なルールを設け、バランスの取れた関わり方を
          身につけられるよう導くことが重要です。
        </p>
        
        <h3>5. 対話の機会を大切にする</h3>
        <p>
          家族での会話や議論の時間を大切にしましょう。様々なトピックについて
          意見を交わすことで、コミュニケーション能力や批判的思考力が育まれます。
        </p>
        
        <h2>AI創造ラボの取り組み</h2>
        <p>
          AI創造ラボでは、これからの時代に必要な能力を育むためのプログラムを提供しています。
          AIを活用した創作活動を通じて、子どもたちの創造性や問題解決能力、
          テクノロジーリテラシーを育む環境づくりに取り組んでいます。
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
        </div>
      </div>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex justify-between">
        <Button variant="outline">
          <Link href="/blog/ai-tools-for-kids">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/creativity-development">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
