import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

export const metadata = {
  title: '子どもの創造性を育む5つの習慣：日常生活でできること | AI創造ラボ',
  description: 'AI時代を生きる子どもたちの創造性を育むための、日常生活で実践できる5つの簡単な習慣を紹介します。オープンクエスチョン、リパーパス、失敗歓迎の文化など、忙しい親でも無理なく取り入れられる方法を解説。',
  keywords: '子どもの創造性, 創造力育成, 日常習慣, AI時代の教育, 親子コミュニケーション, 創造的思考',
  openGraph: {
    title: '子どもの創造性を育む5つの習慣：日常生活でできること',
    description: 'AI時代を生きる子どもたちの創造性を育むための、日常生活で実践できる5つの簡単な習慣を紹介します。',
    images: [{ url: '/images/sample/top/image_boy_idea.jpg' }],
  }
};

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* 記事ヘッダー */}
      <div className="mb-10">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-md mr-3 font-medium">保護者向けコラム</span>
          <span className="text-gray-600 text-sm">2025年3月5日</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          子どもの創造性を育む5つの習慣：日常生活でできること
        </h1>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-4 font-medium">著者: 佐藤 美和（教育心理学者）</span>
          <Link href="/blog/category/ai-education" className="text-primary hover:underline">
            カテゴリー: 保護者向けコラム
          </Link>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <Image 
          src="/images/sample/top/image_boy_idea.jpg"
          alt="子どもの創造性を育む5つの習慣"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <article className="prose prose-lg md:prose-xl max-w-none mb-16">
        <p className="text-xl leading-relaxed mb-8">
          創造性は、AI時代を生きる子どもたちにとって最も重要なスキルの一つと言われています。しかし、「創造性を育む」と聞くと、特別な才能が必要だったり、専門的な教育が必要だったりするように感じる方も多いでしょう。
        </p>
        
        <p className="text-xl leading-relaxed mb-8">
          実は、日常生活の中で実践できる簡単な習慣によって、子どもの創造的思考力は驚くほど伸ばすことができます。本記事では、忙しい親でも無理なく取り入れられる、創造性を育む5つの日常習慣をご紹介します。
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">1. 「オープンクエスチョン」を日常会話に取り入れる</h2>
        
        <div className="bg-amber-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-amber-800">習慣の説明</h3>
          <p className="mb-4">
            子どもとの会話で、「はい」「いいえ」で答えられる質問（クローズドクエスチョン）ではなく、考えを広げる質問（オープンクエスチョン）を意識的に増やしましょう。
          </p>
          
          <h4 className="text-xl font-semibold mb-3 text-amber-700">実践のポイント</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>「これは何色？」ではなく「この絵について教えてくれる？」</li>
            <li>「楽しかった？」ではなく「今日の一番面白かったことは？」</li>
            <li>「正解は何？」ではなく「他にどんな可能性があると思う？」</li>
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-amber-700">効果</h4>
          <p>
            答えが一つに定まらない質問は、子どもの思考を広げ、複数の視点から考える力を養います。また、自分の考えを言語化するプロセスを通じて、創造的思考力と表現力が同時に育まれます。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">2. 「作り変える」遊びを取り入れる</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">習慣の説明</h3>
          <p className="mb-4">
            既存のものを新しい目的や方法で使う「リパーパス」の考え方を、遊びの中に取り入れましょう。
          </p>
          
          <h4 className="text-xl font-semibold mb-3 text-blue-700">実践のポイント</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>段ボールやペットボトルなどの日用品を使って何か作る</li>
            <li>おもちゃのパーツを組み合わせて新しいものを創造する</li>
            <li>絵本やアニメのストーリーの続きや別バージョンを一緒に考える</li>
            <li>料理のレシピを子どもと一緒にアレンジする</li>
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-blue-700">効果</h4>
          <p>
            既存のものに新しい価値や意味を見出す経験は、固定観念にとらわれない柔軟な思考を育みます。また、限られたリソースで新しい価値を生み出す力は、将来のイノベーションの基礎となります。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">3. 「失敗歓迎」の文化を家庭に作る</h2>
        
        <div className="bg-green-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-green-800">習慣の説明</h3>
          <p className="mb-4">
            失敗を恥じるものではなく、学びの機会として積極的に捉える姿勢を家族で共有しましょう。
          </p>
          
          <h4 className="text-xl font-semibold mb-3 text-green-700">実践のポイント</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>親自身が新しいことに挑戦する姿を見せる</li>
            <li>失敗したときは「次はどうすれば良いと思う？」と前向きな対話を促す</li>
            <li>家族で「今週のナイストライ（良い挑戦）」を共有する時間を作る</li>
            <li>結果より過程を褒める言葉かけを増やす</li>
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-green-700">効果</h4>
          <p>
            失敗を恐れない環境では、子どもは大胆な発想や冒険的な試みに躊躇しなくなります。創造性の本質は既存の枠を超えることであり、そのためには「間違ってもいい」という安心感が不可欠です。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">4. デジタルとアナログを融合させた創作活動を行う</h2>
        
        <div className="bg-purple-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-purple-800">習慣の説明</h3>
          <p className="mb-4">
            最新のデジタルツール（AIを含む）と伝統的な手法を組み合わせた創作活動を取り入れましょう。
          </p>
          
          <h4 className="text-xl font-semibold mb-3 text-purple-700">実践のポイント</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>AIで生成した物語のイラストを手描きで描く</li>
            <li>自然の中で集めた素材（葉っぱ、石など）とデジタル写真を組み合わせたコラージュを作る</li>
            <li>音楽アプリで作った曲に合わせて、踊りや演劇を創作する</li>
            <li>プログラミングで動きを付けられる手作りのおもちゃを作る</li>
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-purple-700">効果</h4>
          <p>
            テクノロジーと従来の創作手法の両方に触れることで、ツールに依存しない本質的な創造力が育まれます。また、異なる領域を横断する経験は、分野を超えたイノベーションの素地となります。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">5. 「考える時間」と「ボーっとする時間」を大切にする</h2>
        
        <div className="bg-rose-50 p-6 rounded-lg my-6 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-rose-800">習慣の説明</h3>
          <p className="mb-4">
            常に何かをしている「忙しさ」から解放され、考えをめぐらせたり、何もせずぼんやりしたりする時間を意識的に作りましょう。
          </p>
          
          <h4 className="text-xl font-semibold mb-3 text-rose-700">実践のポイント</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>食事時はスマホやテレビを消し、会話や思考に集中する</li>
            <li>就寝前の10分間を「今日考えたこと」を振り返る時間にする</li>
            <li>週末は意図的にスケジュールを空け、自由な発想の時間を確保する</li>
            <li>自然の中でのんびり過ごす時間を定期的に持つ</li>
          </ul>
          
          <h4 className="text-xl font-semibold mb-3 text-rose-700">効果</h4>
          <p>
            常に外部からの刺激にさらされていると、自分自身の内側から生まれるアイデアに気づきにくくなります。「何もしない時間」こそ、脳が新しい接続を作り、創造的なひらめきが生まれる貴重な機会なのです。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">実践のためのアドバイス</h2>
        
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
          <h3 className="text-2xl font-bold mb-5 text-gray-800">これらの習慣を無理なく日常に取り入れるためのコツをいくつかご紹介します。</h3>
          
          <h4 className="text-xl font-bold mb-2 text-gray-700">1. 完璧を目指さない</h4>
          <p className="mb-4">
            毎日すべての習慣を実践する必要はありません。週に2〜3回、短い時間から始めても十分効果があります。
          </p>
          
          <h4 className="text-xl font-bold mb-2 text-gray-700">2. 子どもの興味に合わせる</h4>
          <p className="mb-4">
            子どもが特に関心を示すテーマや活動を中心に、創造的な要素を加えていくのが効果的です。
          </p>
          
          <h4 className="text-xl font-bold mb-2 text-gray-700">3. 家族全体で楽しむ</h4>
          <p className="mb-4">
            創造性を育む活動は、家族全員で楽しめるものが理想的です。親自身も創造的な思考を楽しむ姿勢を見せることで、子どもの意欲は高まります。
          </p>
          
          <h4 className="text-xl font-bold mb-2 text-gray-700">4. 日常の中に見つける</h4>
          <p>
            特別なイベントや活動を新たに追加するのではなく、すでに行っている日常活動（食事の準備、買い物、通学路など）の中に創造的な要素を見つけるよう心がけましょう。
          </p>
        </div>
        
        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800">まとめ：小さな習慣が大きな違いを生む</h2>
        <p className="mb-4">
          創造性は一朝一夕で身につくものではなく、日々の小さな経験の積み重ねによって育まれます。完璧を目指すのではなく、できることから少しずつ始めてみましょう。
        </p>
        
        <p className="mb-4">
          子どもの創造性を育むプロセスは、大人にとっても新しい発見や喜びをもたらしてくれるはずです。親子で共に創造する時間を楽しみながら、AI時代に必要不可欠な創造的思考力を育んでいきましょう。
        </p>
        
        <p className="font-bold text-lg mt-8">
          最も重要なのは、創造性を特別なものではなく、日常の中に溶け込んだ自然な「習慣」として位置づけることです。そうすることで、子どもたちは創造することの喜びを内在化し、生涯にわたって創造的に考え、行動する力を身につけていくでしょう。
        </p>
      </article>
      
      {/* 関連記事 */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">関連記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/parakeets-9190236_1280.jpg"
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
                src="/images/sample/top/image_game_icon.jpg"
                alt="スクリーンタイム"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-3 line-clamp-2">
                <Link href="/blog/screen-time-balance" className="hover:text-primary transition-colors">
                  デジタルとリアルのバランス：子どものスクリーンタイムを考える
                </Link>
              </h4>
              <p className="text-sm text-gray-600 mb-3">2025年2月10日</p>
              <p className="text-gray-700 line-clamp-3">
                子どものスクリーンタイムの適切な管理方法と、デジタル体験とリアル体験のバランスの取り方について考察します。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gray-200 relative">
              <Image 
                src="/images/sample/top/image_art_icon.jpg"
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
      <section className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">子どもの創造性を育むワークショップに参加しませんか？</h3>
        <p className="mb-6 text-lg">
          AI創造ラボでは、子どもたちの創造性を育むための体験型ワークショップを定期的に開催しています。
          本記事で紹介した習慣を実践的に学べる機会です。ぜひお子さまと一緒にご参加ください。
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg">
            <Link href="/courses">コースを見る</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 text-lg">
            <Link href="/trial">無料体験に申し込む</Link>
          </Button>
        </div>
      </section>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/ai-tools-for-kids" className="flex items-center">
            <span className="mr-2">←</span> 前の記事
          </Link>
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog/winter-workshop-report" className="flex items-center">
            次の記事 <span className="ml-2">→</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
