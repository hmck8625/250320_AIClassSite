import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  return (
    <div className="container mx-auto py-12">
      {/* 記事ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">生徒インタビュー</span>
          <span className="text-gray-500 text-sm">2025年2月20日</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          生徒インタビュー：中学2年生ユウキくんの成長ストーリー
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">著者: 鈴木 真理（AI創造ラボ広報）</span>
          <span>カテゴリー: 生徒インタビュー</span>
        </div>
      </div>
      
      {/* アイキャッチ画像 */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src="/images/sample/parakeets-9190236_1280.jpg"
          alt="ユウキくんインタビュー"
          fill
          className="object-cover"
        />
      </div>
      
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          AI創造ラボのAIゲームクリエイターコースに通う中学2年生のユウキくん（14歳）に
          インタビューしました。プログラミングが苦手だったユウキくんが、AIを活用して
          ゲーム開発に目覚めるまでの道のりや、創作活動を通じて得た気づきについて
          語ってもらいました。
        </p>
        
        <h2>プログラミングとの出会いと挫折</h2>
        
        <p>
          <strong>――ユウキくんがプログラミングに興味を持ったきっかけは？</strong>
        </p>
        
        <p>
          「小学5年生のとき、学校でプログラミングの授業があって、簡単なゲームを作ったんです。
          自分で作ったキャラクターが動いたときは本当に嬉しくて。それで、もっと本格的なゲームを
          作りたいと思うようになりました。」
        </p>
        
        <p>
          <strong>――最初は順調だったんですか？</strong>
        </p>
        
        <p>
          「いえ、全然…（笑）。小学校の授業ではブロックを組み合わせるだけの簡単なものだったんですが、
          本格的なゲーム開発はプログラミング言語を覚えないといけなくて。
          最初はYouTubeの動画を見ながら独学で頑張ったんですけど、エラーが出ても原因がわからなくて、
          すごく挫折感がありました。」
        </p>
        
        <p>
          <strong>――それでAI創造ラボに入ることにしたんですね。</strong>
        </p>
        
        <p>
          「はい。母が『AIを使ってゲームを作れる教室がある』と教えてくれて。
          正直、最初は半信半疑でした。プログラミングができないのに、ゲームなんて作れるのかなって。
          でも、体験会に参加してみたら、AIを使えば自分のアイデアを形にできることがわかって、
          すごく可能性を感じたんです。」
        </p>
        
        <h2>AIとの出会いが変えたもの</h2>
        
        <p>
          <strong>――AI創造ラボでの学びで、特に印象に残っていることは？</strong>
        </p>
        
        <p>
          「最初の授業で、『AIはあなたの協力者だよ』と先生が言ったことです。
          それまでAIって『人間の仕事を奪うもの』というイメージがあったんですが、
          実際に使ってみると、自分のアイデアを実現するための強力な味方だと感じました。」
        </p>
        
        <p>
          <strong>――具体的にどんなふうにAIを活用していますか？</strong>
        </p>
        
        <p>
          「ゲームのキャラクターデザインや背景画像の作成には画像生成AIを使っています。
          あとは、プログラミングでわからないことがあると、AIに質問して解決策を教えてもらったり、
          簡単なコードを書いてもらったりしています。
          でも、先生からは『AIが書いたコードをそのまま使うんじゃなくて、どうしてそう書くのかを
          理解することが大事』と教わっているので、必ず内容を理解するようにしています。」
        </p>
        
        <h2>初めての作品と成長</h2>
        
        <p>
          <strong>――AI創造ラボで最初に作った作品について教えてください。</strong>
        </p>
        
        <p>
          「『宇宙探検ゲーム』という、主人公が宇宙船に乗って惑星を探検するゲームです。
          各惑星にはミッションがあって、クリアしていくと物語が進む仕組みになっています。
          キャラクターや背景はAIで生成して、プログラミングは基本的な部分は自分で書いて、
          難しい部分はAIにヒントをもらいながら完成させました。」
        </p>
        
        <p>
          <strong>――作品を完成させてみてどうでしたか？</strong>
        </p>
        
        <p>
          「最初は『AIに手伝ってもらったから、本当に自分の作品と言えるのかな』と悩んだんです。
          でも先生が『料理人だってミキサーや電子レンジを使うでしょ。道具を使うのは当たり前。
          大事なのはアイデアと、それを形にする努力だよ』と言ってくれて。
          それからは自信を持って『自分の作品』だと言えるようになりました。」
        </p>
        
        <h2>現在の活動と将来の夢</h2>
        
        <p>
          <strong>――今はどんな作品に取り組んでいるんですか？</strong>
        </p>
        
        <p>
          「今は『エコシティビルダー』というゲームを作っています。プレイヤーが環境に優しい街づくりを
          するシミュレーションゲームで、再生可能エネルギーや緑化などを取り入れながら、
          住民の満足度と環境負荷のバランスを取るゲームです。
          実は学校の総合学習で環境問題について調べていて、それをゲームにしたいと思ったんです。」
        </p>
        
        <p>
          <strong>――将来の夢は？</strong>
        </p>
        
        <p>
          「ゲームクリエイターになりたいです。特に、楽しいだけじゃなくて、プレイした人が何か学べたり、
          考えるきっかけになるようなゲームを作りたいです。
          あと、AIを使ったゲーム開発の方法を、僕みたいにプログラミングが苦手な人にも
          教えられるようになりたいです。AIを使えば、もっと多くの人が自分のアイデアを形にできると思うので。」
        </p>
        
        <h2>保護者の方からのコメント</h2>
        
        <p>
          ユウキくんのお母様からも、コメントをいただきました。
        </p>
        
        <p>
          「息子はもともと想像力が豊かで、頭の中にはたくさんのアイデアがあるのですが、
          それを形にする技術がなくて悩んでいました。プログラミングに挫折したときは本当に落ち込んでいて、
          親としても心配していたんです。
          でも、AI創造ラボに通い始めてからは、自分のアイデアを形にする喜びを知り、
          自信を持って創作活動に取り組むようになりました。
          最近では学校の友達にも自分の作品を見せるようになり、『すごい！』と言われて
          嬉しそうにしている姿を見ると、本当に成長したなと感じます。」
        </p>
        
        <h2>編集後記</h2>
        
        <p>
          インタビューを通して、ユウキくんの創作に対する情熱と、AIという新しいツールを
          自分のものにしていく柔軟さが印象的でした。
          「AIを使うことは、自分の創造性を放棄することではなく、むしろ可能性を広げること」
          というユウキくんの言葉は、AI時代のクリエイティビティの本質を表しているように思います。
        </p>
        
        <p>
          AI創造ラボでは、ユウキくんのように自分のアイデアを形にしたい子どもたちを
          サポートしています。詳しくは、<Link href="/courses" className="text-primary hover:underline">コース紹介ページ</Link>をご覧ください。
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
                <Link href="/blog/winter-workshop-report" className="hover:text-primary">
                  冬休み特別ワークショップレポート：AIで作る未来の街
                </Link>
              </h4>
              <p className="text-sm text-gray-500">2025年2月28日</p>
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
          <Link href="/blog/winter-workshop-report">← 前の記事</Link>
        </Button>
        <Button variant="outline">
          <Link href="/blog/ai-education-trends-2025">次の記事 →</Link>
        </Button>
      </div>
    </div>
  );
}
