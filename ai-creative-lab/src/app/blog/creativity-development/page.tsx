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
          <span className="text-gray-500 text-sm">2025年3月5日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          子どもの創造性を育む5つの習慣：日常生活でできること
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">著者: 佐藤 美和（教育心理学者）</span>
          <span>カテゴリー: 保護者向けコラム</span>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="子どもの創造性を育む"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          創造性は、これからの時代を生きる子どもたちにとって重要なスキルです。
          AIが発達する社会では、定型的な作業はAIに代替される可能性が高く、
          人間にしかできない創造的な思考がより価値を持つようになります。
          本記事では、家庭で簡単に取り入れられる、創造性を育む習慣について解説します。
        </p>
        
        <h2>1. 「なぜ？」を大切にする</h2>
        <p>
          子どもは生まれながらに好奇心旺盛で、様々な「なぜ？」を持っています。
          この疑問を大切にし、一緒に考えたり調べたりする時間を持ちましょう。
          すぐに答えを教えるのではなく、「どうしてそう思うの？」「どうやったら確かめられるかな？」
          と問いかけることで、子ども自身の思考力を育みます。
        </p>
        
        <h3>実践のポイント</h3>
        <ul>
          <li>子どもの質問に対して「いい質問だね」と肯定的に反応する</li>
          <li>答えがわからなくても「一緒に調べてみよう」と提案する</li>
          <li>子どもの意見や仮説を否定せず、まずは受け止める</li>
        </ul>
        
        <h2>2. 自由な遊びの時間を確保する</h2>
        <p>
          現代の子どもたちは習い事や勉強で忙しく、自由に遊ぶ時間が減少しています。
          しかし、決まったルールのない自由遊びこそ、創造性を育む重要な機会です。
          特に、積み木やブロック、粘土など、形を自由に変えられる「オープンエンド」な
          おもちゃでの遊びは、創造性を刺激します。
        </p>
        
        <h3>実践のポイント</h3>
        <ul>
          <li>週に数回は、何も予定のない「自由時間」を確保する</li>
          <li>遊びの結果ではなく、プロセスを楽しむことを大切にする</li>
          <li>子どもが集中して遊んでいるときは、不必要に介入しない</li>
        </ul>
        
        <h2>3. 失敗を恐れない環境をつくる</h2>
        <p>
          創造性を発揮するためには、失敗を恐れない姿勢が重要です。
          新しいことに挑戦し、うまくいかなくても、そこから学ぶ経験が創造性を育みます。
          家庭では、失敗しても大丈夫という安心感を与え、挑戦する勇気を育てましょう。
        </p>
        
        <h3>実践のポイント</h3>
        <ul>
          <li>親自身が失敗したときに「次はこうしてみよう」と前向きな姿勢を見せる</li>
          <li>子どもが失敗したときは、その経験から何を学べるかを一緒に考える</li>
          <li>完璧主義にならず、プロセスを評価する言葉かけを心がける</li>
        </ul>
        
        <h2>4. 多様な経験を提供する</h2>
        <p>
          創造性は、様々な経験や知識の組み合わせから生まれます。
          子どもに多様な経験を提供することで、創造的な発想の素材を増やすことができます。
          自然体験、文化体験、異なる世代との交流など、日常生活の中でも様々な経験を
          取り入れましょう。
        </p>
        
        <h3>実践のポイント</h3>
        <ul>
          <li>週末は普段行かない場所に出かけてみる（公園、博物館、自然の中など）</li>
          <li>家族で新しい料理に挑戦するなど、日常に小さな冒険を取り入れる</li>
          <li>地域の行事や世代間交流の機会に積極的に参加する</li>
        </ul>
        
        <h2>5. 対話の時間を大切にする</h2>
        <p>
          家族での対話は、子どもの思考力や表現力を育む重要な機会です。
          食事の時間や寝る前のひとときなど、日常の中で対話の時間を確保しましょう。
          「もしも〜だったら？」といった仮定の質問や、「これをどう思う？」と
          意見を求める問いかけは、子どもの創造的思考を刺激します。
        </p>
        
        <h3>実践のポイント</h3>
        <ul>
          <li>食事の時間はテレビやスマホを消して、会話に集中する時間にする</li>
          <li>「今日あった面白いことは？」など、会話のきっかけとなる質問を用意しておく</li>
          <li>子どもの意見に対して「なるほど、そういう考え方もあるね」と多様な視点を認める</li>
        </ul>
        
        <h2>まとめ：日常の小さな習慣が創造性を育む</h2>
        <p>
          創造性は特別なプログラムだけで育つものではなく、日常生活の中での小さな習慣の
          積み重ねによって育まれます。完璧を目指すのではなく、できることから少しずつ
          取り入れていきましょう。子どもの創造性を育むことは、未来を生きる力を育むことに
          つながります。
        </p>
        
        <p>
          AI創造ラボでは、子どもの創造性を育むためのワークショップや保護者向けセミナーも
          定期的に開催しています。詳しくは、<Link href="/courses" className="text-primary hover:underline">コース紹介ページ</Link>をご覧ください。
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
          <Link href="/blog/ai-tools-for-kids">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/winter-workshop-report">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
