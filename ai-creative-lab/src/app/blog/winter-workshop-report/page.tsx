import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12">
      {/* 記事ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-2">教室活動レポート</span>
          <span className="text-gray-500 text-sm">2025年2月28日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          冬休み特別ワークショップレポート：AIで作る未来の街
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">著者: 山田 健太（AI創造ラボ講師）</span>
          <span>カテゴリー: 教室活動レポート</span>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="冬休み特別ワークショップ"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          2024年冬休みに開催した特別ワークショップ「AIで作る未来の街」の様子をレポートします。
          小学3年生から中学2年生までの計18名の生徒が参加し、AIを活用して自分たちが思い描く
          未来の街を創作しました。
        </p>
        
        <h2>ワークショップの目的</h2>
        <p>
          このワークショップでは、以下の3つの目的を設定しました。
        </p>
        
        <ol>
          <li>AIイメージ生成ツールの基本的な使い方を学ぶ</li>
          <li>自分のアイデアをAIに伝えるためのプロンプト（指示文）の書き方を習得する</li>
          <li>生成されたイメージをもとに、未来の街のコンセプトを考え、発表する</li>
        </ol>
        
        <p>
          単にAIに画像を生成させるだけでなく、自分のアイデアを形にするためのツールとして
          AIを活用する経験を提供することを重視しました。
        </p>
        
        <h2>ワークショップの流れ</h2>
        
        <h3>1日目：アイデア出しとAIツールの基本</h3>
        <p>
          初日は、「未来の街」をテーマにしたブレインストーミングから始めました。
          「環境に優しい街」「空飛ぶ車がある街」「水中都市」など、子どもたちから
          様々なアイデアが出されました。
        </p>
        
        <p>
          その後、AIイメージ生成ツール「KidArt AI」の基本的な使い方を学びました。
          安全性を考慮して開発された子ども向けのツールを使用し、簡単なプロンプトで
          イメージを生成する練習を行いました。
        </p>
        
        <h3>2日目：プロンプトの改良と作品制作</h3>
        <p>
          2日目は、より具体的なプロンプトの書き方を学びました。「どんな建物があるか」
          「どんな交通手段があるか」「どんな人々が暮らしているか」など、具体的な要素を
          盛り込むことで、自分のイメージにより近い画像を生成できることを体験しました。
        </p>
        
        <p>
          午後からは、各自が考えた未来の街のコンセプトに基づいて、AIを使って画像を
          生成し、それをもとに作品を制作しました。生成された画像に手描きで要素を
          追加したり、複数の画像を組み合わせたりと、それぞれ工夫を凝らした作品が
          生まれました。
        </p>
        
        <h3>3日目：作品の完成と発表会</h3>
        <p>
          最終日は、作品の仕上げと発表会を行いました。各自が自分の作品について、
          「どんな街なのか」「どんな特徴があるのか」「なぜそのような街を考えたのか」
          を発表しました。
        </p>
        
        <p>
          発表後は、お互いの作品について質問や感想を述べ合い、様々な視点から
          未来の街について考える機会となりました。
        </p>
        
        <h2>子どもたちの作品紹介</h2>
        
        <h3>「空中庭園都市」（小学5年生・女子）</h3>
        <p>
          高層ビルの屋上や壁面に緑があふれる未来の都市を描きました。
          「都会に住んでいても自然を感じられる街にしたい」というコンセプトで、
          建物と植物が共存する美しい景観を表現しています。
        </p>
        
        <h3>「海底ドーム都市」（中学1年生・男子）</h3>
        <p>
          海面上昇による陸地減少を想定し、海底にドーム型の都市を建設するというアイデア。
          ドーム内には公園や学校、住宅があり、海の生き物と共存できる窓や観察デッキも
          設けられています。環境問題への意識の高さが感じられる作品でした。
        </p>
        
        <h3>「AIと人間の共存都市」（小学6年生・男子）</h3>
        <p>
          人間型ロボットと人間が協力して暮らす街を描きました。
          ロボットが重労働を担当する一方で、創造的な仕事や教育は人間が行うという
          役割分担が考えられています。AIと人間の関係性について深く考察した作品でした。
        </p>
        
        <h2>ワークショップを通じて見えたこと</h2>
        <p>
          今回のワークショップを通じて、子どもたちのAIツールへの適応力の高さを改めて
          実感しました。初めて使うツールでも、短時間で基本操作を習得し、自分のアイデアを
          形にするために活用する姿が印象的でした。
        </p>
        
        <p>
          また、AIが生成した画像をそのまま作品とするのではなく、そこから発想を広げ、
          手を加えることで、より独自性のある作品に発展させる創造性も見られました。
          AIはあくまでツールであり、創造の主体は子どもたち自身であることを、
          彼ら自身が体感できたのではないかと思います。
        </p>
        
        <p>
          今後も、AI創造ラボでは、AIを「使いこなす」経験を通じて、子どもたちの創造性や
          問題解決能力を育む活動を続けていきます。次回の特別ワークショップは春休みに
          開催予定です。詳細は追ってお知らせいたします。
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
                <Link href="/blog/student-interview-yuki" className="hover:text-primary">
                  生徒インタビュー：中学2年生ユウキくんの成長ストーリー
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年2月20日</p>
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
        </div>
      </div>
      
      {/* 前後の記事ナビゲーション */}
      <div className="flex justify-between">
        <Button variant="outline">
          <Link href="/blog/creativity-development">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/student-interview-yuki">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
